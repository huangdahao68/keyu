<template>
	
	<div id="chevron">
		<p>ky官方旗舰店</p>
	</div>
	
</template>

<script>
</script>

<style>
	#chevron {
	  position: relative;
	  text-align: center;
	  padding: 12px;
	  margin-bottom: 6px;
	  height: 5px;
	  width: 90px;
	}
	#chevron p{
		position: absolute;
		z-index: 3;
		top: 2px;
		left: 6px;
		font-size: 7px;
		color: white;
		font-family: 'Courier New', Courier, monospace;
		
	}
	#chevron:before {
	  content: '';
	  position: absolute;
	  z-index: 1;
	  overflow: hidden;
	  top: 0;
	  left: 0;
	  height: 100%;
	  width: 51%;
	 background-image: linear-gradient(to right,rgb(216 20 60 / 60%),rgb(228 89 89 / 30%),rgb(226 61 77 / 90%));
	  transform: skew(0deg, 11deg);
	}
	#chevron:after {
	  content: '';
	  position: absolute;
	    overflow: hidden;
	  z-index: 1;
	  top: 0;
	  right: 0;
	  height: 100%;
	  width: 50%;
	  background-image: linear-gradient(to left,rgb(216 20 60 / 60%),rgb(228 89 89 / 30%),rgb(226 61 77 / 90%));
	  transform: skew(0deg, -11deg);
	}   
	
	
</style>
