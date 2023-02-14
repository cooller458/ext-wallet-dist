(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function () {
    return {
      loading: false,
      accepted: true
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
      analyticsOptInModalOpen: state => state.app.analyticsOptInModalOpen,
      analyticsAccepted: state => {
        var _state$analytics;
        return (_state$analytics = state.analytics) === null || _state$analytics === void 0 ? void 0 : _state$analytics.acceptedDate;
      }
    }),
    open() {
      return this.analyticsOptInModalOpen;
    }
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('app', ['setAnalyticsOptInModalOpen', 'initializeAnalytics']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['setAnalyticsResponse']),
    close(payload) {
      this.accepted = null;
      this.setAnalyticsOptInModalOpen({
        open: false
      });
      if (payload === 'nextStep') {
        this.$emit('goToSetup');
      }
    },
    async accept() {
      this.loading = true;
      this.accepted = true;
      await this.setAnalyticsResponse({
        accepted: this.accepted
      });
      await this.initializeAnalytics();
      this.loading = false;
    },
    async reject() {
      this.loading = true;
      this.accepted = false;
      await this.setAnalyticsResponse({
        accepted: this.accepted
      });
      this.loading = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var _components_BuyCrypto_BuyCryptoProviderBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BuyCrypto/BuyCryptoProviderBrand */ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
    BuyCryptoProviderBrand: _components_BuyCrypto_BuyCryptoProviderBrand__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])({
      open: state => state.app.buyCryptoModalOpen,
      modalData: state => state.app.buyCryptoModalData
    })
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('app', ['setBuyCryptoModalOpen', 'openTransakWidgetTab', 'openOnramperWidgetTab']),
    close() {
      this.setBuyCryptoModalOpen({
        open: false
      });
    },
    openProviderTab(provider) {
      if (!this.modalData.chain || !this.modalData.asset || !this.modalData.address) {
        this.$router.push(`/assets/buy?provider=${provider}`);
      } else {
        if (provider === 'transak') {
          this.openTransakWidgetTab({
            ...this.modalData
          });
        } else if (provider === 'onramper') {
          this.openOnramperWidgetTab({
            ...this.modalData
          });
        }
      }
      this.setBuyCryptoModalOpen({
        open: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var _assets_icons_receive_icon_primary_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/receive_icon_primary.svg */ "./src/assets/icons/receive_icon_primary.svg");
/* harmony import */ var _assets_icons_receive_icon_primary_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_receive_icon_primary_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BuyCrypto_BuyCryptoProviderBrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BuyCrypto/BuyCryptoProviderBrand */ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
    BuyCryptoProviderBrand: _components_BuyCrypto_BuyCryptoProviderBrand__WEBPACK_IMPORTED_MODULE_3__["default"],
    ReceiveIconPrimary: (_assets_icons_receive_icon_primary_svg__WEBPACK_IMPORTED_MODULE_2___default())
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])({
      open: state => state.app.buyCryptoOverviewModalOpen
    })
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('app', ['setBuyCryptoOverviewModalOpen']),
    close() {
      this.setBuyCryptoOverviewModalOpen({
        open: false
      });
    },
    openSelectAccount(provider) {
      this.setBuyCryptoOverviewModalOpen({
        open: false
      });
      this.$router.push(`/assets/buy?provider=${provider}`);
    },
    receive() {
      this.setBuyCryptoOverviewModalOpen({
        open: false
      });
      this.$router.push('/assets/receive');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_onramper_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/onramper-logo.png */ "./src/assets/icons/onramper-logo.png");
/* harmony import */ var _assets_icons_onramper_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_onramper_logo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_transak_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/transak-logo.png */ "./src/assets/icons/transak-logo.png");
/* harmony import */ var _assets_icons_transak_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_transak_logo_png__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['provider'],
  computed: {
    logo() {
      const logos = {
        onramper: _assets_icons_onramper_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a,
        transak: _assets_icons_transak_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a
      };
      return logos[this.provider];
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/GlobalModals.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AnalyticsOptInModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/AnalyticsOptInModal.vue */ "./src/components/AnalyticsOptInModal.vue");
/* harmony import */ var _components_WhatsNewModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/WhatsNewModal.vue */ "./src/components/WhatsNewModal.vue");
/* harmony import */ var _components_BuyCrypto_BuyCryptoModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BuyCrypto/BuyCryptoModal.vue */ "./src/components/BuyCrypto/BuyCryptoModal.vue");
/* harmony import */ var _components_BuyCrypto_BuyCryptoOverviewModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BuyCrypto/BuyCryptoOverviewModal.vue */ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AnalyticsOptInModal: _components_AnalyticsOptInModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    WhatsNewModal: _components_WhatsNewModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BuyCryptoModal: _components_BuyCrypto_BuyCryptoModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BuyCryptoOverviewModal: _components_BuyCrypto_BuyCryptoOverviewModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_modal_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/modal_close.svg */ "./src/assets/icons/modal_close.svg");
/* harmony import */ var _assets_icons_modal_close_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_modal_close_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ModalClose: (_assets_icons_modal_close_svg__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    type: {
      type: String,
      default: 'modal-sm'
    },
    dialog: {
      type: String,
      default: 'modal-dialog-centered'
    },
    bodyClass: {
      type: String,
      default: 'modal-body'
    },
    closeOutside: {
      type: Boolean,
      default: false
    },
    isFullHeight: {
      type: Boolean,
      default: false
    },
    closeId: {
      type: String,
      required: false
    }
  },
  methods: {
    hasSlot(name) {
      return this.$slots[name];
    },
    close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WhatsNewModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var _components_icons_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons/Logo */ "./src/components/icons/Logo.vue");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! /package.json */ "./package.json", 1);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons/arrow_left.svg */ "./src/assets/icons/arrow_left.svg");
