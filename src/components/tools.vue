<template>
  <!-- 常用工具 -->
  <div class="tools">
    <div class="channel_box">

      <div class="tool_list" @click="$router.push('/searchAgent')">
        <div class="link_box">
          <img src="../image/找经纪人.png" />
          <div>找经纪人</div>
        </div>
        <div class="link_box">
          <img src="../image/问答.png" />
          <div>问答</div>
        </div>
        <div class="link_box">
          <img src="../image/图像.png" />
          <div>百科</div>
        </div>
        <div class="link_box">
          <img src="../image/客服电话.png" />
          <div>客服电话</div>
        </div>
        <div class="link_box">
          <img src="../image/房贷计算.png" />
          <div>房贷计算</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 常用工具结束 -->
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
//工具栏开始
.tools {
  width: 100%;
  height: 10rem;
  background-color: white;
  .channel_box {
    width: 95%;
    margin: 0 auto;

   
    .tool_list {
      width: 100%;
      height: 110px;

      .link_box {
        width: 20%;
        height: 100px;
        float: left;
        margin-top: 25px;

        img {
          max-width: 100%;
          width: 40%;
          text-align: center;
          margin: 0 20px;
        }
        div {
          margin-top: 5px;
          text-align: center;
          font-size: 35%;
        }
      }
    }
  }
} //工具栏结束
</style>