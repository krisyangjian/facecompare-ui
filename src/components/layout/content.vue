<template>
  <div class="content-wrap">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
.content-wrap {
  height: calc(100% - 40px);
  padding: 20px;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
