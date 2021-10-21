<template>
  <div v-if="detail">
    <div class="head">
      <div
        class="glyphicon glyphicon-chevron-left l"
        @click="$router.go(-1)"
      ></div>
      <div
        class="mask"
        :style="{
          background:
            'url(' +
            `${detail.coverImgUrl}?imageView=1&type=webp&thumbnail=126x0` +
            ')no-repeat center center',
          backgroundSize: '350% 350%',
        }"
      ></div>
      <div class="left">
        <div class="songsheet">歌单</div>
        <i class="lsthd_num"> {{ detail.playCount | parseCount }}</i>
        <img
          :src="`${detail.coverImgUrl}?imageView=1&type=webp&thumbnail=126x0`"
        />
      </div>

      <div class="context">
        <div class="title">{{ detail.name }}</div>
        <div class="lsthd">
          <img
            class="u-img"
            :src="`${detail.creator.avatarUrl}?imageView=1&type=webp&thumbnail=30x0`"
          />
          <p>{{ detail.creator.nickname }}</p>
        </div>
      </div>
    </div>

    <ul>
      <!-- <li v-for="item in detail.tracks" :key="item.id">{{ item.name }}</li> -->
      <SongListItem
        v-for="(item, index) in detail.tracks"
        :key="item.id"
        :item="item"
        @change-current-song="
          $emit('change-current-song', item);
          $emit('change-current-play-list', detail.tracks);
        "
        :currentSongId="currentSongId"
        :playing="playing"
        :class="{ lt3: index < 3 }"
        >{{ (index + 1).toString().padStart(2, "0") }}
      </SongListItem>
    </ul>
  </div>
</template>

<script>
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: {
    SongListItem,
  },
  props: {
    currentSongId: {
      type: Number,
    },
    playing: Boolean,
  },
  data: function () {
    return {
      detail: null,
    };
  },
  methods: {
    getPlayListDetail: function (id) {
      this.axios
        .get("http://apis.netstart.cn/music/playlist/detail", {
          params: {
            id,
          },
        })
        .then((res) => {
          console.log(res);
          this.detail = res.data.playlist;
        });
    },
    //
  },
  //过滤
  filters: {
    parseCount: function (value) {
      // return value + "0";
      if (value > 100000000) {
        return (value / 100000000).toFixed(1) + "亿";
      } else if (value > 10000) {
        return (value / 10000).toFixed(1) + "万";
      } else {
        return value;
      }
    },
  },
  //
  created: function () {
    this.getPlayListDetail(this.$route.query.id);
  },
};
</script>

<style lang="less" scoped>
.head {
  position: relative;
  width: 100%;
  height: 186px;
  padding: 30px 10px 30px 15px;
  overflow: hidden;
  display: flex;
  .l {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
  }
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    filter: blur(20px);
    z-index: -1;
  }
  .left {
    position: relative;
    .songsheet {
      position: absolute;

      top: 10px;
      left: 0;
      padding: 0 8px;
      height: 17px;
      color: #fff;
      font-size: 9px;
      text-align: center;
      line-height: 17px;
      background-color: rgba(217, 48, 48, 0.8);
      border-top-right-radius: 17px;
      border-bottom-right-radius: 17px;
    }
    .lsthd_num {
      position: absolute;
      right: 2px;
      top: 0;

      padding-left: 15px;
      color: #fff;
      font-size: 12px;
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 11px 10px;
      text-shadow: 1px 0 0 rgb(0 0 0 / 15%);
    }
    .img {
      width: 100%;
      border: 1px solid black;
      z-index: 10;
    }
  }
  .rank {
    position: absolute;
    left: 0;
    margin-left: 10px;
    margin-top: -10px;
  }
  .context {
    width: 100%;
    height: 126px;
    padding: 0px 0px 0px 10px;
    flex: 1;
    .title {
      padding-top: 1px;
      font-size: 17px;
      color: white;
    }
    .lsthd {
      display: flex;
      height: 30px;
      line-height: 30px;
      color: hsla(0, 0%, 100%, 0.7);
      .u-img {
        border-radius: 50%;
      }
      p {
      }
    }
  }
}
</style>
