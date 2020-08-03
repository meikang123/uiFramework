<template>
  <instruction-tpl>
    <template slot="left">
      <gt-markdown-display :content="compiledMarkdown" />
    </template>
    <template slot="right">
      <case-item :top="168" :height="390">
        <gt-select
          :default-options="options"
          v-model="value1"
          :placeholder="'请选择城市'"
        />
      </case-item>
    </template>
  </instruction-tpl>
</template>

<script>
import readme from '@framework/ui/select/README.md';

export default {
  data() {
    return {
      options: [
        {
          id: 1,
          label: '北京'
        },
        {
          id: 2,
          label: '上海'
        }
      ]
    };
  },
  created() {
    this.compiledMarkdown = readme;
  }
};
</script>
<style scoped lang="less">
</style>
