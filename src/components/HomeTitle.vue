 <template>
  <h3 class="home-title"><slot></slot></h3>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-title {
  border-left: 2px solid #d43c33;
  padding: 0 0 0 9px;
  margin: 20px 0 14px;
  font-size: 17px;
  font-style: normal;
  color: #333;
}
</style>