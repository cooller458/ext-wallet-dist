(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@liquality/wallet-core/dist/src/utils/history.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@liquality/wallet-core/dist/src/utils/history.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyActivityFilters = exports.SEND_STATUS_FILTER_MAP = exports.ACTIVITY_STATUSES = exports.ACTIVITY_FILTER_TYPES = exports.getStep = exports.getStatusLabel = exports.SEND_STATUS_LABEL_MAP = exports.SEND_STATUS_STEP_MAP = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const moment_1 = tslib_1.__importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
const error_parser_1 = __webpack_require__(/*! @liquality/error-parser */ "./node_modules/@liquality/error-parser/dist/src/index.js");
const swap_1 = __webpack_require__(/*! ../factory/swap */ "./node_modules/@liquality/wallet-core/dist/src/factory/swap/index.js");
const types_1 = __webpack_require__(/*! ../store/types */ "./node_modules/@liquality/wallet-core/dist/src/store/types.js");
exports.SEND_STATUS_STEP_MAP = {
    [types_1.SendStatus.WAITING_FOR_CONFIRMATIONS]: 0,
    [types_1.SendStatus.SUCCESS]: 1,
    [types_1.SendStatus.FAILED]: 2,
};
exports.SEND_STATUS_LABEL_MAP = {
    [types_1.SendStatus.WAITING_FOR_CONFIRMATIONS]: 'Pending',
    [types_1.SendStatus.SUCCESS]: 'Completed',
    [types_1.SendStatus.FAILED]: 'Failed',
};
function getStatusLabel(item) {
    if (item.type === types_1.TransactionType.NFT) {
        return exports.SEND_STATUS_LABEL_MAP[item.status] || '';
    }
    if (item.type === types_1.TransactionType.Send) {
        return exports.SEND_STATUS_LABEL_MAP[item.status] || '';
    }
    if (item.type === types_1.TransactionType.Swap) {
        const swapProvider = (0, swap_1.getSwapProvider)(item.network, item.provider);
        return (swapProvider.statuses[item.status].label
            .replace('{from}', item.from)
            .replace('{to}', item.to)
            .replace('{bridgeAsset}', item.bridgeAsset || '') || '');
    }
}
exports.getStatusLabel = getStatusLabel;
function getStep(item) {
    const itemType = item.type;
    if (itemType === types_1.TransactionType.NFT) {
        return exports.SEND_STATUS_STEP_MAP[item.status];
    }
    if (itemType === types_1.TransactionType.Send) {
        return exports.SEND_STATUS_STEP_MAP[item.status];
    }
    if (itemType === types_1.TransactionType.Swap) {
        const swapProvider = (0, swap_1.getSwapProvider)(item.network, item.provider);
        return swapProvider.statuses[item.status].step;
    }
    throw (0, error_parser_1.createInternalError)(error_parser_1.CUSTOM_ERRORS.Invalid.TransactionType(itemType));
}
exports.getStep = getStep;
exports.ACTIVITY_FILTER_TYPES = {
    SWAP: {
        label: 'Swap',
        icon: 'swap',
    },
    NFT: {
        label: 'NFT',
        icon: 'nft',
    },
    SEND: {
        label: 'Send',
        icon: 'send',
    },
    RECEIVE: {
        label: 'Receive',
        icon: 'receive',
    },
};
exports.ACTIVITY_STATUSES = {
    PENDING: {
        label: 'Pending',
        icon: 'pending',
    },
    COMPLETED: {
        label: 'Completed',
        icon: 'completed',
    },
    FAILED: {
        label: 'Failed',
        icon: 'failed',
    },
    NEEDS_ATTENTION: {
        label: 'Needs Attention',
        icon: 'needs_attention',
    },
    REFUNDED: {
        label: 'Refunded',
        icon: 'refunded',
    },
};
exports.SEND_STATUS_FILTER_MAP = {
    WAITING_FOR_CONFIRMATIONS: 'PENDING',
    SUCCESS: 'COMPLETED',
    FAILED: 'FAILED',
};
const applyActivityFilters = (activity, filters) => {
    const { types, statuses, dates } = filters;
    let filteredByType = [...activity];
    if (types.length > 0) {
        filteredByType = [...filteredByType].filter((i) => types.includes(i.type));
    }
    let fiteredByStatus = [...filteredByType];
    if (statuses.length > 0) {
        fiteredByStatus = [...fiteredByStatus].filter((i) => {
            if (i.type === 'SWAP') {
                const swapProvider = (0, swap_1.getSwapProvider)(i.network, i.provider);
                return statuses.includes(swapProvider.statuses[i.status].filterStatus);
            }
            if (i.type === 'SEND') {
                return statuses.includes(exports.SEND_STATUS_FILTER_MAP[i.status]);
            }
            return true;
        });
    }
    let filteredByStartDate = [...fiteredByStatus];
    if (dates.start) {
        const startDateFilter = (0, moment_1.default)(dates.start);
        filteredByStartDate = [...filteredByStartDate].filter((i) => {
            const start = (0, moment_1.default)(i.startTime);
            const diffInDays = start.diff(startDateFilter, 'days');
            return diffInDays >= 0;
        });
    }
    let filteredByEndDate = [...filteredByStartDate];
    if (dates.end) {
        const endDateFilter = (0, moment_1.default)(dates.end);
        filteredByEndDate = [...filteredByEndDate].filter((i) => {
            const end = (0, moment_1.default)(i.startTime);
            const diffInDays = end.diff(endDateFilter, 'days');
            return diffInDays <= 0;
        });
    }
    return filteredByEndDate;
};
exports.applyActivityFilters = applyActivityFilters;
//# sourceMappingURL=history.js.map

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/history */ "./node_modules/@liquality/wallet-core/dist/src/utils/history.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_history__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ActivityFilter: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! @/components/ActivityFilter */ "./src/components/ActivityFilter.vue")),
    TransactionList: () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! @/components/TransactionList */ "./src/components/TransactionList.vue")),
    EmptyActivity: () => __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! @/components/EmptyActivity */ "./src/components/EmptyActivity.vue"))
  },
  data() {
    return {
      activityData: []
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['activity']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork'])
  },
  methods: {
    applyFilters(filters) {
      this.activityData = Object(_liquality_wallet_core_dist_src_utils_history__WEBPACK_IMPORTED_MODULE_1__["applyActivityFilters"])([...this.activity], filters);
    }
  },
  mounted() {
    this.activityData = [...this.activity];
  },
  watch: {
    activeNetwork() {
      this.activityData = [...this.assetHistory];
    },
    activity() {
      this.activityData = [...this.activity];
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358& ***!
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
    staticClass: "wallet-activity"
  }, [_vm.activity.length ? _c("ActivityFilter", {
    attrs: {
      "activity-data": _vm.activityData,
      showTypeFilters: true
    },
    on: {
      "filters-changed": _vm.applyFilters
    }
  }) : _vm._e(), _vm.activity.length ? _c("TransactionList", {
    attrs: {
      transactions: _vm.activityData
    }
  }) : _c("EmptyActivity", {
    attrs: {
      "active-network": _vm.activeNetwork
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/Wallet/WalletActivity.vue":
/*!*********************************************!*\
  !*** ./src/views/Wallet/WalletActivity.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletActivity.vue?vue&type=template&id=fe29d358& */ "./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358&");
/* harmony import */ var _WalletActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletActivity.vue?vue&type=script&lang=js& */ "./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WalletActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Wallet/WalletActivity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WalletActivity.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Wallet/WalletActivity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletActivity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358&":
/*!****************************************************************************!*\
  !*** ./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./WalletActivity.vue?vue&type=template&id=fe29d358& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Wallet/WalletActivity.vue?vue&type=template&id=fe29d358&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletActivity_vue_vue_type_template_id_fe29d358___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=52.js.map