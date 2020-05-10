<template>
  <div>
    <Navigation />
    <Listing />
  </div>
</template>


<script>
import Navigation from './Navigation.vue'
import Listing from './Listing.vue'

export default {
  name: 'Home',
	components: {
    Navigation,
    Listing
	}
}
</script>

<style scoped>
</style>
