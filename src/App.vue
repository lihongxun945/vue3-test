<template>
  <div id="app">
    <div v-if="count>1">Good!!</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="onClick">click me</button>
    <div>count: {{count}}</div>
    <div>
      <span>hello</span>
      <span>World!</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  components: {
  },
  props: {
    username: String
  },
  setup(props) {
    const count = ref(9);
    const onClick = () => {
      count.value += 1
    }
    return {
      n: props.username,
      list: [1,2,3,4],
      onClick,
      count
    }
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
.c9 {
  color: #112233;
}
</style>
