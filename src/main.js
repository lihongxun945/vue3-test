import { createApp } from 'vue'
import App from './App.vue'

console.log(`main this: ${this}`)
createApp(<App username='yanchuan' id="123" notprops='a'/>).mount('#app')
