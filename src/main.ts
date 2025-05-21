
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')
