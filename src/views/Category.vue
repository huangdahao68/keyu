<template>
	<div id="category">
		
		    <Tabs>
				<!-- 礼服 -->
		        <TabPane label="礼服" >
					 <div class="navLeft">
						<el-tabs :tab-position="tabPosition" >
							<el-tab-pane label="礼服">
								<!-- </ul> -->
								<ul class="lifuList">
									
									<li  v-for="(goods,index) in lifuData" :key="index" @click="lifuClick(index)">
										<!-- <router-link :to="{name:'detail',params:{id:goods.uuid}}"> -->
											<img :src="goods.limg1" />
											
											<p style="color: dimgray;">{{goods.lname}}</p>
										<!-- </router-link> -->
										<div style="display: flex;justify-content: space-around;width: 98%;margin: 0 auto;">
												<chevren></chevren>
												<div style="font-size: 14px;cursor: default;" @click="addShouCang(goods)"><Icon type="md-heart-outline" /> 点击收藏</div>
											
										<span style="font-size: 18px;">￥{{goods.lprice1}}起</span>
										</div>
								    <Button @click="add(goods)" >加入购物车</Button>
							         	
									</li>
									
								</ul>
									
							</el-tab-pane>
							<!-- <el-tab-pane label="男装">
								
								<ul class="lifuList" >
										
									    </ul>
									
							</el-tab-pane> -->
							
						</el-tabs>
					 </div>
				</TabPane>
				<!-- 婚礼 -->
		        <TabPane label="婚礼" >
					<div class="navLeft">
						<el-tabs :tab-position="tabPosition" >
							<!-- 中式婚礼 -->
							<el-tab-pane label="中式">
								<ul class="weddingList" >
									<li v-for="(item,index) in marryData" :key="index">
										<div class="bookItem">
												<div style="text-align: left;font-size: 12px;line-height: 2;">{{item.mname}}</div>
											 <Divider orientation="right"><i>中式婚礼</i></Divider>
											<div style="display: flex;font-size: 10px;color: #303133;text-align: left;">
												
												<small style="color: #65617C;">(提供租用服务)</small>
												<span style="color: red;">￥{{item.mprice1}}起</span>
											</div>
											
											<div style="display: flex;justify-content: space-around;margin: 10px 0 20px 0;">
												<div style="width:90px;height: 30px;color: red;font-size: 10px;background: white;line-height: 30px;">可遇官方旗舰店</div>
												<div style="font-size: 13px;cursor: default;"><Icon type="md-heart-outline" /> 点击收藏</div>
										    </div>
											
											
										 
											
								        <Button >加入购物车</Button>
							         	
											
										</div>
										<div class="wbook">
										   <div class="wfeng">
											   <img :src="item.mimg1">
										   </div>     
										   <div class="wwen">
											   <h3 style="padding-top: 50px;padding-left: 40px;">Life of Pi</h3>
											   <p style=" padding-top: 20px; padding-left: 40px;padding-right: 15px;">
												He lives in Scarborough. He's a small, slim man – nomore than five foot five. Dark hair, dark eyes. 
											   </p>
										   </div>
									</div>
									</li>
								
								</ul>
						
							</el-tab-pane>
							<!-- 西式婚礼 -->
							<el-tab-pane label="西式">
								<ul class="weddingList" >
									<li v-for="(item,index) in xifuData" :key="index">
										<div class="bookItem">
											<div style="text-align: left;font-size: 12px;martline-height: 2;margin-top: 1px;">{{item.xname}}</div>
											<Divider orientation="right"><i>西式婚礼</i></Divider>
											<div style="display: flex;font-size: 10px;color: #303133;text-align: left;">
												<small style="color: #65617C;">(提供租用服务)</small>
												<span style="color: red;">￥{{item.xprice1}}起</span>
											</div>
											
											<div style="display: flex;justify-content: space-around;margin: 20px 0 20px 0;">
												<div style="width: 90px;height: 25px;color: #dcd4d4;font-size: 10px;background: #7F7F99;line-height: 25px;">可遇官方旗舰店</div>
												<div style="font-size: 13px;cursor: default;"><Icon type="md-heart-outline" /> 点击收藏</div>
										    </div>
								             <Button >加入购物车</Button>
								     	
											
										</div>
										<div class="wbook">
										   <div class="wfeng">
											   <img :src="item.ximg1">
										   </div>     
										   <div class="wwen">
											   <h3 style="padding-top: 50px;padding-left: 40px;">Life of Pi</h3>
											   <p style=" padding-top: 20px; padding-left: 40px;padding-right: 15px;">
												He lives in Scarborough. He's a small, slim man – nomore than five foot five. Dark hair, dark eyes. 
											   </p>
										   </div>
									</div>
									</li>
								
								</ul>
														
							</el-tab-pane>
							
							
						</el-tabs>
					</div>
				</TabPane>
				<!-- COSPLAY -->
		        <TabPane label="Cos" >
					<div class="navLeft">
						<el-tabs :tab-position="tabPosition" >
							<el-tab-pane label="洛丽塔">
								<listCos></listCos>
							</el-tab-pane>
							<el-tab-pane label="汉服">商家推荐</el-tab-pane>
							<el-tab-pane label="欧美风">鞋子</el-tab-pane>
					    </el-tabs>
					</div>
				</TabPane>
			
				<!-- 手办 -->
				<TabPane label="手办" >
					<div class="shouban">
						<listShouBan></listShouBan>
						<!-- <listShouBan1></listShouBan1>
						<listShouBan2></listShouBan2>
					 -->
					</div>
					
				</TabPane>
		    </Tabs>
		   <router-link to="/shopCart">
			<!-- <div class="fixcart" >
			    <img src="../../images/shopcart.png" width="40px"/>
		    </div> -->
		   </router-link>

	</div>
