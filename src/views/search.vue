<template>
  <div>
    <div class="head">
      <div class="left" @click="$router.go(-1)">
        <div class="left-icon"></div>
      </div>
      <van-dropdown-menu class="drop">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      <input type="text" placeholder="请输入小区或商店名称" v-model="value" />
      <div class="right">
        <div class="right-icon"></div>
      </div>
    </div>
    <div class="list">
      <li class="item" v-for="item in this.item" :key="item.value">
        <div class="left">
          <div class="text">{{ item.text }}</div>
          <div class="resblock_alias">({{ item.resblock_alias }})</div>
          <div class="region">{{ item.region }}</div>
        </div>
        <div class="count">{{ item.count }}套</div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [],
      value: "",
      value1: 0,
      option1: [
        { text: "二手房", value: 0 },
        { text: "新房", value: 1 },
        { text: "出租房", value: 2 },
        { text: "小区", value: 3 },
        { text: "经纪人", value: 4 },
      ],
    };
  },
  created: function () {
    this.getSearchList(this.value);
  },
  methods: {
    getSearchList: function (query) {
      this.axios
        .get(
          "https://m.lianjia.com/api/sug/index?query=%E6%96%B0&city_id=440100&channel_id=ershoufang&device_id=61ec5341-2335-4d62-861a-e58d6a825111",
          {
            params: {
              query, //输入框的值
              cityId: 440100, //广州
              channel_id: "ershoufang", //二手房
            },
          }
        )
        .then((res) => {
          this.item = [...res.data.data.groups[0].items];
          console.log(res.data.data.groups[0].items);
        });
    },
  },
  watch: {
    value: "getSearchList",
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  border-bottom: 1px solid rgb(240, 240, 240);
  .left {
    width: 5rem;
    height: 5rem;
    padding: 10px;
    .left-icon {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      background-repeat: no-repeat;
      background-image: url(https://s1.ljcdn.com/hulk-web/static/m/statics/images/common/sprite.svg?version=fff7459eb2);
      background-position: 5px -340px;
      background-size: 75%;
      vertical-align: middle;
      font-size: 0;
    }
  }
  .right {
    width: 5rem;
    height: 5rem;
    padding: 10px;
    .right-icon {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      background-repeat: no-repeat;
      background-image: url(https://s1.ljcdn.com/hulk-web/static/m/statics/images/common/sprite.svg?version=fff7459eb2);
      background-position: 0px -487px;
      background-size: 75%;
      vertical-align: middle;
      font-size: 0;
    }
  }

  .drop {
    width: 8rem;
    border-left: 1px solid rgb(240, 240, 240);
    border-right: 1px solid rgb(240, 240, 240);
  }
  input {
    border: none;
  }
}
.list {
  .item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100vw;
    height: 5rem;
    line-height: 5rem;
    padding: 0 10px;
    .left {
      display: flex;
      flex: 0.9;
      font-size: 16px;
      .text {
      }
      .resblock_alias {
        color: #a8a8a8;
      }
      .region {
        color: #a8a8a8;
      }
    }
    .count {
    }
  }
}
</style>