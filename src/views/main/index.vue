<template>
  <div class="index">
    <van-nav-bar :title="title">
      <template #left>
        <van-button
          type="info"
          size="small"
          class="area-btn"
          @click.stop="toggleArea"
        >
          >{{ area.name }}
        </van-button>
      </template>
      <template #right>
        <div class="share-div">分享</div>
      </template>
    </van-nav-bar>
    <div class="aqi-overview">
      <div class="air">
        <cus-aqi-chart class="left"></cus-aqi-chart>
        <div class="right">
          <div class="noise" :style="{'visibility': area.type === 'zone' ? '' : 'hidden'}">
            <div class="title">
              <van-icon name="volume" size="1.5rem" color="#d81e06" />噪音
            </div>
            <div class="value">{{ current.noise }} dB</div>
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
      <van-tabs type="card" color="#0093FD" class="cus-tabs">
        <van-tab title="空气质量">
          <cus-air-layout :title="airfactorTitle">
            <div class="airfactorCont">
              <cus-progress
                v-for="item in airfactorList"
                :key="item.name"
                :current="item"
              ></cus-progress>
            </div>
          </cus-air-layout>
          <cus-air-layout :title="airZoneDistributeTitle">
            <cus-map-distribute :type="area.type"></cus-map-distribute>
          </cus-air-layout>
          <cus-air-layout :title="airZoneLevelTitle">
            <cus-air-level-list></cus-air-level-list>
          </cus-air-layout>
        </van-tab>
        <van-tab title="噪声" v-if="area.type !== 'city'"></van-tab>
      </van-tabs>
      <cus-datetime-picker class="air-datepicker"></cus-datetime-picker>
    </div>
    <div class="order"></div>
  </div>
</template>

<script>
import {
  NavBar,
  Button,
  Icon,
  Grid,
  GridItem,
  Tabs,
  Tab,
  DatetimePicker,
} from "vant";
import cusAqiChart from "@/components/cusAqiChart.vue";
import cusDatetimePicker from "@/components/cusDatetimePicker.vue";
import cusAirLayout from "@/components/cusAirLayout.vue";
import cusProgress from "@/components/cusProgress.vue";
import cusMapDistribute from "@/components/cusMapDistribute.vue";
import cusAirLevelList from "@/components/cusAirLevelList.vue";
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
    [DatetimePicker.name]: DatetimePicker,
    cusAqiChart,
    cusDatetimePicker,
    cusAirLayout,
    cusProgress,
    cusMapDistribute,
    cusAirLevelList
  },
  data() {
    return {
      updateTime: "2023/3/16 11:37:20",
      area: {
        name: "深圳市",
        type: "city",
      },
      current: {
        noise: 88.0,
        aqi: 32,
        pollute: "O3",
      },
      currentDate: new Date(),
      airfactorTitle: "全市空气因子数据",
      airZoneDistributeTitle: "各区AQI图示",
      airZoneLevelTitle: "各区空气质量等级",
      airfactorList: [],
    };
  },
  computed: {
    title() {
      return `更新时间：${this.updateTime}`;
    },
  },
  methods: {
    toggleArea() {
      this.area.type = this.area.type === "city" ? "zone" : "city";
      if (this.area.type === "city") {
        this.area.name = "深圳市";
      } else {
        this.area.name = "福田区";
      }
    },
  },
  mounted() {
    this.airfactorList = [
      {
        name: "pm2.5",
        value: 51,
        unit: "ug/m",
      },
      {
        name: "pm10",
        value: 51,
        unit: "ug/m",
      },
      {
        name: "no2",
        value: 51,
        unit: "ug/m",
      },
      {
        name: "so2",
        value: 51,
        unit: "ug/m",
      },
      {
        name: "o3",
        value: 51,
        unit: "ug/m",
      },
      {
        name: "co",
        value: 51,
        unit: "ug/m",
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
.index {
  height: calc(100% - 100px);
  overflow-y: overlay;
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
      .left {
        margin: 20px 0 -40px 0;
      }
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
  .air-tabs {
    position: relative;
    padding: 20px 0;
    .cus-tabs {
      ::v-deep .van-tabs__wrap {
        width: fit-content;
      }
      ::v-deep .van-tab {
        min-width: 130px;
      }
    }
    .air-datepicker {
      position: absolute;
      right: 0;
      top: 10px;
      width: 340px;
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
.airfactorCont {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 16px 0;
}
</style>
