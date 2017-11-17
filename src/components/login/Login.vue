<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="layout_panel">
        <div class="layout">
          <div class="mainbox">
            <div class="lgnheader">
              <div class="img">
                <img src="../../common/img/milogo@2x.png" width="15%">
              </div>
              <h4 class="text">小米账号登录</h4>
            </div>
            <div class="login_area">
              <div class="loginbox">
                <div class="item_account">
                  <input type="text" placeholder="邮箱/手机号码/小米ID">
                  <div style="border-bottom: 1px solid #ccc"></div>
                  <input type="password" placeholder="密码">
                </div>
                <div class="item_login">
                  <span>登录</span>
                </div>
                <div class="item_move">
                  <span>手机短信登录/注册</span>
                </div>
                <div class="reverse">
                  <div class="title">
                    <div class="line"></div>
                    <div class="txt">其他方式登录</div>
                    <div class="line"></div>
                  </div>
                  <div class="img">
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>
                    <div class="img4"></div>
                  </div>
                  <div class="text">
                    <span>立即注册</span>
                    <span style="color: #e0e0e0">|</span>
                    <span>忘记密码？</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    background: #eee;
    .wrap {
      padding-bottom: .9rem;
      .layout_panel {
        .layout {
          width: 100%;
          margin: 0 auto 30px;
          padding: 0 20px;
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .mainbox {
            .lgnheader {
              padding: 40px 0 11px;
              text-align: center;
              .text {
                color: #424242;
                font-size: 18px;
                padding: 22px 0 11px;
                font-weight: normal;
              }
            }
            .login_area {
              text-align: center;
              .loginbox {
                .item_account {
                  width: 97%;
                  height: 85px;
                  line-height: 42.5px;
                  border-radius: 15px;
                  padding: .1rem .2rem;
                  background: #FFF;
                  input {
                    width: 95%;
                    height: 25px;
                    line-height: 25px;
                    padding-left: 5px;
                    border: 0 none;
                    font-size: 14px;
                    font-weight: 400;
                    box-sizing: border-box;
                    outline: medium;
                  }
                  input::placeholder{
                    color: rgba(0, 0, 0, 0.4);
                    font-weight: 700;
                  }
                }
                .item_login {
                  width: 100%;
                  height: 40px;
                  line-height: 40px;
                  margin: 22px 0 14px;
                  color: #fff;
                  background: #33b4ff;
                  border: 1px solid #ccc;
                  border-radius: 15px;
                }
                .item_move {
                  width: 100%;
                  height: 40px;
                  line-height: 40px;
                  background: #fff;
                  border: 1px solid #ccc;
                  border-radius: 15px;
                }
                .title {
                  margin-top: 33px;
                  display: flex;
                  .line {
                    flex: 1;
                    position: relative;
                    border-top: 2px dotted #ccc;
                    top: 7px;
                  }
                  .txt {
                    padding: 0 2px;
                    font-size: 14px;
                    line-height: 14px;
                    color: #b0b0b0;
                  }
                }
                .img {
                  display: inline-block;
                  margin-top: 22px;
                  .img1 {
                    width: 45px;
                    height: 45px;
                    float: left;
                    margin-right: 15px;
                    border-radius: 50%;
                    background: #0288D1 url(../../common/img/wap.png) no-repeat left;
                    background-size: auto 75%;
                  }
                  .img2 {
                    width: 45px;
                    height: 45px;
                    float: left;
                    margin-right: 15px;
                    border-radius: 50%;
                    background: green url(../../common/img/wap.png) no-repeat right;
                    background-size: auto 75%;
                  }
                  .img3 {
                    width: 45px;
                    height: 45px;
                    float: left;
                    margin-right: 15px;
                    border-radius: 50%;
                    background: #D32F2F url(../../common/img/wap.png) no-repeat 32%;
                    background-size: auto 75%;
                  }
                  .img4 {
                    width: 45px;
                    height: 45px;
                    float: left;
                    border-radius: 50%;
                    background: #00AAEE url(../../common/img/wap.png) no-repeat 65%;
                    background-size: auto 75%;
                  }
                }
                .text {
                  margin: 55px 0;
                  color: #757575;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
