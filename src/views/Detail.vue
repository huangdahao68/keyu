<template>
	<div id="detail" >
		<div >
				<Divider orientation="left"> <i>ProductIndroduction</i></Divider>
		<div class="productMessage" v-show="list"  >
			<!-- v-for="(item,index) in xqlifuData" :key="index" -->
			<div class="pImg" >
				<el-row>
				  <el-col :span="24" >
				    <el-card :body-style="{ padding: '0px' }">
				      <img :src="xqlifuData.limg1" class="image">
				      <div style="padding: 14px;">
				        <span class="text">{{xqlifuData.lname}}</span>
				        <div class="cartBottom clearfix">
				          <time class="time">{{ currentDate }}</time>
						  
				          <el-button  class="button" @click="addCart">
							     加入购物车
						      </el-button>
				        </div>
				      </div>
				    </el-card>
				  </el-col>
				</el-row>
			</div>
			<div class="pMessage">
				<div class="pDescribe">
					<ul>
						<li>
							<Icon type="ios-pulse" />
							<Icon type="ios-pulse" />
						    <span>Brand/品牌 :{{xqlifuData.lbrand}}</span>
						<li>
							<Icon type="ios-pulse" />
							<Icon type="ios-pulse" />
							<span>Color/颜色 :{{xqlifuData.lcolor}} |  粉红色 pink  |紫色 purple</span>
						</li>
						<li>
							<Icon type="ios-pulse" />
							<Icon type="ios-pulse" />
							<span>Shell fabric/面料 :{{xqlifuData.lfabric}}</span>
						</li>
						<li>
							<Icon type="ios-pulse" />
							<Icon type="ios-pulse" />
							<span>Size/尺码 :小码（s）| 中码（m)大码（l）| 加大码（xl）</span>
						</li>
						<li>
							<Icon type="ios-pulse" />
							<Icon type="ios-pulse" />
							<span>Age/年龄 :form eight to twenty-five | 18-25</span>
						</li>
						
					</ul>
				</div>
				  <Divider orientation="right"><i>BASICUNIT/CM</i></Divider>
				<div class="pChoose">
					 <Table stripe :columns="columns1" :data="data1"></Table>
				</div>
			</div>
		</div>
	    <Divider orientation="right" >
			<i style="color: gray;font-size: 15px;">由于测量方式不同，数据可能存在2-3厘米误差</i>
		</Divider>
		<div class="pIntroduction">
			<!-- 左边分割面板 -->
			 <div class="demo-split">
			        <Split v-model="split3">
			            <div slot="left" class="demo-split-pane no-padding">
			                <Split v-model="split4" mode="vertical" style="text-align: left;">
			                    <div slot="top" class="demo-split-pane">
			                        <span>购买之后该商品为用户所有权，购买价格 
																<strong style="color: red;font-size: 20px;">
																￥{{xqlifuData.lprice1}}</strong>
																</span>
									<div style="font-size: 13px; text-align: left; display: flex;">
									 	<p>1.购买七天内可免费退货</p>
										<p>2.免费配送</p>
										<p>3.商家提供5项基本保障功能</p>
									</div>
									<Button @click="payAll" long style="background-color:#7F7F99 ;color: white;width: 200px;float: right;">全款购买</Button>
			                    </div>
			                    <div slot="bottom" class="demo-split-pane">
			                         <span>租用该商品仅为用户使用权，租用价格 <strong style="color: red;font-size: 20px;">￥{{xqlifuData.lprice2}}</strong></span>
									 <div style="font-size: 13px; text-align: left;display: flex;">
										  <p>1.租用天数最少为一个月</p>
										 <p>2.不包邮</p>
										 <p>3.如有破损商家不接返还，客户需全款购买</p>
								     </div>
									<Button @click="lend" long style="background-color:#7F7F99 ;color: white;width: 200px;float: right;">单次租用</Button>
			                    </div>
			                </Split>
			            </div>
			            <div slot="right" class="demo-split-pane">
			                <div style="background:#eee;padding: 20px">
									<Card :bordered="false">
										<p slot="title" style="color: darkred;">温馨提示</p>
										<p style="text-align: left;text-indent: 2em;color: grey;">尺寸存在人工测量约三厘米左右，由于批次不同，发货时间有所不同。加入购物车的商品仅为购买商品，如需要租借，该服务只在此页面进行，由于物品所有权与使用权价值差别大，所以租借的商品跟自身购买价格差距有一定距离，客户可根据自身需要进行选择。</p>
									</Card>
							</div>
			            </div>
			        </Split>
			    </div>
			<!-- 右边卡片   温馨提示内容 -->
			
		</div>

		</div>
	
	</div>
</template>

