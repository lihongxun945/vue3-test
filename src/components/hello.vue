<template>
  <div>Hello <strong>{{name}}</strong></div>
</template>

<script>
export default {
  name: 'Hello',
  setup() {
    return {
      name: 'Yanchuan'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  color: red;
}
</style>
