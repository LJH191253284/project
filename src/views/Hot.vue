<template>
  <div class="hotsong">
    <HotSongRank></HotSongRank>

    <div>
      <SongListItem
        v-for="(item, index) in hot"
        :key="item.id"
        :item="item"
        @change-current-song="
          $emit('change-current-song', item);
          $emit('change-current-play-list', hot);
        "
        :currentSongId="currentSongId"
        :class="{ lt3: index < 3 }"
        :playing="playing"
        >{{ (index + 1).toString().padStart(2, "0") }}
      </SongListItem>
    </div>
  </div>
</template>

<script>
import HotSongRank from "@/components/HotSongRank.vue";
import SongListItem from "@/components/SongListItem.vue";
export default {
  components: { HotSongRank, SongListItem },
  props: {
    item: {
      type: Object,
    },
    currentSongId: {
      type: Number,
    },
    playing: Boolean,
  },
  data: function () {
    return {
      hot: null,
    };
  },
  created: function () {
    //热歌榜
    this.axios
      .get("http://apis.netstart.cn/music/playlist/detail/?id=3778678")
      .then((res) => {
        this.hot = res.data.playlist.tracks;
      });
  },
  methods: {},
  computed: {},
};
</script>

<style>
</style>