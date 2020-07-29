<template>
  <div>
    <div class="subheadBg">{{ title }}</div>
    <div class="contentBg">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subhead',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.subheadBg {
  font-size: 20px;
  margin: 40px 0 15px 0;
}
.contentBg > * {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  margin-bottom: 10px;
}
</style>
