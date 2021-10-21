<template>
  <div class="search" @scroll="scroll">
    <!-- 搜索栏 -->
    <div class="inputcover">
      <div class="icon"></div>
      <input
        type="text"
        placeholder="搜索歌曲、歌手、专辑"
        v-model.trim="value"
        @keyup.enter="value && (searching = true)"
        @focus="inputing = true"
        @blur="inputing = false"
      />
    </div>
    <div class="m-default">
      <section class="hots" v-if="!value && !searching">
        <h5>热门搜索</h5>
        <ul>
          <li
            v-for="item in hotdata"
            :key="item.first"
            @click="
              searching = true;
              value = item.first;
            "
          >
            <p>{{ item.first }}</p>
          </li>
        </ul>

        <ol class="m-history">
          <li
            v-for="h in history"
            :key="h"
            @click="
              searching = true;
              value = h;
            "
          >
            <p>{{ h }}</p>
            <div class="icon" @click.stop="rehistory(h)"></div>
          </li>
        </ol>
      </section>

      <!-- 搜索建议 -->
      <section class="suggests" v-if="value && !searching">
        <h5>搜索建议</h5>
        <ul>
          <li
            class="suglist"
            v-for="(sug, index) in suggests"
            :key="index"
            @click="
              searching = true;
              value = sug.keyword;
            "
          >
            {{ sug.keyword }}
          </li>
        </ul>
      </section>

      <!--搜索结果  -->
      <section class="suggests" v-if="searching">
        <h5>搜索结果</h5>
        <ul>
          <SongListItem
            v-for="(item, index) in searchResults"
            :key="index"
            :item="item"
            :currentSong="currentSong"
            :currentSongId="currentSongId"
            :playing="playing"
            @change-current-song="
              $emit('change-current-song', item);
              $emit('change-current-play-list', searchResults);
            "
          >
          </SongListItem>
        </ul>
        <p v-if="!hasMore">没有更多了</p>
      </section>
    </div>
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
    currentSong: Object,
  },
  data: function () {
    return {
      hotdata: [],
      suggests: [],
      searchResults: [],
      value: "",
      searching: false,
      inputing: false,
      hasMore: false,
      page: 0,
      history: JSON.parse(window.localStorage.getItem("history")) || [],
    };
  },
  methods: {
    rehistory: function (index) {
      let i = this.history.filter((h) => h.index !== index);
      this.history.splice(i, 1);
    },
    scroll: function (event) {
      if (this.hasMore) {
        if (
          event.target.offsetHeight + event.target.scrollTop ===
          event.target.scrollHeight
        ) {
          console.log("触底");
          this.getSearch();
        }
      } else {
        console.log("没有");
      }
    },
    getSearch: function () {
      this.axios
        .get("http://apis.netstart.cn/music/search", {
          params: {
            keywords: this.value,
            limit: 30,
            offset: this.page * 30,
          },
        })
        .then((res) => {
          this.searchResults.push(...res.data.result.songs);
          this.page++;
          this.hasMore = res.data.result.hasMore;
          //
        });

      // 历史记录
      this.history = [...new Set([...this.history, this.value])];
      window.localStorage.setItem("history", JSON.stringify(this.history));
    },
  },
  created: function () {
    this.axios.get("http://apis.netstart.cn/music/search/hot").then((res) => {
      this.hotdata = res.data.result.hots;
    });
  },
  watch: {
    value: function (n) {
      if (this.inputing) {
        this.searching = false;
      }
      if (n && !this.searching) {
        this.axios
          .get("http://apis.netstart.cn/music/search/suggest", {
            params: {
              keywords: n,
              type: "mobile",
            },
          })
          .then((res) => {
            this.suggests = res.data.result.allMatch;
          });
      } else {
        this.suggests = [];
      }
    },

    searching: function (n) {
      if (n && this.value) {
        this.getSearch();
      } else {
        this.searchResults = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  width: 100vw;
  height: (100vh - 42px);
  .inputcover {
    position: relative;
    width: 100%;
    height: 60px;
    padding: 15px;
    box-shadow: 0 -1px 3px 0px rgb(231, 231, 231) inset;
    .icon {
      position: absolute;
      left: 25px;
      top: 22px;
      width: 14px;
      height: 14px;
      background-size: 100% 100%;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==")
        no-repeat;
    }
    input {
      width: 100%;
      height: 30px;
      border-radius: 20px;
      font-size: 14px;
      padding-left: 40px;
      border: none;
      background: #ebecec;
    }
  } //输入框end

  .m-default {
    padding: 5px;
    .hots {
      padding: 15px 10px 0;
      h5 {
        font-size: 12px;
      }
      ul {
        overflow: hidden;
        margin: 10px 0 7px;
        li {
          float: left;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          border: 1px solid rgb(231, 231, 231);
          border-radius: 15px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 0 14px;
          color: #333;
        }
      }
    }
  }
  .m-history {
    li {
      display: flex;
      position: relative;
      margin-left: 20px;
      line-height: 45px;
      width: 100%;
      height: 45px;
      border-bottom: 1px solid rgb(231, 231, 231);

      &::before {
        content: "";
        position: absolute;
        left: -25px;
        top: 15px;

        width: 15px;
        height: 15px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+);
      }
      span {
      }
      .icon {
        position: absolute;
        right: 25px;
        top: 15px;
        width: 15px;
        height: 15px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4=);
      }
    }
  }

  .suggests {
    h5 {
      height: 50px;
      margin-left: 10px;
      padding-right: 10px;
      font-size: 15px;
      line-height: 50px;
      color: #507daf;
    }
    ul {
      .suglist {
        display: flex;
        position: relative;
        margin-left: 20px;
        line-height: 45px;
        width: 100%;
        height: 45px;
        border-bottom: 1px solid rgb(231, 231, 231);
        &::before {
          content: "";
          position: absolute;
          left: -20px;
          top: 15px;

          width: 15px;
          height: 15px;
          background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
        }
      }
    }
  }
}
</style>