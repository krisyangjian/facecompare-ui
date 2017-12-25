// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  //required to lint *.vue files
  // plugins: [
  //   'html'
  // ],
  rules: {
    'comma-dangle': 'off', //结尾使用额外的逗号
    'quote-props': 'off', //只对非法标识符的属性使用引号
    // 'no-trailing-spaces': 'off' //禁止行尾空格
    'vue/html-self-closing': 'off', //
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-new': 'off',
    'max-len': 'off',
    'import/no-dynamic-require': 'off',
    'no-debugger': process.env.NODE_ENV === 'development'? 0 : 2
  }
}