<script>
	import request from "@/utils/request";
	import {mapState} from 'vuex';
	 export default {
		 props:['id'],
		 /////////////////////data////////////////////
	      data () {
					return {
						xqlifuData:{},
						indexcp:null,
						uuid:null,
					//分割面板所占比例
					  split3: 0.5,
					  split4: 0.5,
					currentDate: new Date(),//日期
	                // 表格头内容
					columns1: [
	                    {
	                        title: 'Size',
	                        key: 'size'
	                    },
	                    {
	                        title: 'Length',
	                        key: 'length'
	                    },
	                    {
	                        title: 'Waist',
	                        key: 'waist'
	                    },
						{
							title: 'Hip',
							key: 'hip'
						},
						{
							title: 'Rise',
							key: 'rise'
						},
						{
							title: 'Back',
							key: 'back'
						},
						{
							title: 'Thight',
							key: 'thight'
						}
	                ],
	                //表格数据
					data1: [
	                    {
	                        size: 's',
	                        length: 59,
	                        waist:98,
	                        hip: 98,
							rise:18,
							back:36,
							thight:'-'
	                    },
						{
						    size: 'M',
						    length: 60,
						    waist:99,
						    hip: 99,
							rise:19,
							back:37,
							thight:'-'
						},
						{
						    size: 'L',
						    length: 62,
						    waist:100,
						    hip: 100,
							rise:20,
							back:38,
							thight:'-'
						},
	                    {
						    size: 'XL',
						    length: 64,
						    waist:102,
						    hip: 102,
							rise:21,
							back:39,
							thight:'-'
						},
	                ],
	             
				}
				  
	        },
			/////////////////////data////////////////////
		created(){
			// this.$store.dispatch("detail/getGoodListData")
			this.indexcp = this.$route.query.indexcp
			console.log("这是详情页的index",this.indexcp);
			this.xqload(this.indexcp);
		},
		computed:{
			...mapState({list : state => state.detail.goodListData	})
		
		},
		methods:{
				xqload(indexcp) {
				this.indexcp = indexcp
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
						this.xqlifuData = res.data.records[this.indexcp];
						console.log(this.xqlifuData);
					})
				})
			},
			addCart() {
				console.log('diagjian');
				this.$alert('加入购物车成功');
			},
			payAll() {
				this.$alert('购买成功');
			},
			lend() {
					this.$alert('租用成功');
			}
		}
		
		
		
		
	    }
</script>

<style>
	/* 1.详情页面样式 productMessage start */
	#detail {
		background: white;
		margin: 20px auto;
		width: 99%;
		
	}
	#detail i{
		text-align: left;
		margin-top: 10px;
		font-size: 20px;
		font-family: "arial rounded mt bold";
		font-weight: 400;
	}
	.productMessage{
		display: flex;
		justify-content: space-between;
	}
	/* 左边图片 */
	.productMessage .pImg {
		width: 30%;
		height: 500px;
		background: #303133;
		margin: auto 10px;
	}
	  #detail .time {
	    font-size: 15px;
	    color: gray;
		
	  }
	  
	 #detail .cartBottom {
	    margin-top: 15px;
	    line-height: 12px;
		background-color: white;
	  }
	
	#detail  .button {
		width: 100px;
		height: 40px;
		line-height: 40px;
	    padding: 0;
	    float: right;
		margin-top: 10px;
		background-color: plum;
	  }
	
	  .image {
	    width: 90%;
		margin: 0 auto;
		height:420px;
	    display: block;
	  }
	
	 .clearfix:before,
	  .clearfix:after {
	      display: table;
	      content: "";
	  }
	  
	  .clearfix:after {
	      clear: both
	  }
	.pMessage{
		width: 68%;
		height: 560px;
		
	}
	#detail .pImg .text{
		text-align: left;
	}
	/* 品牌，颜色陈述样式 */
	.pMessage .pDescribe {
		width: 100%;
		height: 45%;
		
	}
	.pMessage .pDescribe li {
		list-style: none;
		height: 50px;
		border-bottom: #303133 1px dashed   ;
		line-height: 50px;
		text-align: left;
	}
	
	#detail .pMessage .ivu-icon {
        color: #9565b9;
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
	}
	.pMessage .pDescribe li span{
		text-align: left;
		margin: auto 10px;
	}
	/* 尺码详情 */
	.pMessage .pChoose{
		width: 100%;
		margin-top: 2%;
	}
	/* 详情页面样式 productMessage end */
	
	/*2.  从类名 pIndroduction 开始 */
	/* 左边面板样式 */
	.pIntroduction{
		/* display: ; */
		margin-top: 30px;
	}
	 .demo-split{
		height: 200px;
		border: 1px solid #dcdee2;
	}
	.demo-split-pane{
		padding: 10px;
	}
	.demo-split-pane.no-padding{
		height: 200px;
		padding: 0;
	}
	/* 右边卡片样式 */
	
</style>
