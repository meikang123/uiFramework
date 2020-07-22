<template>
  <div>
    <ContentLayout>
      <div class="titleBg" slot="title">Select</div>
      <Subhead title="静态数据方式">
        <p>使用静态数据</p>
      </Subhead>
      <gt-select
        :defaultOptions="options"
        v-model="value1"
        :placeholder="'请选择城市'"
      />

      <Subhead title="普通接口方式">
        <p>每次选择时都会请求otpions</p>
      </Subhead>
      <gt-select
        :requestService="ProductService"
        v-model="value2"
        :placeholder="'请选择城市'"
      />

      <Subhead title="缓存接口方式">
        <p>初始化时请求一次，请求后缓存</p>
      </Subhead>
      <gt-select
        :useRequestCache="true"
        :requestService="ProductService"
        v-model="value3"
        :placeholder="'请选择城市'"
      />
      <div slot="md">
        <div class="mdBg markdown-body" v-html="compiledMarkdown"></div>
      </div>
    </ContentLayout>
  </div>
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
      ProductService: () => {
        // mock 接口返回
        return new Promise((res, rej) => {
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
        });
      }
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
