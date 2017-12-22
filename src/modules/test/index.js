import IsTest from './test';

/* istanbul ignore next */
IsTest.install = function (Vue) {
  Vue.component(IsTest.name, IsTest);
};

export default IsTest;
