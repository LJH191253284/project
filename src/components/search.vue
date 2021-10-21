<template>
  <!-- 搜索栏 -->
  <div class="search_box" @click="$router.push('/search')">
    <span class="glyphicon glyphicon-search icon"></span>
    <input
      type="text"
      class="input"
      placeholder="请输入小区或者商区开始找房咯~"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.search_box {
  position: absolute;
  top: 17.5rem;
  width: 92%;
  height: 35px;
  line-height: 35px;
  background: #fff;
  border-radius: 3px;
  margin: 0 14px 0;
  padding: 0 5px 0;

  .icon {
    margin: 9px 5px 0 12px;
    color: rgb(187, 181, 181);
  }

  .input {
    margin-right: 0.125rem;
    border: 0;
    vertical-align: top;
    width: 70%;
    height: 35px;
    line-height: 35px;
    padding: 0 10px 0;
  } //.input end
} //.search_box end
</style>