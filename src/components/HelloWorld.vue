<template>
  <div class="hello">
    <input v-bind:value="count" /> <button @click="add">+</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    initNumber: Number,
  },
  setup(props) {
    const count = ref(props.initNumber || 0)
    const add = ()=> {count.value +=1}
    return {
      count,
      add
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
