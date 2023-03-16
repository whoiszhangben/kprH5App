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
        <div class="temp">

        </div>
        <div class="weather"></div>
        <div class="humidity"></div>
        <div class="windy"></div>
      </div>
    </div>
    <div class="air-tabs"></div>
    <div class="order"></div>
  </div>
</template>

<script>
import { NavBar, Button, Icon } from "vant";
import AqiOverview from '@/components/AqiOverview.vue';
export default {
  name: "Index",
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Icon.name]: Icon,
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
      display: flex;
      align-items: center;
      justify-content: space-between;
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
