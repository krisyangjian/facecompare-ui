<template>
  <div class="header-wrap">
    <div class="head-title">{{ $t('head.title') }}</div>
    <div class="theme-switch">
      <el-dropdown
        :show-timeout="0"
        :hide-timeout="0"
        trigger="click"
        @command="changeTheme">
        <span class="el-dropdown-link">
          {{ $t('head.theme-switch') }} {{ theme }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="chalk">chalk</el-dropdown-item>
          <el-dropdown-item command="test">other</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="locale-switch">
      <el-dropdown
        :show-timeout="0"
        :hide-timeout="0"
        trigger="click"
        @command="changeLocale">
        <span class="el-dropdown-link">
         {{ $t('head.lang-switch') }} {{ lang }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh-CN">zh-CN</el-dropdown-item>
          <el-dropdown-item command="en">en</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  data() {
    return {
      theme: Vue.config.theme,
      lang: Vue.config.lang
    }
  },
  methods: {
    changeTheme(command) {
      // todo 开发环境下的主题切换
      if (command !== Vue.config.theme) {
        const cssLink = document.getElementById('theme-style');
        cssLink.href = `static/css/theme-${command}/index.css`;
        Vue.config.theme = command;
        this.theme = command;
      }
    },
    changeLocale(command) {
      // Vue.config.lang = 'en';
      const locale = command || 'zh-CN';
      require.ensure([], (require) => {
        const localPackageIS = require(`../../locale/lang/${locale}`);
        const localPackageEL = require(`element-ui/lib/locale/lang/${locale}`);
        const localePage = require('../../locale/page-lang');
        Vue.locale(locale, Object.assign({}, localPackageEL.default, localPackageIS.default, localePage.default[locale]));
        Vue.config.lang = locale;
        this.lang = locale;
      }, 'locale');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme-chalk/src/common/var.scss";

.header-wrap {
  position: relative;
  height: 50px;
  width: 100%;
  background-color: $--color-primary;
}
.head-title {
  color: #ffffff;
  font-size: 22px;
  position: absolute;
  top: 15px;
  left: 30px;
}
.theme-switch {
  position: absolute;
  right: 180px;
  top: 15px;
  cursor: pointer;
}
.theme-switch .el-dropdown, .locale-switch .el-dropdown{
  color: #ffffff;
}
.locale-switch {
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
}
</style>
