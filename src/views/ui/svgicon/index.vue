<template>
  <instruction-tpl>
    <template slot="left">
      <gt-markdown-display :content="compiledMarkdown" />
    </template>
    <template slot="right">
      <case-item :top="133" :height="51">
        <gt-svg-icon icon-name="chart" />
      </case-item>
      <case-item :top="17" :height="200">
        <gt-svg-icon icon-name="chart" class="custom-svg-icon" />
      </case-item>
    </template>
  </instruction-tpl>
</template>
<script>
import readme from '@framework/ui/_svgicon/README.md';

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
<style scoped lang="scss">
.custom-svg-icon{
  color: red;
}
</style>
