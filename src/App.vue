<template>
  <div id="app">
    <Loading></Loading>
    <router-view :classification="classification" :home="home" :shopcar="shopcar" :goods="goods"></router-view>
    <div class="tab border" v-show="showNav">
      <div class="tab-item" :class="{'cur-page': route === '/home'}">
        <router-link to="/home">
          <div class="img">
            <img v-show="route !== '/home'" src="http://i8.mifile.cn/v1/a1/7a7d0ce7-3859-b188-424d-a0695f5eef0e.png"
                 width="25%" height="25%">
            <img v-show="route === '/home'" src="http://i8.mifile.cn/v1/a1/02d4f63a-3bda-210a-5727-110fdf2e3fe1.png"
                 width="25%" height="25%">
          </div>
          <div class="name">
            <span>首页</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item" :class="{'cur-page': route === '/classification'}">
        <router-link to="/classification">
          <div class="img">
            <img v-show="route !== '/classification'"
                 src="http://i8.mifile.cn/v1/a1/461abe53-55e2-eb46-4817-7909ecd1e2a6.png" width="25%" height="25%">
            <img v-show="route === '/classification'"
                 src="http://i8.mifile.cn/v1/a1/cc2d5c56-7b00-ec76-02c6-00aed4a08ac9.png" width="25%" height="25%">
          </div>
          <div class="name">
            <span>分类</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item" :class="{'cur-page': route === '/shopcar'}">
        <router-link to="/shopcar">
          <div class="img">
            <img v-show="route !== '/shopcar'" src="http://i8.mifile.cn/v1/a1/9b29cf63-a59a-8b07-36db-5fe0bc309317.png"
                 width="25%" height="25%">
            <img v-show="route === '/shopcar'" src="http://i8.mifile.cn/v1/a1/389a48f2-539f-4d28-e9bb-757813dc88a4.png"
                 width="25%" height="25%">
          </div>
          <div class="name">
            <span>购物车</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item" :class="{'cur-page': route === '/my'}">
        <router-link to="/my">
          <div class="img">
            <img v-show="route !== '/my'" src="http://i8.mifile.cn/v1/a1/835193c2-c643-1d65-e194-17da8e9d0fb9.png"
                 width="25%" height="25%">
            <img v-show="route === '/my'" src="http://i8.mifile.cn/v1/a1/6984fc74-6273-aa75-89e0-f35e04d9e8aa.png"
                 width="25%" height="25%">
          </div>
          <div class="name">
            <span>我的</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from './components/loading/Loading'
  export default {
    props: {
      'showNav': {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        classification: [],
        home: [],
        arr: []
      }
    },
    created() {
      let self = this
      this.$axios.get('/api/classification')
        .then((res) => {
          res = res.data
          // console.log(res.data[0].category_list[0].body.items[0].img_url)
          if (res.error === 0) {
            self.classification = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/shopcar')
        .then((res) => {
          res = res.data
          // console.log(res.data)
          if (res.error === 0) {
            self.shopcar = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/goods')
        .then((res) => {
          res = res.data
          console.log(res.data)
          if (res.error === 0) {
            self.goods = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      setTimeout(() => {
        this.$axios.get('/api/home')
          .then((res) => {
            res = res.data
            // console.log(res.data)
            if (res.error === 0) {
              self.home = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      }, 500)
    },
    computed: {
      route () {
        return this.$route.path
      }
    },
    components: {
      Loading
    }
  }
</script>

<style lang="less">
  @import "common/less/mixin";

  #app {
    .tab {
      position: fixed;
      display: flex;
      bottom: 0;
      height: 60px;
      width: 100%;
      z-index: 50;
      background-color: white;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      .tab-item {
        flex: 1;
        text-align: center;
        margin-top: 10px;
        & > a {
          display: block;
          font-size: 14px;
          color: #999999;
          &.active {
            color: #ED5B00;
          }
        }
      }
    }
  }
</style>
