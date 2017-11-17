<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <router-link to="/home">
          <span class="icon-home2"></span>
        </router-link>
      </div>
      <div class="title">购物车</div>
      <div class="right">
        <span class="icon-search"></span>
      </div>
    </div>
    <div class="cart-list">
      <ul>
        <li class="item">
          <div class="box" v-for="(item, index) in arr[0]" :key="item.id">
            <div class="img">
              <img src="../../common/img/show.png" width="100%">
            </div>
            <div class="info">
              <div class="name">{{item.name}}</div>
              <div class="price">售价 :  {{item.price}}</div>
              <div class="num">
                <div class="numlist">
                  <div class="sub" @click="sub">
                    <img src="../../common/img/sub.png" width="50%">
                  </div>
                  <div class="count">{{num}}</div>
                  <div class="add" @click="add">
                    <img src="../../common/img/add.png" width="50%">
                  </div>
                </div>
                <div class="numImg" @click="Dec(index)">
                  <img src="../../common/img/dec.png" width="200%">
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="cart-contain" v-show="showArr">
      <div class="first">
        <router-link to="/login">
          <div class="nologin">
            <span>登录后享受更多优惠</span>
            <em>去登录 ></em>
          </div>
        </router-link>
      </div>
      <router-link to="/home">
        <div class="second">
          <span>购物车还是空的</span>
          <em>去逛逛</em>
        </div>
      </router-link>
      <router-link to="/goods">
        <div class="list-recommend">
          <div class="recommend-title">
            <img :src="shopcar.header.body.items[0].img_url" width="100%">
          </div>
          <div class="recommend-list">
            <ul>
              <li v-for="item in shopcar.recom_list" :key="item.id">
                <div class="img">
                  <img :src="item.img_url" width="100%">
                </div>
                <div class="recommend-info">
                  <div class="recommend-name">{{item.name}}</div>
                  <div class="recommend-price">{{item.price}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  // import eventVue from '../../eventVue'
  export default {
    props: {
      shopcar: {
        type: Object
      }
    },
    data() {
      return {
        num: 1,
        showArr: true,
        arr: []
      }
    },
    created() {
      this.arr.push(JSON.parse(sessionStorage.val))
      if (this.arr.length > 0) {
        this.showArr = !this.showArr
      }
    },
    /* watch: {
      arr() {
        console.log(this.arr[0].length)
        if (this.arr[0].length > 0) {
          console.log(123)
          this.showArr = !this.showArr
        }
      }
    }, */
    methods: {
      add() {
        this.num++
        if (this.num >= 5) {
          this.num = 5
        }
      },
      sub() {
        this.num--
        if (this.num < 1) {
          this.num = 1
        }
      },
      Dec(index) {
        this.arr[0].splice(index, 1)
        if (this.arr[0].length === 0) {
          sessionStorage.removeItem('val')
          this.showArr = !this.showArr
        }
        // this.DecList(index)
      },
      DecList(index) {
        let obj = this.arr[0]
        let str = JSON.stringify(obj)
        sessionStorage.val = str
        this.arr[0] = (JSON.parse(sessionStorage.val))
        console.log(JSON.parse(sessionStorage.val))
        if (sessionStorage.val.length === 2) {
          sessionStorage.removeItem('val')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    .header {
      position: absolute;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 .2rem;
      background: #f2f2f2;
      border-bottom: 1px solid #eee;
      display: flex;
      z-index: 2;
      text-align: center;
      .left {
        flex: 0 0 25px;
        width: 25px;
        height: 25px;
        line-height: 25px;
        color: #666;
        font-size: 28px;
        margin: 12.5px 0 12.5px 10px;
      }
      .title {
        flex: 1;
        font-size: 18px;
        color: #666;
        font-weight: 400;

      }
      .right {
        flex: 0 0 25px;
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 28px;
        color: #666;
        margin: 12.5px 20px 12.5px 0;
      }
    }
    .cart-list {
      position: absolute;
      width: 100%;
      top: 50px;
      margin-bottom: 61px;
      .item {
        border-bottom: 1px solid #f6f6f6;
        .box {
          padding: 10px 0;
          display: flex;
          .img {
            position: relative;
            flex: 0 0 25%;
            margin-left: 10px;
          }
          .info {
            flex: 1;
            margin: 10px 10px;
            .name {
              font-size: 16px;
              line-height: 20px;
              color: #666;
              margin-bottom: 5px;
            }
            .price {
              font-size: 12px;
              color: #999;
              margin-bottom: 10px;
            }
            .num {
              .numlist > div {
                float: left;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border: 1px solid #f4f4f4;
                box-sizing: border-box;
                text-align: center;
                font-size: 18px;
                color: #000;
                background-color: #fff;
              }
            }
            .numImg {
              width: 15px;
              height: 15px;
              float: right;
              margin-right: 15px;
            }
          }
        }
      }
    }
    .cart-contain {
      position: absolute;
      width: 100%;
      height: 60px;
      top: 50px;
      .first {
        .nologin {
          height: 60px;
          line-height: 60px;
          span {
            font-size: 18px;
            margin-left: 20px;
            display: block;
            float: left;
          }
          em {
            font-size: 13px;
            color: #666;
            margin-right: 20px;
            display: block;
            float: right;
          }
        }
      }
      .second {
        height: 60px;
        line-height: 60px;
        background: #ebebeb;
        text-align: center;
        font-size: 13px;
        span {
          color: rgba(0, 0, 0, .27);
          margin-right: 5px;
        }
        em {
          border: 1px solid #ccc;
          padding: 5px 20px;
        }
      }
      .list-recommend {
        font-size: 17px;
        .recommend-title {
          height: 60px;
        }
        .recommend-list {
          position: absolute;
          width: 100%;
          li {
            float: left;
            width: 50%;
            box-sizing: border-box;
            padding-right: .04rem;
            &:last-child {
              margin-bottom: 60px;
            }
            .recommend-info {
              padding: .18rem .87rem;
              .recommend-name {
                font-size: 16px;
                color: rgba(0, 0, 0, .87);
                white-space: nowrap;
                overflow: hidden;
                margin-top: 10px;
              }
              .recommend-price {
                position: relative;
                font-size: 17px;
                color: #ff6000;
                font-weight: 500;
                margin: 10px 0 10px 10px;
                &::before {
                  position: absolute;
                  top: 0;
                  left: -12px;
                  content: '￥';
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
