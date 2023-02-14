(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['quantity']
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Star.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['nftAsset', 'accountId'],
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeWalletId', 'activeNetwork']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['accountsData'])
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['toggleNFTStarred']),
    async toggleStarred() {
      this.nftAsset.starred = !this.nftAsset.starred;
      const payload = {
        network: this.activeNetwork,
        walletId: this.activeWalletId,
        accountId: this.accountId || this.nftAsset.accountId,
        nft: this.nftAsset
      };
      await this.toggleNFTStarred(payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/address */ "./node_modules/@liquality/wallet-core/dist/src/utils/address.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_light_umd_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it-vue/dist/markdown-it-vue-light.umd.min.js */ "./node_modules/markdown-it-vue/dist/markdown-it-vue-light.umd.min.js");
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_light_umd_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it_vue_dist_markdown_it_vue_light_umd_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_light_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it-vue/dist/markdown-it-vue-light.css */ "./node_modules/markdown-it-vue/dist/markdown-it-vue-light.css");
/* harmony import */ var markdown_it_vue_dist_markdown_it_vue_light_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it_vue_dist_markdown_it_vue_light_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/copy.svg */ "./src/assets/icons/copy.svg");
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_send_nft_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/send_nft.svg */ "./src/assets/icons/send_nft.svg");
/* harmony import */ var _assets_icons_send_nft_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_send_nft_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_share_nft_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/share_nft.svg */ "./src/assets/icons/share_nft.svg");
/* harmony import */ var _assets_icons_share_nft_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_share_nft_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NavBar.vue */ "./src/components/NavBar.vue");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_accounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/accounts */ "./src/utils/accounts.js");
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_icons_Star_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/icons/Star.vue */ "./src/components/icons/Star.vue");
/* harmony import */ var _components_icons_NFTQuantity_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/icons/NFTQuantity.vue */ "./src/components/icons/NFTQuantity.vue");
/* harmony import */ var _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/assets/nft_thumbnail.png */ "./src/assets/nft_thumbnail.png");
/* harmony import */ var _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_15__);
















