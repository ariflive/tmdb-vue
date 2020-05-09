<template>
  <header class="header">
    <div id="nav">
      <router-link :to="{name: 'home'}" exact>Home</router-link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <router-link :to="{name: 'stats'}" exact>Stats</router-link>
    </div>
  </header>
</template>


<script>
export default {
  name: "Header"
}
</script>


<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
