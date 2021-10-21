<template>
  <div class="ershoufang">
    <Nav></Nav>

    <van-swipe class="swiper">
      <template #indicator> <Search class="search"></Search></template>
      <van-swipe-item
        ><img
          class="bags"
          src="https://image1.ljcdn.com/materials/ad/68f8b0495c6931b62653aeb3fe41603e.jpg!m_fill,w_500,h_280,f_jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="bags"
          src="https://image1.ljcdn.com/materials/ad/198cb27abc6e36c55d5b6420de09d681.jpg!m_fill,w_500,h_280,f_jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="bags"
          src="https://image1.ljcdn.com/materials/ad/4664125c4394c3feee52da1c08b4e8cd.jpg!m_fill,w_500,h_280,f_jpg"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="bags"
          src="https://image1.ljcdn.com/materials/ad/32c85cbd24ede8b22f6e6799bff0b0d2.jpg!m_fill,w_500,h_280,f_jpg"
          alt=""
      /></van-swipe-item>
    </van-swipe>

    <div>
      <Dropdown @chang-current-condition="changCurrentCondition"></Dropdown>
      <HouseListdata
        v-for="item in this.houseListdata"
        :key="item.housecode"
        :item="item"
      ></HouseListdata>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Search from "../components/search.vue";
import Dropdown from "../components/dropdown.vue";
import HouseListdata from "../components/houseListItem.vue";
export default {
  components: { Nav, Search, Dropdown, HouseListdata },
  props: [],
  data: function () {
    return {
      houseListdata: [],
      currentCondition: "",
    };
  },
  methods: {
    changCurrentCondition: function (con) {
      this.currentCondition = con;
    },
    getCurrentList: function (con) {
      this.axios
        .get("https://m.lianjia.com/liverpool/api/ershoufang/getList", {
          params: {
            cityId: 440100, //广州
            condition: con, //地区
          },
        })
        .then((res) => {
          this.houseListdata = res.data.data.data.getErShouFangList.list;
          console.log(this.houseListdata);
        });
    },
  },
  watch: {
    currentCondition: "getCurrentList",
  },
  created: function () {
    //
    this.getCurrentList(this.currentCondition);
  },
  mountnd: function () {},
  updated: function () {
    //  仅在整个视图都被重新渲染之后才会运行的代码
  },
};
</script>

<style lang="less" scoped>
.ershoufang {
  background-color: #f5f5f9;
  height: auto;
  .swiper {
    position: relative;
    .search {
      position: absolute;
      top: 10px;

      input {
        color: #7b7c7c;
        background: #e8e8e9;
      }
    }
    img {
      line-height: 30vh;
      height: 30vh;
    }
  }
}
</style>