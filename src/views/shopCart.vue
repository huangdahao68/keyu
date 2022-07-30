<template>
	<!-- 用户已登录展示页面 -->
	<div id="shopCart" v-if="$store.getters['users/ifLogin']">
		<!-- 购物车页面标题 -->
		<div class="welcome">
			<h1>welcome to your shopCart</h1>
			<p>温馨提示，只有购物车只存放需要购买的商品</p>
		</div>
			
		
		<!-- 商品部分内容 用户已经登录之后的页面 -->
		<div class="product">
			<!--  -->
			<div class="head">
				<span style="width: 300px;">Product</span>
				<span style="width: 426px;">quality</span>
				<span style="width: 200px;">Quanity</span>
				<span style="width: 220px;">Price</span>
			</div>
			<div class="body">
				<ul>
				   <li v-for="item in items" :key="item.id">
						<div class="cartItem " style="width: 300px; margin-left:4%; position: relative;">
							<img :src="item.imgSrc" />
							<div style="position: absolute;top: 70px ;right: 80px; color: gray;">
								<span>X</span>
								<span>{{item.num}}</span>
							</div>
						</div>
						<div class="cartItem" style="width: 400px;">
							<p>{{item.title}}</p>
							
						</div>
						<div class="cartItem" style="width: 220px;line-height: 160px;">
							<button><Icon type="md-arrow-dropleft" /></button>
							<small>{{item.num}}</small>
							<button @click="increat(item.id)"><Icon type="md-arrow-dropright" /></button></div>
						<div class="cartItem" style="width: 200px;line-height: 160px;">单价：$<span style="width: 180px;">{{item.price}}</span><i @click="del(item.id)"><Icon type="md-close" /></i></div>
				   </li>
				   				  
				   
				</ul>
			</div> 
			<div class="total" style="background: rgba(0,0,0,.0);">
				<span style="width: 300px;">total price</span>
				<span style="width:425px;"></span>
				<span style="width: 200px;"><Button >结算</Button></span>
				<span style="width: 200px;">${{total}}</span>
			</div>
			
		</div>
	</div>

	<!-- 用户未登录展示页面 -->
	<div class="logoutCart" v-else>
		<div class="logoutCart-img">
			<img src="../../images/71.jpg" />
		</div>
		<div style="margin: 200px 0 0 30px;">
			还没登陆哦!
			
		</div>
		<router-link to='/Login' class="scbtn">前往登录</router-link>
    </div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		data(){
			return {
				shopCartList:[
					{
						imgSrc:"https://gw.alicdn.com/bao/uploaded/i4/2008505940/O1CN01Q2Kjas1tkZ7uwHFdk_!!2008505940.jpg_b.jpg",
						title:"【闪光少女】夏季lolita裙现货暗黑双子姐妹打歌服洛丽塔连衣裙,闪光少女】夏季lolita裙现货暗黑双子姐妹打歌服洛丽塔连衣裙",
						price:3222,
					},
					{
						imgSrc:"http://thumb.kantu.com/tk4318755/612134401089/i2/img/1/O1CN01lsoepA1Y3PyDn5ADD_!!0-item_pic.jpg_250x250.jpg",
						title:"【闪光少女】夏季lolita裙现货暗黑双子姐妹打歌服洛丽塔连衣裙",
						price:1222,
					},
					
				]
				
				
			}
		},
		computed:{
			...mapState({items:state => state.shopcart.items}),
			 ...mapGetters("shopcart",{total:'totalPrice'}),
		},
		methods:mapActions('shopcart',["del"]),
	}
	
</script>

<style>
	.scbtn{
		text-align: center;
		margin-top: 205px;
		margin-left: 10px;
		font-size: 25px;
		padding: 0;
		color: aqua;
	}
	.logoutCart-img{
		margin-top: 45px;
	}
	.logoutCart{
		background-image: linear-gradient(to bottom,rgba(200,186,185,4),rgba(150,135,154,.4),rgba(171,169,181,.7));
		
		height: 500px;
		display: flex;
		color: white;
		font-weight: 100;
		font-size: 30px;
		font-family: 'Courier New', Courier, monospace;
		margin: auto auto;
		
	}
	.logoutCart img {
		width: 300px;
		height: 400px;
		
	}
	#shopCart{
		background: white;
		height: 500px;
		background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6));
	}
	.product{
	
		/* background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6)); */
		padding-top: 20px;
	}
	#shopCart .welcome {
		height: 50px;
		color: white;
		/* background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6)); */
		}
	#shopCart .welcome p {
		font-size: 6px;
		color: gray;
	}
	
	.product .head,.total{
		width: 98%;
		margin: 20px auto;
		height: 60px;
		background:#71658B ;
	}
	.total {
		color: black;
		font-size: 30px;
		font-family: "gill sans mt";
	}
	.product .head span,.total span{
		display:inline-block;
		font-family: "fang song";
		text-align: initial;
		
	}
	.product .head span{
		color: white;
		height: 60px;
		line-height: 60px;
	}
	.product .body {
		width: 98%;
		border-radius: 2%;
		background:white;
		margin: 0 auto;
		
	}
	 .product .body li  {
		 display: flex;
		
		list-style: none;
		height: 160px;
		color: gray;
		margin: 10px 0 ;
		
	}
	.product .body .cartItem{
		height: 160px;
		text-align: left;
	}
	.product .body li img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin:5px 160px 5px 0;
	}
	.product .body .cartItem span {
		margin-left: 5px;
		color: red;
		font-size: 20px;
		font-weight: 600;
		font-family: "bodoni mt black";
	}
	.product .body .cartItem p {
		width: 97%;
		margin-top:67px;
	}
	 .product .body .cartItem i{
		margin-left: 15px;
		font-size: 30px;
		
	} 
	.product .body .cartItem button{
		width: 50px;
		outline: none;
		border: none;
		background: rgba(0,0,0,.0);
		font-size: 40px;
		
	}
	.total span {
		display: inline-block;
	}
	
</style>
