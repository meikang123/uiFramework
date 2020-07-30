<template>
  <instruction-tpl>
    <div slot="title">Dialog</div>
    <el-button type="primary" @click="showDialog">点击打开Dialog</el-button>
    <div class="mdBg markdown-body" v-html="compiledMarkdown" />
    <gt-dialog :visible.sync="visible" title="提示">
      这是一段信息
    </gt-dialog>
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
