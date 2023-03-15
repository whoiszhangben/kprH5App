<template>
  <div id="app" class="page">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
  watch: {
    $route() {
      if (this.$router.isleft) {
        this.transitionName = "slideleft";
      }
      if (this.$router.isright) {
        this.transitionName = "slideright";
      }
    },
  },
};
</script>

<style lang="scss">
.page {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
