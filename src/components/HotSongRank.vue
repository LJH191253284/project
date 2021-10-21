<template>
  <div class="hotsongrank">
    <div class="hotopct">
      <div class="u-hmsprt"></div>
      <div class="hottime">更新时间:{{ datanow() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: [],
    };
  },
  methods: {
    datanow: function () {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      if (m <10) {
        return `${m + 1}月${d}日`;
      } else {
        return `${m + 1}月${d}日`;
      }
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.hotsongrank {
  position: relative;
  width: 100%;
  height: 145.95px;
  background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=)
    no-repeat;
  .hotopct {
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-direction: normal;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    .u-hmsprt {
      width: 142px;
      height: 67px;
      background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=)
        no-repeat;
      background-position: -24px -30px;
      background-size: 166px 97px;
    }
    .hottime {
      margin-top: 10px;
      color: #fffc;
      font-style: 12px;
    }
  }
}
</style>