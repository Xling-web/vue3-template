import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@pureadmin/components/dist/index.css";
import "@pureadmin/components/dist/theme.css";
import '@/utils/motion'
require('./utils/mock');
import './assets/icons' 

createApp(App)
  
const app = createApp(App)

app.use(store).use(router).mount('#app')