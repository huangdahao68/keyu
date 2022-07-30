<template>
	<div id="login">
		<!-- <div class="goBack">
			<span style="font-size: 80px;margin-left: 10px;color: white;font-weight: 100;font-family: 'fang song';cursor: pointer;"@click="toHome"> < </span>
			<span style="font-size: 30px;font-family: 'fang song ';color: plum;">美好的购物生活从登录网站开始</span>
		</div>
	 -->
		<div style="padding: 150px 0 0 320px;display: flex;">
			<div class="prepare">
				<h3 style="padding-top: 50px;padding-left: 40px;">Life of Pi</h3>
				<p style=" padding-top: 20px; padding-left: 40px;padding-right: 15px;font-size: 20px;line-height: 2;">
				 He lives in Scarborough. He's a small, slim man – nomore than five foot five. Dark hair, dark eyes.  <br>
				 翻开有惊喜----------></p>
				
			</div>
		    <div class="novel"><loginBook></loginBook></div>
		</div>
		
	</div>
</template>

<script>
	import loginBook from '@/components/loginBook.vue'
	export default{
		// 数据
		data(){
			return{
				
			}
		},
		//组件
		components:{
			loginBook
		},
		// 方法
		methods:{
			toHome(){
				this.$router.push('/')
			},
			finish(){
				this.$Loading.finish();
			}
			
		}
	}
</script>

<style >
	#login .goBack{
		width: 100%;
		height: 80px;
		line-height: 80px;
		text-align: left;
		background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6));
	}
	
	#login{
		height: 800px;
		background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6));
	}
	#login .prepare{
		width: 320px;
		height: 420px;
		background-color: rgba(255, 255, 255, 0.774);
		box-shadow:   -30px 0px 30px  rgb(0, 0, 0,.6) inset;
		font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		text-align: left;
	}
	
</style>
