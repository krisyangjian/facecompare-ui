import ISButton from './button';

/* istanbul ignore next */
ISButton.install = function(Vue) {
  Vue.component(ISButton.name, ISButton);
};

export default ISButton;