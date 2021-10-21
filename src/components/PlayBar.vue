<template>
  <!-- 搜索bar -->
  <section
    v-if="currentSong.album"
    class="playbar"
    :class="{ playing: playing }"
    @click="$emit('toggle-show-play-page', true)"
  >
    <img
      v-if="currentSong.album"
      :src="`http://p1.music.126.net/S49Yeqwb661hWE9HNoLbeA==/109951166352830274.jpg`"
      alt=""
    />
    <!-- <img
      :src="`${
        currentSong.song ? currentSong.picUrl : currentSong.al.picUrl
      }?imageView=1&type=webp&thumbnail=60x0`"
      alt=""
    /> -->
    <h3>
      {{ currentSong.name
      }}<span>
        -
        {{ currentSong.artists[0].name }}</span
      >
    </h3>

    <div class="progress" @click.stop="$emit('toggle-playing-state')">
      <canvas width="40" height="40" ref="canvas"></canvas>
      <div class="icon" :class="[playing ? 'pause' : 'play']"></div>
    </div>
    <div
      class="glyphicon glyphicon-list"
      @click.stop="$emit('toggle-show-play-list', true)"
      style="font-size: 18px"
    ></div>
  </section>
  <!-- 其他bar -->
  <section
    v-else
    class="playbar"
    :class="{ playing: playing }"
    @click="$emit('toggle-show-play-page', true)"
  >
    <!-- <img
      v-if="currentSong.album"
      :src="`http://p1.music.126.net/S49Yeqwb661hWE9HNoLbeA==/${currentSong.album.picId}.jpg`"
      alt=""
    /> -->
    <img
      :src="`${
        currentSong.song ? currentSong.picUrl : currentSong.al.picUrl
      }?imageView=1&type=webp&thumbnail=60x0`"
      alt=""
    />
    <h3>
      {{ currentSong.name
      }}<span>
        -
        {{
          currentSong.song
            ? currentSong.song.artists[0].name
            : currentSong.ar[0].name
        }}</span
      >
    </h3>

    <div class="progress" @click.stop="$emit('toggle-playing-state')">
      <canvas width="40" height="40" ref="canvas"></canvas>
      <div class="icon" :class="[playing ? 'pause' : 'play']"></div>
    </div>
    <div
      class="glyphicon glyphicon-list"
      @click.stop="$emit('toggle-show-play-list', true)"
      style="font-size: 18px"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    currentSong: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
    currentPlayList: Array,
  },

  mounted: function () {
    console.log(this.$refs.canvas);
    // this.canvas = this.$refs.canvas
  },
  computed: {
    percentage: function () {
      return this.currentTime / this.duration;
    },
  },
  watch: {
    percentage: function (n) {
      var context = this.$refs.canvas.getContext("2d");
      context.clearRect(0, 0, 40, 40);

      context.beginPath();
      context.arc(
        20,
        20,
        16,
        (Math.PI / 180) * (0 - 90),
        (Math.PI / 180) * (360 * n - 90)
      );
      context.strokeStyle = "#d43c33";
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();
      context.arc(
        20,
        20,
        16,
        (Math.PI / 180) * (360 * n - 90),
        (Math.PI / 180) * (360 - 90)
      );
      context.strokeStyle = "gray";
      context.lineWidth = 1;
      context.stroke();
    },
  },
};
</script>

<style lang="less" scoped>
.playbar {
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  padding: 0 12px;

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    animation: rotate 8s linear infinite;
    animation-play-state: paused;
  }
  h3 {
    padding: 0 10px;
    flex: 1;
    font-size: 14px;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      color: rgb(151, 151, 151);
      font-size: 10px;
    }
  }

  .progress {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 25px;
    background-color: white;

    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: none;
    }
    .icon {
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &.play {
        // background: lightcoral;
        border-top: 6px solid transparent;
        // border-right: 0px solid rgb(0, 132, 255);
        border-bottom: 6px solid transparent;
        border-left: 10px solid rgb(0, 0, 0);
        transform: translateX(3px);
      }
      &.pause {
        // background: lightblue;
        &::before,
        &::after {
          content: "";
          display: block;
          height: 80%;
          width: 20%;
          background: black;
        }
      }
    }
  }
  &.playing {
    img {
      animation-play-state: running;
    }
  }
}
</style>
