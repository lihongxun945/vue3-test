<template>
  <div :class="'hello'+count" :count="count" :[name]="123">
    <input v-bind:value="count" /> <button @click="add">+</button>
  </div>
</template>

<script>
import {ref, watchEffect} from 'vue';

export default {
  name: 'HelloWorld',
  setup() {
    const count = ref(0)
    const add = ()=> {count.value +=1}
    watchEffect(() => {
      console.log(count.value);
    })
    return {
      count,
      add,
      name: 'name'+count.value
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
