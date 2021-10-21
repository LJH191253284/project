<template>
  <div>
    <div class="login_root">
      <div class="APP_lianjian">
        <header>
          <img
          @click="$router.go(-1)"
            src="https://s1.ljcdn.com/clogin/static/media/x.a51329a3.svg"
            alt=""
          />
          <a href="register.html"><button>注册</button></a>
        </header>

        <div class="view_title">手机快捷登录</div>
        <div class="view_subtitle">
          未注册过的手机号将自动创建链家账号，经纪人不会看到您的手机号
        </div>
        <div class="input_col">
          <input
            class="input-field"
            type="tel"
            placeholder="请输入手机号"
            name="username"
            value=""
          />
          <button class="input-addon send-sms">获取验证码</button>
        </div>
        <div class="input_col">
          <input
            class="input-field"
            type="tel"
            placeholder="请输入验证码"
            name="username"
            value=""
          />
        </div>

        <div class="submit-btn"><span class="text">登录</span></div>

        <div class="view-footer">
          <div class="footer-actions">
            <button>账号密码登录</button>
          </div>
          <span class="footer-comment"
            >注册/登录即代表同意<a
              class="link"
              href="https://m.lianjia.com/user/privacyprotocol"
              >《链家隐私政策》</a
            >及<a class="link" href="https://m.lianjia.com/user/protocol"
              >《链家用户使用协议》</a
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login_root {
  width: 100%;
  height: auto;
  padding: 25px;
  .APP_lianjian {
    width: 325px;
    height: 479.2px;
    header {
      width: 325px;
      height: 19.2px;
      margin-bottom: 22px;

      img {
        width: 16px;
        height: 16px;
        float: left;
      }
      button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        font-size: inherit;
        cursor: pointer;
        color: #999;
        float: right;
      }
    }

    .view_title {
      width: 100%;
      height: 28px;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 1.75rem;
      margin-bottom: 12px;
    }
    .view_subtitle {
      font-size: 1rem;
      line-height: 1.25rem;
      color: #999;
      margin-bottom: 1.125rem;
    }
    .input_col {
      height: 6rem;
      line-height: 6rem;
      color: #ccc;
      position: relative;
      display: flex;
      border-bottom: 1px solid rgb(214, 211, 211);

      .input-field {
        border: none;

        height: 100%;
        flex-grow: 1;
      }

      .input-addon {
        background: none;
        border: none;

        padding: 0;
        margin: 0;
        font-size: inherit;
        cursor: pointer;
        color: #999;
        float: right;
      }
    } //input
    .submit-btn {
      width: 100%;
      background-color: #00ae66;
      border-radius: 0.3125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      line-height: 4rem;
      color: #fff;
      text-align: center;
      font-size:1.5rem;
      font-weight: 700;
      margin: 3rem 0;
      .text {
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 0 auto;
      }
    } //登录按钮

    .view-footer {
      width: 100%;
      height: 72px;
      .footer-actions {
        button {
          margin: 0 120px 16px;
          padding: 0;
          font-size: 0.875rem;
          background: none;
          border: none;
          text-align: center;
        }
      }
      .footer-comment {
        font-size: 0.875rem;
        line-height: 121%;
        letter-spacing: -0.00625rem;
        color: #ccc;
        a {
          color: #3072f6;
        }
      }
    }
  } //内框end
}
</style>