<template>
<div>
  <div>
    <div class="test">
      <h1>Password Generator</h1>
      <div>
        <label for="passwordType">Choose Password Type:</label>
        <select v-model="simpleFlag" id="passwordType" required>      <!-- new form for password generation -->
          <option :value = true>Simple</option>
          <option :value = false>Complex</option>
        </select>
      </div>
      <div>                                              
        <label for="length">Site name:</label>
        <input type="text" v-model="siteName" required />
      </div>
      <div>                                                 <!-- old form for password generation -->
        <form @submit.prevent="handleSubmit">
          <label for="length">Password Length:</label>#
          <input type="number" v-model="length" min="6" max="30" required />
          <button type="submit">Generate Password</button>
        </form>
      </div>
      
      <p>Your Password: {{ password }}</p>
      <p>Name of site: {{ siteName }}</p>

      <div v-if="password">
        <button @click="handleDownload">Download Password</button>
        <button @click="addPassword">Add Password</button>
        <button type="button" @click="clearStorage">clear storage</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { generateMemorablePassword } from '../utils/passwordGenerator';
import { downloadPassword } from '@/utils/fileDownloader';

export default {
  name: 'FormTest',
  data() {
    return {
      length: 12,
      password: '',
      siteName: 'test',
      simpleFlag: true,
    };
  },
  methods: {
    handleSubmit() {
      const simpleFlagBoolean = this.simpleFlag;
      const newPassword = generateMemorablePassword(this.length, simpleFlagBoolean);
      this.password = newPassword;
    },
    handleDownload() {
      downloadPassword(this.password, this.siteName);

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