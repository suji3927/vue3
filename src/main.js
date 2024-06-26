import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// 아래 코드로 진행시 오류 발생
// createApp(App).mount('#app').use(router)

const app = createApp(App)
app.use(router)
app.mount('#app')