/* harmony import */ var _assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/arrow_right.svg */ "./src/assets/icons/arrow_right.svg");
/* harmony import */ var _assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    ArrowRightIcon: (_assets_icons_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    ArrowLeftIcon: (_assets_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    Logo: _components_icons_Logo__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function () {
    return {
      open: false,
      currentView: 1,
      hasClapped: false,
      loading: false
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])(['whatsNewModalVersion', 'termsAcceptedAt', 'unlockedAt']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('app', ['whatsNewModalContent']),
    appVersion() {
      return _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
    },
    carouselLines() {
      return this.whatsNewModalContent.length;
    }
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(['setWhatsNewModalVersion']),
    close() {
      this.open = false;
    }
  },
  created() {
    if (this.whatsNewModalVersion !== this.appVersion || Object({"NODE_ENV":"development","VUE_APP_AVALANCHE_MAINNET_NODE":"","VUE_APP_AVALANCHE_TESTNET_NODE":"","VUE_APP_DEFAULT_LOCALE":"en","VUE_APP_FIREBASE_API_KEY":"","VUE_APP_FIREBASE_APP_ID":"","VUE_APP_FIREBASE_AUTH_DOMAIN":"","VUE_APP_FIREBASE_DATABASE_URL":"","VUE_APP_FIREBASE_MEASUREMENT_ID":"","VUE_APP_FIREBASE_MESSAGING_SENDER_ID":"","VUE_APP_FIREBASE_PROJECT_ID":"","VUE_APP_FIREBASE_STORAGE_BUCKET":"","VUE_APP_LEDGER_BRIDGE_URL":"https://liquality.github.io/hw-web-bridge-app/dist/0.1.0","VUE_APP_MAX_ERROR_LOG_SIZE":"100","VUE_APP_NEAR_MAINNET_URL":"","VUE_APP_NPM_PACKAGE_VERSION":"0_81_0","VUE_APP_ONRAMPER_API_KEY":"","VUE_APP_ONRAMPER_WIDGET_URL":"https://widget.onramper.com/","VUE_APP_REPORT_TARGETS":"Sentry,Console","VUE_APP_SENTRY_DSN":"https://2c52b9d6e67741cf9d4eabe32369827a@o241807.ingest.sentry.io/5444900","VUE_APP_SOLANA_MAINNET_URL":"https://red-sleek-rain.solana-mainnet.discover.quiknode.pro/fc112deb1e0228d09d0d8c12b8de5a601d251d80","VUE_APP_SOVRYN_RPC_URL_MAINNET":"https://mainnet.sovryn.app/rpc","VUE_APP_SOVRYN_RPC_URL_TESTNET":"https://testnet.sovryn.app/rpc","VUE_APP_SUPPORTED_LOCALES":"en,es,zh,pt,ph,cb","VUE_APP_TERRA_MAINNET_URL":"","VUE_APP_TRANSAK_API_KEY":"","VUE_APP_TRANSAK_WIDGET_URL":"","BASE_URL":"/"}).VUE_APP_SHOW_WHATS_NEW_ALWAYS) {
      this.open = true;
      this.setWhatsNewModalVersion({
        version: this.appVersion
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Logo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Logo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    color: {
      type: String,
      default: '#1D1E21'
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.open ? _c("Modal", {
    on: {
      close: _vm.close
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("div", {
          staticClass: "analytics-optin-title"
        }, [_vm._v(" " + _vm._s(_vm.$t("components.analyticsOptinModal.title")) + " ")])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "analytics-optin-options"
        }, [_c("div", {
          staticClass: "custom-control custom-radio"
        }, [_c("input", {
          staticClass: "custom-control-input",
          attrs: {
            type: "radio",
            name: "optin_anaylitics_option",
            id: "optin_anaylitics_accept",
            autocomplete: "off",
            disabled: _vm.loading
          },
          domProps: {
            checked: _vm.accepted === true
          },
          on: {
            click: _vm.accept
          }
        }), _c("label", {
          staticClass: "custom-control-label",
          attrs: {
            for: "optin_anaylitics_accept"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("components.analyticsOptinModal.analitycsAccept")) + " ")])]), _c("div", {
          staticClass: "custom-control custom-radio"
        }, [_c("input", {
          staticClass: "custom-control-input",
          attrs: {
            type: "radio",
            name: "optin_anaylitics_option",
            id: "optin_anaylitics_reject",
            autocomplete: "off",
            disabled: _vm.loading
          },
          domProps: {
            checked: _vm.accepted === false
          },
          on: {
            click: _vm.reject
          }
        }), _c("label", {
          staticClass: "custom-control-label",
          attrs: {
            for: "optin_anaylitics_reject"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("components.analyticsOptinModal.analitycsReject")) + " ")])])]), _c("button", {
          staticClass: "btn btn-primary btn-lg btn-block btn-icon mt-3",
          attrs: {
            id: "analytics-ok-close-button",
            disabled: _vm.loading || _vm.accepted === null
          },
          on: {
            click: function ($event) {
              return _vm.close("nextStep");
            }
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("common.ok")) + " ")])];
      },
      proxy: true
    }], null, false, 1299112320)
  }, [[_c("div", {
    staticClass: "analytics-optin-message"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.analyticsOptinModal.message")) + " ")])]], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("Modal", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    attrs: {
      dialog: "modal-dialog-bottom"
    },
    on: {
      close: _vm.close
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("h6", [_vm._v(_vm._s(_vm.$t("components.buyCrypto.buyCrypto")))])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "footer"
        }, [_c("p", {
          staticClass: "secondary-message"
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.feeAndLimitMessage")) + " ")])])];
      },
      proxy: true
    }])
  }, [[_c("div", {
    staticClass: "provider"
  }, [_c("BuyCryptoProviderBrand", {
    attrs: {
      provider: "transak"
    }
  }), _c("p", {
    staticClass: "main-message"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.transakInstructions")) + " ")]), _c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      id: "open_transak_tab_btn"
    },
    on: {
      click: function ($event) {
        return _vm.openProviderTab("transak");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.continueWithTransak")) + " ")])], 1), _c("div", {
    staticClass: "provider"
  }, [_c("BuyCryptoProviderBrand", {
    attrs: {
      provider: "onramper"
    }
  }), _c("p", {
    staticClass: "main-message"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.onramperDescription")) + " ")]), _c("button", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      id: "open_transak_tab_btn"
    },
    on: {
      click: function ($event) {
        return _vm.openProviderTab("onramper");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.continueWithOnramper")) + " ")])], 1)]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("Modal", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    on: {
      close: _vm.close
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("h6", [_vm._v(_vm._s(_vm.$t("components.buyCrypto.gettingStarted")))])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "footer"
        }, [_c("h6", {
          staticClass: "footer-title"
        }, [_vm._v(_vm._s(_vm.$t("components.buyCrypto.buyCrypto")))]), _c("div", {
          staticClass: "provider"
        }, [_c("BuyCryptoProviderBrand", {
          attrs: {
            provider: "transak"
          }
        }), _c("p", {
          staticClass: "first-message"
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.transakInstructions")) + " ")]), _c("button", {
          staticClass: "btn btn-outline-primary btn-lg",
          attrs: {
            id: "open_transak_tab_btn"
          },
          on: {
            click: function ($event) {
              return _vm.openSelectAccount("transak");
            }
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.buyCryptoWithTransak")) + " ")])], 1), _c("div", {
          staticClass: "provider"
        }, [_c("BuyCryptoProviderBrand", {
          attrs: {
            provider: "onramper"
          }
        }), _c("p", {
          staticClass: "first-message"
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.onramperDescription")) + " ")]), _c("button", {
          staticClass: "btn btn-outline-primary btn-lg",
          attrs: {
            id: "open_transak_tab_btn"
          },
          on: {
            click: function ($event) {
              return _vm.openSelectAccount("onramper");
            }
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.buyCryptoWithOnramper")) + " ")])], 1), _c("p", {
          staticClass: "third-message"
        }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.feeAndLimitMessage")) + " ")])])];
      },
      proxy: true
    }])
  }, [[_c("div", {
    staticClass: "top"
  }, [_c("p", {
    staticClass: "first-message"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.recommendations")) + " ")]), _c("div", {
    staticClass: "receive-action",
    on: {
      click: _vm.receive
    }
  }, [_c("ReceiveIconPrimary", {
    staticClass: "receive-icon"
  }), _vm._v(" " + _vm._s(_vm.$t("common.receive")) + " ")], 1)]), _c("p", {
    staticClass: "second-message"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.trustedPartnerMessage")) + " ")])]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("img", {
    staticClass: "logo",
    attrs: {
      src: _vm.logo
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("AnalyticsOptInModal"), _c("WhatsNewModal"), _c("BuyCryptoModal"), _c("BuyCryptoOverviewModal")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=template&id=701ac82d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=template&id=701ac82d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "modal-backdrop"
  }), _c("div", {
    staticClass: "modal d-flex",
    attrs: {
      tabindex: "-1",
      role: "dialog"
    },
    on: {
      "&click": function ($event) {
        _vm.closeOutside ? _vm.close() : () => {};
      }
    }
  }, [_c("div", {
    class: {
      "modal-dialog": true,
      [_vm.dialog]: true,
      [_vm.type]: true,
      "full-height": _vm.isFullHeight
    },
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    class: ["modal-content", _vm.isFullHeight ? "full-height" : ""]
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_vm.hasSlot("header") ? _c("div", {
    staticClass: "modal-header-container"
  }, [_vm._t("header")], 2) : _vm.hasSlot("title") ? _c("h5", {
    staticClass: "modal-title"
  }, [_vm._t("title")], 2) : _vm._e(), _c("ModalClose", {
    staticClass: "modal-close",
    attrs: {
      id: _vm.closeId
    },
    on: {
      click: _vm.close
    }
  })], 1), _c("div", {
    class: _vm.bodyClass
  }, [_vm._t("default")], 2), _vm.hasSlot("footer") ? _c("div", {
    staticClass: "modal-footer"
  }, [_vm._t("footer")], 2) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.open ? _c("Modal", {
    attrs: {
      "body-class": "",
      type: "modal-lg",
      isFullHeight: "",
      closeId: "wats_new_close_btn"
    },
    on: {
      close: _vm.close
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("Logo")];
      },
      proxy: true
    }, _vm.whatsNewModalContent.length > 1 ? {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "footer"
        }, [_c("div", {
          staticClass: "carousel"
        }, _vm._l(_vm.carouselLines, function (line, index) {
          return _c("span", {
            key: line,
            staticClass: "carousel-line",
            class: index + 1 == _vm.currentView ? "active" : "",
            on: {
              click: function ($event) {
                _vm.currentView = index + 1;
              }
            }
          });
        }), 0), _c("div", {
          staticClass: "footer-buttons"
        }, [_c("button", {
          staticClass: "icon-wrapper",
          class: _vm.currentView === _vm.whatsNewModalContent.length ? "active" : "",
          attrs: {
            disabled: _vm.currentView === 1
          },
          on: {
            click: function ($event) {
              _vm.currentView -= 1;
            }
          }
        }, [_c("ArrowLeftIcon")], 1), _c("button", {
          staticClass: "icon-wrapper",
          class: _vm.currentView < _vm.whatsNewModalContent.length ? "active" : "",
          attrs: {
            disabled: _vm.currentView === _vm.whatsNewModalContent.length
          },
          on: {
            click: function ($event) {
              _vm.currentView += 1;
            }
          }
        }, [_c("ArrowRightIcon")], 1)])])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("h6", {
    staticClass: "modal-header mt-4 text-uppercase"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.whatsNew.title")) + " | v " + _vm._s(_vm.appVersion) + " ")]), _vm._l(_vm.whatsNewModalContent, function (item) {
    return _c("div", {
      key: item.page
    }, [item.page == _vm.currentView ? _c("div", [_c("h2", {
      staticClass: "page-title"
    }, [_vm._v(_vm._s(item.title))]), item.description ? _c("p", {
      staticClass: "mt-3",
      domProps: {
        innerHTML: _vm._s(item.description)
      }
    }) : _vm._e(), item.content ? _c("ul", _vm._l(item.content, function (listItem, index) {
      return _c("li", {
        key: index,
        domProps: {
          innerHTML: _vm._s(listItem)
        }
      });
    }), 0) : _vm._e()]) : _vm._e()]);
  })], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      width: "27",
      height: "9",
      viewBox: "0 0 27 9",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [_c("path", {
    attrs: {
      d: "M1.41603 1.27661C1.40874 1.28347 1.40146 1.29034 1.39418 1.2972C0.656199 2.00116 0.211229 2.87542 0.0592632 3.78461C0.0205269 4.01573 0.000662159 4.24903 0 4.48234V4.50916C0.000662159 4.73342 0.0188715 4.95767 0.054297 5.17975C0.165209 5.87186 0.445633 6.54463 0.895239 7.13818C1.04389 7.33436 1.21109 7.52213 1.39616 7.69898C1.40278 7.70521 1.4094 7.71114 1.41603 7.71738C1.81829 8.09665 2.26756 8.38828 2.74465 8.59757C4.50169 9.36671 6.64046 9.0099 8.24023 7.72767C8.24421 7.72424 8.24851 7.72081 8.25281 7.71738C10.0589 6.26142 11.7162 4.9427 13.5001 4.9427C15.2836 4.9427 16.941 6.26142 18.747 7.71738C19.2377 8.11256 19.779 8.42072 20.3448 8.63562C21.0854 8.91726 21.8678 9.03922 22.6323 8.98869C23.7073 8.91789 24.7465 8.50618 25.5842 7.71738C25.5908 7.71114 25.5971 7.70521 25.6034 7.69898C25.7891 7.52213 25.9563 7.33436 26.1049 7.13818C26.5545 6.54463 26.835 5.87186 26.9456 5.17975C27.0197 4.71782 27.0181 4.24654 26.9409 3.78461C26.789 2.87542 26.3437 2.00116 25.606 1.2972C25.5984 1.29034 25.5914 1.28316 25.5838 1.27661C24.7465 0.487814 23.7073 0.079223 22.6323 0.0106047C21.8668 -0.0383639 21.0835 0.0851491 20.3425 0.36586C19.7777 0.580449 19.2367 0.8858 18.747 1.27661C16.934 2.72352 15.2926 4.0516 13.5001 4.0516C11.7076 4.0516 10.0661 2.72352 8.25281 1.27661C8.2495 1.27381 8.24652 1.27131 8.24321 1.26882C7.20462 0.443524 5.93791 0 4.69636 0C4.0246 0 3.36046 0.129751 2.74332 0.39861C2.26657 0.606648 1.81796 0.897653 1.41603 1.27661Z",
      fill: _vm.color
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-53e5defb] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-53e5defb] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-53e5defb] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-53e5defb] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-53e5defb] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-53e5defb] {\n  text-align: left !important;\n}\n.text-right[data-v-53e5defb] {\n  text-align: right !important;\n}\n.text-center[data-v-53e5defb] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-53e5defb] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-53e5defb] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-53e5defb] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-53e5defb] {\n    text-align: left !important;\n}\n.text-md-right[data-v-53e5defb] {\n    text-align: right !important;\n}\n.text-md-center[data-v-53e5defb] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-53e5defb] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-53e5defb] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-53e5defb] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-53e5defb] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-53e5defb] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-53e5defb] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-53e5defb] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-53e5defb] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-53e5defb] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-53e5defb] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-53e5defb] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-53e5defb] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-53e5defb] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-53e5defb] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-53e5defb] {\n  font-style: italic !important;\n}\n.text-white[data-v-53e5defb] {\n  color: #fff !important;\n}\n.text-primary[data-v-53e5defb] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-53e5defb]:hover, a.text-primary[data-v-53e5defb]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-53e5defb] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-53e5defb]:hover, a.text-secondary[data-v-53e5defb]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-53e5defb] {\n  color: #28a745 !important;\n}\na.text-success[data-v-53e5defb]:hover, a.text-success[data-v-53e5defb]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-53e5defb] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-53e5defb]:hover, a.text-info[data-v-53e5defb]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-53e5defb] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-53e5defb]:hover, a.text-warning[data-v-53e5defb]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-53e5defb] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-53e5defb]:hover, a.text-danger[data-v-53e5defb]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-53e5defb] {\n  color: #f8faff !important;\n}\na.text-light[data-v-53e5defb]:hover, a.text-light[data-v-53e5defb]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-53e5defb] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-53e5defb]:hover, a.text-dark[data-v-53e5defb]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-53e5defb] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-53e5defb] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-53e5defb] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-53e5defb] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-53e5defb] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-53e5defb] {\n  text-decoration: none !important;\n}\n.text-break[data-v-53e5defb] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-53e5defb] {\n  color: inherit !important;\n}\n.notification-content[data-v-53e5defb] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.notification-content .notification-text[data-v-53e5defb] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  width: 200px;\n}\n.btn[data-v-53e5defb] {\n  flex: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-1c4f617e] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-1c4f617e] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-1c4f617e] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-1c4f617e] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-1c4f617e] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-1c4f617e] {\n  text-align: left !important;\n}\n.text-right[data-v-1c4f617e] {\n  text-align: right !important;\n}\n.text-center[data-v-1c4f617e] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-1c4f617e] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-1c4f617e] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-1c4f617e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-1c4f617e] {\n    text-align: left !important;\n}\n.text-md-right[data-v-1c4f617e] {\n    text-align: right !important;\n}\n.text-md-center[data-v-1c4f617e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-1c4f617e] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-1c4f617e] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-1c4f617e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-1c4f617e] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-1c4f617e] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-1c4f617e] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-1c4f617e] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-1c4f617e] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-1c4f617e] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-1c4f617e] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-1c4f617e] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-1c4f617e] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-1c4f617e] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-1c4f617e] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-1c4f617e] {\n  font-style: italic !important;\n}\n.text-white[data-v-1c4f617e] {\n  color: #fff !important;\n}\n.text-primary[data-v-1c4f617e] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-1c4f617e]:hover, a.text-primary[data-v-1c4f617e]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-1c4f617e] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-1c4f617e]:hover, a.text-secondary[data-v-1c4f617e]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-1c4f617e] {\n  color: #28a745 !important;\n}\na.text-success[data-v-1c4f617e]:hover, a.text-success[data-v-1c4f617e]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-1c4f617e] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-1c4f617e]:hover, a.text-info[data-v-1c4f617e]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-1c4f617e] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-1c4f617e]:hover, a.text-warning[data-v-1c4f617e]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-1c4f617e] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-1c4f617e]:hover, a.text-danger[data-v-1c4f617e]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-1c4f617e] {\n  color: #f8faff !important;\n}\na.text-light[data-v-1c4f617e]:hover, a.text-light[data-v-1c4f617e]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-1c4f617e] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-1c4f617e]:hover, a.text-dark[data-v-1c4f617e]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-1c4f617e] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-1c4f617e] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-1c4f617e] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-1c4f617e] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-1c4f617e] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-1c4f617e] {\n  text-decoration: none !important;\n}\n.text-break[data-v-1c4f617e] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-1c4f617e] {\n  color: inherit !important;\n}\nh6[data-v-1c4f617e] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 30px;\n}\n.main-message[data-v-1c4f617e],\n.secondary-message[data-v-1c4f617e] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  color: #000d35;\n}\n.provider[data-v-1c4f617e] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.provider .btn[data-v-1c4f617e] {\n  margin-top: 20px;\n  width: 100%;\n  padding: 0.5rem 1.5rem;\n  border-radius: 22px;\n}\n.footer[data-v-1c4f617e] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-011be305] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-011be305] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-011be305] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-011be305] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-011be305] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-011be305] {\n  text-align: left !important;\n}\n.text-right[data-v-011be305] {\n  text-align: right !important;\n}\n.text-center[data-v-011be305] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-011be305] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-011be305] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-011be305] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-011be305] {\n    text-align: left !important;\n}\n.text-md-right[data-v-011be305] {\n    text-align: right !important;\n}\n.text-md-center[data-v-011be305] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-011be305] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-011be305] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-011be305] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-011be305] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-011be305] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-011be305] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-011be305] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-011be305] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-011be305] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-011be305] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-011be305] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-011be305] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-011be305] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-011be305] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-011be305] {\n  font-style: italic !important;\n}\n.text-white[data-v-011be305] {\n  color: #fff !important;\n}\n.text-primary[data-v-011be305] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-011be305]:hover, a.text-primary[data-v-011be305]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-011be305] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-011be305]:hover, a.text-secondary[data-v-011be305]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-011be305] {\n  color: #28a745 !important;\n}\na.text-success[data-v-011be305]:hover, a.text-success[data-v-011be305]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-011be305] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-011be305]:hover, a.text-info[data-v-011be305]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-011be305] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-011be305]:hover, a.text-warning[data-v-011be305]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-011be305] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-011be305]:hover, a.text-danger[data-v-011be305]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-011be305] {\n  color: #f8faff !important;\n}\na.text-light[data-v-011be305]:hover, a.text-light[data-v-011be305]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-011be305] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-011be305]:hover, a.text-dark[data-v-011be305]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-011be305] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-011be305] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-011be305] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-011be305] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-011be305] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-011be305] {\n  text-decoration: none !important;\n}\n.text-break[data-v-011be305] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-011be305] {\n  color: inherit !important;\n}\nh6[data-v-011be305] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 30px;\n}\n.top[data-v-011be305] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.receive-action[data-v-011be305] {\n  color: #9d4dfa;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1em;\n}\n.receive-action svg[data-v-011be305] {\n  height: 50px;\n}\n.receive-text[data-v-011be305] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  text-align: center;\n  letter-spacing: -0.08px;\n  color: #9d4dfa;\n}\n.first-message[data-v-011be305],\n.second-message[data-v-011be305],\n.third-message[data-v-011be305] {\n  margin-top: 1.2rem;\n}\n.first-message[data-v-011be305],\n.second-message[data-v-011be305] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 20px;\n  color: #000d35;\n}\n.second-message[data-v-011be305] {\n  margin-top: 20px;\n}\n.third-message[data-v-011be305] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: -0.08px;\n  color: #000d35;\n}\n.footer[data-v-011be305] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.footer .footer-title[data-v-011be305] {\n  margin-bottom: 20px;\n}\n.footer .provider[data-v-011be305] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.footer .btn[data-v-011be305] {\n  margin-top: 5px;\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-1cb72567] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-1cb72567] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-1cb72567] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-1cb72567] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-1cb72567] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-1cb72567] {\n  text-align: left !important;\n}\n.text-right[data-v-1cb72567] {\n  text-align: right !important;\n}\n.text-center[data-v-1cb72567] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-1cb72567] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-1cb72567] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-1cb72567] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-1cb72567] {\n    text-align: left !important;\n}\n.text-md-right[data-v-1cb72567] {\n    text-align: right !important;\n}\n.text-md-center[data-v-1cb72567] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-1cb72567] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-1cb72567] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-1cb72567] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-1cb72567] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-1cb72567] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-1cb72567] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-1cb72567] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-1cb72567] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-1cb72567] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-1cb72567] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-1cb72567] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-1cb72567] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-1cb72567] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-1cb72567] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-1cb72567] {\n  font-style: italic !important;\n}\n.text-white[data-v-1cb72567] {\n  color: #fff !important;\n}\n.text-primary[data-v-1cb72567] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-1cb72567]:hover, a.text-primary[data-v-1cb72567]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-1cb72567] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-1cb72567]:hover, a.text-secondary[data-v-1cb72567]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-1cb72567] {\n  color: #28a745 !important;\n}\na.text-success[data-v-1cb72567]:hover, a.text-success[data-v-1cb72567]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-1cb72567] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-1cb72567]:hover, a.text-info[data-v-1cb72567]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-1cb72567] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-1cb72567]:hover, a.text-warning[data-v-1cb72567]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-1cb72567] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-1cb72567]:hover, a.text-danger[data-v-1cb72567]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-1cb72567] {\n  color: #f8faff !important;\n}\na.text-light[data-v-1cb72567]:hover, a.text-light[data-v-1cb72567]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-1cb72567] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-1cb72567]:hover, a.text-dark[data-v-1cb72567]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-1cb72567] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-1cb72567] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-1cb72567] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-1cb72567] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-1cb72567] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-1cb72567] {\n  text-decoration: none !important;\n}\n.text-break[data-v-1cb72567] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-1cb72567] {\n  color: inherit !important;\n}\ndiv[data-v-1cb72567] {\n  display: flex;\n  align-items: center;\n}\ndiv .message[data-v-1cb72567] {\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 16px;\n  color: #646f85;\n}\ndiv .logo[data-v-1cb72567] {\n  margin-left: 5px;\n  height: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-1bcbbc99] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-1bcbbc99] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-1bcbbc99] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-1bcbbc99] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-1bcbbc99] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-1bcbbc99] {\n  text-align: left !important;\n}\n.text-right[data-v-1bcbbc99] {\n  text-align: right !important;\n}\n.text-center[data-v-1bcbbc99] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-1bcbbc99] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-1bcbbc99] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-1bcbbc99] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-1bcbbc99] {\n    text-align: left !important;\n}\n.text-md-right[data-v-1bcbbc99] {\n    text-align: right !important;\n}\n.text-md-center[data-v-1bcbbc99] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-1bcbbc99] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-1bcbbc99] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-1bcbbc99] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-1bcbbc99] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-1bcbbc99] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-1bcbbc99] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-1bcbbc99] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-1bcbbc99] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-1bcbbc99] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-1bcbbc99] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-1bcbbc99] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-1bcbbc99] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-1bcbbc99] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-1bcbbc99] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-1bcbbc99] {\n  font-style: italic !important;\n}\n.text-white[data-v-1bcbbc99] {\n  color: #fff !important;\n}\n.text-primary[data-v-1bcbbc99] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-1bcbbc99]:hover, a.text-primary[data-v-1bcbbc99]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-1bcbbc99] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-1bcbbc99]:hover, a.text-secondary[data-v-1bcbbc99]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-1bcbbc99] {\n  color: #28a745 !important;\n}\na.text-success[data-v-1bcbbc99]:hover, a.text-success[data-v-1bcbbc99]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-1bcbbc99] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-1bcbbc99]:hover, a.text-info[data-v-1bcbbc99]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-1bcbbc99] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-1bcbbc99]:hover, a.text-warning[data-v-1bcbbc99]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-1bcbbc99] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-1bcbbc99]:hover, a.text-danger[data-v-1bcbbc99]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-1bcbbc99] {\n  color: #f8faff !important;\n}\na.text-light[data-v-1bcbbc99]:hover, a.text-light[data-v-1bcbbc99]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-1bcbbc99] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-1bcbbc99]:hover, a.text-dark[data-v-1bcbbc99]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-1bcbbc99] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-1bcbbc99] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-1bcbbc99] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-1bcbbc99] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-1bcbbc99] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-1bcbbc99] {\n  text-decoration: none !important;\n}\n.text-break[data-v-1bcbbc99] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-1bcbbc99] {\n  color: inherit !important;\n}\ndiv[data-v-1bcbbc99] {\n  margin: 0;\n  padding: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.1) !important;\n}\n.modal-dialog {\n  margin: 20px !important;\n}\n.modal-dialog-centered {\n  min-height: calc(100% - 40px) !important;\n}\n.modal-dialog-centered.full-height {\n  min-height: 100vh !important;\n  margin: 0 !important;\n  width: 100vw !important;\n}\n.modal-dialog-centered.full-height .modal-header {\n  padding: 0 !important;\n}\n.modal {\n  overflow: auto !important;\n  align-items: center;\n  justify-content: center;\n}\n.modal-content {\n  border-radius: 0 !important;\n  border: 1px solid #d9dfe5;\n  box-sizing: border-box;\n  box-shadow: 2px 4px 4px rgba(46, 44, 44, 0.25);\n  overflow: auto;\n  max-height: 530px;\n}\n.modal-content.full-height {\n  max-height: 100%;\n  height: 100vh;\n  width: 100%;\n  padding: 48px;\n}\n.modal-content .modal-body {\n  padding: 5px 20px 0 20px;\n}\n.modal-header-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.modal-header {\n  align-items: center !important;\n  border-bottom: 0 !important;\n  padding: 20px 20px 0 20px !important;\n}\n.modal-header svg.modal-close {\n  height: 20px;\n  cursor: pointer;\n}\n.modal-footer {\n  border-top: 0 !important;\n  justify-content: center !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-2d734388] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-2d734388] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-2d734388] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-2d734388] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-2d734388] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-2d734388] {\n  text-align: left !important;\n}\n.text-right[data-v-2d734388] {\n  text-align: right !important;\n}\n.text-center[data-v-2d734388] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-2d734388] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-2d734388] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-2d734388] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-2d734388] {\n    text-align: left !important;\n}\n.text-md-right[data-v-2d734388] {\n    text-align: right !important;\n}\n.text-md-center[data-v-2d734388] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-2d734388] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-2d734388] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-2d734388] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-2d734388] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-2d734388] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-2d734388] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-2d734388] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-2d734388] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-2d734388] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-2d734388] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-2d734388] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-2d734388] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-2d734388] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-2d734388] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-2d734388] {\n  font-style: italic !important;\n}\n.text-white[data-v-2d734388] {\n  color: #fff !important;\n}\n.text-primary[data-v-2d734388] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-2d734388]:hover, a.text-primary[data-v-2d734388]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-2d734388] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-2d734388]:hover, a.text-secondary[data-v-2d734388]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-2d734388] {\n  color: #28a745 !important;\n}\na.text-success[data-v-2d734388]:hover, a.text-success[data-v-2d734388]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-2d734388] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-2d734388]:hover, a.text-info[data-v-2d734388]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-2d734388] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-2d734388]:hover, a.text-warning[data-v-2d734388]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-2d734388] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-2d734388]:hover, a.text-danger[data-v-2d734388]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-2d734388] {\n  color: #f8faff !important;\n}\na.text-light[data-v-2d734388]:hover, a.text-light[data-v-2d734388]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-2d734388] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-2d734388]:hover, a.text-dark[data-v-2d734388]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-2d734388] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-2d734388] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-2d734388] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-2d734388] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-2d734388] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-2d734388] {\n  text-decoration: none !important;\n}\n.text-break[data-v-2d734388] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-2d734388] {\n  color: inherit !important;\n}\np[data-v-2d734388],\nli[data-v-2d734388] {\n  font-size: 13px;\n  line-height: 19px;\n}\nul[data-v-2d734388] {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  padding: 12px;\n}\n.header[data-v-2d734388] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.modal-header[data-v-2d734388] {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 22px;\n  letter-spacing: 0.92px;\n  color: #3d4767;\n  padding-left: 0 !important;\n}\n.page-title[data-v-2d734388] {\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 36px;\n  letter-spacing: 1px;\n  color: #3d4767;\n}\n.footer[data-v-2d734388] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px;\n}\n.footer .carousel[data-v-2d734388] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  width: 100%;\n  gap: 3px;\n}\n.footer .carousel-line[data-v-2d734388] {\n  width: 100%;\n  height: 0px;\n  border: 1px solid #bfc3c7;\n  cursor: pointer;\n}\n.footer .carousel-line.active[data-v-2d734388] {\n  border: 1px solid #7700d5;\n}\n.footer .footer-buttons[data-v-2d734388] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  width: 100%;\n}\n.footer .footer-buttons .icon-wrapper[data-v-2d734388] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 1px solid #3d4767;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.footer .footer-buttons .icon-wrapper.active[data-v-2d734388] {\n  background: #9742fb;\n  border: 1px solid #9742fb;\n}\n.footer .footer-buttons .icon-wrapper.active svg > path[data-v-2d734388] {\n  fill: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f08b1a30", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f40aba90", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2eeedbce", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("12c977ac", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cef4dff4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f2263a50", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5f5697ec", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icons/arrow_left.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow_left.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "viewBox": "0 0 12 10",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M.396 4.907c0-.153.06-.288.181-.404l4-3.989a.618.618 0 01.2-.138.506.506 0 01.204-.043c.15 0 .274.05.375.151.1.097.15.22.15.368a.63.63 0 01-.036.212.469.469 0 01-.108.168L4.01 2.608 1.615 4.792l-.12-.301 1.942-.121h7.632c.157 0 .286.05.386.15.097.101.145.23.145.387a.535.535 0 01-.145.386c-.1.1-.229.15-.386.15H3.437l-1.943-.12.12-.296L4.01 7.207 5.362 8.58a.46.46 0 01.108.175.58.58 0 01.036.205c0 .15-.05.272-.15.368-.101.1-.226.151-.375.151a.551.551 0 01-.392-.169l-4.012-4a.546.546 0 01-.181-.404z",
        "fill": "#3D4767"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/arrow_right.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/arrow_right.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "viewBox": "0 0 12 10",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M11.604 4.907a.546.546 0 00-.18-.404L7.422.514a.618.618 0 00-.2-.138.506.506 0 00-.204-.043.508.508 0 00-.374.151c-.1.097-.151.22-.151.368a.63.63 0 00.036.212c.024.064.06.12.109.168L7.99 2.608l2.395 2.184.121-.301-1.943-.121H.931a.523.523 0 00-.386.15.535.535 0 00-.145.387c0 .157.048.285.145.386.1.1.23.15.386.15h7.632l1.943-.12-.12-.296L7.99 7.207 6.64 8.58a.46.46 0 00-.109.175.58.58 0 00-.036.205c0 .15.05.272.15.368.101.1.226.151.375.151a.551.551 0 00.392-.169l4.012-4a.546.546 0 00.181-.404z",
        "fill": "#3D4767"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/modal_close.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/modal_close.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "viewBox": "0 0 22 22",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill": "#000D35",
        "d": "M4.949 5.777l.566-.565L16.12 15.818l-.566.566z"
      }
    }), _c('path', {
      attrs: {
        "fill": "#000D35",
        "d": "M5.586 16.312l-.565-.566L15.627 5.14l.566.566z"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/onramper-logo.png":
/*!********************************************!*\
  !*** ./src/assets/icons/onramper-logo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/onramper-logo.bdd3031d.png";

/***/ }),

/***/ "./src/assets/icons/receive_icon_primary.svg":
/*!***************************************************!*\
  !*** ./src/assets/icons/receive_icon_primary.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  functional: true,
  render(_h, _vm) {
    const {
      _c,
      _v,
      data,
      children = []
    } = _vm;
    const {
      class: classNames,
      staticClass,
      style,
      staticStyle,
      attrs = {},
      ...rest
    } = data;
    return _c('svg', {
      class: [classNames, staticClass],
      style: [style, staticStyle],
      attrs: Object.assign({
        "viewBox": "0 0 44 44",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('rect', {
      attrs: {
        "x": "43.5",
        "y": "43.5",
        "width": "43",
        "height": "43",
        "rx": "21.5",
        "transform": "rotate(-180 43.5 43.5)",
        "fill": "#9D4DFA",
        "stroke": "#fff"
      }
    }), _c('path', {
      attrs: {
        "d": "M21.42 15.25v11.712l-4.646-3.905-.774.803 5.613 4.744c.116.11.232.146.387.146a.513.513 0 00.387-.146L28 23.86l-.774-.803-4.645 3.941V15.25h-1.162z",
        "fill": "#2CD2CF",
        "stroke": "#fff",
        "stroke-width": "1.4"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/transak-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/transak-logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/transak-logo.cc575fb9.png";

/***/ }),

