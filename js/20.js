(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@liquality/wallet-core/dist/src/utils/parseTokenTx.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@liquality/wallet-core/dist/src/utils/parseTokenTx.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTokenTx = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const ethers = tslib_1.__importStar(__webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js"));
const human_standard_token_abi_1 = tslib_1.__importDefault(__webpack_require__(/*! human-standard-token-abi */ "./node_modules/human-standard-token-abi/index.js"));
const hstInterface = new ethers.utils.Interface(human_standard_token_abi_1.default);
const parseTokenTx = (data) => hstInterface.parseTransaction({ data });
exports.parseTokenTx = parseTokenTx;
//# sourceMappingURL=parseTokenTx.js.map

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFees.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.vue");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/fees */ "./node_modules/@liquality/wallet-core/dist/src/utils/fees.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/icons/chevron_up.svg */ "./src/assets/icons/chevron_up.svg");
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChevronUpIcon: (_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9___default())
  },
  data() {
    return {
      fee: null,
      preset: null
    };
  },
  props: ['asset', 'selectedFee', 'fees', 'totalFees', 'fiatRates'],
  created() {
    var _this$fees$this$prese;
    this.preset = this.selectedFee || 'average';
    this.fee = (_this$fees$this$prese = this.fees[this.preset]) === null || _this$fees$this$prese === void 0 ? void 0 : _this$fees$this$prese.fee;
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapState"])(['activeNetwork']),
    nativeAsset() {
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getFeeAsset"])(this.asset) || Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getNativeAsset"])(this.asset);
    },
    gasUnit() {
      var _cryptoassets$this$as;
      const chainId = (_cryptoassets$this$as = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_6___default.a[this.asset]) === null || _cryptoassets$this$as === void 0 ? void 0 : _cryptoassets$this$as.chain;
      if (chainId) {
        var _getChain;
        const {
          unit
        } = ((_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_7__["getChain"])(this.activeNetwork, chainId)) === null || _getChain === void 0 ? void 0 : _getChain.fees) || '';
        return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getFeeAsset"])(this.asset) || unit;
      }
      return '';
    },
    customFiatAmount() {
      return this.getFiatAmount();
    },
    customFeeAmount() {
      return this.getFeeAmount();
    },
    stepSize() {
      const chainId = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_6___default.a[this.asset].chain;
      return {
        bitcoin: 1,
        ethereum: 1,
        near: 0.00001,
        solana: 0.00001
      }[chainId] || 0.001;
    }
  },
  methods: {
    getFeeLabel: _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_3__["getFeeLabel"],
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_1__["getAssetIcon"],
    cancel() {
      this.$emit('cancel');
    },
    apply() {
      this.$emit('apply', {
        asset: this.asset,
        fee: this.fee
      });
    },
    setCustomFee(fee) {
      this.fee = Math.abs(fee);
      this.$emit('update', {
        asset: this.asset,
        fee: this.fee
      });
    },
    setPreset(name) {
      var _this$fees$name;
      this.preset = name;
      this.fee = (_this$fees$name = this.fees[name]) === null || _this$fees$name === void 0 ? void 0 : _this$fees$name.fee;
    },
    incrementFee() {
      this.setCustomFee(this.fee + this.stepSize);
    },
    decrementFee() {
      if (this.fee && this.fee > 0) {
        this.setCustomFee(this.fee - this.stepSize);
      }
    },
    getFeeAmount(name) {
      if (!name) name = this.preset || 'custom';
      if (this.totalFees && this.totalFees[name]) {
        const totalFee = bignumber_js__WEBPACK_IMPORTED_MODULE_4___default()(this.totalFees[name]).dp(6);
        return totalFee.eq(0) ? `${bignumber_js__WEBPACK_IMPORTED_MODULE_4___default()(this.fee).dp(6)} ${this.gasUnit} ${this.nativeAsset}` : `${totalFee} ${this.nativeAsset}`;
      } else {
        const unit = this.gasUnit();
        return `${this.fee || 0} ${unit}`;
      }
    },
    getFiatAmount(name) {
      if (!name) name = this.preset || 'custom';
      if (this.totalFees && this.totalFees[name]) {
        const totalFiat = Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_5__["prettyFiatBalance"])(this.totalFees[name], this.fiatRates[this.nativeAsset]);
        return `${totalFiat} USD`;
      }
      return '';
    }
  },
  watch: {
    fee: function (val) {
      if (this.fees) {
        var _this$fees, _this$fees$slow, _this$fees2, _this$fees2$average, _this$fees3, _this$fees3$fast;
        this.preset = {
          [(_this$fees = this.fees) === null || _this$fees === void 0 ? void 0 : (_this$fees$slow = _this$fees.slow) === null || _this$fees$slow === void 0 ? void 0 : _this$fees$slow.fee]: 'slow',
          [(_this$fees2 = this.fees) === null || _this$fees2 === void 0 ? void 0 : (_this$fees2$average = _this$fees2.average) === null || _this$fees2$average === void 0 ? void 0 : _this$fees2$average.fee]: 'average',
          [(_this$fees3 = this.fees) === null || _this$fees3 === void 0 ? void 0 : (_this$fees3$fast = _this$fees3.fast) === null || _this$fees3$fast === void 0 ? void 0 : _this$fees3$fast.fee]: 'fast'
        }[val || 0];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.vue");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/fees */ "./node_modules/@liquality/wallet-core/dist/src/utils/fees.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/icons/chevron_up.svg */ "./src/assets/icons/chevron_up.svg");
/* harmony import */ var _assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @liquality/error-parser/dist/src/LiqualityErrors */ "./node_modules/@liquality/error-parser/dist/src/LiqualityErrors/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChevronUpIcon: (_assets_icons_chevron_up_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_9___default())
  },
  data() {
    return {
      basicPreset: null,
      customizePreset: null,
      fee: null,
      suggestedBaseFeePerGas: null,
      tipFee: null,
      maxFee: null,
      hasError: false,
      view: 'basic'
    };
  },
  props: ['asset', 'selectedFee', 'fees', 'totalFees', 'fiatRates', 'padLabels'],
  created() {
    this.basicPreset = this.selectedFee || 'average';
    this.customizePreset = 'Med';
    this.suggestedBaseFeePerGas = this.fees[this.basicPreset].fee.suggestedBaseFeePerGas;
    this.tipFee = this.fees[this.basicPreset].fee.maxPriorityFeePerGas;
    this.maxFee = this.fees[this.basicPreset].fee.maxFeePerGas;
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapState"])(['activeNetwork']),
    // TODO: move erro handling to wallet-core
    noTipError() {
      return !this.tipFee ? this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__["NoTipError"]()) : null;
    },
    veryLowTipError() {
      return !this.noTipError && this.tipFee < this.fees.slow.fee.maxPriorityFeePerGas ? this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__["VeryLowTipError"]()) : null;
    },
    veryHighTipWarning() {
      return this.tipFee > this.fees.fast.fee.maxPriorityFeePerGas ? this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__["VeryHighTipWarning"]()) : null;
    },
    noMaxFeeError() {
      return !this.maxFee ? this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__["NoMaxFeeError"]()) : null;
    },
    veryLowMaxFeeError() {
      return this.maxFee < this.fees.slow.fee.maxFeePerGas ? `Max fee too low. Must be > ${this.fees.slow.fee.maxFeePerGas} GWEI (Base Fee plus Miner Tip).` : null;
    },
    veryHighFeeWarning() {
      return this.maxFee > this.fees.fast.fee.maxFeePerGas ? this.$tle(new _liquality_error_parser_dist_src_LiqualityErrors__WEBPACK_IMPORTED_MODULE_11__["VeryHighMaxFeeWarning"]({
        maxFeePerGas: this.fees.fast.fee.maxFeePerGas
      })) : null;
    },
    slowPreset() {
      var _this$fees;
      return this.presetBase((_this$fees = this.fees) === null || _this$fees === void 0 ? void 0 : _this$fees.slow, this.totalFees.slow);
    },
    averagePreset() {
      var _this$fees2;
      return this.presetBase((_this$fees2 = this.fees) === null || _this$fees2 === void 0 ? void 0 : _this$fees2.average, this.totalFees.average);
    },
    fastPreset() {
      var _this$fees3;
      return this.presetBase((_this$fees3 = this.fees) === null || _this$fees3 === void 0 ? void 0 : _this$fees3.fast, this.totalFees.fast);
    },
    nativeAsset() {
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getFeeAsset"])(this.asset) || Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getNativeAsset"])(this.asset);
    },
    gasUnit() {
      var _cryptoassets$this$as;
      const chainId = (_cryptoassets$this$as = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default.a[this.asset]) === null || _cryptoassets$this$as === void 0 ? void 0 : _cryptoassets$this$as.chain;
      if (chainId) {
        var _getChain;
        const {
          unit
        } = ((_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_3__["getChain"])(this.activeNetwork, chainId)) === null || _getChain === void 0 ? void 0 : _getChain.fees) || '';
        return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_0__["getFeeAsset"])(this.asset) || unit;
      }
      return '';
    },
    stepSize() {
      return 1;
    },
    minerTip() {
      var _this$fees$this$custo;
      return ((_this$fees$this$custo = this.fees[this.customizePreset]) === null || _this$fees$this$custo === void 0 ? void 0 : _this$fees$this$custo.fee.maxPriorityFeePerGas) || this.tipFee;
    },
    maximumFee() {
      var _this$fees$this$custo2;
      return ((_this$fees$this$custo2 = this.fees[this.customizePreset]) === null || _this$fees$this$custo2 === void 0 ? void 0 : _this$fees$this$custo2.fee.maxFeePerGas) || this.maxFee;
    },
    minerTipFiat() {
      const fiat = Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, this.minerTip), this.fiatRates[this.nativeAsset]);
      return isNaN(fiat) ? 0 : fiat;
    },
    maxFiat() {
      const fiat = Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, this.maximumFee), this.fiatRates[this.nativeAsset]);
      return isNaN(fiat) ? 0 : fiat;
    },
    minimum() {
      const minimumFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["probableFeePerUnitEIP1559"])({
        maxFeePerGas: this.maximumFee,
        maxPriorityFeePerGas: this.minerTip,
        suggestedBaseFeePerGas: this.suggestedBaseFeePerGas
      });
      const totalMinFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, minimumFee).plus(this.totalFees.slow);
      return {
        amount: bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(totalMinFee).dp(6),
        fiat: Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(this.totalFees.slow, this.fiatRates[this.nativeAsset])
      };
    },
    maximum() {
      const maximumFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["maxFeePerUnitEIP1559"])({
        maxFeePerGas: this.maximumFee,
        maxPriorityFeePerGas: this.minerTip,
        suggestedBaseFeePerGas: this.suggestedBaseFeePerGas
      });
      const totalMaxFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, maximumFee).plus(this.totalFees.fast);
      return {
        amount: bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(totalMaxFee).dp(6),
        fiat: Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(this.totalFees.fast, this.fiatRates[this.nativeAsset])
      };
    },
    formatedMinerTip() {
      return bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(this.minerTip).dp(6);
    },
    formatedMaximum() {
      return bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(this.maximumFee).dp(6);
    }
  },
  methods: {
    getFeeLabel: _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getFeeLabel"],
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_1__["getAssetIcon"],
    changeView(view) {
      this.view = view;
    },
    selectPreset(basicPreset) {
      this.basicPreset = basicPreset;
      this.tipFee = this.fees[basicPreset].fee.maxPriorityFeePerGas;
      this.maxFee = this.fees[basicPreset].fee.maxFeePerGas;
    },
    cancel() {
      this.$emit('cancel');
    },
    apply() {
      this.$emit('apply', {
        asset: this.asset,
        fee: {
          maxPriorityFeePerGas: this.minerTip,
          maxFeePerGas: this.maximumFee
        }
      });
    },
    setTipFee(fee) {
      this.tipFee = fee;
      this.$emit('update', {
        asset: this.asset,
        fee: {
          maxPriorityFeePerGas: this.minerTip,
          maxFeePerGas: this.maximumFee
        }
      });
    },
    setMaxFee(fee) {
      this.maxFee = fee;
      this.$emit('update', {
        asset: this.asset,
        fee: {
          maxPriorityFeePerGas: this.minerTip,
          maxFeePerGas: this.maximumFee
        }
      });
    },
    incrementMinerTipFee() {
      this.setTipFee(this.tipFee + this.stepSize);
    },
    decrementMinerTipFee() {
      if (this.tipFee) {
        this.setTipFee(this.tipFee - this.stepSize);
      }
    },
    incrementMaximumFee() {
      this.setMaxFee(this.maxFee + this.stepSize);
    },
    decrementMaximumFee() {
      if (this.maxFee) {
        this.setMaxFee(this.maxFee - this.stepSize);
      }
    },
    setCustomizePreset(preset) {
      var _this$fees$preset;
      this.customizePreset = preset;
      this.tipFee = (_this$fees$preset = this.fees[preset]) === null || _this$fees$preset === void 0 ? void 0 : _this$fees$preset.fee.maxPriorityFeePerGas;
    },
    presetBase(presetfee, totalFees) {
      const preset = presetfee || {};
      const probableSendFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["probableFeePerUnitEIP1559"])(preset.fee));
      const maxSendFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["getSendFee"])(this.asset, Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_6__["maxFeePerUnitEIP1559"])(preset.fee));
      return {
        amount: bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(probableSendFee).dp(6),
        fiat: Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(totalFees, this.fiatRates[this.nativeAsset]),
        maximum: Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(maxSendFee, this.fiatRates[this.nativeAsset])
      };
    }
  },
  watch: {
    tipFee(val) {
      if (this.fees) {
        var _this$fees4, _this$fees4$slow, _this$fees5, _this$fees5$average, _this$fees6, _this$fees6$fast;
        this.customizePreset = {
          [(_this$fees4 = this.fees) === null || _this$fees4 === void 0 ? void 0 : (_this$fees4$slow = _this$fees4.slow) === null || _this$fees4$slow === void 0 ? void 0 : _this$fees4$slow.fee.maxPriorityFeePerGas]: 'slow',
          [(_this$fees5 = this.fees) === null || _this$fees5 === void 0 ? void 0 : (_this$fees5$average = _this$fees5.average) === null || _this$fees5$average === void 0 ? void 0 : _this$fees5$average.fee.maxPriorityFeePerGas]: 'average',
          [(_this$fees6 = this.fees) === null || _this$fees6 === void 0 ? void 0 : (_this$fees6$fast = _this$fees6.fast) === null || _this$fees6$fast === void 0 ? void 0 : _this$fees6$fast.fee.maxPriorityFeePerGas]: 'fast'
        }[val || 0];
      }
    },
    maxFee(val) {
      if (this.fees) {
        var _this$fees7, _this$fees7$slow, _this$fees8, _this$fees8$average, _this$fees9, _this$fees9$fast;
        this.customizePreset = {
          [(_this$fees7 = this.fees) === null || _this$fees7 === void 0 ? void 0 : (_this$fees7$slow = _this$fees7.slow) === null || _this$fees7$slow === void 0 ? void 0 : _this$fees7$slow.fee.maxFeePerGas]: 'slow',
          [(_this$fees8 = this.fees) === null || _this$fees8 === void 0 ? void 0 : (_this$fees8$average = _this$fees8.average) === null || _this$fees8$average === void 0 ? void 0 : _this$fees8$average.fee.maxFeePerGas]: 'average',
          [(_this$fees9 = this.fees) === null || _this$fees9 === void 0 ? void 0 : (_this$fees9$fast = _this$fees9.fast) === null || _this$fees9$fast === void 0 ? void 0 : _this$fees9$fast.fee.maxFeePerGas]: 'fast'
        }[val || 0];
      }
    }
  }
});

