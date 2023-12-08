<template>
  <view class="container">
    <view class="mine-title">饿了么</view>
    <view class="mine-set">
      <image class="mine-set-image" src="../../static/icon/饿了么 (我的).png"></image>
      <text class="mine-set-accountName">
        a4f03b40ba9
        <uni-icons type="help" size="15" color="rgb(215, 215, 215)"></uni-icons>
      </text>
      <text class="mine-set-accountTel">158****9600</text>
    </view>
    <view class="mine-set-vip"></view>
    <view class="mine-set-vipcard"></view>
    <view class="mine-set-tools">
      <view class="mine-set-tools-title">常用工具</view>
      <view class="mine-set-toolboxs">
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/地址.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/我的客服.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/爱心.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/评价管理.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/感叹号圆.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/bukejian.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/我的-我的账单.png"></image>
          <text>我的地址</text>
        </view>
        <view class="mine-set-iconbox">
          <image src="../../static/mineIcon/消息中心.png"></image>
          <text>我的地址</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'mine',

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
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rpx 0 10rpx;
  justify-content: center;
}
.mine-title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 380;
  font-size: 36rpx;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 30rpx;
  top: 50rpx;
}
.mine-set {
  flex-direction: row;
  position: absolute;
  top: 150rpx;
  left: 30rpx;
}
.mine-set-image {
  height: 80rpx;
  width: 80rpx;
  border: 20rpx solid rgb(203, 229, 240);
  border-radius: 50%;
  background-color: rgb(203, 229, 240);
}
.mine-set-accountName {
  font-family: 'Times New Roman', Times, serif;
  font-size: 36rpx;
  position: relative;
  top: -60rpx;
  left: 40rpx;
}
.mine-set-accountTel {
  font-family: 'Times New Roman', Times, serif;
  font-size: 24rpx;
  color: rgb(153, 153, 153);
  position: relative;
  top: -20rpx;
  left: -148rpx;
}
.mine-set-vip {
  position: absolute;
  top: 300rpx;
  margin: 30rpx 10rpx 0 10rpx;
  width: calc(100% - 20rpx);
  height: 180rpx;
  background-color: rgb(58, 64, 82);
  border: 0 solid;
  border-radius: 40rpx 40rpx 0 0;
}
.mine-set-vipcard {
  position: absolute;
  top: 450rpx;
  margin: 30rpx 10rpx 0 10rpx;
  width: calc(100% - 20rpx);
  height: 180rpx;
  background-color: #ffffff;
  border: 0 solid;
  border-radius: 20rpx 20rpx 0 0;
}
.mine-set-tools {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  top: 675rpx;
  width: calc(100% - 20rpx);
  height: 460rpx;
  background-color: #ffffff;
  border: 0 solid;
  border-radius: 20rpx 20rpx 0 0;
}
.mine-set-toolboxs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 735rpx;
  position: relative;
  top: 64rpx;
  left: -24rpx;
}
.mine-set-iconbox {
  width: 90rpx;
  height: 90rpx;
  background-color: pink;
  margin: 30rpx 20rpx 30rpx 20rpx;
  padding: 10rpx;
}
.mine-set-toolboxs text {
  font-size: 20rpx;
  width: 90rpx;
  height: 24rpx;
}
.mine-set-tools image {
  height: 50rpx;
  width: 50rpx;
}
.mine-set-tools-title {
  position: relative;
  top: -100rpx;
  left: 30rpx;
  font-size: 29rpx;
}
</style>
