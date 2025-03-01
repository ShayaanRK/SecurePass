<template>
    <div>
      <input type="file" @change="handleFileUpload" />
      <div v-if="fileContent">
        <h3>Uploaded File Content:</h3>
        <pre>{{ fileContent }}</pre>
        <button @click="fileContent = ''">Clear</button>
        <button @click="checkData">Check data</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FileUpload',
    data() {
      return {
        fileContent: '',
        site: '',
        password: '',
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.fileContent = e.target.result;
            this.parseFileContent(this.fileContent);
          };
          reader.readAsText(file);
        }
      },
      parseFileContent(content) {
        const lines = content.split('\n');
        lines.forEach(line => {
            const [key, value] = line.split(':');
            if (key && value) {
                this.site = key;
                this.password = value;
            }
        });
      },
        checkData() {
            console.log(this.fileContent);
            console.log(this.site, this.password);
        },
    }
  };
  </script>
  
  <style scoped>
  input[type="file"] {
    margin-bottom: 20px;
  }
  </style>