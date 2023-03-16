<template>
  <div class="index">
    <van-nav-bar :title="title">
      <template #left>
        <van-button type="info" size="small" class="area-btn">
          >{{ area }}
        </van-button>
      </template>
      <template #right>
        <div class="share-div">分享</div>
      </template>
    </van-nav-bar>
    <div class="aqi-overview">
      <div class="air">
        <aqi-overview></aqi-overview>
        <div class="right">
          <div class="noise">
            <div class="title">
              <van-icon name="volume" size="1.5rem" color="#d81e06" />噪音
            </div>
            <div class="value">
              {{ current.noise }} dB
            </div>
          </div>
          <div class="noise">
            <div class="title">首要污染物</div>
            <div class="value">
              {{ current.pollute }}
            </div>
          </div>
        </div>
      </div>
      <div class="desc">
        <van-grid>
          <van-grid-item class="temp" icon="photo-o" text="22 ℃">
            <template #icon>
              <van-icon
                class-prefix="iconfont"
                name="wendu"
                size="24"
                color="#009FE8"
              ></van-icon>
            </template>
          </van-grid-item>
          <van-grid-item class="weather" text="晴">
            <template #icon>
              <van-icon
                class-prefix="iconfont"
                name="tianqi"
                size="24"
                color="#FFCB01"
              ></van-icon>
            </template>
          </van-grid-item>
          <van-grid-item class="humidity" text="45%">
            <template #icon>
              <van-icon
                class-prefix="iconfont"
                name="shidu"
                size="24"
                color="#333333"
              ></van-icon>
            </template>
          </van-grid-item>
          <van-grid-item class="windy" text="南风 6级">
            <template #icon>
              <van-icon
                class-prefix="iconfont"
                name="windy"
                size="24"
                color="#000000"
              ></van-icon>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="air-tabs">
      <van-tabs type="card" color="#0093FD">
        <van-tab title="空气质量"></van-tab>
      </van-tabs>
    </div>
    <div class="order"></div>
  </div>
</template>

<script>
import { NavBar, Button, Icon, Grid, GridItem, Tabs, Tab } from "vant";
import AqiOverview from '@/components/AqiOverview.vue';
export default {
  name: "Index",
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    AqiOverview
  },
  data() {
    return {
      updateTime: "2023/3/16 11:37:20",
      area: "深圳市",
      current: {
        noise: 88.0,
        aqi: 32,
        pollute: "O3"
      }
    };
  },
  computed: {
    title() {
      return `更新时间：${this.updateTime}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  ::v-deep .van-nav-bar {
    background-color: #409eff;
  }
  ::v-deep .van-nav-bar__title {
    color: #fff;
    font-size: 12px;
  }
  .aqi-overview {
    display: flex;
    flex-flow: column;
    .air {
      display: flex;
      flex-flow: row;
      .right {
        width: 400px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-left: 80px;
        .noise {
          .title {
            display: flex;
            align-items: center;
          }
        }
        .noise + .noise {
          margin-top: 80px;
        }
      }
    }
    .desc {
      ::v-deep .van-grid-item__text {
        font-size: 16px !important;
      }
    }
  }
}
.area-btn {
  min-width: 160px;
  background-color: #0272fc !important;
  border: 1px solid #0272fc !important;
  border-radius: 8px !important;
}
.share-div {
  color: #fff;
  border-radius: 8px;
  outline: 1px dotted;
  padding: 0px 16px;
  outline-offset: 2px;
}
</style>