// Lower bound = suggestedBaseFeePerGas + maxPriorityFeePerGas
// Upper bound = maxFeePerGas

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FeeSelector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapState"])(['activeNetwork'])
  },
  props: ['asset', 'value', 'fees', 'totalFees', 'fiatRates', 'swap'],
  methods: {
    getTooltip(name) {
      let content = '<div class="text-right">';
      if (this.fees[name].wait) {
        content += `${this.fees[name].wait} sec<br />`;
      }
      const nativeAsset = this.swap ? Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2__["getNativeAsset"])(this.asset) : Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2__["getFeeAsset"])(this.asset) || Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_2__["getNativeAsset"])(this.asset);
      if (this.totalFees && name in this.totalFees) {
        const total = this.totalFees[name];
        const totalFiat = Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_1__["prettyFiatBalance"])(total, this.fiatRates[nativeAsset]);
        content += `${bignumber_js__WEBPACK_IMPORTED_MODULE_0___default()(total).dp(6)} ${nativeAsset}`;
        content += `<br />${totalFiat} USD`;
      } else {
        var _cryptoassets$this$as, _getChain;
        const chainId = (_cryptoassets$this$as = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_3___default.a[this.asset]) === null || _cryptoassets$this$as === void 0 ? void 0 : _cryptoassets$this$as.chain;
        const {
          unit
        } = ((_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_4__["getChain"])(this.activeNetwork, chainId)) === null || _getChain === void 0 ? void 0 : _getChain.fees) || '';
        content += `${this.fees[name].fee} ${unit}`;
      }
      return `${content}</div>`;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var _assets_icons_ledger_sign_request_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/ledger_sign_request.svg */ "./src/assets/icons/ledger_sign_request.svg");
/* harmony import */ var _assets_icons_ledger_sign_request_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_ledger_sign_request_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    LedgerSignRquest: (_assets_icons_ledger_sign_request_svg__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    }
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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/PermissionSend.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FeeSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FeeSelector */ "./src/components/FeeSelector.vue");
/* harmony import */ var _components_CustomFees__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CustomFees */ "./src/components/CustomFees.vue");
/* harmony import */ var _components_LedgerSignRequestModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/LedgerSignRequestModal */ "./src/components/LedgerSignRequestModal.vue");
/* harmony import */ var _components_CustomFeesEIP1559__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/CustomFeesEIP1559 */ "./src/components/CustomFeesEIP1559.vue");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_parseTokenTx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/parseTokenTx */ "./node_modules/@liquality/wallet-core/dist/src/utils/parseTokenTx.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_parseTokenTx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_parseTokenTx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/fees */ "./node_modules/@liquality/wallet-core/dist/src/utils/fees.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/address */ "./node_modules/@liquality/wallet-core/dist/src/utils/address.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/icons/spinner.svg */ "./src/assets/icons/spinner.svg");
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/icons/chevron_right.svg */ "./src/assets/icons/chevron_right.svg");
/* harmony import */ var _assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_hardware_wallet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/hardware-wallet */ "./src/utils/hardware-wallet.js");


















