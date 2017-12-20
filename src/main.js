import Vue from 'vue';
import App from './App';
import { router } from './utils/router.utils';
import ElementUI from 'element-ui';
import InsightUI from './index.js';
import VueI18n from 'vue-i18n';
import elZhElementUI from 'element-ui/lib/locale/lang/zh-CN';
import elZhInsightUI from './locale/lang/zh-CN';

import 'element-ui/lib/theme-chalk/index.css';
import './theme-chalk/src/index.scss';

Vue.use(ElementUI);
Vue.use(InsightUI);
Vue.use(VueI18n);

//注册默认语言包
Vue.locale('zh-CN', Object.assign({}, elZhElementUI, elZhInsightUI));
//设置默认语言
Vue.config.lang = 'zh-CN';

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})