</template>

<script>
import listShouBan from '@/components/listShouBan.vue'
import chevren from'@/components/chevren.vue'
// import listShouBan2 from '@/components/listShouBan2.vue'
import Book from '@/components/Book.vue'
import listCos from '@/components/listCos.vue'
import {mapState,mapActions} from 'vuex'
import request from "@/utils/request";
	 export default {
	    data() {
	      return {
			  lifuData:[],
			  marryData:[],
			  cosData:[],
			  xifuData:[],
			  dollData:[],
	      tabPosition: 'left',// 左边导航栏返回位置	

		
	      };
	   
		},
		    
		components:{
			listShouBan,
			chevren,
			Book,
			listCos
			
		
		},
	    //获取数据
		created(){
			this.$store.dispatch("category/getListData1")
			
		},
		computed:{
			...mapState({listData1 : state => state.category.list1,	})
		
		},
		mounted() {
			this.load()
			this.load1()
			this.load2()
			this.load3()
			this.load4()
		},
		// methods:mapActions ('shopcart',["add"],)
		methods:{
			//点击上商品事件
			lifuClick(index){
				this.indexcp=index
				this.$router.push({
					path:'/detail',
					query:{
						uuid:this.lifuData[index].uuid,
						indexcp:this.indexcp
					}	
				})
				console.log(this.lifuData[index].uuid);
				console.log(this.indexcp);
					
					
			},
			// 添加到购物车业务逻辑
			...mapActions('shopcart',["add"]),
			 ...mapActions('shoucang',["addShouCang"]),
			load() {
				this.loading = true
				request.get("/lifu", {
					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					// console.log('res ==>lifuccccccccccc', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.lifuData = res.data.records
					})


				})
			},
			load1() {
				this.loading = true
				request.get("/marry", {

					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					// console.log('res ==>marryccccccccccc', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.marryData = res.data.records
					})


				})
			},
			load2() {
				this.loading = true
				request.get("/cos", {
					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					// console.log('res ==>coscccccccccccc', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.cosData = res.data.records
					})


				})
			},
			load3() {
				this.loading = true
				request.get("/xiezhen", {

					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					// console.log('res ==>xiezhencccccccccc', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.xifuData = res.data.records
					})


				})
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
					// console.log('res ==>dollcccccccccc', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.dollData = res.data.records
					})


				})
			},

		}
	  };
	  
	  
</script>

