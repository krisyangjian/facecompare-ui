<template>
	<div class="menu-wrap">
        <ul class="menu-content">
            <li class="nav-item" v-for="navItem in comInfoList">
             <router-link
              :to="navItem.routePath">{{navItem.title}}</router-link>
            </li>
        </ul>
	</div>
</template>

<script>
import comConfig from '../../../components.json'

export default {
  data () {
    return {
      comConfig
    }
  },
  computed: {
    comInfoList: function () {
      let list = []
	  Object.keys(comConfig).forEach((comName, index) => {
        let comInfo = comConfig[comName]
        list.push(comInfo)
      })
      return list
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
    .menu-wrap {
        float: left;
        height: 100%;
        width: 200px;
        background-color: rgb(93, 102, 116);
    }
    .menu-content li {
        /* padding: 10px 15px; */
        height: 50px;
        line-height: 50px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 300; 
        cursor: pointer;
        color: #ffffff;
        text-align: center;
    }
    .menu-content li:hover, .menu-content .router-link-active {
        background-color: rgb(74, 82, 93);
    }
    .menu-content li a {
        color: #ffffff;
        font-size: 16px;
        display: block;
        width: 100%;
        height: 100%;
        font-weight: 400;
    }
</style>