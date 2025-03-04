<template>
  <div>
    <div class="test">
      <h1>Password Generator</h1>
      <label for="passwordType">Choose Password Type:</label>
      <select v-model="simpleFlag" id="passwordType">
        <option value="true">Simple</option>
        <option value="false">Complex</option>
      </select>
      <button @click="handleClick">Generate Password</button>
      <p>Your Password: {{ password }}</p>
    </div>
  </div>
</template>

<script>
import { generateMemorablePassword } from '../utils/passwordGenerator.js';

export default {
  name: 'HelloWorld',
  data() {
    return {
      simpleFlag: 'true',
      password: ''
    };
  },
  methods: {
    handleClick() {
      try {
        const length = this.simpleFlag === 'true' ? 8 : 16;
        this.password = generateMemorablePassword(length);
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  color: #42b983;
}
</style>
