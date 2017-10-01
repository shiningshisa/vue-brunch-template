(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/App.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nav = require("./ui/nav.vue");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "App",
    data: function data() {
        return {};
    },

    methods: {},
    mounted: function mounted() {
        console.log("Mounted App");
    },

    components: {
        navbar: _nav2.default
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar'),_v(" "),_c('router-view')],1)}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1", __vue__options__)
  } else {
    hotAPI.reload("data-v-1", __vue__options__)
  }
})()}
});

;require.register("components/pages/404.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "404",
    data: function data() {
        return {
            data: ""
        };
    },

    methods: {},
    components: {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _c('div',[_v("\n    404 page\n")])}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3", __vue__options__)
  } else {
    hotAPI.reload("data-v-3", __vue__options__)
  }
})()}
});

;require.register("components/pages/home.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "Home",
    data: function data() {
        return {
            data: ""
        };
    },

    methods: {},
    components: {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _c('div',[_v("\n    Home\n")])}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2", __vue__options__)
  } else {
    hotAPI.reload("data-v-2", __vue__options__)
  }
})()}
});

;require.register("components/ui/nav.vue", function(exports, require, module) {
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: "Nav",
    data: function data() {
        return {
            data: ""
        };
    },

    methods: {},
    components: {}
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function(){with(this){return _c('nav')}}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4", __vue__options__)
  } else {
    hotAPI.reload("data-v-4", __vue__options__)
  }
})()}
});

;require.register("config/router.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var AppRouter = new _vueRouter2.default({
  mode: 'history',
  base: '/',
  routes: _routes2.default
});

AppRouter.beforeEach(function (to, from, next) {
  // removeEventListeners?

  window.scrollTo(0, 0);
  next();
});

exports.default = AppRouter;

});

require.register("config/routes.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _home = require("../components/pages/home.vue");

var _home2 = _interopRequireDefault(_home);

var _ = require("../components/pages/404.vue");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
	path: "/",
	name: 'root',
	redirect: '/home',
	renderName: 'Home',
	meta: {
		render: false,
		scrollToTop: false
	}
}, {
	path: "/home",
	name: 'home',
	renderName: 'Home',
	component: _home2.default,
	meta: {
		render: true,
		scrollToTop: true
	}
}, {
	path: "/page-not-found",
	name: 'pageNotFound',
	renderName: '404!',
	component: _2.default,
	meta: {
		render: false,
		scrollToTop: true
	}
}, {
	path: "*",
	name: 'anythingElse',
	renderName: 'redirect',
	redirect: { name: 'pageNotFound' },
	meta: {
		render: false
	}
}];

exports.default = routes;

});

require.register("config/store.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    appState: undefined
};

var mutations = {
    changeAppState: function changeAppState(state, _payload) {
        state.appState = _payload;
    }
};

var appStore = new _vuex2.default.Store({
    state: state,
    mutations: mutations
});

exports.default = appStore;

});

require.register("initialize.js", function(exports, require, module) {
'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('components/App.vue');

var _App2 = _interopRequireDefault(_App);

var _veeValidate = require('vee-validate');

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _router = require('./config/router.js');

var _router2 = _interopRequireDefault(_router);

var _store = require('./config/store.js');

var _store2 = _interopRequireDefault(_store);

var _vueWaypoint = require('vue-waypoint');

var _vueWaypoint2 = _interopRequireDefault(_vueWaypoint);

var _vueTouch = require('vue-touch');

var _vueTouch2 = _interopRequireDefault(_vueTouch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vueScrollTo = require('vue-scrollto');

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_veeValidate2.default);
_vue2.default.use(_vueWaypoint2.default);

// enable touch events
_vueTouch2.default.config.swipe = { direction: 'horizontal' };
_vue2.default.use(_vueTouch2.default);

_vue2.default.use(vueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: true,
    y: true
});

new _vue2.default({
    el: '#app',
    router: _router2.default,
    store: _store2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

});

require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map