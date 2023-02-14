(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _utils_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/export */ "./src/utils/export.js");
/* harmony import */ var _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar.vue */ "./src/components/NavBar.vue");
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons/chevron_up.svg */ "./src/assets/icons/chevron_up.svg");
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChevronUpIcon: (_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5___default())
  },
  data: function () {
    return {
      forgetAllDappsDone: false,
      showChangeLocaleList: false
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork', 'activeWalletId', 'injectEthereum']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['analyticsEnabled']),
    appVersion() {
      return _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
    },
    localeOptions() {
      var _this$locales;
      return (((_this$locales = this.locales) === null || _this$locales === void 0 ? void 0 : _this$locales.filter(i => i !== this.currentLocale)) || []).map(l => ({
        code: l,
        label: this.$t(`common.localesLabels.${l}`)
      })).sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      });
    },
    currentLocaleLabel() {
      return this.$t(`common.localesLabels.${this.currentLocale}`);
    }
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['enableEthereumInjection', 'disableEthereumInjection', 'setAnalyticsResponse', 'forgetDappConnections']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('app', ['initializeAnalytics', 'setLocalePreference', 'trackAnalytics']),
    toggleInjectEthereum(enable) {
      if (enable) {
        this.enableEthereumInjection();
      } else {
        this.disableEthereumInjection();
      }
    },
    async setAnalyticsEnable(enable) {
      await this.setAnalyticsResponse({
        accepted: enable
      });
      if (enable) {
        await this.initializeAnalytics();
      }
      this.trackAnalytics({
        event: 'Analytics Updated',
        properties: {
          walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_1__["version"],
          category: 'Settings',
          action: 'Analytics toggle button on/off',
          label: `${enable}`
        }
      });
    },
    async downloadLogs() {
      const logs = await Object(_utils_export__WEBPACK_IMPORTED_MODULE_2__["getWalletStateLogs"])();
      Object(_utils_export__WEBPACK_IMPORTED_MODULE_2__["downloadFile"])({
        filename: 'Balance Wallet Logs.json',
        type: 'application/javascript;charset=utf-8;',
        content: logs
      });
      this.trackAnalytics({
        event: 'User Downloaded wallet logs',
        properties: {
          walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_1__["version"],
          category: 'Settings',
          action: 'Wallet Logs Accessed'
        }
      });
    },
    async forgetAllDappConnections() {
      this.trackAnalytics({
        event: 'User clicked on Forgot all Dapp Connections under settings',
        properties: {
          walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_1__["version"],
          category: 'Settings',
          action: 'Forgot all Dapp Connections'
        }
      });
      this.forgetAllDappsDone = false;
      await this.forgetDappConnections();
      this.forgetAllDappsDone = true;
      setTimeout(() => {
        this.forgetAllDappsDone = false;
      }, 4000);
    },
    async onChangeLocale(locale) {
      await this.changeLocale(locale);
      await this.setLocalePreference({
        locale
      });
      this.hideChangeLocale();
    },
    toogleChangeLocale() {
      this.showChangeLocaleList = !this.showChangeLocaleList;
    },
    showChangeLocale() {
      this.showChangeLocaleList = true;
    },
    hideChangeLocale() {
      this.showChangeLocaleList = false;
    }
  },
  created() {
    this.forgetAllDappsDone = false;
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=template&id=53cc84dd&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Settings.vue?vue&type=template&id=53cc84dd& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "view-container"
  }, [_c("NavBar", {
    attrs: {
      showMenu: "true",
      showBack: "true",
      backPath: "/wallet",
      backLabel: _vm.$t("common.overview")
    }
  }, [_c("span", {
    staticClass: "wallet_header"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("pages.settings.settings")))])])]), _c("div", {
    staticClass: "settings"
  }, [_c("div", {
    staticClass: "setting-item",
    attrs: {
      id: "settings_item_default_wallet"
    }
  }, [_c("div", {
    staticClass: "setting-item_title flex-fill mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.title")) + " "), _c("span", {
    staticClass: "setting-item_sub"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.description")) + " ")])]), _c("div", {
    staticClass: "setting-item_control",
    attrs: {
      id: "default_web3_wallet_toggle_button"
    }
  }, [_c("toggle-button", {
    attrs: {
      "css-colors": true,
      value: _vm.injectEthereum
    },
    on: {
      change: e => _vm.toggleInjectEthereum(e.value)
    }
  })], 1)]), _c("div", {
    staticClass: "setting-item",
    attrs: {
      id: "forgetAllDappsDone"
    }
  }, [_c("div", {
    staticClass: "setting-item_title flex-fill mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.dappConnections")) + " "), _c("span", {
    staticClass: "setting-item_sub"
  }, [_vm._v(_vm._s(_vm.$t("pages.settings.dappConnectionsSub")))])]), _c("div", {
    staticClass: "setting-item_control"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: {
        trigger: "manual",
        content: _vm.$t("pages.settings.done"),
        hideOnTargetClick: false,
        show: _vm.forgetAllDappsDone
      },
      expression: "{\n            trigger: 'manual',\n            content: $t('pages.settings.done'),\n            hideOnTargetClick: false,\n            show: forgetAllDappsDone\n          }"
    }],
    staticClass: "btn btn-outline-clear",
    attrs: {
      id: "forget_all_connections_button"
    },
    on: {
      click: _vm.forgetAllDappConnections
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.forgetAllConnections")) + " ")])])]), _c("div", {
    staticClass: "setting-item",
    attrs: {
      id: "settings_item_default_wallet_analytics"
    }
  }, [_c("div", {
    staticClass: "setting-item_title flex-fill mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.analytics")) + " "), _c("span", {
    staticClass: "setting-item_sub"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.analyticsSub")) + " ")])]), _c("div", {
    staticClass: "setting-item_control",
    attrs: {
      id: "analytics_toggle_button"
    }
  }, [_c("toggle-button", {
    attrs: {
      "css-colors": true,
      value: _vm.analyticsEnabled
    },
    on: {
      change: e => _vm.setAnalyticsEnable(e.value)
    }
  })], 1)]), _c("div", {
    staticClass: "setting-item"
  }, [_c("div", {
    staticClass: "setting-item_title flex-fill mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.locale")) + " ")]), _c("div", {
    staticClass: "setting-item_control"
  }, [_c("div", {
    staticClass: "dropdown-list",
    on: {
      click: function ($event) {
        $event.stopPropagation();
        return _vm.toogleChangeLocale.apply(null, arguments);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.currentLocaleLabel) + " "), _vm.showChangeLocaleList ? _c("ChevronUpIcon") : _c("ChevronDownIcon"), _vm.showChangeLocaleList ? _c("ul", {
    directives: [{
      name: "click-away",
      rawName: "v-click-away",
      value: _vm.hideChangeLocale,
      expression: "hideChangeLocale"
    }],
    staticClass: "menu_list locale-options"
  }, _vm._l(_vm.localeOptions, function (locale) {
    return _c("li", {
      key: locale.code,
      on: {
        click: function ($event) {
          return _vm.onChangeLocale(locale.code);
        }
      }
    }, [_vm._v(" " + _vm._s(locale.label) + " ")]);
  }), 0) : _vm._e()], 1)])]), _c("div", {
    staticClass: "setting-item",
    attrs: {
      id: "settings_item_wallet_logs"
    }
  }, [_c("div", {
    staticClass: "setting-item_title flex-fill mb-2"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.walletLogs")) + " "), _c("span", {
    staticClass: "setting-item_sub"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.walletLogsSub")) + " ")])]), _c("div", {
    staticClass: "setting-item_control"
  }, [_c("button", {
    staticClass: "btn btn-outline-clear",
    attrs: {
      id: "download_logs_button"
    },
    on: {
      click: _vm.downloadLogs
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.downloadLogs")) + " ")])])]), _vm._m(0), _vm._m(1), _c("div", {
    staticClass: "settings-footer"
  }, [_c("div", {
    attrs: {
      id: "settings_app_version"
    }
  }, [_c("router-link", {
    attrs: {
      to: "/settings/experiments"
    }
  }, [_c("span", {
    staticClass: "text-muted"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.settings.version")) + " 0.1.2 ")])])], 1)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "settings-footer"
  }, [_c("div", {
    attrs: {
      id: "settings_app_version"
    }
  }, [_c("a", {
    staticClass: "docs",
    attrs: {
      rel: "stylesheet",
      href: "https://docs.wallet-balancenetwork.io/guide/extension-wallet-privacy-policy.html#interpretation"
    }
  }, [_vm._v(" Docs ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "settings-footer"
  }, [_c("div", {
    attrs: {
      id: "settings_app_version"
    }
  }, [_c("a", {
    attrs: {
      href: "mailto:support@balancenetwork.io"
    }
  }, [_vm._v(" support@balancenetwork.io ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.settings {\n  overflow-y: auto;\n}\n.settings .setting-item {\n  border-bottom: 1px solid #d9dfe5;\n  padding: 16px 20px;\n  position: relative;\n}\n.settings .setting-item_title {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  color: #000d35;\n}\n.settings .setting-item_control {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.settings .setting-item_sub {\n  display: block;\n  font-size: 0.75rem;\n  color: #747e8d;\n  font-weight: 300;\n  line-height: 18px;\n}\n.settings .settings-footer {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.settings .locale-options {\n  min-width: 180px;\n  border: 1px solid #d9dfe5;\n}\n.settings .locale-options li {\n  justify-content: flex-start;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3de657ac", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/utils/export.js":
/*!*****************************!*\
  !*** ./src/utils/export.js ***!
  \*****************************/
/*! exports provided: getWalletStateLogs, downloadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletStateLogs", function() { return getWalletStateLogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);

const getWalletStateLogs = async () => {
  return new Promise(resolve => {
    chrome.storage.local.get(['balance-wallet'], storage => {
      const state = storage['balance-wallet'];

      // Remove key related properties
      delete state.encryptedWallets;
      delete state.keySalt;

      // TODO: Add more data such as recent errors
      const metadata = {
        version: _package_json__WEBPACK_IMPORTED_MODULE_0__["version"]
      };
      const logs = {
        state,
        metadata
      };
      resolve(JSON.stringify(logs, null, 2));
    });
  });
};
const downloadFile = ({
  filename,
  type,
  content
}) => {
  const blob = new Blob([content], {
    type
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  link.click();
  link.remove();
};

/***/ }),

/***/ "./src/views/Settings.vue":
/*!********************************!*\
  !*** ./src/views/Settings.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=53cc84dd& */ "./src/views/Settings.vue?vue&type=template&id=53cc84dd&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./src/views/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& */ "./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Settings.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&":
/*!******************************************************************************!*\
  !*** ./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=style&index=0&id=53cc84dd&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_53cc84dd_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Settings.vue?vue&type=template&id=53cc84dd&":
/*!***************************************************************!*\
  !*** ./src/views/Settings.vue?vue&type=template&id=53cc84dd& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=53cc84dd& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Settings.vue?vue&type=template&id=53cc84dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_53cc84dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=41.js.map