<template>
  <div class="auth">
    <div class="title">
      <h2>AUTHENTIFICATION</h2>
    </div>

    <div class="form">
      <div class="field" >
        <label>Login </label>
        <input type="text" v-model="userName" />
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
  .auth {
    margin: 5rem auto 0;
    width: 50%;
    background-color: rgb(221, 221, 235);
  }

  .title h2 {
    text-align: center;
    padding-top: 1rem;
  }

  .form {
    margin: 3rem 0;
  }

   .form  input{
     width: 50%;
     padding: 5px;
     border: none;
     border-bottom: 2px solid saddlebrown;
   }

    .form label{
      width: 20%;
     
    }

  .field {
    display: flex;
    justify-content: center;
     padding: 5px;    
  }

</style>