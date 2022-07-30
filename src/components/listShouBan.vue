<template>	
	<div class="xun">
		<ul >
			
			<li v-for="(item,index) in dollData" :key="index">
				<div  class="list">
					<div   class="circle">					
					</div>
					<div class="circle2">					
						<span style="text-align: center;">{{index + 1}}</span>
					</div>
					<div class="listTop">
						<div class="listLeft">
							<img :src="item.dimg1" />
						</div>
						<!-- 金额样式 -->
						<div class="listRight">
							<div class="ltitle">
								{{item.dname}}
							</div>
							<Divider orientation="right" style="margin-top: 10px;"><i>只可预订</i></Divider>
							<div style="display: flex;justify-content: space-around;width: 98%;margin: 0 auto;color: #630a65;">
									<chevren></chevren>
									<div style="font-size: 14px;cursor: default;"><Icon type="md-heart-outline" /> 点击收藏</div>
							</div>
								
							<!-- 对话框 -->
							<div class="draw1">	
								<Button  @click="modal6 = true">
									 <span style="
									  color: #743b75;
									  font-size: 18px;
									  font-weight: 500;  "> 
									  ￥{{item.dprice1}}
									  </span>
									<span style="color: #2b091b;">预定</span>
								 </Button>							
								  <Modal
									  v-model="modal6"
									  title="Book gysophylia"
									  :loading="loading"
									  @on-ok="asyncOK"
									>
									 <div class="fcontent">
										 <span style="color: red;">温馨提示：</span><br>
										 <p>1.该商品位只可预定商品，预定24小时后不提供服务</p>
										 <p>2.每一位用户只可预定一次</p>
										 <p>3.商品有破损按程度赔偿</p>
										 <p>4.所有预定商品跟原图一致</p>
										  <Divider>勾选协议可预订</Divider>
										 
										  <el-checkbox 
										 
										  v-model="checked">
											  同意协议所提及内容
										 </el-checkbox>
									 </div>
								  </Modal>
							<!-- 对话框 -->						
							<!-- 金额样式 -->
							</div>
						</div>
					</div>
					<div class="bottom">
					</div>
				</div>
			</li>
			
			
			
		
		</ul>		
	</div>
</template>

<style scoped="scoped">
	.xun ul {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	
	.list  {
		position: relative;
		overflow: hidden;
		width: 100%;
		margin: 15px auto;
		height: 215px;
	}
	
	.xun{
		width: 100%;
	}
	.xun ul li{
		width:31%;
		margin-left: 30px;
		list-style: none;
	}
	.circle {
		position: absolute;
		top: 20px;
		left: 0%;
		z-index: 3;
		width: 48px;
		height: 48px;
		background: white;
		border-radius: 50%;
		border:2px solid mediumpurple;
	}
	.circle2 {
		position: absolute;
		top: 20px;
		left: -1%;
		z-index: 3;
		width: 45px;
		height: 45px;
		background:rgba(80,79,128,.5);
		border-radius: 50%;
		
	}
	.listTop {
		display: flex;	
		position: absolute;
		top:0;
		left: 4%;
		z-index: 2;
		height:210px;
		width: 90%;
		background: rgba(65,12,70,.3);
		border-radius: 5%;
		box-shadow: 5px 15px 15px  #a370af; 
		justify-content: space-around;
		background-image: linear-gradient(to bottom,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(212,185,217,.6));
		
		
	}
	.listLeft {
		font-size: 14px;
		width:100%;
	}
	.listLeft img {
		margin:5% 10px;
		width:90%;
		height: 92%;
		border-radius:10% ;
	}
	.listRight{
		margin: 5% auto;
		font-size: 24px;
		
	}
	.listRight .ltitle {
		padding: 0;
		border: none;
		height:40px;
		padding: 3px;
		font-size: 13px;
		font-weight: 100;
		color: #e2dcdd;
		text-align: left;
		margin-bottom:15px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.draw1 {
		width:180px;
		display: flex;
		justify-content: flex-end;
			  
	}
	


	.draw1 button span {
		font-size: 11px;
	}

	ivu-divider-horizontal.ivu-divider-with-text-center {
		border-top: 2px solid #0095DD;
	}

	.draw1 button {
		font-size: 10px;
		width: 120px;
		height: 30px;
		background: #7F7F99;
		border: none;
		color: deeppink;
	}

	 .draw1 .ivu-btn{
		font-size: 10px;
		width: 160px;
		color: deeppink;
		margin-right: 10px;
	}
    .draw1 button span {
		font-size: 11px;
		
		
	}
	
	
     .ivu-btn-icon-only{
		 height: 40px;
		 width: 40px;
	 }
	 .list .ivu-modal-content {
		  background: #000000;
	
	 }
	 .fcontent p {
		 margin: 5px 0;
		 
	 }
	 .ivu-modal-wrap ,.ivu-modal-content  {
		 background-image: linear-gradient(to bottom ,rgba(229,196,211,.2),rgba(229,129,170,.4));
	 }
	 
	
	
</style>
<script>
	import request from "@/utils/request";
	import chevren from './chevren.vue'
	export default {
			data() {
				return {
					dollData:[],
					modal6: false,
					loading: true,
					checked: true,}
			},
			components:{
				chevren
			},
			mounted() {
				this.load4()
			},
			methods: {
					asyncOK () {
							setTimeout(() => {
								this.modal6 = false;
							}, 2000);
						},
					load4() {
						this.loading = true
						request.get("/doll", {

							params: {
								pageNum: this.currentPage,
								pageSize: this.pageSize,
								search: this.search
							}
						}).then(res => {
							console.log('res ==>dollcccccccccc', res)
							// this.loading = false
							this.$nextTick(()=>{
								this.dollData = res.data.records
							})


						})
					},
				}	,
				
	}						
</script>
