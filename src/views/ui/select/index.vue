<template>
  <instruction-tpl title="gt-select">
    <template slot="left">
      <gt-markdown-display :content="compiledMarkdown" />
    </template>
    <template slot="right">
      <case-item :top="168" :height="475">
        <gt-select
          :default-options="options"
          v-model="value1"
          :placeholder="'请选择城市'"
        />
      </case-item>

      <case-item :top="500">
        <gt-select
          :request-service="ProductService"
          v-model="value2"
          :placeholder="'请选择城市'"
        />
      </case-item>

      <case-item :top="800">
        <gt-select
          :use-request-cache="true"
          :request-service="ProductService"
          v-model="value3"
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
      value1: '',
      value2: '',
      value3: '',
      options: [
        {
          id: 1,
          label: '北京'
        },
        {
          id: 2,
          label: '上海'
        }
      ],
      ProductService: () =>
        // mock 接口返回
        new Promise((res, rej) => {
          const obj = {
            code: 0,
            data: {
              data: [
                {
                  id: 'guangzhou',
                  name: '广州'
                },
                {
                  id: 'shenzhen',
                  name: '深圳'
                }
              ]
            }
          };
          res(obj);
        })
      
    };
  },
  created() {
    this.compiledMarkdown = readme;
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
