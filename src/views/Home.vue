<template>
	<div class="home">
		<!-- 上面轮播图部分 -->
		<div class="on">
			<!-- 左边内容 -->
			<div class="left">
				<div class="leftItem" v-for="(item,index) in tableData1" :key="index">
					<img :src="item.sphoto"  width="243px"
						height="230px">
					<div>{{item.sname}}</div>
				</div>

			</div>
			<!-- 右边内容 -->
			<div class="right">
				<!-- 右边轮播图 -->
				<div class="crousel">
					<el-carousel :interval="5000" arrow="always">
						<el-carousel-item v-for="(item,index) in tableData" :key="index">
							<h3> <img :src="item.himg" style="height: 600px;"> </h3>
						</el-carousel-item>
					</el-carousel>

				</div>
				<!-- 右边文字描述 -->
				<div class="textContent">
					那时候的婚礼还叫做昏礼。没有奢侈的聘礼，没有铺张的排场，也没有喧闹的筵席。昏礼重的是夫妇之义与结发之恩，并不认为这是一件可以喧闹嘈杂的事。那时候的昏礼简朴干净，没有后世繁缛的挑盖头、闹洞房这类繁杂的玩意儿，夫妻"共牢而食，合卺而酳"，而后携手入洞房。次日拜见舅姑，三月后告见家庙，从此，新妇正式融入夫家家族。商周时期的昏服也不是现在人们误解的大红一片，而是端庄的玄色礼服(玄色，黑中扬红的颜色，按照五行思想，是象征著天的、最神圣的色彩)。嫁女之家三日不熄烛火，在盈盈火光中思念著远去的女儿;夫家也三日不举乐，安慰著思念双亲的新娘，整个仪式宁静安详，
				</div>
			</div>

		</div>
		<!-- 下面轮播图部分 -->
		<div class="under">
			<div class="c2">
				<el-carousel :interval="4000" type="card" height="220px">
					<el-carousel-item v-for="(item,index) in tableData" :key="index">
						<h3 class="medium"><img :src="item.himg1" width="100%"> </h3>
					</el-carousel-item>
				</el-carousel>
			</div>

		</div>
		<!-- <footerr/> -->
	</div>
</template>

<script>
	import footerr from '@/components/footerr.vue'
	import request from "@/utils/request";

	export default {
		data() {
			return {
				tableData:[],
				tableData1:[],
			}
		},
		//组件
		components: {
			footerr
		},
		mounted() {
			this.load()
			this.load2()
		},
		methods: {
			// filesUploadSuccess1(res) {
			// 	this.form.himg = res.data;
			// },
			// filesUploadSuccess2(res) {
			// 	this.form.himg1 = res.data;
			// },
			load() {
				this.loading = true
				request.get("/bigphoto", {

					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					console.log('res ==>aaaaaaaaaaaaaaaaaaaaaa', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.tableData = res.data.records
					})


				})
			},
			load2(){
				this.loading = true
				request.get("/smallphoto", {

					params: {
						pageNum: this.currentPage,
						pageSize: this.pageSize,
						search: this.search
					}
				}).then(res => {
					console.log('res ==>bbbbbbbbbbbbbbbbbbbb', res)
					// this.loading = false
					this.$nextTick(()=>{
						this.tableData1 = res.data.records
					})


				})
			},
		}

	}

</script>

<style>
	/* top start*/
	.on {
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
	}

	.left {

		width: 20.5%;
		height: 600px;
		background-color: #A4A0BB;
		overflow: hidden;
	}

	.leftItem {
		width: 96%;
		margin: 5px auto;
		height: 49%;
		text-align: left;
		overflow: hidden;
		font-size: 14px;
		color: #CEB7CE;
		background-color: #827E94;
		font-family: 'fang song';
	}

	.right {
		display: flex;
		justify-content: space-between;
		width: 79%;
		height: 600px;
		background-color: #A4A0BB;

	}

	.right .textContent {
		width: 23%;
		height: 592px;
		background-color: #827E94;
		margin: 5px auto;
		padding: 5px;
		text-indent: 2em;
	}


	/* 轮播图样式 */
	.crousel {
		width: 77%;
		height: 600px;

	}

	.crousel .el-carousel__container {
		position: relative;
		height: 592px;

	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;

	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;

	}

	/* top end*/

	/* bottom start */
	.under {
		margin-top: 7px;
		background-color: #A4A0BB;
	}

	/* 分割面板 */
	.home .under .c2 {
		width: 98%;
		margin: auto;
	}

	.home .demo-split {
		height: 200px;
		border: 1px solid #dcdee2;
	}

	.home .demo-split-pane {
		padding: 10px;
	}

	.home .ivu-split-pane.left-pane {
		background: white;
		left: 0;
		top: 10px;
	}

	/* bottom end */
</style>