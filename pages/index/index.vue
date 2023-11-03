<template>
  <view class="container">
    <view class="header">
      <p>饿了么</p>
      <!-- <el-button>哈哈</el-button> -->
      <!-- <uni-datetime-picker></uni-datetime-picker> -->
      <p style="margin-left: 10rpx;"><uni-icons type="location" size="20" color="rgb(255, 255, 255)"></uni-icons></p>
      <p style='font-size: 30rpx;'>

        <!-- 使用地图api -->
        <navigator>正在获取您的定位...<uni-icons type="bottom" size="15" color="rgb(255,255,255)"></uni-icons></navigator>
      </p>

    </view>
    <uni-search-bar :radius="100" v-model="searchQuery" @confirm="search" @cancel="resetList"
      placeholder="花小小新疆炒米粉"></uni-search-bar>
    <FoodItem v-for="item in foodList" :imageUrl="item.imageUrl" :title='item.title' :evaluation="item.evaluation"
      :sold="item.sold" :sendTime="item.sendTime" :distance="item.distance" :minPrice="item.minPrice"
      :sendPrice="item.sendPrice">
    </FoodItem>


  </view>
</template>

<script>
  import FoodItem from './components/FoodItem.vue'
  export default {
    components: {
      FoodItem,
    },
    data() {
      return {
        searchQuery: '', //查询参数
        //食物列表
        foodList: [{
            imageUrl: 'https://img2.baidu.com/it/u=434216605,1066115281&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '沪上阿姨鲜果茶',
            evaluation: 5,
            sold: 800,
            sendTime: 25,
            distance: 213,
            minPrice: 18,
            sendPrice: 0.5
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=3361341793,3033305644&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '古茗',
            evaluation: 4.7,
            sold: 1000,
            sendTime: 32,
            distance: 1.3,
            minPrice: 18,
            sendPrice: 1
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=2153116346,2941753495&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
            title: '茶百道',
            evaluation: 4.9,
            sold: 600,
            sendTime: 38,
            distance: 1.3,
            minPrice: 18,
            sendPrice: 0.5
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=470521857,1575026035&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '花小小新疆炒米粉',
            evaluation: 4.6,
            sold: 2000,
            sendTime: 42,
            distance: 3.6,
            minPrice: 15,
            sendPrice: 2.4
          },
          {
            imageUrl: 'https://img1.baidu.com/it/u=826497891,3360915022&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
            title: '淄博烧烤',
            evaluation: 4.4,
            sold: 800,
            sendTime: 39,
            distance: 5.1,
            minPrice: 15,
            sendPrice: 0
          },
        ],
        copyFood: [{
            imageUrl: 'https://img2.baidu.com/it/u=434216605,1066115281&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '沪上阿姨鲜果茶',
            evaluation: 5,
            sold: 800,
            sendTime: 25,
            distance: 213,
            minPrice: 18,
            sendPrice: 0.5
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=3361341793,3033305644&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '古茗',
            evaluation: 4.7,
            sold: 1000,
            sendTime: 32,
            distance: 1.3,
            minPrice: 18,
            sendPrice: 1
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=2153116346,2941753495&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
            title: '茶百道',
            evaluation: 4.9,
            sold: 600,
            sendTime: 38,
            distance: 1.3,
            minPrice: 18,
            sendPrice: 0.5
          },
          {
            imageUrl: 'https://img2.baidu.com/it/u=470521857,1575026035&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            title: '花小小新疆炒米粉',
            evaluation: 4.6,
            sold: 2000,
            sendTime: 42,
            distance: 3.6,
            minPrice: 15,
            sendPrice: 2.4
          },
          {
            imageUrl: 'https://img1.baidu.com/it/u=826497891,3360915022&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
            title: '淄博烧烤',
            evaluation: 4.4,
            sold: 800,
            sendTime: 39,
            distance: 5.1,
            minPrice: 15,
            sendPrice: 0
          },
        ],

      };
    },
    // watch: {
    //   foodList() {
    //     this.$nextTick() => {
    //       console.log('哒哒哒')
    //     }
    //   },
    // },
    onShow() {
      const copyFood = {
        ...this.foodList
      };
      console.log('克隆', copyFood);
    },

    methods: {
      //查询
      search() {

        const context = this;
        console.log('我被打印了', context.searchQuery);
        this.foodList = this.foodList.filter(i => i.title.indexOf(context.searchQuery) > -1);
        console.log('过滤', this.foodList);
      },
      //重置
      resetList() {
        this.$nextTick(() => {
          console.log('哇撒擦擦');
          this.foodList = this.copyFood;
        });
      },
    },
  }
</script>

<style lang='scss'>
  .container {
    /* 	padding: 20px;
		font-size: 14px;
		line-height: 24px; */
    position: absolute;
    width: 100%;
    background-color: rgb(245, 245, 245);
  }

  .header {
    display: flex;
    justify-content: flex-start;
    /* flex-direction: column; */
    align-items: center;
    /* position: relative; */
    width: 100%;
    background-color: rgb(20, 186, 250);
    height: 80px;

  }

  .header p {
    position: relative;
    margin-left: 30rpx;
    font-weight: 800;
    font-size: 40rpx;
    color: rgb(255, 255, 255);
    ;
  }

  .burger {
    /* display: flex;
    align-items: flex-start;
    justify-content: center; */
    position: relative;
    margin-top: 20rpx;
    width: 90rpx;
    height: 120rpx;
    border: 5rpx;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    border-radius: 20%;
    margin-left: -35rpx;
  }

  ul {
    width: 90%;
    height: 100%;
    margin: 10rpx 20rpx 0 20rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: aquamarine;
  }

  ul li {

    margin: 0 0 10rpx 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>