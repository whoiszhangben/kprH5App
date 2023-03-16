<template>
  <div class="cus-header">
    <div class="left-icon" v-show="showback">
      <i @click="back" class="iconfont iconfont-back"></i>
    </div>
    <div class="header-title">
      <span>{{ title }}</span>
    </div>
    <div class="right-icon" v-if="showmore">更多</div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {};
  },
  props: {
    showright: {
      type: Boolean,
      default: false,
    },
    showleft: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "标题",
    },
    showback: {
      type: Boolean,
      default: true,
    },
    showmore: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.cus-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #409eff;
  display: flex;
  .header-title {
  }
}
</style>
