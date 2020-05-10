<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/"><img src="../assets/tmdb-logo.svg" /></router-link>
      </b-navbar-brand>
      <b-nav pills>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/stats">Stats</router-link>
        </b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Navigation"
}
</script>


<style scoped>
img {
  margin-top:9px;
  margin-bottom:9px;
  width:auto;
  height:24px;
}
::v-deep .nav-link {
   color: #fff !important;
}
</style>
