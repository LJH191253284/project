<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeTitle>编辑推荐</HomeTitle>
    <ul class="home-cardlist">
     
      <CardListItem 
      v-for="item in personalizeds" 
      :key="item.id" 
      :item="item" />
    </ul>
    <!-- <ul>
      <li
        v-for="item in personalizeds"
        :key="item.id"
        @click="$router.push('/playlist?id=' + item.id)"
      >
        {{ item.name }}
      </li>
    </ul> -->

    <HomeTitle>最新音乐</HomeTitle>
    <ul class="home-songllist">
      <SongListItem
        v-for="item in newsongs"
        :key="item.id"
        :item="item"
        @change-current-song="
        $emit('change-current-song',$event)
        $emit('change-current-play-list',newsongs)
        "
        :currentSongId="currentSongId"
        :playing="playing"
      >
      
      </SongListItem>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from "@/components/HomeTitle.vue";
import CardListItem from "@/components/CardListItem.vue";
import SongListItem from "@/components/SongListItem.vue";


export default {
  name: "Home",
  components: {
    HomeTitle,
    CardListItem,
    SongListItem,
  },
  props:{
    currentSongId:{
      type:Number,
    },
    playing:Boolean,
  },
  data: function() {
    return {
      personalizeds: [],
      newsongs:[],
    };
  },
  created: function() {
    //歌单信息
    this.axios
      .get("http://apis.netstart.cn/music/personalized?limit=6")
      .then((res) => {
        // console.log(this, res);
        this.personalizeds = res.data.result;
      });
    //歌名
    this.axios
    .get("http://apis.netstart.cn/music/personalized/newsong")
    .then((res)=>{
      this.newsongs=res.data.result; 
      console.log( this.newsongs);
    });
  },
};
</script>

<style lang="less">
.home-cardlist {
  display: flex;
  flex-wrap: wrap;
  
}
</style>
