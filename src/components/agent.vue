<template>
  <div>
    <div class="prson">
      <div class="title">推荐经纪人</div>
      <ul>
        <li
          class="agent_list"
          v-for="item in jjList"
          :key="item.ucId"
          @click="
            pushagent(
              item.avatar,
              item.name,
              item.specialtyList,
              item.positionName,
              item.brand,
              item.shopName,
              item.seniority,
              item.keQuality,
              item.feedbackScore
            )
          "
        >
          <div class="head_icon">
            <img class="avatar" :src="item.avatar" />
            <img
              v-if="item.levelLabel"
              class="xin_icon"
              :src="item.levelLabelUrl"
              alt=""
            />
          </div>

          <!-- middle -->
          <div class="middle">
            <div class="one">
              <div class="name">{{ item.name }}</div>
              <div class="brand">{{ item.brand }}</div>
            </div>
            <div class="two">
              <div class="keQuality">{{ item.keQuality }}</div>
              贝壳分
              <div class="fuhao">|</div>
              <div class="feedbackScore">{{ item.feedbackScore }}分</div>
            </div>
            <div class="three">
              <div>{{ item.reason }}</div>
            </div>
            <div class="four">
              <div
                v-for="slist in item.specialtyList"
                :key="slist.length"
                class="jinji_label"
              >
                {{ slist }}
              </div>
            </div>
          </div>
          <!-- right icon -->
          <div class="jinji_icon">
            <img
              src="	https://s1.ljcdn.com/hulk-web/static/m/statics/images/ershoufang/agent_im.svg?version=4b248a0cd5"
              alt=""
            />
            <img
              src="	https://s1.ljcdn.com/hulk-web/static/m/statics/images/ershoufang/agent_phone.svg?version=ec5bddd470"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      jjList: [],
    };
  },
  methods: {
    pushagent(
      avatar,
      name,
      specialtyList,
      positionName,
      brand,
      shopName,
      seniority,
      keQuality,
      feedbackScore,
    ) {
      this.$router.push({
        path: "/jingji",
        query: {
          avatar: avatar,
          name: name,
          specialtyList: specialtyList,
          positionName: positionName,
          brand: brand,
          shopName: shopName,
          seniority: seniority,
          keQuality: keQuality,
          feedbackScore:feedbackScore,
        },
      });
    },
  },
  created: function () {
    // //请求经纪人数据
    // this.axios
    //   .get(
    //     "https://m.lianjia.com/castore/api/jingjiren/getList?cityId=440100&condition=%252Fao12ta3&from=lianjia_m&searchFrom=jingjiren"
    //   )
    //   .then((res) => console.log(res.data.data.data.getJingJiRenList));

    //请求推荐经纪人数据
    this.axios
      .get(
        "https://ex.lianjia.com/sdk/recommend/html/100001362?hdicCityId=440100&houseCode=108402494784&resblockId=2110343238861226&paramMap[theme]=lianjia-00AE66&id=100001362&mediumId=100000033&required400=false&templateConfig=%5Bobject%20Object%5D&parentSceneId=5773902864218983937"
      )
      .then((res) => {
        this.jjList = res.data.data.agentList;
        console.log(this.jjList);
      });
  },
};
</script>

<style lang="less" >
.prson {
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 0 20px;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  ul {
    .agent_list {
      display: flex;
      position: relative;
      width: 100%;
      height: 10rem;
      margin-top: 10px;
      .head_icon {
        position: relative;
        .avatar {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          margin-right: 10px;
        }
        .xin_icon {
          position: absolute;
          left: 0;
          top: 3rem;
          width: 4rem;
        }
      }

      .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .one {
          display: flex;
          .name {
            color: #101d37;
            font-size: 1.7rem;
            font-weight: 700;
          }
          .brand {
            color: #9399a5;
            font-size: 0.7rem;
            border-radius: 4px;
            padding: 3px;
            margin-left: 0.8rem;
            background: #eff0f2;
            display: inline-block;
          }
        }
        .two {
          display: flex;
          line-height: 1.8rem;
          .keQuality {
            color: #fa5741;
            font-size: 1.8rem;
            font-weight: bold;
          }
          .fuhao {
            margin-left: 5px;
          }
          .feedbackScore {
            margin-left: 5px;
          }
        }
        .three {
          color: #9399a5;
          white-space: nowrap;
          font-weight: 400;
        }
        .four {
          display: flex;
          .jinji_label {
            background-color: rgba(48, 114, 246, 0.1);
            color: #3072f6;
            &:nth-child(n + 2) {
              margin-left: 1rem;
            }
          }
        }
      }
      .jinji_icon {
        position: absolute;
        top: 0;
        right: 0;
        img {
          width: 4rem;
          &:nth-child(1) {
            margin-right: 2rem;
          }
        }
      }
    }
  }
}
</style>