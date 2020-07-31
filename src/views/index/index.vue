<template>
  <instruction-tpl>
    <gt-markdown-display :content="Readme" />
  </instruction-tpl>
</template>
<script>
import Readme from '@framework/README.md';

export default {

  computed: {
    Readme() {
      return Readme;
    }
  }
};
</script>
