(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_angle_right_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/angle_right.svg */ "./src/assets/icons/angle_right.svg");
/* harmony import */ var _assets_icons_angle_right_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_angle_right_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/angle_down.svg */ "./src/assets/icons/angle_down.svg");
/* harmony import */ var _assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data: () => {
    return {
      show: false
    };
  },
  components: {
    AngleRightIcon: (_assets_icons_angle_right_svg__WEBPACK_IMPORTED_MODULE_0___default()),
    AngleDownIcon: (_assets_icons_angle_down_svg__WEBPACK_IMPORTED_MODULE_1___default())
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = '0';
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyError.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/copy.svg */ "./src/assets/icons/copy.svg");
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_check_primary_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/check-primary.svg */ "./src/assets/icons/check-primary.svg");
/* harmony import */ var _assets_icons_check_primary_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_check_primary_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @liquality/error-parser */ "./node_modules/@liquality/error-parser/dist/src/index.js");
/* harmony import */ var _liquality_error_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['translatedError', 'liqualityErrorString'],
  components: {
    CopyIcon: (_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_0___default()),
    CheckIcon: (_assets_icons_check_primary_svg__WEBPACK_IMPORTED_MODULE_1___default())
  },
  computed: {
    jsonError() {
      return {
        error: Object(_liquality_error_parser__WEBPACK_IMPORTED_MODULE_2__["liqualityErrorStringToJson"])(this.liqualityErrorString),
        friendlyMessage: this.translatedError
      };
    }
  },
  data() {
    return {
      errorCopied: false
    };
  },
  methods: {
    async copyError() {
      await navigator.clipboard.writeText(JSON.stringify(this.jsonError));
      this.errorCopied = true;
      setTimeout(() => {
        this.errorCopied = false;
      }, 4000);
    }
  }
});

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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailsContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/chevron_down.svg */ "./src/assets/icons/chevron_down.svg");
/* harmony import */ var _assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChevronDownIcon: (_assets_icons_chevron_down_svg__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: ['open'],
  methods: {
    mounted() {
      this.showDetails = this.open || false;
    }
  },
  data() {
    return {
      showDetails: false
    };
  }
});

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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OperationErrorModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modal */ "./src/components/Modal.vue");
/* harmony import */ var _assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/ledger_icon.svg */ "./src/assets/icons/ledger_icon.svg");
/* harmony import */ var _assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CopyError_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CopyError.vue */ "./src/components/CopyError.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Modal: _components_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    LedgerIcon: (_assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    CopyError: _CopyError_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    account: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: false
    },
    liqualityErrorString: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    }
  },
  computed: {
    translatedError() {
      return this.$tle(this.liqualityErrorString);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Send/SendNFT.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/NavBar.vue */ "./src/components/NavBar.vue");
/* harmony import */ var _components_Accordion_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Accordion.vue */ "./src/components/Accordion.vue");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/address */ "./node_modules/@liquality/wallet-core/dist/src/utils/address.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/icons/copy.svg */ "./src/assets/icons/copy.svg");
/* harmony import */ var _assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/fees */ "./node_modules/@liquality/wallet-core/dist/src/utils/fees.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/icons/spinner.svg */ "./src/assets/icons/spinner.svg");
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_OperationErrorModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/OperationErrorModal */ "./src/components/OperationErrorModal.vue");
/* harmony import */ var _components_FeeSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/FeeSelector */ "./src/components/FeeSelector.vue");
/* harmony import */ var _components_CustomFees__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/CustomFees */ "./src/components/CustomFees.vue");
/* harmony import */ var _components_CustomFeesEIP1559__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/CustomFeesEIP1559 */ "./src/components/CustomFeesEIP1559.vue");
/* harmony import */ var _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/DetailsContainer */ "./src/components/DetailsContainer.vue");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/assets/nft_thumbnail.png */ "./src/assets/nft_thumbnail.png");
/* harmony import */ var _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @liquality/error-parser/dist/src/utils */ "./node_modules/@liquality/error-parser/dist/src/utils/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @liquality/error-parser/dist/src/reporters/index */ "./node_modules/@liquality/error-parser/dist/src/reporters/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_23__);
























