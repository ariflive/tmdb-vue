<template>
	<div>
		<movie :id="$route.params.id"></movie>
	</div>
</template>


<script>
import Movie from './Movie.vue';
export default {
  components: { Movie }
}
</script>


<style scoped>
</style>
