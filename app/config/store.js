import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    appState: undefined
}

const mutations = {
    changeAppState(state, _payload){
        state.appState = _payload
    }
}

const appStore = new Vuex.Store({
    state,
    mutations,
  })
  
  export default appStore
  