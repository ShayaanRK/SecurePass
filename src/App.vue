<template>
  <div>
    <HelloWorld/>
    <FormTest/>
    <FileUpload />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue';
import FileUpload from './components/FileUpload.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FormTest,
    FileUpload,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
