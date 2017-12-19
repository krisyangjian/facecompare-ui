import Vue from 'vue';
import Router from 'vue-router';
import comConfig from '../../components.json';

Vue.use(Router);

const LOAD_DOCS_MAP = (name, path) => {
	return r => require.ensure([], () =>
		r(require(`../modules/${name}${path}.demo.md`)),
		// r(require(`../modules/${name}${path}.vue`)),
	'zh-CN');
}

const loadDocs = function(name, path) {
	return LOAD_DOCS_MAP(name, path);
};

const registerRoute = (comConfig) => {
	let route = [];
	Object.keys(comConfig).forEach((comName, index) => {
		let comInfo = comConfig[comName];
		//默认组件路由
		// route.push({
		// 	path: `/${ lang }/component`,
		// 	component: load(lang, 'component'),
		// 	children: []
		// });
		addRoute(comInfo, comName, index);
	});

	function addRoute(page, name, index){
		const component = loadDocs(name, page.routePath);
		route.push({
			path: `/${ name }`,
			component
		});
	}
	return route;
}

let route = registerRoute(comConfig);
console.log(route)
let router = new Router({
	routes: route
});

export {
	router
};