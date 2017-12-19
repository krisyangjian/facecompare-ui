<template>
	<div class="page-wrap">
		<header-layout></header-layout>
		<div class="page-container page-component">
			<menu-layout></menu-layout>
			<content-layout></content-layout>
		</div>
	</div>
</template>
<script>
	import HeaderLayout from '@/components/layout/header';
	import MenuLayout from '@/components/layout/menu';
	import ContentLayout from '@/components/layout/content';
	
	import Vue from 'vue';
	import demoBlock from '@/components/demo-block';

	Vue.component('demo-block', demoBlock);

	export default {
		name: 'app',
		components: {
			HeaderLayout,
			MenuLayout,
			ContentLayout
		}
	}
</script>
<style>
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,
    form,fieldset,legend,textarea,p,th,td,input,
    select,textarea,button {margin:0;padding:0}
    dl,ul,ol,menu,li {list-style:none}
	a {text-decoration:none;outline:none}
	
    body, html, .page-wrap{
        width: 100%;
        height: 100%;
    }
    .container {
		width:100%;
		height:100%
	}
	.page-container {
		height: calc(100% - 50px);
		overflow: hidden;
	}
  	html, body {
    	margin: 0;
    	padding: 0;
    	height: 100%;
    	font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    	font-weight: 400;
    	-webkit-font-smoothing: antialiased;
  	}
  	a {
    	color: #409EFF;
    	text-decoration: none;
  	}
  	code {
    	background-color: #f9fafc;
    	padding: 0 4px;
    	border: 1px solid #eaeefb;
    	border-radius: 4px;
	}
	button, input, select, textarea {
    	font-family: inherit;
    	font-size: inherit;
    	line-height: inherit;
    	color: inherit;
  	} 
  	.hljs {
    	line-height: 1.8;
    	font-family: Menlo, Monaco, Consolas, Courier, monospace;
    	font-size: 12px;
    	padding: 18px 24px;
    	background-color: #fafafa;
    	border: solid 1px #eaeefb;
    	margin-bottom: 25px;
    	border-radius: 4px;
    	-webkit-font-smoothing: auto;
  	}
  	.main-cnt {
    	margin-top: -80px;
    	padding: 80px 0 340px;
    	box-sizing: border-box;
    	min-height: 100%;
  	}
.page-container h2 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0;
}
.page-container h3 {
	  font-size: 22px;
	  margin: 55px 0 20px;
}
.page-container h2, h3, h4, h5 {
      font-weight: normal;
	  color: #1f2f3d;
}
.page-container h2 a, h3 a, h4 a, h5 a {
    float: left;
    margin-left: -20px;
    opacity: 0;
    cursor: pointer;
}
.page-container p {
      font-size: 14px;
      color: #5e6d82;
	  line-height: 1.5em;
	  margin: 14px 0;
}
.tip {
    padding: 8px 16px;
    background-color: #ECF8FF;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin: 20px 0;
}
.tip code {
	background-color: rgba(255, 255, 255, .7);
    color: #445368;
    }


.warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: #FE6C6F 5px solid;
    margin: 20px 0;
}
	.warning  code {
    	background-color: rgba(255, 255, 255, .7);
    	color: #445368;
	}
	.demo {
    	margin: 20px 0;
	}
</style>