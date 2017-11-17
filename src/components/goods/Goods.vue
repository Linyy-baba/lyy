<template>
  <div class="wrapper">
    <div class="product-view">
      <div class="fixed-header">
        <router-link to="/classification">
          <div class="left">
            <img src="../../common/img/back.png" width="30%">
          </div>
        </router-link>
        <div class="right" @click="showDetail">
          <img src="../../common/img/share.png" width="30%">
        </div>
      </div>
      <div class="slider">
        <swiper :options="swiperOption" ref="mySwiper" v-for="item in goods.goods_info" :key="item.id">
          <swiper-slide>
            <div class="bgvideo" style="position: relative;background-color: #000">
              <video poster="http://i8.mifile.cn/v1/a1/d93537df-6668-db41-40ca-e05e5c867295.jpg" ref="video1"
                     width="100%" height="412.5px" x-webkit-airplay="true" webkit-playsinline="true" @click="vedio">
                <source src="http://v.mifile.cn/b2c-mimall-media/4b26152bcf8e9c329bd9044e78054c0d.mp4" type="video/mp4">
              </video>
            </div>
          </swiper-slide>
          <swiper-slide v-for="img in item.gallery_v2" :key="img.id">
            <img :src="img" width="100%">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="titleView">
        <div class="name">小米MIX 2</div>
        <div class="product"><font color="#ff4a00">【小米MIX 2 现货在售，享小米分期3/6/12期免息】</font>全面屏2.0，5.99\"大屏 / 骁龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段 / 双ADC高清录音"
        </div>
        <div class="price">3299</div>
      </div>
      <div class="productActive" @click="show">
        <div class="product-box">
          <div class="title">促销</div>
          <div class="icon-box">
            <div class="first">
              <div class="icon-title">赠品</div>
              <div class="icon-text">限量送米家感应夜灯</div>
            </div>
            <div class="second">
              <div class="icon-title">赠品</div>
              <div class="icon-text">无限流量米粉卡 含100元话费</div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <!-- <div><img src="../../common/img/spr3.png" alt=""></div>
      <div><img src="../../common/img/spr3.png" alt=""></div>
      <div><img src="../../common/img/spr3.png" alt=""></div>
      <div><img src="../../common/img/spr3.png" alt=""></div>
      <div><img src="../../common/img/spr3.png" alt=""></div> -->

       <div class="descTabsView">
        <ul class="desa-title">
          <li :class="{'active': tabState}" @click="tabEvent1">概述</li>
          <li :class="{'active': tabState1}" @click="tabEvent2(true)">参数</li>
          <li :class="{'active': tabState2}" @click="tabEvent3(true)">意外险</li>
        </ul>
        <div class="tabs-views" v-show="tabState">
          <ul>
            <li v-for="item in goods.view_content.descTabsView[0].tabContent" :key="item.id">
              <img :src="item.plainView.img" width="100%">
            </li>
          </ul>
        </div>
        <div class="tabs-views" v-show="tabState1">
          <ul>
            <li v-for="item in goods.view_content.descTabsView[1].tabContent" :key="item.id">
              <img :src="item.plainView.img" width="100%">
            </li>
          </ul>
        </div>
        <div class="tabs-views" v-show="tabState2">
          <ul>
            <li v-for="item in goods.view_content.descTabsView[2].tabContent" :key="item.id">
              <img :src="item.plainView.img" width="100%">
            </li>
          </ul>
        </div>
      </div>

      <div class="back-top" @click="goTop">
        <img src="../../common/img/top.png" width="100%">
      </div>
      <div class="product-footer">
        <ul class="nav">
          <li class="home">
            <router-link to="/home">
              <div class="img">
                <img src="../../common/img/1.png" width="30%">
              </div>
              <div class="name">
                <span>首页</span>
              </div>
            </router-link>
          </li>
          <li class="car">
            <router-link to="/shopcar">
              <div class="img">
                <img src="../../common/img/3.png" width="30%">
              </div>
              <div class="name">
                <span>购物车</span>
              </div>
            </router-link>
          </li>
          <div class="buy" @click="showList">加入购物车</div>
        </ul>
      </div>
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow" @click.stop="hideDetail">
        <div class="bottom">
          <div class="share-nav"></div>
          <div class="share-name">新浪微博</div>
        </div>
      </div>
    </transition>
    <transition name="fold">
      <div class="bg" v-show="detailShow1">
        <div class="content">
          <div class="close" @click.stop="hide">&times;</div>
          <div class="h1">促销</div>
          <div class="max">
            <div class="first">
              <div class="icon-title">赠品</div>
              <div class="icon-text">限量送米家感应夜灯</div>
            </div>
            <div class="second">
              <div class="icon-title">赠品</div>
              <div class="icon-text">无限流量米粉卡 含100元话费</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fadeList">
      <div class="specMenu" v-show="isShow">
        <div class="content">
          <div class="close" @click.stop="hideList">&times;</div>
          <div class="proInfo">
            <div class="productImg">
              <img src="../../common/img/show.png" width="100%">
            </div>
            <div class="proDesc" v-for="item in inputText" :key="item.id">
              <div class="price">{{item.price}}</div>
              <div class="desc">{{item.name}}</div>
            </div>
          </div>
          <div class="maxH5">
            <div class="specGroups">
              <div class="specTitle">版本</div>
              <div class="specs">
                <div class="specs-price" v-for="(item, index) in arr" :key="item.id"
                     @click="changeBg(index)" :class="{'on':ind === index}">
                  <div class="left">{{item.version}}</div>
                  <div class="right">{{item.price}}</div>
                </div>
              </div>
            </div>
            <div class="specGroups">
              <div class="specTitle">颜色</div>
              <div class="specs">
                <div class="specs-price" :class="on='on'" style="width: 20%">黑色陶瓷</div>
              </div>
            </div>
            <div class="specBuy">
              <div class="specTitle">购买数量</div>
              <div class="addNum">
                <div class="add" style="font-size: 24px" @click="add">
                  <img src="../../common/img/add.png" width="50%">
                </div>
                <div class="num">{{num}}</div>
                <div class="sub" style="font-size: 24px" @click="sub">
                  <img src="../../common/img/sub.png" width="50%">
                </div>
              </div>
            </div>
            <div class="ywx">
              <div class="specTitle">意外保险</div>
              <div class="specs">
                <div class="specs-price" :class="{on: ison}" @click="sure" style="width: 50%">小米MIX 2 意外保险 249元</div>
              </div>
            </div>
          </div>
        </div>
        <div class="specFoot" @click="shopcar">确定</div>
      </div>
    </transition>
    <transition name="fadeShop">
      <div class="success" v-show="isBuy">
        <div class="box">
          <div class="img">
            <img src="../../common/img/success.png" width="100%">
          </div>
          <div class="txt">成功加入购物车！</div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
  // import eventVue from '../../eventVue'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    props: {
      goods: {
        type: Object
      }
    },
    data() {
      return {
        shop: [],
        detailShow: false,
        detailShow1: false,
        tabState: true,
        tabState1: false,
        tabState2: false,
        ison: false,
        isShow: false,
        isBuy: false,
        num: 1,
        arr: [{'version': '6GB+64GB', 'price': '3299元'},
          {'version': '6GB+128GB', 'price': '3599元'},
          {'version': '6GB+256GB', 'price': '3999元'},
          {'version': '全陶瓷尊享版', 'price': '4699元'}],
        ind: 0,
        inputText: [{'name': '小米MIX 2 全网通版 6GB内存 64GB 黑色陶瓷', 'price': '3299元'}],
        swiperOption: {
          notNextTick: true,
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
        }
      }
    },
    created() {
      this.$nextTick(function() {
        this.goTop()
      })
    },
    methods: {
      vedio() {
        if (this.$refs.video1[0].paused) {
          this.$refs.video1[0].play()
        } else {
          this.$refs.video1[0].pause()
        }
      },
      showDetail() {
        this.detailShow = true
      },
      hideDetail() {
        this.detailShow = false
      },
      show() {
        this.detailShow1 = true
      },
      hide() {
        this.detailShow1 = false
      },
      tabEvent1() {
        this.tabState = true
        this.tabState1 = false
        this.tabState2 = false
      },
      tabEvent2(item) {
        this.tabState = false
        this.tabState1 = item
        this.tabState2 = false
      },
      tabEvent3(item) {
        this.tabState = false
        this.tabState1 = false
        this.tabState2 = item
      },
      sure() {
        this.ison = !this.ison
      },
      showList() {
        this.isShow = true
      },
      hideList() {
        this.isShow = false
      },
      changeBg(index) {
        this.ind = index
        if (index === 0) {
          this.inputText = [{'name': '小米MIX 2 全网通版 6GB内存 64GB 黑色陶瓷', 'price': '3299元'}]
        } else if (index === 1) {
          this.inputText = [{'name': '小米MIX 2 全网通版 6GB内存 128GB 黑色陶瓷', 'price': '3599元'}]
        } else if (index === 2) {
          this.inputText = [{'name': '小米MIX 2 全网通版 6GB内存 256GB 黑色陶瓷', 'price': '3999元'}]
        } else if (index === 3) {
          this.inputText = [{'name': '小米MIX 2 全网通版 8GB内存 全陶瓷尊享版 皓月白 128GB', 'price': '4699元'}]
        }
      },
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
      goTop() {
        this.$nextTick(function() {
          // let curHeight = document.documentElement.scrollTop || document.body.scrollTop
          // console.log(curHeight)
          window.scrollTo(0, 0)
        })
      },
      shopcar() {
        this.shop.push({'name': this.inputText[0].name, 'price': this.inputText[0].price})
        // console.log(this.shop)
        var obj = this.shop
        // var obj = {'name': this.inputText[0].name, 'price': this.inputText[0].price}
        var str = JSON.stringify(obj)
        sessionStorage.val = str
        // eventVue.$emit('back', this.inputText[0])
        this.hideList()
        let that = this
        setTimeout(function () {
          that.isBuy = true
          setTimeout(function () {
            that.isBuy = false
          }, 1000)
        }, 100)
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
    height: 100%;
    overflow-x: hidden;
    margin-bottom: 60px;
    .product-view {
      width: 100%;
      .fixed-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 44px;
        background-color: rgba(255, 255, 255, 0);
        z-index: 10;
        .left {
          position: absolute;
          top: 20px;
          left: 20px;
        }
        .right {
          position: absolute;
          top: 20px;
          right: -35px;
        }
      }
      .titleView {
        margin: 10px 20px 0;
        text-align: left;
        border-bottom: 1px solid #f4f4f4;
        .name {
          font-size: 20px;
          line-height: 24px;
          color: rgba(0, 0, 0, .87);
        }
        .product {
          height: 40px;
          line-height: 20px;
          font-size: .24rem;
          color: rgba(0, 0, 0, .54);
        }
        .price {
          position: relative;
          display: inline-block;
          margin: 30px 0 10px 10px;
          font-size: 24px;
          color: #f56600;
          &::before {
            position: absolute;
            top: 0;
            left: -15px;
            content: '￥';
            font-size: 18px;
          }
        }
      }
      .productActive {
        height: 60px;
        margin: 10px 10px 10px 20px;
        .product-box {
          display: flex;
          height: 50px;
          background: url(../../common/img/right.png) no-repeat 95% center;
          background-size: .48rem auto;
          .title {
            flex: 0 0 40px;
            font-size: .24rem;
            color: rgba(0, 0, 0, .54);
          }
          .icon-box {
            flex: 1;
            .first {
              height: 22px;
              display: flex;
              margin-bottom: 10px;
              .icon-title {
                flex: 0 0 30px;
                width: 30px;
                height: 20px;
                line-height: 20px;
                font-size: .16rem;
                text-align: center;
                color: #f56600;
                border: 1px solid #f56600;
                border-radius: 1px;
                padding: .02rem .05rem;
                margin: .03rem .08rem .01rem;
              }
              .icon-text {
                flex: 1;
                margin: 5px;
                font-size: .24rem;
                color: rgba(0, 0, 0, .87);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .second {
              height: 22px;
              display: flex;
              .icon-title {
                flex: 0 0 30px;
                width: 30px;
                height: 20px;
                line-height: 20px;
                font-size: .16rem;
                text-align: center;
                color: #f56600;
                border: 1px solid #f56600;
                border-radius: 1px;
                padding: .02rem .05rem;
                margin: .03rem .08rem .01rem;
              }
              .icon-text {
                flex: 1;
                margin: 5px;
                font-size: .24rem;
                color: rgba(0, 0, 0, .87);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }

      }
      .line {
        border-bottom: 8px solid #efeff0;
      }
      .descTabsView {
        position: absolute;
        border-bottom: 8px solid #efeff0;
        .desa-title {
          //position: fixed;
          display: flex;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 50px;
          font-size: 14px;
          background: #fff;
          text-align: center;
          li {
            float: left;
            height: 16px;
            margin-top: 17px;
            flex: 0 0 33%;
            &:nth-child(1) {
              border-right: 1px solid #E5E5E5;
            }
            &:nth-child(2) {
              border-right: 1px solid #E5E5E5;
            }
            &.active {
              color: #f95b07;
            }
          }
        }
        .tabs-views {
          ul {
            font-size: 0;
          }
        }
      }
      .back-top {
        position: fixed;
        width: 40px;
        height: 40px;
        bottom: 80px;
        right: 20px;
      }
      .product-footer {
        position: fixed;
        height: 61px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        font-size: .32rem;
        z-index: 60;
        .nav {
          width: 100%;
          display: flex;
          li {
            flex: 0 0 20%;
            text-align: center;
            float: left;
            font-size: .24rem;
            color: rgba(0, 0, 0, .87);
            margin-top: 10px;
            .name {
              margin-top: 5px;
            }
            &:nth-child(1) {
              border-right: 1px solid #f4f4f4;
            }
          }
          .buy {
            flex: 1;
            height: 61px;
            line-height: 60px;
            text-align: center;
            background: #f95b07;
            color: #fff;
            font-size: 18px;
            font-weight: 400;
          }
        }
      }
    }
    .detail {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      -webkit-backdrop-filter: blur(10px);
      overflow: auto;
      z-index: 200;
      transition: all 0.2s;
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
      .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 70px;
        background: #fff;
        text-align: center;
        .share-nav {
          width: 30px;
          height: 30px;
          margin: 10px auto 4px;
          border-radius: 50%;
          background: #D32F2F url(../../common/img/wap.png) no-repeat 32%;
          background-size: auto 75%;
        }
        .share-name {
          font-size: .2rem;
        }
      }
    }
    .bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      -webkit-backdrop-filter: blur(10px);
      overflow: auto;
      z-index: 200;
      //transition: all 0.2s;
      .content {
        position: absolute;
        height: 280px;
        bottom: 0;
        width: 100%;
        transition: all 1s;
        background: #fff;
        &.fold-enter, &.fold-leave-to {
          opacity: 0;
          transform:translateY(100%);
        }
        .close {
          position: absolute;
          top: 5px;
          right: 10px;
          color: #7e8c8d;
          font-size: 24px;
          text-align: right;
          vertical-align: top;
        }
        .h1 {
          padding: 30px 0;
          text-align: center;
          font-size: 18px;
          color: rgba(0, 0, 0, .87);
        }
        .max {
          padding: 0 20px;
          margin-top: 20px;
          overflow-y: auto;
          overflow-x: hidden;
          .first {
            height: 54px;
            display: flex;
            margin-bottom: 10px;
            .icon-title {
              flex: 0 0 30px;
              width: 30px;
              height: 20px;
              line-height: 20px;
              font-size: .16rem;
              text-align: center;
              color: #f56600;
              border: 1px solid #f56600;
              border-radius: 1px;
              padding: .02rem .05rem;
              margin: .03rem .08rem .01rem;
            }
            .icon-text {
              flex: 1;
              margin: 4px;
              font-size: 16px;
              color: rgba(0, 0, 0, .87);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .second {
            height: 54px;
            display: flex;
            .icon-title {
              flex: 0 0 30px;
              width: 30px;
              height: 20px;
              line-height: 20px;
              font-size: .16rem;
              text-align: center;
              color: #f56600;
              border: 1px solid #f56600;
              border-radius: 1px;
              padding: .02rem .05rem;
              margin: .03rem .08rem .01rem;
            }
            .icon-text {
              flex: 1;
              margin: 4px;
              font-size: 16px;
              color: rgba(0, 0, 0, .87);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .specMenu {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, .3);
      color: #000;
      z-index: 70;
      opacity: 1;
      margin-top: 0;
      transition: all 0.2s;
      &.fadeList-enter, &.fadeList-leave-to {
        opacity: 0;
        transform:translateY(100%);
      }
      /* &.fadeList-enter-active, &.fadeList-leave-active {
        transition: all 0.3s;
      }
      &.fadeList-enter {
        opacity: 0;
        margin-top: 100%;
      }
      &.fadeList-enter {
        opacity: 0;
        margin-top: 100%;
      } */
      .content {
        position: absolute;
        height: 65%;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 20px 20px 25px;
        transition: transform .3s;
        .close {
          position: absolute;
          top: 5px;
          right: 10px;
          font-size: 24px;
          text-align: right;
          color: #7e8c8d;
          vertical-align: top;
        }
        .proInfo {
          min-height: 1.5rem;
          display: flex;
          border-bottom: 1px solid #f4f4f4;
          .productImg {
            flex: 0 0 33%;
            width: 33%;
            background: #fff;
            margin-top: -15%;
          }
          .proDesc {
            position: relative;
            flex: 1;
            margin: 0 0 0 10px;
            .price {
              position: relative;
              display: inline-block;
              margin-left: 10px;
              font-size: 24px;
              color: #f56600;
              &::before {
                position: absolute;
                top: 0;
                left: -15px;
                content: '￥';
                font-size: 18px;
              }
            }
            .desc {
              margin: 10px 0 20px;
              font-size: 16px;
              color: rgba(0, 0, 0, .87);
              line-height: 18px;
            }
          }
        }
        .maxH5 {
          max-height: 70%;
          overflow-y: auto;
          overflow-x: hidden;
          scroll: no;
          .specGroups {
            .specTitle {
              margin: 20px 0 10px;
              line-height: 14px;
              font-size: 14px;
              color: rgba(0, 0, 0, .87);
            }
            .specs {
              border-bottom: 1px solid #f4f4f4;
              .specs-price {
                margin-top: 10px;
                height: 40px;
                line-height: 40px;
                box-sizing: border-box;
                font-size: 12px;
                text-align: center;
                border: 1px solid rgba(0, 0, 0, .15);
                border-radius: 2px;
                &:last-child {
                  margin-bottom: 20px;
                }
                .right {
                  float: right;
                  margin-right: 20px;
                }
                .left {
                  float: left;
                  margin-left: 20px;
                }
              }
              .on {
                color: #f56600;
                border: 1px solid #f56600;
              }
            }
          }
          .specBuy {
            margin-top: 20px;
            display: flex;
            padding-bottom: 20px;
            border-bottom: 1px solid #f4f4f4;
            .specTitle {
              flex: 0 0 63%;
              margin: 20px 0 10px;
              line-height: 14px;
              font-size: 14px;
              color: rgba(0, 0, 0, .87);
            }
            .addNum > div {
              flex: 1;
              float: right;
              width: 40px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #f4f4f4;
              box-sizing: border-box;
              text-align: center;
              font-size: 12px;
              color: #000;
              background-color: #fff;
            }
          }
          .ywx {
            margin-bottom: 20px;
            .specTitle {
              flex: 0 0 63%;
              margin: 20px 0 10px;
              line-height: 14px;
              font-size: 14px;
              color: rgba(0, 0, 0, .87);
            }
            .specs-price {
              margin-top: 10px;
              height: 40px;
              line-height: 40px;
              box-sizing: border-box;
              font-size: 12px;
              text-align: center;
              border: 1px solid rgba(0, 0, 0, .15);
              border-radius: 2px;
            }
            .on {
              color: #f56600;
              border: 1px solid #f56600;
            }
          }
        }
      }
      .specFoot {
        position: fixed;
        width: 100%;
        height: 61px;
        bottom: 0;
        line-height: 61px;
        text-align: center;
        background: #f95b07;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
      }
    }
    .success {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      color: #000;
      z-index: 70;
      transition: all 0.2s;
      &.fadeShop-enter, &.fadeShop-leave-to {
        opacity: 0;
      }
      .box {
        width: 45%;
        height: 14%;
        margin: auto;
        margin-top: 80%;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        .img {
          width: 45px;
          height: 45px;
          margin: 10px auto;
        }
        .txt {
          margin: 15px auto;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }
</style>
