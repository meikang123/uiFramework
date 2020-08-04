<template>
  <div class="instruction-tpl">
    <div class="instruction-tpl__title" v-if="title">
      {{ title }}
    </div>
    <slot />
    <el-row>
      <el-col :span="12">
        <div class="instruction-tpl__readme">
          <slot name="left" />
        </div>
      </el-col>
      <el-col :span="12" v-if="hasRightSolt">
        <div class="instruction-tpl__demo">
          <div class="tpl-demos__title"> 示例：</div>
          <slot name="right" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'InstructionTpl',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasRightSolt: {
      get() {
        const { right } = this.$slots;
        return !!right;
      }
    }
  }
};
</script>

<style lang="scss">

.instruction-tpl{
  padding: 30px;
}

.instruction-tpl__title {
  font-size: 30px;
  margin-bottom: 20px;
}

.instruction-tpl__readme {
  padding: 10px 10px 0 0;
  border-right: 1px #ebe8e8 dashed;
}
.instruction-tpl__demo{
  padding: 10px 0 0 10px;
  .tpl-demos__title{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .tpl-demo__item{
    
  }
}
</style>
