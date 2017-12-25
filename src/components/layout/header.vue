<template>
  <div class="header-wrap">
    <div class="theme-switch">
      <el-dropdown
        :show-timeout="0"
        :hide-timeout="0"
        trigger="click"
        @command="changeTheme">
        <span class="el-dropdown-link">
          主题选择 {{ theme }}<i class="el-icon-arrow-down el-icon--right"></i>
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
          语言选择 {{ lang }}<i class="el-icon-arrow-down el-icon--right"></i>
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
  computed: {
    lang() {
      return Vue.config.lang || 'zh-CN';
    },
    theme() {
      return Vue.config.theme || 'chalk';
    }
  },
  methods: {
    changeTheme(command) {
      if (command !== Vue.config.theme) {
        const cssLink = document.getElementById('theme-style');
        cssLink.href = `static/css/theme-${command}/index.css`;
        Vue.config.theme = command;
      }
    },
    changeLocale(command) {
      const locale = command || 'zh-CN';
      require.ensure([], (require) => {
        const localPackageIS = require(`../../locale/lang/${locale}`);
        const localPackageEL = require(`element-ui/lib/locale/lang/${locale}`);
        Vue.locale(locale, Object.assign({}, localPackageEL.default, localPackageIS.default));
        Vue.config.lang = locale;
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