/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Accordion: _components_Accordion_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CopyIcon: (_assets_icons_copy_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    SpinnerIcon: (_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    FeeSelector: _components_FeeSelector__WEBPACK_IMPORTED_MODULE_14__["default"],
    CustomFees: _components_CustomFees__WEBPACK_IMPORTED_MODULE_15__["default"],
    CustomFeesEIP1559: _components_CustomFeesEIP1559__WEBPACK_IMPORTED_MODULE_16__["default"],
    DetailsContainer: _components_DetailsContainer__WEBPACK_IMPORTED_MODULE_17__["default"],
    OperationErrorModal: _components_OperationErrorModal__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data() {
    return {
      sendFees: {},
      eip1559fees: {},
      amount: 0.0,
      activeView: 'selectAsset',
      selectedNFT: null,
      loading: false,
      sendErrorModalOpen: false,
      customFeeAssetSelected: null,
      customFee: null,
      sendErrorMessage: '',
      address: '',
      selectedFee: 'average',
      updatingFees: true
    };
  },
  async created() {
    if (this.$route.query.nftAsset) {
      this.activeView = 'selectedAsset';
      const collectionName = this.$route.query.collection;
      const nftAssetId = this.$route.query.nftAsset;
      const collections = this.accountNftCollections(this.accountId);
      if (collections && collections[collectionName]) {
        this.selectedNFT = collections[collectionName].find(i => i.token_id == nftAssetId);
      }
    }
    await this.updateFees({
      asset: this.assetChain
    });
    await this.updateSendFees(this.amount);
    setTimeout(() => {
      this.updatingFees = false;
    }, 1500);
    await this.trackAnalytics({
      event: 'Send NFT screen',
      properties: {
        category: 'Send',
        action: 'User on Send NFT screen',
        label: `NFT`
      }
    });
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['activity', 'accountItem', 'accountsData', 'accountNftCollections', 'suggestedFeePrices']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(['activeNetwork', 'activeWalletId', 'history', 'externalConnections', 'fees', 'fiatRates']),
    title() {
      switch (this.activeView) {
        case 'selectAsset':
          return this.$t('pages.send.titleSelectNFT');
        case 'selectedAsset':
          return this.$t('pages.send.titleSendNFT');
        case 'custom-fees':
          return this.$t('common.customFees');
        case 'review':
          return this.$t('pages.send.titleReviewSendNFT');
        default:
          return '';
      }
    },
    thumbnailImage() {
      return _assets_nft_thumbnail_png__WEBPACK_IMPORTED_MODULE_21___default.a;
    },
    nftCollection() {
      var _this$account;
      const collection = this.accountNftCollections((_this$account = this.account) === null || _this$account === void 0 ? void 0 : _this$account.id);
      const sortedCollection = Object.keys(collection).sort().reduce((collectionList, collectionName) => {
        collectionList[collectionName] = collection[collectionName];
        return collectionList;
      }, {});
      return sortedCollection;
    },
    routeSource() {
      var _this$$route$query;
      if ((_this$$route$query = this.$route.query) !== null && _this$$route$query !== void 0 && _this$$route$query.source) {
        return `${this.$route.query.source}`;
      }
      return '/wallet/nfts';
    },
    totalFeeInFiat() {
      return Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__["prettyFiatBalance"])(this.currentFee, this.fiatRates[this.assetChain]);
    },
    accountId() {
      if (this.$route.query.accountId) {
        return this.$route.query.accountId;
      }
      return this.selectedNFT.accountId;
    },
    account() {
      return this.accountItem(this.accountId);
    },
    assetHistory() {
      return this.activity.filter(item => item.from === this.asset);
    },
    balance() {
      var _this$account2, _this$account2$balanc;
      // The balance is always the native asset balance
      const balance = ((_this$account2 = this.account) === null || _this$account2 === void 0 ? void 0 : (_this$account2$balanc = _this$account2.balances) === null || _this$account2$balanc === void 0 ? void 0 : _this$account2$balanc[this.asset]) || 0;
      return Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__["prettyBalance"])(balance, this.asset);
    },
    canSend() {
      if (!this.address || !this.isValidAddress) return false;
      if (bignumber_js__WEBPACK_IMPORTED_MODULE_20___default()(this.balance).lte(0)) return false;
      return true;
    },
    fromAddress() {
      var _getChain, _this$account3, _this$account4;
      return (_getChain = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__["getChain"])(this.activeNetwork, (_this$account3 = this.account) === null || _this$account3 === void 0 ? void 0 : _this$account3.chain)) === null || _getChain === void 0 ? void 0 : _getChain.formatAddressUI((_this$account4 = this.account) === null || _this$account4 === void 0 ? void 0 : _this$account4.addresses[0]);
    },
    isValidAddress() {
      return Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__["getChain"])(this.activeNetwork, _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default.a[this.asset].chain).isValidAddress(this.address);
    },
    addressError() {
      if (!this.isValidAddress) {
        return this.$t('common.addressFormatError');
      }
      return null;
    },
    selectedFeeLabel() {
      return Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__["getFeeLabel"])(this.selectedFee);
    },
    currentFee() {
      const fees = this.sendFees;
      return this.selectedFee in fees ? fees[this.selectedFee] : bignumber_js__WEBPACK_IMPORTED_MODULE_20___default()(0);
    },
    prettyFee() {
      return this.currentFee.dp(6);
    },
    assetChain() {
      // in NFT screen the asset chain is always the asset
      return Object(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10__["getNativeAsset"])(this.asset);
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
    isEIP1559Fees() {
      var _this$account5;
      return _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default.a[this.asset].chain === ((_this$account5 = this.account) === null || _this$account5 === void 0 ? void 0 : _this$account5.chain);
    },
    asset() {
      var _this$account6;
      return this.account ? Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__["getNativeAssetCode"])(this.activeNetwork, (_this$account6 = this.account) === null || _this$account6 === void 0 ? void 0 : _this$account6.chain) : null;
    },
    startAddress() {
      return this.address.slice(0, 6);
    },
    middleAddressPart() {
      return this.address.substring(6, this.address.length - 4);
    },
    endAddress() {
      return this.address.slice(this.address.length - 4);
    },
    isCustomFeeSupported() {
      const {
        supportCustomFees
      } = Object(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_5__["getChain"])(this.activeNetwork, _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default.a[this.asset].chain);
      return supportCustomFees;
    }
  },
  methods: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('app', ['trackAnalytics']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['sendNFTTransaction', 'updateFees', 'updateNFTs']),
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_11__["getAssetIcon"],
    shortenAddress: _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__["shortenAddress"],
    formatFiat: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__["formatFiat"],
    formatFiatUI: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__["formatFiatUI"],
    prettyBalance: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_18__["prettyBalance"],
    getFeeAsset: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10__["getFeeAsset"],
    getFeeLabel: _liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__["getFeeLabel"],
    getNativeAsset: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_10__["getNativeAsset"],
    async copy(text) {
      await navigator.clipboard.writeText(text);
    },
    selectNFT(asset) {
      this.selectedNFT = asset;
    },
    closeSendErrorModal() {
      this.sendErrorModalOpen = false;
      this.loading = false;
    },
    back() {
      switch (this.activeView) {
        case 'selectedAsset':
          if (this.$route.query.nftAsset) {
            return this.$router.push(this.routeSource);
          }
          return this.activeView = 'selectAsset';
        case 'review':
          return this.activeView = 'selectedAsset';
        default:
          return;
      }
    },
    next(view) {
      this.activeView = view;
    },
    setActiveView(view) {
      if (this.activeView === 'selectAsset') {
        return '/wallet/nfts';
      }
      this.activeView = view;
    },
    nftCollectionName(assets, key) {
      if (key && key !== 'undefined' && key !== 'null') {
        return key;
      } else {
        var _assets$filter$;
        return ((_assets$filter$ = assets.filter(asset => asset.name)[0]) === null || _assets$filter$ === void 0 ? void 0 : _assets$filter$.name) || 'Unknown Collection';
      }
    },
    cancelCustomFee() {
      this.activeView = 'selectedAsset';
      this.selectedFee = 'average';
    },
    setCustomFee: lodash__WEBPACK_IMPORTED_MODULE_19___default.a.debounce(async function ({
      fee
    }) {
      this.customFee = fee;
      this.updateSendFees(this.amount);
    }, 800),
    applyCustomFee({
      fee
    }) {
      const presetFee = Object.entries(this.assetFees).find(([speed, speedFee]) => speed !== 'custom' && (speedFee.fee === fee || fee.maxPriorityFeePerGas && speedFee.fee.maxPriorityFeePerGas === fee.maxPriorityFeePerGas && speedFee.fee.maxFeePerGas === fee.maxFeePerGas));
      if (presetFee) {
        const [speed] = presetFee;
        this.selectedFee = speed;
        this.customFee = null;
      } else {
        this.updateSendFees(this.amount);
        this.customFee = Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__["feePerUnit"])(fee, _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_7___default.a[this.asset].chain);
        this.selectedFee = 'custom';
      }
      this.activeView = 'selectedAsset';
    },
    onCustomFeeSelected() {
      this.activeView = 'custom-fees';
    },
    resetCustomFee() {
      this.customFee = null;
      this.selectedFee = 'average';
    },
    async _updateSendFees() {
      const sendFees = await Object(_liquality_wallet_core_dist_src_utils_fees__WEBPACK_IMPORTED_MODULE_9__["estimateTransferNFT"])(this.account.id, this.activeNetwork, this.address, [1], this.selectedNFT, this.customFee);
      this.sendFees = sendFees;
    },
    updateSendFees: lodash__WEBPACK_IMPORTED_MODULE_19___default.a.debounce(async function (amount) {
      // In NFT screen the balance is equal to the native asset balance
      console.log(`on updateSendFees => amount: ${amount}, balance: ${this.balance}, asset: ${this.asset}, `);
      if (bignumber_js__WEBPACK_IMPORTED_MODULE_20___default()(this.balance).gt(0)) {
        console.log('Updating fees');
        await this._updateSendFees(amount);
      } else {
        console.log('balance <= 0, not updating fees');
      }
    }, 800),
    async refreshNFTs() {
      const accountIds = this.accountsData.map(account => {
        return account.id;
      });
      try {
        await this.updateNFTs({
          walletId: this.activeWalletId,
          network: this.activeNetwork,
          accountIds: accountIds
        });
      } catch (error) {
        Object(_liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_23__["reportLiqualityError"])(error);
      }
    },
    async sendNFT() {
      this.sendErrorMessage = '';
      this.loading = true;
      try {
        var _this$account7, _this$account8;
        const fee = this.feesAvailable ? this.assetFees[this.selectedFee].fee : undefined;
        const data = {
          network: this.activeNetwork,
          accountId: (_this$account7 = this.account) === null || _this$account7 === void 0 ? void 0 : _this$account7.id,
          walletId: this.activeWalletId,
          receiver: this.address,
          contract: this.selectedNFT.asset_contract.address,
          tokenIDs: [this.selectedNFT.token_id],
          values: [1],
          fee,
          feeLabel: this.selectedFeeLabel,
          nft: this.selectedNFT
        };
        await this.sendNFTTransaction(data);
        await this.refreshNFTs();
        this.$router.replace(`/wallet/nfts/activity/${(_this$account8 = this.account) === null || _this$account8 === void 0 ? void 0 : _this$account8.id}?tab=activity`);
      } catch (error) {
        this.loading = false;
        this.sendErrorMessage = Object(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_22__["errorToLiqualityErrorString"])(error);
        this.sendErrorModalOpen = true;
      }
    },
    imageError(ref) {
      if (ref) {
        this.$refs[ref].src = this.thumbnailImage;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=template&id=834c4d70&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=template&id=834c4d70& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "accordion"
  }, [_c("div", {
    staticClass: "accordion-header",
    on: {
      click: _vm.toggle
    }
  }, [!_vm.show ? _c("AngleRightIcon") : _vm._e(), _vm.show ? _c("AngleDownIcon", {
    attrs: {
      alt: ""
    }
  }) : _vm._e(), _vm._t("header")], 2), _c("transition", {
    attrs: {
      name: "accordion"
    },
    on: {
      "before-enter": _vm.beforeEnter,
      enter: _vm.enter,
      "before-leave": _vm.beforeLeave,
      leave: _vm.leave
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "accordion-body"
  }, [_c("div", {
    staticClass: "accordion-body-inner"
  }, [_vm._t("default")], 2)])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true& ***!
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
    staticClass: "copy-container"
  }, [_c("button", {
    staticClass: "copy-btn",
    on: {
      click: _vm.copyError
    }
  }, [!_vm.errorCopied ? _c("CopyIcon", {
    staticClass: "icon"
  }) : _vm._e(), _vm.errorCopied ? _c("CheckIcon", {
    staticClass: "icon"
  }) : _vm._e(), _vm._v(" " + _vm._s(_vm.errorCopied ? _vm.$t("common.copied") : _vm.$t("common.copyError")) + " ")], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "details-container"
  }, [_c("div", {
    staticClass: "details-header",
    attrs: {
      id: "details_header_chevron_down_icon"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        _vm.showDetails = !_vm.showDetails;
      }
    }
  }, [_c("ChevronDownIcon", {
    class: _vm.showDetails ? "" : "right"
  }), _vm._t("header")], 2), _vm.showDetails ? _c("div", {
    staticClass: "details-content"
  }, [_vm._t("content")], 2) : _vm._e()]);
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        return [_c("div", {
          staticClass: "text-center text-danger"
        }, [_vm._v("Oooops...")])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_c("div", {
          staticClass: "buttons"
        }, [_c("button", {
          staticClass: "ok-button btn btn-outline-clear",
          on: {
            click: _vm.onClose
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("common.ok")) + " ")]), _c("CopyError", {
          attrs: {
            translatedError: _vm.translatedError,
            liqualityErrorString: _vm.liqualityErrorString
          }
        })], 1)];
      },
      proxy: true
    }], null, false, 162630152)
  }, [_vm.account && _vm.account.type.includes("ledger") ? _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "modal-title d-flex justify-content-center"
  }, [_vm._v(" " + _vm._s(_vm.$t("components.operationErrorModal.cantFindAccount")) + " ")]), _c("div", {
    staticClass: "step-icon d-flex justify-content-center"
  }, [_c("LedgerIcon")], 1), _c("ul", {
    staticClass: "step-instructions align-self-start"
  }, [_c("li", [_vm._v(_vm._s(_vm.$t("components.operationErrorModal.instructions1")))]), _c("li", [_vm._v(_vm._s(_vm.$t("components.operationErrorModal.instructions2")))]), _c("li", [_vm._v(_vm._s(_vm.$t("components.operationErrorModal.instructions3")))]), _c("li", [_vm._v(_vm._s(_vm.$t("components.operationErrorModal.instructions4")))])]), _c("p", {
    staticClass: "text-center text-break"
  }, [_vm._v(" " + _vm._s(_vm.translatedError) + " ")])]) : _c("div", {
    staticClass: "justify-content-center"
  }, [_c("p", {
    staticClass: "text-center text-break"
  }, [_vm._v(_vm._s(_vm.translatedError))])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "account-container"
  }, [_vm.activeView === "selectAsset" ? [_c("NavBar", {
    attrs: {
      showBack: true,
      backPath: _vm.routeSource,
      backLabel: _vm.$t("common.overview")
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c("div", {
    staticClass: "account-content mx-3"
  }, [_c("div", _vm._l(_vm.nftCollection, function (assets, key) {
    return _c("Accordion", {
      key: assets.id
    }, [_c("h3", {
      attrs: {
        slot: "header",
        id: "nft-asset-header"
      },
      slot: "header"
    }, [_vm._v(" " + _vm._s(_vm.nftCollectionName(assets, key)) + " (" + _vm._s(assets.length) + ") ")]), _c("div", {
      staticClass: "nft-assets__container__images"
    }, _vm._l(assets, function (asset) {
      return _c("div", {
        key: asset.id,
        staticClass: "nft-image",
        staticStyle: {
          "--img-width": "100px"
        },
        on: {
          click: function ($event) {
            return _vm.selectNFT(asset);
          }
        }
      }, [_c("svg", {
        attrs: {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [_c("rect", {
        attrs: {
          x: "0.5",
          y: "0.5",
          width: "11",
          height: "11",
          rx: "5.5",
          fill: _vm.selectedNFT && _vm.selectedNFT.token_id === asset.token_id ? "#2CD2CF" : "#FFFFFF",
          stroke: "#646F85"
        }
      })]), _c("img", {
        ref: "asset",
        refInFor: true,
        attrs: {
          src: asset.image_thumbnail_url || _vm.thumbnailImage,
          alt: asset.name || "NFT asset"
        },
        on: {
          error: function ($event) {
            return _vm.imageError("asset");
          }
        }
      })]);
    }), 0)]);
  }), 1)]), _c("div", {
    staticClass: "button-group mx-3"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    on: {
      click: function ($event) {
        return _vm.$router.push(_vm.routeSource);
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: !_vm.selectedNFT
    },
    on: {
      click: function ($event) {
        return _vm.next("selectedAsset");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.next")) + " ")])])] : _vm.activeView === "selectedAsset" ? [_c("NavBar", {
    attrs: {
      showBackButton: true,
      backClick: _vm.back,
      backLabel: _vm.$t("common.back")
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c("div", {
    staticClass: "selected-nft-asset mx-3 mt-4 h-100"
  }, [_c("div", {
    staticClass: "d-flex flex-column justify-content-between h-100"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("h3", {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("common.selectedAsset")))]), _c("div", {
    staticClass: "selected-nft-asset__image"
  }, [_c("div", {
    staticClass: "nft-image mr-2",
    staticStyle: {
      "--img-width": "110px"
    }
  }, [_c("img", {
    ref: "nftThumbnailImage",
    attrs: {
      src: _vm.selectedNFT.image_thumbnail_url || _vm.thumbnailImage,
      alt: "selected nft"
    },
    on: {
      error: function ($event) {
        return _vm.imageError("nftThumbnailImage");
      }
    }
  })]), _c("div", [_c("h3", [_vm._v(_vm._s(_vm.selectedNFT.name))]), _c("p", [_vm._v(_vm._s(_vm.selectedNFT.collection.name))])])]), _c("div", {
    staticClass: "selected-nft-asset__send-details"
  }, [_c("h3", {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("pages.send.sendFrom")))]), _c("div", {
    staticClass: "d-flex"
  }, [_c("img", {
    staticClass: "asset-icon mr-3",
    attrs: {
      src: _vm.getAssetIcon(_vm.asset)
    }
  }), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("span", {
    staticClass: "font-bold mr-1"
  }, [_vm._v(_vm._s(_vm.asset))]), _c("div", {
    staticClass: "mr-3"
  }, [_c("span", {
    staticClass: "mr-1"
  }, [_vm._v(_vm._s(_vm.shortenAddress(_vm.fromAddress)))]), _c("span", [_c("CopyIcon", {
    staticClass: "copy-icon",
    on: {
      click: function ($event) {
        return _vm.copy(_vm.fromAddress);
      }
    }
  })], 1)])]), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v(" " + _vm._s(_vm.$t("common.available")) + " " + _vm._s(_vm.balance) + " " + _vm._s(_vm.asset) + " ")])])]), _c("div", {
    staticClass: "form-group mt-4"
  }, [_c("label", {
    attrs: {
      for: "address"
    }
  }, [_c("h3", {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("pages.send.sendTo")))])]), _c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.address,
      expression: "address"
    }],
    staticClass: "form-control form-control-sm",
    class: {
      "is-invalid": _vm.address && _vm.addressError
    },
    attrs: {
      type: "text",
      id: "address",
      placeholder: _vm.$t("common.address"),
      autocomplete: "off",
      required: ""
    },
    domProps: {
      value: _vm.address
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.address = $event.target.value;
      }
    }
  })]), _vm.address && _vm.addressError ? _c("small", {
    staticClass: "text-danger form-text text-right",
    attrs: {
      id: "address_format_error"
    }
  }, [_vm._v(_vm._s(_vm.addressError))]) : _vm._e()])])]), _vm.feesAvailable && _vm.isCustomFeeSupported ? _c("DetailsContainer", {
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c("div", {
          staticClass: "network-header-container"
        }, [_c("span", {
          staticClass: "details-title",
          attrs: {
            id: "send_network_speed"
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("common.networkSpeedFee")) + " ")]), _c("span", {
          staticClass: "text-muted",
          attrs: {
            id: "send_network_speed_avg_fee"
          }
        }, [_vm._v(" (" + _vm._s(_vm.selectedFeeLabel) + " / " + _vm._s(_vm.prettyFee) + " " + _vm._s(_vm.assetChain) + ") ")])]), _c("SpinnerIcon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.updatingFees,
            expression: "updatingFees"
          }],
          staticClass: "updating-fees"
        })];
      },
      proxy: true
    }, {
      key: "content",
      fn: function () {
        return [_c("ul", {
          staticClass: "selectors"
        }, [_c("li", [_c("div", {
          staticClass: "send_fees"
        }, [_c("span", {
          staticClass: "selectors-asset"
        }, [_vm._v(_vm._s(_vm.assetChain))]), _vm.customFee ? _c("div", {
          staticClass: "custom-fees"
        }, [_vm.prettyFee.eq(0) ? _c("span", [_vm._v(_vm._s(_vm.currentChainAssetFee) + " " + _vm._s(_vm.currentChainUnit))]) : _c("span", [_vm._v(_vm._s(_vm.prettyFee) + " " + _vm._s(_vm.assetChain))]), _vm._v(" / " + _vm._s(_vm.totalFeeInFiat) + " USD "), _c("button", {
          staticClass: "btn btn-link",
          on: {
            click: _vm.resetCustomFee
          }
        }, [_vm._v(" " + _vm._s(_vm.$t("common.reset")) + " ")])]) : _c("FeeSelector", {
          attrs: {
            asset: _vm.asset,
            fees: _vm.assetFees,
            totalFees: _vm.sendFees,
            fiatRates: _vm.fiatRates
          },
          on: {
            "custom-selected": _vm.onCustomFeeSelected
          },
          model: {
            value: _vm.selectedFee,
            callback: function ($$v) {
              _vm.selectedFee = $$v;
            },
            expression: "selectedFee"
          }
        })], 1)])])];
      },
      proxy: true
    }], null, false, 1890325817)
  }) : _vm._e(), !_vm.isCustomFeeSupported ? [_c("div", {
    staticClass: "network-header-container"
  }, [_c("span", {
    staticClass: "details-title",
    attrs: {
      id: "send_network_speed"
    }
  }, [_c("strong", [_vm._v(" " + _vm._s(_vm.$t("common.networkSpeedFee")))])]), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.updatingFees,
      expression: "!updatingFees"
    }],
    staticClass: "text-muted",
    attrs: {
      id: "send_network_speed_avg_fee"
    }
  }, [_vm._v(" (" + _vm._s(_vm.prettyFee) + " " + _vm._s(_vm.assetChain) + ") ")])]), _c("SpinnerIcon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.updatingFees,
      expression: "updatingFees"
    }],
    staticClass: "updating-fees"
  })] : _vm._e(), _c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    on: {
      click: function ($event) {
        return _vm.back();
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: !_vm.canSend || _vm.updatingFees
    },
    on: {
      click: function ($event) {
        return _vm.next("review");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.review")) + " ")])])], 2)])] : _vm.activeView === "custom-fees" && !_vm.isEIP1559Fees ? [_c("NavBar", {
    attrs: {
      showBackButton: true,
      backClick: _vm.activeView = "selectedAsset",
      backLabel: _vm.$t("common.back")
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c("CustomFees", {
    attrs: {
      asset: _vm.assetChain,
      "selected-fee": _vm.selectedFee,
      fees: _vm.assetFees,
      totalFees: _vm.sendFees,
      fiatRates: _vm.fiatRates
    },
    on: {
      apply: _vm.applyCustomFee,
      update: _vm.setCustomFee,
      cancel: _vm.cancelCustomFee
    }
  })] : _vm.activeView === "custom-fees" && _vm.isEIP1559Fees ? [_c("NavBar", {
    attrs: {
      showBackButton: true,
      backClick: _vm.cancelCustomFee,
      backLabel: _vm.$t("common.back")
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c("CustomFeesEIP1559", {
    attrs: {
      asset: _vm.assetChain,
      "selected-fee": _vm.selectedFee,
      fees: _vm.assetFees,
      totalFees: _vm.sendFees,
      fiatRates: _vm.fiatRates,
      padLabels: true
    },
    on: {
      apply: _vm.applyCustomFee,
      update: _vm.setCustomFee,
      cancel: _vm.cancelCustomFee
    }
  })] : _vm.activeView === "review" ? [_c("NavBar", {
    attrs: {
      showBackButton: true,
      backClick: _vm.back,
      backLabel: _vm.$t("common.back")
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(_vm._s(_vm.title))])]), _c("div", {
    staticClass: "selected-nft-asset mx-3 mt-4 h-100"
  }, [_c("div", {
    staticClass: "d-flex flex-column justify-content-between h-100"
  }, [_c("div", [_c("h3", {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("common.selectedAsset")))]), _c("div", {
    staticClass: "selected-nft-asset__image"
  }, [_c("div", {
    staticClass: "nft-image mr-2",
    staticStyle: {
      "--img-width": "110px"
    }
  }, [_c("img", {
    ref: "selectedNFT",
    attrs: {
      src: _vm.selectedNFT.image_thumbnail_url || _vm.thumbnailImage,
      alt: "selected-nft"
    },
    on: {
      error: function ($event) {
        return _vm.imageError("selectedNFT");
      }
    }
  })]), _c("div", [_c("h3", [_vm._v(_vm._s(_vm.selectedNFT.name))]), _c("p", [_vm._v(_vm._s(_vm.selectedNFT.collection.name))])])]), _c("div", {
    staticClass: "selected-nft-asset__send-details"
  }, [_c("h3", {
    staticClass: "text-uppercase"
  }, [_vm._v(_vm._s(_vm.$t("common.networkSpeedFee")))]), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("p", [_vm._v(_vm._s(_vm.prettyFee) + " " + _vm._s(_vm.asset))]), _c("p", [_vm._v(_vm._s(_vm.totalFeeInFiat) + " USD")])]), _c("div", {
    staticClass: "form-group mt-4"
  }, [_c("h3", {
    staticClass: "text-uppercase text-muted",
    attrs: {
      for: "address"
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.send.sendTo")) + " ")]), _c("p", {
    staticClass: "address"
  }, [_c("span", {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.startAddress))]), _vm._v(_vm._s(_vm.middleAddressPart)), _c("span", {
    staticClass: "font-bold"
  }, [_vm._v(_vm._s(_vm.endAddress))])])])])]), _c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    on: {
      click: function ($event) {
        return _vm.next("selectedAsset");
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.edit")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: _vm.loading
    },
    on: {
      click: _vm.sendNFT
    }
  }, [_vm.loading ? _c("SpinnerIcon", {
    staticClass: "btn-loading"
  }) : [_vm._v(_vm._s(_vm.$t("common.sendNFT")))]], 2)])])])] : _vm._e(), _c("OperationErrorModal", {
    attrs: {
      open: _vm.sendErrorModalOpen,
      account: _vm.account,
      liqualityErrorString: _vm.sendErrorMessage
    },
    on: {
      close: _vm.closeSendErrorModal
    }
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.accordion {\n  margin: 16px 0;\n}\n.accordion-header {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.accordion-header h3 {\n  font-size: initial;\n  margin-bottom: 0;\n}\n.accordion-header svg {\n  width: 10px;\n  height: 10px;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.accordion-body {\n  overflow: hidden;\n  border-top: 0;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  transition: 150ms ease-out;\n  padding-top: 1rem;\n}\n.accordion-body p {\n  text-align: justify;\n}\n.accordion-body-inner {\n  padding: 0;\n  overflow-wrap: break-word;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-e66eebda] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-e66eebda] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-e66eebda] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-e66eebda] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-e66eebda] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-e66eebda] {\n  text-align: left !important;\n}\n.text-right[data-v-e66eebda] {\n  text-align: right !important;\n}\n.text-center[data-v-e66eebda] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-e66eebda] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-e66eebda] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-e66eebda] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-e66eebda] {\n    text-align: left !important;\n}\n.text-md-right[data-v-e66eebda] {\n    text-align: right !important;\n}\n.text-md-center[data-v-e66eebda] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-e66eebda] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-e66eebda] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-e66eebda] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-e66eebda] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-e66eebda] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-e66eebda] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-e66eebda] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-e66eebda] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-e66eebda] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-e66eebda] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-e66eebda] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-e66eebda] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-e66eebda] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-e66eebda] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-e66eebda] {\n  font-style: italic !important;\n}\n.text-white[data-v-e66eebda] {\n  color: #fff !important;\n}\n.text-primary[data-v-e66eebda] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-e66eebda]:hover, a.text-primary[data-v-e66eebda]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-e66eebda] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-e66eebda]:hover, a.text-secondary[data-v-e66eebda]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-e66eebda] {\n  color: #28a745 !important;\n}\na.text-success[data-v-e66eebda]:hover, a.text-success[data-v-e66eebda]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-e66eebda] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-e66eebda]:hover, a.text-info[data-v-e66eebda]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-e66eebda] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-e66eebda]:hover, a.text-warning[data-v-e66eebda]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-e66eebda] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-e66eebda]:hover, a.text-danger[data-v-e66eebda]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-e66eebda] {\n  color: #f8faff !important;\n}\na.text-light[data-v-e66eebda]:hover, a.text-light[data-v-e66eebda]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-e66eebda] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-e66eebda]:hover, a.text-dark[data-v-e66eebda]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-e66eebda] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-e66eebda] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-e66eebda] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-e66eebda] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-e66eebda] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-e66eebda] {\n  text-decoration: none !important;\n}\n.text-break[data-v-e66eebda] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-e66eebda] {\n  color: inherit !important;\n}\n.copy-container[data-v-e66eebda] {\n  text-align: right;\n  margin-left: auto;\n}\n.copy-btn[data-v-e66eebda] {\n  display: flex;\n  align-items: center;\n  color: #9d4dfa;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.copy-btn .icon[data-v-e66eebda] {\n  width: 10px;\n  height: 10px;\n  font-size: 10px;\n  line-height: 12px;\n  margin-right: 5px;\n}", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.details-container {\n  text-align: left;\n  margin-bottom: 25px;\n}\n.details-container .details-header {\n  cursor: pointer;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  font-size: 0.75rem;\n  line-height: 0.75rem;\n}\n.details-container .details-header svg {\n  height: 5px;\n  margin-right: 10px;\n  margin-top: 2px;\n}\n.details-container .details-header svg.right {\n  transform: rotate(-90deg);\n}\n.details-container .details-header .details-title {\n  font-weight: 600;\n  text-transform: uppercase;\n  padding-right: 0.5em;\n}\n.details-container .details-content {\n  padding: 0;\n  font-size: 0.75rem;\n}\n.details-container .details-content ul {\n  list-style-type: none;\n  background: #ffffff;\n  border: none;\n  padding: 0;\n}\n.details-container .details-content ul li {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border: none;\n  padding-left: 20px;\n}\n.details-container .details-content ul li label {\n  float: left;\n}\n.details-container .details-content ul.selectors li {\n  padding-top: 10px;\n}\n.details-container .details-content ul.items li {\n  padding-top: 5px;\n}", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n}\n.ok-button {\n  flex-basis: 50%;\n  max-width: 20% !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace[data-v-82383fb2] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[data-v-82383fb2] {\n  text-align: justify !important;\n}\n.text-wrap[data-v-82383fb2] {\n  white-space: normal !important;\n}\n.text-nowrap[data-v-82383fb2] {\n  white-space: nowrap !important;\n}\n.text-truncate[data-v-82383fb2] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[data-v-82383fb2] {\n  text-align: left !important;\n}\n.text-right[data-v-82383fb2] {\n  text-align: right !important;\n}\n.text-center[data-v-82383fb2] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left[data-v-82383fb2] {\n    text-align: left !important;\n}\n.text-sm-right[data-v-82383fb2] {\n    text-align: right !important;\n}\n.text-sm-center[data-v-82383fb2] {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left[data-v-82383fb2] {\n    text-align: left !important;\n}\n.text-md-right[data-v-82383fb2] {\n    text-align: right !important;\n}\n.text-md-center[data-v-82383fb2] {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left[data-v-82383fb2] {\n    text-align: left !important;\n}\n.text-lg-right[data-v-82383fb2] {\n    text-align: right !important;\n}\n.text-lg-center[data-v-82383fb2] {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left[data-v-82383fb2] {\n    text-align: left !important;\n}\n.text-xl-right[data-v-82383fb2] {\n    text-align: right !important;\n}\n.text-xl-center[data-v-82383fb2] {\n    text-align: center !important;\n}\n}\n.text-lowercase[data-v-82383fb2] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[data-v-82383fb2] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[data-v-82383fb2] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[data-v-82383fb2] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[data-v-82383fb2] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[data-v-82383fb2] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[data-v-82383fb2] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[data-v-82383fb2] {\n  font-weight: bolder !important;\n}\n.font-italic[data-v-82383fb2] {\n  font-style: italic !important;\n}\n.text-white[data-v-82383fb2] {\n  color: #fff !important;\n}\n.text-primary[data-v-82383fb2] {\n  color: #9d4dfa !important;\n}\na.text-primary[data-v-82383fb2]:hover, a.text-primary[data-v-82383fb2]:focus {\n  color: #7407f4 !important;\n}\n.text-secondary[data-v-82383fb2] {\n  color: #2cd2cf !important;\n}\na.text-secondary[data-v-82383fb2]:hover, a.text-secondary[data-v-82383fb2]:focus {\n  color: #1f9391 !important;\n}\n.text-success[data-v-82383fb2] {\n  color: #28a745 !important;\n}\na.text-success[data-v-82383fb2]:hover, a.text-success[data-v-82383fb2]:focus {\n  color: #19692c !important;\n}\n.text-info[data-v-82383fb2] {\n  color: #17a2b8 !important;\n}\na.text-info[data-v-82383fb2]:hover, a.text-info[data-v-82383fb2]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[data-v-82383fb2] {\n  color: #ffc107 !important;\n}\na.text-warning[data-v-82383fb2]:hover, a.text-warning[data-v-82383fb2]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[data-v-82383fb2] {\n  color: #f12274 !important;\n}\na.text-danger[data-v-82383fb2]:hover, a.text-danger[data-v-82383fb2]:focus {\n  color: #bb0c51 !important;\n}\n.text-light[data-v-82383fb2] {\n  color: #f8faff !important;\n}\na.text-light[data-v-82383fb2]:hover, a.text-light[data-v-82383fb2]:focus {\n  color: #acc3ff !important;\n}\n.text-dark[data-v-82383fb2] {\n  color: #f0f7f9 !important;\n}\na.text-dark[data-v-82383fb2]:hover, a.text-dark[data-v-82383fb2]:focus {\n  color: #b9dae3 !important;\n}\n.text-body[data-v-82383fb2] {\n  color: #1d1e21 !important;\n}\n.text-muted[data-v-82383fb2] {\n  color: #747e8d !important;\n}\n.text-black-50[data-v-82383fb2] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[data-v-82383fb2] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[data-v-82383fb2] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[data-v-82383fb2] {\n  text-decoration: none !important;\n}\n.text-break[data-v-82383fb2] {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset[data-v-82383fb2] {\n  color: inherit !important;\n}\n.account-container .account-content-top[data-v-82383fb2] {\n  height: 220px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px 0;\n  background: linear-gradient(to left, black, #434343);\n  color: #ffffff;\n  text-align: center;\n  position: relative;\n}\n.account-container .account-content button[data-v-82383fb2]:disabled {\n  opacity: 0.5;\n  cursor: auto;\n}\n.nft-assets__container__images[data-v-82383fb2] {\n  padding: 0 10px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 5px;\n  overflow-y: auto;\n}\n.nft-image[data-v-82383fb2] {\n  min-width: var(--img-width);\n}\n.nft-image svg[data-v-82383fb2] {\n  position: absolute;\n  top: 4px;\n  left: 4px;\n}\n.nft-image img[data-v-82383fb2] {\n  width: 100%;\n  height: 100%;\n}\n.selected-nft-asset h3[data-v-82383fb2] {\n  font-size: 12px;\n}\n.selected-nft-asset__send-details[data-v-82383fb2] {\n  margin-top: 23px;\n}\n.selected-nft-asset__image[data-v-82383fb2] {\n  display: flex;\n  align-items: center;\n}\n.selected-nft-asset__image h3[data-v-82383fb2] {\n  font-size: 20px;\n}\n.selected-nft-asset__image p[data-v-82383fb2] {\n  font-size: 16px;\n}\n.selected-nft-asset__image h3[data-v-82383fb2],\n.selected-nft-asset__image p[data-v-82383fb2] {\n  margin: 0;\n}\n.selected-nft-asset .input-group[data-v-82383fb2] {\n  border-bottom: 1px solid #2cd2cf;\n}\n.button-group[data-v-82383fb2] {\n  padding: 16px 0;\n}\n.updating-fees[data-v-82383fb2] {\n  height: 24px !important;\n  margin-top: -6px !important;\n}\n.updating-fees circle[data-v-82383fb2] {\n  stroke: #dedede;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("64a0889b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("72015bd2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

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

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7dcf16a4", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3545b54d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2d7618fe", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icons/angle_down.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/angle_down.svg ***!
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
        "viewBox": "0 0 11 5",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M5.468 4.999a.582.582 0 01-.355-.143L.683.944a.53.53 0 01-.169-.52.555.555 0 01.387-.4.588.588 0 01.555.121L5.5 3.715 9.544.145a.588.588 0 01.555-.12c.194.057.341.209.387.398a.53.53 0 01-.168.52L5.887 4.857A.584.584 0 015.468 5z",
        "fill": "#3D4767"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/angle_right.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/angle_right.svg ***!
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
        "viewBox": "0 0 5 11",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M4.999 5.532a.582.582 0 01-.143.355l-3.912 4.43a.53.53 0 01-.52.169.555.555 0 01-.4-.387.588.588 0 01.121-.555L3.715 5.5.145 1.456a.588.588 0 01-.12-.555.555.555 0 01.398-.387.53.53 0 01.52.168l3.913 4.431c.1.114.152.265.143.419z",
        "fill": "#3D4767"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/check-primary.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/check-primary.svg ***!
  \********************************************/
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
        "d": "M4.19 8.206l6.302-7.108a.277.277 0 01.419-.005.351.351 0 01.005.463L4.402 8.902a.277.277 0 01-.424 0L1.084 5.637a.351.351 0 01.005-.463.277.277 0 01.42.006L4.19 8.206z",
        "stroke": "#9D4DFA"
      }
    })]));
  }
};

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

