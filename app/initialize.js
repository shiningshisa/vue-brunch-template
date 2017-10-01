import Vue from 'vue';
import App from 'components/App.vue'
import veeValidate from 'vee-validate'
import vueResource from 'vue-resource'
import router from './config/router.js'
import store from './config/store.js'
import VueWaypoint from 'vue-waypoint'
import VueTouch from 'vue-touch'
const vueScrollTo = require('vue-scrollto')

Vue.use(vueResource);
Vue.use(veeValidate);
Vue.use(VueWaypoint);

// enable touch events
VueTouch.config.swipe = { direction : 'horizontal' }
Vue.use(VueTouch);

Vue.use(vueScrollTo,{
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: true,
    y: true,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});