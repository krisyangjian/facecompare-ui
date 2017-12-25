import Vue from 'vue'
import Router from 'vue-router'
import comConfig from '../../components.json'

Vue.use(Router)

const LOAD_DOCS_MAP = (name, path) => {
  return r => require.ensure(
[], () =>
    r(require(`../modules/${name}${path}.demo.md`)),
    'zh-CN'
)
}

const loadDocs = function (name, path) {
  return LOAD_DOCS_MAP(name, path)
}

const registerRoute = (config) => {
  let route = []
	function addRoute(page, name) {
		const component = loadDocs(name, page.routePath)
		route.push({
			path: `/${ name }`,
			component
		})
	}
  Object.keys(config).forEach((comName, index) => {
    let comInfo = config[comName]
		if (index === 0) {
		  // 默认组件路由
			route.push({
				path: '/',
				redirect: `/${comName}`
			});
		}
		addRoute(comInfo, comName, index)
	})
	return route
}
let route = registerRoute(comConfig)
let router = new Router({
	routes: route
})

export {
	router
};
