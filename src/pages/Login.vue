<template>
  <div>
    <div>AUTHENTIFICATION</div>

    <div>
      <div>
        <label>Login </label>
        <input type="text" v-model="userName" />
      </div>
      <div>
        <label>Password </label>
        <input type="password" v-model="password" />
      </div>
      <div>
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