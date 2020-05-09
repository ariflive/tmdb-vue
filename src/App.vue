<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'App',
	components: {
	}
}
</script>

<style>
body {
	margin:0 auto;
	padding:0;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
hr {
	margin-top:20px;
	margin-bottom:20px;
	border:none;
	border-bottom:1px solid #ccc;
}
input,
button,
select {
	margin-left:6px;
	margin-right:6px;
}
</style>
