<template>
  <div>
    <header>
      <navigation-bar />
      <Sidebar />
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './navigation/Sidebar.vue';
import NavigationBar from "./navigation/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
    Sidebar,
  },
};
</script>