<template>
  <login v-if="!isLogin" />
  <base-component v-else />
</template>

<script>
import BaseComponent from "@/components/BaseComponent.vue";
import Login from "./pages/Login.vue";
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  components: {
    BaseComponent,
    Login,
  },
};
</script>

<style scoped>
  
</style>>