<style >

	.el-tabs__content{
		min-height: 500px;
	}

	/* ------------------------------------ */
	#category{
		position: relative;
		overflow: hidden;
	}
	#category .fixcart {
		position: fixed;
		top:60%;
		left: 1%;
	}
	
	/* 侧边导航栏样式 */
	.el-tabs__item  {
		color: white;
		font-size: 15px;
	}
	.el-tabs__item.is-active {
	    color: white;
	    background: #7F7F99;
	}
	/* 顶部tab切换样式 */
	.ivu-tabs-nav {
	    padding-left: 0;
	    margin: 0;
	    float: left;
	    list-style: none;
	    box-sizing: border-box;
	    position: relative;
		overflow: hidden;
	    transition: transform .5s ease-in-out;
	    font-size: 18px;
	    color: white;
	    font-weight: 100;
	}
	.ivu-tabs-nav .ivu-tabs-tab-active {
	    color: #f5f2f8;
	    background: #7F7F99;
	}

	/* 礼服商品列表样式 */
	
	

	
	.lifuList li {
		list-style: none;
		width: 260px;
		height:420px;
		margin-left: 20px;
		margin-bottom: 40px;
		border-radius: 5%;
		
		/* background-image: linear-gradient(to right,rgba(14, 111, 111,.1),rgba(190, 187, 87, 0.4),rgba(190, 187, 87, 0.4) ,rgba(190, 187, 87, 0.4),rgba(190, 187, 87, 0.4)); */
		background: white;
		box-shadow:   20px 20px 20px  rgb(10, 80, 0,.4) inset;
		margin-top:20px ;
	}
	#category .lifuList  {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 20px;
		background-image: linear-gradient(to right,rgba(127,113,149,.4),rgba(139,153,190,.5),rgba(50,118,181,.6));
	}
	.lifuList li img {
		height: 67%;
		width: 100%;
	}
	.lifuList li span {
		color: red;
	}
	.lifuList li p {
		display: block;
		height: 50px;
		font-weight: 200;
		width: 98%;
		margin: 5px auto;
		font-size: 14px;
		text-align: left;
	}
	.lifuList li button{
		background-color:#7F7F99 ;
		color: white;
		margin-left: 20px;
		
	}
	/* 婚礼商品列表 */
	.wbook{
			position: relative;
			width: 180px;
			height: 260px;
			background-color: rgba(255, 255, 255, 0.774);
			transform-style:  preserve-3d;
			box-shadow:   300px 0px 30px  rgb(0, 0, 0,.6) inset;
			transition: 1s cubic-bezier(.79,.34,.47,.92);
		}
	.wbook::after{
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
	.wbook::before{
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
	 .wbook:hover{
		box-shadow:   30px 0px 30px  rgb(0, 0, 0,.6) inset;
		transform: rotate(-5deg);
	
		}
	 .wfeng{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
		/* background-image: url(../../images/11.jpg); */
		background-size: 100% ;
		transform-origin: left;
		transition: 1s cubic-bezier(.79,.34,.47,.92);
		border-top-left-radius: 2px;
		border-bottom-left-radius: 2px; 
		}
	.wfeng img{
		width: 140%;
		height: 280px;
	}
	 .wbook:hover .wfeng{
		transform: rotateY(-140deg); 
	    }
	.wwen{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-family: 'fangsong';
		text-align: left;
		}
	
	.weddingList{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		
	}
	.weddingList  li{
		display: flex;
		width: 26%;
		height: 320px;
		list-style: none;
		
	}
	.weddingList li button {
		width: 166px;
		border: none;
		background: #7F7F99;
		border-radius: 0;
		color: white;
	}
	.weddingList .bookItem{
		width: 65%;
		height: 280px;
		background-image: linear-gradient(to top,rgb(114, 111, 111),rgba(9   0, 87, 87, 0.5) );
		padding: 8px;
		background-color: rgba(255, 255, 255, 0.774);
		box-shadow:   -20px 0px 30px  rgb(0, 0, 0,.6) inset;
	}
	
	/* 手办商品列表 */
	
	.shoubanItem {
		width: 24%;
		height: 310px;
		background: #000000;
		
	}
	.shoubanItem2 {
		width: 24%;
		height: 310px;
		background: #000000;
		
	}
	.shouban {
		display: flex;
		justify-content: space-between;
	}
	
	
	
</style>
