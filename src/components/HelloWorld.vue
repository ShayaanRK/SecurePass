<template>
  <div>
    <div class="test">
      <h1>Testing</h1>
      <button @click="handleClick">click here</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      alert('Button clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
test {
  color: #42b983;
}
</style>
