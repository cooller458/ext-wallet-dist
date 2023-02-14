(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/@liquality/wallet-core/dist/src/utils/fetchTokenDetails.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@liquality/wallet-core/dist/src/utils/fetchTokenDetails.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAINS_WITH_FETCH_TOKEN_DETAILS = void 0;
const cryptoassets_1 = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
const types_1 = __webpack_require__(/*! ../store/types */ "./node_modules/@liquality/wallet-core/dist/src/store/types.js");
exports.CHAINS_WITH_FETCH_TOKEN_DETAILS = Object.values(cryptoassets_1.ChainId).reduce((result, chainId) => {
    const chain = (0, cryptoassets_1.getChain)(types_1.Network.Mainnet, chainId);
    if (chain.hasTokens) {
        result.push({
            chainId,
            label: `${capitalizeFirstLetter(chain.name)} (${chain.nativeAsset[0].code.toUpperCase()})`,
        });
    }
    return result;
}, []);
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//# sourceMappingURL=fetchTokenDetails.js.map

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomToken.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fetchTokenDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/fetchTokenDetails */ "./node_modules/@liquality/wallet-core/dist/src/utils/fetchTokenDetails.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fetchTokenDetails__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_fetchTokenDetails__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBar.vue */ "./src/components/NavBar.vue");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/chevron_up.svg */ "./src/assets/icons/chevron_up.svg");
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _liquality_error_parser_dist_src_LiqualityErrors_DuplicateTokenSymbolError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/error-parser/dist/src/LiqualityErrors/DuplicateTokenSymbolError */ "./node_modules/@liquality/error-parser/dist/src/LiqualityErrors/DuplicateTokenSymbolError.js");
/* harmony import */ var _liquality_error_parser_dist_src_LiqualityErrors_DuplicateTokenSymbolError__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_LiqualityErrors_DuplicateTokenSymbolError__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @liquality/error-parser/dist/src/utils */ "./node_modules/@liquality/error-parser/dist/src/utils/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/error-parser */ "./node_modules/@liquality/error-parser/dist/src/index.js");
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    ChevronUpIcon: (_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_6___default())
  },
  data() {
    return {
      contractAddress: '',
      name: null,
      symbol: null,
      decimals: null,
      chain: null,
      autofilled: false,
      chainDropdownOpen: false,
      isSymbolEditable: false,
      chainsWithFetchingTokenDetails: _liquality_wallet_core_dist_src_utils_fetchTokenDetails__WEBPACK_IMPORTED_MODULE_3__["CHAINS_WITH_FETCH_TOKEN_DETAILS"],
      addingToken: false
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork', 'accounts', 'activeWalletId', 'enabledAssets']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['accountsData']),
    networkAssets() {
      return this.enabledAssets[this.activeNetwork][this.activeWalletId];
    },
    isExistingNetworkAsset() {
      return Boolean(this.networkAssets.find(_symbol => _symbol === this.symbol));
    },
    symbolError() {
      if (!this.autofilled && Object.keys(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default.a).includes(this.symbol) || this.isExistingNetworkAsset) {
        return this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors_DuplicateTokenSymbolError__WEBPACK_IMPORTED_MODULE_7__["DuplicateTokenSymbolError"]());
      }
      return null;
    },
    canAdd() {
      if (!this.symbol || !this.name || !this.chain || !this.contractAddress || this.decimals.length <= 0) return false;
      if (this.symbol && this.symbolError) return false;
      return true;
    },
    existingAsset() {
      const existingAsset = Object.values(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default.a).find(asset => asset.type === 'erc20' && asset.contractAddress.toLowerCase() === this.contractAddress.toLowerCase() && asset.chain === this.chain);
      return existingAsset ? {
        ...existingAsset,
        symbol: existingAsset.code
      } : null;
    }
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['enableAssets', 'addCustomToken', 'toggleBlockchain', 'toggleAccount', 'fetchTokenDetails']),
    async addToken() {
      if (!this.existingAsset) {
        try {
          this.addingToken = true;
          // Add only if it does not already exist
          await this.addCustomToken({
            network: this.activeNetwork,
            walletId: this.activeWalletId,
            chain: this.chain,
            contractAddress: this.contractAddress,
            name: this.name,
            symbol: this.symbol,
            decimals: Number(this.decimals)
          });
          const isChainEnabledForNative = this.accountsData.find(account => account.chain === this.chain);
          if (!isChainEnabledForNative) {
            await this.enableChain();
          }
          await this.enableAssets({
            network: this.activeNetwork,
            walletId: this.activeWalletId,
            assets: [this.symbol]
          });
          this.$router.replace('/settings/manage-assets');
        } catch (error) {
          const liqualityErrorString = Object(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_8__["errorToLiqualityErrorString"])(error);
          Object(_liquality_error_parser__WEBPACK_IMPORTED_MODULE_9__["reportLiqualityError"])(error);
          return {
            error: liqualityErrorString
          };
        } finally {
          this.addingToken = false;
        }
      }
    },
    async enableChain() {
      await this.toggleBlockchain({
        network: this.activeNetwork,
        walletId: this.activeWalletId,
        chainId: this.chain,
        enable: true
      });
      const accountIds = this.accounts[this.activeWalletId][this.activeNetwork].filter(acc => acc.chain === this.chain).map(a => a.id);
      await this.toggleAccount({
        network: this.activeNetwork,
        walletId: this.activeWalletId,
        accounts: accountIds,
        enable: true
      });
    },
    contractAddressPaste(e) {
      this.$nextTick(() => {
        this.contractAddress = e.clipboardData.getData('text');
        this.fetchToken();
      });
    },
    contractAddressChange(e) {
      if (this.contractAddress === e.target.value) return;
      this.contractAddress = e.target.value;
      this.fetchToken();
    },
    resetFields() {
      this.symbol = null;
      this.name = null;
      this.decimals = null;
      this.assetExists = false;
      this.autofilled = false;
    },
    fetchToken: Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__["debounce"])(async function () {
      this.resetFields();
      let customToken;
      if (this.existingAsset) {
        customToken = this.existingAsset;
      } else if (this.activeNetwork === 'mainnet' && this.contractAddress) {
        const {
          symbol,
          name,
          decimals
        } = await this.fetchTokenDetails({
          network: this.activeNetwork,
          walletId: this.activeWalletId,
          chain: this.chain,
          contractAddress: this.contractAddress
        });
        customToken = {
          symbol,
          name,
          decimals: parseInt(decimals),
          chain: this.chain
        };
      }
      if (customToken) {
        this.symbol = customToken.symbol;
        this.name = customToken.name;
        this.decimals = customToken.decimals;
        this.autofilled = true;
        this.isSymbolEditable = Boolean(this.networkAssets.find(_symbol => _symbol === this.symbol));
      }
    }, 500),
    async selectChain(chain) {
      this.chain = chain;
      this.chainDropdownOpen = false;
      this.resetFields();
      this.fetchToken();
    },
    isNumber(evt) {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const keyPressed = evt.key;
      // The Decimals field can only have 2 digits (0 - 99) and must be a number
      if (!keysAllowed.includes(keyPressed) || this.decimals.length == 2) {
        evt.preventDefault();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=template&id=86d3de84&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomToken.vue?vue&type=template&id=86d3de84& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "custom-token"
  }, [_c("NavBar", {
    attrs: {
      showMenu: true,
      showBack: true,
      backPath: "/settings/manage-assets",
      backLabel: _vm.$t("common.back")
    }
  }, [_c("span", {
    staticClass: "wallet_header"
  }, [_c("strong", [_vm._v(" " + _vm._s(_vm.$t("pages.customToken.addCustomToken")) + " ")])])]), _c("div", {
    staticClass: "wrapper form"
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "chain"
    }
  }, [_vm._v(_vm._s(_vm.$t("common.chain")))]), _c("div", {
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn dropdown-toggle",
    attrs: {
      id: "select_chain_dropdown",
      type: "button"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        _vm.chainDropdownOpen = !_vm.chainDropdownOpen;
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.chain || _vm.$t("pages.customToken.selectChain")) + " "), _vm.chainDropdownOpen ? _c("ChevronUpIcon") : _c("ChevronDownIcon")], 1), _c("ul", {
    staticClass: "dropdown-menu",
    class: {
      show: _vm.chainDropdownOpen
    }
  }, _vm._l(_vm.chainsWithFetchingTokenDetails, function (chain) {
    return _c("li", {
      key: chain.chainId
    }, [_c("a", {
      staticClass: "dropdown-item",
      class: {
        active: chain === chain.chainId
      },
      attrs: {
        id: `${chain.chainId}_chain`,
        href: "#"
      },
      on: {
        click: function ($event) {
          return _vm.selectChain(chain.chainId);
        }
      }
    }, [_vm._v(" " + _vm._s(chain.label) + " ")])]);
  }), 0)])]), _c("fieldset", {
    attrs: {
      disabled: !_vm.chain
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "contractAddress"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.customToken.tokenContractAddress")) + " ")]), _c("input", {
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      id: "contractAddress",
      placeholder: _vm.$t("common.address"),
      autocomplete: "off",
      required: ""
    },
    on: {
      change: _vm.contractAddressChange,
      paste: _vm.contractAddressPaste
    }
  }), _vm.contractAddress && _vm.existingAsset && !_vm.addingToken ? _c("small", {
    staticClass: "text-danger form-text text-right",
    attrs: {
      id: "token_with_this_symbol_exits"
    }
  }, [_vm._v(_vm._s(_vm.$t("pages.customToken.tokenExists")))]) : _vm._e()]), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "name"
    }
  }, [_vm._v(_vm._s(_vm.$t("pages.customToken.name")))]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      id: "name",
      placeholder: _vm.$t("pages.customToken.name"),
      autocomplete: "off",
      required: "",
      disabled: _vm.autofilled
    },
    domProps: {
      value: _vm.name
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  })]), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "tokenSymbol"
    }
  }, [_vm._v(_vm._s(_vm.$t("pages.customToken.tokenSymbol")))]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.symbol,
      expression: "symbol"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      id: "tokenSymbol",
      placeholder: "ABC",
      autocomplete: "off",
      required: "",
      disabled: _vm.autofilled && !_vm.isSymbolEditable
    },
    domProps: {
      value: _vm.symbol
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.symbol = $event.target.value;
      }
    }
  }), _vm.symbol && _vm.symbolError && !_vm.addingToken ? _c("small", {
    staticClass: "text-danger form-text text-right",
    attrs: {
      id: "token_with_this_symbol_exits"
    }
  }, [_vm._v(_vm._s(_vm.symbolError))]) : _vm._e()]), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      for: "decimals"
    }
  }, [_vm._v(_vm._s(_vm.$t("pages.customToken.decimals")))]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.decimals,
      expression: "decimals",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "number",
      maxlength: 2,
      id: "decimals",
      autocomplete: "off",
      required: ""
    },
    domProps: {
      value: _vm.decimals
    },
    on: {
      keypress: function ($event) {
        return _vm.isNumber($event);
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.decimals = $event.target.value.trim();
      },
      blur: function ($event) {
        return _vm.$forceUpdate();
      }
    }
  })])])]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("router-link", {
    attrs: {
      to: `/settings/manage-assets`
    }
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    attrs: {
      id: "cancel_add_token_button"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")])]), _c("button", {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      id: "add_token_button",
      disabled: !_vm.canAdd || _vm.existingAsset || _vm.isExistingNetworkAsset
    },
    on: {
      click: _vm.addToken
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.customToken.addToken")) + " ")])], 1)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.custom-token {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.custom-token .form-group {\n  margin-bottom: 30px;\n}\n.custom-token .dropdown .dropdown-menu {\n  min-width: 2rem;\n  border: 1px solid #d9dfe5;\n  border-radius: 0;\n  padding: 0;\n  margin: 0;\n}\n.custom-token .dropdown .dropdown-item {\n  height: 30px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.custom-token .dropdown .dropdown-item:not(:last-child) {\n  border-bottom: 1px solid #d9dfe5;\n}\n.custom-token .dropdown .dropdown-item:hover, .custom-token .dropdown .dropdown-item.active {\n  background-color: #f0f7f9;\n  color: #1d1e21;\n}\n.custom-token .dropdown-toggle {\n  text-transform: capitalize;\n  padding-left: 0 !important;\n  font-weight: 300;\n  display: flex;\n  align-items: center;\n}\n.custom-token .dropdown-toggle::after {\n  display: none;\n}\n.custom-token .dropdown-toggle svg {\n  width: 8px;\n  height: 4px;\n  margin-left: 2px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c1682258", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/CustomToken.vue":
/*!***********************************!*\
  !*** ./src/views/CustomToken.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomToken.vue?vue&type=template&id=86d3de84& */ "./src/views/CustomToken.vue?vue&type=template&id=86d3de84&");
/* harmony import */ var _CustomToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomToken.vue?vue&type=script&lang=js& */ "./src/views/CustomToken.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& */ "./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/CustomToken.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/CustomToken.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/CustomToken.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomToken.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=style&index=0&id=86d3de84&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_style_index_0_id_86d3de84_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/CustomToken.vue?vue&type=template&id=86d3de84&":
/*!******************************************************************!*\
  !*** ./src/views/CustomToken.vue?vue&type=template&id=86d3de84& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomToken.vue?vue&type=template&id=86d3de84& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/CustomToken.vue?vue&type=template&id=86d3de84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToken_vue_vue_type_template_id_86d3de84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=37.js.map