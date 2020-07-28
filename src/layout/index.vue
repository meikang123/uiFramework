<template>
  <gt-layout>
    <template slot="logo" />
    <template slot="setting">
      <router-link to="/">
        <el-dropdown-item>其他</el-dropdown-item>
      </router-link>
    </template>
  </gt-layout>
</template>
<script>
import Layout from '@framework/layout';
import logo from './components/logo';

export default {
  components: {
    GtLayout: Layout,
    logo
  }
};
</script>
<style>
</style>
