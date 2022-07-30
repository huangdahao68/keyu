<template>	
	   <!-- 用户已经登录显示页面 -->
	   <div class="isLogin" v-if="$store.getters['users/ifLogin']">
			 <Divider style="margin-top:20px;" orientation="right"><i>资料与地址</i></Divider>
			<!-- <div class="triangle-topright ">
				
			 </div> -->
			 <div class="triangle-topright2 "></div>
		   <!-- 资料与收藏 -->
			<div class="personal">
				<!-- 我的资料布局 -->
				<div class="grad">
					  <div style="background:#eee;margin-top: 52px;text-align: right;background: rgba(0,0,0,.0);">
					        <Card :bordered="false" style="">
					            <p slot="title" style="display: flex;justify-content: space-between;"><Icon type="md-contact" />我的资料</p>
								<el-form class="box-card" ref="form" :model="form">
									<div class="text item">
										姓名<el-input v-model="form.name" disabled style="height: 20px;" size="mini"></el-input>
										邮箱<el-input v-model="form.emall" disabled size="mini"></el-input>
										</div>
								  </el-form >
					        </Card>
					    </div>
				</div>
				<!-- 收货地址布局 -->
				<div class="grad1">
					<div style="background:#eee;margin-top: 52px;text-align: right;background: rgba(0,0,0,.0);">
					      <Card :bordered="false" style="">
					          <p slot="title" style="display: flex;justify-content: space-between;"><Icon type="md-contact" />商品收藏</p>
					            <ul style="display: flex;justify-content: space-around;" >
								 <li style="list-style: none;" v-for="(item,index) in 5" :key="index">
									<!-- <div><strong>ak</strong> 15724039184</div>
									 <div>广东省 佛山市 高明区 美的森林度假区</div> -->
									 <img src="../../images/12.jpg" height="120px"/>
								 </li>
							 </ul>
					      </Card>
					  </div>
				</div>
			</div>
		     <Divider style="margin-top: 50px;" orientation="right"> <i>收藏与订单</i></Divider>
			<!-- 订单与地址 -->
			<div class="address">
				<!-- 时间轴组件 -->
				<div style="margin-top: 80px;color: white;">
					  <Timeline>
					        <TimelineItem color="green">个人资料</TimelineItem>
					        <TimelineItem color="green">收货地址</TimelineItem>
					        <TimelineItem color="red">我的订单</TimelineItem>
					        <TimelineItem color="blue">我的收藏</TimelineItem>
					    </Timeline>
				</div>
				<!-- 我的订单布局 -->
				<div class="grad2" style="margin-top:20px;" >
					<div style="background:#eee;text-align: right;background: rgba(0,0,0,.0);">
					      <Card :bordered="false" style="margin-top: 50px;">
					          <p slot="title" style="display: flex;justify-content: space-between;"><Icon type="md-contact" />我的订单</p>
							  <listShouBan2></listShouBan2>
								<p>未有订单记录，去逛逛</p>
					        
					      </Card>
					  </div>
				</div>
				<!-- 我的收藏布局 -->
				<div class="grad3" style="margin-top: 80px;">
					<Card :bordered="false" style="margin-top: 50px;overflow: hidden;height: 300px;" id="show">
					        <p slot="title" style="display: flex;justify-content: space-between;"><Icon type="md-contact" />我的收藏</p>
					        <listShouBan2></listShouBan2>
									<p>未有收藏，对心仪的商品点击收藏吧！</p>
					</Card>
					  <!-- <div>
					       <a href="#" @click="show()">{{sss?"展开":"收起"}}</a>
					   </div> -->
				</div>
				</div>
			
			<!-- $store.getters['users/ifLogin']	 -->
		</div>
	
	<!-- 用户未登录展示页面 -->
	   <div class="unLogin" v-else>
			<div>
		     	<img src="../../images/t01e84fb2d4b3509228.gif"  margin-top="50px"/>
			</div>
			
			 <div style="background:#A4A0BB;padding: 20px;height: 50%;margin: auto 30px;">
			        <Card :bordered="false">
			            <p slot="title" style="font-size: 20px;color: firebrick;">还没登录哦!!!</p>
						<p style="font-size: 18px; text-align: left;">
							The sky is raining instead of the teardrops of your eyesThe flowers are smiling after the naturalshowerThe trees are trembling by the hurricaneThe earth has alreay gone to sleep
						</p>
					    <Button @click="toLogin()">登录</Button>
						
			        </Card>
			    </div>
		</div>
	
</template>

