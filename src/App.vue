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
      isLogin: false,
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
