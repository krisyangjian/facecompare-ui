<template>
	<div class="header-wrap">
		<div class="theme-switch">
			<el-dropdown trigger="click">
  				<span class="el-dropdown-link">
    				主题选择<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
  				<el-dropdown-menu slot="dropdown">
    				<el-dropdown-item>chalk</el-dropdown-item>
    				<el-dropdown-item>other</el-dropdown-item>
  				</el-dropdown-menu>
			</el-dropdown>			
		</div>
		<div class="locale-switch">
			<el-dropdown :show-timeout=0 :hide-timeout=0 trigger="click" @command="changeLocale">
  				<span class="el-dropdown-link">
    				语言选择<i class="el-icon-arrow-down el-icon--right"></i>
  				</span>
  				<el-dropdown-menu slot="dropdown">
    				<el-dropdown-item command="zh-CN">zh-cn</el-dropdown-item>
    				<el-dropdown-item command="en">en</el-dropdown-item>
  				</el-dropdown-menu>
			</el-dropdown>				
		</div>
	</div>
</template>
<script>
	import Vue from "vue";

	export default {
		data() {
			return{
			}
		},
		components: {
		},
		methods: {
			changeTheme: function() {
			},
			changeLocale: function(command) {
				let locale = command || "zh-CN";
				// let localPackage = r => require.ensure([], () => r(require(`../../locale/lang/${locale}`)), 'locale');
				require.ensure([], function(require) {
					let localPackage = require(`../../locale/lang/${locale}`);
					Vue.locale(locale, localPackage.default);
					Vue.config.lang = locale;
				}, 'locale');
			}
		}
	}		
</script>

<style>
	.header-wrap {
		position: relative;
		height: 50px;
        width: 100%;
		background-color: #2D5F8B;
	}
	.theme-switch {
		position: absolute;
    	right: 120px;
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