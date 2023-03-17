<template>
  <div
    class="echart"
    id="mychart"
    :style="{ width: '100%', height: '220px' }"
  >
  <div class="container">
    <div class="detail" :style="{ '--aqicolor': aqicolor}">
        <div>AQI</div>
        <div>良</div>
        <div>96</div>
    </div>
  </div>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入仪表盘图表
import { GaugeChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer
]);
const option = {
  series: [
    {
      type: "gauge",
      axisLine: {
        lineStyle: {
          width: 18,
          color: [
            [0.1, "#32f43e"],
            [0.2, "#e4f33e"],
            [0.3, "#e4993c"],
            [0.4, "#f30003"],
            [0.6, "#9f034c"],
            [1, "#800025"]
          ]
        }
      },
      pointer: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      max: 500,
      center: ["50%", "50%"],
      splitLine: {
        distance: -28,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: -28,
        fontSize: 14
      },
      detail: {
        show: false,
      }
    }
  ]
};
export default {
    name: "AqiOverview",
    props: {
        current: {
            type: Object,
            default: () => {
                return {
                    aqi: 30,
                    noise: 88.0,
                    humidity: 0.45,
                    temperature: 22,
                    weather: '多云',
                    windy: '南风 6级'
                }
            }
        }
    },
    computed: {
        aqicolor() {
            let dataVal = Number(this.current.aqi);
            if (dataVal >= 0 && dataVal < 50) {
                return "#32f43e";
            } else if (dataVal < 100) {
                return "#e4f33e";
            } else if (dataVal < 150) {
                return "#e4993c";
            } else if (dataVal < 200) {
                return "#f30003";
            } else if (dataVal < 300) {
                return "#9f034c";
            } else {
                return "#800025";
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            let chartDom = document.getElementById('mychart');
            let chart = echarts.init(chartDom);
            chart.setOption(option);
        })
    }
}
</script>

<style lang="scss" scoped>
.echart {
    padding: 0 40px;
    position: relative;
    .container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .detail {
            border-radius: 50%;
            width: 160px;
            height: 160px;
            background-color: var(--aqicolor);
            display: flex;
            flex-flow: column;
            align-content: center;
            justify-content: center;
            div {
                text-align: center;
            }
        }
    }
}
</style>