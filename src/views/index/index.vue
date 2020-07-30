<template>
  <div>
    东走西顾说明
  </div>
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
