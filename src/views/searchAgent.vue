<template>
  <div>
    <Nav></Nav>
    <div class="lj-track">
      <div class="search-input">请输入小区或经纪人姓名</div>
    </div>

    <div class="kem__tab-bar">
      <ul class="tab-bar-2">
        <li class="tab-item">
          <span>区域</span>
        </li>
        <li class="tab-item active">
          <span>默认排序</span>
        </li>
      </ul>
    </div>

    <div class="Tab">
      <ul>
        <li v-for="item in this.tablist" :key="item.id">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <div class="agent">
      <div
        class="agentlist"
        v-for="item in this.agentlist"
        :key="item.agentUcid"
      >
        <div class="head">
          <img :src="item.photoUrl" alt="" />
        </div>

        <div class="content">
          <div class="name">{{ item.name }}</div>
          <div class="desc">{{ item.storeName }}</div>
          <div class="tags">
            <li class="tag" v-for="tag in item.tags" :key="tag">
              {{ tag }}
            </li>
          </div>
          <div class="count-box">
            <div
              class="count-item"
              v-for="count in item.statistics"
              :key="count.length"
            >
              <div class="datum">{{ count.datum }}</div>
              <div class="category">{{ count.category }}</div>
            </div>
          </div>
        </div>

        <div class="im-info"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
  data: function () {
    return {
      tablist: "",
      agentlist: "",
    };
  },
  created: function () {
    this.axios
      .get(
        "https://m.lianjia.com/castore/api/jingjiren/getList?cityId=440100&condition=%252Fao12&from=lianjia_m&searchFrom=jingjiren"
      )
      .then((res) => {
        console.log(res.data.data.data.getJingJiRenList);
        this.tablist = res.data.data.data.getJingJiRenList.quickFilters;
        this.agentlist = res.data.data.data.getJingJiRenList.list;
      });
  },
};
</script>

<style lang="less" scoped>
.search-input {
  display: block;
  height: 13.333vw;
  line-height: 13.333vw;
  margin: 10vw 5vw 3.2vw;
  padding: 0 4vw;
  background: #fff;
  box-shadow: 0 0.533vw 1.333vw 0 rgb(0 0 0 / 5%);
  border-radius: 1.333vw;
  font-family: PingFangSC-Semibold;
  font-weight: 700;
  font-size: 4vw;
  color: #999;
  box-sizing: border-box;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: top left;
    border: 1px solid #ccc;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 1;
    border-radius: 2.667vw;
  }
  &::before {
    content: "";
    display: inline-block;
    width: 5.067vw;
    height: 5.067vw;
    background-image: url(https://s1.ljcdn.com/castore/client/media/src/client/pages/jingjiren/List/img/icon-search.56a22698.png);
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: -0.8vw;
    margin-right: 0.8vw;
  }
}

.kem__tab-bar {
  padding: 0 6vw;
  .tab-bar-2 {
    width: 50vw;
    display: flex;
    justify-content: space-between;
    .tab-item {
      position: relative;
      height: 10vw;
      line-height: 10vw;

      &::after {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        width: 5vw;
        height: 5vw;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 2.5vw;
        background-image: url(https://s1.ljcdn.com/castore/client/media/src/client/components/TabBar/img/icon_down_grey.146ef7ae.png);
        display: block;
      }
      span {
      }
    }
    .active {
      color: #00ae66;
      font-weight: 700;
      &::after {
        // content: "";
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translateY(-50%);
        // width: 5vw;
        // height: 5vw;
        // background-position: 50%;
        // background-repeat: no-repeat;
        // background-size: 3vw;
        background-image: url(https://s1.ljcdn.com/castore/client/media/src/client/components/TabBar/img/icon_down_lj.bee1b8e3.png);
      }
    }
  }
}

.Tab {
  width: 100%;
  margin: 20px 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    width: 150vw;
    li {
      cursor: pointer;
      display: inline-block;
      width: auto;
      padding: 0 2.933vw;
      height: 9.067vw;
      line-height: 9.067vw;
      text-align: center;
      color: #222;
      background: #f8f8f9;
      font-size: 3.2vw;
      margin-right: 3.733vw;
      letter-spacing: 0;
      border-radius: 0.533vw;
    }
  }
}

.agent {
  padding: 0 20px;
  .agentlist {
    padding: 5vw 0;
    display: flex;
    position: relative;
    .head {
      width: 22vw;
      height: 35vw;
      position: relative;
      img {
        position: absolute;
        width: 18vw;
        top: 0;
        left: 0;
      }
    }
    .content {
      flex: 0.8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name {
        font-size: 16px;
        font-weight: 700;
      }
      .desc {
        
      }
      .tags {
        list-style-type: none;
        display: flex;
        .tag {
          background: #f6f6f6;
          border-radius: 1px;
          font-size: 2.933vw;
          line-height: 4.533vw;
          color: #999;
          margin-right: 1.6vw;
          padding: 0 1.067vw;
          display: inline-block;
          margin-bottom: 1.333vw;
        }
      }
      .count-box {
        display: flex;
        justify-content: space-between;
        .count-item {
          .datum {
            font-size: 24px;
            font-weight: 700;
          }
          .category {
          }
        }
      }
    }
    .im-info {
      width: 10.667vw;
      height: 10.667vw;
      background-image: url(https://s1.ljcdn.com/castore/client/media/src/client/components/AgentCard/img/lianjiaIM.c0e72928.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border-radius: 50%;
      position: absolute;
      top: 5.333vw;
      right: 0;
    }
  }
}
</style>