<template>
  <div>
    <div>
      <label for="length">Site name:</label>
      <input type="text" v-model="siteName" required />
    </div>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="length">Password Length:</label>#
        <input type="number" v-model="length" min="1" max="128" required />
        <button type="submit">Generate Password</button>
      </form>
    </div>

    <div v-if="password">
      <h3>Generated Password:</h3>
      <p>{{ password }}</p>
      <button @click="handleDownload">Download Password</button>
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
      site: '',
      siteName: 'test',
    };
  },
  methods: {
    handleSubmit() {
      this.password = generatePassword(this.length);
      this.site = this.siteName;
    },
    handleDownload() {
      downloadPassword(this.password, this.site);
    },
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>