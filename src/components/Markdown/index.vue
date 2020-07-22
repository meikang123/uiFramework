<template>
  <mavon-editor v-model="value" :toolbars="toolbars" @fullScreen="handleZIndex()" v-bind="$props" @change="handleChange" :external-link="externalLink" :style="'z-index:' + zIndex + ';'" />
</template>
<script>
import 'mavon-editor/dist/markdown/github-markdown.min.css';

export default {
  name: 'Markdown',
  data() {
    return {
      value: '',
      zIndex: 1,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        // save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      baseUrl: '/static/thirdparty/markdown',
      externalLink: {
        markdown_css: false, // () => `${this.baseUrl}/markdown/github-markdown.min.css`,
        hljs_js: () => `${this.baseUrl}/highlightjs/highlight.min.js`,
        hljs_css: css => `${this.baseUrl}/highlightjs/styles/${css}.min.css`,
        hljs_lang: lang => `${this.baseUrl}/highlightjs/languages/${lang}.min.js`,
        katex_css: () => `${this.baseUrl}/katex/katex.min.css`,
        katex_js: () => `${this.baseUrl}/katex/katex.min.js`
      }
    };
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    toolbarsFlag: {
      type: Boolean,
      default: true
    },
    subfield: {
      type: Boolean,
      default: true
    },
    defaultOpen: {
      type: String,
      default: 'preview'
    },
    editable: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    content: {
      handler(val) {
        if (val !== this.html) {
          this.value = val;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleChange(markdown, html) {
      this.$emit('change', markdown, html);
    },
    handleZIndex() {
      this.zIndex = this.zIndex === 1 ? 1500 : 1;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
