<template>
  <div class="sidebar-logo-container" :class="{ collapse: isCollapse }">
    <transition name="sidebarLogoFade">
      <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/" :title="title">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/" :title="title">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script>
import logo from '@/assets/img/logo.png';
import { mapGetters } from 'vuex';

export default {
  name: 'SidebarLogo',
  computed: {
    ...mapGetters(['routes', 'sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    }
  },
  data() {
    return {
      title: 'GT-UI',
      logo
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 83px;
  line-height: 83px;
  background: #2f7771;
  text-align: center;

  overflow: hidden;

  & .sidebar-logo-link {
    display: flex !important;
    padding: 0 10px;
    align-items: center;
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      flex: 1;
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: normal;
      font-size: 16px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      text-align: left;
      vertical-align: middle;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
