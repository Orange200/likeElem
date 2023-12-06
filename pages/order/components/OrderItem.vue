<template>
  <view class="container">
    <view class="orderBusiness">
      <image style="width: 46rpx; height: 46rpx;margin-left: 11rpx;" :src="businessPic"></image>
      <p style="margin: 0 0 0 10rpx; font-size: 36rpx">
        {{ businessName }}
        <p style="color: rgb(153, 153, 153); margin-left: 20rpx">></p>
      </p>
      <p :style="{ color: isArrive ? 'rgb(153, 153, 153)' : 'rgb(25, 25, 25)' }" class="isArrive">{{ isArrive == 1 ? '已送达' : '正在配送' }}</p>
    </view>
    <view class="isInArea" v-if="!isInArea"><text >超出配送范围</text></view>
    <view class="order-list">
      <image v-for="item in foodImages" :src="item" style="width: 128rpx; height: 128rpx; margin-right: 7rpx;border-radius:5%"></image>
      <text style="margin:50rpx 0 0 20rpx">{{foodName}}</text>
    </view>
    <p class="order-price">
        ￥{{foodPrice}}
        <text style="color:rgb(153, 153, 153);margin-top:20rpx">共{{foodNum}}件</text>
      </p>
  </view>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    businessPic: {
      type: String,
      default: 'https://img2.baidu.com/it/u=470521857,1575026035&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    },
    businessName: {
      type: String,
      default: ''
    },
    isArrive: {
      type: Number,
      default: 0,
    },
    isInArea: {
      type: Boolean,
      default: false,
    },
    foodImages: {
      type: Array,
      default: () => [],
    },
    foodName: {
      type: String,
      default: ''
    },
    foodPrice: {
      type: Number,
      default: 0
    },
    foodNum: {
      type: Number,
      default: 0
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

  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  margin: 0 13rpx 10rpx 13rpx;
  padding: 8rpx 8rpx 8rpx 8rpx;
  border-radius: 5%;
  height:287rpx;
}
.isArrive {
  font-size:28rpx ;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  right:32rpx;
}
.orderBusiness {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin: 11rpx 7rpx 7rpx 7rpx;
}
.isInArea {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #ffffff;
  font-size: 24rpx;
  margin: 10rpx 0 10rpx 11rpx;
  // position: absolute;
  // left: -50rpx;
  background-color: rgb(152, 152, 152);
  width: 160rpx;
  height: 32rpx;
  border-radius: 5%;
}
.order-list{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  // overflow: hidden;
  margin:40rpx,0,0,11rpx;
  position: relative;
  bottom:-20rpx;
  left:11rpx;
  
  // position: relative;
  // top:-100rpx;
}
.order-price{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  top:-100rpx;
  right:-600rpx;
}
</style>