/***/ "./src/assets/icons/ledger_icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/ledger_icon.svg ***!
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
        "viewBox": "0 0 179 26",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "stroke": "#000D35",
        "d": "M62.5.5h95v25h-95zM157.5 7.5h8.5a5.5 5.5 0 110 11h-8.5v-11z"
      }
    }), _c('path', {
      attrs: {
        "fill": "#000D35",
        "d": "M172 13h7v1h-7z"
      }
    }), _c('path', {
      attrs: {
        "d": "M.5.5H90c6.904 0 12.5 5.596 12.5 12.5S96.904 25.5 90 25.5H.5V.5z",
        "fill": "#F0F7F9",
        "stroke": "#000D35"
      }
    }), _c('path', {
      attrs: {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M11.457 15.914H14.2V19h-2.743v-3.085zM17.097 7h-5.564v7.121H19V8.853c.003-1-.855-1.853-1.903-1.853zM7 15.969v.855c0 .96.712 1.782 1.622 1.782H9.4V15.97H7zM9.4 7h-.778C7.748 7 7 7.783 7 8.782v.855h2.4V7zM7 11.484h2.4v2.638H7v-2.638zM15.803 18.606h.778c.874 0 1.622-.783 1.622-1.784v-.853h-2.4v2.637z",
        "fill": "#000D35"
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

/***/ "./src/assets/nft_thumbnail.png":
/*!**************************************!*\
  !*** ./src/assets/nft_thumbnail.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx7SURBVHgB7d1vehvVFcfxMyPJdlp4EqChIX/AaoEmfUN2gFlCV9B2BQkraLKChhU0O+gScHcQ3pQSeCqHNMElEJyHQBxJM7dzRprUSfR3fEeac+f7AT+KJcfRo9Fvzrl37mgiKenL3t2dRFqXI5EPRdzl7K5T4y/AioPsa08kyr6Sz2KR3fe6F3alhGiZH+71eqeGsnUllfSqEBqEaS8LxW4i8fVL3bf2Fv1LCwVJAzSQzb84cVcFaIgsHDcXDdTcIN2+s3/Fpck1oQKhmbIK5a6/3z1/c9YPzQzS7d79v1KFAA1KdOP97tmPpz8+wbiV+3sWoh0BULi1If2Put3uwYsPxJN++qnr7BIi4CWXtcBMeuClIGk7F0XRBwLgJVpgNCMv3v9ca3e7958/OYn+JgBmynLy8cXu2RvF98+C9Hnvm+1Y0k+zP24LgHkOsvFStxgvPWvtYpdPcW8LgEXkx1aLb/KKNK5GPQGwlKwqvaZVKa9I42oEYEn9tJ0fZx21dlH0oQBYXhxf0ZtIV3GnEn8qAEpJJf0oTkV2BEBpkUSX42xC/LIAOIZoJ46i+B0BUFo29f1B7Dh2BBzXKZ214zwj4HhOxQLg2AgS4AFBAjwgSIAHBAnwgCABHhAkwAOCBHhAkAAPCBLgAUECPCBIgAcECfCAIAEeECTAA4IEeECQAA8IEuABQQI8IEiABwQJ8IAgAR60BWvhXCpp6rJbl9/qNeBSN/o+fzx1E/9eFI+uDRdF0egr+y+O9SvOvtf72TeuA0FagVFYUkmSLDxZgFz6/8As/bvGAct+w8TH83BpsLJAtVrxOGCRoFoEqSJpmshwmIUnu51WXaqgAXWJ0yskZP/+6D4NVituSbvdyoMF/wiSR8/CkySlK04VNMjDdJg9t2FenbRStdttQuURQTomDYy+QYfJaitPWaPnm+RfGqpOp50Fq0X7d0wEqaS6Vp9l6PPu9wfZnwZ529fpdAhUSQRpSRqg/mAoaTZxEJKiShGocgjSgnTv/bTfDy5ALyJQ5RCkOTRAg8FooN4kBGo5BGkGHf/oGMLqGMgHDZMe/9JJCZ3pw2S8MhM0pY1bVDEpoQeVqU6TEaQXaAunrVyTq9A0VKfpeDXGmjoWWlZRnfRWw0R1GuHQtoxbuad9QrQE3ekcHj6lco81Pkh6XEjfENr/YzkaIl67kUYHSSvQ4WGfveoxFGEaDAbSZI0dI+mG1/YEfhSvpc7qNVEjKxIhqoa+pk2tTI0LEiGqVlPD1KggEaLVaGKYGhMkQrRaTQtTI4JEiNajSQe4gw+SHiciROtTrNELXdBBGi1nIUTrpqtGQj9WF2yQimU/HHVfv+KgbchhCjZI2s4RovooPiQmVEEGSU/IYwFq/YQ8+RBckIrTIVBPoZ7rFVyQaOnqbTQB1JfQBBUkWjob9Czb0LZTMEGipbMltBYvmCDR0tkS2ixeEEEKfWo1VCFVpSCCREtnVygTD+aDRDWyLb/4WgAtufkgUY3sC+F0C9NBohqFIYSqZDpIVKNwWN8hmg0S1SgsWpUsz+CZDRLHjMJifcdoNki0deHRD+m3ymSQ9PRxKlJ4tCpZ3a4mg6QXQUaYrLZ3RisSQQpVYvTibuaCRFsXNqvtnbkg0daFz2J7Z7AiEaTQpam940mmLuviu+yffuOknH791Ev365m2vbv70i85xf77996ZeH9/MJCv9u5PfOzcmTfk5KuviE8PHh7Ig+8fPXffK7/YkrfP/Vqq9NXevdKvndJtrNva0mU1TQXJdzVqxbFsdCa8BNl9726fky/+fbfU4Hfi7yz7XI5Bf+ckvv+dKmhVarXsBMlUa7fKGR19s505/bpgPZLE1jjJVJBSt9rx0enXT+ZfWD1r6+5MBcmtYRCqVenE1qZgtaxNOJgJUjEAXbVWK5buhTP5LVZHt7WlqmRosmF9L6qOl94++2Y+k7cO9/77nTx5svxnG/QnnHn6+OdD+eeXd2b+PZ3J1BnNic9l/3t59ONjmf3v+hnfWJpwMBOkdZf6k6/+Mh8vPXj4SFZNQ/T45yfiy7w3epImMx/rr2jlvcvHxDY6AUOt3frL/Lkzv8qOw5wQrIalg+9mglSXfvntc28yXsJL7ARJ6hEkHS/p5AOqlxqabLCza13xa5rMaCu0vTtz+jVBtZyhKXBTS4RW6d7+d/mYaNoyGz2+9PinQ6+TANNsbLRlY7D8pupzOv7KGJq1W+3AUy/i3Pt6X97dPjv1Z7TF0/V4Vb9hdep9Wfqc5k1z152l40iMmmfQajNrulsnHXTyASBIc2iLN6t90/GStoBoNoK0gK/vfTuzfdMDtXrAFs1FkBagIdIwzaLjGAvn+aAabPkFaXu3/+CHqdPexeLWr+7cF9/KTGb0A7jCgyVmghRn09DrXjKy/+ChvPLLranLhPR0iypOBtRquIpp9rqxdKo5rd2S5n2WAycC+kOQqlCT11RPd583XoIndnJkJ0hxjfZO2mbpeTmoVp22+TyGWrt6vaj6UVePfvxJAGWnIsX12zt9ff9b1rNVKI7t7OfNPNM6Djx1vKSTDwmf/loJglSBur6oTw6fyv63Pwj8MzREslWR6jodquOlh49+FPgz2t5UpErUcZxU0MWtjJf8iWq8rScxFaQ676F0vKQfHs94yQ9LU9/K1Fo7Xc/m89I5+ub3WUX0d+l4adpnws1a/+b7uRzHrOeiV+pYhVbL1jLQ6IvePTOnIeoZk0+eHArCd+LEFkuEqqIvrKUpUZSj29hSiJS5dyVBCl+dJ5WmMfeubLdbgrC12/ZOkzNZkayVfSzOavtusk9qtahKobL6cdAmnzXtXbgstnXKZJC09DPpEB7Ls7Jm341cESI8nU5HrDL7btQWgEmHsFjeOZp95hoiJh3CoeNeyztG0/0Rkw7hsNzWKdNB0oEpYyX7rFcjZf5daH1PhjC2ofkgUZVsC6EaqSDegRsbGwKbQukoggiS7tGsHhFvslCqkQqmJ+p0OK5kiW6rkMa3wQRJN8zGBhMPVmiIQtrxBTVK1wO0TDzUn7Z0oR0DDO5dpxMPtHj1FVpLVwguSLR49RZaS1cIsg/SFo9ZvPrRbRLqsq5gBxQ6i8c5S/UxaunC3bkF+07TDbe5yXipDnQbbG1tBr0tgt5lF2HCejVhhxZ876PtHZMP66OTC01osRsxiNBBLqvEV09f85DHRUc1ZjSuG5QwrU6TQqQaNa1FmFajaSFSjZsfJkzVamKIVCMPtBCmajQ1RKqxh/+LDT6YcfEvLE5nRpu8mqTR62g0TLpavN8fSMolK0spjtU1fRVJ49fQ6BuAN0I5xYoFXjuClCv2qix0XZy+VqEv+1kG75yx4vQLbfUGgyGt3hTF+UR8OOfzCNIL9BQMbVU0TMNhPa4yXhdxtpPZ5MTJiQjSBFSn51GF5iNIM1CdinWKfELTPARpjqI66ZupSYGijVsOQVpQUwKlAdpoyKkPPhGkJYUYqNG1puK8jSNA5RCkko4GSicjLE5KRHEk7VY7qI8OXheCdEzFlQP1S4M0HCb5bV1DVTxfDQ/Vxx+C5NHotPbRm7NOoSquAk94qkOQKnI0VM65PExJkoXKpeJSl99XBa042rLF0ei6Ufo8aNuqR5BW4Gj7V9AgjQI2CpmTcbjy/10etom/K46e/c44D0g0DosQmjUiSGuSVw4NQ160WDFgHQ0z4AFBAjwgSIAHBAnwgCABHhAkwAOCBHhAkAAPCBLgAUECPCBIgAcECfCAIAEeECTAA4IEeECQAA8IEuABQQI8IEiABwQJ8IAgAR4QJMADDdKBADiOA4IEHN9eLC79TACU5kTuxC6KdgVAaZGkt2In7pYAKC0V2c0/cf2L3r0fsptTAmBZe7/rnuuOp7/TTwTA0qJIdvU2D9KGDG8IgKUlLr6ut3mQut3ugaMqAUvJqtHNS9239vTPz1Y2bMrwmnBMCVjUXlGN1LMgjaqSuy4A5kqzrBTVSD231u5i9/wNWjxgNpemn1zqnr959L6JFxy9vXf/U+fcjgB4TpaLzy7+5vzlF++fuPq7457+IUsYB2qBIyJxu5vRYGfyYzP8q3f3RiTxFQEaTtu5i7+9cHXa4zPPR7rYvXA1G1T9OfvjngDNpJNwH88KkZpZkQqf977Zjl1yLZs4/6MADaFVaDMeXtMZ7Xk/u1CQCkcC9WH27bYA4TlIs5nrLRneWCRAhaWCdNTnvbs7WV+4I1H8QeRk242CxcJXWHKQf0Vyy7noH06SW5e6F3alhP8BoAg/g4J+plkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/Accordion.vue":
/*!**************************************!*\
  !*** ./src/components/Accordion.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion.vue?vue&type=template&id=834c4d70& */ "./src/components/Accordion.vue?vue&type=template&id=834c4d70&");
/* harmony import */ var _Accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion.vue?vue&type=script&lang=js& */ "./src/components/Accordion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& */ "./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Accordion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Accordion.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Accordion.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Accordion.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&":
/*!************************************************************************************!*\
  !*** ./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=style&index=0&id=834c4d70&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_834c4d70_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/Accordion.vue?vue&type=template&id=834c4d70&":
/*!*********************************************************************!*\
  !*** ./src/components/Accordion.vue?vue&type=template&id=834c4d70& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Accordion.vue?vue&type=template&id=834c4d70& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/Accordion.vue?vue&type=template&id=834c4d70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_template_id_834c4d70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/CopyError.vue":
/*!**************************************!*\
  !*** ./src/components/CopyError.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CopyError.vue?vue&type=template&id=e66eebda&scoped=true& */ "./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true&");
/* harmony import */ var _CopyError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyError.vue?vue&type=script&lang=js& */ "./src/components/CopyError.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& */ "./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CopyError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e66eebda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/CopyError.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/CopyError.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/CopyError.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CopyError.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=style&index=0&id=e66eebda&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_style_index_0_id_e66eebda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./CopyError.vue?vue&type=template&id=e66eebda&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/CopyError.vue?vue&type=template&id=e66eebda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyError_vue_vue_type_template_id_e66eebda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/components/DetailsContainer.vue":
/*!*********************************************!*\
  !*** ./src/components/DetailsContainer.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailsContainer.vue?vue&type=template&id=a500b5e2& */ "./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2&");
