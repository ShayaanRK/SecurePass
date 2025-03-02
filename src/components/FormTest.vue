<template>
  <div>
    <div>
      <label for="length">Site name:</label>
      <input type="text" v-model="siteName" required />
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="length">Password Length:</label>#
        <input type="number" v-model="length" min="6" max="30" required />
        <button type="submit">Generate Password</button>
        <button type="button" @click="clearStorage">clear storage</button>
      </form>
    </div>

    <div v-if="password">
      <h3>Generated Password:</h3>
      <p>{{ password }} {{ siteName }} </p>
      <button @click="handleDownload">Download Password</button>
      <button @click="addPassword">Add Password</button>
    </div>
  </div>
</template>

<script>
import { generatePassword } from '../utils/passwordGenerator';
import { downloadPassword } from '@/utils/fileDownloader';

export default {
  name: 'FormTest',
  data() {
    return {
      length: 12,
      password: '',
      siteName: 'test',
    };
  },
  methods: {
    handleSubmit() {
      const newPassword = generatePassword(this.length);
      this.password = newPassword;
    },
    handleDownload() {
      downloadPassword(this.password, this.site);

    },
    addPassword() {
      localStorage.setItem(this.siteName, this.password);

      alert('Password added successfully');
    },
    clearStorage() {
      localStorage.clear();
      alert('Storage cleared');
    },
  },
  onMounted() {
    this.passwords = JSON.parse(localStorage.getItem('locker')) || {};
  },
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>