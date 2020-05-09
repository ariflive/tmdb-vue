<template>
	<div>
		<Navigation />
    <Logo title="The Movie DB" />
		<D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
		<hr/>
	</div>
</template>


<script>
var singleURL = 'https://api.themoviedb.org/3/movie/157336?api_key=012294b008ce032976f517b73f297916&append_to_response=videos,images'
var url = ''
import axios from 'axios'
import Navigation from './Navigation.vue'
import Logo from './Logo.vue'
import { D3BarChart } from 'vue-d3-charts';

export default {
	name: 'Stats',
	components: {
    Navigation,
		Logo,
		D3BarChart
	},
	data() {
		return {
			chart_config: {
        key: 'name',
        color: {
          scheme: 'schemeCategory10'
        },
        transition: {
          ease: 'easeBounceOut',
          duration: 1000
        }
      },
      chart_data: [
          { start: 2355, end: 5855, name: "Lorem" },
          { start: 4260, end: 6510, name: "Ipsum" },
          { start: 5029, end: 5138, name: "Dolor" }
      ],
      count: 0
		}
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
</style>
