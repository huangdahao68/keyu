<template>
  <div id="app">
	<div class="elogo">
		
		<img src="../images/welcome1.png" height="100px">
		<!-- <img src="../images/elogo.png" height="100px"/> -->
	</div>
	
    <div id="nav">
		<div class="logo">
			<img src="../images/logo1.jpg" height="120px" width="100%">
		</div>
		<ul class="navList">
			<li><router-link to="/mine"><span><Icon type="logo-freebsd-devil" /></span>个人中心</router-link></li>
			<li><router-link to="/about"><span><Icon type="logo-snapchat" /></span>关于我们</router-link></li>
			<li><router-link to="/shopCart"><span><Icon type="md-cart" /></span>购物车</router-link></li>
			<li><router-link to="/category"><span><Icon type="md-menu" /></span>分类</router-link></li>
			<li><router-link to="/"><span><Icon type="ios-leaf" /></span>首页</router-link></li>
			
			<li>
				<span v-if="$store.getters['users/ifLogin']">
					{{user.name}}，你好
					<button @click="out" id="outbtn">退出登录</button>
				</span>
				<span v-else style="color: papayawhip;">[未登录]</span>
				
			</li>
		</ul> 
		
    </div>
	
    <router-view/>
	<!-- 底部 -->
	<div class="footer">
		<div>
			<img src="../images/elogo.png" height="120px">
		</div>
		<div>
			<img src="https://img.51miz.com/Element/00/88/79/42/67d4bd8f_E887942_d5fc3fc1.png" height="120px">
		</div>
		<dl>
			<dt>购物指南</dt>
			<dd>配送时效说明</dd>
			
			<dd>购买服装须知</dd>
		</dl>
		<dl>
			<dt>售后服务</dt>
			<dd>保质期说明</dd>
		
			<dd>联系客服</dd>
		</dl>
		<dl>
			<dt>自助服务</dt>
			<dd>我的购物车</dd>
			<dt>订单物流查询</dt>
			<dd>建议反馈</dd>
		</dl>
		<dl>
			<dt>旗舰店公众号</dt>
			<dd><img src="https://p2.ssl.qhimgs1.com/sdr/400__/t013e512de99b7af712.jpg"></dd>
		
		</dl>
	
	</div>
		
  </div>
</template>

<style>
#outbtn{
	background-color: #cb96cfc4;
	line-height: 30px;
}
.fixcart{
	height: 60px;
	width: 60px;
	background: white;
	position: fixed;
	top: 60%;
	left:1%;
}
#app {
padding: 0;

margin: auto;
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
font-size: 16px;
background-color: #65617C;
overflow: hidden;

}

#nav .ivu-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: optimizeLegibility;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: -.125em;
    text-align: center;
    
    color: #e6c9dfc4;
}
#nav {
	 display: flex;
	 justify-content: space-between;
	 height: 127px;
	 background-color:#A4A0BB; 
	}
/* 店铺logo样式 */
#app .elogo {
	position: absolute;
	z-index: 1;
	display: flex;
	top:1.5%;
	left:23%;
}
#nav .logo {
  width: 20.5%;
  height: 120px;
  background-color: #7F7F99;
}
/* 导航列表样式 */
#nav .navList {

  width: 79%;
  height: 120px;
  background:#7F7F99;
  justify-content: space-around;
  list-style: none;
  padding: 0; 
}
#nav .navList span {
	margin: 0 5px;
}
#nav .navList li {
  float: right ;
  line-height: 120px;
  color: white;
  

}

#nav a {
  display: block;
  font-weight:400;
  font-size: 20px;
  width: 125px;
  height:100%;
  color:white;
  font-family: "fang song";
}

#nav a.router-link-exact-active {
  color: black;
 /* background-image: linear-gradient(to right,rgba(169 190 190 / 10%),rgba(222 136 207 / 18%),rgba(104 36 112 / 27%) ,rgba(123 69 155 / 29%),rgba(112 58 125 / 63%))
 */
background: #65617C;
}
.footer{
	display: flex;
	justify-content: space-around;
	width: 98%;
	height: 150px;
	margin: 10px auto;
	background: #65617C;
	color: #988c8c;
	font-weight: 100;
	font-family: 'fang song';
	}
	.footer dl {
	margin-top: 10px;
	}
	.footer dl img {
	height: 120px;
	}
</style>
<script>
	export default{
		data() {
			return {
				buser: {}
				}
		},
		created() {
			// //在页面加载时读取sessionStorage里的状态信息
			// if (sessionStorage.getItem("store") ) {
			// 	this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
			// } 

			// //在页面刷新时将vuex里的信息保存到sessionStorage里
			// window.addEventListener("beforeunload",()=>{
			// 	sessionStorage.setItem("store",JSON.stringify(this.$store.state))
			// 	})
			let str = sessionStorage.getItem("user") || "{}"
			this.user = JSON.parse(str)
			   //此方法写在method外
		
			this.isLogin();
			
		},
		methods:{
        //判断是否已经登录状态
        isLogin() {
				//判断sessionStorage中是否有登录信息
				if (sessionStorage.getItem("user") != null ) {
					//存在登录信息就从sessionStorage中提取状态再传值给vuex中
					this.$store.commit("users/setUser", sessionStorage.getItem("user"));
				} else {
					//登录不成功就将vuex中的state清空
					this.$store.commit("users/setUser", null);
				}
				//返回登录状态islogin
				return this.$store.getters.isLogin;
						},
				//通过登录状态来判断用户是否登录执行相关的操作
				out(){
					sessionStorage.clear();
					location.reload();
				}
			},
				
	}
</script>