const TRANSACTION_TYPES = {
  approve: 'Allow',
  send: 'Send'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SpinnerIcon: (_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    ChevronDown: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_13___default()),
    ChevronRight: (_assets_icons_chevron_right_svg__WEBPACK_IMPORTED_MODULE_14___default()),
    FeeSelector: _components_FeeSelector__WEBPACK_IMPORTED_MODULE_3__["default"],
    CustomFees: _components_CustomFees__WEBPACK_IMPORTED_MODULE_4__["default"],
    CustomFeesEIP1559: _components_CustomFeesEIP1559__WEBPACK_IMPORTED_MODULE_6__["default"],
    LedgerSignRequestModal: _components_LedgerSignRequestModal__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_utils_hardware_wallet__WEBPACK_IMPORTED_MODULE_17__["ledgerConnectMixin"]],
  data() {
    return {
      showData: false,
      selectedFee: 'average',
      error: null,
      loading: false,
      replied: false,
      symbol: '',
      label: '',
      subLabel: '',
      isApprove: false,
      currentStep: 'inputs',
      sendFees: {},
      maxSendFees: {},
      maxOptionActive: false,
      customFee: null,
      gas: 0,
      signRequestModalOpen: false
    };
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['updateFees', 'fetchTokenDetails']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('app', ['replyPermission']),
    prettyBalance: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyBalance"],
    prettyFiatBalance: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"],
    formatFiatUI: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["formatFiatUI"],
    getAssetColorStyle: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8__["getAssetColorStyle"],
    closeSignRequestModal() {
      this.signRequestModalOpen = false;
      this.loading = false;
    },
    onCustomFeeSelected() {
      this.currentStep = 'custom-fees';
    },
    cancelCustomFee() {
      this.currentStep = 'inputs';
      this.selectedFee = 'average';
    },
    toggleshowData() {
      this.showData = !this.showData;
    },
    async getSymbol() {
      var _cryptoassets$this$as;
      const chain = (_cryptoassets$this$as = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1___default.a[this.asset]) === null || _cryptoassets$this$as === void 0 ? void 0 : _cryptoassets$this$as.chain;
      const tokenAddress = this.request.args[0].to;
      try {
        // try to get token from cryptoassets
        this.symbol = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_2__["getToken"])(chain, tokenAddress).code;
      } catch {
        // in case token doesn't exist in cryptoassets
        try {
          const tokenData = await this.fetchTokenDetails({
            network: this.activeNetwork,
            walletId: this.activeWalletId,
            chain,
            contractAddress: tokenAddress
          });
          this.symbol = tokenData.symbol + ' (Unverified)';
        } catch {
          this.symbol = this.assetChain;
        }
      }
    },
    async getLabel() {
      try {
        var _parseTokenTx, _this$request$args$;
        const txType = ((_parseTokenTx = Object(_liquality_wallet_core_dist_src_utils_parseTokenTx__WEBPACK_IMPORTED_MODULE_9__["parseTokenTx"])((_this$request$args$ = this.request.args[0]) === null || _this$request$args$ === void 0 ? void 0 : _this$request$args$.data)) === null || _parseTokenTx === void 0 ? void 0 : _parseTokenTx.name) || 'send';
        switch (txType) {
          case 'approve':
            {
              this.isApprove = true;
              this.label = `${TRANSACTION_TYPES[txType]}`;
              this.subLabel = this.request.origin;
              return;
            }
          default:
            {
              this.label = TRANSACTION_TYPES.send;
              return;
            }
        }
      } catch {
        this.label = TRANSACTION_TYPES.send;
      }
    },
    async reply(allowed) {
      const fee = this.feesAvailable ? this.assetFees[this.selectedFee].fee : undefined;
      const optionsWithFee = {
        ...this.request.args[0],
        value: this.value,
        fee,
        feeLabel: this.selectedFee
      };
      const requestWithFee = {
        ...this.request,
        args: [optionsWithFee]
      };
      this.loading = true;
      this.error = null;
      try {
        var _this$account;
        if ((_this$account = this.account) !== null && _this$account !== void 0 && _this$account.type.includes('ledger')) {
          this.signRequestModalOpen = true;
          await this.connectLedger();
        }
        const response = await this.replyPermission({
          request: requestWithFee,
          allowed
        });
        this.replied = true;
        if (response.error) {
          this.error = this.$tle(response.error);
        } else {
          window.close();
        }
      } finally {
        this.signRequestModalOpen = false;
        this.loading = false;
      }
    },
    async _updateSendFees(amount) {
      if (!this.gas) {
        return;
      }
      const sendFees = await Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10__["getSendTxFees"])(this.account.id, this.asset, amount, this.customFee);
      if (amount === undefined) {
        this.maxSendFees = sendFees;
      } else {
        this.sendFees = sendFees;
      }
    },
    async estimateGas() {
      let gas = this.request.args[0].gas;
      if (!gas) {
        const {
          data,
          to,
          value
        } = this.request.args[0];
        gas = await Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8__["estimateGas"])({
          data,
          to,
          value
        });
      }
      return bignumber_js__WEBPACK_IMPORTED_MODULE_15___default()(gas, 16);
    },
    applyCustomFee({
      fee
    }) {
      const presetFee = Object.entries(this.assetFees).find(([speed, speedFee]) => {
        const isLegacyFee = speedFee.fee === fee;
        const isEIP1559Fee = fee.maxPriorityFeePerGas && speedFee.fee.maxPriorityFeePerGas === fee.maxPriorityFeePerGas && speedFee.fee.maxFeePerGas === fee.maxFeePerGas;
        return speed !== 'custom' && (isLegacyFee || isEIP1559Fee);
      });
      if (presetFee) {
        const [speed] = presetFee;
        this.selectedFee = speed;
        this.customFee = null;
      } else {
        this.updateMaxSendFees();
        this.updateSendFees(this.amount);
        debugger;
        this.customFee = this.calculateFee(fee);
        this.selectedFee = 'custom';
      }
      this.currentStep = 'inputs';
    },
    updateSendFees: lodash__WEBPACK_IMPORTED_MODULE_16___default.a.debounce(async function (amount) {
      await this._updateSendFees(amount);
    }, 800),
    async updateMaxSendFees() {
      await this._updateSendFees();
    },
    setCustomFee: lodash__WEBPACK_IMPORTED_MODULE_16___default.a.debounce(async function ({
      fee
    }) {
      this.customFee = fee;
      if (this.maxOptionActive) {
        this.updateMaxSendFees();
      } else {
        this.updateSendFees(this.amount);
      }
    }, 800),
    async calculateGas() {
      this.gas = await this.estimateGas();
    },
    calculateFee(fee) {
      const chainId = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1___default.a[this.asset].chain;
      return Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10__["feePerUnit"])(fee, chainId);
    }
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork', 'activeWalletId', 'fees', 'fiatRates']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['client', 'accountItem', 'suggestedFeePrices']),
    asset() {
      return this.request.asset;
    },
    assetChain() {
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_8__["getNativeAsset"])(this.asset, this.activeNetwork);
    },
    address() {
      return this.request.args[0].to;
    },
    shortAddress() {
      return this.address ? Object(_liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_11__["shortenAddress"])(this.address) : 'New Contract';
    },
    isEIP1559Fees() {
      return Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_10__["isEIP1559Fees"])(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_1___default.a[this.asset].chain, this.activeNetwork);
    },
    value() {
      // Parse SendOptions.value into BN
      const value = this.request.args[0].value;
      return bignumber_js__WEBPACK_IMPORTED_MODULE_15___default()(value ? '0x' + value : 0);
    },
    amount() {
      if (!this.value) return 0;
      return Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyBalance"])(this.value, this.asset);
    },
    data() {
      return this.request.args[0].data;
    },
    assetFees() {
      const assetFees = {};
      if (this.customFee) {
        assetFees.custom = {
          fee: this.customFee
        };
      }
      const fees = this.suggestedFeePrices(this.assetChain);
      if (fees) {
        Object.assign(assetFees, fees);
      }
      return assetFees;
    },
    feesAvailable() {
      return this.assetFees && Object.keys(this.assetFees).length;
    },
    request() {
      return {
        ...this.$route.query,
        args: JSON.parse(this.$route.query.args)
      };
    },
    feeInUsdValue() {
      if (!this.gas) {
        return;
      }
      let feePerGas;
      if (this.selectedFee === 'custom') {
        feePerGas = this.customFee;
      } else {
        var _this$suggestedFeePri;
        feePerGas = (_this$suggestedFeePri = this.suggestedFeePrices(this.assetChain)[this.selectedFee]) === null || _this$suggestedFeePri === void 0 ? void 0 : _this$suggestedFeePri.fee;
      }
      feePerGas = this.calculateFee(feePerGas);
      const txCost = this.gas.times(bignumber_js__WEBPACK_IMPORTED_MODULE_15___default()(feePerGas).div(1e9));
      return Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyFiatBalance"])(txCost, this.fiatRates[this.assetChain]);
    },
    feeInUnits() {
      if (!this.gas) {
        return;
      }
      let feePerGas;
      if (this.selectedFee === 'custom') {
        feePerGas = this.customFee;
      } else {
        var _this$suggestedFeePri2;
        feePerGas = feePerGas = (_this$suggestedFeePri2 = this.suggestedFeePrices(this.assetChain)[this.selectedFee]) === null || _this$suggestedFeePri2 === void 0 ? void 0 : _this$suggestedFeePri2.fee;
      }
      feePerGas = this.calculateFee(feePerGas);
      const txCost = this.gas.times(bignumber_js__WEBPACK_IMPORTED_MODULE_15___default()(feePerGas).div(1e9));
      return txCost.dp(6);
    },
    account() {
      var _this$request;
      return this.accountItem((_this$request = this.request) === null || _this$request === void 0 ? void 0 : _this$request.accountId);
    }
  },
  async created() {
    await Promise.all([this.getSymbol(), this.getLabel(), this.updateFees({
      asset: this.asset
    }), this.updateSendFees(0), this.updateMaxSendFees(), this.calculateGas()]);
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=template&id=02794fee&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFees.vue?vue&type=template&id=02794fee& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "swap"
  }, [_c("NavBar", {
    attrs: {
      showBackButton: false,
      showBack: false,
      showMenuList: false
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.networkSpeedFee")) + " ")]), _c("div", {
    staticClass: "wrapper form"
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "selected-asset",
    attrs: {
      id: "custom_fee_selected_asset"
    }
  }, [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAssetIcon(_vm.asset)
    }
  }), _c("span", {
    staticClass: "asset-name"
  }, [_vm._v(" " + _vm._s(_vm.asset) + " ")])]), _c("div", {
    staticClass: "custom-fee-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.presets")) + " ")]), _c("div", {
    staticClass: "custom-fee-presets"
  }, _vm._l(["slow", "average", "fast"], function (name) {
    return _c("div", {
      key: name,
      staticClass: "custom-fee-presets-option",
      class: {
        active: name === _vm.preset
      },
      attrs: {
        id: name
      },
      on: {
        click: function ($event) {
          return _vm.setPreset(name);
        }
      }
    }, [_c("div", {
      staticClass: "custom-fee-name"
    }, [_vm._v(_vm._s(_vm.getFeeLabel(name)))]), _c("div", {
      staticClass: "custom-fee-time"
    }, [_vm.fees[name] && _vm.fees[name].wait ? _c("span", [_vm._v(" ~ " + _vm._s(_vm.fees[name].wait) + " sec ")]) : _vm._e()]), _c("div", {
      staticClass: "custom-fee-amount"
    }, [_vm._v(" " + _vm._s(_vm.getFeeAmount(name)) + " ")]), _c("div", {
      staticClass: "custom-fee-fiat"
    }, [_vm._v(" " + _vm._s(_vm.getFiatAmount(name)) + " ")])]);
  }), 0), _c("div", {
    staticClass: "custom-fee-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.customizedSetting")) + " ")]), _c("div", {
    staticClass: "custom-fee-customized"
  }, [_c("div", {
    staticClass: "custom-fee-details"
  }, [_c("div", {
    staticClass: "custom-fee-details-item"
  }, [_c("div", {
    staticClass: "gas-price-label"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.gasPrice")) + " ")]), _vm.customFiatAmount ? _c("div", {
    staticClass: "gas-price-amount"
  }, [_vm._v("  $" + _vm._s(_vm.customFiatAmount) + " ")]) : _vm._e()]), _c("div", {
    staticClass: "custom-fee-details-item"
  }, [_c("div", {
    staticClass: "gas-unit-label"
  }, [_vm._v(_vm._s(_vm.gasUnit))]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "custom_fee_input_field",
      step: _vm.stepSize
    },
    domProps: {
      value: _vm.fee
    },
    on: {
      input: function ($event) {
        _vm.setCustomFee(parseFloat($event.target.value).toFixed(6));
      }
    }
  }), _c("div", {
    staticClass: "input-group-text fee-input-controls"
  }, [_c("ChevronUpIcon", {
    on: {
      click: _vm.incrementFee
    }
  }), _c("ChevronDownIcon", {
    on: {
      click: _vm.decrementFee
    }
  })], 1)])])])]), _c("div", {
    staticClass: "custom-fee-result",
    attrs: {
      id: "custom_speed_fee_results"
    }
  }, [_c("div", {
    staticClass: "custom-fee-result-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.newSpeedFee")) + " ")]), _c("div", {
    staticClass: "custom-fee-result-amount"
  }, [_vm._v(_vm._s(_vm.customFeeAmount))]), _vm.customFiatAmount ? _c("div", {
    staticClass: "custom-fee-result-fiat"
  }, [_vm._v(" " + _vm._s(_vm.customFiatAmount) + " ")]) : _vm._e()])]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    attrs: {
      id: "custom_fee_cancel_button"
    },
    on: {
      click: _vm.cancel
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-block",
    attrs: {
      id: "custom_fee_apply_button",
      disabled: !_vm.fee
    },
    on: {
      click: _vm.apply
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.apply")) + " ")])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "swap"
  }, [_c("NavBar", {
    attrs: {
      showBackButton: false,
      showBack: false,
      showMenuList: false
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.editGasFee")) + " ")]), _c("div", {
    staticClass: "view-wrapper"
  }, [_c("div", {
    class: {
      selectedView: _vm.view === "basic"
    }
  }, [_c("p", {
    on: {
      click: function ($event) {
        return _vm.changeView("basic");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.basic")) + " ")])]), _c("div", {
    class: {
      selectedView: _vm.view === "custom"
    }
  }, [_c("p", {
    on: {
      click: function ($event) {
        return _vm.changeView("custom");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.customize")) + " ")])])]), _c("div", {
    staticClass: "wrapper form",
    class: {
      wrapperSend: _vm.padLabels
    }
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "selected-asset",
    attrs: {
      id: "custom_fee_selected_asset"
    }
  }, [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAssetIcon(_vm.asset)
    }
  }), _c("span", {
    staticClass: "asset-name"
  }, [_vm._v(" " + _vm._s(_vm.asset) + " ")])])]), _vm.view === "basic" ? _c("div", {
    staticClass: "basic-wrapper"
  }, [_c("p", {
    staticClass: "presets-title"
  }, [_vm._v(_vm._s(_vm.$t("components.customFees.presets")))]), _c("div", {
    staticClass: "presets-wrapper"
  }, [_c("div", {
    class: {
      selectedPreset: _vm.basicPreset === "slow"
    },
    on: {
      click: function ($event) {
        return _vm.selectPreset("slow");
      }
    }
  }, [_c("p", {
    staticClass: "basicPreset-type"
  }, [_vm._v(_vm._s(_vm.$t("common.slow")))]), _c("p", {
    staticClass: "basicPreset-time slow"
  }, [_vm._v(_vm._s(_vm.$t("common.maybeInSec", {
    secs: 30
  })))]), _c("p", [_vm._v(_vm._s(_vm.slowPreset.amount) + " " + _vm._s(_vm.asset))]), _c("p", [_vm._v(_vm._s(_vm.slowPreset.fiat) + " USD")]), _c("p", [_vm._v("max " + _vm._s(_vm.slowPreset.maximum) + " USD")])]), _c("div", {
    staticClass: "basic-average",
    class: {
      selectedPreset: _vm.basicPreset === "average"
    },
    on: {
      click: function ($event) {
        return _vm.selectPreset("average");
      }
    }
  }, [_c("p", {
    staticClass: "basicPreset-type"
  }, [_vm._v(_vm._s(_vm.$t("common.average")))]), _c("p", {
    staticClass: "basicPreset-time"
  }, [_vm._v(_vm._s(_vm.$t("common.likelyInSec", {
    secs: 30
  })))]), _c("p", [_vm._v(_vm._s(_vm.averagePreset.amount) + " " + _vm._s(_vm.asset))]), _c("p", [_vm._v(_vm._s(_vm.averagePreset.fiat) + " USD")]), _c("p", [_vm._v("max " + _vm._s(_vm.averagePreset.maximum) + " USD")])]), _c("div", {
    class: {
      selectedPreset: _vm.basicPreset === "fast"
    },
    on: {
      click: function ($event) {
        return _vm.selectPreset("fast");
      }
    }
  }, [_c("p", {
    staticClass: "basicPreset-type"
  }, [_vm._v(_vm._s(_vm.$t("common.fast")))]), _c("p", {
    staticClass: "basicPreset-time"
  }, [_vm._v(_vm._s(_vm.$t("common.likelyInSec", {
    secs: 15
  })))]), _c("p", [_vm._v(_vm._s(_vm.fastPreset.amount) + " " + _vm._s(_vm.asset))]), _c("p", [_vm._v(_vm._s(_vm.fastPreset.fiat) + " USD")]), _c("p", [_vm._v("max " + _vm._s(_vm.fastPreset.maximum) + " USD")])])])]) : _vm.view === "custom" ? _c("div", [_c("div", {
    staticClass: "current-base-fee"
  }, [_c("span", {
    staticClass: "custom-fee-title"
  }, [_c("strong", [_vm._v(" " + _vm._s(_vm.$t("components.customFees.currentBaseFeePerGas")) + " ")])]), _c("span", [_vm._v("GWEI "), _c("span", [_vm._v(_vm._s(_vm.suggestedBaseFeePerGas))])])]), _c("div", {
    staticClass: "custom-fee-inputs"
  }, [_c("div", {
    staticClass: "input-wrapper"
  }, [_c("p", [_c("strong", [_vm._v(" " + _vm._s(_vm.$t("components.customFees.minerTip")) + " ")]), _vm._v(_vm._s(" " + _vm.$t("components.customFees.toSpeedUp")) + " ")]), _c("span", [_vm._v("$" + _vm._s(_vm.minerTipFiat))]), _c("div", {
    staticClass: "custom-fee-details-item"
  }, [_c("span", {
    staticClass: "gas-unit-label",
    class: {
      gasUnitLabel: _vm.padLabels
    },
    staticStyle: {
      left: "0"
    }
  }, [_vm._v(_vm._s(_vm.gasUnit.toUpperCase()))]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "form-control",
    class: {
      errorInput: _vm.noTipError || _vm.veryLowTipError,
      warningInput: _vm.veryHighTipWarning
    },
    attrs: {
      type: "number",
      id: "custom_fee_input_field",
      step: _vm.stepSize
    },
    domProps: {
      value: _vm.formatedMinerTip
    },
    on: {
      input: function ($event) {
        _vm.setTipFee(parseFloat($event.target.value));
      }
    }
  }), _c("div", {
    staticClass: "input-group-text fee-input-controls"
  }, [_c("ChevronUpIcon", {
    on: {
      click: function ($event) {
        return _vm.incrementMinerTipFee();
      }
    }
  }), _c("ChevronDownIcon", {
    on: {
      click: function ($event) {
        return _vm.decrementMinerTipFee();
      }
    }
  })], 1)])])]), _c("div", {
    staticClass: "input-wrapper"
  }, [_c("p", [_c("strong", [_vm._v(" " + _vm._s(_vm.$t("components.customFees.maxFee")) + " ")]), _vm._v(" " + _vm._s(_vm.$t("components.customFees.perGas")) + " ")]), _c("span", [_vm._v("$" + _vm._s(_vm.maxFiat))]), _c("div", {
    staticClass: "custom-fee-details-item"
  }, [_c("span", {
    staticClass: "gas-unit-label",
    class: {
      gasUnitLabel: _vm.padLabels
    },
    staticStyle: {
      right: "0"
    }
  }, [_vm._v(_vm._s(_vm.gasUnit.toUpperCase()))]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    staticClass: "form-control",
    class: {
      errorInput: _vm.veryLowMaxFeeError,
      warningInput: _vm.veryHighFeeWarning
    },
    attrs: {
      type: "number",
      id: "custom_fee_input_field_new",
      step: _vm.stepSize
    },
    domProps: {
      value: _vm.formatedMaximum
    },
    on: {
      input: function ($event) {
        _vm.setMaxFee(parseFloat($event.target.value));
      }
    }
  }), _c("div", {
    staticClass: "input-group-text fee-input-controls"
  }, [_c("ChevronUpIcon", {
    on: {
      click: function ($event) {
        return _vm.incrementMaximumFee();
      }
    }
  }), _c("ChevronDownIcon", {
    on: {
      click: function ($event) {
        return _vm.decrementMaximumFee();
      }
    }
  })], 1)])])])]), _c("div", {
    staticClass: "speed-wrapper"
  }, _vm._l([{
    label: "Low",
    value: "slow"
  }, {
    label: "Med",
    value: "average"
  }, {
    label: "High",
    value: "fast"
  }], function (preset) {
    return _c("button", {
      key: preset.label,
      staticClass: "custom-fee-presets-option",
      class: {
        selected: preset.value === _vm.customizePreset
      },
      attrs: {
        id: preset.label
      },
      on: {
        click: function ($event) {
          return _vm.setCustomizePreset(preset.value);
        }
      }
    }, [_vm._v(" " + _vm._s(preset.label) + " ")]);
  }), 0), _c("div", {
    staticClass: "error-messages-wrapper"
  }, [_vm.noTipError ? _c("p", {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.noTipError))]) : _vm._e(), _vm.veryLowTipError ? _c("p", {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.veryLowTipError))]) : _vm._e(), _vm.veryHighTipWarning ? _c("p", {
    staticClass: "warning"
  }, [_vm._v(" " + _vm._s(_vm.veryHighTipWarning) + " ")]) : _vm._e(), _vm.veryLowMaxFeeError ? _c("p", {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.veryLowMaxFeeError))]) : _vm._e(), _vm.veryHighFeeWarning ? _c("p", {
    staticClass: "warning"
  }, [_vm._v(" " + _vm._s(_vm.veryHighFeeWarning) + " ")]) : _vm._e()]), _c("div", {
    staticClass: "custom-fee-result",
    attrs: {
      id: "custom_speed_fee_results"
    }
  }, [_c("div", {
    staticClass: "custom-fee-result-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.customFees.newFeeTotal")) + " ")]), _c("div", {
    staticClass: "custom-fee-estimation"
  }, [_c("div", [_c("span", [_vm._v(_vm._s(_vm.$t("common.minimum")))]), _c("span", [_vm._v(_vm._s(_vm.$t("common.likelyInSec", {
    secs: 30
  })))]), _c("div", {
    staticClass: "custom-fee-result-amount"
  }, [_vm._v("~" + _vm._s(_vm.minimum.amount))]), _vm.minimum.fiat ? _c("div", {
    staticClass: "custom-fee-result-fiat"
  }, [_vm._v("~" + _vm._s(_vm.minimum.fiat) + " USD")]) : _vm._e()]), _c("div", [_c("span", [_vm._v(_vm._s(_vm.$t("common.maximum")))]), _c("span", [_vm._v(_vm._s(_vm.$t("common.likelyInSec", {
    secs: 15
  })))]), _c("div", {
    staticClass: "custom-fee-result-amount"
  }, [_vm._v("~" + _vm._s(_vm.maximum.amount))]), _vm.maximum.fiat ? _c("div", {
    staticClass: "custom-fee-result-fiat"
  }, [_vm._v("~" + _vm._s(_vm.maximum.fiat) + " USD")]) : _vm._e()])])])]) : _vm._e(), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    attrs: {
      id: "custom_fee_cancel_button"
    },
    on: {
      click: _vm.cancel
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-block",
    attrs: {
      id: "custom_fee_apply_button",
      disabled: !_vm.tipFee || !_vm.maxFee
    },
    on: {
      click: _vm.apply
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.apply")) + " ")])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=template&id=ae281df6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FeeSelector.vue?vue&type=template&id=ae281df6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "fee-selector"
  }, [_c("div", {
    staticClass: "btn-group btn-group-toggle",
    attrs: {
      "data-toggle": "buttons"
    }
  }, _vm._l(["slow", "average", "fast"], function (name) {
    return _c("label", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: {
          content: _vm.getTooltip(name)
        },
        expression: "{ content: getTooltip(name) }"
      }],
      key: name,
      staticClass: "btn btn-option btn-option-lg",
      class: {
        active: name === _vm.value
      },
      attrs: {
        id: name
      },
      on: {
        click: function ($event) {
          return _vm.$emit("input", name);
        }
      }
    }, [_c("input", {
      attrs: {
        type: "radio",
        name: "fee",
        autocomplete: "off"
      },
      domProps: {
        checked: name === _vm.value
      }
    }), _vm._v(" " + _vm._s(_vm.$t(`common.${name}`)) + " ")]);
  }), 0), _c("button", {
    staticClass: "btn btn-link",
    attrs: {
      id: "custom_network_speed_button"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("custom-selected", _vm.asset);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.custom")) + " ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74& ***!
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
  return _vm.open ? _c("Modal", {
    on: {
      close: _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("h5", [_vm._v(_vm._s(_vm.$t("components.ledger.initiate")))])];
      },
      proxy: true
    }], null, false, 1423318294)
  }, [[_c("div", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t("components.ledger.onYourLedger")))]), _c("div", {
    staticClass: "ledger-options-container"
  }, [_c("div", {
    staticClass: "ledger-options-instructions"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.ledger.signInstructions")) + " ")]), _c("p", [_c("LedgerSignRquest", {
    staticClass: "ledger-sign-request"
  })], 1)])]], 2) : _vm._e();
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "permission-send wrapper form text-center"
  }, [_c("LedgerSignRequestModal", {
    attrs: {
      open: _vm.signRequestModalOpen
    },
    on: {
      close: _vm.closeSignRequestModal
    }
  }), _vm.currentStep === "inputs" ? _c("div", {
    staticClass: "wrapper_top form"
  }, [_vm.error ? _c("div", {
    staticClass: "mt-4 text-danger"
  }, [_c("strong", [_vm._v("Error:")]), _vm._v(" " + _vm._s(_vm.error))]) : _vm._e(), _vm.isApprove ? _c("div", [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.label))]), _c("label", [_vm._v(_vm._s(_vm.subLabel))]), _c("p", {
    staticClass: "confirm-value",
    style: _vm.getAssetColorStyle(_vm.asset)
  }, [_vm._v(" " + _vm._s(_vm.symbol) + " ")])]), _c("div", {
    staticClass: "form-group"
  }, [_vm.feeInUsdValue ? _c("label", [_vm._v(_vm._s(_vm.$t("common.transactionFee")) + " " + _vm._s(_vm.feeInUsdValue) + " USD")]) : _vm._e()])]) : _c("div", {
    staticClass: "wrapper_top form"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.label))]), _c("p", {
    staticClass: "confirm-value",
    style: _vm.getAssetColorStyle(_vm.asset)
  }, [_vm._v(_vm._s(_vm.amount) + " " + _vm._s(_vm.symbol))]), _c("p", {
    staticClass: "text-muted"
  }, [_vm._v(" " + _vm._s(_vm.formatFiatUI(_vm.prettyFiatBalance(_vm.amount, _vm.fiatRates[_vm.asset]))) + " ")])]), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("To")]), _c("p", {
    staticClass: "confirm-value"
  }, [_vm._v(_vm._s(_vm.shortAddress))])]), _c("div", {
    staticClass: "form-group"
  }, [_vm.feeInUsdValue ? _c("label", [_vm._v("Transaction fee " + _vm._s(_vm.feeInUsdValue) + " USD")]) : _vm._e()]), _vm.data ? _c("div", {
    staticClass: "permission-send_data"
  }, [_c("label", {
    on: {
      click: _vm.toggleshowData
    }
  }, [_vm.showData ? _c("ChevronDown", {
    staticClass: "permission-send_data_icon-down"
  }) : _c("ChevronRight", {
    staticClass: "permission-send_data_icon-right"
  }), _vm._v("Data")], 1), _vm.showData ? _c("div", {
    staticClass: "permission-send_data_code"
  }, [_vm._v(" " + _vm._s(_vm.data) + " ")]) : _vm._e()]) : _vm._e()]), _c("div", {
    staticClass: "form-group mt-4"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("common.networkSpeedFee")) + " "), _c("span", {
    staticClass: "text-muted fee-info"
  }, [_vm._v("(" + _vm._s(_vm.selectedFee) + " / " + _vm._s(_vm.feeInUnits) + " " + _vm._s(_vm.assetChain) + ")")])]), _c("div", {
    staticClass: "permission-send_fees"
  }, [_c("FeeSelector", {
    attrs: {
      totalFees: _vm.maxOptionActive ? _vm.maxSendFees : _vm.sendFees,
      asset: _vm.asset,
      fees: _vm.assetFees,
      fiatRates: _vm.fiatRates
    },
    on: {
      "custom-selected": function ($event) {
        return _vm.onCustomFeeSelected(_vm.asset);
      }
    },
    model: {
      value: _vm.selectedFee,
      callback: function ($$v) {
        _vm.selectedFee = $$v;
      },
      expression: "selectedFee"
    }
  })], 1)])]) : _vm.currentStep === "custom-fees" && !_vm.isEIP1559Fees ? _c("div", {
    staticClass: "send"
  }, [_c("CustomFees", {
    attrs: {
      asset: _vm.assetChain,
      "selected-fee": _vm.selectedFee,
      fees: _vm.assetFees,
      totalFees: _vm.maxOptionActive ? _vm.maxSendFees : _vm.sendFees,
      fiatRates: _vm.fiatRates
    },
    on: {
      apply: _vm.applyCustomFee,
      update: _vm.setCustomFee,
      cancel: _vm.cancelCustomFee
    }
  })], 1) : _vm.currentStep === "custom-fees" && _vm.isEIP1559Fees ? _c("div", {
    staticClass: "send"
  }, [_c("CustomFeesEIP1559", {
    attrs: {
      asset: _vm.assetChain,
      "selected-fee": _vm.selectedFee,
      fees: _vm.assetFees,
      totalFees: _vm.maxOptionActive ? _vm.maxSendFees : _vm.sendFees,
      fiatRates: _vm.fiatRates,
      padLabels: true
    },
    on: {
      apply: _vm.applyCustomFee,
      update: _vm.setCustomFee,
      cancel: _vm.cancelCustomFee
    }
  })], 1) : _vm._e(), _vm.currentStep === "inputs" ? _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    on: {
      click: function ($event) {
        return _vm.reply(false);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: _vm.loading
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        return _vm.reply(true);
      }
    }
  }, [_vm.loading ? _c("SpinnerIcon", {
    staticClass: "btn-loading"
  }) : [_vm._v(_vm._s(_vm.$t("common.confirm")))]], 2)])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.selected-asset {\n  display: flex;\n  align-items: flex-end;\n}\n.selected-asset .asset-name {\n  margin-left: 5px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 24px;\n}\n.selected-asset div {\n  display: flex;\n  align-items: center;\n  height: 24px;\n}\n.selected-asset div svg {\n  width: 8px;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.custom-fee-title {\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.08px;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  color: #3d4767;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.custom-fee-presets {\n  height: 81px;\n  width: 100%;\n  display: flex;\n  border: 1px solid #d9dfe5;\n  margin-bottom: 30px;\n}\n.custom-fee-presets .custom-fee-presets-option {\n  flex: 1;\n  padding: 4px;\n  cursor: pointer;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.custom-fee-presets .custom-fee-presets-option:not(:last-child) {\n  border-right: 1px solid #d9dfe5;\n}\n.custom-fee-presets .custom-fee-presets-option.active, .custom-fee-presets .custom-fee-presets-option:hover {\n  background-color: #f0f7f9;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-name {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 26px;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-time,\n.custom-fee-presets .custom-fee-presets-option .custom-fee-amount {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 16px;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-fiat {\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 16px;\n  color: #646f85;\n}\n.custom-fee-customized {\n  display: flex;\n}\n.custom-fee-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.custom-fee-details .custom-fee-details-item {\n  flex: 1;\n  display: flex;\n}\n.custom-fee-details .custom-fee-details-item .gas-unit-label {\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 150%;\n}\n.custom-fee-details .custom-fee-details-item .gas-price-label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.08px;\n}\n.custom-fee-details .custom-fee-details-item .gas-price-amount {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n}\n.custom-fee-details .custom-fee-details-item input {\n  height: 25px !important;\n  align-items: flex-end;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: right;\n  margin-left: 4px;\n}\n.custom-fee-details .custom-fee-details-item input[type=number]::-webkit-inner-spin-button, .custom-fee-details .custom-fee-details-item input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.custom-fee-details .custom-fee-details-item div {\n  display: flex;\n  align-items: flex-end;\n}\n.custom-fee-details .custom-fee-details-item .fee-input-controls {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 20px;\n  height: 25px;\n}\n.custom-fee-details .custom-fee-details-item .fee-input-controls svg {\n  cursor: pointer;\n  width: 12px;\n  height: 8px;\n}\n.custom-fee-result {\n  background: #f0f7f9;\n  border: 1px solid #d9dfe5;\n  display: flex;\n  margin-top: 30px;\n  padding: 10px;\n  flex-direction: column;\n}\n.custom-fee-result .custom-fee-result-title {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 26px;\n}\n.custom-fee-result .custom-fee-result-time,\n.custom-fee-result .custom-fee-result-amount,\n.custom-fee-result .custom-fee-result-fiat {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 16px;\n}\n.custom-fee-result .custom-fee-result-fiat {\n  color: #646f85;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-3cee9876] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-3cee9876] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-3cee9876] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-3cee9876] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-3cee9876] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-3cee9876] {\n  text-align: left !important;\n}\n.text-right[data-v-3cee9876] {\n  text-align: right !important;\n}\n.text-center[data-v-3cee9876] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-3cee9876] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-3cee9876] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-3cee9876] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-3cee9876] {\n    text-align: left !important;\n}\n.text-md-right[data-v-3cee9876] {\n    text-align: right !important;\n}\n.text-md-center[data-v-3cee9876] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-3cee9876] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-3cee9876] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-3cee9876] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-3cee9876] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-3cee9876] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-3cee9876] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-3cee9876] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-3cee9876] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-3cee9876] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-3cee9876] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-3cee9876] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-3cee9876] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-3cee9876] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-3cee9876] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-3cee9876] {\n  font-style: italic !important;\n}\n.text-white[data-v-3cee9876] {\n  color: #fff !important;\n}\n.text-primary[data-v-3cee9876] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-3cee9876]:hover, a.text-primary[data-v-3cee9876]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-3cee9876] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-3cee9876]:hover, a.text-secondary[data-v-3cee9876]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-3cee9876] {\n  color: #28a745 !important;\n}\na.text-success[data-v-3cee9876]:hover, a.text-success[data-v-3cee9876]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-3cee9876] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-3cee9876]:hover, a.text-info[data-v-3cee9876]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-3cee9876] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-3cee9876]:hover, a.text-warning[data-v-3cee9876]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-3cee9876] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-3cee9876]:hover, a.text-danger[data-v-3cee9876]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-3cee9876] {\n  color: #f8faff !important;\n}\na.text-light[data-v-3cee9876]:hover, a.text-light[data-v-3cee9876]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-3cee9876] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-3cee9876]:hover, a.text-dark[data-v-3cee9876]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-3cee9876] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-3cee9876] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-3cee9876] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-3cee9876] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-3cee9876] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-3cee9876] {\n  text-decoration: none !important;\n}\n.text-break[data-v-3cee9876] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-3cee9876] {\n  color: inherit !important;\n}\n.view-wrapper[data-v-3cee9876] {\n  display: flex;\n  align-items: flex-end;\n  border-bottom: 1px solid #d9dfe5;\n  height: 40px;\n}\n.view-wrapper div[data-v-3cee9876] {\n  width: 180px;\n  text-align: center;\n}\n.view-wrapper div p[data-v-3cee9876] {\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 6px;\n  color: #646f85;\n}\n.view-wrapper .selectedView[data-v-3cee9876] {\n  border-bottom: 1px solid #000000;\n}\n.view-wrapper .selectedView p[data-v-3cee9876] {\n  color: #000000;\n}\n.fee-tabs[data-v-3cee9876] {\n  display: flex;\n  align-items: center;\n}\n.fee-tabs .fee-tab[data-v-3cee9876] {\n  width: 50%;\n  text-align: center;\n  line-height: 18px;\n  font-weight: 500;\n  font-size: 13px;\n  cursor: pointer;\n  padding-top: 15px;\n  height: 50px;\n  border-bottom: 1px solid #d9dfe5;\n}\n.fee-tabs .selected[data-v-3cee9876] {\n  font-weight: 600;\n  border-bottom: 1px solid #1d1e21;\n}\n.basicPreset-type[data-v-3cee9876] {\n  font-size: 14px;\n}\n.basicPreset-time[data-v-3cee9876] {\n  font-size: 10px;\n  color: #088513;\n}\n.slow[data-v-3cee9876] {\n  color: #ff007a;\n}\n.basic-wrapper .presets-title[data-v-3cee9876] {\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.basic-wrapper p[data-v-3cee9876] {\n  margin-bottom: 0;\n}\n.basic-wrapper .presets-wrapper[data-v-3cee9876] {\n  display: flex;\n  border: 1px solid #d9dfe5;\n  cursor: pointer;\n}\n.basic-wrapper .presets-wrapper div[data-v-3cee9876] {\n  padding: 5px;\n  width: 106.666666667px;\n}\n.basic-wrapper .presets-wrapper .selectedPreset[data-v-3cee9876] {\n  background-color: #d9dfe5;\n}\n.basic-average[data-v-3cee9876] {\n  border-left: 1px solid #d9dfe5;\n  border-right: 1px solid #d9dfe5;\n}\n#custom_fee_input_field[data-v-3cee9876] {\n  width: 0;\n}\n.wrapperSend[data-v-3cee9876] {\n  padding: 10px;\n}\n.wrapper[data-v-3cee9876] {\n  overflow-y: auto;\n  height: auto;\n}\n.wrapper_top[data-v-3cee9876] {\n  flex: 0;\n}\n.custom-fee-inputs[data-v-3cee9876] {\n  display: flex;\n}\n.custom-fee-inputs .input-wrapper[data-v-3cee9876] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n}\n.custom-fee-inputs .input-wrapper[data-v-3cee9876]:last-child {\n  margin-left: 17px;\n}\n.custom-fee-inputs .input-wrapper p[data-v-3cee9876] {\n  margin-bottom: 0;\n}\n.custom-fee-inputs .input-wrapper span[data-v-3cee9876] {\n  text-align: right;\n  width: 136px;\n}\n.custom-fee-inputs .input-wrapper div[data-v-3cee9876] {\n  position: relative;\n  bottom: 4px;\n}\n.custom-fee-inputs .input-wrapper div span[data-v-3cee9876] {\n  width: 34px;\n  position: relative;\n  top: 15px;\n}\n.custom-fee-inputs .input-wrapper div input[data-v-3cee9876] {\n  width: 100px;\n  font-size: 14px !important;\n  line-height: 18px !important;\n  text-align: right;\n}\n.input-group-text[data-v-3cee9876] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 20px;\n  height: 25px;\n}\n.input-group-text svg[data-v-3cee9876] {\n  cursor: pointer;\n  width: 12px;\n  height: 8px;\n}\n.speed-wrapper[data-v-3cee9876] {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n}\n.speed-wrapper button[data-v-3cee9876] {\n  border: 1px solid #d9dfe5;\n  border-radius: 26px;\n  width: 45px;\n  background-color: transparent;\n}\n.speed-wrapper .selected[data-v-3cee9876] {\n  background-color: #f0f7f9;\n}\n.error-messages-wrapper[data-v-3cee9876] {\n  margin-top: 1rem;\n}\n.error-messages-wrapper .error[data-v-3cee9876] {\n  color: #ff007a;\n}\n.error-messages-wrapper .warning[data-v-3cee9876] {\n  color: #f57a08;\n}\n.warningInput[data-v-3cee9876] {\n  color: #f57a08;\n  border: 0 solid #f57a08;\n  border-width: 0 0 1px 0;\n}\n.errorInput[data-v-3cee9876] {\n  color: #ff007a;\n  border: 0 solid #ff007a;\n  border-width: 0 0 1px 0;\n}\n.current-base-fee[data-v-3cee9876] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.selected-asset[data-v-3cee9876] {\n  display: flex;\n  align-items: flex-end;\n}\n.selected-asset .asset-name[data-v-3cee9876] {\n  margin-left: 5px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 17px;\n  line-height: 24px;\n  position: relative;\n  bottom: 3px;\n}\n.selected-asset div[data-v-3cee9876] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 20px;\n  height: 25px;\n}\n.selected-asset div svg[data-v-3cee9876] {\n  width: 8px;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.custom-fee-title[data-v-3cee9876] {\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.08px;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  color: #3d4767;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.custom-fee-title span[data-v-3cee9876] {\n  margin-left: 4px;\n  font-weight: 500;\n}\n.custom-fee-presets[data-v-3cee9876] {\n  height: 81px;\n  width: 100%;\n  display: flex;\n  border: 1px solid #d9dfe5;\n  margin-bottom: 30px;\n}\n.custom-fee-presets .custom-fee-presets-option[data-v-3cee9876] {\n  flex: 1;\n  padding: 4px;\n  cursor: pointer;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.custom-fee-presets .custom-fee-presets-option[data-v-3cee9876]:not(:last-child) {\n  border-right: 1px solid #d9dfe5;\n}\n.custom-fee-presets .custom-fee-presets-option.active[data-v-3cee9876], .custom-fee-presets .custom-fee-presets-option[data-v-3cee9876]:hover {\n  background-color: #f0f7f9;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-name[data-v-3cee9876] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 26px;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-time[data-v-3cee9876],\n.custom-fee-presets .custom-fee-presets-option .custom-fee-amount[data-v-3cee9876] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 16px;\n}\n.custom-fee-presets .custom-fee-presets-option .custom-fee-fiat[data-v-3cee9876] {\n  font-weight: 300;\n  font-size: 10px;\n  line-height: 16px;\n  color: #646f85;\n}\n.custom-fee-customized[data-v-3cee9876] {\n  display: flex;\n}\n.custom-fee-details[data-v-3cee9876] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.custom-fee-details .custom-fee-details-item[data-v-3cee9876] {\n  flex: 1;\n  display: flex;\n}\n.custom-fee-details .custom-fee-details-item .gas-unit-label[data-v-3cee9876] {\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 150%;\n  position: relative;\n  top: 18px;\n}\n.custom-fee-details .custom-fee-details-item input[data-v-3cee9876] {\n  height: 25px !important;\n  align-items: flex-end;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: right;\n  margin-left: 4px;\n}\n.custom-fee-details .custom-fee-details-item input[type=number][data-v-3cee9876]::-webkit-inner-spin-button, .custom-fee-details .custom-fee-details-item input[type=number][data-v-3cee9876]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.custom-fee-details .custom-fee-details-item div[data-v-3cee9876] {\n  display: flex;\n  align-items: flex-end;\n}\n.custom-fee-details .custom-fee-details-item .fee-input-controls[data-v-3cee9876] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 20px;\n  height: 25px;\n}\n.custom-fee-estimation[data-v-3cee9876] {\n  display: flex;\n  justify-content: space-between;\n}\n.custom-fee-estimation div[data-v-3cee9876] {\n  display: flex;\n  flex-direction: column;\n}\n.custom-fee-estimation span[data-v-3cee9876]:nth-of-type(2) {\n  color: #088513;\n}\n.custom-fee-result[data-v-3cee9876] {\n  background: #f0f7f9;\n  border: 1px solid #d9dfe5;\n  display: flex;\n  padding: 10px;\n  flex-direction: column;\n}\n.custom-fee-result .custom-fee-result-title[data-v-3cee9876] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 26px;\n}\n.custom-fee-result .custom-fee-result-time[data-v-3cee9876],\n.custom-fee-result .custom-fee-result-amount[data-v-3cee9876],\n.custom-fee-result .custom-fee-result-fiat[data-v-3cee9876] {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 16px;\n}\n.custom-fee-result .custom-fee-result-fiat[data-v-3cee9876] {\n  color: #646f85;\n}\n.gasUnitLabel[data-v-3cee9876] {\n  right: 60px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.fee-selector.btn-group label.btn {\n  text-transform: capitalize;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\nsvg.ledger-sign-request {\n  margin-top: 5px;\n  width: 320px;\n}\n.ledger-options-instructions {\n  margin-top: 10px;\n  align-self: flex-start;\n  padding-left: 0px !important;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 20px;\n}", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-97c6f19e] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-97c6f19e] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-97c6f19e] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-97c6f19e] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-97c6f19e] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-97c6f19e] {\n  text-align: left !important;\n}\n.text-right[data-v-97c6f19e] {\n  text-align: right !important;\n}\n.text-center[data-v-97c6f19e] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-97c6f19e] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-97c6f19e] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-97c6f19e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-97c6f19e] {\n    text-align: left !important;\n}\n.text-md-right[data-v-97c6f19e] {\n    text-align: right !important;\n}\n.text-md-center[data-v-97c6f19e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-97c6f19e] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-97c6f19e] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-97c6f19e] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-97c6f19e] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-97c6f19e] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-97c6f19e] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-97c6f19e] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-97c6f19e] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-97c6f19e] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-97c6f19e] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-97c6f19e] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-97c6f19e] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-97c6f19e] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-97c6f19e] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-97c6f19e] {\n  font-style: italic !important;\n}\n.text-white[data-v-97c6f19e] {\n  color: #fff !important;\n}\n.text-primary[data-v-97c6f19e] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-97c6f19e]:hover, a.text-primary[data-v-97c6f19e]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-97c6f19e] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-97c6f19e]:hover, a.text-secondary[data-v-97c6f19e]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-97c6f19e] {\n  color: #28a745 !important;\n}\na.text-success[data-v-97c6f19e]:hover, a.text-success[data-v-97c6f19e]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-97c6f19e] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-97c6f19e]:hover, a.text-info[data-v-97c6f19e]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-97c6f19e] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-97c6f19e]:hover, a.text-warning[data-v-97c6f19e]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-97c6f19e] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-97c6f19e]:hover, a.text-danger[data-v-97c6f19e]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-97c6f19e] {\n  color: #f8faff !important;\n}\na.text-light[data-v-97c6f19e]:hover, a.text-light[data-v-97c6f19e]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-97c6f19e] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-97c6f19e]:hover, a.text-dark[data-v-97c6f19e]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-97c6f19e] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-97c6f19e] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-97c6f19e] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-97c6f19e] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-97c6f19e] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-97c6f19e] {\n  text-decoration: none !important;\n}\n.text-break[data-v-97c6f19e] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-97c6f19e] {\n  color: inherit !important;\n}\n.send_asset.input-group[data-v-97c6f19e] {\n  align-items: center;\n}\n.send_asset_icon[data-v-97c6f19e] {\n  margin-right: 4px;\n}\n.send_asset input[data-v-97c6f19e] {\n  text-align: right;\n  margin-left: 12px;\n}\n.send_fees[data-v-97c6f19e] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  margin: 6px 0;\n}\n.send_fees .fee-selector[data-v-97c6f19e] {\n  margin-left: 6px;\n}\n.send_fees .custom-fees[data-v-97c6f19e] {\n  font-weight: normal;\n}\n.permission-send_fees[data-v-97c6f19e] {\n  text-align: center;\n  margin: 6px 0;\n}\n.permission-send_data[data-v-97c6f19e] {\n  border-top: 1px solid #d9dfe5;\n  border-bottom: 1px solid #d9dfe5;\n  padding: 10px 0;\n}\n.permission-send_data_icon-right[data-v-97c6f19e] {\n  width: 6px;\n  margin-right: 12px;\n}\n.permission-send_data_icon-down[data-v-97c6f19e] {\n  width: 12px;\n  margin-right: 6px;\n}\n.permission-send_data label[data-v-97c6f19e] {\n  display: flex;\n  align-items: center;\n  text-align: left;\n}\n.permission-send_data_code[data-v-97c6f19e] {\n  margin-left: 18px;\n  max-height: 120px;\n  text-align: left;\n  overflow-y: auto;\n  word-wrap: break-word;\n  font-size: 0.8125rem;\n}\n.fee-info[data-v-97c6f19e] {\n  font-size: 10px;\n}\n.wrapper[data-v-97c6f19e] {\n  padding: 10px !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/human-standard-token-abi/index.js":
/*!********************************************************!*\
  !*** ./node_modules/human-standard-token-abi/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_extraData",
        "type": "bytes"
      }
    ],
    "name": "approveAndCall",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "remaining",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_initialAmount",
        "type": "uint256"
      },
      {
        "name": "_tokenName",
        "type": "string"
      },
      {
        "name": "_decimalUnits",
        "type": "uint8"
      },
      {
        "name": "_tokenSymbol",
        "type": "string"
      }
    ],
    "type": "constructor"
  },
  {
    "payable": false,
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
]


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b4d18f40", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("429d3b2a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7dd198d6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3caacc3f", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("529e0ded", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icons/ledger_sign_request.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/ledger_sign_request.svg ***!
  \**************************************************/
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
        "viewBox": "0 0 320 47",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M120.874 4.702c.495 0 .933.114 1.314.342.384.225.681.54.893.947.215.407.322.87.322 1.387 0 .514-.105.973-.317 1.377a2.285 2.285 0 01-.884.942c-.377.222-.814.332-1.308.332-.466 0-.874-.1-1.226-.302a2.179 2.179 0 01-.82-.855v3.066h-.782V4.731h.782V5.87a2.06 2.06 0 01.81-.864 2.4 2.4 0 011.216-.303zm-.137 4.62c.358 0 .681-.084.967-.25.287-.169.51-.403.669-.703.163-.3.244-.636.244-1.01 0-.375-.081-.71-.244-1.006a1.763 1.763 0 00-.669-.699 1.864 1.864 0 00-.967-.254c-.368 0-.695.083-.981.25-.287.165-.51.4-.669.703a2.1 2.1 0 00-.239 1.005c0 .381.079.72.239 1.016.159.296.382.529.669.698.286.166.613.25.981.25zm4.815-3.424c.176-.384.423-.677.742-.878.319-.206.701-.311 1.147-.318v.786c-.546-.006-.986.147-1.318.46-.332.309-.522.727-.571 1.254V10h-.777V4.731h.777v1.167zm5.044-1.186c.827 0 1.45.265 1.87.796.42.527.609 1.248.566 2.163h-4.297c.065.514.271.923.616 1.225.348.303.779.455 1.294.455.325 0 .626-.057.903-.171.277-.114.519-.277.727-.489l.43.46c-.254.28-.563.496-.928.649-.361.153-.758.23-1.191.23-.514 0-.97-.111-1.367-.333a2.37 2.37 0 01-.928-.942c-.218-.404-.327-.866-.327-1.387 0-.52.111-.981.332-1.382.225-.403.537-.716.937-.937a2.74 2.74 0 011.363-.337zm1.738 2.32c-.026-.509-.199-.91-.518-1.207-.315-.296-.729-.444-1.24-.444-.501 0-.919.15-1.255.45-.332.299-.527.699-.586 1.2h3.599zm3.437-2.33c.316 0 .621.042.914.127.293.081.548.199.766.352l-.298.62a2.598 2.598 0 00-.688-.313 2.516 2.516 0 00-.742-.117c-.313 0-.565.059-.757.176a.568.568 0 00-.283.522c0 .16.053.293.161.4.107.108.239.196.395.264a6 6 0 00.655.215c.367.108.665.215.893.323.231.107.428.263.591.468.163.202.244.466.244.791 0 .495-.185.87-.557 1.123-.367.251-.825.376-1.372.376-.381 0-.752-.065-1.113-.195a2.621 2.621 0 01-.908-.542l.303-.59c.221.204.49.367.805.487.316.12.63.181.943.181.332 0 .602-.065.81-.195a.634.634 0 00.318-.576c0-.254-.101-.441-.303-.562-.202-.124-.513-.246-.933-.366a8.065 8.065 0 01-.879-.317 1.59 1.59 0 01-.561-.445c-.156-.198-.235-.456-.235-.771 0-.479.173-.837.518-1.075.348-.24.786-.36 1.313-.36zm4.532 0c.315 0 .62.042.913.127.293.081.548.199.766.352l-.297.62a2.62 2.62 0 00-.689-.313 2.516 2.516 0 00-.742-.117c-.313 0-.565.059-.757.176a.568.568 0 00-.283.522c0 .16.054.293.161.4.107.108.239.196.396.264.156.066.374.137.654.215.368.108.665.215.893.323.231.107.428.263.591.468.163.202.244.466.244.791 0 .495-.185.87-.556 1.123-.368.251-.826.376-1.372.376-.381 0-.752-.065-1.114-.195a2.63 2.63 0 01-.908-.542l.303-.59c.221.204.49.367.806.487.315.12.629.181.942.181.332 0 .602-.065.81-.195a.634.634 0 00.318-.576c0-.254-.101-.441-.303-.562-.202-.124-.513-.246-.933-.366a8.115 8.115 0 01-.878-.317 1.602 1.602 0 01-.562-.445c-.156-.198-.234-.456-.234-.771 0-.479.172-.837.517-1.075.349-.24.786-.36 1.314-.36zm8.755 0c.628 0 1.118.182 1.469.547.355.361.533.861.533 1.5V10h-.782V6.958c0-.465-.132-.828-.395-1.089-.264-.26-.628-.39-1.094-.39-.553.006-.988.187-1.304.542-.315.351-.473.815-.473 1.391V10h-.782V2.578h.782v3.33c.345-.794 1.027-1.196 2.046-1.206zm5.844.01c.827 0 1.451.265 1.87.796.42.527.609 1.248.567 2.163h-4.297c.065.514.27.923.615 1.225.349.303.78.455 1.294.455.326 0 .627-.057.903-.171.277-.114.52-.277.728-.489l.43.46c-.254.28-.563.496-.928.649-.361.153-.758.23-1.191.23-.515 0-.97-.111-1.368-.333a2.367 2.367 0 01-.927-.942c-.218-.404-.327-.866-.327-1.387 0-.52.11-.981.332-1.382.224-.403.537-.716.937-.937.4-.225.855-.337 1.362-.337zm1.739 2.32c-.026-.509-.199-.91-.518-1.207-.316-.296-.729-.444-1.24-.444-.501 0-.92.15-1.255.45-.332.299-.527.699-.586 1.2h3.599zm2.817-1.134c.176-.384.423-.677.742-.878.319-.206.702-.311 1.148-.318v.786c-.547-.006-.987.147-1.319.46-.332.309-.522.727-.571 1.254V10h-.776V4.731h.776v1.167zm5.044-1.186c.827 0 1.45.265 1.87.796.42.527.609 1.248.566 2.163h-4.296c.065.514.27.923.615 1.225.348.303.779.455 1.294.455.325 0 .626-.057.903-.171.277-.114.519-.277.728-.489l.429.46c-.254.28-.563.496-.927.649a3.03 3.03 0 01-1.192.23c-.514 0-.97-.111-1.367-.333a2.376 2.376 0 01-.928-.942c-.218-.404-.327-.866-.327-1.387 0-.52.111-.981.332-1.382.225-.403.537-.716.938-.937.4-.225.854-.337 1.362-.337zm1.738 2.32c-.026-.509-.198-.91-.517-1.207-.316-.296-.73-.444-1.241-.444-.501 0-.919.15-1.254.45-.332.299-.528.699-.586 1.2h3.598zm7.505 2.607c-.381.26-.778.394-1.191.4-.407 0-.733-.124-.977-.371-.244-.25-.366-.627-.366-1.128V5.532h-.757v-.63h.757V3.511h.771v1.391l1.67-.014v.644h-1.67v2.866c0 .313.059.54.176.68.117.136.293.204.528.204.273 0 .553-.09.839-.273l.22.63zm3.237-4.927c.515 0 .974.112 1.377.337.407.221.725.534.953.937.227.404.341.861.341 1.372 0 .521-.114.983-.341 1.387-.228.404-.546.72-.953.947a2.78 2.78 0 01-1.377.337c-.514 0-.975-.112-1.381-.337a2.446 2.446 0 01-.953-.947 2.81 2.81 0 01-.336-1.387c0-.514.112-.971.336-1.372a2.38 2.38 0 01.953-.937 2.806 2.806 0 011.381-.337zm0 .708c-.361 0-.686.083-.976.249-.29.166-.514.397-.674.693a2.075 2.075 0 00-.239 1.006c0 .381.08.72.239 1.016.16.296.384.529.674.698.29.166.615.249.976.249.362 0 .687-.083.977-.249.29-.17.514-.402.674-.698.159-.296.239-.635.239-1.016 0-.38-.08-.718-.239-1.01a1.73 1.73 0 00-.679-.689 1.921 1.921 0 00-.972-.25zm8.184-.718c.316 0 .62.042.913.127.293.081.549.199.767.352l-.298.62a2.605 2.605 0 00-.689-.313 2.516 2.516 0 00-.742-.117c-.312 0-.565.059-.757.176a.57.57 0 00-.283.522c0 .16.054.293.161.4.108.108.24.196.396.264.156.066.374.137.654.215.368.108.666.215.894.323.231.107.428.263.59.468.163.202.245.466.245.791 0 .495-.186.87-.557 1.123-.368.251-.825.376-1.372.376-.381 0-.752-.065-1.113-.195a2.635 2.635 0 01-.909-.542l.303-.59c.221.204.49.367.806.487.316.12.63.181.942.181.332 0 .602-.065.811-.195a.635.635 0 00.317-.576c0-.254-.101-.441-.303-.562-.201-.124-.512-.246-.932-.366a8.065 8.065 0 01-.879-.317 1.602 1.602 0 01-.562-.445c-.156-.198-.234-.456-.234-.771 0-.479.172-.837.518-1.075.348-.24.786-.36 1.313-.36zM188.301 10V4.731h.766V10h-.766zm.376-7.32c.146 0 .268.053.366.157.098.1.146.228.146.38a.54.54 0 01-.146.387.482.482 0 01-.366.156.486.486 0 01-.366-.152.557.557 0 01-.142-.39c0-.153.047-.28.142-.381a.479.479 0 01.366-.156zm6.88 6.768c0 .508-.111.95-.332 1.328-.222.381-.533.673-.933.874-.397.205-.859.308-1.387.308-.781-.007-1.5-.259-2.158-.757l.357-.6a2.737 2.737 0 001.772.669c.573 0 1.032-.165 1.377-.494.348-.325.522-.761.522-1.308v-.796a1.946 1.946 0 01-.781.815 2.3 2.3 0 01-1.157.284c-.466 0-.881-.108-1.245-.323a2.274 2.274 0 01-.855-.908 2.808 2.808 0 01-.302-1.318c0-.489.099-.922.297-1.3.202-.38.482-.678.84-.893a2.355 2.355 0 011.24-.327c.446 0 .835.095 1.167.283.336.19.601.461.796.816V4.73h.782v4.717zm-2.583-.337c.348 0 .659-.08.932-.239.274-.163.487-.386.64-.669.153-.283.229-.6.229-.952 0-.361-.076-.684-.229-.967a1.672 1.672 0 00-.64-.664 1.814 1.814 0 00-.932-.24c-.345 0-.655.08-.928.24-.274.16-.488.381-.645.664a1.97 1.97 0 00-.234.967c0 .355.078.674.234.957.157.28.371.501.645.664.273.16.583.24.928.24zm7.168-4.409c.628 0 1.118.182 1.469.547.355.361.533.861.533 1.5V10h-.782V6.958c0-.465-.132-.828-.395-1.089-.264-.26-.628-.39-1.094-.39-.514.006-.926.164-1.235.473-.31.306-.489.711-.537 1.216V10h-.777V4.731h.777V5.89c.361-.782 1.041-1.177 2.041-1.187z",
        "fill": "#000D35"
      }
    }), _c('path', {
      attrs: {
        "stroke": "#000D35",
        "d": "M98.5 21.5h82v25h-82zM180.5 28.5H196a5.5 5.5 0 110 11h-15.5v-11z"
      }
    }), _c('path', {
      attrs: {
        "fill": "#000D35",
        "d": "M202 34h61v1h-61zM128 20h11v1h-11zM157 20h11v1h-11z"
      }
    }), _c('path', {
      attrs: {
        "d": "M36.5 21.5H112c6.904 0 12.5 5.596 12.5 12.5s-5.596 12.5-12.5 12.5H36.5v-25z",
        "fill": "#F0F7F9",
        "stroke": "#000D35"
      }
    }), _c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M47.457 36.914H50.2V40h-2.743v-3.085zM53.097 28h-5.564v7.121H55v-5.268c.003-1-.854-1.853-1.903-1.853zM43 36.969v.855c0 .96.712 1.782 1.622 1.782h.778V36.97H43zM45.4 28h-.778c-.874 0-1.622.783-1.622 1.782v.855h2.4V28zM43 32.484h2.4v2.638H43v-2.638zM51.803 39.606h.778c.874 0 1.622-.783 1.622-1.784v-.853h-2.4v2.637z",
        "fill": "#000D35"
      }
    }), _c('circle', {
      attrs: {
        "cx": "111",
        "cy": "34",
        "r": "6.5",
        "fill": "#fff",
        "stroke": "#000D35"
      }
    }), _c('path', {
      attrs: {
        "stroke": "#000D35",
        "d": "M132.5 28.5h35v10h-35z"
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

/***/ "./src/components/CustomFees.vue":
/*!***************************************!*\
  !*** ./src/components/CustomFees.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFees.vue?vue&type=template&id=02794fee& */ "./src/components/CustomFees.vue?vue&type=template&id=02794fee&");
/* harmony import */ var _CustomFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFees.vue?vue&type=script&lang=js& */ "./src/components/CustomFees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& */ "./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CustomFees.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CustomFees.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/CustomFees.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFees.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=style&index=0&id=02794fee&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_style_index_0_id_02794fee_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CustomFees.vue?vue&type=template&id=02794fee&":
/*!**********************************************************************!*\
  !*** ./src/components/CustomFees.vue?vue&type=template&id=02794fee& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFees.vue?vue&type=template&id=02794fee& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFees.vue?vue&type=template&id=02794fee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFees_vue_vue_type_template_id_02794fee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/CustomFeesEIP1559.vue":
/*!**********************************************!*\
  !*** ./src/components/CustomFeesEIP1559.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true& */ "./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true&");
/* harmony import */ var _CustomFeesEIP1559_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFeesEIP1559.vue?vue&type=script&lang=js& */ "./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& */ "./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomFeesEIP1559_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cee9876",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CustomFeesEIP1559.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFeesEIP1559.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=style&index=0&id=3cee9876&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_style_index_0_id_3cee9876_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CustomFeesEIP1559.vue?vue&type=template&id=3cee9876&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFeesEIP1559_vue_vue_type_template_id_3cee9876_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/FeeSelector.vue":
/*!****************************************!*\
  !*** ./src/components/FeeSelector.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeSelector.vue?vue&type=template&id=ae281df6& */ "./src/components/FeeSelector.vue?vue&type=template&id=ae281df6&");
