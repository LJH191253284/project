<template>
  <footer class="play" :class="{ playing: playing }">
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <keep-alive>
        <PlayPage
          v-if="showPlayPage"
          :currentSong="currentSong"
          :currentTime="currentTime"
          :duration="duration"
          :playing="playing"
          @toggle-show-play-page="showPlayPage = $event"
          @toggle-show-play-list="showPlayList = $event"
          @toggle-playing-state="$emit('toggle-playing-state')"
          @toggle-play-model="$emit('toggle-play-model')"
          @next-song="$emit('next-song')"
          @prev-song="$emit('prev-song')"
          @current-time-change="$emit('current-time-change', $event)"
        />
      </keep-alive>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
     
      <PlayBar
        v-show="!showPlayPage"
        :currentPlayList="currentPlayList"
        :currentSong="currentSong"
        :currentTime="currentTime"
        :duration="duration"
        :playing="playing"
        @toggle-playing-state="$emit('toggle-playing-state')"
        @toggle-show-play-list="showPlayList = $event"
        @toggle-show-play-page="showPlayPage = $event"
      />
     
    </transition>
    <PlayList
      v-if="showPlayList"
      :currentPlayList="currentPlayList"
      :currentSong="currentSong"
      :playing="playing"
      @toggle-show-play-list="showPlayList = $event"
      @change-current-song="$emit('change-current-song', $event)"
    />
  </footer>
</template>

<script>
import PlayBar from "@/components/PlayBar.vue";
import PlayPage from "@/components/PlayPage.vue";
import PlayList from "@/components/PlayList.vue";

export default {
  components: {
    PlayBar,
    PlayPage,
    PlayList,
  },
  props: {
    currentSong: Object,
    playing: Boolean,
    duration: Number,
    currentTime: Number,
    currentPlayList: Array,
   
  },
  data: function () {
    return {
      showPlayList: false,
      showPlayPage: false,
    };
  },
};
</script>

<style lang="less" >
</style>