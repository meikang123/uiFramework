<template>
  <instruction-tpl>
    <template slot="left">
      <gt-markdown-display :content="compiledMarkdown" />
    </template>
    <template slot="right">
      <case-item :height="268" :top="182">
        <el-button type="primary" @click="showConfirm()">一个删除的二次确认</el-button><div class="optShow" id="J-message" />
      </case-item>
    </template>
  </instruction-tpl>
</template>
<script>
import readme from '@framework/ui/confirm/README.md';

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
    confirm() {
      this.$el.querySelector('div[id="J-message"]').innerText = '你确认了删除';
    },

    cancel() {
      this.$el.querySelector('div[id="J-message"]').innerText = '你取消了删除';
    },

    showConfirm() {
      this.$gtconfirm('你确定要删除${name}吗？', this.confirm, this.cancel);
    }
  }
};
</script>
<style scoped lang="scss">
.optShow{
  margin-left: 20px;
  width: 100px;
  color: green;
}
</style>
