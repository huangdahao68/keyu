<template >
	<div class="book">
	       <div class="feng">
			   <img src="http://bpic.588ku.com/back_pic/05/10/39/27598b2cc0338d2.jpg!/fw/320/quality/90/unsharp/true/compress/true">
		   </div>     
	       <div class="wen">
	           <h3 style="padding-top: 50px;padding-left: 120px;">欢迎登录</h3>
				
				<el-form ref="form" :model="form"  size="small " style="width: 200px;">
						<el-form-item prop="username" >
						<el-input v-model="form.name" placeholder="用户名"></el-input>
						</el-form-item prop="password" > 
						<el-form-item >
						<el-input v-model = "form.password" placeholder="密码" show-password></el-input>
						</el-form-item >
						<el-button style="width: 100%" type="primary" @click="login">登 录</el-button>
						</el-form-item>
				</el-form>
				
			 <input type="checkbox" ></input><span style="margin-left: 60px;">自动登录</span>

				<p style="margin-left:60px ;cursor: pointer;">其他登陆方式: <Icon type="ios-chatbubbles" /><i>Wechat</i></p>
				<p style="margin-left:60px ;color: brown;cursor: pointer;" @click="toRegister() "><Icon type="ios-bicycle" /> 注册新账号</p>
	       </div>
	</div>
</template>

<script>
	import request from "@/utils/request";
	  export default {
		  data() {
			return {
				form: {},
					rules: {
						name: [
						{required: true, message: '请输入用户名', trigger: 'blur'},
						]
						,
						password: [
						{required: true, message: '请输入密码', trigger: 'blur'},
						],
					},
				}

		  },
			//方法
			methods:{
				toRegister(){
					// this.$router.push('Register')
					this.$router.replace('Register')
				},
				// login(){
				// 	if(this.loginForm.username === '' || this.loginForm.password === ''){
				// 		this.$message('请输入账号或密码')
				// 	}else if(this.loginForm.username === 'sunny' && this.loginForm.password === '123456'){
				// 		this.$store.commit('users/setUser',this.loginForm)
				// 		this.$message('登陆成功')
				// 		this.$router.push('/')
				// 		console.log("用户信息",this.loginForm)
				// 	}else{
				// 		this.$message('请输入正确的账号或密码')
				// 	}
				// }
				login() {
					this.$refs['form'].validate((valid) => {
						if (valid) {                    
							request.post("/webuser/login", this.form).then(res => {
								if (res.code === '0') {
									this.$message({
										type: "success",
										message: "登录成功"
									})
									////
									console.log(res)
									this.$store.commit('users/setUser',res.data)
									////
									sessionStorage.setItem("user", JSON.stringify(res.data))  // 缓存用户信息
									this.$router.push("/")  //登录成功之后进行页面的跳转，跳转到主页
									// location.reload();
									//延时0.5秒页面刷新
									setTimeout(function (){location.reload();},"500")
								} else {
									this.$message({
										type: "error",
										message: res.msg
									})
								}
								
							})
						}
					})
				}
			 }
			 
	    }
</script>

<style>
	.el-input__suffix{
		right: -45px;
	}
	.book{
		position: relative;
		width: 320px;
		height: 420px;
		background-color: rgba(255, 255, 255, 0.774);
		transform-style:  preserve-3d;
		box-shadow:   30px 0px 30px  rgb(0, 0, 0,.6) inset;
		transition: 1s cubic-bezier(.79,.34,.47,.92);
		transform: rotate(-2deg);
		}
	.book::after{
		content: '';
		position: absolute;
		height: 3px;
		width: 303px;
		left: 0px;
		bottom: -3px;
	   /*  background-color: rgb(100, 96, 96); */
	   background-image: linear-gradient(to right,rgb(71, 68, 68),rgba(124, 120, 120, 0.3) );
		border-bottom-left-radius: 5px;
		
	   }
	.book::before{
		content: '';
		position: absolute;
		width: 3px;
		height: 100%;
		right: -3px;
		top: 0px;
		background-color: rgb(112, 108, 108);
	   background-image: linear-gradient(to top,rgb(114, 111, 111),rgba(9   0, 87, 87, 0.5) );; 
		border-top-right-radius: 3px;
		
	   }
	 .book:hover{
		box-shadow:   30px 0px 30px  rgb(0, 0, 0,.6) inset;
		transform: rotate(-2deg);
	
		}
	 .feng{
		position: absolute;
		width:320px;
		height: 100%;
		z-index: 2;
		/* background-image: url(../../images/11.jpg); */
		background-size: 100% ;
		transform-origin: left;
		transition: 1s cubic-bezier(.79,.34,.47,.92);
		border-top-left-radius: 2px;
		border-bottom-left-radius: 2px; 
	
	
		box-shadow:   30px 0px 30px  rgb(0, 0, 0,.6) inset;
	    
	
		}
	.feng img{
		width: 320px;
		height: 420px;
	}
	.book:hover .feng{
		box-shadow:   300px 0px 30px  rgb(0, 0, 0,.6) inset;
		transform: rotateY(-140deg); 
		width: 320px;
		}
	.wen{
		position: absolute;
		top: 0;
		left: 0;
		width: 320px;
		height: 100%;
		font-family: 'fangsong';
		text-align: left;
		}
	.wen input,.wen button {
		position: relative;
		overflow: hidden;
		outline: none;
		margin: 10px 60px;
		border: 1px solid gray;
		}
	.wen .ivu-input-prefix i, .ivu-input-suffix i {
		position: absolute;
		top: 10px ;
		left: 70px;
		font-size: 16px;
		line-height: 32px;
		color: #808695;
		}
</style>
