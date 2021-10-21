<template>
  <div class="Main-page">
    <!-- 头部 开始-->
    <div class="home_header">
      <!-- 导航栏 -->
      <div class="address">
        <span>广州</span>
        <i class="glyphicon glyphicon-menu-down"></i>
      </div>
      <!-- 个人 -->
      <div class="my" @click="$router.push('/my')"></div>
      <!-- 中间字体 -->
      <div class="slogan"></div>
    </div>

    <Search></Search>
    <!--头部 结束-->
    <ModBox></ModBox>
    <Title>常用工具</Title>
    <Tools></Tools>
    <Title>为你推荐</Title>

    <HouseListItem
      v-for="item in houseListdata"
      :key="item.houseCode"
      :item="item"
    ></HouseListItem>
  </div>
</template>

<script>
import Search from "@/components/search.vue";
import ModBox from "@/components/modBox.vue";
import Tools from "@/components/tools.vue";
import HouseListItem from "@/components/houseListItem.vue";
import Title from "@/components/title.vue";
export default {
  components: { Search, ModBox, Tools, HouseListItem, Title },
  data: function () {
    return {
      iconlist: [
        {
          name: "二手房",
          id: 1,
          image: "../image/icon1.png",
        },
        {
          name: "新房",
          id: 2,
          image: "../image/icon2.png",
        },
        {
          name: "租房房",
          id: 3,
          image: "../image/icon3.png",
        },
        {
          name: "卖房",
          id: 4,
          image: "../image/icon4.png",
        },
        {
          name: "海外",
          id: 5,
          image: "../image/icon5.png",
        },
        {
          name: "商铺办公",
          id: 6,
          image: "../image/icon6.png",
        },
        {
          name: "找小区",
          id: 7,
          image: "../image/icon7.png",
        },
      ],

      iconlistdata: "",
      houseListdata: [],
    };
  },

  //
  created: function () {
    //链家房子数据
    this.axios
      .get("https://m.lianjia.com/liverpool/api/ershoufang/getList", {
          params: {
           cityId:440100,  //广州
           condition:'%252F%252F' //地区
          },
        })
      .then((res) => {
        this.houseListdata = res.data.data.data.getErShouFangList.list;
        console.log(this.houseListdata);
      });
    //
   
  },
  mounted: function () {},

  //方法
  methods: {},
  //计算属性
  computer: {},
};
</script>

<style lang="less" scoped>
.Main-page {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: rgb(241, 239, 239);
  .home_header {
    width: 100%;
    height: 225px;
    background: url(https://s1.ljcdn.com/hulk-web/static/m/statics/images/home/head_bg.jpg?version=a5631a9bcb)
      no-repeat;
    background-size: 100% 225px;
    position: relative;
    .address {
      position: absolute;
      width: 6rem;
      height: 24px;
      line-height: 24px;
      padding: 0 0.5rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 15%;
      vertical-align: middle;
      text-align: center;
      color: white;
      top: 15px;
      left: 15px;

      i {
        top: 5px;
        float: right;
      }
    }

    .my {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 5rem;
      height: 5rem;
      float: right;
      background: url(https://s1.ljcdn.com/hulk-web/static/m/statics/images/common/sprite_new.svg?version=fbfaa12fa5)
        no-repeat;
      background-size: 100% 500%;
      background-position: 16px -223px;
    }
    .slogan {
      position: absolute;
      width: 20rem;
      height: 4rem;
      background: url("https://s1.ljcdn.com/hulk-web/static/m/statics/images/home/head_slogan.png?version=0d0f8a8e4a")
        no-repeat;
      background-size: 100%;
      font-size: 0;
      top: 7rem;
      left: 50%;

      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    } //.slogan end
  } //头部 end
}
</style>