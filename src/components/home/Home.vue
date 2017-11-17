<template>
  <div class="wrapper">
    <div class="top-header">
      <div class="index-header">
        <div class="logo"><img src="../../common/img/logo.png" width="100%"></div>
        <div class="search_bar" @click="show">
          <span class="text">搜索商品名称</span></div>
        <div class="login">
          <router-link to="/login">
            <span class="text">登录</span>
          </router-link>
        </div>
      </div>
      <div class="sub-header">
        <div class="swipe-tabs slick-slider">
          <div class="slick-track" ref="swipeTab">
            <div class="swipe-tab slick-slide" v-for="(item, index) in navigation" :key="item"
                 @click="scrollToSelectMenu(index)" :class="{'current':currentIndex === index}">{{item}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-container">
      <div class="main-top">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in home[0].banner" :key="item.id">
            <img :src="item.img" width="100%">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>
      </div>
      <div class="f-list">
        <div class="section">
          <span v-for="item in home[1].body.items" :key="item.id"><img :src="item.img_url" width="20%"></span>
        </div>
        <div class="divider_line"></div>
        <div class="broadcast">
          <div class="img"><img src="../../common/img/5.png"></div>
          <swiper :options="swiperOption1" ref="mySwiper1" class="title stop-swiping">
            <swiper-slide v-for="item in advertising.concat(advertising[0])" :key="item.id">
              <span>{{item}}</span>
            </swiper-slide>
          </swiper>
        </div>
        <div class="content">
          <div class="divider_line_one"></div>
          <div class="body">
            <img v-for="item in home[3].body.items" :key="item.id" :src="item.img_url">
          </div>
          <span class="divider_line_one"></span>
          <img v-for="item in home[5].body.items" :key="item.id" :src="item.img_url" width="100%">
          <img :src=" home[7].body.img_url" width="100%">
          <div class="discounts">
            <ul>
              <li v-for="item in home[11].body.items" :key="item.id">
                <img :src="item.img_url">
              </li>
            </ul>
          </div>
          <div class="cells-auto-fill">
            <img :src=" home[8].body.items[0].img_url" width="100%">
            <img :src=" home[15].body.items[0].img_url" width="100%">
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[17].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[18].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[19].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider_line_one"></div>
            <img :src=" home[21].body.items[0].img_url" width="100%">
            <div class="divider_line_one"></div>
            <img :src=" home[23].body.items[0].img_url" width="100%">
            <div class="divider_line_one"></div>
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[25].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[26].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="list-two-type">
              <div class="box">
                <div class="item" v-for="item in home[27].body.items" :key="item.id">
                  <div class="img">
                    <img :src="item.img_url" width="100%">
                  </div>
                  <div class="info">
                    <div class="name">{{item.product_name}}</div>
                    <div class="brief">{{item.product_brief}}</div>
                    <div class="price">¥{{item.product_price}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider_line_one"></div>
            <img :src=" home[31].body.items[0].img_url" width="100%">
            <img :src=" home[33].body.items[0].img_url" width="100%">
            <div class="divider_line_one"></div>
            <img :src=" home[35].body.items[0].img_url" width="100%" @click="goTop">
          </div>
        </div>
      </div>
      <!-- <div class="second"></div> -->
    </div>

    <div class="found" v-show="detailShow">
      <div class="header">
        <div class="left">
          <span class="icon-home2" @click="hide"></span>
        </div>
        <div class="title">
          <div class="searchword">
            <input type="text" autofocus="autofocus" v-model="inputText">
          </div>

        </div>
        <div class="searchlabel">
          <span class="icon-search"></span>
        </div>
      </div>
      <div class="adlist">
        <div class="adlist-title">热门搜索</div>
        <div class="adlist-photo">
          <img src="http://i8.mifile.cn/b2c-mimall-media/1aa165d3bf198c2ceb83dfe2def1112d!720x200.jpg?bg=D1C7BE">
        </div>

      </div>
      <div class="searchkey">
        <ul>
          <li v-for="item in hotWord" :key="item.id" @click="inputFillEvent(item)">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>


  <!-- <div class="main-container">
    <div class="container">
      <ul ref="box">
        <li v-for="item in home[0].banner" :key="item.id">
          <img :src="item.img" width="100%">
        </li>
      </ul>
      <div class="swipe-nav">
        <span class="on"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div> -->
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      home: {
        type: Array
      }
    },
    data() {
      return {
        navigation: ['推荐', '手机', '智能', '电视', '盒子', '电脑', '生活周边'],
        advertising: ['周三新品日，快看看你想要的上架了没？', '手机充电的几个误区，你真会充电吗！', '天气这么冷，喝点热的很有必要'],
        hotWord: ['免费领券', '小米电饭煲', '小米Note 3', '小米Max 2'],
        currentIndex: 0,
        detailShow: false,
        inputText: '',
        swiperOption: {
          notNextTick: true,
          autoplay: 3000,
          // direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
//          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          loop: true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        },
        swiperOption1: {
          notNextTick: true,
          autoplay: 5000,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          noSwiping: true,
          noSwipingClass: 'stop-swiping',
          paginationClickable: true,
          observeParents: true,
          loop: true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
      })
    },
    methods: {
      goTop() {
        window.scrollTo(0, 0)
      },
      scrollToSelectMenu(index) {
        this.currentIndex = index
      },
      initScrollTemplate() {
        // console.log(this.$refs.swipeTab)
        if (this.$refs.swipeTab) {
          this.swipeTab = new IScroll(this.$refs.swipeTab, {
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            click: true
          })
        }
      },
      show() {
        this.detailShow = true
      },
      hide() {
        this.detailShow = false
      },
      inputFillEvent (word) {
        this.inputText = word
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less" scoped>

  .wrapper {
    position: relative;
    width: 100%;
    .top-header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 75px;
      font-size: 0;
      z-index: 3;
      background-color: #fafafa;
      .index-header {
        position: relative;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: .15rem 0;
        margin-top: 5px;
        .logo {
          flex: 0 0 52px;
          padding: 5px 13px;
          box-sizing: border-box;
        }
        .search_bar {
          flex: 1;
          line-height: 25px;
          background: url(../../common/img/search.png) no-repeat;
          background-size: 101% 101%;
          height: 25px;
          border-radius: .05rem;
          border: 1px solid #e5e5e5;
          .text {
            font-size: .3rem;
            color: rgba(0, 0, 0, .3);
            margin-left: 30px;
          }
        }
        .login {
          flex: 0 0 52px;
          display: block;
          text-align: center;
          .text {
            display: block;
            font-size: 14px;
            margin-top: 10px;
            color: #969696;
          }
        }
      }
      .sub-header {
        position: relative;
        left: 0;
        bottom: 0;
        z-index: 101;
        background-color: #fafafa;
        height: 40px;
        // overflow: hidden;
        width: 100%;
        .slick-slider {
          display: block;
          box-sizing: border-box;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
          position: relative;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // overflow: auto;
          .slick-track {
            width: 130%;
            height: 100%;
            transform: none;
            .swipe-tab {
              margin: 0 3.3%;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              display: inline-block;
              float: left;
              align-items: center;
              justify-content: center;
              color: #747474;
              cursor: pointer;
              text-align: center;
              &.current {
                color: #ED5B00;
                border-bottom: 1.5px solid #ED5B00;
              }
            }
          }
        }
      }
    }
    .main-container {
      position: relative;
      width: 100%;
      .main-top {
        margin-top: 78px;
      }
      .f-list {
        position: absolute;
        width: 100%;
        .section {
          width: 100%;
          .span {
            display: block;
            float: left;
          }
        }
        .divider_line {
          position: absolute;
          width: 100%;
          height: 1px;
          border-bottom: 1px solid #cecece;
        }
        .broadcast {
          position: absolute;
          width: 100%;
          height: 40px;
          display: flex;
          .img {
            flex: 0 0 80px;
            img {
              width: 100%;
            }
          }
          .title {
            font-size: 12px;
            line-height: 18px;
            padding-left: 10px;
            border-left: 1px solid #b2b2b2;
            // overflow: hidden;
            text-overflow: ellipsis;
            margin: 10px;
            ul {
              height: 20px;
              overflow: hidden; //
              li {
                margin-bottom: 4px;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
        .content {
          position: relative;
          margin-top: 40px;
          width: 100%;
          .divider_line_one {
            position: absolute;
            width: 100%;
            height: 8px;
            background-color: #f5f5f5;
          }
          .body {
            width: 100%;
            img {
              width: 49%;
              display: inline-block;
              float: left;
              margin: 1.5px;
            }
          }
          .discounts {
            position: absolute;
            width: 100%;
            overflow: auto;
            ul {
              width: 222%;
              height: 150px;
              li {
                img {
                  width: 19%;
                  height: 20%;
                  float: left;
                  margin: 0 5px;
                  border: 1px solid #ccc;
                  &:last-child {
                    margin-right: 0;
                  }
                }
              }
            }
          }
          .cells-auto-fill {
            position: absolute;
            margin-top: 43%;
            &:last-child {
              margin-bottom: 60px;
            }
            .list-two-type {
              position: relative;
              width: 100%;
              height: 280px;
              .box {
                position: absolute;
                .item {
                  width: 49.7%;
                  display: inline-block;
                  float: left;
                  &:last-child {
                    float: right;
                  }
                  .info {
                    padding: 11.5px 11.5px;
                    .name {
                      font-size: 14px;
                      color: rgba(0,0,0,.87);
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                    .brief {
                      margin-top: .2rem;
                      font-size: 13px;
                      //height: .3rem;
                      //line-height: .3rem;
                      color: rgba(0,0,0,.54);
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                    .price {
                      display: inline-block;
                      font-size: 16px;
                      font-weight: inherit;
                      color: #ff6000;
                      margin-top: .2rem;
                      position: relative;
                      white-space: nowrap;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .found {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      z-index: 105;
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        -webkit-box-align: center;
        box-align: center;
        z-index: 110;
        background: #f5f5f5;
        padding: 0 10px;
        border-bottom: 1px solid #eee;
        display: flex;
        .left {
          flex: 0 0 28px;
          display: block;
          width: 28px;
          height: 28px;
          margin-top: 11px;
          line-height: 28px;
          text-align: center;
          font-size: 28px;
          color: #999;
        }
        .title {
          flex: 1;
          margin: 9px 10px;
          .searchword {
            width: 97%;
            height: 30px;
            line-height: 30px;
            border: 1px solid #ccc;
            padding: .1rem .2rem;
            background: #FFF;
            input {
              width: 100%;
              height: 25px;
              line-height: 25px;
              padding-left: 5px;
              border: 0 none;
              font-size: 16px;
              font-weight: 400;
              box-sizing: border-box;
              outline: medium; // 输入时去除边框
            }
          }
        }
        .searchlabel {
          flex: 0 0 28px;
          display: block;
          width: 28px;
          height: 28px;
          margin-top: 11px;
          line-height: 28px;
          text-align: center;
          font-size: 28px;
          color: #999;
        }
      }
      .adlist {
        margin-top: 55px;
        width: 100%;
        height: 160px;
        .adlist-title {
          height: 46px;
          line-height: 46px;
          padding: 0 18px;
          font-size: 14px;
        }
        .adlist-photo {
          img {
            width: 100%;
            height: 114px;
          }
        }
      }
      .searchkey {
        height: 100px;
        ul {
          width: 100%;
          height: 100%;
          display: block;
          margin: 6px 11px;
          li {
            width: 80px;
            height: 37px;
            line-height: 37px;
            margin: 5px;
            float: left;
            font-size: 14px;
            text-align: center;
            border: 1px solid #ccc;
            &:first-child {
              background: rgb(228, 245, 226);
              color: rgb(72, 72, 72);
              border-color: rgb(151, 194, 138);
            }
            &:nth-child(2) {
              background: rgb(232, 246, 246);
              color: rgb(72, 72, 72);
              border-color: rgb(140, 218, 222);
            }
            &:nth-child(3) {
              background: rgb(248, 242, 236);
              color: rgb(72, 72, 72);
              border-color: rgb(250, 194, 136);
            }
            &:last-child {
              background: rgb(249, 234, 234);
              color: rgb(72, 72, 72);
              border-color: rgb(252, 160, 167);
            }
          }
        }

      }
    }
  }

  /*
    .container {
      position: relative;
      width: 100%;
      height: 190px;
      // overflow: hidden;
      ul {
        position: absolute;
        width: 300%;
        height: 100%;
        // left: -100%;
        li {
          float: left;
          width: 33.3%;
          height: 100%;
        }
      }
    }

    .swipe-nav {
      position: absolute;
      display: block;
      width: 45px;
      height: 10px;
      bottom: 10px;
      right: 20px;
      span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 5px;
        float: left;
        border-radius: 50%;
        background-color: #ccc;
      }
      .on {
        background-color: #ED5B00;
      }
    }
  */
</style>
