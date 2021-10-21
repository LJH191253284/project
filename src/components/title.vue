<template>
  <div class="title" >
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  margin-top: 15px;
  margin-bottom: 0;
  width: 100%;
  height: 65px;
  line-height: 65px;
  border-bottom: 1px solid rgb(229, 229, 229);
  background-color: white;
  font-weight: bolder;
  font-size: 16px;
  padding: 0 16px;
}

</style>