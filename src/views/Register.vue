<template>
	<div id="register">
		 <div style="background:#A4A0BB;padding: 20px;width: 40%;margin:0 auto;margin-bottom: 80px;">
		        <Card :bordered="false">
		            <p slot="title">欢迎注册</p>   
					<div style="display: flex;">
						<div >
							<img src="../../images/11.jpg" width="150px" />
						</div>
						<div>
							<el-form ref="form" :model="form" size="small" :rules="rules" style="margin-left: 20px;">
								<el-form-item prop="username">
								  <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
								</el-form-item>
								<el-form-item prop="password">
								  <el-input  placeholder="请输入密码" show-password v-model="form.password"></el-input>
								</el-form-item>
								<el-form-item prop="confirm">
								  <el-input  placeholder="请再次确认密码" show-password  v-model="form.confirm"></el-input>
								</el-form-item>
								<el-form-item prop="e-mail">
									<el-input  placeholder="邮箱" v-model="form.emall"></el-input>
								</el-form-item>
								<el-form-item>
								  <el-button style="width: 100%" type="primary" @click="register">注册</el-button>
								</el-form-item>
							  </el-form>
						</div>
						
					</div>	
		        </Card>
		    </div>

	</div>
</template>

<script>

import request from "@/utils/request";
import Book1 from '@/components/Book1.vue';

	export default{
		name: "Register",
		data() {
			return {
				form: {},
				rules: {
					name: [
					{required: true, message: '请输入用户名', trigger: 'blur'},
					],
					password: [
					{required: true, message: '请输入密码', trigger: 'blur'},
					],
					confirm: [
					{required: true, message: '请确认密码', trigger: 'blur'},
					],
				}
			}
		},
		components:{
			Book1
		},
		methods: {
			register() {

				if (this.form.password !== this.form.confirm) {
					this.$message({
					type: "error",
					message: '2次密码输入不一致！'
					})
					return
				}

				this.$refs['form'].validate((valid) => {
					if (valid) {
					request.post("/webuser/register", this.form).then(res => {
						if (res.code === '0') {
						this.$message({
							type: "success",
							message: "注册成功"
						})
						this.$router.push("/login")  //登录成功之后进行页面的跳转，跳转到主页
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
	#register{
			height: 600px;
			/* background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6)); */
			background: url('https://tenfei03.cfp.cn/creative/vcg/800/new/VCG211185970484.jpg') ;
			padding: 100px 0;
		}
	#register input,#register button {
	position: relative;
	overflow: hidden;
	outline: none;
	margin: 10px 20px;
	border: 1px solid gray;
	}
	#register .ivu-input-prefix i, .ivu-input-suffix i {
	position: absolute;
	top: 10px ;
	left: 30px;
	font-size: 16px;
	line-height: 32px;
	color: #808695;
	}
	
	.input-style{
		height: 20px;
	}
</style>
