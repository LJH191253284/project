<template>
  <section class="play-page">
    <!-- 搜索 -->
    <div
      v-if="currentSong.album"
      class="mask"
      :style="{
        backgroundImage: `url(
        http://p1.music.126.net/S49Yeqwb661hWE9HNoLbeA==/109951166352830274.jpg
        ?imageView=1&type=webp&thumbnail=246x0)`,
      }"
    ></div>
    <!-- 其他 -->
    <div
      v-else
      class="mask"
      :style="{
        backgroundImage: `url(${
          currentSong.song ? currentSong.picUrl : currentSong.al.picUrl
        }?imageView=1&type=webp&thumbnail=246x0)`,
      }"
    ></div>
    <div
      class="glyphicon glyphicon-chevron-left"
      @click="$emit('toggle-show-play-page', false)"
      style="font-size: 18px; color: white"
    ></div>

    <section class="rotate" @click="showLyric = true" v-if="!showLyric">
      <img
        class="needle"
        :class="{ paused: !playing }"
        src="https://s3.music.126.net/mobile-new/img/needle-ab.png"
      />

      <section class="record" :class="{ playing: playing }">
        <!-- 搜索 -->
        <img
          v-if="currentSong.album"
          class="thumb"
          :src="`http://p1.music.126.net/S49Yeqwb661hWE9HNoLbeA==/109951166352830274.jpg`"
        />
        <!-- 其他 -->
        <img
          v-else
          class="thumb"
          :src="currentSong.song ? currentSong.picUrl : currentSong.al.picUrl"
        />

        <img
          class="disc"
          src="https://s3.music.126.net/mobile-new/img/disc.png"
        />
      </section>
    </section>
    <!-- 歌词 -->
    <section v-else class="lyric" @click="showLyric = false" ref="lyric">
      <ul
        v-if="parsedLyric.length"
        class="content"
        ref="lyricContent"
        :style="{ marginTop: -scrollH + 'px' }"
      >
        <li v-for="(l, i) in parsedLyric" :key="i">
          <span
            :class="{
              active: currentLyricIndex === i,
              playing: playing && currentLyricIndex === i,
            }"
            :style="{
              animationDuration: parsedLyric[i + 1]
                ? parsedLyric[i + 1].time - l.time - 0.5 + 's'
                : '3s',
            }"
            >{{ l.text }}</span
          >
        </li>
      </ul>
    </section>
    <!-- 进度条 -->
    <section class="progress">
      <input
        type="range"
        :max="duration"
        step="0.5"
        v-model="value"
        @change="progressChange"
        @input="progressInput"
      />
      <span
        class="bar"
        :style="{ width: (value / duration) * 100 + '%' }"
      ></span>
    </section>

    <!-- 列表按钮 -->
    <section class="controls">
      <span
        class="glyphicon glyphicon-random"
        @click="$emit('toggle-play-model')"
        style="font-size: 18px"
      ></span>
      <span
        class="glyphicon glyphicon-backward"
        @click="$emit('prev-song')"
        style="font-size: 18px"
      ></span>
      <span
        v-if="playing == false"
        class="glyphicon glyphicon-play"
        @click="$emit('toggle-playing-state')"
        style="font-size: 18px"
      ></span>
      <span
        v-else
        class="glyphicon glyphicon-pause"
        @click="$emit('toggle-playing-state')"
        style="font-size: 18px"
      ></span>
      <span
        class="glyphicon glyphicon-forward"
        @click="$emit('next-song')"
        style="font-size: 18px"
      ></span>
      <span
        class="glyphicon glyphicon-align-justify"
        @click.stop="$emit('toggle-show-play-list', $event)"
        style="font-size: 18px"
      ></span>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    currentSong: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
  },
  data: function () {
    return {
      value: this.currentTime,
      inputing: false,
      showLyric: false,
      lyric: null,
      lisH: [],
      scrollH: 0,
    };
  },
  //监听属性
  watch: {
    currentTime: function (n) {
      if (!this.inputing) {
        this.value = n;
      }
    },
    "currentSong.id": function (id) {
      this.getLyric(id);
    },
    currentLyricIndex: function (index) {
      var h = this.lisH.slice(0, index).reduce(function (total, item) {
        return total + item;
      }, 0);
      h = h > 200 ? h - 200 : 0;
      h = h > 1928 ? 1928 : h;
      this.scrollH = h;
    },

    parsedLyric: function () {
      if (this.showLyric == true) {
        this.$nextTick(() => {
          var lis = this.$refs.lyricContent.querySelectorAll("li");
          this.lisH = [...lis].map((item) => item.offsetHeight);
        });
      }
    },
  },

  //created
  created: function () {
    this.getLyric(this.currentSong.id);
  },

  //方法
  methods: {
    progressChange: function (event) {
      this.inputing = false;
      this.$emit("current-time-change", event.target.value);
    },
    progressInput: function () {
      this.inputing = true;
    },
    getLyric: function (id) {
      this.axios
        .get("/lyric", {
          params: { id },
        })
        .then((res) => (this.lyric = res.data.lrc.lyric));
    },
  },
  //计算属性
  computed: {
    //
    parsedLyric: function () {
      if (this.lyric) {
        return this.lyric
          .split("\n")
          .filter((s) => s)
          .map((s) => {
            var text = s.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]/i, "");
            var timeStr = s.replace(text, "").replace(/(^\[|\]$)/g, "");
            var timeArr = timeStr.split(":").map((item) => Number(item));
            var time = timeArr[0] * 60 + timeArr[1];
            return { text, time };
          });
      } else {
        return [];
      }
    },
    //
    currentLyricIndex: function () {
      var i = this.parsedLyric.findIndex(
        (item) => item.time > this.currentTime
      );
      var currentLyricIndex = i !== -1 ? i - 1 : this.parsedLyric.length - 1;
      return currentLyricIndex;
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes xxx {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: -100%;
  }
}
.pos-ab() {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.play-page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  overflow: hidden;
  &::before {
    content: "";
    display: block;
    .pos-ab();
    z-index: -2;
    background-color: #333;
  }

  .mask {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(30px) brightness(0.8);
    .pos-ab();
    z-index: -1;
    transform: scale(1.5);
    transition: all 0.3s;
  }
  .rotate {
    position: relative;
    padding-top: 25vw;
    img.needle {
      height: 40vw;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 9;
      margin-left: -15px;
      transform-origin: 15px 15px;
      transform: rotate(0deg);
      transition: all 0.3s;
      &.paused {
        transform: rotate(-20deg);
      }
    }

    .record {
      position: relative;
      width: 80vw;
      height: 80vw;
      margin: 0 auto 0 auto;
      img {
        .pos-ab();
        border-radius: 50%;
        &.thumb {
          transform: scale(0.8);
        }
      }
      animation: rotate 8s linear infinite;
      animation-play-state: paused;
      &.playing {
        animation-play-state: running;
      }
    }
  }

  .lyric {
    height: 60vh;
    color: white;
    text-align: center;
    overflow: hidden;
    position: relative;
    ul {
      transition: all 0.3s;
      li {
        line-height: 1.8;

        span {
          &.active {
            animation-name: xxx;
            animation-timing-function: linear;
            animation-duration: 3s;
            background-image: linear-gradient(
              to right,
              rgb(211, 207, 208) 50%,
              rgb(74, 201, 152) 50%
            );
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            animation-play-state: paused;
            &.playing {
              animation-play-state: running;
            }
          }
        }
      }
    }
  }
  .progress {
    width: 80vw;
    height: 5px;
    margin: 0 auto;
    margin-top: 60px;
    background: white;
    position: relative;
    border-radius: 10px;
    overflow: visible;

    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      top: 0;
    }
    .bar {
      .pos-ab();
      background: rgb(134, 131, 132);
      border-radius: inherit;
      &::before {
        content: "";
        width: 15px;
        height: 15px;
        margin-right: -5px;
        background: rgb(134, 131, 132);
        position: absolute;
        top: -4px;
        right: 0;
        border-radius: 50%;
        border: 1px solid rgb(165, 162, 163);
      }
    }
  }

  .controls {
    width: 100%;
    padding: 80px 5px 5px 5px;
    display: flex;
    justify-content: space-around;
    color: white;
  }
}
</style>
