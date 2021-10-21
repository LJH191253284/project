<template>
  <div>
    <Nav></Nav>
    <div
      class="bg"
      :style="{
        background:
          'url(	https://s1.ljcdn.com/castore/client/media/src/client/pages/jingjiren/Home/comp/JingjirenCard/img/bgblack-star.98a78841.png)no-repeat center center',
        backgroundSize: '100% 100%',
      }"
    >
      <div
        class="box"
        :style="{
          background:
            'url(https://s1.ljcdn.com/castore/client/media/src/client/pages/jingjiren/Home/comp/JingjirenCard/img/bgcard_star_yellow@2x.c3613b84.png)no-repeat center center',
          backgroundSize: '200% 100%',
        }"
      >
        <div class="star_card">
          <div class="head">
            <img :src="this.$route.query.avatar" />
            <div class="context">
              <div class="name">{{ this.$route.query.name }}</div>
              <div class="zonghe">{{ this.$route.query.positionName }}</div>
            </div>
          </div>

          <div class="specialtyList">
            <span
              v-for="li in this.$route.query.specialtyList"
              :key="li.length"
              >{{ li }}</span
            >
          </div>

          <div class="shop_info">
            <div>
              {{ this.$route.query.brand }}.{{ this.$route.query.shopName }}
            </div>
            <div></div>
          </div>

          <div class="service-info">
            <span>服务年限:{{ this.$route.query.seniority }}</span>
          </div>

          <div class="count">
            <div class="count_text">贝壳分</div>
          </div>

          <div class="num">{{ this.$route.query.keQuality }}</div>

          <div class="better-persent">打败了{{ this.parent }}%的经纪人</div>

          <div class="explain">
            <div>什么是贝壳分</div>
            <img
              src="	https://s1.ljcdn.com/castore/client/media/src/client/pages/jingjiren/Home/comp/JingjirenCard/img/icon_what_deepgrey@2x.f120cafe.png"
              alt=""
            />
            <div class="look">查看详情</div>
          </div>

          <div class="score-labeltext">
            按照表现得分从高到低划分为：极佳、优秀、良好、中等、一般5个等级
          </div>
        </div>
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
      parent: "",
    };
  },
  methods: {},
  created: function () {
    console.log(this.$route.query);
    this.parent = (this.$route.query.feedbackScore / 5) * 100;
  },
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 30rem;
  padding: 2rem;
  .box {
    width: 100%;
    height: 40rem;
    z-index: 10;
    .star_card {
      padding: 25px;
      .head {
        display: flex;
        img {
          width: 6rem;
          height: 6rem;
          border-radius: 100%;
          object-fit: cover;
        }
        .context {
          margin-left: 20px;
          .name {
            position: relative;
            font-size: 22px;
            font-weight: 700;
            &::after {
              position: absolute;
              content: "";
              right: -60px;
              top: 5px;
              left: 0;
              bottom: 0;
              background: url(https://s1.ljcdn.com/castore/client/media/src/client/pages/jingjiren/Home/comp/JingjirenCard/img/agent-card.a48322ec.png)
                no-repeat;
              background-size: 40% 70%;
              margin-left: 75px;
            }
          }
          .zonghe {
            margin-top: 5px;
            font-size: 12px;
            font-weight: bold;
          }
        }
      }
      .shop_info {
        margin-top: 5.333vw;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .specialtyList {
        display: flex;
        margin-top: 10px;
        span {
          background: #eadacd;
          display: inline-block;
          font-size: 3.2vw;
          padding: 1.6vw 2.133vw;
          border-radius: 0.533vw;
          margin-right: 1.333vw;
          margin-top: 1.333vw;
        }
      }
      .service-info {
        font-size: 3.2vw;
        margin-top: 4.267vw;
      }

      .count {
        margin-top: 4vw;
        white-space: nowrap;
        font-weight: 700;
        font-size: 4.267vw;
        line-height: 4.267vw;
        text-align: center;

        .count_text {
          vertical-align: sub;
          &::after {
            content: "";
            height: 1px;
            width: 30vw;
            background: rgba(34, 34, 34, 0.15);
            display: inline-block;
            transform: scaleY(0.5);
          }
          &::before {
            content: "";
            height: 1px;
            width: 30vw;
            background: rgba(34, 34, 34, 0.15);
            display: inline-block;
            transform: scaleY(0.5);
          }
        }
      }

      .num {
        margin-top: 15px;
        font-size: 4rem;
        line-height: 4rem;
        text-align: center;
        font-weight: 500;
      }
      .better-persent {
        text-align: center;
      }

      .explain {
        margin-top: 10px;
        line-height: 15px;
        text-align: center;
        display: flex;
        justify-content: center;
        img {
          width: 15px;
          height: 15px;
          line-height: 15px;
          margin-right: 15px;
        }
      }
      .score-labeltext {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
}
</style>