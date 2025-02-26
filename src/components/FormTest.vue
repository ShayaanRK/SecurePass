<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="length">Password Length:</label>
      <input type="number" v-model="length" min="1" max="128" required />
      <button type="submit">Generate Password</button>
    </form>
    <div v-if="password">
      <h3>Generated Password:</h3>
      <p>{{ password }}</p>
    </div>
  </div>
</template>

<script>
import { generatePassword } from '../utils/passwordGenerator';

export default {
  name: 'FormTest',
  data() {
    return {
      length: 12,
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      this.password = generatePassword(this.length);
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
</style>