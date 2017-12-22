<template>
	<div>
		<is-test
			v-model="the3me"
		></is-test>
	</div>
</template>
<script>
export default {
	name: 'IsButton',
  data() {
    return {
      the3me: '#409EFF'
    };
  },
  watch: {
  }
};
</script>
<style>
</style>