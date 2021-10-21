<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="区域"
        ><van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="changitem"
      /></van-dropdown-item>
      <van-dropdown-item title="价格" />
      <van-dropdown-item title="房型" />
      <van-dropdown-item title="更多" />
      <van-dropdown-item title="排序" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      con: "",
      items: [
        {
          text: "区域",
          children: [
            { text: "天河", id: 1, condition: "tianhe" },
            { text: "海珠", id: 2, condition: "haizhu" },
            { text: "越秀", id: 3, condition: "yuexiu" },
            { text: "荔湾", id: 4, condition: "liwan" },
          ],
        },
      ],
      activeId: 1,
      activeIndex: 0,
    };
  },
  methods: {
    changitem: function (childeren) {
      this.con = childeren.condition;
      this.$emit("chang-current-condition", this.con);
    },
  },
};
</script>

<style lang="less" scoped>
</style>