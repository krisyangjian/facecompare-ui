<template>
  <div class="menu-wrap">
    <ul
      class="menu-content"
      v-for="item in navsDatas"
      :key="item.name">
      <template v-if="item.groups">
        <div
          class="nav-group"
          v-for="group in item.groups"
          :key="group.groupName">
          <div class="nav-group-title">{{ group.groupName }}</div>
          <li
            class="nav-item"
            v-for="navIte in group.list"
            v-if="!navIte.disabled"
            :key="navIte.name">
            <router-link
              active-class="active"
              :to="navIte.path"
              v-text="navIte.title"></router-link>
          </li>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
import navsData from '../../nav.config.json';

export default {
  data() {
    return {
      navsData
    };
  },
  computed: {
    navsDatas() {
      return navsData['zh-CN'];
    }
  },
  methods: {
  }
};
</script>

<style scoped>
    .menu-wrap {
        float: left;
        height: 100%;
        width: 200px;
        background-color: rgb(93, 102, 116);
    }
    .nav-item {
      text-align: left;
      /* padding-left: 20px; */
    }
    .nav-item a {
      display: block;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      font-weight: 400;
      padding-left: 20px;
      overflow: hidden;
    }
    .menu-content li {
        /* padding: 10px 15px; */
        /* height: 50px;
        line-height: 50px;
        text-decoration: none; */
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
        color: #ffffff;
        text-align: left;
        list-style: none;
    }
    .nav-group-title {
      font-size: 12px;
      color: #999;
      height: 26px;
      line-height: 26px;
      margin-top: 15px;
      padding-left: 15px;
    }
    .menu-content a:hover, .menu-content .router-link-active {
        background-color: rgb(74, 82, 93);
    }
    .menu-content li a {
        color: #ffffff;
        font-size: 16px;
        display: block;
        /* width: 100%; */
        height: 100%;
        font-weight: 400;
    }
</style>
