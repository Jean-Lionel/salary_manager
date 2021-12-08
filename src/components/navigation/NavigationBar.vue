<template>
  <div>
    <div id="nav">
      <div class="left">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/tasks"> TASK </router-link> 
        <router-link to="/todo"> To do </router-link> 
      </div>
      <div class="middle">
        <input id="search" type="text" placeholder="Search">
      </div>
      <div class="right">
        
      </div>
      

      <button> Se Decnnecter</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  #nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #abc;
    height: 4rem;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    padding: 1px 2rem;
    background: linear-gradient(0deg, rgb(46, 45, 45) 0%, rgb(154, 175, 162) 29%);
  }

  a {
    text-decoration: none;
    padding: 0 5px;
    color: rgb(252, 245, 245);
  }

  #search {
    width: 19rem;
    height: 1.5rem;
    border-radius: 15px;
    padding-left: 1rem;
    border: none;
    margin-left: 12rem;
    background: rgb(209, 211, 212);
  }

  button {
    height: 2rem;
    width: 10rem;
    border-radius: 10px;
    background-color: rgb(76, 85, 77);
    border: none;
    color: aliceblue;
    font-size: 1rem;
  }
</style>