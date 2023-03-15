<template>
  <div class="login">
    <div class="logo">
        <img src="../../assets/img/logo.png">
    </div>
    <div class="title">
        卡普瑞生态环境监测APP
    </div>
    <div class="form">
        <van-field
                v-model="userName"
                clearable
                left-icon="userName"
                placeholder="请输入账号"
            >
            <van-icon slot="left-icon"  class="iconfont" color="#000000" class-prefix="icon" name="userName"></van-icon>
            </van-field>
            <van-field
                v-model="userPwd"
                clearable
                left-icon="music-o"
                placeholder="请输入密码"
            >
            <van-icon slot="left-icon"  class="iconfont" color="#000000" class-prefix="icon" name="userPwd"></van-icon>
            </van-field>
    </div>
    
  </div>
</template>

<script>
import { CellGroup, Field, Icon } from 'vant';
export default {
    name: "Login",
    components: {
        [CellGroup.name]: CellGroup,
        [Field.name]: Field,
        [Icon.name]: Icon
    },
    data () {
        return {
            userName: '',
            userPwd: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: url('../../assets/img/background.jpg');
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            margin: 60px 0 120px;
        }
    }
    .title {
        margin-bottom: 220px;
        font-size: 24px;
        font-weight: 700;
        color: white;
        text-align: center;
    }
}
</style>