import Vue from 'vue';
import App from './App';
import router from './utils/router.utils';
import ElementUI from 'element-ui';
import InsightUI from './index.js';
import VueI18n from 'vue-i18n';
import elZhElementUI from 'element-ui/lib/locale/lang/zh-CN';
import elZhInsightUI from './locale/lang/zh-CN';
import pageLang from './locale/page-lang.js';

// import 'element-ui/packages/theme-chalk/src/index.scss';
// 引入主题样式文件
import './theme-chalk/src/index.scss';

// 注册element组件
Vue.use(ElementUI);
// 注册自定义组件
Vue.use(InsightUI);
// 注册多语言
Vue.use(VueI18n);

// 注册默认语言包
Vue.locale('zh-CN', Object.assign({}, elZhElementUI, elZhInsightUI, pageLang['zh-CN']));
// 设置默认语言
Vue.config.lang = 'zh-CN';
// 这是默认的配色主题
Vue.config.theme = 'chalk';

// bad
someStack[someStack.length] = 'abracadabra';
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
