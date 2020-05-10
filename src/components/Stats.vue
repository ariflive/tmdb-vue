<template>
	<div>
		<Navigation />
		<D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
		<hr/>
	</div>
</template>


<script>
import Navigation from './Navigation.vue'
import { D3BarChart } from 'vue-d3-charts';

export default {
	name: 'Stats',
	components: {
    Navigation,
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
	}
}
</script>


<style scoped>
</style>
