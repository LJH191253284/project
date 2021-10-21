<template>
  <div>
    <Nav></Nav>
    <HouseListItem
      :H_item="H_item"
      v-for="H_item in now"
      :key="H_item.id"
    ></HouseListItem>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import HouseListItem from "../components/houseListItem.vue";
export default {
  components: { Nav, HouseListItem },
  data: function () {
    return {
      now: JSON.parse(window.localStorage.getItem("history")) || [],
    };
  },
  created: function () {
    console.log(this.now);
  },
};
</script>

<style lang="less" scoped>
</style>