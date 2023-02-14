(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['asset', 'chain', 'address', 'btnClass', 'screen'],
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('app', ['setBuyCryptoModalOpen']),
    open() {
      const {
        asset,
        chain,
        address,
        screen
      } = this;
      this.setBuyCryptoModalOpen({
        open: true,
        asset,
        chain,
        address,
        screen
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Receive.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.vue");
/* harmony import */ var _components_BuyCrypto_BuyCryptoButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BuyCrypto/BuyCryptoButton */ "./src/components/BuyCrypto/BuyCryptoButton.vue");
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/copy.svg */ "./src/assets/icons/copy.svg");
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_copy_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/copy_white.svg */ "./src/assets/icons/copy_white.svg");
/* harmony import */ var _assets_icons_copy_white_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_copy_white_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_tick_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/tick.svg */ "./src/assets/icons/tick.svg");
/* harmony import */ var _assets_icons_tick_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_tick_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    CopyIcon: (_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    CopyWhiteIcon: (_assets_icons_copy_white_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    TickIcon: (_assets_icons_tick_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    BuyCryptoButton: _components_BuyCrypto_BuyCryptoButton__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      address: null,
      qrcode: null,
      copied: false
    };
  },
  props: {
    asset: String,
    accountId: String
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork', 'activeWalletId']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['accountItem']),
    account() {
      return this.accountItem(this.accountId);
    },
    routeSource() {
      return this.$route.query.source || null;
    },
    chain() {
      var _cryptoassets$this$as;
      return (_cryptoassets$this$as = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default.a[this.asset]) === null || _cryptoassets$this$as === void 0 ? void 0 : _cryptoassets$this$as.chain;
    },
    chainName() {
      const isEvm = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__["isEvmChain"])(this.activeNetwork, this.chain);
      if (isEvm) {
        return 'ethereum';
      } else {
        return {
          bitcoin: 'bitcoin',
          near: 'near',
          solana: 'solana',
          terra: 'terra'
        }[this.chain];
      }
    },
    faucet() {
      const asset = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default.a[this.asset];
      const chain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__["getChain"])(this.activeNetwork, asset.chain);
      if (chain.faucetUrl) {
        return {
          name: chain.name,
          url: chain.faucetUrl
        };
      }
      return null;
    }
  },
  async created() {
    var _this$account, _this$account2;
    if (this.account && (_this$account = this.account) !== null && _this$account !== void 0 && _this$account.type.includes('ledger') && ((_this$account2 = this.account) === null || _this$account2 === void 0 ? void 0 : _this$account2.chain) !== _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__["ChainId"].Bitcoin) {
      var _getChain, _cryptoassets$this$as2;
      (_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__["getChain"])(this.activeNetwork, (_cryptoassets$this$as2 = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default.a[this.asset]) === null || _cryptoassets$this$as2 === void 0 ? void 0 : _cryptoassets$this$as2.chain)) === null || _getChain === void 0 ? void 0 : _getChain.formatAddressUI(this.account.addresses[0]);
    } else {
      var _getChain2;
      const addresses = await this.getUnusedAddresses({
        network: this.activeNetwork,
        walletId: this.activeWalletId,
        assets: [this.asset],
        accountId: this.accountId
      });
      this.address = (_getChain2 = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_8__["getChain"])(this.activeNetwork, this.chain)) === null || _getChain2 === void 0 ? void 0 : _getChain2.formatAddressUI(addresses[0]);
    }
    const uri = this.chainName === 'terra' ? this.address : [this.chainName, this.address].join(':');
    qrcode__WEBPACK_IMPORTED_MODULE_1___default.a.toString(uri, {
      type: 'svg',
      margin: 0
    }, (err, svg) => {
      if (err) throw err;
      this.qrcode = svg;
    });
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('app', ['trackAnalytics']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['getUnusedAddresses']),
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_2__["getAssetIcon"],
    async copy() {
      var _cryptoassets$this$as3;
      this.trackAnalytics({
        event: `User on ${this.asset} Receive Page`,
        properties: {
          walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_10__["version"],
          category: 'Send/Receive',
          action: 'User on Receive screen',
          label: `${this.asset}`
        }
      });
      await navigator.clipboard.writeText(this.address);
      this.copied = true;
      this.trackAnalytics({
        event: 'Receive copy address',
        properties: {
          walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_10__["version"],
          category: 'Send/Receive',
          action: 'User copied address',
          asset: `${this.asset}`,
          chainName: `${(_cryptoassets$this$as3 = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default.a[this.asset]) === null || _cryptoassets$this$as3 === void 0 ? void 0 : _cryptoassets$this$as3.chain}`
        }
      });
      setTimeout(() => {
        this.copied = false;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn",
    class: _vm.btnClass,
    attrs: {
      id: "buy_crypto_button"
    },
    on: {
      click: _vm.open
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.buyCrypto.buyCrypto")) + " ")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=template&id=109fa019&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Receive.vue?vue&type=template&id=109fa019& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "receive"
  }, [_c("NavBar", {
    attrs: {
      showBack: true,
      backPath: _vm.routeSource === "assets" ? "/wallet" : `/accounts/${_vm.account.id}/${_vm.asset}`,
      backLabel: _vm.routeSource === "assets" ? _vm.$t("common.overview") : _vm.asset
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.receive")) + " " + _vm._s(_vm.asset) + " ")]), _c("div", {
    staticClass: "wrapper form text-center"
  }, [_c("div", {
    staticClass: "wrapper_top form"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "receive_asset"
  }, [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAssetIcon(_vm.asset)
    }
  })]), _c("label", {
    attrs: {
      id: "your_current_asset_address"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.receive.yourCurrentAddress", {
    asset: _vm.asset
  })) + " ")]), _c("p", {
    staticClass: "receive_address text-break",
    attrs: {
      id: "receive_address"
    }
  }, [_vm._v(" " + _vm._s(_vm.address) + " "), _c("CopyIcon", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.bottom",
      value: {
        content: _vm.copied ? _vm.$t("common.copied") : _vm.$t("common.clickToCopy"),
        hideOnTargetClick: false
      },
      expression: "{\n              content: copied ? $t('common.copied') : $t('common.clickToCopy'),\n              hideOnTargetClick: false\n            }",
      modifiers: {
        bottom: true
      }
    }],
    staticClass: "copy-icon",
    on: {
      click: _vm.copy
    }
  })], 1), _c("p", {
    staticClass: "receive_message"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.receive.receiveMessage")) + " ")]), _vm.qrcode ? _c("div", {
    staticClass: "receive_qr",
    attrs: {
      id: "receive_qr"
    },
    domProps: {
      innerHTML: _vm._s(_vm.qrcode)
    }
  }) : _vm._e(), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeNetwork === "mainnet",
      expression: "activeNetwork === 'mainnet'"
    }],
    staticClass: "buy-crypto-container"
  }, [_c("div", {
    staticClass: "mt-2 text-uppercase font-bold"
  }, [_vm._v(_vm._s(_vm.$t("common.or")))]), _c("BuyCryptoButton", {
    attrs: {
      "btn-class": ["btn-light", "btn-outline-primary"],
      asset: _vm.asset,
      chain: _vm.chain,
      address: _vm.address,
      screen: "Receive"
    }
  })], 1), _vm.faucet ? _c("div", {
    staticClass: "testnet_message"
  }, [_c("div", [_vm._v(_vm._s(_vm.faucet.name) + " testnet faucet")]), _c("div", {
    attrs: {
      id: "receive_url"
    }
  }, [_c("a", {
    attrs: {
      href: _vm.faucet.url,
      target: "_blank"
    }
  }, [_vm._v(" " + _vm._s(_vm.faucet.url) + " ")])])]) : _vm._e()])]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("router-link", {
    attrs: {
      to: _vm.routeSource === "assets" ? "/wallet" : `/accounts/${_vm.account.id}/${_vm.asset}`
    }
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    attrs: {
      id: "done_button"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.done")) + " ")])]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      id: "copy_address_button"
    },
    on: {
      click: _vm.copy
    }
  }, [_vm.copied ? [_c("TickIcon"), _vm._v(" " + _vm._s(_vm.$t("common.copied")) + " ")] : [_c("CopyWhiteIcon", {
    staticClass: "no-stroke"
  }), _vm._v(" " + _vm._s(_vm.$t("common.copyAddress")) + " ")]], 2)], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-4887159e] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-4887159e] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-4887159e] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-4887159e] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-4887159e] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-4887159e] {\n  text-align: left !important;\n}\n.text-right[data-v-4887159e] {\n  text-align: right !important;\n}\n.text-center[data-v-4887159e] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-4887159e] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-4887159e] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-4887159e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-4887159e] {\n    text-align: left !important;\n}\n.text-md-right[data-v-4887159e] {\n    text-align: right !important;\n}\n.text-md-center[data-v-4887159e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-4887159e] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-4887159e] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-4887159e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-4887159e] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-4887159e] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-4887159e] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-4887159e] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-4887159e] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-4887159e] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-4887159e] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-4887159e] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-4887159e] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-4887159e] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-4887159e] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-4887159e] {\n  font-style: italic !important;\n}\n.text-white[data-v-4887159e] {\n  color: #fff !important;\n}\n.text-primary[data-v-4887159e] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-4887159e]:hover, a.text-primary[data-v-4887159e]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-4887159e] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-4887159e]:hover, a.text-secondary[data-v-4887159e]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-4887159e] {\n  color: #28a745 !important;\n}\na.text-success[data-v-4887159e]:hover, a.text-success[data-v-4887159e]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-4887159e] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-4887159e]:hover, a.text-info[data-v-4887159e]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-4887159e] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-4887159e]:hover, a.text-warning[data-v-4887159e]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-4887159e] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-4887159e]:hover, a.text-danger[data-v-4887159e]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-4887159e] {\n  color: #f8faff !important;\n}\na.text-light[data-v-4887159e]:hover, a.text-light[data-v-4887159e]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-4887159e] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-4887159e]:hover, a.text-dark[data-v-4887159e]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-4887159e] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-4887159e] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-4887159e] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-4887159e] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-4887159e] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-4887159e] {\n  text-decoration: none !important;\n}\n.text-break[data-v-4887159e] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-4887159e] {\n  color: inherit !important;\n}\n.btn[data-v-4887159e] {\n  border-radius: 22px;\n}\n.btn[data-v-4887159e]:focus {\n  color: #9d4dfa;\n  border-color: #9d4dfa;\n  background-color: #f8faff;\n  border: 1px solid #9d4dfa;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.receive_asset {\n  padding-bottom: 6px;\n}\n.receive_message {\n  font-weight: 600;\n  margin-top: 26px;\n}\n.receive_qr {\n  margin: 17px auto 0 auto;\n  width: 120px;\n}\n.receive_address {\n  font-size: 0.7rem;\n}\n.receive .testnet_message {\n  margin-top: 18px;\n  font-size: 0.75rem;\n  font-weight: lighter;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.receive .buy-crypto-container {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0.1em;\n}\n.receive .buy-crypto-container .btn {\n  max-width: 120px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ccf78e18", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6861f7b1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icons/copy.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/copy.svg ***!
  \***********************************/
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
        "viewBox": "0 0 18 18",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M14.87 1H8.163c-1.175 0-2.13.956-2.13 2.13v2.902H3.13c-1.174 0-2.13.955-2.13 2.13v6.708C1 16.045 1.956 17 3.13 17h6.709c1.174 0 2.13-.956 2.13-2.13v-2.902h2.901c1.175 0 2.13-.956 2.13-2.13V3.132C17 1.956 16.045 1 14.87 1zm-3.807 13.87c0 .676-.55 1.225-1.224 1.225h-6.71c-.675 0-1.223-.55-1.223-1.225V8.161c0-.675.55-1.224 1.224-1.224H6.03v2.902c0 1.174.956 2.13 2.13 2.13h2.902v2.901zm3.808-3.807c.675 0 1.224-.549 1.224-1.224V3.13c0-.675-.549-1.225-1.224-1.225H8.16c-.674 0-1.223.55-1.223 1.225v6.708c0 .675.548 1.224 1.224 1.224h6.709z",
        "fill": "#9D4DFA"
      }
    }), _c('path', {
      attrs: {
        "d": "M6.032 6.032v.5h.5v-.5h-.5zm5.937 5.936v-.5h-.5v.5h.5zM17 3.131h-.5.5zM6.031 6.937h.5v-.5h-.5v.5zm5.032 5.031h.5v-.5h-.5v.5zM8.162 1.5h6.709v-1H8.16v1zm-1.63 1.63c0-.898.732-1.63 1.63-1.63v-1c-1.45 0-2.63 1.18-2.63 2.63h1zm0 2.902V3.13h-1v2.902h1zm-3.402.5h2.902v-1H3.13v1zM1.5 8.162c0-.898.732-1.63 1.63-1.63v-1C1.68 5.532.5 6.712.5 8.162h1zm0 6.708V8.161h-1v6.71h1zm1.63 1.63c-.898 0-1.63-.731-1.63-1.63h-1c0 1.452 1.18 2.63 2.63 2.63v-1zm6.709 0h-6.71v1h6.71v-1zm1.63-1.63c0 .898-.732 1.63-1.63 1.63v1c1.45 0 2.63-1.18 2.63-2.63h-1zm0-2.902v2.902h1v-2.902h-1zm3.401-.5H11.97v1h2.901v-1zm1.63-1.63c0 .898-.732 1.63-1.63 1.63v1c1.45 0 2.63-1.18 2.63-2.63h-1zm0-6.707v6.708h1V3.13h-1zM14.87 1.5c.899 0 1.63.732 1.63 1.63l1 .001A2.631 2.631 0 0014.87.5v1zM9.84 16.595c.951 0 1.724-.773 1.724-1.725h-1c0 .4-.326.725-.724.725v1zm-6.71 0h6.71v-1h-6.71v1zM1.407 14.87c0 .95.772 1.725 1.724 1.725v-1a.726.726 0 01-.724-.725h-1zm0-6.709v6.71h1V8.16h-1zM3.13 6.437c-.95 0-1.724.772-1.724 1.724h1c0-.4.325-.724.724-.724v-1zm2.901 0H3.13v1H6.03v-1zm.5 3.402V6.937h-1v2.902h1zm1.63 1.63c-.898 0-1.63-.732-1.63-1.63h-1c0 1.45 1.18 2.63 2.63 2.63v-1zm2.902 0H8.161v1h2.902v-1zm.5 3.401v-2.902h-1v2.902h1zm4.032-5.031c0 .4-.325.724-.724.724v1c.95 0 1.724-.772 1.724-1.724h-1zm0-6.708v6.708h1V3.13h-1zm-.724-.725c.399 0 .724.325.724.725h1c0-.95-.772-1.725-1.724-1.725v1zm-6.71 0h6.71v-1H8.16v1zm-.723.725c0-.4.325-.725.724-.725v-1c-.951 0-1.724.773-1.724 1.725h1zm0 6.708V3.13h-1v6.708h1zm.724.724a.725.725 0 01-.724-.724h-1c0 .95.772 1.724 1.724 1.724v-1zm6.709 0H8.16v1h6.71v-1z",
        "fill": "#9D4DFA"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/copy_white.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/copy_white.svg ***!
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
        "viewBox": "0 0 17 17",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M14.004 1h-6.29a2 2 0 00-1.997 1.997v2.72h-2.72A1.999 1.999 0 001 7.714v6.29C1 15.103 1.896 16 2.997 16h6.29a2 2 0 001.996-1.997v-2.72h2.72A1.999 1.999 0 0016 9.286V2.998A1.998 1.998 0 0014.004 1zm-3.57 13.004a1.15 1.15 0 01-1.148 1.148h-6.29a1.15 1.15 0 01-1.147-1.148v-6.29c0-.633.515-1.148 1.147-1.148h2.72v2.721c0 1.101.896 1.996 1.997 1.996h2.72v2.72zm3.57-3.57c.632 0 1.148-.514 1.148-1.147V2.998a1.15 1.15 0 00-1.148-1.148h-6.29a1.15 1.15 0 00-1.148 1.148v6.289c0 .633.515 1.148 1.148 1.148h6.29z",
        "fill": "#fff"
      }
    }), _c('path', {
      attrs: {
        "d": "M5.717 5.717v.15h.15v-.15h-.15zm5.566 5.566v-.15h-.15v.15h.15zM16 2.998h-.15.15zM5.716 6.566h.15v-.15h-.15v.15zm4.718 4.717h.15v-.15h-.15v.15zM7.714 1.15h6.29v-.3h-6.29v.3zM5.867 2.997A1.85 1.85 0 017.714 1.15v-.3a2.15 2.15 0 00-2.147 2.147h.3zm0 2.72v-2.72h-.3v2.72h.3zm-2.87.15h2.72v-.3h-2.72v.3zM1.15 7.714c0-1.018.829-1.847 1.847-1.847v-.3A2.149 2.149 0 00.85 7.714h.3zm0 6.29v-6.29h-.3v6.29h.3zm1.847 1.846a1.849 1.849 0 01-1.847-1.847h-.3c0 1.185.963 2.147 2.147 2.147v-.3zm6.29 0h-6.29v.3h6.29v-.3zm1.846-1.847a1.85 1.85 0 01-1.847 1.847v.3a2.15 2.15 0 002.147-2.147h-.3zm0-2.72v2.72h.3v-2.72h-.3zm2.87-.15h-2.72v.3h2.72v-.3zm1.847-1.847a1.849 1.849 0 01-1.847 1.847v.3a2.149 2.149 0 002.147-2.147h-.3zm0-6.288v6.288h.3V2.998h-.3zM14.004 1.15c1.018 0 1.847.829 1.846 1.847h.3A2.148 2.148 0 0014.004.85v.3zM9.286 15.302a1.3 1.3 0 001.298-1.298h-.3a1 1 0 01-.998.998v.3zm-6.29 0h6.29v-.3h-6.29v.3zM1.7 14.004a1.3 1.3 0 001.297 1.298v-.3A1 1 0 012 14.004h-.3zm0-6.29v6.29h.3v-6.29h-.3zm1.297-1.298c-.715 0-1.297.582-1.297 1.298h.3c0-.55.448-.998.997-.998v-.3zm2.72 0h-2.72v.3h2.72v-.3zm.15 2.871v-2.72h-.3v2.72h.3zm1.847 1.846a1.848 1.848 0 01-1.847-1.846h-.3c0 1.184.963 2.146 2.147 2.146v-.3zm2.72 0h-2.72v.3h2.72v-.3zm.15 2.87v-2.72h-.3v2.72h.3zm4.418-4.716c0 .55-.447.998-.997.998v.3c.715 0 1.298-.582 1.298-1.298h-.3zm0-6.289v6.289h.3V2.998h-.3zM14.005 2a1 1 0 01.998.998h.3A1.3 1.3 0 0014.004 1.7V2zm-6.29 0h6.29v-.3h-6.29V2zm-.998.998A1 1 0 017.714 2v-.3a1.3 1.3 0 00-1.298 1.298h.3zm0 6.289V2.998h-.3v6.289h.3zm.998.998a.999.999 0 01-.998-.998h-.3c0 .715.582 1.298 1.298 1.298v-.3zm6.29 0h-6.29v.3h6.29v-.3z",
        "fill": "#fff"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/tick.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/tick.svg ***!
  \***********************************/
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
        "viewBox": "0 0 16 12",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M5.467 10.007l8.822-8.884a.42.42 0 01.586-.006.404.404 0 01.007.577l-9.118 9.183a.419.419 0 01-.593 0L1.118 6.796a.404.404 0 01.007-.578.42.42 0 01.586.006l3.756 3.783z",
        "fill": "#fff",
        "stroke": "#fff"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoButton.vue":
/*!******************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoButton.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true&");
/* harmony import */ var _BuyCryptoButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuyCryptoButton.vue?vue&type=script&lang=js& */ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& */ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuyCryptoButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4887159e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/BuyCrypto/BuyCryptoButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoButton.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=style&index=0&id=4887159e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_style_index_0_id_4887159e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/BuyCrypto/BuyCryptoButton.vue?vue&type=template&id=4887159e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_BuyCryptoButton_vue_vue_type_template_id_4887159e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Receive.vue":
/*!*******************************!*\
  !*** ./src/views/Receive.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receive.vue?vue&type=template&id=109fa019& */ "./src/views/Receive.vue?vue&type=template&id=109fa019&");
/* harmony import */ var _Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receive.vue?vue&type=script&lang=js& */ "./src/views/Receive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& */ "./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Receive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Receive.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/views/Receive.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Receive.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=style&index=0&id=109fa019&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_style_index_0_id_109fa019_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Receive.vue?vue&type=template&id=109fa019&":
/*!**************************************************************!*\
  !*** ./src/views/Receive.vue?vue&type=template&id=109fa019& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Receive.vue?vue&type=template&id=109fa019& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Receive.vue?vue&type=template&id=109fa019&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Receive_vue_vue_type_template_id_109fa019___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=31.js.map