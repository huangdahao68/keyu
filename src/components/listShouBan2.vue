<template>	
	<div class="mineXun">
		<ul>
			<li v-for="(item,index) in sList" :key="index">
				<div  class="list">
					<div class="top">
						<div class="listLeft">
							<img :src="item.imgSrc" />
						</div>
						<!-- 金额样式 -->
						<div class="listRight">
							<div class="ltitle">
								{{item.title}}
							</div>
							<!-- 对话框 -->
							<div><Button  long @click="delShouCang(item.id)">删除</Button></div>
						</div>
					</div>
				
				</div>
			</li>
			
			
		
		</ul>		
	</div>
</template>

<style >
	
	
	.list  {
		position: relative;
		width: 100%;
		margin: 15px auto;
		height:94px;
	}
	.mineXun li{
		list-style: none;
		height: 120px;
	}
	
	.top {
		display: flex;	
		justify-content: space-around;
		position: absolute;
		top:0;
		z-index: 2;
		height:100px;
		width: 100%;
		background: rgba(65,12,70,.3);
		box-shadow: 5px 5px 8px  snow; 
		justify-content: space-around;
		background-image: linear-gradient(to right, rgb(200 53 20 / 10%),rgb(86 92 142 / 0.2),rgb(64 54 69 / 64%) );
		margin-top: 10px;
		
	}

	.listLeft {
		font-size: 14px;
		width: 40%;
	}
	.listLeft img {
		
		width:100px;
		height: 100%;
		
	}
	.listRight{
		margin: 5% auto;
		font-size: 24px;
		
	}
	.listRight .ltitle {
		padding: 0;
		border: none;
		height:50px;
		font-size: 12px;
		color: #e2dcdd;
		text-align: left;
		margin-left: 6%;
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
	.draw1 
element.style {
    color: darkolivegreen;
    font-size: 18px;
    font-weight: 500;
}

.draw1 button span {
    font-size: 11px;
}

ivu-divider-horizontal.ivu-divider-with-text-center {
	border-top: 2px solid #0095DD;
}

.draw1 button {
    margin-top: 30px;
    font-size: 10px;
    width: 120px;
    background: rgba(0,0,0,0);
    color: deeppink;
}

 
	
</style>
<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		  data() {
		      return {
		
				
				 listData:[
				            {
				            id:1,
				            imgSrc:"https://p1.ssl.qhimgs1.com/sdr/400__/t0113378752cd6e74ab.jpg",
				            title:'lolita现货渔老板家加冕连衣裙洋装日常原创设计女长款春秋萝莉',
				            price:'190.99',
				            },
				            {
				            id:2,
				            imgSrc:"http://photocdn.sohu.com/20140404/Img397784129.jpg",
				            title:'现货草莓套装lolita裙子洛丽塔渔老板op裙连衣裙中长款套装春秋季  ',
				            price:'150.89'
				            },
				            {
				            id:3,
				            imgSrc:"https://p5.ssl.qhimgs1.com/sdr/400__/t01bcdb2a52761ae35f.jpg",
				            title:'原创正版神鹿颂歌lolita洋装op蕾丝精美复古日常短袖甜公主连衣裙花 ',
				            price:'139.99'
				            },
				            {
				            id:4,
				            imgSrc:"https://p0.ssl.qhimgs1.com/t017c518fd9227dae1a.jpg",
				            title:'【佳期有约】withpuji原创设计华丽Lolita花嫁洛丽塔可爱日系洋装',
				            price:'190.18'
				            },
							{
							id:5,
							imgSrc:"https://p0.ssl.qhimgs1.com/sdr/400__/t01f8e2c5f2f36b9ade.jpg",
							title:'【全款预约】咩咩故事集背带sk-国牌Lolita可爱印花小羊裙',
							price:'332.88'
							},
							{
							id:6,
							imgSrc:"http://www.gaobei.com/upload/10001/article/2018_10/09212207_getm7v_b.jpg",
							title:'原创正牌lolita裙子繁花章华全套甜系轻茶会白雪姬洛丽塔花嫁jsk，',
							price:'441.18'
							},
							{
							id:7,
							imgSrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg11.360buyimg.com%2Fn1%2Fjfs%2Ft24421%2F203%2F399860556%2F556626%2F29c511ee%2F5b2efe67N34d9afca.jpg&refer=http%3A%2F%2Fimg11.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625467926&t=fa6c5fa870cffb37ee34ce43c0873536",
							title:"原创森女部落吊带连衣裙古风汉元素齐胸衫裙子国风两件套套装新款",
							price:'231.49'
							},
							{
							id:8,
							imgSrc:"http://hbimg.b0.upaiyun.com/fd5b63edb42ed1a9004aa7670d58c3346e6007ab1c197-bTkRny_fw658",
							title:'【现货】原创茶杯兔lolita洛丽塔短袖op罩可爱蓝色纱连衣裙线球猫',
							price:'90.00'
							},
						
						   ]	 					   
		      }
		    },
			computed:{
				...mapState({sList:state => state.shoucang.sList}),
				 
			},
			methods:mapActions('shoucang',["delShouCang"]),
	
		
	}						
</script>
