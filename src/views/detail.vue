<template>
  <div>
    <div class="detail">
      <Nav></Nav>
      <Swiper :img="this.$route.query.img"></Swiper>
      <!--标题 start-->
      <div class="house_title">
        <h3 class="detail_title">{{ this.$route.query.title }}</h3>

        <div class="follow" v-if="this.follow" @click="changefollow">
          <div class="head-icon-gr"></div>
          <span>已关注</span>
        </div>
        <div class="follow" v-else @click="changefollow">
          <div class="head-icon"></div>
          <span>关注</span>
        </div>

        <div class="tit">
          <div class="agent">
            <div class="icon"></div>
            <span>房源发布机构</span>
          </div>
          <div class="agent">
            <div class="icon"></div>
            <span>风险提示</span>
          </div>
        </div>
      </div>
      <!--标题 end-->

      <!--房子基本信息-->
      <h3 class="similar_data">
        <div class="price_box">
          <div class="similar_data_detail">
            <p class="red big">
              <span data-mark="price">{{ this.$route.query.price }}</span>
              <span data-mark="unit" data-unit="">元</span>
            </p>
            <p class="gray big">售价</p>
          </div>
          <div class="similar_data_detail">
            <p class="red big">{{ this.$route.query.bangdan }}</p>
            <p class="gray big">房型</p>
          </div>
          <div class="similar_data_detail">
            <p class="red big">{{ this.$route.query.sm }}</p>
            <p class="gray big">建筑面积</p>
          </div>
        </div>
      </h3>
      <!--房子基本信息 end -->
      <!--打开APP-->
      <div
        class="
          pictext
          flexbox
          lazyload_ulog
          agent_download
          arrow
          agent_download_head
        "
        data-mark="download_app"
        data-detail_info='{"awaken_app_info":{"type":"universalLink","download_url":"https:\/\/linkm.lianjia.com\/?schema=lianjia%253A%252F%252Fershou%252Fdetail%253FhouseCode%253D108401621855&amp;redirect_url=http%253A%252F%252Fad.data.lianjia.com%252Fcallback%252Fsem%253FutmSource%253Dlianjia_zhilian_m%2526platformType%253D2&amp;ssid=5c3ba53f-d5b5-4b36-bb59-c2d87c836082&amp;uuid=61ec5341-2335-4d62-861a-e58d6a825111&amp;refer=https%3A%2F%2Fm.lianjia.com%2Fgz%2F&amp;current_url=https%253A%252F%252Fm.lianjia.com%252Fgz%252Fershoufang%252F108401621855.html&amp;sign=2b0787300648c9ac88cb409677cf0631","scheme":""}}'
        data-info="ljweb_mod=download_jingjiren1"
        data-evtid="10380"
        data-ulog="ljweb_mod=download_jingjiren1"
      >
        <div class="download_logo">
          <img
            src="https://s1.ljcdn.com/hulk-web/static/m/images/common/logo300x300.png?_v=20210716191023b5e"
            alt="下载链家APP"
          />
        </div>
        <div class="download_desc">打开链家APP ，在线咨询经纪人</div>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
      <!--打开APP end-->
      <!--房子详情信息-->
      <ul
        class="house_description big lightblack lazyload_ulog"
        data-evtid="13904"
        data-ulog="pid=lianjiamweb&amp;source_type=二手房源详情信息&amp;event=mModuleExpo"
      >
        <div class="tag_group">
          <span class="">VR房源</span>
          <span class="">满五年</span>
          <span class="">随时看房</span>
          <span class="">有电梯</span>
        </div>
        <li class="short"><span class="gray">单价：</span>39973元/平</li>
        <li class="short"><span class="gray">挂牌：</span>2020.09.19</li>
        <li class="short"><span class="gray">朝向：</span>东南</li>
        <li class="short"><span class="gray">楼层：</span>中楼层/20</li>
        <li class="short"><span class="gray">楼型：</span>塔楼</li>
        <li class="short"><span class="gray">电梯：</span>有电梯</li>
        <li class="short"><span class="gray">装修：</span>简装</li>
        <li class="short"><span class="gray">年代：</span>2007年</li>
        <li class="short"><span class="gray">用途：</span>普通住宅</li>
        <li class="short"><span class="gray">权属：</span>商品房</li>

        <li class="long arrow">
          <!-- 首付预算: 计算失败 -->
          <!-- 首付预算: 计算成功 -->
          <div class="shoufu-wrap">
            <a
              href="https://tax.jiaoyi.lianjia.com/sf/detail?cityCode=440100&amp;houseCode=108401621855&amp;taxStatus=1&amp;source=lianjia&amp;ots=1626504421000&amp;cjj=2950000&amp;sk=265f148025f4b271dbdf0120c5d26ee3"
              class="post_ulog"
              data-evtid="13905"
              data-ulog="pid=lianjiamweb&amp;source_type=房源页首付入口点击&amp;event=mElementClick&amp;click_name=shoufurukou_succeed"
            >
              <span class="gray">首付预算：</span>
              <span
                >净首付99万，月供、税费点击查...
                <span class="glyphicon glyphicon-menu-right"></span
              ></span>
            </a>
          </div>
          <div class="payment_guide" data-act="close_guide">
            <div class="arrow_down"></div>
          </div>
        </li>
        <li class="long arrow">
          <a
            href="https://m.lianjia.com/gz/xiaoqu/2110343238861226/"
            class="post_ulog"
            data-evtid="10347"
            data-ulog=""
          >
            <span class="gray">小区：</span>新世界逸彩庭园</a
          >
          <span class="glyphicon glyphicon-menu-right"></span>
        </li>
        <li class="long arrow">
          <a href="http://zfcj.gz.gov.cn/xysj/xzzx/qtl/" target="_blank">
            <span class="gray">政策：</span>广州市房屋交易政策指引告知书
            <span class="glyphicon glyphicon-menu-right"></span
          ></a>
        </li>
      </ul>
      <!--房子详情信息 end-->

      <Agent></Agent>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Swiper from "../components/swiper.vue";
