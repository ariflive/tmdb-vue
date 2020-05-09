<template>
	<div class="logo">
		<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" :alt="title" />
	</div>
</template>


<script>
	export default {
		name: 'Logo',
		props: {
			title: String
		}
	}
</script>


<style scoped>
	.logo {
		margin-bottom:20px;
		border-bottom:1px solid #ccc;
	}
	img {
		margin-top:9px;
		margin-bottom:9px;
		width:auto;
		max-height:30px;
	}
</style>
