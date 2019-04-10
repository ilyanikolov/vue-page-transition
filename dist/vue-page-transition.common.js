(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePageTransition"] = factory();
	else
		root["VuePageTransition"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOlsiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxDQUFKOztBQUVBO0FBQ0FBLElBQUssWUFBVztBQUNmLFFBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsS0FBSUEsS0FBS0MsU0FBUyxhQUFULEdBQUwsSUFBa0MsQ0FBQyxHQUFFQyxJQUFILEVBQVMsTUFBVCxDQUF0QztBQUNBLENBSEQsQ0FHRSxPQUFNQyxDQUFOLEVBQVM7QUFDVjtBQUNBLEtBQUcsT0FBT0MsTUFBUCxLQUFrQixRQUFyQixFQUNDSixJQUFJSSxNQUFKO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCTixDQUFqQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("\n/* styles */\n__webpack_require__(4)\n\nvar Component = __webpack_require__(5)(\n  /* script */\n  __webpack_require__(3),\n  /* template */\n  __webpack_require__(6),\n  /* scopeId */\n  \"data-v-4c22b934\",\n  /* cssModules */\n  null\n)\nComponent.options.__file = \"/Users/orlando/Desktop/contributions/vue-page-transitions/src/components/VuePageTransition.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key !== \"__esModule\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] VuePageTransition.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-4c22b934\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-4c22b934\", Component.options)\n  }\n})()}\n\nmodule.exports = Component.exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWU/NjJjYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxtQkFBTyxDQUFDLENBQXVSOztBQUUvUixnQkFBZ0IsbUJBQU8sQ0FBQyxDQUF5RDtBQUNqRjtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxDQUF1RztBQUNqSDtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxDQUFtSztBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLElBQUksS0FBVSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MCxcXFwicmVtb3ZlXFxcIjp0cnVlfSFjc3MtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGMyMmI5MzQmc2NvcGVkPXRydWUhc2Fzcy1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlUGFnZVRyYW5zaXRpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRjMjJiOTM0IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNGMyMmI5MzRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9vcmxhbmRvL0Rlc2t0b3AvY29udHJpYnV0aW9ucy92dWUtcGFnZS10cmFuc2l0aW9ucy9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWdWVQYWdlVHJhbnNpdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGMyMmI5MzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YzIyYjkzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__[\"install\"] = install;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue__);\n/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, \"VuePageTransition\", function() { return __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default.a; });\n\n\n// Install the components\nfunction install(Vue) {\n  Vue.component('vue-page-transition', __WEBPACK_IMPORTED_MODULE_0__components_VuePageTransition_vue___default.a);\n}\n\n// Expose the components\n\n\n// Plugin\nconst plugin = {\n  /* eslint-disable no-undef */\n  version: \"0.2.1\",\n  install\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\n\n// Auto-install\nlet GlobalVue = null;\nif (typeof window !== 'undefined') {\n  GlobalVue = window.Vue;\n} else if (typeof global !== 'undefined') {\n  GlobalVue = global.Vue;\n}\nif (GlobalVue) {\n  GlobalVue.use(plugin);\n}\n/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwiVnVlUGFnZVRyYW5zaXRpb24iLCJwbHVnaW4iLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkdsb2JhbFZ1ZSIsIndpbmRvdyIsImdsb2JhbCIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ08sU0FBU0EsT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDNUJBLE1BQUlDLFNBQUosQ0FBYyxxQkFBZCxFQUFxQ0MseUVBQXJDO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFJQTtBQUNBLE1BQU1DLFNBQVM7QUFDYjtBQUNBQyxXQUFTQyxPQUZJO0FBR2JOO0FBSGEsQ0FBZjs7QUFNZUkscUVBQWY7O0FBRUE7QUFDQSxJQUFJRyxZQUFZLElBQWhCO0FBQ0EsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRCxjQUFZQyxPQUFPUCxHQUFuQjtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU9RLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDeENGLGNBQVlFLE9BQU9SLEdBQW5CO0FBQ0Q7QUFDRCxJQUFJTSxTQUFKLEVBQWU7QUFDYkEsWUFBVUcsR0FBVixDQUFjTixNQUFkO0FBQ0QsQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZVBhZ2VUcmFuc2l0aW9uIGZyb20gJy4vY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWUnXG5cbi8vIEluc3RhbGwgdGhlIGNvbXBvbmVudHNcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgVnVlLmNvbXBvbmVudCgndnVlLXBhZ2UtdHJhbnNpdGlvbicsIFZ1ZVBhZ2VUcmFuc2l0aW9uKVxufVxuXG4vLyBFeHBvc2UgdGhlIGNvbXBvbmVudHNcbmV4cG9ydCB7XG4gIFZ1ZVBhZ2VUcmFuc2l0aW9uLFxufVxuXG4vLyBQbHVnaW5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgdmVyc2lvbjogVkVSU0lPTixcbiAgaW5zdGFsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IEdsb2JhbFZ1ZSA9IG51bGxcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBHbG9iYWxWdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIEdsb2JhbFZ1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChHbG9iYWxWdWUpIHtcbiAgR2xvYmFsVnVlLnVzZShwbHVnaW4pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vue-page-transition',\n  props: ['name'],\n  data() {\n    return {\n      transition: 'fade',\n      mode: 'out-in'\n    };\n  },\n  created() {\n    this.$router.beforeEach((to, from, next) => {\n      this.transition = to.meta.transition ? to.meta.transition : this.$props.name;\n\n      next();\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVnVlUGFnZVRyYW5zaXRpb24udnVlP2E3YTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQSw2QkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFGQTtBQUlBLEdBUkE7QUFTQTtBQUNBO0FBQ0EsNkNBQ0Esa0JBREEsR0FFQSxnQkFGQTs7QUFJQTtBQUNBLEtBTkE7QUFPQTtBQWpCQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx0cmFuc2l0aW9uXG4gICAgICA6bmFtZT1cInRyYW5zaXRpb25cIlxuICAgICAgOm1vZGU9XCJtb2RlXCJcbiAgICA+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC90cmFuc2l0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXRvcFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXJpZ2h0XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktYm90dG9tXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktbGVmdFwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd2dWUtcGFnZS10cmFuc2l0aW9uJyxcbiAgcHJvcHM6IFsnbmFtZSddLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxuICAgICAgbW9kZTogJ291dC1pbicsXG4gICAgfVxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRvLm1ldGEudHJhbnNpdGlvblxuICAgICAgICA/IHRvLm1ldGEudHJhbnNpdGlvblxuICAgICAgICA6IHRoaXMuJHByb3BzLm5hbWVcblxuICAgICAgbmV4dCgpXG4gICAgfSlcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4vLyBmYWRlXG5AaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMvZmFkZS9mYWRlJztcbkBpbXBvcnQgJy4uL3N0eWxlcy90cmFuc2l0aW9ucy9mYWRlL2ZhZGUtaW4tZG93bic7XG5AaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMvZmFkZS9mYWRlLWluLXJpZ2h0JztcbkBpbXBvcnQgJy4uL3N0eWxlcy90cmFuc2l0aW9ucy9mYWRlL2ZhZGUtaW4tdXAnO1xuQGltcG9ydCAnLi4vc3R5bGVzL3RyYW5zaXRpb25zL2ZhZGUvZmFkZS1pbi1sZWZ0JztcblxuLy8gem9vbVxuQGltcG9ydCAnLi4vc3R5bGVzL3RyYW5zaXRpb25zL3pvb20vem9vbSc7XG5cbi8vIGZsaXBcbkBpbXBvcnQgJy4uL3N0eWxlcy90cmFuc2l0aW9ucy9mbGlwL2ZsaXAteCc7XG5AaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMvZmxpcC9mbGlwLXknO1xuXG4vLyBzcGxhc2hcbkBpbXBvcnQgJy4uL3N0eWxlcy90cmFuc2l0aW9ucy9zcGxhc2gvc3BsYXNoLWRvd24nO1xuQGltcG9ydCAnLi4vc3R5bGVzL3RyYW5zaXRpb25zL3NwbGFzaC9zcGxhc2gtcmlnaHQnO1xuQGltcG9ydCAnLi4vc3R5bGVzL3RyYW5zaXRpb25zL3NwbGFzaC9zcGxhc2gtdXAnO1xuQGltcG9ydCAnLi4vc3R5bGVzL3RyYW5zaXRpb25zL3NwbGFzaC9zcGxhc2gtbGVmdCc7XG48L3N0eWxlPlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVnVlUGFnZVRyYW5zaXRpb24udnVlPzEzZWQ0M2UzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: \\n@import '../styles/transitions/splash/splash-down';\\n^\\n      File to import not found or unreadable: ../styles/transitions/splash/splash-down.\\n      in /Users/orlando/Desktop/contributions/vue-page-transitions/src/components/VuePageTransition.vue (line 54, column 1)\\n    at runLoaders (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/webpack/lib/NormalModule.js:192:19)\\n    at /Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.onRender [as callback] (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/sass-loader/index.js:273:13)\\n    at Object.<anonymous> (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/async/dist/async.js:2271:31)\\n    at Object.callback (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/async/dist/async.js:969:16)\\n    at options.error (/Users/orlando/Desktop/contributions/vue-page-transitions/node_modules/node-sass/lib/index.js:294:32)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI0LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  scopeId,\n  cssModules\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  // inject cssModules\n  if (cssModules) {\n    var computed = options.computed || (options.computed = {})\n    Object.keys(cssModules).forEach(function (key) {\n      var module = cssModules[key]\n      computed[key] = function () { return module }\n    })\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', [_c('transition', {\n    attrs: {\n      \"name\": _vm.transition,\n      \"mode\": _vm.mode\n    }\n  }, [_vm._t(\"default\")], 2), _vm._v(\" \"), _c('div', {\n    staticClass: \"overlay-top\"\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"overlay-right\"\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"overlay-bottom\"\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"overlay-left\"\n  })], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-4c22b934\", module.exports)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWU/NTBiNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsSUFBSSxLQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0udHJhbnNpdGlvbixcbiAgICAgIFwibW9kZVwiOiBfdm0ubW9kZVxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvdmVybGF5LXRvcFwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJsYXktcmlnaHRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvdmVybGF5LWJvdHRvbVwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJsYXktbGVmdFwiXG4gIH0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGMyMmI5MzRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjMjJiOTM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WdWVQYWdlVHJhbnNpdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
});