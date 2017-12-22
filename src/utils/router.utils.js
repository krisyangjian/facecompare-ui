import Vue from 'vue';
import Router from 'vue-router';
import comConfig from '../../components.json';

Vue.use(Router);

const LOAD_DOCS_MAP = (name, path) => {
  return r => require.ensure(
[], () =>
    r(require(`../modules/${name}${path}.demo.md`)),
    'zh-CN'
);
};

const loadDocs = function (name, path) {
  return LOAD_DOCS_MAP(name, path);
};

const registerRoute = (config) => {
  const route = [];
	function addRoute(page, name) {
		const component = loadDocs(name, page.routePath);
		route.push({
			path: `/${name}`,
			component
		});
	}
  Object.keys(config).forEach((comName, index) => {
    const comInfo = config[comName];
		if (index === 0) {
		  // 默认组件路由
			route.push({
				path: '/',
				redirect: `/${comName}`
			});
		}
		addRoute(comInfo, comName, index);
	});
	return route;
};

const route = registerRoute(comConfig);
const router = new Router({
	routes: route
});

export {
	router
};
