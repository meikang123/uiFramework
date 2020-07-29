<template>
  <div style="padding: 30px">
    <div class="titleBg">
      <slot name="title" />
    </div>
    <slot />
    <div class="mdBg">
      <slot name="md" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentLayout',
  props: {
    title: String,
    default: ''
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.titleBg {
  font-size: 30px;
  margin-bottom: 20px;
}
.mdBg {
  margin: 30px 0;
}
</style>
