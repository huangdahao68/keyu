<template>
	<div class="about">
		<!-- 顶部照片 -->
		<div class="empty"></div>
		<div class="aboutTop">
			<!-- 顶部左边内容 -->
			<div class="aboutLeft">
				<p class="a">ABOUT</p>
				<p class="b">舒适，美观为主要宗旨，打造能更好符合客人审美的服装</p>
				<div class="decorationA"></div>
				<div class="decorationB"></div>
			</div>
			<!-- 顶部右边图片 -->
			<div class="aboutRight"  v-for="(item,index) in aboutData" :key="index">
				<img :src="item.aimg">
			</div>
		</div>
		<!-- 下部分介绍 -->
		<div class="aboutBottom">
			<div class="aboutTab">
				<template>
				  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
				    <el-tab-pane label="品牌介绍" name="first">
						<div class="aboutText" v-for="(item,index) in aboutData" :key="index">
							<p>{{item.acontent}}</p>
							<p>{{item.acontent4}}</p>
							<p>{{item.acontent5}}</p>
						
						</div>
						<div class="aboutImg" v-for="(item,index) in aboutData" :key="index">
							<div class="aboutImgItem1">
								<img :src="item.aimg1" width="250px" height="270px"/>
							</div>
							<div class="aboutImgItem2">
								<img :src="item.aimg2" width="240px" height="280px"/>
							</div>
						</div>
							
						
					</el-tab-pane>
				    <el-tab-pane label="资源来源" name="second">资源来源</el-tab-pane>
				    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
				    <el-tab-pane label="名字来由" name="fourth">名字来由</el-tab-pane>
					<el-tab-pane label="售后服务" name="five">售后服务</el-tab-pane>
					<el-tab-pane label="订单问题" name="six">订单问题</el-tab-pane>
				  </el-tabs>
				</template>
			</div>
		</div>
	</div>
	
</template>

<script>
	import request from "@/utils/request";
	export default {
	    data() {
	      return {
			aboutData:[],
	        activeName: 'first'
	      };
	    },
		mounted() {
			this.load()
		},
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
		  load() {
				this.loading = true
				request.get("/webabout", {

					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					console.log('res ==>aboutttttt', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.aboutData = res.data.records
					})


				})
			},
	    }
	  };
</script>

<style>
	/* 页面样式 */
	
	.about{
		margin-top: 25px;
		width: 100%;
		background:#FFFFFD ;
	}
	/* 顶部样式 */
	.aboutTop{
		width: 94%;
		margin: 0 auto;
		display: flex;
	}
	.aboutTop .aboutLeft{
		width: 30%;
		height:400px;
		
	}
	.aboutTop .aboutLeft .a{
		color: #4E3F62;
		text-align: left;
		font-size: 60px ;
		font-weight:600;
	}
	.aboutTop .aboutLeft .b{
		color: #787579;
		font-size: 16px;
		text-align: left;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
	.aboutTop .aboutLeft .decorationA{
		width: 30%;
		height: 7%;
		margin-top: 25%;
		background-color: #605E6A;
	}
	.aboutTop .aboutLeft .decorationB{
		width: 100%;
		height: 30%;
		margin-top: 16px;
		background-color: #55446E;
	}
	/* 顶部右边图片样式 */
	.aboutTop  .aboutRight {
		width: 70%;
		height: 400px;
		background-color: #8371A5;
		
	}
	.aboutTop  .aboutRight img {
		width: 100%;
		height: 400px;
	
	}
	/* 下部内容样式 */
	.aboutBottom {
		width: 100%;
		background:#F3EAF6 ;
		
	}
    .aboutTab {
		width: 94%;
		margin-top: 30px;
		margin: 0 auto;
	}
	.aboutBottom .el-tabs__item.is-active {
    color: white;
    background: #55446E;
    }
	.aboutBottom .el-tabs__item {
    padding: 0 20px;
	width: 200px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    background: white;
	}
	.aboutBottom .el-tabs__nav-wrap.is-scrollable {
    padding: 30px 20px;
    box-sizing: border-box;
}
    .aboutBottom .el-tabs__content{
		
		justify-content: space-between;
		width: 100%;
	}
	.aboutBottom  .aboutText {
		
		width: 64%;
		text-align: left;
	}
	.aboutBottom  .aboutText p{
		margin: 40px 0;
		line-height: 2.5;
		font-size: 14px;
	}

	.aboutBottom .aboutImg .aboutImgItem1{
		position: absolute;
		top: 10%;
		right: 0%;
		width: 250px;
		height: 270px;
		background: #937CBC;
	}
	.aboutBottom .aboutImg .aboutImgItem2{
		position: absolute;
		top: 35%;
		right: 10%;
		width:240px;
		height: 260px;
		z-index: 1;
		background: #55446E;
	}

	  
	
	 
</style>
