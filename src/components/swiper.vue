<template>
  <div>
    <van-swipe @change="onChange">
      <van-swipe-item><img class="bags" :src="img" alt="" /></van-swipe-item>
      <van-swipe-item><img class="bags" :src="img" alt="" /></van-swipe-item>
      <van-swipe-item><img class="bags" :src="img" alt="" /></van-swipe-item>
      <van-swipe-item><img class="bags" :src="img" alt="" /></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>

    <div class="haofang_banner">
      <img
        class="haofang_img"
        src="	https://img.ljcdn.com/beike/bikanhaofang/1582177044934.png"
        alt=""
      />
      <div class="tags">
        <div class="tag-item">
          <img
            class="tag_icon"
            src="https://img.ljcdn.com/beike/haofanglogo/1571826242637.png"
            alt=""
          />
          <span>最近降价</span>
        </div>
        <div class="tag-item">
          <img
            class="tag_icon"
            src="https://img.ljcdn.com/beike/haofanglogo/1571826242637.png"
            alt=""
          />
          <span>户型优质</span>
        </div>
        <div class="tag-item">
          <img
            class="tag_icon"
            src="https://img.ljcdn.com/beike/haofanglogo/1571826242637.png"
            alt=""
          />
          <span>品质小区</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: [],
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" >
.custom-indicator {
  position: absolute;
  width: 40px;
  right: 20px;
  bottom: 50px;
  padding: 2px 5px;
  font-size: 1.2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1.25rem;
  color: white;
}

.bags {
  width: 100%;
  height: 24rem;
}

.haofang_banner {
  position: absolute;
  top: 25rem;
  width: 100%;
  height: 40px;
  background-color: #d53c3c;
  display: flex;
  justify-content: space-around;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-right: 20px;
}
.haofang_img {
  
}

.tags {
  display: flex;

  line-height: 40px;
}
.tag-item {
  color: white;
  font-size: 0.5rem;
  padding: 0 0.5rem;
  img{
    width: 20%;
    margin-bottom: 2px;
  }
}
</style>