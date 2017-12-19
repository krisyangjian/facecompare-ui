import Vue from 'vue';
import App from './App';
import { router } from './utils/router.utils';
import ElementUI from 'element-ui';
import InsightUI from './index.js';

import 'element-ui/lib/theme-chalk/index.css';
import './theme-chalk/src/index.scss';

import test from './modules/test/index.js';

Vue.use(ElementUI);
Vue.use(InsightUI);
// Vue.use(InsightUI);

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})