<template>
  <nav>
    <div id="nav">
      <router-link to="/">Home</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/stats">Stats</router-link>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Navigation"
}
</script>


<style scoped>
  nav {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  nav a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