/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      showFullscreen: false,
      activeTab: 'overview',
      nftAsset: null,
      accountId: '',
      defaultDescription: 'This NFT has no description.'
    };
  },
  components: {
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    CopyIcon: (_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    SendIcon: (_assets_icons_send_nft_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    ShareIcon: (_assets_icons_share_nft_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    NavBar: _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Star: _components_icons_Star_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    NFTQuantity: _components_icons_NFTQuantity_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    MarkdownItVueLight: (markdown_it_vue_dist_markdown_it_vue_light_umd_min_js__WEBPACK_IMPORTED_MODULE_2___default())
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['accountItem', 'allNftCollections']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork']),
    source() {
      return this.$route.fullPath;
    },
    thumbnailImage() {
      return _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_15___default.a;
    },
    account() {
      return this.accountItem(this.accountId);
    },
    address() {
      var _getChain;
      return (_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__["getChain"])(this.activeNetwork, this.account.chain)) === null || _getChain === void 0 ? void 0 : _getChain.formatAddressUI(this.account.addresses[0]);
    },
    routeSource() {
      var _this$$route$query;
      if ((_this$$route$query = this.$route.query) !== null && _this$$route$query !== void 0 && _this$$route$query.source) {
        return `${this.$route.query.source}`;
      }
      return '/wallet/nfts';
    },
    chain() {
      var _this$account;
      return (_this$account = this.account) === null || _this$account === void 0 ? void 0 : _this$account.chain;
    },
    asset() {
      var _this$account2;
      return this.account ? Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__["getNativeAssetCode"])(this.activeNetwork, (_this$account2 = this.account) === null || _this$account2 === void 0 ? void 0 : _this$account2.chain) : null;
    },
    addressLink() {
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__["getAddressExplorerLink"])(this.address, this.asset, this.activeNetwork);
    }
  },
  created() {
    const collectionName = this.$route.query.collection;
    const nftAssetId = this.$route.query.nftAsset;
    if (this.allNftCollections[collectionName]) {
      this.nftAsset = this.allNftCollections[collectionName].find(i => {
        return i.token_id == nftAssetId;
      });
      if (this.$route.query.accountId) {
        this.accountId = this.$route.query.accountId;
      } else {
        this.accountId = this.nftAsset.accountId;
      }
    }
  },
  methods: {
    shortenAddress: _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_1__["shortenAddress"],
    getAccountIcon: _utils_accounts__WEBPACK_IMPORTED_MODULE_10__["getAccountIcon"],
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_11__["getAssetIcon"],
    getNftTransferLink: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__["getNftTransferLink"],
    getMarketplaceName: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__["getMarketplaceName"],
    async copy(text) {
      await navigator.clipboard.writeText(text);
    },
    marketplaceName() {
      if (this.asset) {
        return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__["getMarketplaceName"])(this.asset, this.activeNetwork);
      }
      return '';
    },
    transferLink() {
      var _this$nftAsset, _this$nftAsset2;
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_12__["getNftTransferLink"])(this.asset, this.activeNetwork, (_this$nftAsset = this.nftAsset) === null || _this$nftAsset === void 0 ? void 0 : _this$nftAsset.token_id, (_this$nftAsset2 = this.nftAsset) === null || _this$nftAsset2 === void 0 ? void 0 : _this$nftAsset2.asset_contract.address);
    },
    transferNFT() {
      window.open(this.transferLink(), '_blank');
    },
    imageError(ref) {
      if (ref) {
        this.$refs[ref].src = this.thumbnailImage;
      }
    },
    assetOriginalImageUrl(url) {
      return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.quantity ? _c("div", {
    staticClass: "nft-quantity"
  }, [_vm._v("x" + _vm._s(_vm.quantity))]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true& ***!
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
      width: "23",
      height: "26",
      viewBox: "0 0 23 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    on: {
      click: _vm.toggleStarred
    }
  }, [_c("path", {
    attrs: {
      d: "M11 4.91214L12.7683 9.74879L13.7075 9.4054L12.7684 9.74879C13.0273 10.4571 13.6627 10.9595 14.4116 11.0481L19.9428 11.7031L15.6202 15.3165C14.9733 15.8573 14.735 16.7458 15.0246 17.5378L16.7359 22.2183L12.0235 19.4113C11.3928 19.0356 10.6071 19.0356 9.97644 19.4113L5.26402 22.2183L6.99558 17.4824C7.26483 16.746 7.07891 15.9202 6.52005 15.3702L2.79281 11.7021L7.61575 11.0543C8.35201 10.9554 8.9728 10.4566 9.22789 9.75887L11 4.91214Z",
      fill: _vm.nftAsset ? _vm.nftAsset.starred ? "#FFE604" : "white" : "white",
      stroke: _vm.nftAsset ? _vm.nftAsset.starred ? "#FFE604" : "#FFFFFF" : "#FFFFFF",
      "stroke-width": "2"
    }
  }), _c("path", {
    attrs: {
      d: "M20.625 10.2188C21.1458 10.2708 21.4844 10.5443 21.6406 11.0391C21.7969 11.5339 21.6927 11.9635 21.3281 12.3281L17.1875 16.3516L18.1641 22.0547C18.2422 22.5495 18.0729 22.9401 17.6562 23.2266C17.2396 23.5391 16.8099 23.5781 16.3672 23.3438L11.25 20.6875L6.13281 23.3438C5.6901 23.6042 5.26042 23.5781 4.84375 23.2656C4.42708 22.9531 4.25781 22.5495 4.33594 22.0547L5.3125 16.3516L1.17188 12.3281C0.807292 11.9635 0.703125 11.5339 0.859375 11.0391C1.01562 10.5443 1.35417 10.2708 1.875 10.2188L7.57812 9.35938L10.1172 4.20312C10.3516 3.73438 10.7292 3.5 11.25 3.5C11.7708 3.5 12.1484 3.73438 12.3828 4.20312L14.9219 9.35938L20.625 10.2188ZM15.8594 15.9219L20.4688 11.4297L14.1016 10.5312L11.25 4.75L8.39844 10.5312L2.03125 11.4297L6.64062 15.9219L5.54688 22.25L11.25 19.2812L16.9531 22.25L15.8594 15.9219Z",
      fill: _vm.nftAsset ? _vm.nftAsset.starred ? "#FFE604" : "#FFFFFF" : "#FFFFFF"
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm$nftAsset, _vm$nftAsset2, _vm$nftAsset3, _vm$nftAsset4, _vm$nftAsset5, _vm$nftAsset6, _vm$nftAsset6$asset_c, _vm$nftAsset$collecti2, _vm$nftAsset7, _vm$nftAsset8, _vm$nftAsset9, _vm$nftAsset10, _vm$nftAsset11, _vm$nftAsset12, _vm$nftAsset13, _vm$nftAsset14, _vm$nftAsset14$asset_;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "nft-asset"
  }, [_c("div", {
    staticClass: "nft-asset--container"
  }, [_c("NavBar", {
    attrs: {
      showBack: true,
      backPath: _vm.routeSource,
      backLabel: _vm.$t("common.back"),
      hasSolidButton: true,
      fullWidth: true
    }
  }), _c("div", {
    staticClass: "nft-action-buttons"
  }, [_c("div", {
    staticClass: "star",
    style: _vm.showFullscreen ? {
      top: "calc(25% - 41px)"
    } : {
      bottom: "calc(20% + 41px)"
    }
  }, [_c("Star", {
    attrs: {
      nftAsset: _vm.nftAsset,
      accountId: _vm.accountId
    }
  })], 1), _vm.nftAsset && _vm.nftAsset.amount && _vm.nftAsset.amount > 1 ? _c("NFTQuantity", {
    style: _vm.showFullscreen ? {
      top: "calc(25% - 34px)"
    } : {
      bottom: "calc(20% + 10px)"
    },
    attrs: {
      quantity: (_vm$nftAsset = _vm.nftAsset) === null || _vm$nftAsset === void 0 ? void 0 : _vm$nftAsset.amount
    }
  }) : _vm._e(), _c("div", {
    staticClass: "send--share--actions"
  }, [_c("SendIcon", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.bottom",
      value: {
        content: _vm.$t("common.sendNFT"),
        hideOnTargetClick: false
      },
      expression: "{\n            content: $t('common.sendNFT'),\n            hideOnTargetClick: false\n          }",
      modifiers: {
        bottom: true
      }
    }],
    staticClass: "nft-action-buttons__icon",
    on: {
      click: function ($event) {
        var _vm$nftAsset$collecti;
        return _vm.$router.push({
          path: "/wallet/nfts/send",
          query: {
            nftAsset: _vm.nftAsset.token_id,
            source: _vm.source,
            collection: (_vm$nftAsset$collecti = _vm.nftAsset.collection) === null || _vm$nftAsset$collecti === void 0 ? void 0 : _vm$nftAsset$collecti.name,
            accountId: _vm.accountId
          }
        });
      }
    }
  }), _vm.transferLink ? _c("ShareIcon", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.left",
      value: {
        content: _vm.$t("pages.details.transferOn", {
          marketplace: _vm.marketplaceName()
        }),
        hideOnTargetClick: false
      },
      expression: "{\n            content: $t('pages.details.transferOn', { marketplace: marketplaceName() }),\n            hideOnTargetClick: false\n          }",
      modifiers: {
        left: true
      }
    }],
    staticClass: "nft-action-buttons__icon",
    on: {
      click: _vm.transferNFT
    }
  }) : _vm._e()], 1)], 1), _vm.showFullscreen === false ? [_c("div", {
    staticClass: "nft-img"
  }, [_c("img", {
    ref: "nftImage",
    attrs: {
      src: _vm.assetOriginalImageUrl((_vm$nftAsset2 = _vm.nftAsset) === null || _vm$nftAsset2 === void 0 ? void 0 : _vm$nftAsset2.image_original_url) || ((_vm$nftAsset3 = _vm.nftAsset) === null || _vm$nftAsset3 === void 0 ? void 0 : _vm$nftAsset3.image_preview_url) || _vm.thumbnailImage,
      alt: ((_vm$nftAsset4 = _vm.nftAsset) === null || _vm$nftAsset4 === void 0 ? void 0 : _vm$nftAsset4.name) || "NFT Asset"
    },
    on: {
      error: function ($event) {
        return _vm.imageError("nftImage");
      }
    }
  })]), _c("div", {
    staticClass: "drawer nft-details"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between pointer-cursor"
  }, [_c("h1", {
    staticClass: "nft-details_name"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset && (_vm$nftAsset5 = _vm.nftAsset) !== null && _vm$nftAsset5 !== void 0 && _vm$nftAsset5.asset_contract ? (_vm$nftAsset6 = _vm.nftAsset) === null || _vm$nftAsset6 === void 0 ? void 0 : (_vm$nftAsset6$asset_c = _vm$nftAsset6.asset_contract) === null || _vm$nftAsset6$asset_c === void 0 ? void 0 : _vm$nftAsset6$asset_c.name : "[Name]") + " ")]), _c("ChevronDownIcon", {
    staticClass: "nft-details_arrow",
    staticStyle: {
      transform: "scaleY(-1)"
    },
    on: {
      click: function ($event) {
        _vm.showFullscreen = true;
      }
    }
  })], 1), _c("h5", {
    staticClass: "nft-details_collection-details"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset && (_vm$nftAsset$collecti2 = _vm.nftAsset.collection) !== null && _vm$nftAsset$collecti2 !== void 0 && _vm$nftAsset$collecti2.name ? (_vm$nftAsset7 = _vm.nftAsset) === null || _vm$nftAsset7 === void 0 ? void 0 : _vm$nftAsset7.collection.name : "[Collection]") + " ")])])] : _vm.showFullscreen === true ? [_c("div", {
    staticClass: "nft-img__open",
    style: !((_vm$nftAsset8 = _vm.nftAsset) !== null && _vm$nftAsset8 !== void 0 && _vm$nftAsset8.image_original_url || (_vm$nftAsset9 = _vm.nftAsset) !== null && _vm$nftAsset9 !== void 0 && _vm$nftAsset9.image_preview_url) && {
      background: "#D9DFE5"
    }
  }, [_c("img", {
    ref: "nftPreviewImage",
    attrs: {
      src: ((_vm$nftAsset10 = _vm.nftAsset) === null || _vm$nftAsset10 === void 0 ? void 0 : _vm$nftAsset10.image_original_url) || ((_vm$nftAsset11 = _vm.nftAsset) === null || _vm$nftAsset11 === void 0 ? void 0 : _vm$nftAsset11.image_preview_url) || _vm.thumbnailImage,
      alt: ((_vm$nftAsset12 = _vm.nftAsset) === null || _vm$nftAsset12 === void 0 ? void 0 : _vm$nftAsset12.name) || "NFT Asset"
    },
    on: {
      error: function ($event) {
        return _vm.imageError("nftPreviewImage");
      }
    }
  })]), _c("div", {
    staticClass: "drawer drawer-open nft-details"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between pointer-cursor"
  }, [_c("h1", {
    staticClass: "nft-details_name"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset && (_vm$nftAsset13 = _vm.nftAsset) !== null && _vm$nftAsset13 !== void 0 && _vm$nftAsset13.asset_contract ? (_vm$nftAsset14 = _vm.nftAsset) === null || _vm$nftAsset14 === void 0 ? void 0 : (_vm$nftAsset14$asset_ = _vm$nftAsset14.asset_contract) === null || _vm$nftAsset14$asset_ === void 0 ? void 0 : _vm$nftAsset14$asset_.name : "") + " ")]), _c("ChevronDownIcon", {
    staticClass: "nft-details_arrow cursor-pointer",
    on: {
      click: function ($event) {
        _vm.showFullscreen = false;
      }
    }
  })], 1), _c("h5", {
    staticClass: "nft-details_collection-details"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset ? _vm.nftAsset.collection.name : "") + " ")]), _c("div", {
    staticClass: "wallet-tabs"
  }, [_c("ul", {
    staticClass: "nav nav-tabs"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("span", {
    class: _vm.activeTab === "overview" ? "nav-link active" : "nav-link",
    attrs: {
      id: "overview_tab"
    },
    on: {
      click: function ($event) {
        _vm.activeTab = "overview";
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.overview")) + " ")])]), _c("li", {
    staticClass: "nav-item"
  }, [_c("span", {
    class: _vm.activeTab === "details" ? "nav-link active" : "nav-link",
    attrs: {
      id: "details_tab"
    },
    on: {
      click: function ($event) {
        _vm.activeTab = "details";
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.details.details")) + " ")])])]), _c("div", {
    staticClass: "wallet-tab-content py-1"
  }, [_c("div", [_vm.activeTab === "overview" ? _c("div", {
    staticClass: "px-4 mt-2"
  }, [_c("h5", {
    staticClass: "text-bold"
  }, [_vm._v(_vm._s(_vm.$t("pages.details.description")))]), _c("markdown-it-vue-light", {
    staticClass: "md-body",
    attrs: {
      content: _vm.nftAsset.description || _vm.defaultDescription
    }
  })], 1) : _vm._e(), _vm.activeTab === "details" ? _c("div", {
    staticClass: "table"
  }, [_c("table", {
    staticClass: "table bg-white border-0 mb-1 mt-1"
  }, [_c("tbody", {
    staticClass: "font-weight-normal"
  }, [_c("tr", {
    staticClass: "border-top-0"
  }, [_c("td", {
    staticClass: "text-muted text-left small-12"
  }, [_vm._v(" " + _vm._s(_vm.$t("common.account", {
    count: 1
  })) + " ")]), _vm.nftAsset.asset_contract ? _c("td", {
    staticClass: "text-break"
  }, [_c("a", {
    staticClass: "text-primary d-flex align-items-center",
    attrs: {
      href: _vm.addressLink,
      target: "_blank"
    }
  }, [_c("img", {
    staticClass: "asset-icon mr-1",
    attrs: {
      src: _vm.getAssetIcon(_vm.asset)
    }
  }), _vm._v(" " + _vm._s(_vm.shortenAddress(_vm.address)) + " "), _c("CopyIcon", {
    staticClass: "copy-icon",
    on: {
      click: function ($event) {
        return _vm.copy(_vm.address);
      }
    }
  })], 1)]) : _vm._e()]), _c("tr", [_c("td", {
    staticClass: "text-muted text-left small-12"
  }, [_vm._v(" " + _vm._s(_vm.$t("common.contractAddress")) + " ")]), _vm.nftAsset.asset_contract ? _c("td", {
    staticClass: "text-break"
  }, [_c("span", {
    staticClass: "text-primary d-flex align-items-center"
  }, [_vm._v(" " + _vm._s(_vm.shortenAddress(_vm.nftAsset.asset_contract.address)) + " "), _c("CopyIcon", {
    staticClass: "copy-icon",
    on: {
      click: function ($event) {
        return _vm.copy(_vm.nftAsset.asset_contract.address);
      }
    }
  })], 1)]) : _vm._e()]), _c("tr", [_c("td", {
    staticClass: "text-muted text-left small-12",
    attrs: {
      id: "your_to_address"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.tokenID")) + " ")]), _vm.nftAsset.token_id ? _c("td", {
    staticClass: "text-break"
  }, [_c("span", {
    staticClass: "text-primary"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset.token_id) + " "), _c("CopyIcon", {
    staticClass: "copy-icon",
    on: {
      click: function ($event) {
        return _vm.copy(_vm.nftAsset.token_id);
      }
    }
  })], 1)]) : _vm._e()]), _c("tr", [_c("td", {
    staticClass: "text-muted text-left small-12"
  }, [_vm._v(" " + _vm._s(_vm.$t("common.tokenStandard")) + " ")]), _c("td", {
    staticClass: "text-break"
  }, [_vm._v(" " + _vm._s(_vm.nftAsset.standard || "-") + " ")])]), _vm.nftAsset.amount && _vm.nftAsset.amount > 1 ? _c("tr", [_c("td", {
    staticClass: "text-muted text-left small-12"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.details.youOwn")) + " ")]), _c("td", {
    staticClass: "text-break"
  }, [_vm._v(_vm._s(_vm.nftAsset.amount))])]) : _vm._e(), _c("tr", [_c("td", {
    staticClass: "text-muted text-left small-12"
  }, [_vm._v("Blockchain")]), _c("td", {
    staticClass: "text-break text-capitalize"
  }, [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAccountIcon(_vm.chain)
    }
  }), _vm._v(" " + _vm._s(_vm.chain) + " ")])])])])]) : _vm._e()])])])])] : _vm._e()], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.nft-quantity {\n  font-size: 12px;\n  color: #ffffff;\n  background: #464646;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  padding: 0;\n  position: absolute;\n  bottom: 4px;\n  left: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-69aa2ad7] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-69aa2ad7] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-69aa2ad7] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-69aa2ad7] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-69aa2ad7] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-69aa2ad7] {\n  text-align: left !important;\n}\n.text-right[data-v-69aa2ad7] {\n  text-align: right !important;\n}\n.text-center[data-v-69aa2ad7] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-69aa2ad7] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-69aa2ad7] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-69aa2ad7] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-69aa2ad7] {\n    text-align: left !important;\n}\n.text-md-right[data-v-69aa2ad7] {\n    text-align: right !important;\n}\n.text-md-center[data-v-69aa2ad7] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-69aa2ad7] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-69aa2ad7] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-69aa2ad7] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-69aa2ad7] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-69aa2ad7] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-69aa2ad7] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-69aa2ad7] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-69aa2ad7] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-69aa2ad7] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-69aa2ad7] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-69aa2ad7] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-69aa2ad7] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-69aa2ad7] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-69aa2ad7] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-69aa2ad7] {\n  font-style: italic !important;\n}\n.text-white[data-v-69aa2ad7] {\n  color: #fff !important;\n}\n.text-primary[data-v-69aa2ad7] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-69aa2ad7]:hover, a.text-primary[data-v-69aa2ad7]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-69aa2ad7] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-69aa2ad7]:hover, a.text-secondary[data-v-69aa2ad7]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-69aa2ad7] {\n  color: #28a745 !important;\n}\na.text-success[data-v-69aa2ad7]:hover, a.text-success[data-v-69aa2ad7]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-69aa2ad7] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-69aa2ad7]:hover, a.text-info[data-v-69aa2ad7]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-69aa2ad7] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-69aa2ad7]:hover, a.text-warning[data-v-69aa2ad7]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-69aa2ad7] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-69aa2ad7]:hover, a.text-danger[data-v-69aa2ad7]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-69aa2ad7] {\n  color: #f8faff !important;\n}\na.text-light[data-v-69aa2ad7]:hover, a.text-light[data-v-69aa2ad7]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-69aa2ad7] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-69aa2ad7]:hover, a.text-dark[data-v-69aa2ad7]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-69aa2ad7] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-69aa2ad7] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-69aa2ad7] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-69aa2ad7] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-69aa2ad7] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-69aa2ad7] {\n  text-decoration: none !important;\n}\n.text-break[data-v-69aa2ad7] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-69aa2ad7] {\n  color: inherit !important;\n}\nsvg[data-v-69aa2ad7] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-0f6b3557] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-0f6b3557] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-0f6b3557] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-0f6b3557] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-0f6b3557] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-0f6b3557] {\n  text-align: left !important;\n}\n.text-right[data-v-0f6b3557] {\n  text-align: right !important;\n}\n.text-center[data-v-0f6b3557] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-0f6b3557] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-0f6b3557] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-0f6b3557] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-0f6b3557] {\n    text-align: left !important;\n}\n.text-md-right[data-v-0f6b3557] {\n    text-align: right !important;\n}\n.text-md-center[data-v-0f6b3557] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-0f6b3557] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-0f6b3557] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-0f6b3557] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-0f6b3557] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-0f6b3557] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-0f6b3557] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-0f6b3557] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-0f6b3557] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-0f6b3557] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-0f6b3557] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-0f6b3557] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-0f6b3557] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-0f6b3557] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-0f6b3557] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-0f6b3557] {\n  font-style: italic !important;\n}\n.text-white[data-v-0f6b3557] {\n  color: #fff !important;\n}\n.text-primary[data-v-0f6b3557] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-0f6b3557]:hover, a.text-primary[data-v-0f6b3557]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-0f6b3557] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-0f6b3557]:hover, a.text-secondary[data-v-0f6b3557]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-0f6b3557] {\n  color: #28a745 !important;\n}\na.text-success[data-v-0f6b3557]:hover, a.text-success[data-v-0f6b3557]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-0f6b3557] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-0f6b3557]:hover, a.text-info[data-v-0f6b3557]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-0f6b3557] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-0f6b3557]:hover, a.text-warning[data-v-0f6b3557]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-0f6b3557] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-0f6b3557]:hover, a.text-danger[data-v-0f6b3557]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-0f6b3557] {\n  color: #f8faff !important;\n}\na.text-light[data-v-0f6b3557]:hover, a.text-light[data-v-0f6b3557]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-0f6b3557] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-0f6b3557]:hover, a.text-dark[data-v-0f6b3557]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-0f6b3557] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-0f6b3557] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-0f6b3557] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-0f6b3557] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-0f6b3557] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-0f6b3557] {\n  text-decoration: none !important;\n}\n.text-break[data-v-0f6b3557] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-0f6b3557] {\n  color: inherit !important;\n}\n.nft-asset[data-v-0f6b3557] {\n  position: absolute;\n  background: #f8f5f5;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n.nft-asset .navbar[data-v-0f6b3557] {\n  border-bottom: none !important;\n}\n.nft-asset--container[data-v-0f6b3557] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n}\n.nft-asset .nft-img[data-v-0f6b3557] {\n  width: 100%;\n  height: 85%;\n  display: flex;\n  justify-content: center;\n}\n.nft-asset .nft-img__open[data-v-0f6b3557] {\n  width: 100%;\n  height: 25%;\n  display: flex;\n  justify-content: center;\n}\n.nft-asset .nft-img img[data-v-0f6b3557] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 1px solid #c4c4c4 !important;\n}\n.nft-asset .nft-action-buttons[data-v-0f6b3557] {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top: 15px;\n}\n.nft-asset .nft-action-buttons__icon[data-v-0f6b3557] {\n  cursor: pointer;\n  width: 24px;\n  margin-right: 0.5rem;\n}\n.nft-asset .nft-action-buttons .star[data-v-0f6b3557],\n.nft-asset .nft-action-buttons .nft-quantity[data-v-0f6b3557] {\n  position: fixed;\n}\n.nft-asset .nft-action-buttons .star[data-v-0f6b3557] {\n  left: 16px;\n  cursor: pointer;\n}\n.nft-asset .nft-action-buttons .nft-quantity[data-v-0f6b3557] {\n  left: 50px;\n}\n.nft-asset .nft-action-buttons .send--share--actions[data-v-0f6b3557] {\n  position: fixed;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n.nft-asset .nft-details .markdown-body[data-v-0f6b3557] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.nft-asset .nft-details .markdown-body a[data-v-0f6b3557] {\n  color: #9d4dfa !important;\n  text-decoration: none;\n}\n.nft-asset .nft-details.drawer[data-v-0f6b3557] {\n  background: #ffffff;\n  border: 1px solid #d9dfe5;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 20%;\n  padding: 1rem;\n  border-radius: 15px 15px 0 0;\n}\n.nft-asset .nft-details_name[data-v-0f6b3557] {\n  font-size: 20px;\n  line-height: 26px;\n  font-weight: 600;\n}\n.nft-asset .nft-details_collection-details[data-v-0f6b3557] {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 500;\n}\n.nft-asset .drawer-open[data-v-0f6b3557] {\n  height: 75% !important;\n  overflow-y: scroll;\n}\n.nft-asset[data-v-0f6b3557]::after {\n  position: absolute;\n  content: \"\";\n}\n.nft-asset .nft-details_arrow[data-v-0f6b3557] {\n  width: 24px;\n  cursor: pointer;\n}\n.wallet-tabs[data-v-0f6b3557] {\n  margin: 0 -1rem;\n}\n.nav-tabs[data-v-0f6b3557] {\n  height: 48px;\n  cursor: pointer;\n  border-bottom: none !important;\n}\n.nav-tabs .nav-item[data-v-0f6b3557] {\n  width: 50%;\n  height: 100%;\n  margin-bottom: none !important;\n}\n.nav-tabs .nav-item .nav-link[data-v-0f6b3557] {\n  height: 100%;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #646f85;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none !important;\n  border-bottom: 1px solid #d9dfe5 !important;\n  padding: 0 !important;\n}\n.nav-tabs .nav-item .nav-link.active[data-v-0f6b3557], .nav-tabs .nav-item .nav-link[data-v-0f6b3557]:hover {\n  color: #000d35 !important;\n  font-weight: 600;\n  border: none !important;\n  border-bottom: 1px solid #1d1e21 !important;\n}\n.wallet-tab-content a[data-v-0f6b3557] {\n  color: #1d1e21;\n}\n.wallet-tab-content a[data-v-0f6b3557]:hover {\n  text-decoration: none;\n}\n.wallet-tab-content .table table tr[data-v-0f6b3557] {\n  padding: 12px 20px !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6adbddc2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2d1c6605", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("50b3ef94", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/icons/send_nft.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/send_nft.svg ***!
  \***************************************/
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
        "x": ".5",
        "y": ".5",
        "width": "43",
        "height": "43",
        "rx": "21.5",
        "fill": "#fff",
        "stroke": "#D9DFE5"
      }
    }), _c('path', {
      attrs: {
        "d": "M22.58 28.75V17.038l4.646 3.905.774-.803-5.613-4.744A.513.513 0 0022 15.25a.513.513 0 00-.387.146L16 20.14l.774.803 4.645-3.941V28.75h1.162z",
        "fill": "#9D4DFA",
        "stroke": "#9D4DFA",
        "stroke-width": "1.4"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/share_nft.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/share_nft.svg ***!
  \****************************************/
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
        "fill": "#fff",
        "stroke": "#D9DFE5"
      }
    }), _c('path', {
      attrs: {
        "d": "M23.567 12.66a.543.543 0 000 .772l2.55 2.523h-2.262c-4.331 0-7.855 3.487-7.855 7.772 0 4.286 3.524 7.773 7.855 7.773.197 0 .38-.104.478-.273a.541.541 0 000-.546.553.553 0 00-.478-.273 6.788 6.788 0 01-4.774-1.957 6.646 6.646 0 01-1.977-4.724c0-1.771.71-3.47 1.977-4.724a6.789 6.789 0 014.774-1.956h2.261l-2.55 2.522a.542.542 0 00.248.913c.19.05.394-.003.533-.14l3.491-3.455a.544.544 0 00.069-.083c.005-.007.008-.015.012-.023h0a.532.532 0 00.038-.07c.005-.01.007-.022.01-.033a.534.534 0 000-.355c-.003-.01-.005-.022-.01-.032a.519.519 0 00-.038-.07l-.012-.024h0a.544.544 0 00-.069-.083l-3.49-3.454a.555.555 0 00-.781 0h0z",
        "fill": "#9D4DFA",
        "stroke": "#9D4DFA",
        "stroke-width": "1.2"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/nft_thumbnail.png":
/*!**************************************!*\
  !*** ./src/assets/nft_thumbnail.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx7SURBVHgB7d1vehvVFcfxMyPJdlp4EqChIX/AaoEmfUN2gFlCV9B2BQkraLKChhU0O+gScHcQ3pQSeCqHNMElEJyHQBxJM7dzRprUSfR3fEeac+f7AT+KJcfRo9Fvzrl37mgiKenL3t2dRFqXI5EPRdzl7K5T4y/AioPsa08kyr6Sz2KR3fe6F3alhGiZH+71eqeGsnUllfSqEBqEaS8LxW4i8fVL3bf2Fv1LCwVJAzSQzb84cVcFaIgsHDcXDdTcIN2+s3/Fpck1oQKhmbIK5a6/3z1/c9YPzQzS7d79v1KFAA1KdOP97tmPpz8+wbiV+3sWoh0BULi1If2Put3uwYsPxJN++qnr7BIi4CWXtcBMeuClIGk7F0XRBwLgJVpgNCMv3v9ca3e7958/OYn+JgBmynLy8cXu2RvF98+C9Hnvm+1Y0k+zP24LgHkOsvFStxgvPWvtYpdPcW8LgEXkx1aLb/KKNK5GPQGwlKwqvaZVKa9I42oEYEn9tJ0fZx21dlH0oQBYXhxf0ZtIV3GnEn8qAEpJJf0oTkV2BEBpkUSX42xC/LIAOIZoJ46i+B0BUFo29f1B7Dh2BBzXKZ214zwj4HhOxQLg2AgS4AFBAjwgSIAHBAnwgCABHhAkwAOCBHhAkAAPCBLgAUECPCBIgAcECfCAIAEeECTAA4IEeECQAA8IEuABQQI8IEiABwQJ8IAgAR60BWvhXCpp6rJbl9/qNeBSN/o+fzx1E/9eFI+uDRdF0egr+y+O9SvOvtf72TeuA0FagVFYUkmSLDxZgFz6/8As/bvGAct+w8TH83BpsLJAtVrxOGCRoFoEqSJpmshwmIUnu51WXaqgAXWJ0yskZP/+6D4NVituSbvdyoMF/wiSR8/CkySlK04VNMjDdJg9t2FenbRStdttQuURQTomDYy+QYfJaitPWaPnm+RfGqpOp50Fq0X7d0wEqaS6Vp9l6PPu9wfZnwZ529fpdAhUSQRpSRqg/mAoaTZxEJKiShGocgjSgnTv/bTfDy5ALyJQ5RCkOTRAg8FooN4kBGo5BGkGHf/oGMLqGMgHDZMe/9JJCZ3pw2S8MhM0pY1bVDEpoQeVqU6TEaQXaAunrVyTq9A0VKfpeDXGmjoWWlZRnfRWw0R1GuHQtoxbuad9QrQE3ekcHj6lco81Pkh6XEjfENr/YzkaIl67kUYHSSvQ4WGfveoxFGEaDAbSZI0dI+mG1/YEfhSvpc7qNVEjKxIhqoa+pk2tTI0LEiGqVlPD1KggEaLVaGKYGhMkQrRaTQtTI4JEiNajSQe4gw+SHiciROtTrNELXdBBGi1nIUTrpqtGQj9WF2yQimU/HHVfv+KgbchhCjZI2s4RovooPiQmVEEGSU/IYwFq/YQ8+RBckIrTIVBPoZ7rFVyQaOnqbTQB1JfQBBUkWjob9Czb0LZTMEGipbMltBYvmCDR0tkS2ixeEEEKfWo1VCFVpSCCREtnVygTD+aDRDWyLb/4WgAtufkgUY3sC+F0C9NBohqFIYSqZDpIVKNwWN8hmg0S1SgsWpUsz+CZDRLHjMJifcdoNki0deHRD+m3ymSQ9PRxKlJ4tCpZ3a4mg6QXQUaYrLZ3RisSQQpVYvTibuaCRFsXNqvtnbkg0daFz2J7Z7AiEaTQpam940mmLuviu+yffuOknH791Ev365m2vbv70i85xf77996ZeH9/MJCv9u5PfOzcmTfk5KuviE8PHh7Ig+8fPXffK7/YkrfP/Vqq9NXevdKvndJtrNva0mU1TQXJdzVqxbFsdCa8BNl9726fky/+fbfU4Hfi7yz7XI5Bf+ckvv+dKmhVarXsBMlUa7fKGR19s505/bpgPZLE1jjJVJBSt9rx0enXT+ZfWD1r6+5MBcmtYRCqVenE1qZgtaxNOJgJUjEAXbVWK5buhTP5LVZHt7WlqmRosmF9L6qOl94++2Y+k7cO9/77nTx5svxnG/QnnHn6+OdD+eeXd2b+PZ3J1BnNic9l/3t59ONjmf3v+hnfWJpwMBOkdZf6k6/+Mh8vPXj4SFZNQ/T45yfiy7w3epImMx/rr2jlvcvHxDY6AUOt3frL/Lkzv8qOw5wQrIalg+9mglSXfvntc28yXsJL7ARJ6hEkHS/p5AOqlxqabLCza13xa5rMaCu0vTtz+jVBtZyhKXBTS4RW6d7+d/mYaNoyGz2+9PinQ6+TANNsbLRlY7D8pupzOv7KGJq1W+3AUy/i3Pt6X97dPjv1Z7TF0/V4Vb9hdep9Wfqc5k1z152l40iMmmfQajNrulsnHXTyASBIc2iLN6t90/GStoBoNoK0gK/vfTuzfdMDtXrAFs1FkBagIdIwzaLjGAvn+aAabPkFaXu3/+CHqdPexeLWr+7cF9/KTGb0A7jCgyVmghRn09DrXjKy/+ChvPLLranLhPR0iypOBtRquIpp9rqxdKo5rd2S5n2WAycC+kOQqlCT11RPd583XoIndnJkJ0hxjfZO2mbpeTmoVp22+TyGWrt6vaj6UVePfvxJAGWnIsX12zt9ff9b1rNVKI7t7OfNPNM6Djx1vKSTDwmf/loJglSBur6oTw6fyv63Pwj8MzREslWR6jodquOlh49+FPgz2t5UpErUcZxU0MWtjJf8iWq8rScxFaQ676F0vKQfHs94yQ9LU9/K1Fo7Xc/m89I5+ub3WUX0d+l4adpnws1a/+b7uRzHrOeiV+pYhVbL1jLQ6IvePTOnIeoZk0+eHArCd+LEFkuEqqIvrKUpUZSj29hSiJS5dyVBCl+dJ5WmMfeubLdbgrC12/ZOkzNZkayVfSzOavtusk9qtahKobL6cdAmnzXtXbgstnXKZJC09DPpEB7Ls7Jm341cESI8nU5HrDL7btQWgEmHsFjeOZp95hoiJh3CoeNeyztG0/0Rkw7hsNzWKdNB0oEpYyX7rFcjZf5daH1PhjC2ofkgUZVsC6EaqSDegRsbGwKbQukoggiS7tGsHhFvslCqkQqmJ+p0OK5kiW6rkMa3wQRJN8zGBhMPVmiIQtrxBTVK1wO0TDzUn7Z0oR0DDO5dpxMPtHj1FVpLVwguSLR49RZaS1cIsg/SFo9ZvPrRbRLqsq5gBxQ6i8c5S/UxaunC3bkF+07TDbe5yXipDnQbbG1tBr0tgt5lF2HCejVhhxZ876PtHZMP66OTC01osRsxiNBBLqvEV09f85DHRUc1ZjSuG5QwrU6TQqQaNa1FmFajaSFSjZsfJkzVamKIVCMPtBCmajQ1RKqxh/+LDT6YcfEvLE5nRpu8mqTR62g0TLpavN8fSMolK0spjtU1fRVJ49fQ6BuAN0I5xYoFXjuClCv2qix0XZy+VqEv+1kG75yx4vQLbfUGgyGt3hTF+UR8OOfzCNIL9BQMbVU0TMNhPa4yXhdxtpPZ5MTJiQjSBFSn51GF5iNIM1CdinWKfELTPARpjqI66ZupSYGijVsOQVpQUwKlAdpoyKkPPhGkJYUYqNG1puK8jSNA5RCkko4GSicjLE5KRHEk7VY7qI8OXheCdEzFlQP1S4M0HCb5bV1DVTxfDQ/Vxx+C5NHotPbRm7NOoSquAk94qkOQKnI0VM65PExJkoXKpeJSl99XBa042rLF0ei6Ufo8aNuqR5BW4Gj7V9AgjQI2CpmTcbjy/10etom/K46e/c44D0g0DosQmjUiSGuSVw4NQ160WDFgHQ0z4AFBAjwgSIAHBAnwgCABHhAkwAOCBHhAkAAPCBLgAUECPCBIgAcECfCAIAEeECTAA4IEeECQAA8IEuABQQI8IEiABwQJ8IAgAR4QJMADDdKBADiOA4IEHN9eLC79TACU5kTuxC6KdgVAaZGkt2In7pYAKC0V2c0/cf2L3r0fsptTAmBZe7/rnuuOp7/TTwTA0qJIdvU2D9KGDG8IgKUlLr6ut3mQut3ugaMqAUvJqtHNS9239vTPz1Y2bMrwmnBMCVjUXlGN1LMgjaqSuy4A5kqzrBTVSD231u5i9/wNWjxgNpemn1zqnr959L6JFxy9vXf/U+fcjgB4TpaLzy7+5vzlF++fuPq7457+IUsYB2qBIyJxu5vRYGfyYzP8q3f3RiTxFQEaTtu5i7+9cHXa4zPPR7rYvXA1G1T9OfvjngDNpJNwH88KkZpZkQqf977Zjl1yLZs4/6MADaFVaDMeXtMZ7Xk/u1CQCkcC9WH27bYA4TlIs5nrLRneWCRAhaWCdNTnvbs7WV+4I1H8QeRk242CxcJXWHKQf0Vyy7noH06SW5e6F3alhP8BoAg/g4J+plkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/icons/NFTQuantity.vue":
/*!**********************************************!*\
  !*** ./src/components/icons/NFTQuantity.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NFTQuantity.vue?vue&type=template&id=6c8f0c1c& */ "./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c&");
/* harmony import */ var _NFTQuantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NFTQuantity.vue?vue&type=script&lang=js& */ "./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& */ "./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NFTQuantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icons/NFTQuantity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTQuantity.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=style&index=0&id=6c8f0c1c&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_style_index_0_id_6c8f0c1c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c&":
/*!*****************************************************************************!*\
  !*** ./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTQuantity.vue?vue&type=template&id=6c8f0c1c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/NFTQuantity.vue?vue&type=template&id=6c8f0c1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTQuantity_vue_vue_type_template_id_6c8f0c1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/icons/Star.vue":
/*!***************************************!*\
  !*** ./src/components/icons/Star.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Star.vue?vue&type=template&id=69aa2ad7&scoped=true& */ "./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true&");
/* harmony import */ var _Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Star.vue?vue&type=script&lang=js& */ "./src/components/icons/Star.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& */ "./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69aa2ad7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icons/Star.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/icons/Star.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/icons/Star.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Star.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=style&index=0&id=69aa2ad7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_style_index_0_id_69aa2ad7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Star.vue?vue&type=template&id=69aa2ad7&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/icons/Star.vue?vue&type=template&id=69aa2ad7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Star_vue_vue_type_template_id_69aa2ad7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Details/NFTAssetDetails.vue":
/*!***********************************************!*\
  !*** ./src/views/Details/NFTAssetDetails.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true& */ "./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true&");
/* harmony import */ var _NFTAssetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NFTAssetDetails.vue?vue&type=script&lang=js& */ "./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& */ "./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NFTAssetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f6b3557",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Details/NFTAssetDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTAssetDetails.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=style&index=0&id=0f6b3557&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_style_index_0_id_0f6b3557_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Details/NFTAssetDetails.vue?vue&type=template&id=0f6b3557&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_NFTAssetDetails_vue_vue_type_template_id_0f6b3557_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.js.map