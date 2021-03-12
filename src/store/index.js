import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import {menus} from './menus'
import {programmes} from './programmes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menus,
    programmes
  }
})