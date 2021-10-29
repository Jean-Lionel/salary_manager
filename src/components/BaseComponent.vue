<template>
  <div>
    <header>
      <navigation-bar />
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./navigation/NavigationBar.vue";
export default {
  components: { NavigationBar },
};
</script>