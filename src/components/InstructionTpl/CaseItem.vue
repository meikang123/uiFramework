<template>
  <div class="instruction-tpl__case" :style="`margin-top: ${top}px; height: ${height}px`">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'CaseItem',
  props: {
    top: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 10
    }
  }
};
</script>
<style>
  .instruction-tpl__case{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .instruction-tpl__case::before{
    content: ">";
    position: absolute;
    left: -18px;
    font-size: 36px;
    color: #5291d0;
  }
</style>
