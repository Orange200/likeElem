<template>
	<view class="container">
		<view class="header">Demo — XR</view>
			<p>1</p>
		<ul>
		<li><image src="../../static/汉堡.jpg" class="burger" ></image>
		<p> 这是一段测试文字</p>
		</li>
		<li><image src="../../static/汉堡.jpg" class="burger" ></image>
		<p> 这是一段测试文字</p>
		</li>
		<li><image src="../../static/汉堡.jpg" class="burger" ></image>
		<p> 这是一段测试文字</p>
		</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				data:'',
				file:{},
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
	/* 	padding: 20px;
		font-size: 14px;
		line-height: 24px; */
	}
	.header{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: rgb(37, 164, 187);
		height: 111px;
		color:rgb(240, 248, 255);
		font-size: 19px;
		font-weight:500;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.burger{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		width: 90px;
		height: 120px;
		border:5px;
		border-radius: 20%;
		margin-left: -35px;
	}
	ul{
		width: 90%;
		height: 100%;
		margin: 10px 20px 0 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: aquamarine;
	}
	ul li{
		
		margin: 0 0 10px 0;
		display: flex;
		align-items: center;
		justify-content:flex-end;
	}
</style>
