<template>
    <div>
      <input type="file" @change="handleFileUpload" />
      <div v-if="fileContent">
        <h3>Uploaded File Content:</h3>
        <pre>{{ fileContent }}</pre>
        <button @click="fileContent = ''">Clear</button>
        <button @click="checkData">Check Data</button>
        <button @click="addPassword">Add Password</button>
        <button @click="downloadFile">Download File</button>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'FileUpload',
    data() {
      return {
        fileContent: '',
        parsedData: {},
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
                this.parsedData[key.trim()] = value.trim();
            }
        });
      },
      checkData() {
        console.log(this.parsedData);
        console.log(this.site + ' ' + this.password);
      },
      addPassword() {
       for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
          if (!this.parsedData[key]) {
            this.parsedData[key] = value;
            this.updateFileContent();
          }
        }
      },
      updateFileContent() {
        this.fileContent = Object.entries(this.parsedData)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n');
      },
      downloadFile() {
        const blob = new Blob([this.fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'MySecurePassUpdated.txt';
        a.click();
      },
    }
  };
  </script>
  
  <style scoped>
  input[type="file"] {
    margin-bottom: 20px;
  }
  </style>