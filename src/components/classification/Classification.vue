<template>
  <div class="shop-container">
    <div v-if="classification.length === 0"></div>
    <div class="container">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in classification" @click="scrollToSelectMenu(index)" class="menu-item"
              :class="{'current':currentIndex === index}">
            <span class="text">{{item.category_name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper" ref="shopWrapper">
        <ul>
          <li v-for="item in classification" class="shop-list shop-list-hook" key="classification">
            <img :src="item.category_list[0].body.items[0].img_url" width="100%" height="10%" style="margin-top: 5%">
            <h1 class="title">{{item.category_name}}</h1>
            <router-link to="/goods">
              <ul>
                <li v-for="shop in item.category_list[2].body.items" class="shop-item">
                  <div class="photo">
                    <img :src="shop.img_url" width="60" height="60">
                  </div>
                  <div class="content">
                    <h1>{{shop.product_name}}</h1>
                  </div>
                </li>
              </ul>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      classification: {
        type: Array
      }
    },
    data() {
      return {
        currentIndex: 0,
        listHeight: []
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
      })
    },
    methods: {
      scrollToSelectMenu(index) {
        var selectLi = this.$refs.shopWrapper.getElementsByClassName('shop-list-hook')[index]
        this.currentIndex = index
        this.shopScroll.scrollToElement(selectLi, 300)
      },
      initScrollTemplate() {
        console.log(this.$refs.menuWrapper)
        if (this.$refs.menuWrapper) {
          this.getShopListHeight()
          this.menuScroll = new IScroll(this.$refs.menuWrapper, {
            click: true
          })
          this.shopScroll = new IScroll(this.$refs.shopWrapper, {
            click: true,
            probeType: 3
          })
          let self = this
          this.shopScroll.on('scroll', function () {
            self.getCurrentIndex(Math.abs(Math.round(this.y)))
          })
        }
      },
      getCurrentIndex(num) {
        // console.log(num)
        for (let i = 0; i < this.listHeight.length - 1; i++) {
          let height = this.listHeight[i]
          if (i + 1 === this.listHeight.length - 1 && num >= height) {
            this.currentIndex = i
            return
          }
          if (num >= height && num < this.listHeight[i + 1]) {
            this.currentIndex = i
            return
          }
        }
      },
      getShopListHeight() {
        let selectLi = this.$refs.shopWrapper.getElementsByClassName('shop-list-hook')
        console.log('test1', this.listHeight)
        let height = 0
        this.listHeight.push(height)
        console.log('test', this.listHeight)
        for (let i = 0; i < selectLi.length; i++) {
          let li = selectLi[i]
          height += li.clientHeight
//          console.log(height)
          this.listHeight.push(height)
        }
//        console.log(this.listHeight)
      }
    },
    watch: {
      classification (val) {
        if (val.lenght > 0) {
          this.$nextTick(() => {
            this.initScrollTemplate()
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/mixin";

  .container {
    top: 0;
    left: 0;
    display: flex;
    position: absolute;
    width: 100%;
    overflow: hidden;
    bottom: 61px;
    .menu-wrapper {
      flex: 0 0 84px;
      width: 84px;
      background: #fefefe;
      border-right: 1px solid #efefef;
      .menu-item {
        display: table;
        width: 84px;
        height: 45px;
        line-height: 45px;
        color: #333333;
        text-align: center;
        &:first-child {
          margin-top: 10px;
        }
        &.current {
          font-size: 20px;
          color: #ED5B00;
        }
      }
    }
    .shop-wrapper {
      flex: 1;
      .shop-list {
        ul {
          margin-left: 25px;
        }
        .title {
          margin-top: 10px;
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          text-align: center;
        }
      }
      .shop-item {
        width: 80px;
        height: 80px;
        display: inline-block;
        .photo {
          margin: 10px;
        }
        .content {
          font-size: 12px;
          line-height: 12px;
          text-align: center;
          color: #757575;
        }
      }
    }
  }
</style>
