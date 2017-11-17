/**
 * Created by newuser on 2017/9/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '../store/mutations'
import * as actions from './actions'
import header from './modules/header'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    header,
    goods,
    cart
  }
})
