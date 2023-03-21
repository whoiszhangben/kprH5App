<template>
  <div class="cus-airLevelList">
    <van-row class="title" type="flex" justify="space-between">
        <van-col v-for="item in titleList" :span="4" :key="item.key">{{ item.name }}</van-col>
    </van-row>
    <van-row class="content" type="flex" justify="space-between" v-for="item in list" :key="item.index">
        <van-col v-for="col in item" :span="4" :key="col" >{{ col || '--' }}</van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from 'vant';
export default {
    name: "CusAirLevelList",
    components: {
        [Row.name]: Row,
        [Col.name]: Col,
    },
    props: {
        listtype: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            titleList: [
                {
                    key: "index",
                    name: "排名",
                },
                {
                    key: "district",
                    name: "区域",
                },
                {
                    key: "aqi",
                    name: "AQI",
                },
                {
                    key: "level",
                    name: "等级",
                },
                {
                    key: "pp",
                    name: "首污"
                }
            ],
            list: [
                {
                    "index": 1,
                    "district": "福田区",
                    "aqi": 46,
                    "level": "优",
                    "pp": ""
                },
                {
                    "index": 2,
                    "district": "罗湖区",
                    "aqi": 46,
                    "level": "优",
                    "pp": ""
                },
                {
                    "index": 3,
                    "district": "南山区",
                    "aqi": 66,
                    "level": "良",
                    "pp": ""
                },
                {
                    "index": 4,
                    "district": "盐田区",
                    "aqi": 78,
                    "level": "良",
                    "pp": ""
                },
                {
                    "index": 5,
                    "district": "龙岗区",
                    "aqi": 116,
                    "level": "中度污染",
                    "pp": ""
                },
                {
                    "index": 6,
                    "district": "龙华区",
                    "aqi": 136,
                    "level": "中度污染",
                    "pp": ""
                },
                {
                    "index": 7,
                    "district": "坪山区",
                    "aqi": 158,
                    "level": "重度污染",
                    "pp": ""
                },
                {
                    "index": 8,
                    "district": "光明区",
                    "aqi": 278,
                    "level": "严重污染",
                    "pp": ""
                },
            ]
        }
    },
    computed: {
        
    }
}
</script>

<style lang="scss" scoped>
.cus-airLevelList {
    color: #999999;
    .title {
        margin: 16px 0;
        font-size: 12px;
        font-weight: 400;
    }
    .content {
        margin: 16px 0;
        font-size: 14px;
        font-weight: 400;
    }
    ::v-deep .van-col {
        text-align: center;
        white-space: nowrap;
    }
}
</style>