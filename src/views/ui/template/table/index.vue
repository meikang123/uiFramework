<template>
  <instruction-tpl>
    <gt-markdown-display :content="compiledMarkdown" />
  </instruction-tpl>
</template>
<script>
import readme from '@framework/ui/template/table/_README.md';

export default {
  data() {
    return {
    };
  },
  created() {
    this.compiledMarkdown = readme;
  }
};
</script>
<style scoped lang="less">
</style>
