<template>
  <view class="container">地理位置</view>
</template>

<script>
uni.getLocation({
  type: 'wgs84',
  success: function (res) {
    console.log('当前位置的经度：' + res.longitude);
    console.log('当前位置的纬度：' + res.latitude);
  }
});
export default {
  name: 'location',

  components: {},
  data() {
    return {};
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    // getLocation(){
    // }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #ffffff;
}
</style>
