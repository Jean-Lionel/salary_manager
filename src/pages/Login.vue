<template>
  <div class="auth">
    <div class="title">
      <h1>Hello, Welcome!</h1>
      <h3>Please login first</h3>
    </div>

    <div class="form">
      <div class="field" >
        <label>Login </label>
        <input type="text" v-model="userName" placeholder="username"/>
      </div>
      <div class="field" >
        <label>Password </label>
        <input type="password" v-model="password" />
      </div>
      <div class="field" >
        <button>Connexion</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
};
</script>

<style scoped>
  

</style>