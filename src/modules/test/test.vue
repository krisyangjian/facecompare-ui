<template>
    <div>
    <div class="is-test" @click="testClick">sdsdsd</div>
    </div>
</template>
<script>
  export default {
    name: 'IsTest',
    methods: {
      testClick: function () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		  type: 'warning'
        }).then(() => {}).catch(() => {})
      }
    }
  }
</script>