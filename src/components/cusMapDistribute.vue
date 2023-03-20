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
  VisualMapComponent,
  LegendComponent
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
  VisualMapComponent,
  LegendComponent,
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
      options: {
        color: ['#32f43e','#e4f33e','#e4993c','#f30003','#9f034c','#800025'],
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2
        },
        legend: {
          data: [{
            name: "优",
            itemStyle: {
              color: "#32f43e"
            }
          },{
            name: "良",
            itemStyle: {
              color: "#e4f33e"
            }
          },{
            name: "轻度",
            itemStyle: {
              color: "#e4993c"
            }
          },{
            name: "中度",
            itemStyle: {
              color: "#f30003"
            }
          },{
            name: "重度",
            itemStyle: {
              color: "#9f034c"
            }
          },{
            name: "严重",
            itemStyle: {
              color: "#800025"
            }
          }],
          icon: "circle",
          show: true,
          orient: "horizontal",
        },
        visualMap: {
          min: 0,
          max: 500,
          inRange: {
            color: [
            '#32f43e','#e4f33e','#e4993c','#f30003','#9f034c','#800025'
            ]
          },
          show: false,
          calculable: false
        },
        series: [
          {
            name: '优',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            itemStyle: {
              color: "transparent",
              borderColor: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderWidth:5,
                borderColor:'#4ee8e3',
              }
            },
            select: {
              itemStyle: {
                borderWidth:5,
                borderColor:'#4ee8e3',
                color: "#4ee8e3",
              }
            },
            data: [
            { name: '龙岗区', value: 35, itemStyle: {
              color: "#32f43e"
            } },
            { name: '龙华区', value: 35 },
            ]
          },
          {
            name: '良',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            itemStyle: {
              color: "#e4f33e",
              borderColor: "transparent",
            },
            data: [
            
            ]
          },
          {
            name: '轻度',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            itemStyle: {
              color: "transparent",
              borderColor: "transparent",
            },
            data: [
            { name: '罗湖区', value: 90, itemStyle: {
              color: "#e4993c"
            } },
            ]
          },
          {
            name: '中度',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            itemStyle: {
              color: "transparent",
              borderColor: "transparent",
            },
            data: [
            { name: '宝安区', value: 120 , itemStyle: {
              color: "#f30003"
            } },
            { name: '坪山区', value: 120 , itemStyle: {
              color: "#f30003"
            } },
            ]
          },
          {
            name: '重度',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            itemStyle: {
              color: "transparent",
              borderColor: "transparent",
            },
            data: [
            { name: '福田区', value: 300, itemStyle: {
              color: "#9f034c"
            } },
            ]
          },
          {
            name: '严重',
            type: 'map',
            roam: false,
            map: 'shenzhen',
            showlegendsymbol:true,
            itemStyle: {
              color: "transparent",
              borderColor: "transparent",
            },
            data: [
            { name: '盐田区', value: 480, itemStyle: {
              color: "#9f034c"
            }  },
            { name: '光明区', value: 480, itemStyle: {
              color: "#9f034c"
            }  },
            { name: '南山区', value: 480, itemStyle: {
              color: "#9f034c"
            }  },
            ]
          },
        ]
      }
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let mapJsonPath = "szdistrict.json";
      this.chart = echarts.init(document.getElementById(this.type + "-cusMapDistribute"));
      if(this.chart) {
        this.chart.showLoading();
        axios
          .get(mapJsonPath)
          .then((res) => {
            console.log("hello---------", res);
            this.chart.hideLoading();
            echarts.registerMap("shenzhen", res.data);
            this.chart.setOption(this.options);
          })
          .catch((err) => {
            console.log("--------------", err);
          });
      }      
    },
  },
};
</script>

<style lang="scss" scoped>
.cusMapDistribute {
  height: 480px;
}
</style>