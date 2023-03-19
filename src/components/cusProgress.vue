<template>
  <div class="cus-progress">
    <div class="desc">
      <div class="nameStr" v-html="nameStr"></div>
      <div class="unitStr" v-html="unitStr"></div>
    </div>
    <progress
      :value="current.value"
      max="100"
      :style="{ '--bgcolor': bgcolor }"
    ></progress>
  </div>
</template>

<script>
export default {
  name: "CusProgress",
  props: {
    current: {
      type: Object,
      default: () => {
        return {
          name: "",
          unit: "",
          value: 0,
        };
      },
    },
  },
  data() {
    return {
      unitStr: "ug/m<sup>3</sup>",
    };
  },
  computed: {
    nameStr() {
      if (this.current.name === "pm2.5") {
        return `<span class="fw700">PM</span><sub>2.5</sub>`;
      } else if (this.current.name === "pm10") {
        return `<span class="fw700">PM</span><sub>10</sub>`;
      } else if (this.current.name === "no2") {
        return `<span class="fw700">NO</span><sub>2</sub>`;
      } else if (this.current.name === "so2") {
        return `<span class="fw700">SO</span><sub>2</sub>`;
      } else if (this.current.name === "o3") {
        return `<span class="fw700">O</span><sub>3</sub>`;
      } else if (this.current.name === "co") {
        return `<span class="fw700">CO</span>`;
      }
    },
    bgcolor() {
      // 获取各自指标颜色的逻辑
      let colors = [
        "#32f43e",
        "#e4f33e",
        "#e4993c",
        "#f30003",
        "#9f034c",
        "#800025",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>

<style lang="scss" scoped>
.cus-progress {
  padding: 15px;
  width: inherit;
  border-radius: 5px 20px 5px 20px;
  box-shadow: 3px 3px 4px 1px rgba(0, 0, 0, 0.6);
  .desc {
    font-size: 12px;
    display: flex;
    flex-flow: row;
    .nameStr {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: left;
      .fw700 {
        font-weight: 700;
      }
    }
    .unitStr {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  }
  progress {
    width: 95%;
    height: 18px;
    border: 0;
    border-radius: 18px;
    background-color: #c3c3c3;
  }
  /* outter progressbar track外部的进度条轨道 */
  progress::-webkit-progress-bar {
    background-color: #f3f3f3;
    border-radius: 9px;
  }
  /* inner progressbar 内部进度条主体 */
  progress::-webkit-progress-value {
    background-color: var(--bgcolor);
    border-radius: 9px;
  }
  progress::-moz-progress-bar {
    background-color: #f3f3f3;
    border-radius: 9px;
  }
  progress::-moz-progress-value {
    background-color: var(--bgcolor);
    border-radius: 9px;
  }
}
.fw700 {
  font-weight: 700;
}
</style>