<script>
	import listShouBan2 from '@/components/listShouBan2.vue'
	import {mapState,mapActions} from 'vuex'
	export default{
		
		data() {
			return{
				 sss:false,
				 form:{},
			}
			
		},
		components:{
			listShouBan2
		},
		created() {
			let str = sessionStorage.getItem("user") || "{}"
    		this.form = JSON.parse(str)
		},
		methods:{

			//删除收藏商品
			...mapActions('shoucang',["delShouCang"]),
			 toLogin (e) {
			this.$router.push('Login')
			// window.open('./Login.vue')
			   
			 },
			 // 点击更多展开功能
			 show () {
			     if(this.sss==false){
			       document.getElementById('show').style.height="auto"
			       this.sss=!this.sss
			     }else{
			       document.getElementById('show').style.height="500px"
			       this.sss=!this.sss
			     }
			   }
		
		}
	}
</script>

<style>
	.el-input {
	margin-bottom: 16px;
	}
	.triangle-topright {
				/* 右上三角 */
		width: 0;
		height: 0;
		
		border-bottom: 120px solid transparent;
		border-right: 620px solid #7F7F99;
		text-align: right;

		 position: absolute;
		 top: 42%;
		 right:5%;
			}
	.triangle-topright2 {
				/* 右上三角 */
		width: 0;
		height: 0;
		border-top: 50px solid transparent;
		border-bottom: 50px solid transparent;
		border-right: 600px solid #7F7F99;
	    text-align: right;
		 position: absolute;
		 top: 5%;
		 right:2%;
			}		
	
	
	.unLogin{
		display: flex;
		width: 100%;
		height: 500px;
		background: url(../../images/background.png) ;
	}
	.unLogin button {
		width: 100px;
		height: 50px;
		line-height: 50px;
		font-size: 30px;
		margin-top: 50px;
		color: white;
		background: #7F7F99;
	}
	.unLogin .ivu-card-head {
	    border-bottom: 1px solid #e8eaec;
	    padding: 14px 16px;
	    line-height: 1;
		background: #7F7F99;
	}
	.personal,.address{
		width: 98%;
		justify-content: space-around;
		margin: 20px auto;
		display: flex;
		
	}
	.isLogin{
		position: relative;
		overflow: hidden;
		
	}
	.isLogin .grad {
	  width: 400px;
	  height: 300px;
	  background: #7F7F99;
	  clip-path: polygon(0 0, calc(100% - 100%) 0,100% 50px, 100% calc(100% - 0px),
	  calc(100% - 0px) 100%, 0px 100%,0 calc(100% - 0px),0 0px);
	  border-radius: 5%;
	    box-shadow: 30px 10px 20px 20px white inset;
	  
		}
	.isLogin  .ivu-card {
		
		width:98%;
		margin: 0 auto;
		display: block;
		border-radius: 4px;
		font-size: 14px;
		position: relative;
		transition: all .2s ease-in-out;
	
		}
	.isLogin  .ivu-card .ivu-card-head {
		border-bottom: 1px solid #e8eaec;
		padding: 14px 16px;
		line-height: 1;
		background: #7F7F99;
		}
	.isLogin .ivu-card-body {
		background-color: rgba(101,97,124,.5);
	}
	.isLogin .grad1 {
	  width: 800px;
	  height:250px;
	  background:#7F7F99;
	  clip-path: polygon(0 0, calc(100% - 100%) 0,100% 50px, 100% calc(100% - 0px),
	  calc(100% - 0px) 100%, 0px 100%,0 calc(100% - 0px),0 0px);
	  border-radius:5%;
	  margin-top: 50px;
	  box-shadow: 30px 10px 20px 20px white inset;
		}
	.isLogin .grad .box-card{
		text-align: left;
	}
	.isLogin .grad2{
	  width:500px;
		height: 200px;
	  overflow: hidden;
	  background:#7F7F99;
	  clip-path: polygon(0 0, calc(100% - 100%) 0,100% 50px, 100% calc(100% - 0px),
	  calc(100% - 0px) 100%, 0px 100%,0 calc(100% - 0px),0 0px);
	  border-radius:5%;
	  margin-top: 50px;
	   box-shadow: 30px 10px 20px 20px white inset;
		}	
			.isLogin .grad3{
	  width:500px;
		height: 200px;
	  overflow: hidden;
	  background:#7F7F99;
	  clip-path: polygon(0 0, calc(100% - 100%) 0,100% 50px, 100% calc(100% - 0px),
	  calc(100% - 0px) 100%, 0px 100%,0 calc(100% - 0px),0 0px);
	  border-radius:5%;
	  margin-top: 50px;
	   box-shadow: 30px 10px 20px 20px white inset;
		}								   
</style>
