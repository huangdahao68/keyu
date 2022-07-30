<template>
	<div class="infinity"></div>
</template>

<script>
</script>

<style>
	 .infinity {
				/* 无穷大 */
				width: 190px;
				height: 100px;
				position: relative;
			}
			.infinity:before {
				content: "";
				width: 50px;
				height: 50px;
				position: absolute;
				top: 0;
				left: 0;
				border: 20px solid #f00;
				border-radius: 50px 50px 0 50px;
				transform: rotate(-45deg);
			}
			.infinity:after {
				content: "";
				width: 50px;
				height: 50px;
				position: absolute;
				top: 0;
				right: 0;
				border: 20px solid #f00;
				border-radius: 50px 50px 50px 0;
				transform: rotate(45deg);
			}
</style>
