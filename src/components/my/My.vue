<template>
  <div class="wrapper">
    <div class="page-personal-center">
      <div class="hd">
        <router-link to="/login">
          <div class="user">
            <div class="portrait"></div>
            <div class="name">登录/注册</div>
          </div>
        </router-link>
      </div>
      <div class="a1">
        <div class="top">
          <span class="left">我的订单</span>
          <span class="right">全部订单 ></span>
        </div>
        <div class="bottom">
          <div class="nav">
            <div class="img">
              <img src="../../common/img/dfk.png" width="100%">
            </div>
            <div class="name">
              <span>待付款</span>
            </div>
          </div>
          <div class="nav">
            <div class="img">
              <img src="../../common/img/dsh.png" width="100%">
            </div>
            <div class="name">
              <span>待收货</span>
            </div>
          </div>
          <div class="nav">
            <div class="img">
              <img src="../../common/img/thx.png" width="100%">
            </div>
            <div class="name">
              <span>退换修</span>
            </div>
          </div>
        </div>
      </div>
      <div class="items">
        <ul>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7590c92654f45b26ef1f23d458824bef.png">
            <span>会员福利</span>
          </li>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c2976af584b7d42866b1dd66596c24d7.png">
            <span>我的优惠</span>
          </li>
        </ul>
        <ul>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e20b4b99f2be1f32cfdd7a0c6e54e956.png">
            <span>服务中心</span>
          </li>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5612a6d241171f7d52171f03ad859632.jpg">
            <span>小米之家</span>
          </li>
        </ul>
        <ul>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5bb382c5bfa461442a75ace48a046b06.png">
            <span>更多功能</span>
          </li>
        </ul>
        <ul>
          <li>
            <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/36e0473c6b0a2d9220de7180e733d787.png">
            <span>设置</span>
          </li>
        </ul>
      </div>
      <div class="footer"></div>
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
    position: relative;
    width: 100%;
    .page-personal-center {
      .hd {
        height: 80px;
        background: url(../../common/img/bg.png) center 0 #f37d0f;
        background-size: auto 100%;
        padding: .32rem 0;
        .user {
          display: -webkit-box;
          box-align: center;
          -webkit-box-align: center;
          margin: 16px 0;
          .portrait {
            width: 50px;
            height: 50px;
            background: url(../../common/img/user.png) no-repeat;
            background-size: 50px 50px;
            margin: 0 10px 0 20px;
          }
          .name {
            color: #fff;
            font-size: .24rem;
          }
        }
      }
      .a1 {
        width: 100%;
        .top {
          display: block;
          height: 43px;
          line-height: 43px;
          border-bottom: 1px solid #f5f5f5;
          .left {
            float: left;
            font-size: 14px;
            margin-left: 20px;
            color: rgba(0, 0, 0, .87);
          }
          .right {
            float: right;
            font-size: .24rem;
            margin-right: 20px;
            color: rgba(0, 0, 0, .54);
          }
        }
        .bottom {
          height: 90px;
          display: flex;
          text-align: center;
          .nav {
            flex: 0 0 33%;
            margin: auto 0;
            font-size: .24rem;
            color: rgba(0, 0, 0, .87);
            .img {
              margin: 0 auto;
              width: 30%;
            }
          }
        }
      }
      .items {
        width: 100%;
        border-top: 8px solid #f5f5f5;
        ul {
          border-bottom: 8px solid #f5f5f5;
          li {
            width: 100%;
            height: 55px;
            line-height: 55px;
            position: relative;
            color: rgba(0, 0, 0, .54);
            background: url(../../common/img/right.png) no-repeat 95% center;
            background-size: .48rem auto;
            img {
              width: 7%;
              margin: 0 10px 0 20px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
</style>
