import Vue from 'vue';
import Router from 'vue-router';
// import comConfig from '../../components.json';
import navConfig from '../nav.config.json';

Vue.use(Router);

const LOAD_DOCS_MAP = (page) => {// eslint-disable-line
  return r => require.ensure([], () =>// eslint-disable-line
    r(require(`../modules/${page.name}${page.path}.demo.md`)),// eslint-disable-line
    'zh-CN'// eslint-disable-line
);// eslint-disable-line
};// eslint-disable-line

const loadDocs = (name, path) => LOAD_DOCS_MAP(name, path);

const registerRoute = (config) => {
  const route = [];
  function addRoute(page, lang, index) {
    const component = loadDocs(page);
    route.push({
      path: page.path,
      component
    });
    if (index === 0) {
      route.push({
        path: '/',
        redirect: page.path
      });
    }
  }
  Object.keys(config).forEach((lang, index) => {
    const navs = navConfig[lang];
    navs.forEach((nav) => {
      if (nav.groups) {
        nav.groups.forEach((group) => {
          group.list.forEach((nav2) => {
            addRoute(nav2, lang, index);
          });
        });
      }
    });
  });
  return route;
};

const route = registerRoute(navConfig);
const router = new Router({
  routes: route
});

export default router;
