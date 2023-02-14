(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/circle_progress_bar.svg */ "./src/assets/icons/circle_progress_bar.svg");
/* harmony import */ var _assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CircleProgressBar: (_assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    close() {
      chrome.tabs.getCurrent(tab => {
        if (tab !== undefined) {
          chrome.tabs.remove([tab.id]);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/spinner.svg */ "./src/assets/icons/spinner.svg");
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_chevron_right_gray_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/chevron_right_gray.svg */ "./src/assets/icons/chevron_right_gray.svg");
/* harmony import */ var _assets_icons_chevron_right_gray_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_chevron_right_gray_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/ledger_icon.svg */ "./src/assets/icons/ledger_icon.svg");
/* harmony import */ var _assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/ledger */ "./node_modules/@liquality/wallet-core/dist/src/utils/ledger.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _directives_clickAway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/directives/clickAway */ "./src/directives/clickAway.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/asset */ "./node_modules/@liquality/wallet-core/dist/src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    clickAway: _directives_clickAway__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  components: {
    SpinnerIcon: (_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0___default()),
    LedgerIcon: (_assets_icons_ledger_icon_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    ChevronRightIcon: (_assets_icons_chevron_right_gray_svg__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: ['selectedAsset', 'loading'],
  data() {
    return {
      assetsDropdownOpen: false
    };
  },
  methods: {
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_6__["getAssetIcon"],
    isChainEvmCompatible: _liquality_wallet_core_dist_src_utils_asset__WEBPACK_IMPORTED_MODULE_5__["isChainEvmCompatible"],
    connect() {
      if (this.selectedAsset) {
        this.$emit('on-connect', {
          asset: this.selectedAsset
        });
      }
    },
    cancel() {
      chrome.tabs.getCurrent(tab => {
        if (tab !== undefined) {
          chrome.tabs.remove([tab.id]);
        }
      });
    },
    selectAsset(asset) {
      this.$emit('on-select-asset', asset);
      this.hideAssetList();
    },
    toggleAssetList() {
      this.assetsDropdownOpen = !this.assetsDropdownOpen;
    },
    hideAssetList() {
      this.assetsDropdownOpen = false;
    }
  },
  computed: {
    assetList() {
      return _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_3__["LEDGER_OPTIONS"].filter(i => {
        var _this$selectedAsset;
        return i.name !== ((_this$selectedAsset = this.selectedAsset) === null || _this$selectedAsset === void 0 ? void 0 : _this$selectedAsset.name);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NavBar */ "./src/components/NavBar.vue");
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connect */ "./src/views/Accounts/HardwareWallet/Connect.vue");
/* harmony import */ var _Unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Unlock */ "./src/views/Accounts/HardwareWallet/Unlock.vue");
/* harmony import */ var _Completed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Completed */ "./src/views/Accounts/HardwareWallet/Completed.vue");
/* harmony import */ var _utils_hardware_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/hardware-wallet */ "./src/utils/hardware-wallet.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/ledger */ "./node_modules/@liquality/wallet-core/dist/src/utils/ledger.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_asset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/asset */ "./src/utils/asset.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/cryptoassets */ "./node_modules/@liquality/wallet-core/dist/src/utils/cryptoassets.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../package.json */ "./package.json", 1);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_accounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/accounts */ "./node_modules/@liquality/wallet-core/dist/src/utils/accounts.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_accounts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_accounts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @liquality/error-parser/dist/src/utils */ "./node_modules/@liquality/error-parser/dist/src/utils/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @liquality/error-parser/dist/src/reporters/index */ "./node_modules/@liquality/error-parser/dist/src/reporters/index.js");
/* harmony import */ var _liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_13__);














const LEDGER_PER_PAGE = 5;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Connect: _Connect__WEBPACK_IMPORTED_MODULE_2__["default"],
    Unlock: _Unlock__WEBPACK_IMPORTED_MODULE_3__["default"],
    Completed: _Completed__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mixins: [_utils_hardware_wallet__WEBPACK_IMPORTED_MODULE_5__["ledgerConnectMixin"]],
  data() {
    return {
      currentStep: 'connect',
      loading: false,
      creatingAccount: false,
      selectedAsset: null,
      accounts: [],
      selectedAccounts: {},
      ledgerError: null,
      ledgerPage: 0,
      selectedWalletType: null
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['activeNetwork', 'activeWalletId', 'enabledAssets']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['networkAccounts']),
    ledgerOptions() {
      return _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_6__["LEDGER_OPTIONS"].sort((a, b) => {
        if (a.chain === _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_11__["ChainId"].Bitcoin) {
          return -1;
        }
        if (b.chain === _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_11__["ChainId"].Bitcoin) {
          return 1;
        }
        return 0;
      });
    },
    bitcoinOptions() {
      return _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_6__["LEDGER_BITCOIN_OPTIONS"];
    }
  },
  methods: {
    getAssetIcon: _utils_asset__WEBPACK_IMPORTED_MODULE_7__["getAssetIcon"],
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('app', ['trackAnalytics']),
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['createAccount', 'getLedgerAccounts', 'updateAccountBalance']),
    async connect({
      asset,
      walletType,
      page
    }) {
      this.loading = true;
      // connect to ledger
      await this.trackAnalytics({
        event: 'Connect Ledger button clicked',
        properties: {
          category: 'Connect Ledger',
          asset: `${this.selectedAsset.name}`,
          chain: `${this.selectedAsset.chain}`
        }
      });
      this.selectedAsset = asset;
      this.ledgerError = null;
      this.accounts = [];
      try {
        if (asset) {
          await this.connectLedger();
          const accountType = walletType || asset.types[0];
          let currentPage = page || 0;
          if (currentPage <= 0) {
            currentPage = 1;
          }
          const startingIndex = (currentPage - 1) * LEDGER_PER_PAGE;
          const payload = {
            network: this.activeNetwork,
            walletId: this.activeWalletId,
            asset: asset.name,
            accountType,
            startingIndex,
            numAccounts: LEDGER_PER_PAGE
          };
          this.currentStep = 'unlock';
          const accounts = await this.getLedgerAccounts(payload);
          if (accounts && accounts.length > 0) {
            this.accounts = accounts;
            this.ledgerPage = currentPage;
            await this.trackAnalytics({
              event: 'Ledger connected successfully',
              properties: {
                category: 'Connect Ledger',
                asset: `${this.selectedAsset.name}`,
                chain: `${this.selectedAsset.chain}`,
                numberOfAccounts: accounts.length
              }
            });
          } else {
            this.ledgerConnected = false;
            this.ledgerError = {
              message: this.$t('pages.accounts.onAccountsFound')
            };
          }
        }
      } catch (error) {
        this.ledgerError = {
          message: this.$tle(Object(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_12__["errorToLiqualityErrorString"])(error))
        };
        this.ledgerConnected = false;
        Object(_liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_13__["reportLiqualityError"])(error);
        await this.trackAnalytics({
          event: 'HD Wallet Ledger error',
          properties: {
            category: 'Error getting accounts',
            asset: `${this.selectedAsset.name}`,
            chain: `${this.selectedAsset.chain}`,
            error: [error.name, error.message, error.stack]
          }
        });
      } finally {
        this.loading = false;
      }
    },
    async unlock({
      walletType
    }) {
      if (this.selectedAsset) {
        await this.addAccounts({
          walletType
        });
        await this.trackAnalytics({
          event: 'Ledger account added successfully',
          properties: {
            walletVersion: _package_json__WEBPACK_IMPORTED_MODULE_9__["version"],
            category: 'Hardware Wallet',
            action: 'Add Ledger Account',
            label: `Asset ${this.selectedAsset.name}`
          }
        });
      }
    },
    showTokenManagement({
      walletType
    }) {
      this.loading = false;
      this.currentStep = 'token-management';
      this.selectedWalletType = walletType;
    },
    async addAccounts({
      walletType
    }) {
      if (Object.keys(this.selectedAccounts).length > 0) {
        try {
          var _this$enabledAssets$t;
          this.creatingAccount = true;
          const {
            chain
          } = this.selectedAsset;
          const assetKeys = ((_this$enabledAssets$t = this.enabledAssets[this.activeNetwork]) === null || _this$enabledAssets$t === void 0 ? void 0 : _this$enabledAssets$t[this.activeWalletId]) || [];
          const assets = assetKeys.filter(asset => {
            var _cryptoassets$asset;
            return ((_cryptoassets$asset = _liquality_wallet_core_dist_src_utils_cryptoassets__WEBPACK_IMPORTED_MODULE_8___default.a[asset]) === null || _cryptoassets$asset === void 0 ? void 0 : _cryptoassets$asset.chain) === this.selectedAsset.chain;
          });
          const selectedAccounts = {
            ...this.selectedAccounts
          };
          for (const key in selectedAccounts) {
            const item = selectedAccounts[key];
            const {
              publicKey,
              chainCode,
              derivationPath
            } = item;
            const index = item.index + 1;
            const account = {
              name: `Ledger ${this.selectedAsset.name} ${index}`,
              alias: '',
              chain,
              addresses: [item.account],
              assets,
              index: item.index,
              type: walletType || this.selectedAsset.types[0],
              enabled: true,
              derivationPath,
              color: Object(_liquality_wallet_core_dist_src_utils_accounts__WEBPACK_IMPORTED_MODULE_10__["getNextAccountColor"])(chain, item.index),
              publicKey,
              chainCode
            };
            await this.createAccount({
              network: this.activeNetwork,
              walletId: this.activeWalletId,
              account
            });
          }
          this.creatingAccount = false;
          this.currentStep = 'completed';
        } catch (error) {
          this.ledgerError = {
            message: this.$tle(Object(_liquality_error_parser_dist_src_utils__WEBPACK_IMPORTED_MODULE_12__["errorToLiqualityErrorString"])(error))
          };
          Object(_liquality_error_parser_dist_src_reporters_index__WEBPACK_IMPORTED_MODULE_13__["reportLiqualityError"])(error);
          this.creatingAccount = false;
          this.trackAnalytics({
            event: 'Ledger error creating accounts',
            properties: {
              category: 'Connect Ledger',
              asset: `${this.selectedAsset.name}`,
              chain: `${this.selectedAsset.chain}`,
              error: [error.name, error.message, error.stack]
            }
          });
        }
      }
    },
    cancel() {
      this.loading = false;
      this.ledgerError = null;
      this.accounts = [];
      this.selectedAccount = {};
      this.currentStep = 'connect';
    },
    setLedgerAsset(asset) {
      this.selectedAsset = asset;
    },
    selectAccount(item) {
      if (this.selectedAccounts[[item.account]]) {
        delete this.selectedAccounts[item.account];
        this.selectedAccounts = {
          ...this.selectedAccounts
        };
      } else {
        this.selectedAccounts = {
          ...this.selectedAccounts,
          [item.account]: item
        };
      }
    }
  },
  created() {
    this.selectedAsset = this.ledgerOptions[0];
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/spinner.svg */ "./src/assets/icons/spinner.svg");
/* harmony import */ var _assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/ledger */ "./node_modules/@liquality/wallet-core/dist/src/utils/ledger.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _directives_clickAway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/directives/clickAway */ "./src/directives/clickAway.js");
/* harmony import */ var _utils_accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/accounts */ "./src/utils/accounts.js");
/* harmony import */ var _assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons/circle_progress_bar.svg */ "./src/assets/icons/circle_progress_bar.svg");
/* harmony import */ var _assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/check.svg */ "./src/assets/icons/check.svg");
/* harmony import */ var _assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/address */ "./node_modules/@liquality/wallet-core/dist/src/utils/address.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @liquality/wallet-core/dist/src/utils/coinFormatter */ "./node_modules/@liquality/wallet-core/dist/src/utils/coinFormatter.js");
/* harmony import */ var _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
/* harmony import */ var _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    clickAway: _directives_clickAway__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    SpinnerIcon: (_assets_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_0___default()),
    CircleProgressBar: (_assets_icons_circle_progress_bar_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    CheckRightIcon: (_assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default())
  },
  props: ['loading', 'creatingAccount', 'accounts', 'selectedAccounts', 'selectedAsset', 'ledgerError', 'currentPage'],
  data() {
    return {
      ledgerBitcoinOption: null,
      ledgerBitcoinOptionsOpen: false
    };
  },
  created() {
    this.ledgerBitcoinOption = this.ledgerBitcoinOptions[0];
  },
  methods: {
    prettyBalance: _liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["prettyBalance"],
    getAccountIcon: _utils_accounts__WEBPACK_IMPORTED_MODULE_3__["getAccountIcon"],
    shortenAddress: _liquality_wallet_core_dist_src_utils_address__WEBPACK_IMPORTED_MODULE_6__["shortenAddress"],
    unlock() {
      const walletType = this.getWalletType();
      this.$emit('on-unlock', {
        walletType
      });
    },
    getFiatBalance(balance) {
      return Object(_liquality_wallet_core_dist_src_utils_coinFormatter__WEBPACK_IMPORTED_MODULE_7__["formatFiat"])(bignumber_js__WEBPACK_IMPORTED_MODULE_8___default()(balance || 0));
    },
    selectAccount(item) {
      if (!item.exists) {
        this.$emit('on-select-account', item);
      }
    },
    connect(nextPage) {
      const walletType = this.getWalletType();
      this.$emit('on-connect', {
        asset: this.selectedAsset,
        walletType,
        page: nextPage || this.currentPage
      });
    },
    prev() {
      this.connect(this.currentPage - 1);
    },
    next() {
      this.connect(this.currentPage + 1);
    },
    getCurrentPage() {
      this.connect(this.currentPage);
    },
    cancel() {
      this.$emit('on-cancel');
    },
    selectLedgerBitcoinOption(option) {
      this.ledgerBitcoinOption = option;
      this.hideLedgerBitcoinOptions();
    },
    toggleLedgerBitcoinOptions() {
      this.ledgerBitcoinOptionsOpen = !this.ledgerBitcoinOptionsOpen;
    },
    hideLedgerBitcoinOptions() {
      this.ledgerBitcoinOptionsOpen = false;
    },
    getWalletType() {
      var _this$ledgerBitcoinOp, _this$selectedAsset;
      return {
        BTC: (_this$ledgerBitcoinOp = this.ledgerBitcoinOption) === null || _this$ledgerBitcoinOp === void 0 ? void 0 : _this$ledgerBitcoinOp.name,
        ETH: null
      }[(_this$selectedAsset = this.selectedAsset) === null || _this$selectedAsset === void 0 ? void 0 : _this$selectedAsset.chain];
    }
  },
  computed: {
    ledgerBitcoinOptions() {
      return _liquality_wallet_core_dist_src_utils_ledger__WEBPACK_IMPORTED_MODULE_1__["LEDGER_BITCOIN_OPTIONS"].filter(o => {
        var _this$ledgerBitcoinOp2;
        return o.name !== ((_this$ledgerBitcoinOp2 = this.ledgerBitcoinOption) === null || _this$ledgerBitcoinOp2 === void 0 ? void 0 : _this$ledgerBitcoinOp2.name);
      });
    },
    accountsLabel() {
      var _this$selectedAsset2;
      return {
        BTC: 'Bitcoin',
        ETH: 'Ethereum'
      }[(_this$selectedAsset2 = this.selectedAsset) === null || _this$selectedAsset2 === void 0 ? void 0 : _this$selectedAsset2.chain];
    },
    showBalance() {
      var _this$selectedAsset3;
      return !(((_this$selectedAsset3 = this.selectedAsset) === null || _this$selectedAsset3 === void 0 ? void 0 : _this$selectedAsset3.chain) === _liquality_cryptoassets__WEBPACK_IMPORTED_MODULE_9__["ChainId"].Bitcoin);
    }
  },
  watch: {
    ledgerBitcoinOption: async function () {
      if (!this.loading) {
        await this.connect(1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "step-detail"
  }, [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("3")]), _c("div", {
    staticClass: "step-name"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.accountsAdded")))])]), _c("div", {
    staticClass: "progress-container"
  }, [_c("CircleProgressBar", {
    staticClass: "circle-progress"
  }), _c("div", {
    staticClass: "loading-message"
  }, [_c("div", [_c("span", {
    staticClass: "loading-message-title"
  }, [_vm._v(_vm._s(_vm.$t("common.success")))]), _c("span", {
    staticClass: "loading-message-text"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.accountsAdded")))])])])], 1)]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    on: {
      click: _vm.close
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.accounts.closeThisTab")) + " ")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "step-detail"
  }, [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("1")]), _c("div", {
    staticClass: "step-name"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.connectLedger")))]), _c("div", {
    staticClass: "step-icon"
  }, [_c("LedgerIcon")], 1)]), _c("ul", {
    staticClass: "step-instructions"
  }, [_c("li", [_vm._v(_vm._s(_vm.$t("pages.accounts.ledgerInstructions1")))]), _c("li", [_vm._v(_vm._s(_vm.$t("pages.accounts.ledgerInstructions2")))]), _c("li", [_vm._v(_vm._s(_vm.$t("pages.accounts.ledgerInstructions3")))]), _vm.isChainEvmCompatible(_vm.selectedAsset.name) ? _c("li", [_vm._v(" " + _vm._s(_vm.$t("pages.accounts.ledgerInstructions4")) + " ")]) : _vm._e()]), _c("div", {
    staticClass: "options"
  }, [_c("div", {
    staticClass: "options-text"
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("pages.accounts.selectAsset")))])]), _c("div", {
    directives: [{
      name: "click-away",
      rawName: "v-click-away",
      value: _vm.hideAssetList,
      expression: "hideAssetList"
    }],
    staticClass: "dropdown"
  }, [_c("button", {
    staticClass: "btn dropdown-toggle lg",
    on: {
      click: _vm.toggleAssetList
    }
  }, [_vm.selectedAsset ? _c("div", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAssetIcon(_vm.selectedAsset.name)
    }
  }), _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v(" " + _vm._s(_vm.selectedAsset.label) + " ")])])]) : _vm._e(), _c("ChevronRightIcon", {
    class: {
      open: _vm.assetsDropdownOpen
    }
  })], 1), _c("ul", {
    staticClass: "dropdown-menu lg",
    class: {
      show: _vm.assetsDropdownOpen
    }
  }, _vm._l(_vm.assetList, function (asset) {
    return _c("li", {
      key: asset.name
    }, [_c("a", {
      staticClass: "dropdown-item",
      attrs: {
        href: "#"
      },
      on: {
        click: function ($event) {
          return _vm.selectAsset(asset);
        }
      }
    }, [_c("div", {
      staticClass: "form"
    }, [_c("div", {
      staticClass: "input-group"
    }, [_c("img", {
      staticClass: "asset-icon",
      attrs: {
        src: _vm.getAssetIcon(asset.name)
      }
    }), _c("span", {
      staticClass: "input-group-text"
    }, [_vm._v(" " + _vm._s(asset.label) + " ")])])])])]);
  }), 0)])])]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    attrs: {
      id: "cancel-ledger-button"
    },
    on: {
      click: _vm.cancel
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      id: "connect-ledger-button",
      disabled: _vm.loading || !_vm.selectedAsset
    },
    on: {
      click: _vm.connect
    }
  }, [_vm.loading ? _c("SpinnerIcon", {
    staticClass: "btn-loading"
  }) : [_vm._v(_vm._s(_vm.$t("common.connect")))]], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "account-container"
  }, [_c("NavBar", {
    attrs: {
      showMenu: false
    }
  }, [_c("span", {
    staticClass: "account-title"
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.accounts.addLedgerAccounts")) + " ")])]), _vm.currentStep === "connect" ? _c("Connect", {
    attrs: {
      loading: _vm.loading,
      "selected-asset": _vm.selectedAsset
    },
    on: {
      "on-connect": _vm.connect,
      "on-select-asset": _vm.setLedgerAsset
    }
  }) : _vm.currentStep === "unlock" ? _c("Unlock", {
    attrs: {
      loading: _vm.loading,
      "creating-account": _vm.creatingAccount,
      accounts: _vm.accounts,
      "selected-accounts": _vm.selectedAccounts,
      "selected-asset": _vm.selectedAsset,
      "ledger-error": _vm.ledgerError,
      "current-page": _vm.ledgerPage
    },
    on: {
      "on-connect": _vm.connect,
      "on-unlock": _vm.unlock,
      "on-cancel": _vm.cancel,
      "on-select-account": _vm.selectAccount
    }
  }) : _c("Completed")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3& ***!
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
  return _c("div", {
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "wrapper_top"
  }, [_c("div", {
    staticClass: "step-detail"
  }, [_c("div", {
    staticClass: "step-number"
  }, [_vm._v("2")]), _c("div", {
    staticClass: "step-name"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.unlockAccount")))])]), _vm.loading ? _c("div", {
    staticClass: "progress-container"
  }, [_c("CircleProgressBar", {
    staticClass: "circle-progress infinity-rotate"
  }), _c("div", {
    staticClass: "loading-message"
  }, [_c("div", [_c("span", {
    staticClass: "loading-message-title"
  }, [_vm._v(_vm._s(_vm.$t("common.loading")))]), _c("span", {
    staticClass: "loading-message-text"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.findingAccounts")))])])])], 1) : _vm.creatingAccount ? _c("div", {
    staticClass: "progress-container"
  }, [_c("CircleProgressBar", {
    staticClass: "circle-progress infinity-rotate"
  }), _c("div", {
    staticClass: "loading-message"
  }, [_c("div", [_c("span", {
    staticClass: "loading-message-title"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.creating")))]), _c("span", {
    staticClass: "loading-message-text"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.creatingAccount")))])])])], 1) : _c("div", {
    staticClass: "account-list"
  }, [_c("span", {
    staticClass: "indications"
  }, [_vm._v(_vm._s(_vm.$t("pages.accounts.selectAccount")))]), _vm.selectedAsset ? _c("p", [_c("img", {
    staticClass: "asset-icon",
    attrs: {
      src: _vm.getAccountIcon(_vm.selectedAsset.chain)
    }
  }), _vm._v(" " + _vm._s(_vm.accountsLabel) + " " + _vm._s(_vm.$t("pages.accounts.accountsLabel")) + " ")]) : _vm._e(), _vm.accounts && _vm.accounts.length > 0 ? _c("div", [_c("table", {
    staticClass: "table accounts-table"
  }, [_c("tbody", _vm._l(_vm.accounts, function (item) {
    return _c("tr", {
      key: item.account,
      class: {
        disabled: item.exists,
        selected: _vm.selectedAccounts[item.account]
      },
      on: {
        click: function ($event) {
          return _vm.selectAccount(item);
        }
      }
    }, [_c("td", {
      staticClass: "account-index"
    }, [_vm._v(_vm._s(item.index + 1))]), _c("td", {
      staticClass: "account-address"
    }, [_c("div", {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip.top",
        value: {
          content: item.exists ? _vm.$t("pages.accounts.accountAlreadyConnected", {
            account: item.account
          }) : item.account
        },
        expression: "{\n                    content: item.exists\n                      ? $t('pages.accounts.accountAlreadyConnected', { account: item.account })\n                      : item.account\n                  }",
        modifiers: {
          top: true
        }
      }]
    }, [_vm._v(" " + _vm._s(_vm.shortenAddress(item.account)) + " ")])]), _c("td", {
      staticClass: "balance"
    }, [_c("div", [_vm.showBalance ? _c("div", [_vm._v(" " + _vm._s(_vm.prettyBalance(item.balance, _vm.selectedAsset.name)) + " " + _vm._s(_vm.selectedAsset.name) + " ")]) : _vm._e(), _vm.showBalance ? _c("div", {
      staticClass: "fiat"
    }, [_vm._v(" $" + _vm._s(_vm.getFiatBalance(item.fiatBalance)) + " ")]) : _vm._e()])]), _c("td", {
      staticClass: "account-selected-mark"
    }, [_vm.selectedAccounts[item.account] ? _c("CheckRightIcon") : _c("span", [_vm._v(" ")])], 1)]);
  }), 0)]), _c("div", {
    staticClass: "account-nav"
  }, [_c("button", {
    staticClass: "btn btn-link",
    attrs: {
      disabled: _vm.currentPage <= 1
    },
    on: {
      click: _vm.prev
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("pages.accounts.previous")) + " ")]), _c("button", {
    staticClass: "btn btn-link",
    on: {
      click: _vm.next
    }
  }, [_vm._v(_vm._s(_vm.$t("common.next")))])])]) : _c("div", {
    staticClass: "account-message"
  }, [_c("p", [_vm._v(_vm._s(_vm.$t("pages.accounts.accountMessage1")))]), _c("p", [_vm._v(_vm._s(_vm.$t("pages.accounts.accountMessage2")))])])])]), _c("div", {
    staticClass: "wrapper_bottom"
  }, [_c("div", {
    staticClass: "button-group"
  }, [_c("button", {
    staticClass: "btn btn-light btn-outline-primary btn-lg",
    on: {
      click: _vm.cancel
    }
  }, [_vm._v(" " + _vm._s(_vm.$t("common.cancel")) + " ")]), _vm.ledgerError ? _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: _vm.loading || _vm.creatingAccount || !_vm.selectedAsset
    },
    on: {
      click: _vm.getCurrentPage
    }
  }, [_vm.loading ? _c("SpinnerIcon", {
    staticClass: "btn-loading"
  }) : [_vm._v(_vm._s(_vm.$t("pages.accounts.tryAgain")))]], 2) : _c("button", {
    staticClass: "btn btn-primary btn-lg btn-icon",
    attrs: {
      disabled: _vm.loading || _vm.creatingAccount || Object.keys(_vm.selectedAccounts).length <= 0
    },
    on: {
      click: _vm.unlock
    }
  }, [_vm.loading ? _c("SpinnerIcon", {
    staticClass: "btn-loading"
  }) : [_vm._v(_vm._s(_vm.$t("pages.accounts.unlock")))]], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.final-message {\n  position: absolute;\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 360px;\n  color: #1d1e21;\n  height: 120px;\n  background-color: rgba(255, 243, 188, 0.5);\n  padding: 5px 20px 5px 20px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify {\n  text-align: justify !important;\n}\n.text-wrap {\n  white-space: normal !important;\n}\n.text-nowrap {\n  white-space: nowrap !important;\n}\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-right {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n.text-sm-left {\n    text-align: left !important;\n}\n.text-sm-right {\n    text-align: right !important;\n}\n.text-sm-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 768px) {\n.text-md-left {\n    text-align: left !important;\n}\n.text-md-right {\n    text-align: right !important;\n}\n.text-md-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 992px) {\n.text-lg-left {\n    text-align: left !important;\n}\n.text-lg-right {\n    text-align: right !important;\n}\n.text-lg-center {\n    text-align: center !important;\n}\n}\n@media (min-width: 1200px) {\n.text-xl-left {\n    text-align: left !important;\n}\n.text-xl-right {\n    text-align: right !important;\n}\n.text-xl-center {\n    text-align: center !important;\n}\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.font-weight-light {\n  font-weight: 300 !important;\n}\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.text-white {\n  color: #fff !important;\n}\n.text-primary {\n  color: #9d4dfa !important;\n}\na.text-primary:hover, a.text-primary:focus {\n  color: #7407f4 !important;\n}\n.text-secondary {\n  color: #2cd2cf !important;\n}\na.text-secondary:hover, a.text-secondary:focus {\n  color: #1f9391 !important;\n}\n.text-success {\n  color: #28a745 !important;\n}\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n.text-info {\n  color: #17a2b8 !important;\n}\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n.text-danger {\n  color: #f12274 !important;\n}\na.text-danger:hover, a.text-danger:focus {\n  color: #bb0c51 !important;\n}\n.text-light {\n  color: #f8faff !important;\n}\na.text-light:hover, a.text-light:focus {\n  color: #acc3ff !important;\n}\n.text-dark {\n  color: #f0f7f9 !important;\n}\na.text-dark:hover, a.text-dark:focus {\n  color: #b9dae3 !important;\n}\n.text-body {\n  color: #1d1e21 !important;\n}\n.text-muted {\n  color: #747e8d !important;\n}\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none {\n  text-decoration: none !important;\n}\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n.text-reset {\n  color: inherit !important;\n}\n.account-nav {\n  display: flex;\n  justify-content: space-between;\n}\n.account-list p {\n  font-weight: normal;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  color: #000d35;\n}\n.account-list p img {\n  margin-right: 11px;\n}\n.account-list .account-message {\n  position: absolute;\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 360px;\n  color: #1d1e21;\n  height: 160px;\n  background-color: rgba(255, 243, 188, 0.5);\n  padding: 5px 20px 5px 20px;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 16px;\n}\n.account-list .accounts-table {\n  margin-bottom: 0.3rem;\n}\n.account-list .accounts-table tr {\n  cursor: pointer;\n}\n.account-list .accounts-table tr:hover, .account-list .accounts-table tr.selected {\n  background-color: #f0f7f9;\n  color: #1d1e21;\n}\n.account-list .accounts-table th,\n.account-list .accounts-table td {\n  padding: 0.25rem;\n  vertical-align: middle;\n}\n.account-list .accounts-table .account-index,\n.account-list .accounts-table .account-address {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  align-items: center;\n  color: #000d35;\n}\n.account-list .accounts-table .account-index div,\n.account-list .accounts-table .account-address div {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.account-list .accounts-table .balance .has-txns {\n  color: #747e8d;\n}\n.account-list .accounts-table .balance > div {\n  min-height: 45px;\n}\n.account-list .accounts-table .balance div,\n.account-list .accounts-table .balance .has-txns {\n  text-align: right;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-end;\n}\n.account-list .accounts-table .balance div .fiat,\n.account-list .accounts-table .balance .has-txns .fiat {\n  color: #747e8d;\n}\n.account-list .accounts-table tr.disabled {\n  cursor: default;\n}\n.account-list .accounts-table tr.disabled .account-index,\n.account-list .accounts-table tr.disabled .account-address {\n  color: #747e8d;\n}\n.account-list .accounts-table .account-index,\n.account-list .accounts-table .account-selected-mark,\n.account-list .accounts-table .account-address {\n  text-align: center;\n}\n.account-list .accounts-table .account-address {\n  text-align: left;\n}\n.account-list .accounts-table .account-selected-mark {\n  width: 37px;\n}\n.account-list .accounts-table .account-selected-mark svg {\n  width: 13px;\n  height: 9px;\n}\n.info-icon {\n  width: 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("59a72bad", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f079ed1a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/icons/check.svg":
/*!************************************!*\
  !*** ./src/assets/icons/check.svg ***!
  \************************************/
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
        "viewBox": "0 0 15 11",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "d": "M5.148 9.106l8.191-7.995a.398.398 0 01.545-.006.356.356 0 01.006.52L5.423 9.889a.398.398 0 01-.55 0L1.11 6.216a.356.356 0 01.006-.52.398.398 0 01.544.006l3.488 3.404z",
        "stroke": "#2CD2CF",
        "stroke-width": "1.5"
      }
    })]));
  }
};

/***/ }),

/***/ "./src/assets/icons/circle_progress_bar.svg":
/*!**************************************************!*\
  !*** ./src/assets/icons/circle_progress_bar.svg ***!
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
        "viewBox": "0 0 179 179",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }, attrs),
      ...rest
    }, children.concat([_c('path', {
      attrs: {
        "clip-rule": "evenodd",
        "d": "M89.5 177c48.325 0 87.5-39.175 87.5-87.5S137.825 2 89.5 2 2 41.175 2 89.5 41.175 177 89.5 177z",
        "stroke": "url(#paint0_linear)",
        "stroke-width": "4",
        "stroke-linejoin": "round"
      }
    }), _c('defs', [_c('linearGradient', {
      attrs: {
        "id": "paint0_linear",
        "x1": "2",
        "y1": "87.909",
        "x2": "177",
        "y2": "87.909",
        "gradientUnits": "userSpaceOnUse"
      }
    }, [_c('stop', {
      attrs: {
        "stop-color": "#9C55F6"
      }
    }), _c('stop', {
      attrs: {
        "offset": "1",
        "stop-color": "#2CD2CA"
      }
    })])])]));
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

/***/ "./src/views/Accounts/HardwareWallet/Completed.vue":
/*!*********************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Completed.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Completed.vue?vue&type=template&id=40698c08& */ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08&");
/* harmony import */ var _Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Completed.vue?vue&type=script&lang=js& */ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& */ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Accounts/HardwareWallet/Completed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=style&index=0&id=40698c08&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_style_index_0_id_40698c08_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08&":
/*!****************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Completed.vue?vue&type=template&id=40698c08& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Completed.vue?vue&type=template&id=40698c08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Completed_vue_vue_type_template_id_40698c08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Connect.vue":
/*!*******************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Connect.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Connect.vue?vue&type=template&id=c029b14a& */ "./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a&");
/* harmony import */ var _Connect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connect.vue?vue&type=script&lang=js& */ "./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Connect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Accounts/HardwareWallet/Connect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Connect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Connect.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Connect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a&":
/*!**************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Connect.vue?vue&type=template&id=c029b14a& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Connect.vue?vue&type=template&id=c029b14a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Connect_vue_vue_type_template_id_c029b14a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/HardwareWallet.vue":
/*!**************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/HardwareWallet.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HardwareWallet.vue?vue&type=template&id=010a6b20& */ "./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20&");
/* harmony import */ var _HardwareWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HardwareWallet.vue?vue&type=script&lang=js& */ "./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HardwareWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Accounts/HardwareWallet/HardwareWallet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_HardwareWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./HardwareWallet.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_HardwareWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20&":
/*!*********************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./HardwareWallet.vue?vue&type=template&id=010a6b20& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/HardwareWallet.vue?vue&type=template&id=010a6b20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_HardwareWallet_vue_vue_type_template_id_010a6b20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Unlock.vue":
/*!******************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Unlock.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unlock.vue?vue&type=template&id=422acfe3& */ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3&");
/* harmony import */ var _Unlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unlock.vue?vue&type=script&lang=js& */ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& */ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_cli_service_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Unlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Accounts/HardwareWallet/Unlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Unlock.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=style&index=0&id=422acfe3&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_style_index_0_id_422acfe3_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3&":
/*!*************************************************************************************!*\
  !*** ./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a869272c-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./Unlock.vue?vue&type=template&id=422acfe3& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"a869272c-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/index.js?!./src/views/Accounts/HardwareWallet/Unlock.vue?vue&type=template&id=422acfe3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_a869272c_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Unlock_vue_vue_type_template_id_422acfe3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=23.js.map