import Agent from "../components/agent.vue";

export default {
  components: { Nav, Swiper, Agent },
  data: function () {
    return {
      detailListdata: null,
      bangda: "",
      follow: false,
      houseID: this.$route.query.id,
      id: "",
      history: JSON.parse(window.localStorage.getItem("history")) || [],
    };
  },

  methods: {
    getDetail: function () {
      //链家房子数据
      this.axios
        .get("https://m.lianjia.com/liverpool/api/ershoufang/getList")
        .then((res) => {
          this.detailListdata = res.data.data.data.getErShouFangList.list;
          console.log(this.detailListdata);
        });
    },
    changefollow: function () {
      this.follow = !this.follow;
      if (this.follow === true) {
        this.history = [...new Set([...this.history, this.$route.query])];
        window.localStorage.setItem("history", JSON.stringify(this.history));
      } else if (this.follow === false) {
        this.history = this.history.splice(this.history.length, 1);
        window.localStorage.removeItem("history");
      }
    },

    // getExit(id) {
    //   var old = window.localStorage.setItem("history") || [];
    //   var isExit = old.find((_) => _.houseID === id);
    //   return isExit;
    // },
  },
  //

  created: function () {},
  mounted: function () {},
};
</script>

<style lang="less" scoped>
//标题
.house_title {
  background-color: white;
  width: 335px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  .detail_title {
    width: 75vw;
    height: 64px;
    font-weight: 700;
  }
  .follow {
    position: absolute;
    width: 40px;
    height: 35px;
    right: 0;
    top: 0px;

    .head-icon {
      width: 28px;
      height: 26px;
      background: url("https://s1.ljcdn.com/hulk-web/static/m/statics/images/wenda/sprite.svg?version=065a24b7b4")
        no-repeat;
      background-position: 0px -366px;
      background-size: 100% 1800%;
      background-color: transparent;
    }
    .head-icon-gr {
      width: 28px;
      height: 26px;
      background: url("https://s1.ljcdn.com/hulk-web/static/m/statics/images/wenda/sprite.svg?version=065a24b7b4")
        no-repeat;
      background-position: 0px -255px;
      background-size: 100% 1800%;
      background-color: transparent;
    }
    span {
      color: #101d37;
      font-size: 0.6875rem;
      position: absolute;
      top: 3.6rem;
      right: 0.6rem;
      display: block;
      text-align: center;
      width: 100%;
    }
  }

  .tit {
    border-bottom: 1px solid beige;
    width: 335px;
    height: 33.5px;
    margin: 0 auto;

    .agent {
      line-height: 33.5px;
      float: left;
      padding: 0 7px;
      .icon {
        margin-top: 7px;
        width: 20px;
        height: 15px;

        background: url("../image/详情页-image/详情-house_organization.png")
          no-repeat 0 0;
        background-size: 100% 100%;
        float: left;
      }
      span {
        color: #101d37;
        line-height: 33.5px;
        float: left;
        margin-right: 5px;
      }
    }
  }
}
//标题 end
//房子基本信息
.similar_data {
  background-color: white;
  border-bottom: 1px solid beige;
  width: 100%;
  height: 83.5px;
  padding: 20px 0;
  .price_box {
    width: 100%;
    height: 43.6px;
    .similar_data_detail {
      border-right: 1px solid beige;
      width: 120px;
      height: 39px;
      padding-left: 20px;
      float: left;
      .red {
        color: #fa5741;
        .price {
        }
        .unit {
        }
      }
      .gray {
        font-size: 0.8125rem;
        font-weight: lighter;
        color: #9c9fa1;
      }
    }
  }
}
//房子基本信息 end
//打开APP
.pictext {
  background-color: white;
  border-bottom: 1px solid beige;
  width: 335px;
  height: 54.5px;
  margin: 0 20px;
  padding: 12px 0;
  position: relative;
  .download_logo {
    float: left;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .download_desc {
    width: 238px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    float: left;
  }
  span {
    position: absolute;
    right: 0;
    top: 22px;
    font-size: 12px;
    color: #9c9fa1;
  }
}
//打开APP end
//房子详情信息
.house_description {
  position: relative;
  background-color: white;
  margin: 0 auto;
  width: 335px;
  height: 341px;
  clear: both;
  .tag_group {
    width: 100%;
    height: 54px;
    line-height: 54px;

    span {
      display: inline-block;
      height: 1.0625rem;
      font-size: 12px;
      line-height: 1.0625rem;
      background-color: #e3f4f3;
      color: #1ba39c;
      margin: 0 5px;
      border-radius: 0.125rem;
    }
  }
  li {
    width: 157px;
    height: 25px;
    line-height: 25px;
    float: left;
    margin: 0 0 8px;
    font-size: 16px;
    span {
      font-size: 16px;
      color: #9c9fa1;
    }
  }
  .long {
    width: 100%;
    color: #5680a6;
    position: relative;
    .glyphicon {
      position: absolute;
      right: 0;
      font-size: 12px;
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: -20px;
    width: 111%;
    height: 0.75rem;
    background: #f8f8f8;
  }
}
//房子详情信息 end
</style>