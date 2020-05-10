<template>
	<div>
		<Navigation />
		<article :id="'movie-'+movie.id">
			<h1>{{ movie.original_title }}</h1>
			<ul>
				<li v-bind:key="item.id" v-for="item in movie.genres" >
					<small>{{ item.name }}</small>
				</li>
			</ul>
			<h5 v-if="movie.tagline">{{ movie.tagline }}</h5>
			<p>Release Date: {{ movie.release_date }}</p>
			<img :src="imageUrl + movie.poster_path" />
			<p>{{ movie.overview }}</p>

			<b-button variant="link" size="lg" class="mb-2 mr-sm-2 mb-sm-0">
				<router-link to="/">Go Back</router-link>
			</b-button>
		</article>
		<hr/>
	</div>
</template>


<script>
import axios from 'axios'
import Navigation from './Navigation.vue'

export default {
	name: 'Movie',
	props: {
		id: String
	},
	components: {
    Navigation
	},
	data() {
		return {
			movie: [],
			imageUrl: 'https://image.tmdb.org/t/p/w342'
		}
	},
	mounted () {
		var url = 'https://api.themoviedb.org/3/movie/'+this.id+'?api_key=012294b008ce032976f517b73f297916&append_to_response=videos,images'
		console.log(url)
		axios.get(url).then(response => {
			this.movie = response.data
		});
	}
}
</script>


<style scoped>
article {
	padding:20px;
}
ul {
	margin:0;
	padding: 0;
}
ul li {
	display:inline-block;
	list-style: none;
	margin-left:9px;
	margin-right:9px;
}
</style>
