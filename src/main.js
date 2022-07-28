function addSpaces(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export { addSpaces }

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
