<template>
  <view class="container">
    <u-tabs lineColor="rgb(20, 186, 250)" :itemStyle="itemStyle" :activeStyle="activeStyle" :inactiveStyle="inactiveStyle" :list="list" @click="click"></u-tabs>
    <OrderItem
      v-for="item in orderItem"
      :businessName="item.businessName"
      :businessPic="item.businessPic"
      :isArrive="item.isArrive"
      :foodImages="item.foodImages"
      :isInArea="item.isInArea"
      :foodNum="item.foodNum"
      :foodPrice="item.foodPrice"
      :foodName="item.foodNum > 1 ? '' : item.foodName"
    ></OrderItem>
  </view>
</template>

<script>
import OrderItem from './components/OrderItem.vue';
export default {
  name: 'order',

  components: {
    OrderItem
  },
  data() {
    return {
      //订单数据
      orderItem: [
        {
          businessPic: 'https://img2.baidu.com/it/u=434216605,1066115281&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          businessName: '沪上阿姨鲜果茶',
          isArrive: 1,
          isInArea: false,
          foodImages: [
            'https://img2.baidu.com/it/u=1689601139,1299187399&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=1689601139,1299187399&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
            'https://img2.baidu.com/it/u=1689601139,1299187399&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
          ],
          foodNum: 3,
          foodPrice: 36.8,
          foodName: '巴拉巴拉...'
        },
        {
          businessPic: 'https://img2.baidu.com/it/u=2153116346,2941753495&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
          businessName: '茶百道',
          isArrive: 0,
          isInArea: false,
          foodImages: ['https://img2.baidu.com/it/u=2104857939,3869097007&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=639'],
          foodNum: 1,
          foodName: '茶百道厚乳茶',
          foodPrice: 21.8
        },
        {
          businessPic: 'https://img2.baidu.com/it/u=2724186936,1778825741&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
          businessName: '蜜雪冰城',
          isInArea: false,
          isArrive: 0,
          foodImages: [
            'https://img2.baidu.com/it/u=1536007265,320515731&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=668',
            'https://img1.baidu.com/it/u=1159906035,2675560179&fm=253&fmt=auto&app=120&f=JPEG?w=458&h=611',
            'https://img2.baidu.com/it/u=3863626864,57426990&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067'
          ],
          foodNum: 3,
          foodPrice: 19.6
        }
      ],
      //tab样式
      itemStyle: {
        backgroundColor: '#f5f5f5',
        height: '44px'
      },
      //选中样式
      activeStyle: {
        color: '#303133'
      },
      // 非选中样式
      inactiveStyle: {
        color: '#606266'
      },
      list: [
        {
          name: '全部'
        },
        {
          name: '进行中'
        },
        {
          name: '待评价'
        },
        {
          name: '退款',
          count: 5
        }
      ],
      current: 0
    };
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    click(item) {
      console.log('item', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f5f5f5;
}
</style>
