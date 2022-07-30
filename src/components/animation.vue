<template>
	<div class="move"></div>
</template>

<script>
</script>

<style>
	.move
	{
		
		border-radius: 10%;
		width:130px;
		height:130px;
		position:relative;
		animation:myfirst 5s;
		-webkit-animation:myfirst 5s; 
		animation-iteration-count:5;
		
	
	}
	
	@keyframes myfirst
	{
		0%   {
			background: url(../../images/11.jpg); left:100px; top:0px;
			border-radius: 30%;
			width: 150px;
			height: 150px;
			}
		20%  {background:url(../../images/5.jpg); left:320px; top:0px;
		      border-radius: 40%;
			  width: 180px;
			  height: 180px;
			  }
		40%  {background:url(../../images/1.jpg); left:460px; top:0px;
		       border-radius: 50%;
			   width: 200px;
			   height: 200px;
		
		     }
		60%  {background:url(../../images/2.jpg); left:620px; top:0px;
		      border-radius: 40%;
			  width: 130px;
			  height: 130px;
		}
		80% {
			background:url(../../images/8.jpg);
			left:180px; 
			top:0px;
			width: 160px;
			height: 160px;
		    border-radius: 30%;
		}
		100% {
			background:url(../../images/9.jpg); 
			left:300px;
			top:0px;
		    border-radius: 20%;
			width: 180px;
			height: 180px;
			}
		
	}
	
</style>
