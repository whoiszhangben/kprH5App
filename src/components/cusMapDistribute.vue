<template>
  <div class="cusMapDistribute" :id="type + '-cusMapDistribute'"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  MapChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
]);
import axios from "axios";
export default {
  name: "CusMapDistribute",
  props: {
    type: {
      type: String,
      default: () => "city",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let mapJsonPath = "guangdong.json";
      axios
        .get(mapJsonPath)
        .then((res) => {
          console.log("hello---------", res);
        })
        .catch((err) => {
          console.log("--------------", err);
        });
    },
  },
};
</script>

<style>
</style>