/* harmony import */ var _FeeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeSelector.vue?vue&type=script&lang=js& */ "./src/components/FeeSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& */ "./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FeeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/FeeSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/FeeSelector.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/FeeSelector.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./FeeSelector.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=style&index=0&id=ae281df6&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_style_index_0_id_ae281df6_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/FeeSelector.vue?vue&type=template&id=ae281df6&":
/*!***********************************************************************!*\
  !*** ./src/components/FeeSelector.vue?vue&type=template&id=ae281df6& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./FeeSelector.vue?vue&type=template&id=ae281df6& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/FeeSelector.vue?vue&type=template&id=ae281df6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeSelector_vue_vue_type_template_id_ae281df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/LedgerSignRequestModal.vue":
/*!***************************************************!*\
  !*** ./src/components/LedgerSignRequestModal.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74& */ "./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74&");
/* harmony import */ var _LedgerSignRequestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LedgerSignRequestModal.vue?vue&type=script&lang=js& */ "./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& */ "./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LedgerSignRequestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/LedgerSignRequestModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./LedgerSignRequestModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=style&index=0&id=2bbf0b74&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_style_index_0_id_2bbf0b74_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74&":
/*!**********************************************************************************!*\
  !*** ./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/LedgerSignRequestModal.vue?vue&type=template&id=2bbf0b74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_LedgerSignRequestModal_vue_vue_type_template_id_2bbf0b74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/utils/hardware-wallet.js":
/*!**************************************!*\
  !*** ./src/utils/hardware-wallet.js ***!
  \**************************************/
