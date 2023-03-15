<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="nav-footer">
      <footer>
        <router-link v-for='(item, index) in navList' :to='item.path' :key='index'
                     v-bind:class="{'active':activeRoute == item.path}">
          <i class="iconfont" :class="'icon-tab'+index"></i>
          <p v-text="item.name"></p>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          'path': '/index',
          'name': '主页'
        },
        {
          'path': '/map',
          'name': '地图'
        },
        {
          'path': '/rank',
          'name': '排名'
        },
        {
          'path': '/alert',
          'name': '告警'
        },
        {
          'path': '/center',
          'name': '我的'
        }
      ]
    };
  },
  computed: {
    activeRoute () {
      return this.$route.path;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.nav-footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 40px;
    background: #1e2140;
    display: block;
  }
</style>