<template>
  <div
    class="is-test"
    @click="handelClick">
    {{ $t('is.test.text') }}
  </div>
</template>

<script>
export default {
  name: 'IsTest',
  methods: {
    handelClick() {
      this.$confirm(this.$t('is.test.confirmBody'), this.$t('is.test.confirmTitle'), () => {}, () => {});
    }
  }
};
</script>
