<template>
  <div class="cus-picker">
    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="currentDate"
      placeholder="请选择时间"
      right-icon="arrow-down"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="datehour"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, DatetimePicker } from "vant";
import { formateDate } from "@/utils/index";
export default {
  name: "CusDatetimePicker",
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker,
  },
  data() {
    return {
      currentDate: formateDate(new Date(), "YYYY-MM-DD hh时"),
      showPicker: false,
    };
  },
  methods: {
    onConfirm(time) {
      console.log("当前时间：", typeof time, time);
      this.currentDate = formateDate(time, "YYYY-MM-DD hh时");
      this.showPicker = false;
    },
  },
};
</script>

<style>
</style>