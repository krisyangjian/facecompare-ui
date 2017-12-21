<template>
    <div>
      <div class="is-test" @click="testClick">{{ $t("is.test.text") }}</div>
    </div>
</template>
<script>
  export default {
    name: 'IsTest',
    data() {
      return {
        theme: '#409EFF'
      };
    },
    watch: {
      theme(val, oldVal) {
        alert(3)
      }
    },
    computed: {
      getTheme: {
        get: function() {
          return this.theme;
        },
        set: function(newValue) {
          debugger;
          this.theme = newValue;
        }
      }
    },
    methods: {
      testClick: function() {
        this.$emit('input');
     	// this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		  // type: 'warning'
      //   }).then(() => {}).catch(() => {})
      },
      handleClick: function() {
        alert(3)
      }
    }
  }
</script>