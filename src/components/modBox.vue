<template>
  <!-- 选项栏 start-->
  <div class="mod_box">
    <div class="gridbox">
      <h2 class="box_col" @click="$router.push('/ershoufang')">
        <img src="../image/icon1.png" />
        <div class="name">二手房</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon2.png" />
        <div class="name">新房</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon3.png" />
        <div class="name">租房</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon4.png" />
        <div class="name">海外</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon5.png" />
        <div class="name">装修</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon6.png" />
        <div class="name">商店办公</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon7.png" />
        <div class="name">找小区</div>
      </h2>
      <h2 class="box_col">
        <img src="../image/icon1.png" />
        <div class="name">卖房</div>
      </h2>
    </div>
  </div>
  <!--选项栏 end-->
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
//选项栏开始
.mod_box {
  width: 100%;
  height: 24rem;
  background-color: white;

  .gridbox {
    width: 95%;
    height: 100%;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    :nth-child(n + 5) {
      margin-top: -5px;
    }

    .box_col {
      max-width: 162.1px;
      width: 25%;
      padding: 0px 15px;

      img {
        max-width: 100%;
      }
      .name {
        height: 36px;
        line-height: 36px;
        font-size: 45%;
        margin-top: 0;
        color: #222;
        text-align: center;
      }
    }
  }
} //选项栏 end
</style>