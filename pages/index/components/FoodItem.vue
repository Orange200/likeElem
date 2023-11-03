<template>
  <view class="food-item">
    <image style="width: 200rpx; height: 200rpx; margin:15rpx 15rpx 15rpx 15rpx;" :src="imageUrl"></image>
    <view class="food-info">
      <p class='food-info-title'>{{title}}</p>
      <p class="food-info-shop">
        <text style="color:orangered; font-size:28rpx;margin-right:15rpx; ">{{evaluation}}分</text>
        <text>月售{{sold}}+</text>
        <text style="position: absolute; right: 128rpx;">{{sendTime}}分钟</text>
        <text
          style="position: absolute; right: 50rpx; margin-left: 12rpx;">{{distance>20 && distance<1000 ? `${distance}m`:`${distance}km`}}</text>
      </p>
      <p class="food-info-shop">起送￥{{minPrice}} {{sendPrice ==0 ? '免配送费':`配送￥${sendPrice}`}}
        <text class="food-info-send">蓝骑士专送</text>
      </p>

    </view>
  </view>
</template>

<script>
  export default {
    name: 'FoodItem',
    props: {
      //图片地址
      imageUrl: {
        type: String,
        default: 'https://img2.baidu.com/it/u=470521857,1575026035&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      },
      //店铺名
      title: {
        type: String,
        default: '',
      },
      //评分
      evaluation: {
        type: Number,
        default: 5.0,
      },
      //销量
      sold: {
        type: Number,
        default: 9999,
      },
      //配送时间
      sendTime: {
        type: Number,
        default: 0,
      },
      //配送距离
      distance: {
        type: Number,
        default: 888,
      },
      // 起送价格
      minPrice: {
        type: Number,
        default: 10,
      },
      // 是否免配送费
      sendPrice: {
        type: Number,
        default: 0,
      }
    },

    components: {},
    data() {
      return {};
    },
    computed: {},

    watch: {},

    created() {},

    mounted() {},

    methods: {},
  };
</script>

<style lang="scss" scoped>
  .food-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10rpx 10rpx 0 10rpx;
    background-color: #fff;
    border-radius: 16rpx 16rpx 16rpx 16rpx;
  }

  .food-info {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 15rpx 10rpx 15rpx 10rpx;
  }

  .food-info p {
    margin: 8rpx 0 8rpx 0;
  }

  .food-info-title {
    font-weight: 700;
    font-size: 35rpx;
  }

  .food-info-shop {
    font-size: 24rpx;
    color: gray;
  }

  .food-info-send {
    width: auto;
    height: auto;
    color: rgb(20, 186, 250);
    border-radius: 5%;
    border: 0.1rpx solid rgb(66, 195, 255);
    font-size: 24rpx;
    font-weight: 800;
    position: absolute;
    right: 50rpx;
  }
</style>