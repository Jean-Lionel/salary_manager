<template>
  <div id="sid">
    <div class="dash">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Employees</router-link>
      <router-link to="/tasks"> Agences </router-link>
      <router-link to="/todo"> Conges </router-link>
      <router-link to="/todo"> Salaire </router-link>
      <router-link to="/todo"> Cotation </router-link>
      <router-link to="/todo"> Autres </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sid {
  background: linear-gradient(180deg, rgba(22, 22, 58, 0.7) 60%, rgba(147, 105, 197, 0.9) 90%);
  color: aliceblue;
  display: block;
  /* margin-top: 1rem; */
  width: 20%;
  height: 70vh;
}

.dash {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  
}

.dash a {
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;
  color: aliceblue;
}

a {
  text-decoration: none;
  padding: 0 5px;
  color: #000;
}
</style>