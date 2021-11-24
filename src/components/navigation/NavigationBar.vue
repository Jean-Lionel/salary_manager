<template>
  <div>
    <div id="nav">
      <div class="left">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/tasks"> TASK </router-link> 
        <router-link to="/todo"> To do </router-link> 
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
  }

  a {
    text-decoration: none;
    padding: 0 5px;
    color: #000;
    
  }
</style>