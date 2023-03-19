<template>
  <div class="airfactor">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CusAirLayout",
  props: {
    title: {
      type: String,
      default: "测试",
    },
  },
};
</script>

<style lang="scss" scoped>
.airfactor {
  margin: 8px 32px;
  .title {
    position: relative;
    padding: 0 16px;
  }
  .title::before {
    content: "";
    position: absolute;
    margin-left: -16px;
    margin-top: 2px;
    width: 6px;
    height: 28px;
    background: #3766f4;
    border-radius: 8px;
  }
}
</style>