<template>
  <div>
    <ul
      v-if="item"
      class="lists"
      @click="
        pushDetail(
          item.title,
          item.totalPrice,
          bangdan,
          item.listPictureUrl,
          sm,
          item.fbExpoId
        )
      "
    >
      <!--每个信息内容 start -->

      <li class="item_list">
        <div class="images">
          <img
            referrer="no-referrer|origin|unsafe-url"
            :src="item.listPictureUrl"
          />
          <!--  -->
          <!-- <span class="vr_item">
          <i></i>
        </span> -->
        </div>

        <div class="item_main">
          <div class="item_tit">
            <img
              v-if="item.statusSwitch.isHaofang "
              src="../image/必看好房.png"
              class="good_icon"
            />
            <span class="tit">{{ item.title }}</span>
          </div>
          <div class="item_other">{{ item.bangdanTitle }}</div>
          <div class="item_minor">
            <span class="price_total">
              <span class="unit">{{ item.totalPrice }}</span>
            </span>
            <span class="unit_price">{{ item.unitPrice }}</span>
          </div>
          <!-- 遍历下面颜色其他信息 -->
          <div class="tag_box" v-for="tag in item.colorTags" :key="tag.key">
            <span
              class="tag"
              :style="{ color: tag.textColor, backgroundColor: tag.bgColor }"
              title="地铁二手房"
              >{{ tag.title }}</span
            >
          </div>
        </div>
      </li>
      <!--每个信息内容 end-->
    </ul>

    <!--  -->
    <ul v-else class="lists">
      <li class="item_list">
        <div class="images">
          <img referrer="no-referrer|origin|unsafe-url" :src="H_item.img" />
        </div>

        <div class="item_main">
          <div class="item_tit">
             <span class="tit">{{ H_item.title }}</span>
             <div class="item_other">{{ H_item.bangdan }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    H_item: {
      type: Array,
    },
  },
  data: function () {
    return {
      iconNum: Number,
      bangdan: "",
      sm: "",
    };
  },
  computed: {},
  methods: {
    pushDetail(title, price, bangdan, img, sm, id) {
      this.$router.push({
        path: "/detail",
        query: {
          title: title,
          price: price,
          bangdan: bangdan,
          img: img,
          sm: sm,
          id: id,
        },
      });
    },
    slicebangda: function () {
      this.bangdan = this.item.bangdanTitle.slice(0, 4);
      this.sm = this.item.bangdanTitle.split("/")[1];
    },
  },
  created: function () {
    // this.sendParams()
    this.slicebangda();
  },
};
</script>

<style lang="less" scoped>
.lists {
  width: 100%;
  height: auto;
  background-color: white;

  .item_list {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(229, 229, 229);
    padding: 20px 20px;
    .images {
      width: 40%;
      height: 30%;
      padding-right: 20px;
      img {
        max-height: 100%;
        width: 100%;
        height: 100%;
        float: left;
      }

      .vr_item {
        position: absolute;
        left: 0.3rem;
        bottom: 0.3rem;
        border: 0.03125rem solid hsla(0, 0%, 100%, 0.8);
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        z-index: 99;
        i {
          background: url(https://s1.ljcdn.com/hulk-web/static/m/statics/images/ershoufang/vr-animation.png?version=3c9a8cfde7)
            no-repeat;
          background-size: 1.25rem auto;
          width: 1.25rem;
          height: 1.25rem;
          animation: vrIcon 3.5s steps(53) infinite;
          display: block;
        }
      }
    }

    .item_main {
      width: 60%;
      height: auto;
      float: right;
      padding: 0 0;
      .item_tit {
        .good_icon {
          margin-right: 10px;
        }
      }
      .tit {
        margin-top: 0;
        font-size: 15px;
        font-weight: bold;
      }
      img {
        width: auto;
        height: 20px;
      }
      .item_other {
        margin-top: 2px;
        font-size: 12px;
        font-weight: lighter;
        color: rgb(147, 153, 165);
      }
      .item_minor {
        margin-top: 2px;
        .price_total {
          em {
            font-size: 18px;
            color: red;
          }
          .unit {
            font-size: 18px;
            color: red;
          }
        }
        .unit_price {
          font-size: 12px;
          font-weight: lighter;
          color: rgb(147, 153, 165);
        }
      }
      .tag_box {
        margin-top: 2px;
        float: left;
        padding: 0 2px 0;
        span {
          line-height: 16px;
        }
      }
    }
  }
}
</style>