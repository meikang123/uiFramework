<template>
  <instruction-tpl>
    <template slot="left">
      <gt-markdown-display :content="compiledMarkdown" />
    </template>
    <template slot="right">
      <case-item :height="296" :top="67">
        <el-button type="primary" @click="showDialog">点击打开Dialog</el-button>
        <gt-dialog :visible.sync="visible" title="提示">
          这是一段信息
        </gt-dialog>
      </case-item>
    </template>
  </instruction-tpl>
</template>
<script>
import readme from '@framework/ui/dialog/README.md';

export default {
  name: 'Dialog',
  components: {},
  data() {
    return {
      visible: false,
      compiledMarkdown: ''
    };
  },
  created() {
    this.compiledMarkdown = readme;
  },
  methods: {
    showDialog() {
      this.visible = true;
    }
  }
};
</script>