/***/ "./src/components/AnalyticsOptInModal.vue":
/*!************************************************!*\
  !*** ./src/components/AnalyticsOptInModal.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true& */ "./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true&");
/* harmony import */ var _AnalyticsOptInModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalyticsOptInModal.vue?vue&type=script&lang=js& */ "./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& */ "./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnalyticsOptInModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53e5defb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/AnalyticsOptInModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./AnalyticsOptInModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=style&index=0&id=53e5defb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_style_index_0_id_53e5defb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/AnalyticsOptInModal.vue?vue&type=template&id=53e5defb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalyticsOptInModal_vue_vue_type_template_id_53e5defb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoModal.vue":
/*!*****************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoModal.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true&");
/* harmony import */ var _BuyCryptoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuyCryptoModal.vue?vue&type=script&lang=js& */ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuyCryptoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c4f617e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/BuyCrypto/BuyCryptoModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=style&index=0&id=1c4f617e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_style_index_0_id_1c4f617e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoModal.vue?vue&type=template&id=1c4f617e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoModal_vue_vue_type_template_id_1c4f617e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue":
/*!*************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoOverviewModal.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true&");
/* harmony import */ var _BuyCryptoOverviewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuyCryptoOverviewModal.vue?vue&type=script&lang=js& */ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuyCryptoOverviewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "011be305",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/BuyCrypto/BuyCryptoOverviewModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoOverviewModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=style&index=0&id=011be305&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_style_index_0_id_011be305_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoOverviewModal.vue?vue&type=template&id=011be305&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoOverviewModal_vue_vue_type_template_id_011be305_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue":
/*!*************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoProviderBrand.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true&");
/* harmony import */ var _BuyCryptoProviderBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuyCryptoProviderBrand.vue?vue&type=script&lang=js& */ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuyCryptoProviderBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1cb72567",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/BuyCrypto/BuyCryptoProviderBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoProviderBrand.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=style&index=0&id=1cb72567&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_style_index_0_id_1cb72567_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoProviderBrand.vue?vue&type=template&id=1cb72567&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoProviderBrand_vue_vue_type_template_id_1cb72567_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/GlobalModals.vue":
/*!*****************************************!*\
  !*** ./src/components/GlobalModals.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true& */ "./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true&");
