<template>
  <instruction-tpl>
    <gt-markdown-display :content="Readme" />
  </instruction-tpl>
</template>
<script>
import Readme from '@framework/utils/enum.md';

export default {
  computed: {
    Readme() {
      return Readme;
    }
  }
};
</script>
