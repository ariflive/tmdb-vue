<template>
	<div>
		<select v-model="selected" @change="sortMovies" class="form-control">
			<option v-bind:key="option.value" v-for="option in options" v-bind:value="option.value">
				{{ option.text }}
			</option>
		</select>
		<input v-model="searchValue" type="text" placeholder="Movie name..." />
		<button class="btn btn-primary" v-on:click="searchMovies">Search</button>
		<button class="btn btn-secondary" v-on:click="clearMovies">Clear</button>
		<hr/>
		<button class="btn btn-primary" v-on:click="prevMovies">Previous</button>
		<small>Showing Page: {{currentPage}} of {{totalPages}}</small>
		<button class="btn btn-primary" v-on:click="nextMovies">Next</button>
		<hr/>
		<ul class="movies">
			<li v-bind:key="item.id" v-for="item in items" >
				<article :id="'movie-'+item.id">
					<a :href="'/movie/'+item.id">
						<img :src="imageUrl + item.poster_path" />
					</a>
					<small>Released on: {{ item.release_date }}</small>
					<h3>{{ item.original_title }}</h3>
					<p>{{ item.overview }}</p>					
				</article>
			</li>
		</ul>
		<hr/>
		<button class="btn btn-primary" v-on:click="prevMovies">Previous</button>
		<small>Showing Page: {{currentPage}} of {{totalPages}}</small>
		<button class="btn btn-primary" v-on:click="nextMovies">Next</button>
		<hr/>
	</div>
</template>


<script>
var baseURL = 'http://api.themoviedb.org/3/discover/movie?api_key=012294b008ce032976f517b73f297916&certification_country=US&certification.lte=G'
var searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=012294b008ce032976f517b73f297916&language=en-US&include_adult=false'
var url = ''
import axios from 'axios'

export default {
	components: {
	},
	data() {
		return {
			searchValue: '',
			currentPage: Number,
			totalPages: Number,
			items: [],
			imageUrl: 'https://image.tmdb.org/t/p/w342',
			selected: 'popularity.desc',
			linkActiveClass: 'active',
			options: [
				{
					value: 'popularity.desc',
					text: 'Popular'
				},
				{
					value: 'vote_count.desc',
					text: 'Top Rated'
				},
				{
					value: 'release_date.desc',
					text: 'Upcoming'
				},
				{
					value: 'primary_release_date.desc',
					text: 'Now Playing'
				},
			]
		}
	},
	mounted () { // On Init
		url = baseURL + '&sort_by=popularity.desc' + '&page=1'
		console.log(url)
		axios.get(url).then(response => {
			this.totalPages = response.data.total_pages;
			this.currentPage = response.data.page;
			this.items = response.data.results;
		});
	},
	methods: {
		sortMovies: function (event) {
			url = baseURL + '&sort_by=' + event.target.value + '&page=1'
			console.log(url)
			axios.get(url).then(response => {
				this.totalPages = response.data.total_pages;
				this.currentPage = response.data.page;
				this.items = response.data.results;
			});
		},
		searchMovies: function () {
			url = searchURL + '&query=' + this.searchValue + '&page=1'
			console.log(url)
			axios.get(url).then(response => {
				this.totalPages = response.data.total_pages;
				this.currentPage = response.data.page;
				this.items = response.data.results;
			});
    },
		clearMovies: function () {
			this.searchValue = ''
			this.selected = 'popularity.desc'
			url = baseURL + '&sort_by=popularity.desc' + '&page=1'
			console.log(url)
			axios.get(url).then(response => {
				this.totalPages = response.data.total_pages;
				this.currentPage = response.data.page;
				this.items = response.data.results;
			});
    },
		nextMovies: function () {
			if (this.currentPage < this.totalPages) {
				this.currentPage = this.currentPage + 1
				url = baseURL + '&sort_by=' + this.selected + '&page=' + this.currentPage
				console.log(url)
				axios.get(url).then(response => {
					this.totalPages = response.data.total_pages;
					this.currentPage = response.data.page;
					this.items = response.data.results;
					window.scrollTo(0,0);
				});
			}
    },
		prevMovies: function () {
			if (this.currentPage > 1) {
				this.currentPage = this.currentPage - 1
				url = baseURL + '&sort_by=' + this.selected + '&page=' + this.currentPage
				console.log(url)
				axios.get(url).then(response => {
					this.totalPages = response.data.total_pages;
					this.currentPage = response.data.page;
					this.items = response.data.results;
					window.scrollTo(0,0);
				});
			}
    }
	}
}
</script>


<style scoped>
.movies {
	display:block;
}
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
