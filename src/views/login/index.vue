<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="标题" class="page-nav-bar"></van-nav-bar>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile" name="手机号" placeholder="请输入手机号">
        <i slot="left-icon" class="toutiao toutiaoshouji icon"></i>
      </van-field>
      <van-field
        v-model="user.code"
        type="password"
        name="密码"
        placeholder="请输入验证码"
      >
        <i slot="left-icon" class="toutiao toutiaoyanzhengma"></i>
        <template #button>
          <van-button round size="small" type="primary" class="btn-ver"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="btn-login"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Login } from "@/api/user.js";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const user = this.user;
      try {
        const data = await Login(user);
        console.log(data);
      } catch (err) {
        // console.log(err);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.toutiao {
  font-size: 40px;
}
.btn-ver {
  height: 53px;
  background-color: #efeae9;
  border: none;
  color: #707070;
}
.btn-login {
  border-radius: 10px;
  background-color: #6fb3fa;
}
</style>