/* harmony import */ var _DetailsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailsContainer.vue?vue&type=script&lang=js& */ "./src/components/DetailsContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& */ "./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DetailsContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/DetailsContainer.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/DetailsContainer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./DetailsContainer.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=style&index=0&id=a500b5e2&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_style_index_0_id_a500b5e2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2&":
/*!****************************************************************************!*\
  !*** ./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./DetailsContainer.vue?vue&type=template&id=a500b5e2& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/DetailsContainer.vue?vue&type=template&id=a500b5e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailsContainer_vue_vue_type_template_id_a500b5e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/components/OperationErrorModal.vue":
/*!************************************************!*\
  !*** ./src/components/OperationErrorModal.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationErrorModal.vue?vue&type=template&id=7f7bea4c& */ "./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c&");
/* harmony import */ var _OperationErrorModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperationErrorModal.vue?vue&type=script&lang=js& */ "./src/components/OperationErrorModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& */ "./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OperationErrorModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/OperationErrorModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/OperationErrorModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/OperationErrorModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./OperationErrorModal.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=style&index=0&id=7f7bea4c&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_style_index_0_id_7f7bea4c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c&":
/*!*******************************************************************************!*\
  !*** ./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./OperationErrorModal.vue?vue&type=template&id=7f7bea4c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/components/OperationErrorModal.vue?vue&type=template&id=7f7bea4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_OperationErrorModal_vue_vue_type_template_id_7f7bea4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Send/SendNFT.vue":
/*!************************************!*\
  !*** ./src/views/Send/SendNFT.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendNFT.vue?vue&type=template&id=82383fb2&scoped=true& */ "./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true&");
/* harmony import */ var _SendNFT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendNFT.vue?vue&type=script&lang=js& */ "./src/views/Send/SendNFT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& */ "./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SendNFT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82383fb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Send/SendNFT.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Send/SendNFT.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/Send/SendNFT.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./SendNFT.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=style&index=0&id=82383fb2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_style_index_0_id_82383fb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./SendNFT.vue?vue&type=template&id=82383fb2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Send/SendNFT.vue?vue&type=template&id=82383fb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_SendNFT_vue_vue_type_template_id_82383fb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=17.js.map