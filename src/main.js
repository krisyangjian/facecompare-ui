import Vue from 'vue';
import App from './App';
import { router } from './utils/router.utils';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})