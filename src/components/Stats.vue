<template>
	<div>
		<Navigation />
    <Logo title="The Movie DB" />
		Stats
		<hr/>
	</div>
</template>


<script>
var singleURL = 'https://api.themoviedb.org/3/movie/157336?api_key=012294b008ce032976f517b73f297916&append_to_response=videos,images'
var url = ''
import axios from 'axios'
import Navigation from './Navigation.vue'
import Logo from './Logo.vue'

export default {
	name: 'Stats',
	components: {
    Navigation,
    Logo
	},
	mounted () {
		url = singleURL
		console.log(url)
		axios.get(url).then(response => {
			console.log(response);
		});
	}
}
</script>


<style scoped>
ul.movies {
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
}
ul.movies li {
	list-style: none;
	flex: 0 0 33.333333%;
}
ul.movies img {
	width:100%;
	height:auto;
}
article {
	padding:9px;
}
@media screen and (max-width:600px) {
  ul.movies li { flex: 0 0 50%; }
}
</style>
