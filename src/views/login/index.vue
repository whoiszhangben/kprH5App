<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/img/logo.png" />
    </div>
    <div class="title">卡普瑞生态环境监测APP</div>
    <div class="inputarea">
      <van-field
        v-model="userName"
        clearable
        left-icon="userName"
        placeholder="请输入账号"
      >
        <van-icon
          slot="left-icon"
          color="#ffffff"
          class-prefix="iconfont"
          name="userName"
        ></van-icon>
      </van-field>
      <van-field
        v-model="userPwd"
        clearable
        left-icon="music-o"
        placeholder="请输入密码"
      >
        <van-icon
          slot="left-icon"
          color="#ffffff"
          class-prefix="iconfont"
          name="userPwd"
        ></van-icon>
      </van-field>
      <van-field class="placehold"></van-field>
    </div>
    <div class="ipsetting">
      <a>IP设置</a>
    </div>
    <div class="submit">
      <van-button
        round
        type="info"
        :loading="loading"
        :loading-text="loadingText"
        block
        @click="loginAction"
      >
        登录
      </van-button>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Icon, Button } from "vant";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Button.name]: Button,
  },
  data() {
    return {
      userName: "",
      userPwd: "",
      loading: false,
      loadingText: "",
    };
  },
  methods: {
    ...mapMutations({
      setUserInfo: "user/SET_USER_INFO",
    }),
    loginAction() {
      this.loading = true;
      this.loadingText = "登录中";
      setTimeout(() => {
        this.loading = false;
        this.setUserInfo({
          name: "zk",
          isLogin: true,
        });
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/img/background.jpg");
  display: grid;
  grid-template-rows: 4fr 3fr 3fr 3fr 6fr;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-align: center;
  }
  .inputarea {
    .placehold {
      height: 0;
      padding: 0;
    }
    ::v-deep .van-cell {
      line-height: 60px !important;
      color: #c8c8c8 !important;
      background-color: transparent !important;
    }
    ::v-deep .van-cell::after {
      border-bottom: 1px solid #123863 !important;
    }
    ::v-deep .van-field__left-icon {
      margin-right: 24px !important;
    }
    ::v-deep .van-field__control {
      color: #c8c8c8 !important;
    }
    ::v-deep .iconfont {
      font-size: 24px !important;
    }
  }
  .ipsetting {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c8c8c8;
    font-size: 14px;
  }
  .submit {
    padding: 0 40px;
  }
}
</style>
