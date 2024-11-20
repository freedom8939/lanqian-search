import {createApp} from 'vue'
import App from './App.vue';
import './style.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import myAxios from "./plugins/myAxios.ts";

createApp(App).use(myAxios).use(router).use(Antd).mount('#app')