/* harmony import */ var _GlobalModals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalModals.vue?vue&type=script&lang=js& */ "./src/components/GlobalModals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& */ "./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GlobalModals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bcbbc99",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/GlobalModals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/GlobalModals.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/GlobalModals.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./GlobalModals.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=style&index=0&id=1bcbbc99&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_style_index_0_id_1bcbbc99_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/GlobalModals.vue?vue&type=template&id=1bcbbc99&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalModals_vue_vue_type_template_id_1bcbbc99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Modal.vue":
/*!**********************************!*\
  !*** ./src/components/Modal.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=701ac82d& */ "./src/components/Modal.vue?vue&type=template&id=701ac82d&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./src/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& */ "./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&":
/*!********************************************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/Modal.vue?vue&type=template&id=701ac82d&":
/*!*****************************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=template&id=701ac82d& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=701ac82d& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=template&id=701ac82d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/WhatsNewModal.vue":
/*!******************************************!*\
  !*** ./src/components/WhatsNewModal.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true& */ "./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true&");
/* harmony import */ var _WhatsNewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhatsNewModal.vue?vue&type=script&lang=js& */ "./src/components/WhatsNewModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& */ "./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WhatsNewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d734388",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/WhatsNewModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/WhatsNewModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/WhatsNewModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WhatsNewModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=style&index=0&id=2d734388&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_style_index_0_id_2d734388_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/WhatsNewModal.vue?vue&type=template&id=2d734388&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsNewModal_vue_vue_type_template_id_2d734388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/icons/Logo.vue":
/*!***************************************!*\
  !*** ./src/components/icons/Logo.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true& */ "./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./src/components/icons/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7d4d4a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icons/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/icons/Logo.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/icons/Logo.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Logo.vue?vue&type=template&id=d7d4d4a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_d7d4d4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=18.js.map