/*! exports provided: LEDGER_USB_VENDOR_ID, tryConnectLedgerDevice, ledgerConnectMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEDGER_USB_VENDOR_ID", function() { return LEDGER_USB_VENDOR_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryConnectLedgerDevice", function() { return tryConnectLedgerDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledgerConnectMixin", function() { return ledgerConnectMixin; });
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @liquality/error-parser */ "./node_modules/@liquality/error-parser/dist/src/index.js");
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser__WEBPACK_IMPORTED_MODULE_0__);

const LEDGER_USB_VENDOR_ID = '0x2c97';
async function tryConnectLedgerDevice() {
  const connectedDevices = await window.navigator.hid.requestDevice({
    filters: [{
      vendorId: LEDGER_USB_VENDOR_ID
    }]
  });
  const userApprovedWebHidConnection = connectedDevices.some(device => device.vendorId === Number(LEDGER_USB_VENDOR_ID));
  return !!userApprovedWebHidConnection;
}
const ledgerConnectMixin = {
  data() {
    return {
      ledgerConnected: false
    };
  },
  methods: {
    async connectLedger() {
      if (!this.ledgerConnected) {
        const connected = await tryConnectLedgerDevice();
        if (!connected) {
          throw new _liquality_error_parser__WEBPACK_IMPORTED_MODULE_0__["LedgerDeviceConnectionError"]();
        }
        this.ledgerConnected = connected;
      }
    }
  }
};

/***/ }),

/***/ "./src/views/PermissionSend.vue":
/*!**************************************!*\
  !*** ./src/views/PermissionSend.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true& */ "./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true&");
/* harmony import */ var _PermissionSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionSend.vue?vue&type=script&lang=js& */ "./src/views/PermissionSend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& */ "./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PermissionSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "97c6f19e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/PermissionSend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/PermissionSend.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/PermissionSend.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./PermissionSend.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=style&index=0&id=97c6f19e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_style_index_0_id_97c6f19e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/PermissionSend.vue?vue&type=template&id=97c6f19e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionSend_vue_vue_type_template_id_97c6f19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.js.map