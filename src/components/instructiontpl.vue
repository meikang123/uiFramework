<template>
  <div class="gt-instruction-tpl">
    <div class="gt-instruction-tpl__title">
      <slot name="title" />
    </div>
    <slot />
    <div class="gt-instruction-tpl__readme">
      <slot name="readme" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionTpl',
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

<style lang="scss">

.gt-instruction-tpl{
  padding: 30px;
}

.gt-instruction-tpl__title {
  font-size: 30px;
  margin-bottom: 20px;
}

.gt-instruction-tpl__readme {
  margin: 30px 0;
}
</style>
