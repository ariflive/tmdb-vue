<template>
  <div>
    <Navigation />
    <Logo title="The Movie DB" />
    <Listing />
  </div>
</template>


<script>
import Navigation from './Navigation.vue'
import Logo from './Logo.vue'
import Listing from './Listing.vue'

export default {
  name: 'Home',
	components: {
    Navigation,
    Logo,
    Listing
	}
}
</script>

<style scoped>
</style>
