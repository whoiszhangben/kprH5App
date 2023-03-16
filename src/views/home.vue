<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer>
      <van-tabbar v-model="active" route>
        <van-tabbar-item
          replace
          :icon="item.key"
          icon-prefix="iconfont"
          v-for="item in navList"
          :to="item.path"
          :key="item.key"
        >
          {{ item.name }}
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: "main",
      navList: [
        {
          key: "main",
          path: "/index",
          name: "主页",
        },
        {
          key: "map",
          path: "/map",
          name: "地图",
        },
        {
          key: "rank",
          path: "/rank",
          name: "排名",
        },
        {
          key: "alert",
          path: "/alert",
          name: "告警",
        },
        {
          key: "center",
          path: "/center",
          name: "我的",
        },
      ],
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
}
</style>
