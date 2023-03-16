<template>
  <div class="main-header">
    <div class="area-select"></div>
    <div class="title">更新时间：{{ updateTime }}</div>
    <div class="share"></div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    updateTime: {
      type: String,
      default: "2023/3/16 11:18:29",
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
  background-color: #409eff;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 12px;
    color: #fff;
  }
}
</style>
