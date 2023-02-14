(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@liquality/wallet-core/dist/src/nameResolvers/uns.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@liquality/wallet-core/dist/src/nameResolvers/uns.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getUNSKey = exports.UNSResolver = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const client_1 = __webpack_require__(/*! @chainify/client */ "./node_modules/@chainify/client/dist/lib/index.js");
const cryptoassets_1 = __webpack_require__(/*! @liquality/cryptoassets */ "./node_modules/@liquality/cryptoassets/dist/src/index.js");
const types_1 = __webpack_require__(/*! @liquality/cryptoassets/dist/src/types */ "./node_modules/@liquality/cryptoassets/dist/src/types.js");
const resolution_1 = __webpack_require__(/*! @unstoppabledomains/resolution */ "./node_modules/@unstoppabledomains/resolution/build/index.js");
const build_config_1 = tslib_1.__importDefault(__webpack_require__(/*! ../build.config */ "./node_modules/@liquality/wallet-core/dist/src/build.config.js"));
const reg = RegExp('^[.a-z0-9-]+$');
const resolution = new resolution_1.Resolution();
const unsConfig = build_config_1.default.nameResolvers.uns;
function getUNSKey(asset, noVersion = false) {
    const symbol = asset.matchingAsset ? asset.matchingAsset : asset.code;
    if (noVersion) {
        return `crypto.${symbol}.address`;
    }
    const chainKey = multiAssetChainKey(asset.chain);
    if (chainKey) {
        if (asset.type == cryptoassets_1.AssetTypes.native && asset.chain != cryptoassets_1.ChainId.Polygon) {
            return `crypto.${symbol}.address`;
        }
        return `crypto.${symbol}.version.${chainKey}.address`;
    }
    else {
        return `crypto.${symbol}.address`;
    }
}
exports.getUNSKey = getUNSKey;
function multiAssetChainKey(chainId) {
    var _a;
    return ((_a = (0, cryptoassets_1.getChain)(types_1.Network.Mainnet, chainId).nameService) === null || _a === void 0 ? void 0 : _a.uns) || null;
}
class UNSResolver {
    lookupDomain(address, asset) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const domain = this.preparedDomain(address);
                if (yield this.isValidTLD(domain)) {
                    const data = yield client_1.HttpClient.get(unsConfig.resolutionService + domain, {}, { headers: { Authorization: `Bearer ${unsConfig.alchemyKey}` } });
                    return (_b = (_a = data === null || data === void 0 ? void 0 : data.records[getUNSKey(asset)]) !== null && _a !== void 0 ? _a : data === null || data === void 0 ? void 0 : data.records[getUNSKey(asset, true)]) !== null && _b !== void 0 ? _b : null;
                }
                return null;
            }
            catch (e) {
                return null;
            }
        });
    }
    isValidTLD(domain) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.supportedTlds) {
                const data = yield client_1.HttpClient.get(unsConfig.tldAPI);
                if (data.tlds) {
                    this.supportedTlds = data.tlds;
                }
            }
            return (_b = (_a = this.supportedTlds) === null || _a === void 0 ? void 0 : _a.some((tld) => domain.endsWith(tld))) !== null && _b !== void 0 ? _b : false;
        });
    }
    preparedDomain(domain) {
        const retVal = domain ? domain.trim().toLowerCase() : '';
        if (!reg.test(retVal)) {
            throw 'Invalid domain name';
        }
        return retVal;
    }
    reverseLookup(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const domain = yield resolution.reverse(address);
                return domain;
            }
            catch (e) {
                return null;
            }
        });
    }
}
exports.UNSResolver = UNSResolver;
//# sourceMappingURL=uns.js.map

/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/FetchProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/FetchProvider.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolutionError_1 = __importStar(__webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
var Networking_1 = __importDefault(__webpack_require__(/*! ./utils/Networking */ "./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js"));
var FetchProvider = /** @class */ (function () {
    function FetchProvider(name, url) {
        this.url = url;
        this.name = name;
    }
    // This is used for test mocking
    FetchProvider.factory = function (name, url) {
        return new this(name, url);
    };
    FetchProvider.prototype.request = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchJson(args)];
                    case 1:
                        json = _a.sent();
                        if (json.error) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                providerMessage: json.error.message,
                            });
                        }
                        return [2 /*return*/, json.result];
                }
            });
        });
    };
    FetchProvider.prototype.fetchJson = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch(this.url, {
                            method: 'POST',
                            body: JSON.stringify({
                                jsonrpc: '2.0',
                                id: '1',
                                method: args.method,
                                params: args.params || [],
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                providerMessage: "Request to ".concat(this.url, " failed with response status ").concat(response.status),
                            });
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return FetchProvider;
}());
exports.default = FetchProvider;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/NamingService.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/NamingService.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingService = void 0;
/**
 * @internal
 */
var NamingService = /** @class */ (function () {
    function NamingService() {
    }
    return NamingService;
}());
exports.NamingService = NamingService;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/Resolution.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/Resolution.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolution = void 0;
var bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
var Zns_1 = __importDefault(__webpack_require__(/*! ./Zns */ "./node_modules/@unstoppabledomains/resolution/build/Zns.js"));
var Uns_1 = __importDefault(__webpack_require__(/*! ./Uns */ "./node_modules/@unstoppabledomains/resolution/build/Uns.js"));
var UdApi_1 = __importDefault(__webpack_require__(/*! ./UdApi */ "./node_modules/@unstoppabledomains/resolution/build/UdApi.js"));
var publicTypes_1 = __webpack_require__(/*! ./types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var resolutionError_1 = __importStar(__webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
var DnsUtils_1 = __importDefault(__webpack_require__(/*! ./utils/DnsUtils */ "./node_modules/@unstoppabledomains/resolution/build/utils/DnsUtils.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var Eip1993Factories_1 = __webpack_require__(/*! ./utils/Eip1993Factories */ "./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js");
var Networking_1 = __importDefault(__webpack_require__(/*! ./utils/Networking */ "./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js"));
var prepareAndValidate_1 = __webpack_require__(/*! ./utils/prepareAndValidate */ "./node_modules/@unstoppabledomains/resolution/build/utils/prepareAndValidate.js");
var namehash_1 = __webpack_require__(/*! ./utils/namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
/**
 * Blockchain domain Resolution library - Resolution.
 * @example
 * ```
 * import Resolution from '@unstoppabledomains/resolution';
 *
 * let resolution = new Resolution({ blockchain: {
 *        uns: {
 *           url: "https://eth-mainnet.alchemyapi.io/v2/GmQ8X1FHf-WDEry0BBSn0RgjVhjHkRmS",
 *           network: "mainnet"
 *        }
 *      }
 *   });
 *
 * let domain = "brad.zil";
 * resolution.addr(domain, "eth").then(addr => console.log(addr));;
 * ```
 */
var Resolution = /** @class */ (function () {
    function Resolution(_a) {
        var _b;
        var _c = _a === void 0 ? {} : _a, _d = _c.sourceConfig, sourceConfig = _d === void 0 ? undefined : _d;
        var uns = isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns)
            ? new UdApi_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns)
            : new Uns_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns);
        var zns = isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns)
            ? new UdApi_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns)
            : new Zns_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns);
        // If both UNS and ZNS use the same UdApi providers, we don't want to call the API twice as it would return same
        // responses. It should be enough to compare just the URLs, as the network param isn't actually used in the calls.
        var equalUdApiProviders = uns instanceof UdApi_1.default && zns instanceof UdApi_1.default && uns.url === zns.url;
        // If a user configures the lib with an API source, we still want to initialise native blockchain services to access
        // some non-async methods such as namehash, as they are unavailable in the UdApi service.
        this.serviceMap = (_b = {},
            _b[publicTypes_1.NamingServiceName.UNS] = {
                usedServices: [uns],
                native: isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns) ? new Uns_1.default() : uns,
            },
            _b[publicTypes_1.NamingServiceName.ZNS] = {
                usedServices: equalUdApiProviders ? [uns] : [uns, zns],
                native: isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns) ? new Zns_1.default() : zns,
            },
            _b);
    }
    /**
     * AutoConfigure the blockchain network for UNS
     * We make a "net_version" JSON RPC call to the blockchain either via url or with the help of given provider.
     * @param sourceConfig - configuration object for uns
     * @returns configured Resolution object
     */
    Resolution.autoNetwork = function (sourceConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var resolution, uns;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolution = new this();
                        if (!sourceConfig.uns) return [3 /*break*/, 2];
                        return [4 /*yield*/, Uns_1.default.autoNetwork(sourceConfig.uns)];
                    case 1:
                        uns = _a.sent();
                        resolution.serviceMap[publicTypes_1.NamingServiceName.UNS] = {
                            usedServices: [uns],
                            native: uns,
                        };
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolution];
                }
            });
        });
    };
    /**
     * Creates a resolution with configured infura id for uns
     * @param infura - infura project id
     * @param networks - an optional object that describes what network to use when connecting UNS default is mainnet
     */
    Resolution.infura = function (infura, networks) {
        var _a, _b, _c, _d;
        return new this({
            sourceConfig: {
                uns: {
                    locations: {
                        Layer1: {
                            url: (0, utils_1.signedLink)(infura, ((_a = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _a === void 0 ? void 0 : _a.locations.Layer1.network) || 'mainnet', 'infura'),
                            network: ((_b = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _b === void 0 ? void 0 : _b.locations.Layer1.network) || 'mainnet',
                        },
                        Layer2: {
                            url: (0, utils_1.signedLink)(infura, ((_c = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _c === void 0 ? void 0 : _c.locations.Layer2.network) || 'polygon-mainnet', 'infura'),
                            network: ((_d = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _d === void 0 ? void 0 : _d.locations.Layer2.network) || 'polygon-mainnet',
                        },
                    },
                },
            },
        });
    };
    /**
     * Creates a resolution with configured alchemy API keys for uns
     * @param alchemy - alchemy API keys
     * @param networks - an optional object that describes what network to use when connecting UNS default is mainnet
     */
    Resolution.alchemy = function (alchemy, networks) {
        var _a, _b, _c, _d;
        return new this({
            sourceConfig: {
                uns: {
                    locations: {
                        Layer1: {
                            url: (0, utils_1.signedLink)(alchemy, ((_a = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _a === void 0 ? void 0 : _a.locations.Layer1.network) || 'mainnet'),
                            network: ((_b = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _b === void 0 ? void 0 : _b.locations.Layer1.network) || 'mainnet',
                        },
                        Layer2: {
                            url: (0, utils_1.signedLink)(alchemy, ((_c = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _c === void 0 ? void 0 : _c.locations.Layer2.network) || 'polygon-mainnet'),
                            network: ((_d = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _d === void 0 ? void 0 : _d.locations.Layer2.network) || 'polygon-mainnet',
                        },
                    },
                },
            },
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param networks - an object that describes what network to use when connecting UNS or ZNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromResolutionProvider = function (networks) {
        if (networks.uns) {
            return this.fromEthereumEip1193Provider({
                uns: networks.uns,
            });
        }
        if (networks.zns) {
            return this.fromZilliqaProvider(networks.zns.provider, networks);
        }
        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
            providerMessage: 'Must specify network for uns or zns',
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param networks - an object that describes what network to use when connecting UNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromEthereumEip1193Provider = function (networks) {
        var sourceConfig = {};
        if (networks.uns) {
            sourceConfig.uns = {
                locations: {
                    Layer1: {
                        provider: networks.uns.locations.Layer1.provider,
                        network: networks.uns.locations.Layer1.network || 'mainnet',
                    },
                    Layer2: {
                        provider: networks.uns.locations.Layer2.provider,
                        network: networks.uns.locations.Layer2.network || 'polygon-mainnet',
                    },
                },
            };
        }
        return new this({
            sourceConfig: sourceConfig,
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param provider - any provider compatible with EIP-1193
     * @param networks - an optional object that describes what network to use when connecting ZNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromZilliqaProvider = function (provider, networks) {
        var _a;
        return new this({
            sourceConfig: {
                zns: { provider: provider, network: ((_a = networks === null || networks === void 0 ? void 0 : networks.zns) === null || _a === void 0 ? void 0 : _a.network) || 'mainnet' },
            },
        });
    };
    /**
     * Create a resolution instance from web3 0.x version provider
     * @param networks - Ethereum network configuration with 0.x version provider from web3 ( must implement sendAsync(payload, callback) )
     * @see https://github.com/ethereum/web3.js/blob/0.20.7/lib/web3/httpprovider.js#L116
     */
    Resolution.fromWeb3Version0Provider = function (networks) {
        return this.fromEthereumEip1193Provider({
            uns: networks.uns
                ? {
                    locations: {
                        Layer1: {
                            network: networks.uns.locations.Layer1.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromWeb3Version0Provider(networks.uns.locations.Layer1.provider),
                        },
                        Layer2: {
                            network: networks.uns.locations.Layer2.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromWeb3Version0Provider(networks.uns.locations.Layer2.provider),
                        },
                    },
                }
                : undefined,
        });
    };
    /**
     * Create a resolution instance from web3 1.x version provider
     * @param networks - an optional object with 1.x version provider from web3 ( must implement send(payload, callback) ) that describes what network to use when connecting UNS default is mainnet
     * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-core-helpers/types/index.d.ts#L165
     * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-providers-http/src/index.js#L95
     */
    Resolution.fromWeb3Version1Provider = function (networks) {
        return this.fromEthereumEip1193Provider({
            uns: networks.uns
                ? {
                    locations: {
                        Layer1: {
                            network: networks.uns.locations.Layer1.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromWeb3Version1Provider(networks.uns.locations.Layer1.provider),
                        },
                        Layer2: {
                            network: networks.uns.locations.Layer2.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromWeb3Version1Provider(networks.uns.locations.Layer2.provider),
                        },
                    },
                }
                : undefined,
        });
    };
    /**
     * Creates instance of resolution from provider that implements Ethers Provider#call interface.
     * This wrapper support only `eth_call` method for now, which is enough for all the current Resolution functionality
     * @param networks - an object that describes what network to use when connecting UNS default is mainnet
     * @see https://github.com/ethers-io/ethers.js/blob/v4-legacy/providers/abstract-provider.d.ts#L91
     * @see https://github.com/ethers-io/ethers.js/blob/v5.0.4/packages/abstract-provider/src.ts/index.ts#L224
     * @see https://docs.ethers.io/ethers.js/v5-beta/api-providers.html#jsonrpcprovider-inherits-from-provider
     * @see https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts
     */
    Resolution.fromEthersProvider = function (networks) {
        return this.fromEthereumEip1193Provider({
            uns: networks.uns
                ? {
                    locations: {
                        Layer1: {
                            network: networks.uns.locations.Layer1.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromEthersProvider(networks.uns.locations.Layer1.provider),
                        },
                        Layer2: {
                            network: networks.uns.locations.Layer2.network,
                            provider: Eip1993Factories_1.Eip1993Factories.fromEthersProvider(networks.uns.locations.Layer2.provider),
                        },
                    },
                }
                : undefined,
        });
    };
    /**
     * Resolves given domain name to a specific currency address if exists
     * @async
     * @param domain - domain name to be resolved
     * @param ticker - currency ticker like BTC, ETH, ZIL
     * @throws [[ResolutionError]] if address is not found
     * @returns A promise that resolves in an address
     */
    Resolution.prototype.addr = function (domain, ticker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.record(domain, "crypto.".concat(ticker.toUpperCase(), ".address"))];
            });
        });
    };
    /**
     * Read multi-chain currency address if exists
     * @async
     * @param domain - domain name to be resolved
     * @param ticker - currency ticker (USDT, FTM, etc.)
     * @param chain - chain version, usually means blockchain ( ERC20, BEP2, OMNI, etc. )
     * @throws [[ResolutionError]] if address is not found
     * @returns A promise that resolves in an adress
     */
    Resolution.prototype.multiChainAddr = function (domain, ticker, chain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordKey;
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                recordKey = "crypto.".concat(ticker.toUpperCase(), ".version.").concat(chain.toUpperCase(), ".address");
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.record(domain, recordKey);
                    })];
            });
        });
    };
    /**
     * Resolves given domain name to a verified twitter handle
     * @async
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]] if twitter is not found
     * @returns A promise that resolves in a verified twitter handle
     */
    Resolution.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.twitter(domain);
                    })];
            });
        });
    };
    /**
     * Resolve a chat id from the domain record
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]]
     * @returns A promise that resolves in chatId
     */
    Resolution.prototype.chatId = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.record(domain, 'gundb.username.value')];
            });
        });
    };
    /**
     * Resolve a gundb public key from the domain record
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]]
     * @returns a promise that resolves in gundb public key
     */
    Resolution.prototype.chatPk = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.record(domain, 'gundb.public_key.value')];
            });
        });
    };
    /**
     * Resolves the IPFS hash configured for domain records on ZNS
     * @param domain - domain name
     * @throws [[ResolutionError]]
     */
    Resolution.prototype.ipfsHash = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.getPreferableNewRecord(domain, 'dweb.ipfs.hash', 'ipfs.html.value')];
            });
        });
    };
    /**
     * Resolves the httpUrl attached to domain
     * @param domain - domain name
     */
    Resolution.prototype.httpUrl = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.getPreferableNewRecord(domain, 'browser.redirect_url', 'ipfs.redirect_domain.value')];
            });
        });
    };
    /**
     * Resolves the ipfs email field from whois configurations
     * @param domain - domain name
     * @throws [[ResolutionError]]
     * @returns A Promise that resolves in an email address configured for this domain whois
     */
    Resolution.prototype.email = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.record(domain, 'whois.email.value')];
            });
        });
    };
    /**
     * @returns the resolver address for a specific domain
     * @param domain - domain to look for
     */
    Resolution.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                        return [4 /*yield*/, this.callServiceForDomain(domain, function (service) {
                                return service.resolver(domain);
                            })];
                    case 1:
                        resolver = _a.sent();
                        if (!resolver) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, resolver];
                }
            });
        });
    };
    /**
     * @param domain - domain name
     * @returns An owner address of the domain
     */
    Resolution.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.owner(domain);
                    })];
            });
        });
    };
    /**
     * @param domain - domain name
     * @param recordKey - a name of a record to be resolved
     * @returns A record value promise for a given record name
     */
    Resolution.prototype.record = function (domain, recordKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.record(domain, recordKey);
                    })];
            });
        });
    };
    /**
     * @param domain domain name
     * @param keys Array of record keys to be resolved
     * @returns A Promise with key-value mapping of domain records
     */
    Resolution.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.records(domain, keys);
                    })];
            });
        });
    };
    /**
     * @param domain domain name
     * @returns A Promise of whether or not the domain belongs to a wallet
     */
    Resolution.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomainBoolean(domain, function (service) { return service.isRegistered(domain); }, {
                        throwIfUnsupportedDomain: true,
                        expectedValue: true,
                    })];
            });
        });
    };
    /**
     * @param domain domain name
     * @returns A Promise of whether or not the domain is available
     */
    Resolution.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomainBoolean(domain, function (service) { return service.isAvailable(domain); }, {
                        throwIfUnsupportedDomain: true,
                        expectedValue: false,
                    })];
            });
        });
    };
    /**
     * @returns Produces a namehash from supported naming service in hex format with 0x prefix.
     * Corresponds to ERC721 token id in case of Ethereum based naming service like UNS.
     * @param domain domain name to be converted
     * @param namingService "UNS" or "ZNS" (uses keccak256 or sha256 algorithm respectively)
     * @param options formatting options
     * @throws [[ResolutionError]] with UnsupportedDomain error code if domain extension is unknown
     */
    Resolution.prototype.namehash = function (domain, namingService, options) {
        if (options === void 0) { options = publicTypes_1.NamehashOptionsDefault; }
        var service = this.serviceMap[namingService];
        if (!service) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedService, {
                namingService: namingService,
            });
        }
        domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
        return this.formatNamehash(service.native.namehash(domain), options);
    };
    /**
     * @returns a namehash of a subdomain with name label
     * @param parent namehash of a parent domain
     * @param label subdomain name
     * @param namingService "UNS" or "ZNS" (uses keccak256 or sha256 algorithm respectively)
     * @param options formatting options
     */
    Resolution.prototype.childhash = function (parent, label, namingService, options) {
        if (options === void 0) { options = publicTypes_1.NamehashOptionsDefault; }
        var service = this.serviceMap[namingService];
        if (!service) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedService, {
                namingService: namingService,
            });
        }
        return this.formatNamehash(service.native.childhash(parent, label), options);
    };
    Resolution.prototype.formatNamehash = function (hash, options) {
        hash = hash.replace('0x', '');
        if (options.format === 'dec') {
            return new bn_js_1.default(hash, 'hex').toString(10);
        }
        else {
            return options.prefix ? '0x' + hash : hash;
        }
    };
    /**
     * Checks weather the domain name matches the hash
     * @param domain - domain name to check against
     * @param hash - hash obtained from the blockchain
     * @param namingService - "UNS" or "ZNS" (uses keccak256 or sha256 algorithm respectively)
     */
    Resolution.prototype.isValidHash = function (domain, hash, namingService) {
        var service = this.serviceMap[namingService];
        if (!service) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedService, {
                namingService: namingService,
            });
        }
        domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
        return service.native.namehash(domain) === hash;
    };
    /**
     * Checks if the domain name is valid according to naming service rules
     * for valid domain names.
     * @param domain - domain name to be checked
     */
    Resolution.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomainBoolean(domain, function (service) { return service.isSupportedDomain(domain); }, {
                        throwIfUnsupportedDomain: false,
                        expectedValue: true,
                    })];
            });
        });
    };
    /**
     * Returns all record keys of the domain.
     * This method is strongly unrecommended for production use due to lack of support for many ethereum service providers and low performance
     * @param domain - domain name
     */
    Resolution.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.allRecords(domain);
                    })];
            });
        });
    };
    Resolution.prototype.allNonEmptyRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var records, nonEmptyRecords, _i, _a, _b, key, value;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.allRecords(domain)];
                    case 1:
                        records = _c.sent();
                        nonEmptyRecords = {};
                        for (_i = 0, _a = Object.entries(records); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (value) {
                                nonEmptyRecords[key] = value;
                            }
                        }
                        return [2 /*return*/, nonEmptyRecords];
                }
            });
        });
    };
    Resolution.prototype.dns = function (domain, types) {
        return __awaiter(this, void 0, void 0, function () {
            var dnsUtils, dnsRecordKeys, blockchainData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dnsUtils = new DnsUtils_1.default();
                        domain = (0, prepareAndValidate_1.prepareAndValidateDomain)(domain);
                        dnsRecordKeys = this.getDnsRecordKeys(types);
                        return [4 /*yield*/, this.callServiceForDomain(domain, function (service) {
                                return service.records(domain, dnsRecordKeys);
                            })];
                    case 1:
                        blockchainData = _a.sent();
                        return [2 /*return*/, dnsUtils.toList(blockchainData)];
                }
            });
        });
    };
    /**
     * Retrieves the tokenURI from the registry smart contract.
     * @returns the ERC721Metadata#tokenURI contract method result
     * @param domain - domain name
     */
    Resolution.prototype.tokenURI = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash;
            return __generator(this, function (_a) {
                namehash = this.namehash(domain, publicTypes_1.NamingServiceName.UNS);
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.getTokenUri(namehash);
                    })];
            });
        });
    };
    /**
     * Retrieves the data from the endpoint provided by tokenURI from the registry smart contract.
     * @returns the JSON response of the token URI endpoint
     * @param domain - domain name
     */
    Resolution.prototype.tokenURIMetadata = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenURI(domain)];
                    case 1:
                        tokenUri = _a.sent();
                        return [2 /*return*/, this.getMetadataFromTokenURI(tokenUri)];
                }
            });
        });
    };
    /**
     * Retrieves address of registry contract used for domain
     * @param domain - domain name
     * @returns Registry contract address
     */
    Resolution.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.callServiceForDomain(domain, function (service) {
                        return service.registryAddress(domain);
                    })];
            });
        });
    };
    /**
     * Retrieves the domain name from tokenId by parsing registry smart contract event logs.
     * @throws {ResolutionError} if returned domain name doesn't match the original namhash.
     * @returns the domain name retrieved from token metadata
     * @param hash - domain hash
     * @param service - nameservice which is used for lookup
     */
    Resolution.prototype.unhash = function (hash, service) {
        return __awaiter(this, void 0, void 0, function () {
            var services, method;
            return __generator(this, function (_a) {
                hash = (0, namehash_1.fromDecStringToHex)(hash);
                services = this.serviceMap[service].usedServices;
                method = services[services.length - 1];
                return [2 /*return*/, method.getDomainFromTokenId(hash)];
            });
        });
    };
    /**
     * Retrieves address of registry contract used for domain
     * @param domains - domain name
     * @returns Promise<Locations> - A map of domain name and Location (a set of attributes like blockchain,
     */
    Resolution.prototype.locations = function (domains) {
        return __awaiter(this, void 0, void 0, function () {
            var zilDomains, unsPromise, znsServices, znsService, znsPromise, unsLocations, emptyZilEntries, znsLocations, _i, emptyZilEntries_1, _a, domain, _location;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        zilDomains = domains.filter(function (domain) { return domain.endsWith('.zil'); });
                        unsPromise = this.serviceMap.UNS.usedServices[0].locations(domains);
                        if (!zilDomains.length) {
                            return [2 /*return*/, unsPromise];
                        }
                        znsServices = this.serviceMap.ZNS.usedServices;
                        znsService = znsServices[znsServices.length - 1];
                        znsPromise = (0, utils_1.wrapResult)(function () { return znsService.locations(zilDomains); });
                        return [4 /*yield*/, unsPromise];
                    case 1:
                        unsLocations = _b.sent();
                        emptyZilEntries = Object.entries(unsLocations).filter(function (_a) {
                            var domain = _a[0], location = _a[1];
                            return domain.endsWith('.zil') && !location;
                        });
                        if (!emptyZilEntries.length) {
                            return [2 /*return*/, unsLocations];
                        }
                        return [4 /*yield*/, znsPromise.then(utils_1.unwrapResult)];
                    case 2:
                        znsLocations = _b.sent();
                        for (_i = 0, emptyZilEntries_1 = emptyZilEntries; _i < emptyZilEntries_1.length; _i++) {
                            _a = emptyZilEntries_1[_i], domain = _a[0], _location = _a[1];
                            unsLocations[domain] = znsLocations[domain];
                        }
                        return [2 /*return*/, unsLocations];
                }
            });
        });
    };
    /**
     * Returns the token ID that is the primary resolution of the provided address
     * @param address - owner's address
     * @returns Promise<tokenId> - token ID that is the primary resolution of the provided address
     */
    Resolution.prototype.reverseTokenId = function (address, options) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId;
            return __generator(this, function (_a) {
                tokenId = this.reverseGetTokenId(address, options === null || options === void 0 ? void 0 : options.location);
                return [2 /*return*/, tokenId];
            });
        });
    };
    /**
     * Returns the domain that is the primary resolution of the provided address
     * @param address - owner's address
     * @returns Promise<URL> - domain URL that is the primary resolution of the provided addresss
     */
    Resolution.prototype.reverse = function (address, options) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reverseGetTokenId(address, options === null || options === void 0 ? void 0 : options.location)];
                    case 1:
                        tokenId = _a.sent();
                        if (tokenId) {
                            return [2 /*return*/, this.unhash(tokenId, publicTypes_1.NamingServiceName.UNS)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    Resolution.prototype.getMetadataFromTokenURI = function (tokenUri) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch(tokenUri, {})];
                    case 1:
                        resp = _d.sent();
                        if (resp.ok) {
                            return [2 /*return*/, resp.json()];
                        }
                        _a = resolutionError_1.default.bind;
                        _b = [void 0, resolutionError_1.ResolutionErrorCode.ServiceProviderError];
                        _c = {};
                        return [4 /*yield*/, resp.text()];
                    case 2: throw new (_a.apply(resolutionError_1.default, _b.concat([(_c.providerMessage = _d.sent(),
                            _c.method = 'UDAPI',
                            _c.methodName = 'tokenURIMetadata',
                            _c)])))();
                }
            });
        });
    };
    Resolution.prototype.getDnsRecordKeys = function (types) {
        var records = ['dns.ttl'];
        types.forEach(function (type) {
            records.push("dns.".concat(type));
            records.push("dns.".concat(type, ".ttl"));
        });
        return records;
    };
    Resolution.prototype.getPreferableNewRecord = function (domain, newRecord, oldRecord) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [newRecord, oldRecord])];
                    case 1:
                        records = _a.sent();
                        if (!records[newRecord] && !records[oldRecord]) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: newRecord,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, records[newRecord] || records[oldRecord]];
                }
            });
        });
    };
    Resolution.prototype.callServiceForDomain = function (domain, func) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceName, servicePromises, _i, servicePromises_1, servicePromise, serviceCallResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serviceName = (0, utils_1.findNamingServiceName)(domain);
                        if (!serviceName) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domain,
                            });
                        }
                        servicePromises = this.serviceMap[serviceName].usedServices.map(function (service) { return (0, utils_1.wrapResult)(function () { return func(service); }); });
                        _i = 0, servicePromises_1 = servicePromises;
                        _a.label = 1;
                    case 1:
                        if (!(_i < servicePromises_1.length)) return [3 /*break*/, 4];
                        servicePromise = servicePromises_1[_i];
                        return [4 /*yield*/, servicePromise];
                    case 2:
                        serviceCallResult = _a.sent();
                        if (serviceCallResult.error !== null) {
                            if (!(serviceCallResult.error instanceof resolutionError_1.default &&
                                serviceCallResult.error.code ===
                                    resolutionError_1.ResolutionErrorCode.UnregisteredDomain)) {
                                throw serviceCallResult.error;
                            }
                        }
                        else {
                            return [2 /*return*/, serviceCallResult.result];
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                        domain: domain,
                    });
                }
            });
        });
    };
    // Expects that a called method never throws the `ResolutionErrorCode.UnregisteredDomain` (it doesn't handle it).
    Resolution.prototype.callServiceForDomainBoolean = function (domain, func, options) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceName, servicePromises, _i, servicePromises_2, servicePromise, _a, result, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        serviceName = (0, utils_1.findNamingServiceName)(domain);
                        if (!serviceName) {
                            if (!options.throwIfUnsupportedDomain) {
                                return [2 /*return*/, !options.expectedValue];
                            }
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domain,
                            });
                        }
                        servicePromises = this.serviceMap[serviceName].usedServices.map(function (service) { return (0, utils_1.wrapResult)(function () { return func(service); }); });
                        _i = 0, servicePromises_2 = servicePromises;
                        _b.label = 1;
                    case 1:
                        if (!(_i < servicePromises_2.length)) return [3 /*break*/, 4];
                        servicePromise = servicePromises_2[_i];
                        return [4 /*yield*/, servicePromise];
                    case 2:
                        _a = _b.sent(), result = _a.result, error = _a.error;
                        if (error) {
                            if (!(error instanceof resolutionError_1.default &&
                                error.code === resolutionError_1.ResolutionErrorCode.UnregisteredDomain)) {
                                throw error;
                            }
                        }
                        else if (result === options.expectedValue) {
                            // If the result is not the one which is expected, we don't want to return it immediately.
                            return [2 /*return*/, result];
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, !options.expectedValue];
                }
            });
        });
    };
    Resolution.prototype.reverseGetTokenId = function (address, location) {
        return __awaiter(this, void 0, void 0, function () {
            var service, tokenId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = this.serviceMap['UNS'].native;
                        return [4 /*yield*/, service.reverseOf(address, location)];
                    case 1:
                        tokenId = _a.sent();
                        return [2 /*return*/, tokenId];
                }
            });
        });
    };
    return Resolution;
}());
exports.Resolution = Resolution;
exports.default = Resolution;
function isApi(obj) {
    return obj && obj.api;
}


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/UdApi.js":
/*!********************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/UdApi.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var znsUtils_1 = __webpack_require__(/*! ./utils/znsUtils */ "./node_modules/@unstoppabledomains/resolution/build/utils/znsUtils.js");
var resolutionError_1 = __webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js");
var TwitterSignatureValidator_1 = __webpack_require__(/*! ./utils/TwitterSignatureValidator */ "./node_modules/@unstoppabledomains/resolution/build/utils/TwitterSignatureValidator.js");
var publicTypes_1 = __webpack_require__(/*! ./types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var Networking_1 = __importDefault(__webpack_require__(/*! ./utils/Networking */ "./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var namehash_1 = __webpack_require__(/*! ./utils/namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
var NamingService_1 = __webpack_require__(/*! ./NamingService */ "./node_modules/@unstoppabledomains/resolution/build/NamingService.js");
/**
 * @internal
 */
var UdApi = /** @class */ (function (_super) {
    __extends(UdApi, _super);
    function UdApi(api) {
        var _this = _super.call(this) || this;
        _this.name = 'UDAPI';
        _this.url = (api === null || api === void 0 ? void 0 : api.url) || 'https://unstoppabledomains.com/api/v1';
        var DefaultUserAgent = 'cross-fetch/3.1.4 (+https://github.com/lquixada/cross-fetch)';
        var CustomUserAgent = "".concat(DefaultUserAgent, " Resolution");
        _this.headers = { 'X-user-agent': CustomUserAgent };
        _this.network = (api === null || api === void 0 ? void 0 : api.network) || 1;
        return _this;
    }
    UdApi.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'isSupportedDomain',
                });
            });
        });
    };
    UdApi.prototype.namehash = function (domain) {
        throw new Error('Unsupported method when using UD Resolution API');
    };
    UdApi.prototype.childhash = function (parentHash, label) {
        throw new Error('Unsupported method when using UD Resolution API');
    };
    UdApi.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1: return [2 /*return*/, (_a.sent())[key]];
                }
            });
        });
    };
    UdApi.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allRecords(domain)];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, (0, utils_1.constructRecords)(keys, records)];
                }
            });
        });
    };
    UdApi.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, owner, blockchain;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        response = _b.sent();
                        _a = response.meta, owner = _a.owner, blockchain = _a.blockchain;
                        if (!owner) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        if (blockchain === publicTypes_1.BlockchainType.ZIL && !owner.startsWith('zil1')) {
                            return [2 /*return*/, (0, znsUtils_1.toBech32Address)(owner)];
                        }
                        return [2 /*return*/, owner];
                }
            });
        });
    };
    UdApi.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceName, domainMetaData, owner, records, validationSignature, twitterHandle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serviceName = (0, utils_1.findNamingServiceName)(domain);
                        if (serviceName !== publicTypes_1.NamingServiceName.UNS) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                                domain: domain,
                                methodName: 'twitter',
                            });
                        }
                        return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        domainMetaData = _a.sent();
                        if (!domainMetaData.meta.owner) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        owner = domainMetaData.meta.owner;
                        records = domainMetaData.records || {};
                        validationSignature = records['validation.social.twitter.username'];
                        twitterHandle = records['social.twitter.username'];
                        if (!validationSignature) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: 'validation.social.twitter.username',
                                domain: domain,
                            });
                        }
                        if (!twitterHandle) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: 'social.twitter.username',
                                domain: domain,
                            });
                        }
                        if (!(0, TwitterSignatureValidator_1.isValidTwitterSignature)({
                            tokenId: domainMetaData.meta.namehash,
                            owner: owner,
                            twitterHandle: twitterHandle,
                            validationSignature: validationSignature,
                        })) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.InvalidTwitterVerification, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, twitterHandle];
                }
            });
        });
    };
    UdApi.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).records || {}];
                }
            });
        });
    };
    UdApi.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = (0, namehash_1.fromDecStringToHex)(tokenId);
                        return [4 /*yield*/, this.getMetadata(tokenId)];
                    case 1:
                        metadata = _a.sent();
                        return [2 /*return*/, metadata.meta.domain];
                }
            });
        });
    };
    UdApi.prototype.getMetadata = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri, resp, metadata, namehash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenUri = "".concat(this.url, "/").concat(tokenId);
                        return [4 /*yield*/, Networking_1.default.fetch(tokenUri, {}).catch(function (err) {
                                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.MetadataEndpointError, {
                                    tokenUri: tokenUri || 'undefined',
                                    errorMessage: err.message,
                                });
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        metadata = _a.sent();
                        if (!metadata.meta || !metadata.meta.domain) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: "with tokenId ".concat(tokenId),
                            });
                        }
                        namehash = metadata.meta.blockchain === publicTypes_1.BlockchainType.ZIL
                            ? (0, namehash_1.znsNamehash)(metadata.meta.domain)
                            : (0, namehash_1.eip137Namehash)(metadata.meta.domain);
                        if (namehash !== tokenId) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                methodName: 'unhash',
                                domain: metadata.meta.domain,
                                providerMessage: 'Service provider returned an invalid domain name',
                            });
                        }
                        return [2 /*return*/, metadata];
                }
            });
        });
    };
    UdApi.prototype.resolve = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch("".concat(this.url, "/").concat(domain), {
                            method: 'GET',
                            headers: this.headers,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    UdApi.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, record.meta.resolver];
                }
            });
        });
    };
    UdApi.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    UdApi.prototype.reverseOf = function (address, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverseOf',
                });
            });
        });
    };
    UdApi.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, !(0, utils_1.isNullAddress)(record.meta.owner)];
                }
            });
        });
    };
    UdApi.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getTokenUri',
                });
            });
        });
    };
    UdApi.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    UdApi.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'registryAddress',
                });
            });
        });
    };
    UdApi.prototype.locations = function (domains) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'locations',
                });
            });
        });
    };
    return UdApi;
}(NamingService_1.NamingService));
exports.default = UdApi;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/Uns.js":
/*!******************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/Uns.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@unstoppabledomains/resolution/build/types/index.js");
var resolutionError_1 = __importStar(__webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var publicTypes_1 = __webpack_require__(/*! ./types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var TwitterSignatureValidator_1 = __webpack_require__(/*! ./utils/TwitterSignatureValidator */ "./node_modules/@unstoppabledomains/resolution/build/utils/TwitterSignatureValidator.js");
var FetchProvider_1 = __importDefault(__webpack_require__(/*! ./FetchProvider */ "./node_modules/@unstoppabledomains/resolution/build/FetchProvider.js"));
var namehash_1 = __webpack_require__(/*! ./utils/namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
var NamingService_1 = __webpack_require__(/*! ./NamingService */ "./node_modules/@unstoppabledomains/resolution/build/NamingService.js");
var configurationError_1 = __importStar(__webpack_require__(/*! ./errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js"));
var UnsInternal_1 = __importDefault(__webpack_require__(/*! ./UnsInternal */ "./node_modules/@unstoppabledomains/resolution/build/UnsInternal.js"));
var Networking_1 = __importDefault(__webpack_require__(/*! ./utils/Networking */ "./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js"));
var resolver_keys_json_1 = __importDefault(__webpack_require__(/*! ./config/resolver-keys.json */ "./node_modules/@unstoppabledomains/resolution/build/config/resolver-keys.json"));
/**
 * @internal
 */
var Uns = /** @class */ (function (_super) {
    __extends(Uns, _super);
    function Uns(source) {
        var _this = _super.call(this) || this;
        _this.name = publicTypes_1.NamingServiceName.UNS;
        if (source &&
            source.locations &&
            (!source.locations.Layer1 || !source.locations.Layer2)) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.NetworkConfigMissing, {
                method: publicTypes_1.NamingServiceName.UNS,
                config: !source.locations.Layer1 ? 'Layer1' : 'Layer2',
            });
        }
        if (!source) {
            source = {
                locations: {
                    Layer1: {
                        url: UnsInternal_1.default.UrlMap['mainnet'],
                        network: 'mainnet',
                    },
                    Layer2: {
                        url: UnsInternal_1.default.UrlMap['polygon-mainnet'],
                        network: 'polygon-mainnet',
                    },
                },
            };
        }
        _this.unsl1 = new UnsInternal_1.default(publicTypes_1.UnsLocation.Layer1, source.locations.Layer1, publicTypes_1.BlockchainType.ETH);
        _this.unsl2 = new UnsInternal_1.default(publicTypes_1.UnsLocation.Layer2, source.locations.Layer2, publicTypes_1.BlockchainType.MATIC);
        return _this;
    }
    Uns.autoNetwork = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var providerLayer1, providerLayer2, networkIdLayer1, networkIdLayer2, networkNameLayer1, networkNameLayer2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((0, types_1.hasProvider)(config.locations.Layer1) &&
                            (0, types_1.hasProvider)(config.locations.Layer2)) {
                            providerLayer1 = config.locations.Layer1.provider;
                            providerLayer2 = config.locations.Layer2.provider;
                        }
                        else {
                            if (!config.locations.Layer1['url'] || !config.locations.Layer2['url']) {
                                throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnspecifiedUrl, {
                                    method: publicTypes_1.NamingServiceName.UNS,
                                });
                            }
                            providerLayer1 = FetchProvider_1.default.factory(publicTypes_1.NamingServiceName.UNS, config.locations.Layer1['url']);
                            providerLayer2 = FetchProvider_1.default.factory(publicTypes_1.NamingServiceName.UNS, config.locations.Layer2['url']);
                        }
                        return [4 /*yield*/, providerLayer1.request({
                                method: 'net_version',
                            })];
                    case 1:
                        networkIdLayer1 = (_a.sent());
                        return [4 /*yield*/, providerLayer2.request({
                                method: 'net_version',
                            })];
                    case 2:
                        networkIdLayer2 = (_a.sent());
                        networkNameLayer1 = utils_1.EthereumNetworksInverted[networkIdLayer1];
                        networkNameLayer2 = utils_1.EthereumNetworksInverted[networkIdLayer2];
                        if (!networkNameLayer1 ||
                            !types_1.UnsSupportedNetwork.guard(networkNameLayer1) ||
                            !networkNameLayer2 ||
                            !types_1.UnsSupportedNetwork.guard(networkNameLayer2)) {
                            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                                method: publicTypes_1.NamingServiceName.UNS,
                            });
                        }
                        return [2 /*return*/, new this({
                                locations: {
                                    Layer1: { network: networkNameLayer1, provider: providerLayer1 },
                                    Layer2: { network: networkNameLayer2, provider: providerLayer2 },
                                },
                            })];
                }
            });
        });
    };
    Uns.prototype.namehash = function (domain) {
        if (!this.checkDomain(domain)) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return (0, namehash_1.eip137Namehash)(domain);
    };
    Uns.prototype.childhash = function (parentHash, label) {
        return (0, namehash_1.eip137Childhash)(parentHash, label);
    };
    Uns.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tld, _a, existsL1, existsL2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.checkDomain(domain)) {
                            return [2 /*return*/, false];
                        }
                        tld = domain.split('.').pop();
                        if (!tld) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, Promise.all([
                                this.unsl1.exists(tld),
                                this.unsl2.exists(tld),
                            ])];
                    case 1:
                        _a = _b.sent(), existsL1 = _a[0], existsL2 = _a[1];
                        return [2 /*return*/, existsL1 || existsL2];
                }
            });
        });
    };
    Uns.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, [])];
                    case 1:
                        data = _a.sent();
                        if ((0, utils_1.isNullAddress)(data.owner)) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, data.owner];
                }
            });
        });
    };
    Uns.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).resolver];
                }
            });
        });
    };
    Uns.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var returnee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1:
                        returnee = (_a.sent())[key];
                        if (!returnee) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: key,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, returnee];
                }
            });
        });
    };
    Uns.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain, keys)];
                    case 1: return [2 /*return*/, (_a.sent()).records];
                }
            });
        });
    };
    Uns.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.getMetadata(tokenId)];
                    case 1:
                        metadata = _a.sent();
                        return [2 /*return*/, this.records(domain, __spreadArray(__spreadArray([], Object.keys(resolver_keys_json_1.default.keys), true), Object.keys(metadata.properties.records), true))];
                }
            });
        });
    };
    Uns.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, keys, data, records, location, validationSignature, twitterHandle, owner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        keys = [
                            'validation.social.twitter.username',
                            'social.twitter.username',
                        ];
                        return [4 /*yield*/, this.getVerifiedData(domain, keys)];
                    case 1:
                        data = _a.sent();
                        records = data.records, location = data.location;
                        validationSignature = records['validation.social.twitter.username'];
                        twitterHandle = records['social.twitter.username'];
                        if ((0, utils_1.isNullAddress)(validationSignature)) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                location: location,
                                recordName: 'validation.social.twitter.username',
                            });
                        }
                        if (!twitterHandle) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                location: location,
                                recordName: 'social.twitter.username',
                            });
                        }
                        owner = data.owner;
                        if (!(0, TwitterSignatureValidator_1.isValidTwitterSignature)({
                            tokenId: tokenId,
                            owner: owner,
                            twitterHandle: twitterHandle,
                            validationSignature: validationSignature,
                        })) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.InvalidTwitterVerification, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, twitterHandle];
                }
            });
        });
    };
    Uns.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    Uns.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, [])];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, !(0, utils_1.isNullAddress)(data.owner)];
                }
            });
        });
    };
    Uns.prototype.getTokenUri = function (tokenId) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, result, tokenUri, e_1_1;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 11]);
                        _b = __asyncValues([
                            (0, utils_1.wrapResult)(function () { return _this.unsl2.getTokenUri(tokenId); }),
                            (0, utils_1.wrapResult)(function () { return _this.unsl1.getTokenUri(tokenId); }),
                        ]);
                        _d.label = 1;
                    case 1: return [4 /*yield*/, _b.next()];
                    case 2:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 4];
                        result = _c.value;
                        tokenUri = (0, utils_1.unwrapResult)(result);
                        if (tokenUri) {
                            return [2 /*return*/, tokenUri];
                        }
                        _d.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 11];
                    case 6:
                        _d.trys.push([6, , 9, 10]);
                        if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 8];
                        return [4 /*yield*/, _a.call(_b)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 10: return [7 /*endfinally*/];
                    case 11: 
                    // Note: if a token doesn't exist, ProxyReader returns an empty string. If both responses are empty,
                    // we know for sure that the domain isn't registered.
                    throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                        domain: "with tokenId ".concat(tokenId),
                    });
                }
            });
        });
    };
    Uns.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Uns.prototype.registryAddress = function (domainOrNamehash) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, resultOrErrorL1, resultOrErrorL2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.unsl1.registryAddress(domainOrNamehash).catch(function (err) { return err; }),
                            this.unsl2.registryAddress(domainOrNamehash).catch(function (err) { return err; }),
                        ])];
                    case 1:
                        _a = _b.sent(), resultOrErrorL1 = _a[0], resultOrErrorL2 = _a[1];
                        if (resultOrErrorL2 instanceof Error) {
                            validResolutionErrorOrThrow(resultOrErrorL2, resolutionError_1.ResolutionErrorCode.UnregisteredDomain);
                        }
                        else if (!(0, utils_1.isNullAddress)(resultOrErrorL2)) {
                            return [2 /*return*/, resultOrErrorL2];
                        }
                        return [2 /*return*/, validResultOrThrow(resultOrErrorL1)];
                }
            });
        });
    };
    Uns.prototype.locations = function (domains) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, resultL1, resultL2, nonEmptyRecordsFromL2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.unsl1.locations(domains),
                            this.unsl2.locations(domains),
                        ])];
                    case 1:
                        _a = _b.sent(), resultL1 = _a[0], resultL2 = _a[1];
                        nonEmptyRecordsFromL2 = Object.keys(resultL2)
                            .filter(function (k) { return resultL2[k] != null; })
                            .reduce(function (a, k) {
                            var _a;
                            return (__assign(__assign({}, a), (_a = {}, _a[k] = resultL2[k], _a)));
                        }, {});
                        return [2 /*return*/, __assign(__assign({}, resultL1), nonEmptyRecordsFromL2)];
                }
            });
        });
    };
    Uns.prototype.reverseOf = function (addr, location) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, resultOrErrorL1, resultOrErrorL2, reverseL1, reverseL2, reversedL1, reversedL2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.unsl1.reverseOf(addr).catch(function (err) { return err; }),
                            this.unsl2.reverseOf(addr).catch(function (err) { return err; }),
                        ])];
                    case 1:
                        _a = _b.sent(), resultOrErrorL1 = _a[0], resultOrErrorL2 = _a[1];
                        reverseL1 = function () {
                            validResultOrThrow(resultOrErrorL1);
                            if (resultOrErrorL1._hex !== '0x00') {
                                return (0, namehash_1.fromHexStringToDecimals)(resultOrErrorL1._hex);
                            }
                            else {
                                return null;
                            }
                        };
                        reverseL2 = function () {
                            validResultOrThrow(resultOrErrorL2);
                            if (resultOrErrorL2._hex !== '0x00') {
                                return (0, namehash_1.fromHexStringToDecimals)(resultOrErrorL2._hex);
                            }
                            else {
                                return null;
                            }
                        };
                        if (location === publicTypes_1.UnsLocation.Layer1) {
                            return [2 /*return*/, reverseL1()];
                        }
                        if (location === publicTypes_1.UnsLocation.Layer2) {
                            return [2 /*return*/, reverseL2()];
                        }
                        reversedL1 = reverseL1();
                        if (reversedL1) {
                            return [2 /*return*/, reversedL1];
                        }
                        reversedL2 = reverseL2();
                        if (reversedL2) {
                            return [2 /*return*/, reversedL2];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    Uns.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMetadata(tokenId)];
                    case 1:
                        metadata = _a.sent();
                        if (this.namehash(metadata.name) !== tokenId) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                methodName: 'unhash',
                                domain: metadata.name,
                                providerMessage: 'Service provider returned an invalid domain name',
                            });
                        }
                        return [2 /*return*/, metadata.name];
                }
            });
        });
    };
    Uns.prototype.getMetadata = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri, resp, metadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTokenUri(tokenId)];
                    case 1:
                        tokenUri = _a.sent();
                        return [4 /*yield*/, Networking_1.default.fetch(tokenUri, {}).catch(function (err) {
                                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.MetadataEndpointError, {
                                    tokenUri: tokenUri || 'undefined',
                                    errorMessage: err.message,
                                });
                            })];
                    case 2:
                        resp = _a.sent();
                        if (!resp.ok) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.MetadataEndpointError, {
                                tokenUri: tokenUri || 'undefined',
                            });
                        }
                        return [4 /*yield*/, resp.json()];
                    case 3:
                        metadata = _a.sent();
                        if (!metadata.name) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: "with tokenId ".concat(tokenId),
                            });
                        }
                        if (this.namehash(metadata.name) !== tokenId) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                methodName: 'unhash',
                                domain: metadata.name,
                                providerMessage: 'Service provider returned an invalid domain name',
                            });
                        }
                        return [2 /*return*/, metadata];
                }
            });
        });
    };
    Uns.prototype.getVerifiedData = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, keys)];
                    case 1:
                        data = _a.sent();
                        if ((0, utils_1.isNullAddress)(data.resolver)) {
                            if ((0, utils_1.isNullAddress)(data.owner)) {
                                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                    domain: domain,
                                });
                            }
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                location: data.location,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Uns.prototype.get = function (tokenId, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, resultOrErrorL1, resultOrErrorL2, resolverL2, ownerL2, recordsL2, resolverL1, ownerL1, recordsL1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.unsl1.get(tokenId, keys).catch(function (err) { return err; }),
                            this.unsl2.get(tokenId, keys).catch(function (err) { return err; }),
                        ])];
                    case 1:
                        _a = _b.sent(), resultOrErrorL1 = _a[0], resultOrErrorL2 = _a[1];
                        validResultOrThrow(resultOrErrorL2);
                        resolverL2 = resultOrErrorL2.resolver, ownerL2 = resultOrErrorL2.owner, recordsL2 = resultOrErrorL2.records;
                        if (!(0, utils_1.isNullAddress)(ownerL2)) {
                            return [2 /*return*/, {
                                    resolver: resolverL2,
                                    owner: ownerL2,
                                    records: (0, utils_1.constructRecords)(keys, recordsL2),
                                    location: publicTypes_1.UnsLocation.Layer2,
                                }];
                        }
                        validResultOrThrow(resultOrErrorL1);
                        resolverL1 = resultOrErrorL1.resolver, ownerL1 = resultOrErrorL1.owner, recordsL1 = resultOrErrorL1.records;
                        return [2 /*return*/, {
                                resolver: resolverL1,
                                owner: ownerL1,
                                records: (0, utils_1.constructRecords)(keys, recordsL1),
                                location: publicTypes_1.UnsLocation.Layer1,
                            }];
                }
            });
        });
    };
    Uns.prototype.checkDomain = function (domain, passIfTokenID) {
        if (passIfTokenID === void 0) { passIfTokenID = false; }
        if (passIfTokenID) {
            return true;
        }
        var tokens = domain.split('.');
        return (!!tokens.length &&
            !(domain === 'eth' ||
                /^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(domain)) &&
            tokens.every(function (v) { return !!v.length; }));
    };
    return Uns;
}(NamingService_1.NamingService));
exports.default = Uns;
function validResultOrThrow(resultOrError) {
    if (resultOrError instanceof Error) {
        throw resultOrError;
    }
    return resultOrError;
}
function validResolutionErrorOrThrow(error, validCode) {
    if (!(error instanceof resolutionError_1.default)) {
        throw error;
    }
    if (error.code === validCode) {
        return true;
    }
    throw error;
}


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/UnsInternal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/UnsInternal.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@unstoppabledomains/resolution/build/types/index.js");
var configurationError_1 = __importDefault(__webpack_require__(/*! ./errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js"));
var configurationError_2 = __webpack_require__(/*! ./errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var FetchProvider_1 = __importDefault(__webpack_require__(/*! ./FetchProvider */ "./node_modules/@unstoppabledomains/resolution/build/FetchProvider.js"));
var EthereumContract_1 = __importDefault(__webpack_require__(/*! ./contracts/EthereumContract */ "./node_modules/@unstoppabledomains/resolution/build/contracts/EthereumContract.js"));
var proxyReader_1 = __importDefault(__webpack_require__(/*! ./contracts/uns/proxyReader */ "./node_modules/@unstoppabledomains/resolution/build/contracts/uns/proxyReader.js"));
var uns_config_json_1 = __importDefault(__webpack_require__(/*! ./config/uns-config.json */ "./node_modules/@unstoppabledomains/resolution/build/config/uns-config.json"));
var resolutionError_1 = __importStar(__webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
var namehash_1 = __webpack_require__(/*! ./utils/namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
var UnsInternal = /** @class */ (function () {
    function UnsInternal(unsLocation, source, blockchain) {
        this.unsLocation = unsLocation;
        this.checkNetworkConfig(unsLocation, source);
        this.network = source.network;
        this.blockchain = blockchain;
        this.url = source['url'] || UnsInternal.UrlMap[this.network];
        this.provider =
            source['provider'] || new FetchProvider_1.default(this.unsLocation, this.url);
        this.readerContract = new EthereumContract_1.default(proxyReader_1.default, source.proxyReaderAddress ||
            UnsInternal.ProxyReaderMap[utils_1.EthereumNetworks[this.network]], this.provider);
    }
    UnsInternal.prototype.exists = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('exists', [
                            this.namehash(domain),
                        ])];
                    case 1:
                        exists = (_a.sent())[0];
                        return [2 /*return*/, exists];
                }
            });
        });
    };
    UnsInternal.prototype.reverseOf = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var reverseHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('reverseOf', [addr])];
                    case 1:
                        reverseHash = (_a.sent())[0];
                        return [2 /*return*/, reverseHash];
                }
            });
        });
    };
    UnsInternal.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenURI;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('tokenURI', [tokenId])];
                    case 1:
                        tokenURI = (_a.sent())[0];
                        return [2 /*return*/, tokenURI];
                }
            });
        });
    };
    UnsInternal.prototype.registryAddress = function (domainOrNamehash) {
        return __awaiter(this, void 0, void 0, function () {
            var isNamehash, namehash, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isNamehash = !domainOrNamehash.includes('.');
                        if (!this.checkDomain(domainOrNamehash, isNamehash)) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domainOrNamehash,
                            });
                        }
                        namehash = isNamehash
                            ? domainOrNamehash
                            : this.namehash(domainOrNamehash);
                        return [4 /*yield*/, this.readerContract.call('registryOf', [namehash])];
                    case 1:
                        address = (_a.sent())[0];
                        if ((0, utils_1.isNullAddress)(address)) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domainOrNamehash,
                            });
                        }
                        return [2 /*return*/, address];
                }
            });
        });
    };
    UnsInternal.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).resolver];
                }
            });
        });
    };
    UnsInternal.prototype.get = function (tokenId, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, resolver, owner, values;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('getData', [keys, tokenId])];
                    case 1:
                        _a = _b.sent(), resolver = _a[0], owner = _a[1], values = _a[2];
                        return [2 /*return*/, {
                                owner: owner,
                                resolver: resolver,
                                records: (0, utils_1.constructRecords)(keys, values),
                                location: this.unsLocation,
                            }];
                }
            });
        });
    };
    UnsInternal.prototype.locations = function (domains) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenIds, _a, _b, resolvers, owners, registries, locations;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tokenIds = domains.map(function (d) { return _this.namehash(d); });
                        return [4 /*yield*/, this.readerContract.multicall(__spreadArray([
                                {
                                    method: 'getDataForMany',
                                    args: [[], tokenIds],
                                }
                            ], tokenIds.map(function (id) { return ({
                                method: 'registryOf',
                                args: [id],
                            }); }), true))];
                    case 1:
                        _a = _c.sent(), _b = _a[0], resolvers = _b[0], owners = _b[1], registries = _a.slice(1);
                        locations = domains.reduce(function (locations, domain, i) {
                            locations[domain] = null;
                            if (owners && owners[i] !== types_1.NullAddress) {
                                locations[domain] = {
                                    resolverAddress: resolvers[i],
                                    registryAddress: registries[i][0],
                                    ownerAddress: owners[i],
                                    networkId: utils_1.EthereumNetworks[_this.network],
                                    blockchain: _this.blockchain,
                                    blockchainProviderUrl: _this.url,
                                };
                            }
                            return locations;
                        }, {});
                        return [2 /*return*/, locations];
                }
            });
        });
    };
    UnsInternal.prototype.namehash = function (domain) {
        if (!this.checkDomain(domain)) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return (0, namehash_1.eip137Namehash)(domain);
    };
    UnsInternal.prototype.checkDomain = function (domain, passIfTokenID) {
        if (passIfTokenID === void 0) { passIfTokenID = false; }
        if (passIfTokenID) {
            return true;
        }
        var tokens = domain.split('.');
        return (!!tokens.length &&
            !(domain === 'eth' ||
                /^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(domain)) &&
            tokens.every(function (v) { return !!v.length; }));
    };
    UnsInternal.prototype.getVerifiedData = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, keys)];
                    case 1:
                        data = _a.sent();
                        if ((0, utils_1.isNullAddress)(data.resolver)) {
                            if ((0, utils_1.isNullAddress)(data.owner)) {
                                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                    domain: domain,
                                });
                            }
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                location: this.unsLocation,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    UnsInternal.prototype.checkNetworkConfig = function (location, source) {
        if (!source.network) {
            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.UnsupportedNetwork, {
                method: location,
            });
        }
        if (source.proxyReaderAddress &&
            !this.isValidProxyReader(source.proxyReaderAddress)) {
            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.unsLocation,
                field: 'proxyReaderAddress',
            });
        }
        if (!types_1.UnsSupportedNetwork.guard(source.network)) {
            this.checkCustomNetworkConfig(source);
        }
    };
    UnsInternal.prototype.checkCustomNetworkConfig = function (source) {
        if (!this.isValidProxyReader(source.proxyReaderAddress)) {
            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.unsLocation,
                field: 'proxyReaderAddress',
            });
        }
        if (!source['url'] && !source['provider']) {
            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.unsLocation,
                config: 'url or provider',
            });
        }
    };
    UnsInternal.prototype.isValidProxyReader = function (address) {
        if (!address) {
            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.unsLocation,
                config: 'proxyReaderAddress',
            });
        }
        var ethLikePattern = new RegExp('^0x[a-fA-F0-9]{40}$');
        return ethLikePattern.test(address);
    };
    UnsInternal.ProxyReaderMap = getProxyReaderMap();
    UnsInternal.UrlMap = {
        mainnet: 'https://eth-mainnet.alchemyapi.io/v2/GmQ8X1FHf-WDEry0BBSn0RgjVhjHkRmS',
        rinkeby: 'https://eth-rinkeby.alchemyapi.io/v2/ZDERxOLIj120dh2-Io2Q9RTh9RfWEssT',
        goerli: 'https://eth-goerli.alchemyapi.io/v2/J-ff_OlmWzw41ocqwpkRccHdfqSZML4q',
        'polygon-mainnet': 'https://polygon-mainnet.g.alchemy.com/v2/iG-oHZ2FvjqC9D43O5q9sj62out5ubsy',
        'polygon-mumbai': 'https://polygon-mumbai.g.alchemy.com/v2/YtQwLH1UOmRGgQp_Rg1TXvFWSWeV5Y02',
    };
    return UnsInternal;
}());
exports.default = UnsInternal;
function getProxyReaderMap() {
    var map = {};
    for (var _i = 0, _a = Object.keys(uns_config_json_1.default.networks); _i < _a.length; _i++) {
        var id = _a[_i];
        map[id] =
            uns_config_json_1.default.networks[id].contracts.ProxyReader.address.toLowerCase();
    }
    return map;
}


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/Zns.js":
/*!******************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/Zns.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var znsUtils_1 = __webpack_require__(/*! ./utils/znsUtils */ "./node_modules/@unstoppabledomains/resolution/build/utils/znsUtils.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@unstoppabledomains/resolution/build/types/index.js");
var resolutionError_1 = __webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js");
var publicTypes_1 = __webpack_require__(/*! ./types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var FetchProvider_1 = __importDefault(__webpack_require__(/*! ./FetchProvider */ "./node_modules/@unstoppabledomains/resolution/build/FetchProvider.js"));
var namehash_1 = __webpack_require__(/*! ./utils/namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
var NamingService_1 = __webpack_require__(/*! ./NamingService */ "./node_modules/@unstoppabledomains/resolution/build/NamingService.js");
var configurationError_1 = __importStar(__webpack_require__(/*! ./errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js"));
/**
 * @internal
 */
var Zns = /** @class */ (function (_super) {
    __extends(Zns, _super);
    function Zns(source) {
        if (source === void 0) { source = {
            url: Zns.UrlMap[1],
            network: 'mainnet',
        }; }
        var _this = _super.call(this) || this;
        _this.name = publicTypes_1.NamingServiceName.ZNS;
        _this.checkNetworkConfig(source);
        _this.network = Zns.NetworkNameMap[source.network];
        _this.url = source['url'] || Zns.UrlMap[_this.network];
        _this.provider =
            source['provider'] || new FetchProvider_1.default(_this.name, _this.url);
        _this.registryAddr =
            source['registryAddress'] || Zns.RegistryMap[_this.network];
        _this.checkRegistryAddress(_this.registryAddr);
        if (_this.registryAddr.startsWith('0x')) {
            _this.registryAddr = (0, znsUtils_1.toBech32Address)(_this.registryAddr);
        }
        return _this;
    }
    Zns.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordAddresses, ownerAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordAddresses = _a.sent();
                        if (!recordAddresses) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        ownerAddress = recordAddresses[0];
                        if (!ownerAddress) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, ownerAddress];
                }
            });
        });
    };
    Zns.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordsAddresses, resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordsAddresses = _a.sent();
                        if (!recordsAddresses || !recordsAddresses[0]) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        resolverAddress = recordsAddresses[1];
                        if ((0, utils_1.isNullAddress)(resolverAddress)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, resolverAddress];
                }
            });
        });
    };
    Zns.prototype.namehash = function (domain) {
        if (!this.checkDomain(domain)) {
            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return (0, namehash_1.znsNamehash)(domain);
    };
    Zns.prototype.childhash = function (parentHash, label) {
        return (0, namehash_1.znsChildhash)(parentHash, label);
    };
    Zns.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.checkDomain(domain)];
            });
        });
    };
    Zns.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var records, record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1:
                        records = _a.sent();
                        record = records[key];
                        if (!record) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                recordName: key,
                            });
                        }
                        return [2 /*return*/, record];
                }
            });
        });
    };
    Zns.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allRecords(domain)];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, (0, utils_1.constructRecords)(keys, records)];
                }
            });
        });
    };
    Zns.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolver(domain)];
                    case 1:
                        resolverAddress = _a.sent();
                        return [2 /*return*/, this.getResolverRecords(resolverAddress)];
                }
            });
        });
    };
    Zns.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'twitter',
                });
            });
        });
    };
    Zns.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    Zns.prototype.reverseOf = function (address, location) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverseOf',
                });
            });
        });
    };
    Zns.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordAddresses = _a.sent();
                        return [2 /*return*/, Boolean(recordAddresses && recordAddresses[0])];
                }
            });
        });
    };
    Zns.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getTokenUri',
                });
            });
        });
    };
    Zns.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getDomainFromTokenId',
                });
            });
        });
    };
    Zns.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Zns.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.registryAddr];
            });
        });
    };
    Zns.prototype.locations = function (domains) {
        return __awaiter(this, void 0, void 0, function () {
            var recordsAddresses;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(domains.map(function (domain) { return _this.getRecordsAddresses(domain); }))];
                    case 1:
                        recordsAddresses = _a.sent();
                        return [2 /*return*/, domains.reduce(function (locations, domain, i) {
                                var _a;
                                var location = null;
                                var domainRecordsAddresses = recordsAddresses[i];
                                if (domainRecordsAddresses) {
                                    var ownerAddress = domainRecordsAddresses[0], resolverAddress = domainRecordsAddresses[1];
                                    location = {
                                        registryAddress: _this.registryAddr,
                                        resolverAddress: resolverAddress,
                                        networkId: _this.network,
                                        blockchain: publicTypes_1.BlockchainType.ZIL,
                                        ownerAddress: ownerAddress,
                                        blockchainProviderUrl: _this.url,
                                    };
                                }
                                return __assign(__assign({}, locations), (_a = {}, _a[domain] = location, _a));
                            }, {})];
                }
            });
        });
    };
    Zns.prototype.getRecordsAddresses = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var registryRecord, _a, ownerAddress, resolverAddress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isSupportedDomain(domain)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domain,
                            });
                        }
                        return [4 /*yield*/, this.getContractMapValue(this.registryAddr, 'records', this.namehash(domain))];
                    case 1:
                        registryRecord = _b.sent();
                        if (!registryRecord) {
                            return [2 /*return*/, undefined];
                        }
                        _a = registryRecord.arguments, ownerAddress = _a[0], resolverAddress = _a[1];
                        return [2 /*return*/, [
                                ownerAddress.startsWith('0x')
                                    ? (0, znsUtils_1.toBech32Address)(ownerAddress)
                                    : ownerAddress,
                                resolverAddress,
                            ]];
                }
            });
        });
    };
    Zns.prototype.getResolverRecords = function (resolverAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((0, utils_1.isNullAddress)(resolverAddress)) {
                            return [2 /*return*/, {}];
                        }
                        resolver = (0, znsUtils_1.toChecksumAddress)(resolverAddress);
                        return [4 /*yield*/, this.getContractField(resolver, 'records')];
                    case 1: return [2 /*return*/, ((_a.sent()) ||
                            {})];
                }
            });
        });
    };
    Zns.prototype.fetchSubState = function (contractAddress, field, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var params, method;
            return __generator(this, function (_a) {
                params = [contractAddress.replace('0x', ''), field, keys];
                method = 'GetSmartContractSubState';
                return [2 /*return*/, this.provider.request({ method: method, params: params })];
            });
        });
    };
    Zns.prototype.getContractField = function (contractAddress, field, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var contractAddr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contractAddr = contractAddress.startsWith('zil1')
                            ? (0, znsUtils_1.fromBech32Address)(contractAddress)
                            : contractAddress;
                        return [4 /*yield*/, this.fetchSubState(contractAddr, field, keys)];
                    case 1:
                        result = (_a.sent()) || {};
                        return [2 /*return*/, result[field]];
                }
            });
        });
    };
    Zns.prototype.getContractMapValue = function (contractAddress, field, key) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContractField(contractAddress, field, [key])];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, (record && record[key]) || null];
                }
            });
        });
    };
    Zns.prototype.checkDomain = function (domain) {
        var tokens = domain.split('.');
        return (!!tokens.length &&
            tokens[tokens.length - 1] === 'zil' &&
            tokens.every(function (v) { return !!v.length; }));
    };
    Zns.prototype.checkNetworkConfig = function (source) {
        if (!source.network) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                method: publicTypes_1.NamingServiceName.ZNS,
            });
        }
        if (!types_1.ZnsSupportedNetwork.guard(source.network)) {
            this.checkCustomNetworkConfig(source);
        }
    };
    Zns.prototype.checkRegistryAddress = function (address) {
        // Represents both versions of Zilliqa addresses eth-like and bech32 zil-like
        var addressValidator = new RegExp('^0x[a-fA-F0-9]{40}$|^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$');
        if (!addressValidator.test(address)) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.name,
                field: 'registryAddress',
            });
        }
    };
    Zns.prototype.checkCustomNetworkConfig = function (source) {
        if (!source.registryAddress) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: publicTypes_1.NamingServiceName.ZNS,
                config: 'registryAddress',
            });
        }
        if (!source['url'] && !source['provider']) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: publicTypes_1.NamingServiceName.ZNS,
                config: 'url or provider',
            });
        }
    };
    Zns.UrlMap = {
        1: 'https://api.zilliqa.com',
        333: 'https://dev-api.zilliqa.com',
        111: 'http://localhost:4201',
    };
    Zns.NetworkNameMap = {
        mainnet: 1,
        testnet: 333,
        localnet: 111,
    };
    Zns.RegistryMap = {
        1: 'zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz',
        333: 'zil1hyj6m5w4atcn7s806s69r0uh5g4t84e8gp6nps',
    };
    return Zns;
}(NamingService_1.NamingService));
exports.default = Zns;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/config/resolver-keys.json":
/*!*************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/config/resolver-keys.json ***!
  \*************************************************************************************/
/*! exports provided: version, information, keys, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2.1.1\",\"information\":{\"description\":\"This file desribes all resolver keys with a defined meaning and related metadata used by Unstoppable Domains UNS Registry\",\"documentation\":\"https://docs.unstoppabledomains.com/domain-registry-essentials/records-reference\",\"contribution\":\"https://github.com/unstoppabledomains/uns/blob/main/resolver-keys.json\"},\"keys\":{\"crypto.BTC.address\":{\"deprecatedKeyName\":\"BTC\",\"deprecated\":false,\"validationRegex\":\"^bc1[ac-hj-np-z02-9]{6,87}$|^[13][a-km-zA-HJ-NP-Z1-9]{25,39}$\"},\"crypto.ETH.address\":{\"deprecatedKeyName\":\"ETH\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.ZIL.address\":{\"deprecatedKeyName\":\"ZIL\",\"deprecated\":false,\"validationRegex\":\"^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$\"},\"crypto.LTC.address\":{\"deprecatedKeyName\":\"LTC\",\"deprecated\":false,\"validationRegex\":\"^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$|^ltc1[a-zA-HJ-NP-Z0-9]{25,39}$\"},\"crypto.ETC.address\":{\"deprecatedKeyName\":\"ETC\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.EQL.address\":{\"deprecatedKeyName\":\"EQL\",\"deprecated\":false,\"validationRegex\":\"^bnb[0-9a-z]{39}$\"},\"crypto.LINK.address\":{\"deprecatedKeyName\":\"LINK\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.USDC.address\":{\"deprecatedKeyName\":\"USDC\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.BAT.address\":{\"deprecatedKeyName\":\"BAT\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.REP.address\":{\"deprecatedKeyName\":\"REP\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.ZRX.address\":{\"deprecatedKeyName\":\"ZRX\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.DAI.address\":{\"deprecatedKeyName\":\"DAI\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.BCH.address\":{\"deprecatedKeyName\":\"BCH\",\"deprecated\":false,\"validationRegex\":\"^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$\"},\"crypto.XMR.address\":{\"deprecatedKeyName\":\"XMR\",\"deprecated\":false,\"validationRegex\":\"^[48]{1}[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$\"},\"crypto.DASH.address\":{\"deprecatedKeyName\":\"DASH\",\"deprecated\":false,\"validationRegex\":\"^X[1-9A-HJ-NP-Za-km-z]{33}$\"},\"crypto.NEO.address\":{\"deprecatedKeyName\":\"NEO\",\"deprecated\":false,\"validationRegex\":\"^A[0-9a-zA-Z]{33}$\"},\"crypto.SWTH.address\":{\"deprecatedKeyName\":\"SWTH\",\"deprecated\":false,\"validationRegex\":\"^A[0-9a-zA-Z]{33}$\"},\"crypto.DOGE.address\":{\"deprecatedKeyName\":\"DOGE\",\"deprecated\":false,\"validationRegex\":\"^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$\"},\"crypto.XRP.address\":{\"deprecatedKeyName\":\"XRP\",\"deprecated\":false,\"validationRegex\":\"^r[1-9a-km-zA-HJ-NP-Z]{24,34}$\"},\"crypto.ZEC.address\":{\"deprecatedKeyName\":\"ZEC\",\"deprecated\":false,\"validationRegex\":\"^z([a-zA-Z0-9]){94}$|^zs1([a-zA-Z0-9]){75}$|^t([a-zA-Z0-9]){34}$\"},\"crypto.YEC.address\":{\"deprecatedKeyName\":\"YEC\",\"deprecated\":false,\"validationRegex\":\"^y([a-zA-Z0-9]){94}$|^ys1([a-zA-Z0-9]){75}$|^s([a-zA-Z0-9]){34}$\"},\"crypto.ADA.address\":{\"deprecatedKeyName\":\"ADA\",\"deprecated\":false,\"validationRegex\":\"^[1-9a-km-zA-HJ-NP-Z]{104}$|^A[1-9A-HJ-NP-Za-km-z]{58}$|^addr[0-9a-zA-Z]{99}$\"},\"crypto.EOS.address\":{\"deprecatedKeyName\":\"EOS\",\"deprecated\":false,\"validationRegex\":\"^[a-z][a-z1-5.]{10}[a-z1-5]$\"},\"crypto.XLM.address\":{\"deprecatedKeyName\":\"XLM\",\"deprecated\":false,\"validationRegex\":\"^G[A-Z2-7]{55}$\"},\"crypto.BNB.address\":{\"deprecatedKeyName\":\"BNB\",\"deprecated\":false,\"validationRegex\":\"^bnb[0-9a-z]{39}$\"},\"crypto.BTG.address\":{\"deprecatedKeyName\":\"BTG\",\"deprecated\":false,\"validationRegex\":\"^[GA][a-km-zA-HJ-NP-Z1-9]{33}$\"},\"crypto.NANO.address\":{\"deprecatedKeyName\":\"NANO\",\"deprecated\":false,\"validationRegex\":\"^nano_[1-9a-z]{60}$\"},\"crypto.WAVES.address\":{\"deprecatedKeyName\":\"WAVES\",\"deprecated\":false,\"validationRegex\":\"^3[a-km-zA-HJ-NP-Z1-9]{34}$\"},\"crypto.KMD.address\":{\"deprecatedKeyName\":\"KMD\",\"deprecated\":false,\"validationRegex\":\"^R[a-km-zA-Z1-9]{33}$\"},\"crypto.AE.address\":{\"deprecatedKeyName\":\"AE\",\"deprecated\":false,\"validationRegex\":\"^ak_[a-km-zA-Z1-9]{48,52}$\"},\"crypto.RSK.address\":{\"deprecatedKeyName\":\"RSK\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.WAN.address\":{\"deprecatedKeyName\":\"WAN\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.STRAT.address\":{\"deprecatedKeyName\":\"STRAT\",\"deprecated\":false,\"validationRegex\":\"^S[a-km-zA-HJ-NP-Z1-9]{33}$\"},\"crypto.UBQ.address\":{\"deprecatedKeyName\":\"UBQ\",\"deprecated\":false,\"validationRegex\":\"^0x[a-km-zA-HJ-NP-Z0-9]{40}$\"},\"crypto.XTZ.address\":{\"deprecatedKeyName\":\"XTZ\",\"deprecated\":false,\"validationRegex\":\"^(tz|KT)[a-km-zA-HJ-NP-Z1-9]{34}$\"},\"crypto.IOTA.address\":{\"deprecatedKeyName\":\"IOTA\",\"deprecated\":false,\"validationRegex\":\"^[A-Z0-9]{90}$|^iota1[a-z0-9]{59}$\"},\"crypto.VET.address\":{\"deprecatedKeyName\":\"VET\",\"deprecated\":false,\"validationRegex\":\"^0x[a-km-zA-HJ-NP-Z0-9]{40}$\"},\"crypto.QTUM.address\":{\"deprecatedKeyName\":\"QTUM\",\"deprecated\":false,\"validationRegex\":\"^Q[a-km-zA-HJ-NP-Z1-9]{33}$\"},\"crypto.ICX.address\":{\"deprecatedKeyName\":\"ICX\",\"deprecated\":false,\"validationRegex\":\"^[a-km-zA-HJ-NP-Z0-9]{42}$\"},\"crypto.DGB.address\":{\"deprecatedKeyName\":\"DGB\",\"deprecated\":false,\"validationRegex\":\"(^[a-km-zA-HJ-NP-Z1-9]{34}$)|(^[a-zA-Z1-9]{42}$)|(^dgb1[a-zA-Z0-9]{39}$)\"},\"crypto.XZC.address\":{\"deprecatedKeyName\":\"XZC\",\"deprecated\":false,\"validationRegex\":\"^[a-km-zA-HJ-NP-Z1-9]{34}$\"},\"crypto.BURST.address\":{\"deprecatedKeyName\":\"BURST\",\"deprecated\":false,\"validationRegex\":\"^BURST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{5}\"},\"crypto.DCR.address\":{\"deprecatedKeyName\":\"DCR\",\"deprecated\":false,\"validationRegex\":null},\"crypto.XEM.address\":{\"deprecatedKeyName\":\"XEM\",\"deprecated\":false,\"validationRegex\":\"^N[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{39}$\"},\"crypto.LSK.address\":{\"deprecatedKeyName\":\"LSK\",\"deprecated\":false,\"validationRegex\":\"^\\\\d{1,21}[L]$\"},\"crypto.ATOM.address\":{\"deprecatedKeyName\":\"ATOM\",\"deprecated\":false,\"validationRegex\":\"^(cosmos)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$\"},\"crypto.ONG.address\":{\"deprecatedKeyName\":\"ONG\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.ONT.address\":{\"deprecatedKeyName\":\"ONT\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.SMART.address\":{\"deprecatedKeyName\":\"SMART\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.TPAY.address\":{\"deprecatedKeyName\":\"TPAY\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.GRS.address\":{\"deprecatedKeyName\":\"GRS\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.BSV.address\":{\"deprecatedKeyName\":\"BSV\",\"deprecated\":false,\"validationRegex\":\"^bitcoincash:[a-zA-Z0-9]{42}$\"},\"crypto.GAS.address\":{\"deprecatedKeyName\":\"GAS\",\"deprecated\":false,\"validationRegex\":null},\"crypto.TRX.address\":{\"deprecatedKeyName\":\"TRX\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.VTHO.address\":{\"deprecatedKeyName\":\"VTHO\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{42}$\"},\"crypto.BCD.address\":{\"deprecatedKeyName\":\"BCD\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.BTT.address\":{\"deprecatedKeyName\":\"BTT\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.KIN.address\":{\"deprecatedKeyName\":\"KIN\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{56}$\"},\"crypto.RVN.address\":{\"deprecatedKeyName\":\"RVN\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.ARK.address\":{\"deprecatedKeyName\":\"ARK\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.XVG.address\":{\"deprecatedKeyName\":\"XVG\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.ALGO.address\":{\"deprecatedKeyName\":\"ALGO\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{58}$\"},\"crypto.NEBL.address\":{\"deprecatedKeyName\":\"NEBL\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.XPM.address\":{\"deprecatedKeyName\":\"XPM\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.ONE.address\":{\"deprecatedKeyName\":\"ONE\",\"deprecated\":false,\"validationRegex\":\"^one[a-zA-Z0-9]{39}$\"},\"crypto.BNTY.address\":{\"deprecatedKeyName\":\"BNTY\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.CRO.address\":{\"deprecatedKeyName\":\"CRO\",\"deprecated\":false,\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\"},\"crypto.TWT.address\":{\"deprecatedKeyName\":\"TWT\",\"deprecated\":false,\"validationRegex\":\"^bnb[0-9a-z]{39}$\"},\"crypto.SIERRA.address\":{\"deprecatedKeyName\":\"SIERRA\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{34}$\"},\"crypto.VSYS.address\":{\"deprecatedKeyName\":\"VSYS\",\"deprecated\":false,\"validationRegex\":\"^[a-zA-Z0-9]{35}$\"},\"crypto.HIVE.address\":{\"deprecatedKeyName\":\"HIVE\",\"validationRegex\":\"^(?!s*$).+\",\"deprecated\":false},\"crypto.HT.address\":{\"deprecatedKeyName\":\"HT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ENJ.address\":{\"deprecatedKeyName\":\"ENJ\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.YFI.address\":{\"deprecatedKeyName\":\"YFI\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MTA.address\":{\"deprecatedKeyName\":\"MTA\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.COMP.address\":{\"deprecatedKeyName\":\"COMP\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BAL.address\":{\"deprecatedKeyName\":\"BAL\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AMPL.address\":{\"deprecatedKeyName\":\"AMPL\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LEND.address\":{\"deprecatedKeyName\":\"LEND\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TLOS.address\":{\"deprecatedKeyName\":\"TLOS\",\"validationRegex\":\"^[a-z][a-z1-5.]{10}[a-z1-5]$\",\"deprecated\":false},\"crypto.XDC.address\":{\"deprecatedKeyName\":\"XDC\",\"validationRegex\":\"^xdc[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XST.address\":{\"deprecatedKeyName\":\"XST\",\"validationRegex\":\"(?:RwxQ3jUs2BjKhseNX1em4msn2GyV5XAec[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XAe[defghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XA[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|RwxQ3jUs2BjKhseNX1em4msn2GyV5X[BCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|RwxQ3jUs2BjKhseNX1em4msn2GyV5[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|RwxQ3jUs2BjKhseNX1em4msn2GyV[6789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|RwxQ3jUs2BjKhseNX1em4msn2Gy[WXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|RwxQ3jUs2BjKhseNX1em4msn2G[z][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|RwxQ3jUs2BjKhseNX1em4msn2[HJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|RwxQ3jUs2BjKhseNX1em4msn[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|RwxQ3jUs2BjKhseNX1em4ms[opqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|RwxQ3jUs2BjKhseNX1em4m[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|RwxQ3jUs2BjKhseNX1em4[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|RwxQ3jUs2BjKhseNX1em[56789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|RwxQ3jUs2BjKhseNX1e[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|RwxQ3jUs2BjKhseNX1[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|RwxQ3jUs2BjKhseNX[23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|RwxQ3jUs2BjKhseN[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|RwxQ3jUs2BjKhse[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|RwxQ3jUs2BjKhs[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|RwxQ3jUs2BjKh[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|RwxQ3jUs2BjK[ijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|RwxQ3jUs2Bj[LMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|RwxQ3jUs2B[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|RwxQ3jUs2[CDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|RwxQ3jUs[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|RwxQ3jU[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|RwxQ3j[VWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|RwxQ3[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|RwxQ[456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|Rwx[RSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{30}|Rw[yz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|R[xyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|S[123456789ABCDEFGHJKL][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|SM[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ12[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnop][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|SMJ12q[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|SMJ12qn[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|SMJ12qn9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|SMJ12qn9j[123456789ABCDEFGHJKLM][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|SMJ12qn9jN[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|SMJ12qn9jNC[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|SMJ12qn9jNCC[123456789ABCDEFGHJKLMNPQRSTUVW][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|SMJ12qn9jNCCX[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|SMJ12qn9jNCCXJ[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|SMJ12qn9jNCCXJn[123456789ABCDEFGHJKLMNPQRS][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|SMJ12qn9jNCCXJnT[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|SMJ12qn9jNCCXJnTY[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|SMJ12qn9jNCCXJnTYR[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxy][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|SMJ12qn9jNCCXJnTYRz[1234][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|SMJ12qn9jNCCXJnTYRz5[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|SMJ12qn9jNCCXJnTYRz5Y[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrst][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|SMJ12qn9jNCCXJnTYRz5Yu[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|SMJ12qn9jNCCXJnTYRz5Yu9[123456789ABCDEFGHJKLMNPQRSTUVWXY][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|SMJ12qn9jNCCXJnTYRz5Yu9Z[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcd][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|SMJ12qn9jNCCXJnTYRz5Yu9Ze[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|SMJ12qn9jNCCXJnTYRz5Yu9Zen[123456789ABCD][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|SMJ12qn9jNCCXJnTYRz5Yu9ZenE[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|SMJ12qn9jNCCXJnTYRz5Yu9ZenER[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERn[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnk[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkk[123456789ABCDEFGHJKLMNPQRST][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkU[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstu][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkUv[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi])\",\"deprecated\":false},\"crypto.STRAX.address\":{\"deprecatedKeyName\":\"STRAX\",\"validationRegex\":\"^X[a-km-zA-HJ-NP-Z1-9]{33}$\",\"deprecated\":false},\"crypto.SIGNA.address\":{\"deprecatedKeyName\":\"SIGNA\",\"validationRegex\":\"^S-((?=[A-Z2-9]{4})(?:[^IO]{4})-){3}(?=[A-Z2-9]{5})(?:[^IO]{5})$\",\"deprecated\":false},\"crypto.NIM.address\":{\"deprecatedKeyName\":\"NIM\",\"validationRegex\":\"^NQ[0-9]{2} ([A-Z0-9]{4} ){7}[A-Z0-9]{4}$\",\"deprecated\":false},\"crypto.GUAP.address\":{\"deprecatedKeyName\":\"GUAP\",\"validationRegex\":\"^(G|P)[a-zA-HJ-NP-Z0-9]{25,39}$\",\"deprecated\":false},\"crypto.ELA.version.ELA.address\":{\"deprecatedKeyName\":\"ELA_ELA\",\"validationRegex\":\"E[a-zA-HJ-NP-Z0-9]{33}\",\"deprecated\":false},\"crypto.ELA.version.ESC.address\":{\"deprecatedKeyName\":\"ELA_ESC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.USDT.version.ERC20.address\":{\"deprecatedKeyName\":\"USDT_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.USDT.version.TRON.address\":{\"deprecatedKeyName\":\"USDT_TRON\",\"validationRegex\":\"^[T][a-zA-HJ-NP-Z0-9]{33}$\",\"deprecated\":false},\"crypto.USDT.version.EOS.address\":{\"deprecatedKeyName\":\"USDT_EOS\",\"validationRegex\":\"^[a-z][a-z1-5.]{10}[a-z1-5]$\",\"deprecated\":false},\"crypto.USDT.version.OMNI.address\":{\"deprecatedKeyName\":\"USDT_OMNI\",\"validationRegex\":\"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$\",\"deprecated\":false},\"crypto.FTM.version.ERC20.address\":{\"deprecatedKeyName\":\"FTM_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FTM.version.BEP2.address\":{\"deprecatedKeyName\":\"FTM_BEP2\",\"validationRegex\":\"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$\",\"deprecated\":false},\"crypto.FTM.version.OPERA.address\":{\"deprecatedKeyName\":\"FTM_OPERA\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FUSE.version.ERC20.address\":{\"deprecatedKeyName\":\"FUSE_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FUSE.version.FUSE.address\":{\"deprecatedKeyName\":\"FUSE_FUSE\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MATIC.version.MATIC.address\":{\"deprecatedKeyName\":\"MATIC_MATIC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MATIC.version.BEP20.address\":{\"deprecatedKeyName\":\"MATIC_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MATIC.version.ERC20.address\":{\"deprecatedKeyName\":\"MATIC_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"social.payid.name\":{\"deprecatedKeyName\":\"payid\",\"validationRegex\":\"^[0-9a-zA-Z]+\\\\$[0-9a-zA-Z]+\\\\.[0-9a-zA-Z]+$\",\"deprecated\":false},\"social.picture.value\":{\"deprecatedKeyName\":\"picture\",\"validationRegex\":null,\"deprecated\":false},\"whois.email.value\":{\"deprecatedKeyName\":\"email\",\"validationRegex\":\"^[^@]+@[^\\\\.]+\\\\..+$\",\"deprecated\":false},\"whois.for_sale.value\":{\"deprecatedKeyName\":\"for_sale\",\"validationRegex\":\"(true)|(false)\",\"deprecated\":false},\"ipfs.html.value\":{\"deprecatedKeyName\":\"html\",\"validationRegex\":\".{0,100}\",\"deprecated\":false},\"ipfs.redirect_domain.value\":{\"deprecatedKeyName\":\"redirect_domain\",\"validationRegex\":\".{0,253}\",\"deprecated\":false},\"dweb.ipfs.hash\":{\"deprecatedKeyName\":\"dweb_hash\",\"validationRegex\":\".{0,100}\",\"deprecated\":false},\"browser.redirect_url\":{\"deprecatedKeyName\":\"browser_redirect\",\"validationRegex\":\".{0,253}\",\"deprecated\":false},\"browser.preferred_protocols\":{\"deprecatedKeyName\":\"browser_preferred_protocols\",\"validationRegex\":null,\"deprecated\":false},\"gundb.username.value\":{\"deprecatedKeyName\":\"gundb_username\",\"validationRegex\":null,\"deprecated\":false},\"gundb.public_key.value\":{\"deprecatedKeyName\":\"gundb_public_key\",\"validationRegex\":null,\"deprecated\":false},\"social.image.value\":{\"deprecatedKeyName\":\"image\",\"validationRegex\":null,\"deprecated\":false},\"social.twitter.username\":{\"deprecatedKeyName\":\"twitter_username\",\"validationRegex\":null,\"deprecated\":false},\"validation.social.twitter.username\":{\"deprecatedKeyName\":\"validation_twitter_username\",\"validationRegex\":null,\"deprecated\":false},\"forwarding.url\":{\"deprecatedKeyName\":\"forwarding_url\",\"validationRegex\":\"^(https?)://[^\\\\s/$.?#].[^\\\\s]*$\",\"deprecated\":false},\"dns.ttl\":{\"deprecatedKeyName\":\"dns_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.A\":{\"deprecatedKeyName\":\"dns_A\",\"validationRegex\":null,\"deprecated\":false},\"dns.A.ttl\":{\"deprecatedKeyName\":\"dns_A_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.AAAA\":{\"deprecatedKeyName\":\"dns_AAAA\",\"validationRegex\":null,\"deprecated\":false},\"dns.AAAA.ttl\":{\"deprecatedKeyName\":\"dns_AAAA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.AFSDB\":{\"deprecatedKeyName\":\"dns_AFSDB\",\"validationRegex\":null,\"deprecated\":false},\"dns.AFSDB.ttl\":{\"deprecatedKeyName\":\"dns_AFSDB_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.APL\":{\"deprecatedKeyName\":\"dns_APL\",\"validationRegex\":null,\"deprecated\":false},\"dns.APL.ttl\":{\"deprecatedKeyName\":\"dns_APL_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CAA\":{\"deprecatedKeyName\":\"dns_CAA\",\"validationRegex\":null,\"deprecated\":false},\"dns.CAA.ttl\":{\"deprecatedKeyName\":\"dns_CAA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CDNSKEY\":{\"deprecatedKeyName\":\"dns_CDNSKEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.CDNSKEY.ttl\":{\"deprecatedKeyName\":\"dns_CDNSKEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CDS\":{\"deprecatedKeyName\":\"dns_CDS\",\"validationRegex\":null,\"deprecated\":false},\"dns.CDS.ttl\":{\"deprecatedKeyName\":\"dns_CDS_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CERT\":{\"deprecatedKeyName\":\"dns_CERT\",\"validationRegex\":null,\"deprecated\":false},\"dns.CERT.ttl\":{\"deprecatedKeyName\":\"dns_CERT_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CNAME\":{\"deprecatedKeyName\":\"dns_CNAME\",\"validationRegex\":null,\"deprecated\":false},\"dns.CNAME.ttl\":{\"deprecatedKeyName\":\"dns_CNAME_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.CSYNC\":{\"deprecatedKeyName\":\"dns_CSYNC\",\"validationRegex\":null,\"deprecated\":false},\"dns.CSYNC.ttl\":{\"deprecatedKeyName\":\"dns_CSYNC_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.DHCID\":{\"deprecatedKeyName\":\"dns_DHCID\",\"validationRegex\":null,\"deprecated\":false},\"dns.DHCID.ttl\":{\"deprecatedKeyName\":\"dns_DHCID_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.DLV\":{\"deprecatedKeyName\":\"dns_DLV\",\"validationRegex\":null,\"deprecated\":false},\"dns.DLV.ttl\":{\"deprecatedKeyName\":\"dns_DLV_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.DNAME\":{\"deprecatedKeyName\":\"dns_DNAME\",\"validationRegex\":null,\"deprecated\":false},\"dns.DNAME.ttl\":{\"deprecatedKeyName\":\"dns_DNAME_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.DNSKEY\":{\"deprecatedKeyName\":\"dns_DNSKEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.DNSKEY.ttl\":{\"deprecatedKeyName\":\"dns_DNSKEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.DS\":{\"deprecatedKeyName\":\"dns_DS\",\"validationRegex\":null,\"deprecated\":false},\"dns.DS.ttl\":{\"deprecatedKeyName\":\"dns_DS_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.EUI48\":{\"deprecatedKeyName\":\"dns_EUI48\",\"validationRegex\":null,\"deprecated\":false},\"dns.EUI48.ttl\":{\"deprecatedKeyName\":\"dns_EUI48_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.EUI64\":{\"deprecatedKeyName\":\"dns_EUI64\",\"validationRegex\":null,\"deprecated\":false},\"dns.EUI64.ttl\":{\"deprecatedKeyName\":\"dns_EUI64_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.HINFO\":{\"deprecatedKeyName\":\"dns_HINFO\",\"validationRegex\":null,\"deprecated\":false},\"dns.HINFO.ttl\":{\"deprecatedKeyName\":\"dns_HINFO_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.HIP\":{\"deprecatedKeyName\":\"dns_HIP\",\"validationRegex\":null,\"deprecated\":false},\"dns.HIP.ttl\":{\"deprecatedKeyName\":\"dns_HIP_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.HTTPS\":{\"deprecatedKeyName\":\"dns_HTTPS\",\"validationRegex\":null,\"deprecated\":false},\"dns.HTTPS.ttl\":{\"deprecatedKeyName\":\"dns_HTTPS_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.IPSECKEY\":{\"deprecatedKeyName\":\"dns_IPSECKEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.IPSECKEY.ttl\":{\"deprecatedKeyName\":\"dns_IPSECKEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.KEY\":{\"deprecatedKeyName\":\"dns_KEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.KEY.ttl\":{\"deprecatedKeyName\":\"dns_KEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.KX\":{\"deprecatedKeyName\":\"dns_KX\",\"validationRegex\":null,\"deprecated\":false},\"dns.KX.ttl\":{\"deprecatedKeyName\":\"dns_KX_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.LOC\":{\"deprecatedKeyName\":\"dns_LOC\",\"validationRegex\":null,\"deprecated\":false},\"dns.LOC.ttl\":{\"deprecatedKeyName\":\"dns_LOC_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.MX\":{\"deprecatedKeyName\":\"dns_MX\",\"validationRegex\":null,\"deprecated\":false},\"dns.MX.ttl\":{\"deprecatedKeyName\":\"dns_MX_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.NAPTR\":{\"deprecatedKeyName\":\"dns_NAPTR\",\"validationRegex\":null,\"deprecated\":false},\"dns.NAPTR.ttl\":{\"deprecatedKeyName\":\"dns_NAPTR_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.NS\":{\"deprecatedKeyName\":\"dns_NS\",\"validationRegex\":null,\"deprecated\":false},\"dns.NS.ttl\":{\"deprecatedKeyName\":\"dns_NS_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC\":{\"deprecatedKeyName\":\"dns_NSEC\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC.ttl\":{\"deprecatedKeyName\":\"dns_NSEC_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC3\":{\"deprecatedKeyName\":\"dns_NSEC3\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC3.ttl\":{\"deprecatedKeyName\":\"dns_NSEC3_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC3PARAM\":{\"deprecatedKeyName\":\"dns_NSEC3PARAM\",\"validationRegex\":null,\"deprecated\":false},\"dns.NSEC3PARAM.ttl\":{\"deprecatedKeyName\":\"dns_NSEC3PARAM_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.OPENPGPKEY\":{\"deprecatedKeyName\":\"dns_OPENPGPKEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.OPENPGPKEY.ttl\":{\"deprecatedKeyName\":\"dns_OPENPGPKEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.PTR\":{\"deprecatedKeyName\":\"dns_PTR\",\"validationRegex\":null,\"deprecated\":false},\"dns.PTR.ttl\":{\"deprecatedKeyName\":\"dns_PTR_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.RP\":{\"deprecatedKeyName\":\"dns_RP\",\"validationRegex\":null,\"deprecated\":false},\"dns.RP.ttl\":{\"deprecatedKeyName\":\"dns_RP_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.RRSIG\":{\"deprecatedKeyName\":\"dns_RRSIG\",\"validationRegex\":null,\"deprecated\":false},\"dns.RRSIG.ttl\":{\"deprecatedKeyName\":\"dns_RRSIG_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SIG\":{\"deprecatedKeyName\":\"dns_SIG\",\"validationRegex\":null,\"deprecated\":false},\"dns.SIG.ttl\":{\"deprecatedKeyName\":\"dns_SIG_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SMIMEA\":{\"deprecatedKeyName\":\"dns_SMIMEA\",\"validationRegex\":null,\"deprecated\":false},\"dns.SMIMEA.ttl\":{\"deprecatedKeyName\":\"dns_SMIMEA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SOA\":{\"deprecatedKeyName\":\"dns_SOA\",\"validationRegex\":null,\"deprecated\":false},\"dns.SOA.ttl\":{\"deprecatedKeyName\":\"dns_SOA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SRV\":{\"deprecatedKeyName\":\"dns_SRV\",\"validationRegex\":null,\"deprecated\":false},\"dns.SRV.ttl\":{\"deprecatedKeyName\":\"dns_SRV_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SSHFP\":{\"deprecatedKeyName\":\"dns_SSHFP\",\"validationRegex\":null,\"deprecated\":false},\"dns.SSHFP.ttl\":{\"deprecatedKeyName\":\"dns_SSHFP_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.SVCB\":{\"deprecatedKeyName\":\"dns_SVCB\",\"validationRegex\":null,\"deprecated\":false},\"dns.SVCB.ttl\":{\"deprecatedKeyName\":\"dns_SVCB_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.TA\":{\"deprecatedKeyName\":\"dns_TA\",\"validationRegex\":null,\"deprecated\":false},\"dns.TA.ttl\":{\"deprecatedKeyName\":\"dns_TA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.TKEY\":{\"deprecatedKeyName\":\"dns_TKEY\",\"validationRegex\":null,\"deprecated\":false},\"dns.TKEY.ttl\":{\"deprecatedKeyName\":\"dns_TKEY_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.TLSA\":{\"deprecatedKeyName\":\"dns_TLSA\",\"validationRegex\":null,\"deprecated\":false},\"dns.TLSA.ttl\":{\"deprecatedKeyName\":\"dns_TLSA_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.TSIG\":{\"deprecatedKeyName\":\"dns_TSIG\",\"validationRegex\":null,\"deprecated\":false},\"dns.TSIG.ttl\":{\"deprecatedKeyName\":\"dns_TSIG_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.TXT\":{\"deprecatedKeyName\":\"dns_TXT\",\"validationRegex\":null,\"deprecated\":false},\"dns.TXT.ttl\":{\"deprecatedKeyName\":\"dns_TXT_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.URI\":{\"deprecatedKeyName\":\"dns_URI\",\"validationRegex\":null,\"deprecated\":false},\"dns.URI.ttl\":{\"deprecatedKeyName\":\"dns_URI_ttl\",\"validationRegex\":null,\"deprecated\":false},\"dns.ZONEMD\":{\"deprecatedKeyName\":\"dns_ZONEMD\",\"validationRegex\":null,\"deprecated\":false},\"dns.ZONEMD.ttl\":{\"deprecatedKeyName\":\"dns_ZONEMD_ttl\",\"validationRegex\":null,\"deprecated\":false},\"crypto.DOT.address\":{\"deprecatedKeyName\":\"DOT\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UNI.version.ERC20.address\":{\"deprecatedKeyName\":\"UNI_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.UNI.version.BEP20.address\":{\"deprecatedKeyName\":\"UNI_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.UNI.version.MATIC.address\":{\"deprecatedKeyName\":\"UNI_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UNI.version.HRC20.address\":{\"deprecatedKeyName\":\"UNI_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.UNI.version.XDAI.address\":{\"deprecatedKeyName\":\"UNI_XDAI\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SOL.address\":{\"deprecatedKeyName\":\"SOL\",\"validationRegex\":null,\"deprecated\":false},\"crypto.BUSD.version.ERC20.address\":{\"deprecatedKeyName\":\"BUSD_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BUSD.version.BEP20.address\":{\"deprecatedKeyName\":\"BUSD_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BUSD.version.HRC20.address\":{\"deprecatedKeyName\":\"BUSD_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ICP.address\":{\"deprecatedKeyName\":\"ICP\",\"validationRegex\":null,\"deprecated\":false},\"crypto.THETA.address\":{\"deprecatedKeyName\":\"THETA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.WBTC.version.ERC20.address\":{\"deprecatedKeyName\":\"WBTC_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.WBTC.version.MATIC.address\":{\"deprecatedKeyName\":\"WBTC_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.WBTC.version.FANTOM.address\":{\"deprecatedKeyName\":\"WBTC_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.WBTC.version.HRC20.address\":{\"deprecatedKeyName\":\"WBTC_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.WBTC.version.XDAI.address\":{\"deprecatedKeyName\":\"WBTC_XDAI\",\"validationRegex\":null,\"deprecated\":false},\"crypto.FIL.address\":{\"deprecatedKeyName\":\"FIL\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CDAI.address\":{\"deprecatedKeyName\":\"CDAI\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KSM.address\":{\"deprecatedKeyName\":\"KSM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.OKB.address\":{\"deprecatedKeyName\":\"OKB\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AAVE.version.ERC20.address\":{\"deprecatedKeyName\":\"AAVE_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AAVE.version.MATIC.address\":{\"deprecatedKeyName\":\"AAVE_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.AAVE.version.FANTOM.address\":{\"deprecatedKeyName\":\"AAVE_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.AAVE.version.HRC20.address\":{\"deprecatedKeyName\":\"AAVE_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SHIB.version.ERC20.address\":{\"deprecatedKeyName\":\"SHIB_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SHIB.version.MATIC.address\":{\"deprecatedKeyName\":\"SHIB_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SHIB.version.FANTOM.address\":{\"deprecatedKeyName\":\"SHIB_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CEL.version.ERC20.address\":{\"deprecatedKeyName\":\"CEL_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CEL.version.MATIC.address\":{\"deprecatedKeyName\":\"CEL_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CEL.version.FANTOM.address\":{\"deprecatedKeyName\":\"CEL_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CEL.version.HRC20.address\":{\"deprecatedKeyName\":\"CEL_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CUSDC.address\":{\"deprecatedKeyName\":\"CUSDC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CETH.address\":{\"deprecatedKeyName\":\"CETH\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AMP.address\":{\"deprecatedKeyName\":\"AMP\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CAKE.version.BEP20.address\":{\"deprecatedKeyName\":\"CAKE_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CAKE.version.HRC20.address\":{\"deprecatedKeyName\":\"CAKE_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MIOTA.address\":{\"deprecatedKeyName\":\"MIOTA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.FTT.address\":{\"deprecatedKeyName\":\"FTT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MKR.address\":{\"deprecatedKeyName\":\"MKR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TFUEL.address\":{\"deprecatedKeyName\":\"TFUEL\",\"validationRegex\":null,\"deprecated\":false},\"crypto.KLAY.address\":{\"deprecatedKeyName\":\"KLAY\",\"validationRegex\":null,\"deprecated\":false},\"crypto.LUNA.address\":{\"deprecatedKeyName\":\"LUNA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.AVAX.address\":{\"deprecatedKeyName\":\"AVAX\",\"validationRegex\":null,\"deprecated\":false},\"crypto.LEO.address\":{\"deprecatedKeyName\":\"LEO\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SAFEMOON.version.BEP20.address\":{\"deprecatedKeyName\":\"SAFEMOON_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SAFEMOON.version.HRC20.address\":{\"deprecatedKeyName\":\"SAFEMOON_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.UST.address\":{\"deprecatedKeyName\":\"UST\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RUNE.address\":{\"deprecatedKeyName\":\"RUNE\",\"validationRegex\":\"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$\",\"deprecated\":false},\"crypto.HBAR.address\":{\"deprecatedKeyName\":\"HBAR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.TEL.version.ERC20.address\":{\"deprecatedKeyName\":\"TEL_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TEL.version.MATIC.address\":{\"deprecatedKeyName\":\"TEL_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CHZ.address\":{\"deprecatedKeyName\":\"CHZ\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SUSHI.version.ERC20.address\":{\"deprecatedKeyName\":\"SUSHI_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SUSHI.version.BEP20.address\":{\"deprecatedKeyName\":\"SUSHI_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SUSHI.version.MATIC.address\":{\"deprecatedKeyName\":\"SUSHI_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SUSHI.version.FANTOM.address\":{\"deprecatedKeyName\":\"SUSHI_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SUSHI.version.HRC20.address\":{\"deprecatedKeyName\":\"SUSHI_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.EGLD.address\":{\"deprecatedKeyName\":\"EGLD\",\"validationRegex\":null,\"deprecated\":false},\"crypto.TUSD.version.ERC20.address\":{\"deprecatedKeyName\":\"TUSD_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TUSD.version.BEP20.address\":{\"deprecatedKeyName\":\"TUSD_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TUSD.version.AVAX.address\":{\"deprecatedKeyName\":\"TUSD_AVAX\",\"validationRegex\":null,\"deprecated\":false},\"crypto.TUSD.version.HRC20.address\":{\"deprecatedKeyName\":\"TUSD_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TUSD.version.BEP2.address\":{\"deprecatedKeyName\":\"TUSD_BEP2\",\"validationRegex\":\"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$\",\"deprecated\":false},\"crypto.TUSD.version.TRON.address\":{\"deprecatedKeyName\":\"TUSD_TRON\",\"validationRegex\":\"^[T][a-zA-HJ-NP-Z0-9]{33}$\",\"deprecated\":false},\"crypto.HBTC.version.ERC20.address\":{\"deprecatedKeyName\":\"HBTC_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HBTC.version.HRC20.address\":{\"deprecatedKeyName\":\"HBTC_HRC20\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SNX.version.ERC20.address\":{\"deprecatedKeyName\":\"SNX_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SNX.version.MATIC.address\":{\"deprecatedKeyName\":\"SNX_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SNX.version.FANTOM.address\":{\"deprecatedKeyName\":\"SNX_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SNX.version.HRC20.address\":{\"deprecatedKeyName\":\"SNX_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HOT.version.ERC20.address\":{\"deprecatedKeyName\":\"HOT_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HOT.version.HRC20.address\":{\"deprecatedKeyName\":\"HOT_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NEAR.address\":{\"deprecatedKeyName\":\"NEAR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.HNT.address\":{\"deprecatedKeyName\":\"HNT\",\"validationRegex\":null,\"deprecated\":false},\"crypto.STETH.address\":{\"deprecatedKeyName\":\"STETH\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NEXO.version.ERC20.address\":{\"deprecatedKeyName\":\"NEXO_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NEXO.version.FANTOM.address\":{\"deprecatedKeyName\":\"NEXO_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.PAX.address\":{\"deprecatedKeyName\":\"PAX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.STX.address\":{\"deprecatedKeyName\":\"STX\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MANA.version.ERC20.address\":{\"deprecatedKeyName\":\"MANA_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MANA.version.MATIC.address\":{\"deprecatedKeyName\":\"MANA_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MDX.version.HRC20.address\":{\"deprecatedKeyName\":\"MDX_HRC20\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MDX.version.BEP20.address\":{\"deprecatedKeyName\":\"MDX_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ZEN.address\":{\"deprecatedKeyName\":\"ZEN\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ARRR.address\":{\"deprecatedKeyName\":\"ARRR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.BNT.address\":{\"deprecatedKeyName\":\"BNT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LUSD.version.ERC20.address\":{\"deprecatedKeyName\":\"LUSD_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LUSD.version.MATIC.address\":{\"deprecatedKeyName\":\"LUSD_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.GRT.version.ERC20.address\":{\"deprecatedKeyName\":\"GRT_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GRT.version.MATIC.address\":{\"deprecatedKeyName\":\"GRT_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.GRT.version.HRC20.address\":{\"deprecatedKeyName\":\"GRT_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SC.address\":{\"deprecatedKeyName\":\"SC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.HUSD.version.ERC20.address\":{\"deprecatedKeyName\":\"HUSD_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HUSD.version.HRC20.address\":{\"deprecatedKeyName\":\"HUSD_HRC20\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CRV.version.ERC20.address\":{\"deprecatedKeyName\":\"CRV_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CRV.version.MATIC.address\":{\"deprecatedKeyName\":\"CRV_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.CRV.version.FANTOM.address\":{\"deprecatedKeyName\":\"CRV_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UMA.address\":{\"deprecatedKeyName\":\"UMA\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.WRX.version.BEP2.address\":{\"deprecatedKeyName\":\"WRX_BEP2\",\"validationRegex\":\"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$\",\"deprecated\":false},\"crypto.WRX.version.MATIC.address\":{\"deprecatedKeyName\":\"WRX_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.AR.address\":{\"deprecatedKeyName\":\"AR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.OMG.address\":{\"deprecatedKeyName\":\"OMG\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GT.address\":{\"deprecatedKeyName\":\"GT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.QNT.address\":{\"deprecatedKeyName\":\"QNT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CHSB.address\":{\"deprecatedKeyName\":\"CHSB\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.IOST.address\":{\"deprecatedKeyName\":\"IOST\",\"validationRegex\":null,\"deprecated\":false},\"crypto.NXM.address\":{\"deprecatedKeyName\":\"NXM\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KCS.address\":{\"deprecatedKeyName\":\"KCS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LPT.version.ERC20.address\":{\"deprecatedKeyName\":\"LPT_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LPT.version.HRC20.address\":{\"deprecatedKeyName\":\"LPT_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XSUSHI.address\":{\"deprecatedKeyName\":\"XSUSHI\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CUSDT.address\":{\"deprecatedKeyName\":\"CUSDT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FLOW.address\":{\"deprecatedKeyName\":\"FLOW\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ANKR.address\":{\"deprecatedKeyName\":\"ANKR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HBC.address\":{\"deprecatedKeyName\":\"HBC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.VGX.address\":{\"deprecatedKeyName\":\"VGX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FEI.address\":{\"deprecatedKeyName\":\"FEI\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BAKE.version.BEP20.address\":{\"deprecatedKeyName\":\"BAKE_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BAKE.version.HRC20.address\":{\"deprecatedKeyName\":\"BAKE_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.1INCH.version.ERC20.address\":{\"deprecatedKeyName\":\"1INCH_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.1INCH.version.BEP20.address\":{\"deprecatedKeyName\":\"1INCH_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.1INCH.version.MATIC.address\":{\"deprecatedKeyName\":\"1INCH_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.1INCH.version.HRC20.address\":{\"deprecatedKeyName\":\"1INCH_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CKB.address\":{\"deprecatedKeyName\":\"CKB\",\"validationRegex\":null,\"deprecated\":false},\"crypto.WOO.version.ERC20.address\":{\"deprecatedKeyName\":\"WOO_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.WOO.version.HRC20.address\":{\"deprecatedKeyName\":\"WOO_HRC20\",\"validationRegex\":null,\"deprecated\":false},\"crypto.TITAN.address\":{\"deprecatedKeyName\":\"TITAN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.OMI.address\":{\"deprecatedKeyName\":\"OMI\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MINA.address\":{\"deprecatedKeyName\":\"MINA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SETH.address\":{\"deprecatedKeyName\":\"SETH\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RSR.address\":{\"deprecatedKeyName\":\"RSR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.OXY.version.SOLANA.address\":{\"deprecatedKeyName\":\"OXY_SOLANA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.OXY.version.ERC20.address\":{\"deprecatedKeyName\":\"OXY_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.REN.version.ERC20.address\":{\"deprecatedKeyName\":\"REN_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.REN.version.HRC20.address\":{\"deprecatedKeyName\":\"REN_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XCH.address\":{\"deprecatedKeyName\":\"XCH\",\"validationRegex\":null,\"deprecated\":false},\"crypto.RENBTC.version.ERC20.address\":{\"deprecatedKeyName\":\"RENBTC_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RENBTC.version.BEP20.address\":{\"deprecatedKeyName\":\"RENBTC_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RENBTC.version.HRC20.address\":{\"deprecatedKeyName\":\"RENBTC_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.USDN.address\":{\"deprecatedKeyName\":\"USDN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BCHA.address\":{\"deprecatedKeyName\":\"BCHA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.LRC.address\":{\"deprecatedKeyName\":\"LRC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.PUNDIX.address\":{\"deprecatedKeyName\":\"PUNDIX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ERG.address\":{\"deprecatedKeyName\":\"ERG\",\"validationRegex\":null,\"deprecated\":false},\"crypto.WIN.address\":{\"deprecatedKeyName\":\"WIN\",\"validationRegex\":\"^[T][a-zA-HJ-NP-Z0-9]{33}$\",\"deprecated\":false},\"crypto.NPXS.address\":{\"deprecatedKeyName\":\"NPXS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TRIBE.address\":{\"deprecatedKeyName\":\"TRIBE\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MAID.address\":{\"deprecatedKeyName\":\"MAID\",\"validationRegex\":\"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$\",\"deprecated\":false},\"crypto.ASD.address\":{\"deprecatedKeyName\":\"ASD\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CUNI.address\":{\"deprecatedKeyName\":\"CUNI\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CELO.address\":{\"deprecatedKeyName\":\"CELO\",\"validationRegex\":null,\"deprecated\":false},\"crypto.DENT.address\":{\"deprecatedKeyName\":\"DENT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SNT.address\":{\"deprecatedKeyName\":\"SNT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FEG.version.ERC20.address\":{\"deprecatedKeyName\":\"FEG_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FEG.version.HRC20.address\":{\"deprecatedKeyName\":\"FEG_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SKL.address\":{\"deprecatedKeyName\":\"SKL\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ALUSD.address\":{\"deprecatedKeyName\":\"ALUSD\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MIR.version.ERC20.address\":{\"deprecatedKeyName\":\"MIR_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MIR.version.BEP20.address\":{\"deprecatedKeyName\":\"MIR_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GLM.address\":{\"deprecatedKeyName\":\"GLM\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.PAXG.version.ERC20.address\":{\"deprecatedKeyName\":\"PAXG_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.PAXG.version.HRC20.address\":{\"deprecatedKeyName\":\"PAXG_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CFX.address\":{\"deprecatedKeyName\":\"CFX\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UOS.address\":{\"deprecatedKeyName\":\"UOS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SVCS.address\":{\"deprecatedKeyName\":\"SVCS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.REEF.version.ERC20.address\":{\"deprecatedKeyName\":\"REEF_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.REEF.version.BEP20.address\":{\"deprecatedKeyName\":\"REEF_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.REEF.version.HRC20.address\":{\"deprecatedKeyName\":\"REEF_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GNO.address\":{\"deprecatedKeyName\":\"GNO\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.USDP.address\":{\"deprecatedKeyName\":\"USDP\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KAVA.address\":{\"deprecatedKeyName\":\"KAVA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ALCX.address\":{\"deprecatedKeyName\":\"ALCX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.EWT.address\":{\"deprecatedKeyName\":\"EWT\",\"validationRegex\":null,\"deprecated\":false},\"crypto.TON.address\":{\"deprecatedKeyName\":\"TON\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RLC.address\":{\"deprecatedKeyName\":\"RLC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AXS.address\":{\"deprecatedKeyName\":\"AXS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AUDIO.address\":{\"deprecatedKeyName\":\"AUDIO\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XVS.address\":{\"deprecatedKeyName\":\"XVS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BAND.version.ERC20.address\":{\"deprecatedKeyName\":\"BAND_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.BAND.version.FANTOM.address\":{\"deprecatedKeyName\":\"BAND_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.NMR.address\":{\"deprecatedKeyName\":\"NMR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.INJ.version.ERC20.address\":{\"deprecatedKeyName\":\"INJ_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.INJ.version.BEP20.address\":{\"deprecatedKeyName\":\"INJ_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.WAXP.address\":{\"deprecatedKeyName\":\"WAXP\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UQC.address\":{\"deprecatedKeyName\":\"UQC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.IOTX.address\":{\"deprecatedKeyName\":\"IOTX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FUN.address\":{\"deprecatedKeyName\":\"FUN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.OCEAN.address\":{\"deprecatedKeyName\":\"OCEAN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SAND.version.ERC20.address\":{\"deprecatedKeyName\":\"SAND_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SAND.version.HRC20.address\":{\"deprecatedKeyName\":\"SAND_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CTSI.version.ERC20.address\":{\"deprecatedKeyName\":\"CTSI_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CTSI.version.BEP20.address\":{\"deprecatedKeyName\":\"CTSI_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CTSI.version.MATIC.address\":{\"deprecatedKeyName\":\"CTSI_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.RAY.address\":{\"deprecatedKeyName\":\"RAY\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ANC.version.TERRA.address\":{\"deprecatedKeyName\":\"ANC_TERRA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ANC.version.ERC20.address\":{\"deprecatedKeyName\":\"ANC_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.IQ.version.ERC20.address\":{\"deprecatedKeyName\":\"IQ_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.IQ.version.BEP20.address\":{\"deprecatedKeyName\":\"IQ_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.IQ.version.MATIC.address\":{\"deprecatedKeyName\":\"IQ_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SUSD.version.ERC20.address\":{\"deprecatedKeyName\":\"SUSD_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SUSD.version.FANTOM.address\":{\"deprecatedKeyName\":\"SUSD_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.KLV.address\":{\"deprecatedKeyName\":\"KLV\",\"validationRegex\":\"^[T][a-zA-HJ-NP-Z0-9]{33}$\",\"deprecated\":false},\"crypto.BTCST.address\":{\"deprecatedKeyName\":\"BTCST\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TLM.address\":{\"deprecatedKeyName\":\"TLM\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AKT.address\":{\"deprecatedKeyName\":\"AKT\",\"validationRegex\":null,\"deprecated\":false},\"crypto.STMX.address\":{\"deprecatedKeyName\":\"STMX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.PROM.address\":{\"deprecatedKeyName\":\"PROM\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XPRT.address\":{\"deprecatedKeyName\":\"XPRT\",\"validationRegex\":null,\"deprecated\":false},\"crypto.SRM.version.ERC20.address\":{\"deprecatedKeyName\":\"SRM_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SRM.version.SOLANA.address\":{\"deprecatedKeyName\":\"SRM_SOLANA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.RPL.address\":{\"deprecatedKeyName\":\"RPL\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AGIX.address\":{\"deprecatedKeyName\":\"AGIX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CELR.address\":{\"deprecatedKeyName\":\"CELR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.FET.address\":{\"deprecatedKeyName\":\"FET\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.OXT.address\":{\"deprecatedKeyName\":\"OXT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ARDR.address\":{\"deprecatedKeyName\":\"ARDR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MATH.address\":{\"deprecatedKeyName\":\"MATH\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.10SET.address\":{\"deprecatedKeyName\":\"10SET\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.POLY.address\":{\"deprecatedKeyName\":\"POLY\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GUSD.address\":{\"deprecatedKeyName\":\"GUSD\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NKN.address\":{\"deprecatedKeyName\":\"NKN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CVC.address\":{\"deprecatedKeyName\":\"CVC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.GTC.address\":{\"deprecatedKeyName\":\"GTC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.STEEM.address\":{\"deprecatedKeyName\":\"STEEM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ORN.address\":{\"deprecatedKeyName\":\"ORN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KEEP.version.ERC20.address\":{\"deprecatedKeyName\":\"KEEP_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KEEP.version.HRC20.address\":{\"deprecatedKeyName\":\"KEEP_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HXRO.address\":{\"deprecatedKeyName\":\"HXRO\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ORBS.address\":{\"deprecatedKeyName\":\"ORBS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ALPHA.version.ERC20.address\":{\"deprecatedKeyName\":\"ALPHA_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ALPHA.version.BEP20.address\":{\"deprecatedKeyName\":\"ALPHA_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.DODO.version.ERC20.address\":{\"deprecatedKeyName\":\"DODO_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.DODO.version.BEP20.address\":{\"deprecatedKeyName\":\"DODO_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.OGN.address\":{\"deprecatedKeyName\":\"OGN\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KNCL.version.ERC20.address\":{\"deprecatedKeyName\":\"KNCL_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KNCL.version.FANTOM.address\":{\"deprecatedKeyName\":\"KNCL_FANTOM\",\"validationRegex\":null,\"deprecated\":false},\"crypto.KNCL.version.HRC20.address\":{\"deprecatedKeyName\":\"KNCL_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MED.address\":{\"deprecatedKeyName\":\"MED\",\"validationRegex\":null,\"deprecated\":false},\"crypto.XAUT.address\":{\"deprecatedKeyName\":\"XAUT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.VLX.address\":{\"deprecatedKeyName\":\"VLX\",\"validationRegex\":null,\"deprecated\":false},\"crypto.PHA.address\":{\"deprecatedKeyName\":\"PHA\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.KOBE.address\":{\"deprecatedKeyName\":\"KOBE\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.PERP.address\":{\"deprecatedKeyName\":\"PERP\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.XHV.address\":{\"deprecatedKeyName\":\"XHV\",\"validationRegex\":null,\"deprecated\":false},\"crypto.META.address\":{\"deprecatedKeyName\":\"META\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SEUR.address\":{\"deprecatedKeyName\":\"SEUR\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.MONA.address\":{\"deprecatedKeyName\":\"MONA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ANT.address\":{\"deprecatedKeyName\":\"ANT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.HYDRA.address\":{\"deprecatedKeyName\":\"HYDRA\",\"validationRegex\":null,\"deprecated\":false},\"crypto.ZKS.address\":{\"deprecatedKeyName\":\"ZKS\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SXP.version.ERC20.address\":{\"deprecatedKeyName\":\"SXP_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SXP.version.BEP20.address\":{\"deprecatedKeyName\":\"SXP_BEP20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.SXP.version.HRC20.address\":{\"deprecatedKeyName\":\"SXP_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.CSPR.address\":{\"deprecatedKeyName\":\"CSPR\",\"validationRegex\":null,\"deprecated\":false},\"crypto.MTL.address\":{\"deprecatedKeyName\":\"MTL\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NU.address\":{\"deprecatedKeyName\":\"NU\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ZMT.address\":{\"deprecatedKeyName\":\"ZMT\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.LOC.address\":{\"deprecatedKeyName\":\"LOC\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.TKO.address\":{\"deprecatedKeyName\":\"TKO\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.ETN.address\":{\"deprecatedKeyName\":\"ETN\",\"validationRegex\":null,\"deprecated\":false},\"crypto.UBT.version.ERC20.address\":{\"deprecatedKeyName\":\"UBT_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.UBT.version.MATIC.address\":{\"deprecatedKeyName\":\"UBT_MATIC\",\"validationRegex\":null,\"deprecated\":false},\"crypto.EXRD.address\":{\"deprecatedKeyName\":\"EXRD\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.NMX.address\":{\"deprecatedKeyName\":\"NMX\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.RIF.address\":{\"deprecatedKeyName\":\"RIF\",\"validationRegex\":null,\"deprecated\":false},\"crypto.STORJ.version.ERC20.address\":{\"deprecatedKeyName\":\"STORJ_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.STORJ.version.HRC20.address\":{\"deprecatedKeyName\":\"STORJ_HRC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.AVA.address\":{\"deprecatedKeyName\":\"AVA\",\"validationRegex\":\"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$\",\"deprecated\":false},\"crypto.DPI.version.ERC20.address\":{\"deprecatedKeyName\":\"DPI_ERC20\",\"validationRegex\":\"^0x[a-fA-F0-9]{40}$\",\"deprecated\":false},\"crypto.DPI.version.MATIC.address\":{\"deprecatedKeyName\":\"DPI_MATIC\",\"validationRegex\":null,\"deprecated\":false}}}");

/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/config/uns-config.json":
/*!**********************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/config/uns-config.json ***!
  \**********************************************************************************/
/*! exports provided: version, networks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"0.4.0\",\"networks\":{\"1\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0x049aba7510f45BA5b64ea9E658E342F904DB358D\",\"implementation\":\"0xa715562307AA8AEDCba976b3793b3337F371c14a\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xd62e9d\",\"forwarder\":\"0x049aba7510f45BA5b64ea9E658E342F904DB358D\"},\"CNSRegistry\":{\"address\":\"0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x8a958b\",\"forwarder\":\"0x97B0E89fC1B7eD4A8B237D9d8Fcce9b234f25A37\"},\"MintingManager\":{\"address\":\"0x2a7084870bB724175a3C96Da8FaA55128fa3E19D\",\"implementation\":\"0x8caAeaD19aab5f54C94BB9F4be32e200E54AC8D7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xc2fee0\",\"forwarder\":\"0xb970fbCF52cd8111c76c379D4f2FE12E7f8AE7fb\"},\"ProxyAdmin\":{\"address\":\"0xAA16DA78110D9A9742c760a1a064F28654Ab93de\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xc2fedc\"},\"SignatureController\":{\"address\":\"0x82EF94294C95aD0930055f31e53A34509227c5f7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x8a95a6\"},\"MintingController\":{\"address\":\"0xb0EE56339C3253361730F50c08d3d7817ecD60Ca\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x8a95aa\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0xd3fF3377b0ceade1303dAF9Db04068ef8a650757\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xa76ad3\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x8a95ae\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x98ca20\",\"deprecated\":true},\"Resolver\":{\"address\":\"0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842\",\"legacyAddresses\":[\"0xa1cac442be6673c49f8e74ffc7c4fd746f3cbd0d\",\"0x878bc2f3f717766ab69c0a5f9a6144931e61aed3\"],\"deploymentBlock\":\"0x960844\",\"forwarder\":\"0x486eb10E4F48C038513ECAf11585Ca2779768CF2\"},\"ProxyReader\":{\"address\":\"0x1BDc0fD4fbABeed3E611fd6195fCd5d41dcEF393\",\"legacyAddresses\":[\"0x58034A288D2E56B661c9056A0C27273E5460B63c\",\"0xc3C2BAB5e3e52DBF311b2aAcEf2e40344f19494E\",\"0xfEe4D4F0aDFF8D84c12170306507554bC7045878\",\"0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5\",\"0x7ea9Ee21077F84339eDa9C80048ec6db678642B1\"],\"deploymentBlock\":\"0xde71cd\"},\"TwitterValidationOperator\":{\"address\":\"0x2F659766E3D08561CA3408FbAba7C0749ab2c402\",\"legacyAddresses\":[\"0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855\"],\"deploymentBlock\":\"0xc300b5\"},\"FreeMinter\":{\"address\":\"0x1fC985cAc641ED5846b631f96F35d9b48Bc3b834\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xacc390\",\"deprecated\":true},\"MintableERC721Predicate\":{\"address\":\"0x932532aA4c0174b8453839A6E44eE09Cc615F2b7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xa3cf69\"},\"RootChainManager\":{\"address\":\"0xA0c68C638235ee32657e8f720a23ceC1bFc77C77\",\"legacyAddresses\":[],\"deploymentBlock\":\"0xa3cf4d\"}}},\"4\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0x7fb83000B8eD59D3eAD22f0D584Df3a85fBC0086\",\"implementation\":\"0xc479D7A65243f7Eb1641F06a6C04E5F06cb5c4F7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x85e628\",\"forwarder\":\"0x7fb83000B8eD59D3eAD22f0D584Df3a85fBC0086\"},\"CNSRegistry\":{\"address\":\"0xAad76bea7CFEc82927239415BB18D2e93518ecBB\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232bc\",\"forwarder\":\"0xdf5CC97216785398D5C77348e68fc9461108f85d\"},\"MintingManager\":{\"address\":\"0xdAAf99A920D31F4f5720e4667b12b24e54A03070\",\"implementation\":\"0x38Fa95a0AC0E59D6e2845eFADBc17aF0FF9c7089\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x85e629\",\"forwarder\":\"0xfB13e29C4D31a48B4Cd61131Cf3b681416e11681\"},\"ProxyAdmin\":{\"address\":\"0xaf9815005A208d1460b6fC60B4f90B9f2185E88c\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x85e627\"},\"SignatureController\":{\"address\":\"0x66a5e3e2C27B4ce4F46BBd975270BE154748D164\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232be\"},\"MintingController\":{\"address\":\"0x51765307AeB3Df2E647014a2C501d5324212467c\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232bf\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0xbcB32f13f90978a9e059E8Cb40FaA9e6619d98e7\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232c6\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0xe1d2e4B9f0518CA5c803073C3dFa886470627237\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232c0\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0x6f8F96A566663C1d4fEe70edD37E9b62Fe39dE5D\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232c2\",\"deprecated\":true},\"Resolver\":{\"address\":\"0x95AE1515367aa64C462c71e87157771165B1287A\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x7232cf\",\"forwarder\":\"0xE172D8557d6F342b1b2976dE784F6Dff6ABC0a37\"},\"ProxyReader\":{\"address\":\"0xE6729D224D00b3dd4FC731C4Ee3274E35Da06578\",\"legacyAddresses\":[\"0x299974AeD8911bcbd2C61262605b89F591a53E83\",\"0x9F19473F6a98a715176291c930558E1954fd3D1e\",\"0x3A2e74CF832cbA3d77E72708d55370119E4323a6\"],\"deploymentBlock\":\"0x8dc79a\"},\"TwitterValidationOperator\":{\"address\":\"0x9ea4A63184ebE9CBA55CD1af473D98075Aa02b4C\",\"legacyAddresses\":[\"0x1CB337b3b208dc29a6AcE8d11Bb591b66c5Dd83d\"],\"deploymentBlock\":\"0x86935e\"},\"FreeMinter\":{\"address\":\"0x84214215904cDEbA9044ECf95F3eBF009185AAf4\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x740d93\",\"deprecated\":true}}},\"5\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0x070e83FCed225184E67c86302493ffFCDB953f71\",\"implementation\":\"0x4473e84898E3F58feEFb7529dfF9E83Ff26CCae9\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57ea\",\"forwarder\":\"0x070e83FCed225184E67c86302493ffFCDB953f71\"},\"CNSRegistry\":{\"address\":\"0x801452cFAC27e79a11c6b185986fdE09e8637589\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57d7\",\"forwarder\":\"0x00443017FFaa4C840Caf5Dc7d3CB59147f363080\"},\"MintingManager\":{\"address\":\"0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345\",\"implementation\":\"0xFB11410f3067BB6Db61bC335f0de23bE87A1767e\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57ec\",\"forwarder\":\"0x7F9F48cF94C69ce91D4b442DA186F31118ac0185\"},\"ProxyAdmin\":{\"address\":\"0xf4906E210523F9dA79E33811A44EE000441F4E04\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57e8\"},\"SignatureController\":{\"address\":\"0x5199dAE4B24B987ba18FcE1b64664D1B798d372B\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57d8\"},\"MintingController\":{\"address\":\"0xCEC41677be322049cC885c0DAe2fE0D52CA195ca\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57d9\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0x29465e3d2daA588E62375977bCe9b3f51406a794\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57da\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"Resolver\":{\"address\":\"0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x5b57dc\",\"forwarder\":\"0xFCc1A95B7287Ae7a8B7cA813F12991dF5714d4C7\"},\"ProxyReader\":{\"address\":\"0xE3b961856C417d081a02cBa0161a051268F52677\",\"legacyAddresses\":[\"0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982\",\"0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68\"],\"deploymentBlock\":\"0x65bdfe\"},\"TwitterValidationOperator\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"FreeMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"MintableERC721Predicate\":{\"address\":\"0x56E14C4C1748a818a5564D33cF774c59EB3eDF59\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x2fc240\"},\"RootChainManager\":{\"address\":\"0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x2dc9b9\"}}},\"137\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x019d6188\",\"implementation\":\"0x5442953b0BFFf69FC945f5f1387cbFD2e2673447\",\"forwarder\":\"0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f\"},\"CNSRegistry\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"forwarder\":\"0x0000000000000000000000000000000000000000\"},\"MintingManager\":{\"address\":\"0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01272f41\",\"implementation\":\"0xBb45a6E10224Aa36EAcd812205F3763D353e9783\",\"forwarder\":\"0xC37d3c4326ab0E1D2b9D8b916bBdf5715f780fcF\"},\"ProxyAdmin\":{\"address\":\"0xe1D668052D52388F52b90f4d1798DB2b04bC3b88\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01272d15\"},\"SignatureController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"MintingController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"Resolver\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"forwarder\":\"0x0000000000000000000000000000000000000000\"},\"ProxyReader\":{\"address\":\"0x3E67b8c702a1292d1CEb025494C84367fcb12b45\",\"legacyAddresses\":[\"0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680\",\"0xA3f32c8cd786dc089Bd1fC175F2707223aeE5d00\"],\"deploymentBlock\":\"0x019d61a9\"},\"TwitterValidationOperator\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"FreeMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"MintableERC721Predicate\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"RootChainManager\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"}}},\"1337\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0x58a175BEbc8ec21A94ea63Aa5a28743945940EE6\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0d\",\"implementation\":\"0xe0aFC4e9E03e4aa67257Df7A2Eca77454309789D\",\"forwarder\":\"0x58a175BEbc8ec21A94ea63Aa5a28743945940EE6\"},\"CNSRegistry\":{\"address\":\"0xC58206842E4030a3B2CaBC78780Ae7635173C533\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01\",\"forwarder\":\"0xAc52F68f31577E44aE0C7E95A42dC9eb574B9383\"},\"MintingManager\":{\"address\":\"0x27935e7e85db3c4e7885eB828B9e889BA69a4e7f\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0f\",\"implementation\":\"0xa1A2114B0C4bDF9AEe05fdd80801e6267639FAd9\",\"forwarder\":\"0xC20631145b77a58018E2b10f2282Dd048E12fC81\"},\"ProxyAdmin\":{\"address\":\"0xbE5dEAC45dd1ca4ee18Dc2D585D84D3d3CB82B0D\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01\"},\"SignatureController\":{\"address\":\"0x7bB6Cd9be29fab783c0b494A06FED8b2E2596B7a\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x02\"},\"MintingController\":{\"address\":\"0x4a3C194eB88966178bfDD81744ddDafED611B830\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x03\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0x4872CC1be60A9DB9c880A0A437Da7a6AF134F08f\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x04\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"Resolver\":{\"address\":\"0xF8C26340C1eAeA6c7fF1760B25005e1306953572\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x08\",\"forwarder\":\"0x11dD97b7Ca847DfB6504e61B7B9Eb30F55E554a0\"},\"ProxyReader\":{\"address\":\"0x4e44E79e0cEc05D9e62e952B2088c02A3C450aeC\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x14\"},\"TwitterValidationOperator\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"FreeMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"MintableERC721Predicate\":{\"address\":\"0x7c3c91245769c8B7450aD522792deC4bd4bf797f\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x1b\"},\"RootChainManager\":{\"address\":\"0x2f5e6eed50C839835BD2873d428E1683793Ad09D\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x1d\"}}},\"80001\":{\"contracts\":{\"UNSRegistry\":{\"address\":\"0x2a93C52E7B6E7054870758e15A1446E769EdfB93\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0189f713\",\"implementation\":\"0xAc1a1F2136BfDe3a353a95C0676Cd0d55f311ee3\",\"forwarder\":\"0x2a93C52E7B6E7054870758e15A1446E769EdfB93\"},\"CNSRegistry\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"forwarder\":\"0x0000000000000000000000000000000000000000\"},\"MintingManager\":{\"address\":\"0x428189346bb3CC52f031A1092fd47C919AC30A9f\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01213f4a\",\"implementation\":\"0xCC17E698bA21bae4277579F22cA51135AaF00777\",\"forwarder\":\"0xEf3a491A8750BEC2Dff5339CF6Df94436d432C4d\"},\"ProxyAdmin\":{\"address\":\"0x460d63117c7Ab1624b7474C45BF46eC6702f57ce\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x01213b22\"},\"SignatureController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"MintingController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"WhitelistedMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"URIPrefixController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"DomainZoneController\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"Resolver\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"forwarder\":\"0x0000000000000000000000000000000000000000\"},\"ProxyReader\":{\"address\":\"0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B\",\"legacyAddresses\":[\"0xbd9e01F6513E7C05f71Bf21d419a3bDF1EA9104b\",\"0x332A8191905fA8E6eeA7350B5799F225B8ed30a9\"],\"deploymentBlock\":\"0x0189f72d\"},\"TwitterValidationOperator\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"FreeMinter\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\",\"deprecated\":true},\"MintableERC721Predicate\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"},\"RootChainManager\":{\"address\":\"0x0000000000000000000000000000000000000000\",\"legacyAddresses\":[],\"deploymentBlock\":\"0x0\"}}}}}");

/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/contracts/EthereumContract.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/contracts/EthereumContract.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var abi_1 = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/@ethersproject/abi/lib.esm/index.js");
var EthereumContract = /** @class */ (function () {
    function EthereumContract(abi, address, provider) {
        this.abi = abi;
        this.address = address;
        this.provider = provider;
        this.coder = new abi_1.Interface(this.abi);
    }
    EthereumContract.prototype.call = function (method, args) {
        return __awaiter(this, void 0, void 0, function () {
            var inputParam, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputParam = this.coder.encodeFunctionData(method, args);
                        return [4 /*yield*/, this.callEth(inputParam)];
                    case 1:
                        response = (_a.sent());
                        if (!response || response === '0x') {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, this.coder.decodeFunctionResult(method, response)];
                }
            });
        });
    };
    EthereumContract.prototype.multicall = function (callArgs) {
        return __awaiter(this, void 0, void 0, function () {
            var methods, _i, callArgs_1, call, inputParam, response, multicallResult, results, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        methods = [];
                        for (_i = 0, callArgs_1 = callArgs; _i < callArgs_1.length; _i++) {
                            call = callArgs_1[_i];
                            methods.push(this.coder.encodeFunctionData(call.method, call.args));
                        }
                        inputParam = this.coder.encodeFunctionData('multicall', [methods]);
                        return [4 /*yield*/, this.callEth(inputParam)];
                    case 1:
                        response = (_a.sent());
                        if (!response || response === '0x') {
                            return [2 /*return*/, []];
                        }
                        multicallResult = this.coder.decodeFunctionResult('multicall', response);
                        results = [];
                        for (i = 0; i < multicallResult.results.length; i++) {
                            results.push(this.coder.decodeFunctionResult(callArgs[i].method, multicallResult.results[i]));
                        }
                        return [2 /*return*/, results];
                }
            });
        });
    };
    EthereumContract.prototype.fetchLogs = function (eventName, tokenId, fromBlock) {
        if (fromBlock === void 0) { fromBlock = 'earliest'; }
        return __awaiter(this, void 0, void 0, function () {
            var topic, params, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topic = this.coder.getEventTopic(eventName);
                        params = [
                            {
                                fromBlock: fromBlock,
                                toBlock: 'latest',
                                address: this.address,
                                topics: [topic, tokenId],
                            },
                        ];
                        request = {
                            method: 'eth_getLogs',
                            params: params,
                        };
                        return [4 /*yield*/, this.provider.request(request)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    EthereumContract.prototype.callEth = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var params, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [
                            {
                                data: data,
                                to: this.address,
                            },
                            'latest',
                        ];
                        request = {
                            method: 'eth_call',
                            params: params,
                        };
                        return [4 /*yield*/, this.provider.request(request)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EthereumContract;
}());
exports.default = EthereumContract;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/contracts/uns/proxyReader.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/contracts/uns/proxyReader.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        inputs: [
            {
                internalType: 'contract IUNSRegistry',
                name: 'unsRegistry',
                type: 'address',
            },
            {
                internalType: 'contract ICNSRegistry',
                name: 'cnsRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'NAME',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'VERSION',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'childIdOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'exists',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'get',
        outputs: [
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'keyHash',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getByHash',
        outputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getData',
        outputs: [
            {
                internalType: 'address',
                name: 'resolver',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getDataByHash',
        outputs: [
            {
                internalType: 'address',
                name: 'resolver',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'getDataByHashForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resolvers',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
            {
                internalType: 'string[][]',
                name: 'keys',
                type: 'string[][]',
            },
            {
                internalType: 'string[][]',
                name: 'values',
                type: 'string[][]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'getDataForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resolvers',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
            {
                internalType: 'string[][]',
                name: 'values',
                type: 'string[][]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getMany',
        outputs: [
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getManyByHash',
        outputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'isApprovedOrOwner',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes[]',
                name: 'data',
                type: 'bytes[]',
            },
        ],
        name: 'multicall',
        outputs: [
            {
                internalType: 'bytes[]',
                name: 'results',
                type: 'bytes[]',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'ownerOfForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'registryOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'resolverOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
        name: 'reverseOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
];


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationError = exports.ConfigurationErrorCode = void 0;
var ConfigurationErrorCode;
(function (ConfigurationErrorCode) {
    ConfigurationErrorCode["IncorrectProvider"] = "IncorrectProvider";
    ConfigurationErrorCode["UnsupportedNetwork"] = "UnsupportedNetwork";
    ConfigurationErrorCode["UnspecifiedUrl"] = "UnspecifiedUrl";
    ConfigurationErrorCode["NetworkConfigMissing"] = "NetworkConfigMissing";
    ConfigurationErrorCode["CustomNetworkConfigMissing"] = "CustomNetworkConfigMissing";
    ConfigurationErrorCode["InvalidConfigurationField"] = "InvalidProxyReader";
})(ConfigurationErrorCode = exports.ConfigurationErrorCode || (exports.ConfigurationErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from ConfigurationErrorCode to a ConfigurationErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[ConfigurationErrorCode.IncorrectProvider] = function () {
        return "Provider doesn't implement sendAsync or send method";
    },
    _a[ConfigurationErrorCode.UnsupportedNetwork] = function (params) {
        return "Unsupported network in Resolution ".concat(params.method || '', " configuration");
    },
    _a[ConfigurationErrorCode.UnspecifiedUrl] = function (params) { return "Unspecified url in Resolution ".concat(params.method, " configuration"); },
    _a[ConfigurationErrorCode.NetworkConfigMissing] = function (params) {
        return "Missing configuration in Resolution ".concat(params.method, ". Please specify ").concat(params.config);
    },
    _a[ConfigurationErrorCode.CustomNetworkConfigMissing] = function (params) {
        return "Missing configuration in Resolution ".concat(params.method, ". Please specify ").concat(params.config, " when using a custom network");
    },
    _a[ConfigurationErrorCode.InvalidConfigurationField] = function (params) { return "Invalid '".concat(params.field, "' in Resolution ").concat(params.method); },
    _a);
/**
 * Configuration Error class is designed to control every error being thrown by wrong configurations for objects
 * @param code - Error Code
 * - IncorrectProvider - When provider doesn't have implemented send or sendAsync methods
 * - UnsupportedNetwork - When network is not specified or not supported
 * - UnspecifiedUrl - When url is not specified for custom naming service configurations
 * - CustomNetworkConfigMissing - When configuration is missing for custom network configurations
 * @param method - optional param to specify which namingService errored out
 */
var ConfigurationError = /** @class */ (function (_super) {
    __extends(ConfigurationError, _super);
    function ConfigurationError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var configurationErrorHandler = HandlersByCode[code];
        _this = _super.call(this, configurationErrorHandler(options)) || this;
        _this.code = code;
        _this.method = options.method;
        _this.name = 'ConfigurationError';
        Object.setPrototypeOf(_this, ConfigurationError.prototype);
        return _this;
    }
    return ConfigurationError;
}(Error));
exports.ConfigurationError = ConfigurationError;
exports.default = ConfigurationError;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/errors/dnsRecordsError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/errors/dnsRecordsError.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsRecordsError = exports.DnsRecordsErrorCode = void 0;
var DnsRecordsErrorCode;
(function (DnsRecordsErrorCode) {
    DnsRecordsErrorCode["InconsistentTtl"] = "InconsistentTtl";
    DnsRecordsErrorCode["DnsRecordCorrupted"] = "DnsRecordCorrupted";
})(DnsRecordsErrorCode = exports.DnsRecordsErrorCode || (exports.DnsRecordsErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from DnsRecordsErrorCode to a DnsRecordsErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[DnsRecordsErrorCode.InconsistentTtl] = function (params) {
        return "ttl for record ".concat(params.recordType, " is different for other records of the same type");
    },
    _a[DnsRecordsErrorCode.DnsRecordCorrupted] = function (params) {
        return "dns record ".concat(params.recordType, " is invalid json-string");
    },
    _a);
/**
 * Configuration Error class is designed to control every error being thrown by wrong configurations for objects
 * @param code - Error Code
 * - IncorrectProvider - When provider doesn't have implemented send or sendAsync methods
 * - UnsupportedNetwork - When network is not specified or not supported
 * - UnspecifiedUrl - When url is not specified for custom naming service configurations
 * @param method - optional param to specify which namingService errored out
 */
var DnsRecordsError = /** @class */ (function (_super) {
    __extends(DnsRecordsError, _super);
    function DnsRecordsError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var DnsRecordsErrorHandler = HandlersByCode[code];
        _this = _super.call(this, DnsRecordsErrorHandler(options)) || this;
        _this.code = code;
        _this.name = 'DnsRecordsError';
        Object.setPrototypeOf(_this, DnsRecordsError.prototype);
        return _this;
    }
    return DnsRecordsError;
}(Error));
exports.DnsRecordsError = DnsRecordsError;
exports.default = DnsRecordsError;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolutionError = exports.ResolutionErrorCode = void 0;
var ResolutionErrorCode;
(function (ResolutionErrorCode) {
    ResolutionErrorCode["UnregisteredDomain"] = "UnregisteredDomain";
    ResolutionErrorCode["UnspecifiedResolver"] = "UnspecifiedResolver";
    ResolutionErrorCode["UnsupportedDomain"] = "UnsupportedDomain";
    ResolutionErrorCode["UnsupportedService"] = "UnsupportedService";
    ResolutionErrorCode["UnsupportedMethod"] = "UnsupportedMethod";
    ResolutionErrorCode["UnspecifiedCurrency"] = "UnspecifiedCurrency";
    ResolutionErrorCode["UnsupportedCurrency"] = "UnsupportedCurrency";
    ResolutionErrorCode["IncorrectResolverInterface"] = "IncorrectResolverInterface";
    ResolutionErrorCode["RecordNotFound"] = "RecordNotFound";
    ResolutionErrorCode["MetadataEndpointError"] = "MetadataEndpointError";
    ResolutionErrorCode["ServiceProviderError"] = "ServiceProviderError";
    ResolutionErrorCode["InvalidTwitterVerification"] = "InvalidTwitterVerification";
    ResolutionErrorCode["InconsistentDomainArray"] = "InconsistentDomainArray";
    ResolutionErrorCode["InvalidDomainAddress"] = "InvalidDomainAddress";
})(ResolutionErrorCode = exports.ResolutionErrorCode || (exports.ResolutionErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from ResolutionErrorCode to a ResolutionErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[ResolutionErrorCode.UnregisteredDomain] = function (params) {
        return "Domain ".concat(params.domain, " is not registered");
    },
    _a[ResolutionErrorCode.UnspecifiedResolver] = function (params) {
        return "".concat(params.location ? "".concat(params.location, ": ") : '', "Domain ").concat(params.domain, " is not configured");
    },
    _a[ResolutionErrorCode.UnsupportedDomain] = function (params) {
        return "Domain ".concat(params.domain, " is not supported");
    },
    _a[ResolutionErrorCode.UnsupportedMethod] = function (params) {
        var _a;
        // We normally expect a domain name, but in can be absent in the tests.
        var zilHelp = ((_a = params.domain) === null || _a === void 0 ? void 0 : _a.endsWith('.zil'))
            ? " (if this method was called via the Resolution class with both UNS and ZNS providers configured not in the API mode, this error also means that the domain doesn't exist in UNS)"
            : '';
        return "Method ".concat(params.methodName, " is not supported for ").concat(params.domain).concat(zilHelp);
    },
    _a[ResolutionErrorCode.InvalidTwitterVerification] = function (params) {
        return "".concat(params.location ? "".concat(params.location, ": ") : '', "Domain ").concat(params.domain, " has invalid Twitter signature verification");
    },
    _a[ResolutionErrorCode.UnsupportedCurrency] = function (params) { return "".concat(params.currencyTicker, " is not supported"); },
    _a[ResolutionErrorCode.IncorrectResolverInterface] = function (params) { return "Domain resolver is configured incorrectly for ".concat(params.method); },
    _a[ResolutionErrorCode.RecordNotFound] = function (params) {
        return "".concat(params.location ? "".concat(params.location, ": ") : '', "No ").concat(params.recordName, " record found for ").concat(params.domain);
    },
    _a[ResolutionErrorCode.ServiceProviderError] = function (params) { return "< ".concat(params.providerMessage, " >"); },
    _a[ResolutionErrorCode.MetadataEndpointError] = function (params) {
        return "Failed to query tokenUri ".concat(params.tokenUri, ". Error: ").concat(params.errorMessage);
    },
    _a[ResolutionErrorCode.UnsupportedService] = function (params) {
        return "Naming service ".concat(params.namingService, " is not supported");
    },
    _a[ResolutionErrorCode.InvalidDomainAddress] = function (params) {
        return "Domain address ".concat(params.domain, " is invalid");
    },
    _a);
/**
 * Resolution Error class is designed to control every error being thrown by Resolution
 * @param code - Error Code
 * - UnsupportedDomain - domain is not supported by current Resolution instance
 * - UnregisteredDomain - domain is not owned by any address
 * - UnspecifiedResolver - domain has no resolver specified
 * - UnspecifiedCurrency - domain resolver doesn't have any address of specified currency
 * - UnsupportedCurrency - currency is not supported
 * - IncorrectResolverInterface - ResolverInterface is incorrected
 * - RecordNotFound - No record was found
 * @param domain - Domain name that was being used
 * @param method
 */
var ResolutionError = /** @class */ (function (_super) {
    __extends(ResolutionError, _super);
    function ResolutionError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var resolutionErrorHandler = HandlersByCode[code];
        var domain = options.domain, method = options.method, currencyTicker = options.currencyTicker;
        var message = resolutionErrorHandler(options);
        _this = _super.call(this, message) || this;
        _this.code = code;
        _this.domain = domain;
        _this.method = method;
        _this.currencyTicker = currencyTicker;
        _this.name = 'ResolutionError';
        Object.setPrototypeOf(_this, ResolutionError.prototype);
        return _this;
    }
    return ResolutionError;
}(Error));
exports.ResolutionError = ResolutionError;
exports.default = ResolutionError;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderFactories = exports.Eip1193Factories = exports.Eip1993Factories = exports.DnsRecordsErrorCode = exports.DnsRecordsError = exports.ConfigurationErrorCode = exports.ConfigurationError = exports.ResolutionErrorCode = exports.ResolutionError = exports.DnsUtils = exports.default = exports.Resolution = void 0;
var Resolution_1 = __webpack_require__(/*! ./Resolution */ "./node_modules/@unstoppabledomains/resolution/build/Resolution.js");
Object.defineProperty(exports, "Resolution", { enumerable: true, get: function () { return Resolution_1.Resolution; } });
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return Resolution_1.Resolution; } });
__exportStar(__webpack_require__(/*! ./types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js"), exports);
var DnsUtils_1 = __webpack_require__(/*! ./utils/DnsUtils */ "./node_modules/@unstoppabledomains/resolution/build/utils/DnsUtils.js");
Object.defineProperty(exports, "DnsUtils", { enumerable: true, get: function () { return __importDefault(DnsUtils_1).default; } });
var resolutionError_1 = __webpack_require__(/*! ./errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js");
Object.defineProperty(exports, "ResolutionError", { enumerable: true, get: function () { return resolutionError_1.ResolutionError; } });
Object.defineProperty(exports, "ResolutionErrorCode", { enumerable: true, get: function () { return resolutionError_1.ResolutionErrorCode; } });
var configurationError_1 = __webpack_require__(/*! ./errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js");
Object.defineProperty(exports, "ConfigurationError", { enumerable: true, get: function () { return configurationError_1.ConfigurationError; } });
Object.defineProperty(exports, "ConfigurationErrorCode", { enumerable: true, get: function () { return configurationError_1.ConfigurationErrorCode; } });
var dnsRecordsError_1 = __webpack_require__(/*! ./errors/dnsRecordsError */ "./node_modules/@unstoppabledomains/resolution/build/errors/dnsRecordsError.js");
Object.defineProperty(exports, "DnsRecordsError", { enumerable: true, get: function () { return dnsRecordsError_1.DnsRecordsError; } });
Object.defineProperty(exports, "DnsRecordsErrorCode", { enumerable: true, get: function () { return dnsRecordsError_1.DnsRecordsErrorCode; } });
var Eip1993Factories_1 = __webpack_require__(/*! ./utils/Eip1993Factories */ "./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js");
Object.defineProperty(exports, "Eip1993Factories", { enumerable: true, get: function () { return Eip1993Factories_1.Eip1993Factories; } });
var Eip1993Factories_2 = __webpack_require__(/*! ./utils/Eip1993Factories */ "./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js");
Object.defineProperty(exports, "Eip1193Factories", { enumerable: true, get: function () { return Eip1993Factories_2.Eip1993Factories; } });
var Eip1993Factories_3 = __webpack_require__(/*! ./utils/Eip1993Factories */ "./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js");
Object.defineProperty(exports, "ProviderFactories", { enumerable: true, get: function () { return Eip1993Factories_3.Eip1993Factories; } });


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/types/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/types/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasProvider = exports.ZnsSupportedNetwork = exports.UnsSupportedNetwork = exports.NullAddresses = exports.NullAddress = void 0;
exports.NullAddress = '0x0000000000000000000000000000000000000000';
var NullAddresses;
(function (NullAddresses) {
    NullAddresses[NullAddresses["0x"] = 0] = "0x";
    NullAddresses[NullAddresses["0x0000000000000000000000000000000000000000"] = 1] = "0x0000000000000000000000000000000000000000";
    NullAddresses[NullAddresses["0x0000000000000000000000000000000000000000000000000000000000000000"] = 2] = "0x0000000000000000000000000000000000000000000000000000000000000000";
})(NullAddresses = exports.NullAddresses || (exports.NullAddresses = {}));
// TypeScript will infer a string union type from the literal values passed to
// this function. Without `extends string`, it would instead generalize them
// to the common string type.
// @see https://stackoverflow.com/questions/36836011/checking-validity-of-string-literal-union-type-at-runtime
var StringUnion = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    Object.freeze(values);
    var valueSet = new Set(values);
    var guard = function (value) {
        return valueSet.has(value);
    };
    var check = function (value) {
        if (!guard(value)) {
            var actual = JSON.stringify(value);
            var expected = values.map(function (s) { return JSON.stringify(s); }).join(' | ');
            throw new TypeError("Value '".concat(actual, "' is not assignable to type '").concat(expected, "'."));
        }
        return value;
    };
    var unionNamespace = { guard: guard, check: check, values: values };
    return Object.freeze(unionNamespace);
};
exports.UnsSupportedNetwork = StringUnion('mainnet', 'rinkeby', 'goerli', 'polygon-mainnet', 'polygon-mumbai');
exports.ZnsSupportedNetwork = StringUnion('mainnet', 'testnet');
function hasProvider(obj) {
    return obj && !!obj.provider;
}
exports.hasProvider = hasProvider;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainType = exports.DnsRecordType = exports.NamehashOptionsDefault = exports.UDApiDefaultUrl = exports.UnclaimedDomainResponse = exports.NamingServiceName = exports.UnsLocation = void 0;
var UnsLocation;
(function (UnsLocation) {
    UnsLocation["Layer1"] = "UNSLayer1";
    UnsLocation["Layer2"] = "UNSLayer2";
})(UnsLocation = exports.UnsLocation || (exports.UnsLocation = {}));
var NamingServiceName;
(function (NamingServiceName) {
    NamingServiceName["UNS"] = "UNS";
    NamingServiceName["ZNS"] = "ZNS";
})(NamingServiceName = exports.NamingServiceName || (exports.NamingServiceName = {}));
exports.UnclaimedDomainResponse = {
    addresses: {},
    meta: {
        domain: '',
        namehash: '',
        resolver: '',
        owner: null,
        type: '',
        ttl: 0,
        blockchain: null,
    },
    records: {},
};
exports.UDApiDefaultUrl = 'https://unstoppabledomains.com/api/v1';
exports.NamehashOptionsDefault = {
    format: 'hex',
    prefix: true,
    zns: false,
};
var DnsRecordType;
(function (DnsRecordType) {
    DnsRecordType["A"] = "A";
    DnsRecordType["AAAA"] = "AAAA";
    DnsRecordType["AFSDB"] = "AFSDB";
    DnsRecordType["APL"] = "APL";
    DnsRecordType["CAA"] = "CAA";
    DnsRecordType["CDNSKEY"] = "CDNSKEY";
    DnsRecordType["CDS"] = "CDS";
    DnsRecordType["CERT"] = "CERT";
    DnsRecordType["CNAME"] = "CNAME";
    DnsRecordType["CSYNC"] = "CSYNC";
    DnsRecordType["DHCID"] = "DHCID";
    DnsRecordType["DLV"] = "DLV";
    DnsRecordType["DNAME"] = "DNAME";
    DnsRecordType["DNSKEY"] = "DNSKEY";
    DnsRecordType["DS"] = "DS";
    DnsRecordType["EUI48"] = "EUI48";
    DnsRecordType["EUI64"] = "EUI64";
    DnsRecordType["HINFO"] = "HINFO";
    DnsRecordType["HIP"] = "HIP";
    DnsRecordType["HTTPS"] = "HTTPS";
    DnsRecordType["IPSECKEY"] = "IPSECKEY";
    DnsRecordType["KEY"] = "KEY";
    DnsRecordType["KX"] = "KX";
    DnsRecordType["LOC"] = "LOC";
    DnsRecordType["MX"] = "MX";
    DnsRecordType["NAPTR"] = "NAPTR";
    DnsRecordType["NS"] = "NS";
    DnsRecordType["NSEC"] = "NSEC";
    DnsRecordType["NSEC3"] = "NSEC3";
    DnsRecordType["NSEC3PARAM"] = "NSEC3PARAM";
    DnsRecordType["OPENPGPKEY"] = "OPENPGPKEY";
    DnsRecordType["PTR"] = "PTR";
    DnsRecordType["RP"] = "RP";
    DnsRecordType["RRSIG"] = "RRSIG";
    DnsRecordType["SIG"] = "SIG";
    DnsRecordType["SMIMEA"] = "SMIMEA";
    DnsRecordType["SOA"] = "SOA";
    DnsRecordType["SRV"] = "SRV";
    DnsRecordType["SSHFP"] = "SSHFP";
    DnsRecordType["SVCB"] = "SVCB";
    DnsRecordType["TA"] = "TA";
    DnsRecordType["TKEY"] = "TKEY";
    DnsRecordType["TLSA"] = "TLSA";
    DnsRecordType["TSIG"] = "TSIG";
    DnsRecordType["TXT"] = "TXT";
    DnsRecordType["URI"] = "URI";
    DnsRecordType["ZONEMD"] = "ZONEMD";
})(DnsRecordType = exports.DnsRecordType || (exports.DnsRecordType = {}));
var BlockchainType;
(function (BlockchainType) {
    BlockchainType["ETH"] = "ETH";
    BlockchainType["MATIC"] = "MATIC";
    BlockchainType["ZIL"] = "ZIL";
})(BlockchainType = exports.BlockchainType || (exports.BlockchainType = {}));


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/DnsUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/DnsUtils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dnsRecordsError_1 = __importStar(__webpack_require__(/*! ../errors/dnsRecordsError */ "./node_modules/@unstoppabledomains/resolution/build/errors/dnsRecordsError.js"));
var publicTypes_1 = __webpack_require__(/*! ../types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var DnsUtils = /** @class */ (function () {
    function DnsUtils() {
    }
    DnsUtils.prototype.toList = function (record) {
        var _a;
        var _this = this;
        var dnsTypes = this.getAllDnsTypes(record);
        return (_a = []).concat.apply(_a, dnsTypes.map(function (type) { return _this.constructDnsRecords(record, type); }));
    };
    DnsUtils.prototype.toCrypto = function (records) {
        var cryptoRecords = {};
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            var type = record.type, TTL = record.TTL, data = record.data;
            var ttlInRecord = this.getJsonNumber(cryptoRecords["dns.".concat(type, ".ttl")]);
            var dnsInRecord = this.getJsonArray(cryptoRecords, "dns.".concat(type));
            if (dnsInRecord) {
                dnsInRecord.push(data);
                cryptoRecords["dns.".concat(type)] = JSON.stringify(dnsInRecord);
            }
            else {
                cryptoRecords["dns.".concat(type)] = JSON.stringify([data]);
                cryptoRecords["dns.".concat(type, ".ttl")] = TTL.toString(10);
            }
            if (!!ttlInRecord && ttlInRecord !== TTL) {
                throw new dnsRecordsError_1.default(dnsRecordsError_1.DnsRecordsErrorCode.InconsistentTtl, {
                    recordType: type,
                });
            }
        }
        return cryptoRecords;
    };
    DnsUtils.prototype.protectFromCorruptRecord = function (rawRecord, type) {
        try {
            return rawRecord ? JSON.parse(rawRecord) : undefined;
        }
        catch (err) {
            if (err instanceof SyntaxError) {
                throw new dnsRecordsError_1.default(dnsRecordsError_1.DnsRecordsErrorCode.DnsRecordCorrupted, {
                    recordType: type,
                });
            }
            throw err;
        }
    };
    DnsUtils.prototype.getJsonArray = function (cryptoRecrods, key) {
        var rawRecord = cryptoRecrods[key];
        var type = key.split('.')[1];
        return this.protectFromCorruptRecord(rawRecord, type);
    };
    DnsUtils.prototype.getJsonNumber = function (rawRecord) {
        return rawRecord ? parseInt(rawRecord, 10) : undefined;
    };
    DnsUtils.prototype.getAllDnsTypes = function (records) {
        var keys = new Set();
        Object.keys(records).forEach(function (key) {
            var chunks = key.split('.');
            var type = chunks[1] && chunks[1] !== 'ttl';
            if (type) {
                keys.add(publicTypes_1.DnsRecordType[chunks[1]]);
            }
        });
        return Array.from(keys);
    };
    DnsUtils.prototype.constructDnsRecords = function (cryptoData, type) {
        var TTL = this.parseTtl(cryptoData, type);
        var jsonValueString = cryptoData["dns.".concat(type)];
        if (!jsonValueString) {
            return [];
        }
        var typeData = this.protectFromCorruptRecord(jsonValueString, type);
        if (!this.isStringArray(typeData)) {
            return [];
        }
        return typeData.map(function (data) { return ({ TTL: TTL, data: data, type: type }); });
    };
    DnsUtils.prototype.parseTtl = function (data, type) {
        var defaultTtl = data['dns.ttl'];
        var recordTtl = data["dns.".concat(type, ".ttl")];
        if (recordTtl) {
            var parsedInt = this.parseIfNumber(recordTtl);
            if (parsedInt) {
                return parsedInt;
            }
        }
        if (defaultTtl) {
            var parsedInt = this.parseIfNumber(defaultTtl);
            if (parsedInt) {
                return parsedInt;
            }
        }
        return DnsUtils.DefaultTtl;
    };
    DnsUtils.prototype.parseIfNumber = function (str) {
        var parsedInt = parseInt(str, 10);
        if (!isNaN(parsedInt)) {
            return parsedInt;
        }
    };
    DnsUtils.prototype.isStringArray = function (value) {
        if (value instanceof Array) {
            return value.every(function (item) { return typeof item === 'string'; });
        }
        return false;
    };
    DnsUtils.DefaultTtl = 300; // 5 minutes
    return DnsUtils;
}());
exports.default = DnsUtils;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/Eip1993Factories.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eip1993Factories = void 0;
var configurationError_1 = __webpack_require__(/*! ../errors/configurationError */ "./node_modules/@unstoppabledomains/resolution/build/errors/configurationError.js");
var resolutionError_1 = __importStar(__webpack_require__(/*! ../errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
exports.Eip1993Factories = {
    fromWeb3Version0Provider: fromWeb3Version0Provider,
    fromWeb3Version1Provider: fromWeb3Version1Provider,
    fromEthersProvider: fromEthersProvider,
    fromZilliqaProvider: fromZilliqaProvider,
};
/**
 * Create a Provider instance from web3 0.x version provider
 * @param provider - an 0.x version provider from web3 ( must implement sendAsync(payload, callback) )
 * @see https://github.com/ethereum/web3.js/blob/0.20.7/lib/web3/httpprovider.js#L116
 */
function fromWeb3Version0Provider(provider) {
    if (provider.sendAsync === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) {
            return new Promise(function (resolve, reject) {
                provider.sendAsync({
                    jsonrpc: '2.0',
                    method: request.method,
                    params: wrapArray(request.params),
                    id: 1,
                }, function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    if (result.error) {
                        reject(new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: result.error,
                        }));
                    }
                    resolve(result.result);
                });
            });
        },
    };
}
/**
 * Create a Provider instance from web3 1.x version provider
 * @param provider - an 1.x version provider from web3 ( must implement send(payload, callback) )
 * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-core-helpers/types/index.d.ts#L165
 * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-providers-http/src/index.js#L95
 */
function fromWeb3Version1Provider(provider) {
    if (provider.send === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) {
            return new Promise(function (resolve, reject) {
                provider.send({
                    jsonrpc: '2.0',
                    method: request.method,
                    params: wrapArray(request.params),
                    id: 1,
                }, function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    if (result.error) {
                        reject(new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: result.error,
                        }));
                    }
                    resolve(result.result);
                });
            });
        },
    };
}
/**
 * Creates a Provider instance from a provider that implements Ethers Provider#call interface.
 * This wrapper support only `eth_call` method for now, which is enough for all the current Resolution functionality
 * @param provider - provider object
 * @see https://github.com/ethers-io/ethers.js/blob/v4-legacy/providers/abstract-provider.d.ts#L91
 * @see https://github.com/ethers-io/ethers.js/blob/v5.0.4/packages/abstract-provider/src.ts/index.ts#L224
 * @see https://docs.ethers.io/ethers.js/v5-beta/api-providers.html#jsonrpcprovider-inherits-from-provider
 * @see https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts
 */
function fromEthersProvider(provider) {
    var _this = this;
    if (provider.call === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        _a = request.method;
                        switch (_a) {
                            case 'eth_call': return [3 /*break*/, 1];
                            case 'eth_getLogs': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, provider.call(request.params[0])];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, provider.getLogs(request.params[0])];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                        providerMessage: "Unsupported provider method ".concat(request.method),
                    });
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: error_1.message,
                        });
                    case 8: return [2 /*return*/];
                }
            });
        }); },
    };
}
/**
 * Creates a Provider instance from @zilliqa-js/core Provider
 * @param provider - provider object
 */
function fromZilliqaProvider(provider) {
    var _this = this;
    if (provider.middleware === undefined || provider.send === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) { return __awaiter(_this, void 0, void 0, function () {
            var resp, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, provider.send.apply(provider, __spreadArray([request.method], (request.params || []), false))];
                    case 1:
                        resp = _a.sent();
                        if (resp.error) {
                            throw new Error(resp.error.message);
                        }
                        return [2 /*return*/, resp.result];
                    case 2:
                        error_2 = _a.sent();
                        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: error_2.message,
                        });
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
}
function wrapArray(params) {
    if (params === void 0) { params = []; }
    return params instanceof Array ? params : [params];
}


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/Networking.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"));
var Networking = /** @class */ (function () {
    function Networking() {
    }
    Networking.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, cross_fetch_1.default)(url, options)];
            });
        });
    };
    return Networking;
}());
exports.default = Networking;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/TwitterSignatureValidator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/TwitterSignatureValidator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTwitterSignature = void 0;
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var js_sha3_1 = __webpack_require__(/*! js-sha3 */ "./node_modules/js-sha3/src/sha3.js");
var recoverSignature_1 = __webpack_require__(/*! ./recoverSignature */ "./node_modules/@unstoppabledomains/resolution/build/utils/recoverSignature.js");
var namehash_1 = __webpack_require__(/*! ./namehash */ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js");
var TwitterVerificationAddress = '0x12cfb13522F13a78b650a8bCbFCf50b7CB899d82';
var isValidTwitterSignature = function (_a) {
    var tokenId = _a.tokenId, owner = _a.owner, twitterHandle = _a.twitterHandle, validationSignature = _a.validationSignature;
    var tokenIdInDecimals = (0, namehash_1.fromHexStringToDecimals)(tokenId);
    var message = [
        tokenIdInDecimals,
        owner,
        'social.twitter.username',
        twitterHandle,
    ]
        .map(function (value) {
        return '0x' + (0, js_sha3_1.keccak256)(value.startsWith('0x') ? (0, index_1.hexToBytes)(value) : value);
    })
        .reduce(function (message, hashedValue) { return message + hashedValue; }, '');
    var signerAddress = (0, recoverSignature_1.recover)(message, validationSignature);
    return signerAddress === TwitterVerificationAddress;
};
exports.isValidTwitterSignature = isValidTwitterSignature;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapResult = exports.wrapResult = exports.EthereumNetworksInverted = exports.EthereumNetworks = exports.findNamingServiceName = exports.domainExtensionToNamingServiceName = exports.constructRecords = exports.isNullAddress = exports.hexToBytes = exports.signedLink = void 0;
var publicTypes_1 = __webpack_require__(/*! ../types/publicTypes */ "./node_modules/@unstoppabledomains/resolution/build/types/publicTypes.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@unstoppabledomains/resolution/build/types/index.js");
var ProviderURLMap = {
    infura: {
        mainnet: 'https://mainnet.infura.io/v3/',
        rinkeby: 'https://rinkeby.infura.io/v3/',
        goerli: 'https://goerli.infura.io/v3/',
        'polygon-mainnet': 'https://polygon-mainnet.infura.io/v3/',
        'polygon-mumbai': 'https://polygon-mumbai.infura.io/v3/',
    },
    alchemy: {
        mainnet: 'https://eth-mainnet.alchemyapi.io/v2/',
        rinkeby: 'https://eth-rinkeby.alchemyapi.io/v2/',
        goerli: 'https://eth-goerli.alchemyapi.io/v2/',
        'polygon-mainnet': 'https://polygon-mainnet.g.alchemy.com/v2/',
        'polygon-mumbai': 'https://polygon-mumbai.g.alchemy.com/v2/',
    },
};
function signedLink(key, network, provider) {
    if (network === void 0) { network = 'mainnet'; }
    if (provider === void 0) { provider = 'alchemy'; }
    var url = ProviderURLMap[provider][network];
    return "".concat(url).concat(key);
}
exports.signedLink = signedLink;
function hexToBytes(hexString) {
    var hex = hexString.replace(/^0x/i, '');
    var bytes = [];
    for (var c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
exports.hexToBytes = hexToBytes;
function isNullAddress(key) {
    if (!key) {
        return true;
    }
    return Object.values(types_1.NullAddresses).includes(key);
}
exports.isNullAddress = isNullAddress;
function constructRecords(keys, values) {
    var records = {};
    keys.forEach(function (key, index) {
        records[key] =
            (values instanceof Array ? values[index] : values === null || values === void 0 ? void 0 : values[key]) || '';
    });
    return records;
}
exports.constructRecords = constructRecords;
exports.domainExtensionToNamingServiceName = {
    crypto: publicTypes_1.NamingServiceName.UNS,
    zil: publicTypes_1.NamingServiceName.ZNS,
};
var findNamingServiceName = function (domain) {
    var extension = domain.split('.').pop();
    if (!extension) {
        return '';
    }
    else if (extension in exports.domainExtensionToNamingServiceName) {
        return exports.domainExtensionToNamingServiceName[extension];
    }
    else {
        return exports.domainExtensionToNamingServiceName.crypto;
    }
};
exports.findNamingServiceName = findNamingServiceName;
exports.EthereumNetworks = {
    mainnet: 1,
    ropsten: 3,
    rinkeby: 4,
    goerli: 5,
    'polygon-mainnet': 137,
    'polygon-mumbai': 80001,
};
exports.EthereumNetworksInverted = {
    1: 'mainnet',
    3: 'ropsten',
    4: 'rinkeby',
    5: 'goerli',
    137: 'polygon-mainnet',
    80001: 'polygon-mumbai',
};
var wrapResult = function (func) {
    var callResult;
    // Catch immediately in case it's not an async call.
    try {
        callResult = func();
    }
    catch (error) {
        return Promise.resolve({ result: null, error: error });
    }
    // `Promise.resolve` will convert both promise-like objects and plain values to promises.
    var promise = callResult instanceof Promise ? callResult : Promise.resolve(callResult);
    // We wrap results and errors to avoid unhandled promise rejections in case we won't `await` every promise
    // and return earlier.
    return promise.then(function (result) { return ({ result: result, error: null }); }, function (error) { return ({ result: null, error: error }); });
};
exports.wrapResult = wrapResult;
var unwrapResult = function (wrappedResult) {
    if (wrappedResult.error !== null) {
        throw wrappedResult.error;
    }
    return wrappedResult.result;
};
exports.unwrapResult = unwrapResult;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/namehash.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromDecStringToHex = exports.fromHexStringToDecimals = exports.znsChildhash = exports.znsNamehash = exports.eip137Childhash = exports.eip137Namehash = void 0;
var sha256_1 = __importDefault(__webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js"));
var sha3_1 = __importDefault(__webpack_require__(/*! crypto-js/sha3 */ "./node_modules/crypto-js/sha3.js"));
var enc_hex_1 = __importDefault(__webpack_require__(/*! crypto-js/enc-hex */ "./node_modules/crypto-js/enc-hex.js"));
var lib_typedarrays_1 = __importDefault(__webpack_require__(/*! crypto-js/lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"));
var bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
function eip137Namehash(domain) {
    var arr = hashArray(domain, 'sha3');
    return arrayToHex(arr);
}
exports.eip137Namehash = eip137Namehash;
function eip137Childhash(parentHash, label) {
    return childhash(parentHash, label, 'sha3');
}
exports.eip137Childhash = eip137Childhash;
function znsNamehash(domain) {
    var arr = hashArray(domain, 'sha256');
    return arrayToHex(arr);
}
exports.znsNamehash = znsNamehash;
function znsChildhash(parentHash, label) {
    return childhash(parentHash, label, 'sha256');
}
exports.znsChildhash = znsChildhash;
function childhash(parentHash, label, hashingAlgo) {
    var hash = hashingAlgo === 'sha256' ? sha256_1.default : sha3_1.default;
    var opts = { outputLength: 256 };
    var parent = parentHash.replace(/^0x/, '');
    var childHash = enc_hex_1.default.stringify(hash(label, opts));
    return "0x".concat(enc_hex_1.default.stringify(hash(enc_hex_1.default.parse("".concat(parent).concat(childHash)), opts)));
}
function hashArray(domain, hashingAlgo) {
    if (!domain) {
        return lib_typedarrays_1.default.create(Array.from(new Uint8Array(8)));
    }
    var hash = hashingAlgo === 'sha256' ? sha256_1.default : sha3_1.default;
    var opts = { outputLength: 256 };
    var _a = domain.split('.'), label = _a[0], remainder = _a.slice(1);
    var labelHash = hash(label, opts);
    var remainderHash = hashArray(remainder.join('.'), hashingAlgo);
    return hash(remainderHash.concat(labelHash), opts);
}
function arrayToHex(arr) {
    return "0x".concat(enc_hex_1.default.stringify(arr));
}
function fromHexStringToDecimals(value) {
    if (value.startsWith('0x')) {
        var valueWithoutPrefix = value.slice(2, value.length);
        var bn = new bn_js_1.default(valueWithoutPrefix, 16);
        return bn.toString(10);
    }
    return value;
}
exports.fromHexStringToDecimals = fromHexStringToDecimals;
function fromDecStringToHex(value) {
    if (!value.startsWith('0x')) {
        var bn = new bn_js_1.default(value, 10);
        return "0x".concat(bn.toString(16));
    }
    return value;
}
exports.fromDecStringToHex = fromDecStringToHex;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/prepareAndValidate.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/prepareAndValidate.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareAndValidateDomain = void 0;
var resolutionError_1 = __importStar(__webpack_require__(/*! ../errors/resolutionError */ "./node_modules/@unstoppabledomains/resolution/build/errors/resolutionError.js"));
/**
 * Checks domain name for special symbols and returns address in lowercase without spaces
 * @throws Will throw an error if domain address contains special symbols
 * @param domain - a domain address
 */
var reg = RegExp('^[.a-z0-9-]+$');
function prepareAndValidateDomain(domain) {
    var retVal = domain ? domain.trim().toLowerCase() : '';
    if (!reg.test(retVal)) {
        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.InvalidDomainAddress, {
            domain: domain,
        });
    }
    return retVal;
}
exports.prepareAndValidateDomain = prepareAndValidateDomain;


/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/recoverSignature.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/recoverSignature.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.recover = exports.hashMessage = void 0;
/* eslint-disable no-undef */
var js_sha3_1 = __webpack_require__(/*! js-sha3 */ "./node_modules/js-sha3/src/sha3.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/@unstoppabledomains/resolution/build/utils/index.js");
var elliptic_1 = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
var secp256k1 = new elliptic_1.ec('secp256k1');
var bytesLength = function (a) { return (a.length - 2) / 2; };
var bytesSlice = function (i, j, bs) {
    return '0x' + bs.slice(i * 2 + 2, j * 2 + 2);
};
var bytesToNumber = function (hex) { return parseInt(hex.slice(2), 16); };
var decodeSignature = function (hex) { return [
    bytesSlice(64, bytesLength(hex), hex),
    bytesSlice(0, 32, hex),
    bytesSlice(32, 64, hex),
]; };
var toChecksum = function (address) {
    var addressHash = (0, js_sha3_1.keccak256)(address.slice(2));
    var checksumAddress = '0x';
    for (var i = 0; i < 40; i++) {
        checksumAddress +=
            parseInt(addressHash[i + 2], 16) > 7
                ? address[i + 2].toUpperCase()
                : address[i + 2];
    }
    return checksumAddress;
};
var hashMessage = function (message) {
    var messageBytes = (0, index_1.hexToBytes)(Buffer.from(message, 'utf8').toString('hex'));
    var messageBuffer = Buffer.from(messageBytes);
    var preamble = '\x19Ethereum Signed Message:\n' + messageBytes.length;
    var preambleBuffer = Buffer.from(preamble);
    var ethMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return '0x' + (0, js_sha3_1.keccak256)(ethMessage.toString());
};
exports.hashMessage = hashMessage;
var recover = function (message, signature) {
    var hash = (0, exports.hashMessage)(message);
    var vals = decodeSignature(signature);
    var vrs = {
        v: bytesToNumber(vals[0]),
        r: vals[1].slice(2),
        s: vals[2].slice(2),
    };
    var ecPublicKey = secp256k1.recoverPubKey(Buffer.from(hash.slice(2), 'hex'), vrs, vrs.v < 2 ? vrs.v : 1 - (vrs.v % 2));
    var publicKey = '0x' + ecPublicKey.encode('hex', false).slice(2);
    var publicHash = '0x' + (0, js_sha3_1.keccak256)((0, index_1.hexToBytes)(publicKey));
    return toChecksum('0x' + publicHash.slice(-40));
};
exports.recover = recover;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@unstoppabledomains/resolution/build/utils/znsUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@unstoppabledomains/resolution/build/utils/znsUtils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/* eslint-disable no-undef */
/**
 * All functionality below came from here https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-crypto/src
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBech32Address = exports.toBech32Address = exports.toChecksumAddress = void 0;
var bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
var sha256_1 = __importDefault(__webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js"));
var enc_hex_1 = __importDefault(__webpack_require__(/*! crypto-js/enc-hex */ "./node_modules/crypto-js/enc-hex.js"));
var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
var GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
// HRP is the human-readable part of zilliqa bech32 addresses
var HRP = 'zil';
var tHRP = 'tzil';
function isByteString(str, len) {
    return !!str.replace('0x', '').match("^[0-9a-fA-F]{".concat(len, "}$"));
}
function isAddress(address) {
    return isByteString(address, 40);
}
/**
 * convertBits
 *
 * groups buffers of a certain width to buffers of the desired width.
 *
 * For example, converts byte buffers to buffers of maximum 5 bit numbers,
 * padding those numbers as necessary. Necessary for encoding Ethereum-style
 * addresses as bech32 ones.
 * @param {Buffer} data
 * @param {number} fromWidth
 * @param {number} toWidth
 * @param {boolean} pad
 * @returns {Buffer|null}
 */
function convertBits(data, fromWidth, toWidth, pad) {
    if (pad === void 0) { pad = true; }
    var acc = 0;
    var bits = 0;
    var ret = [];
    var maxv = (1 << toWidth) - 1;
    // tslint:disable-next-line
    for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || value >> fromWidth !== 0) {
            return null;
        }
        acc = (acc << fromWidth) | value;
        bits += fromWidth;
        while (bits >= toWidth) {
            bits -= toWidth;
            ret.push((acc >> bits) & maxv);
        }
    }
    if (pad) {
        if (bits > 0) {
            ret.push((acc << (toWidth - bits)) & maxv);
        }
    }
    else if (bits >= fromWidth || (acc << (toWidth - bits)) & maxv) {
        return null;
    }
    return Buffer.from(ret);
}
function hrpExpand(hrp) {
    var ret = [];
    var p;
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) >> 5);
    }
    ret.push(0);
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) & 31);
    }
    return Buffer.from(ret);
}
function polymod(values) {
    var chk = 1;
    // tslint:disable-next-line
    for (var p = 0; p < values.length; ++p) {
        var top_1 = chk >> 25;
        chk = ((chk & 0x1ffffff) << 5) ^ values[p];
        for (var i = 0; i < 5; ++i) {
            if ((top_1 >> i) & 1) {
                chk ^= GENERATOR[i];
            }
        }
    }
    return chk;
}
function createChecksum(hrp, data) {
    var values = Buffer.concat([
        Buffer.from(hrpExpand(hrp)),
        data,
        Buffer.from([0, 0, 0, 0, 0, 0]),
    ]);
    // var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
    var mod = polymod(values) ^ 1;
    var ret = [];
    for (var p = 0; p < 6; ++p) {
        ret.push((mod >> (5 * (5 - p))) & 31);
    }
    return Buffer.from(ret);
}
function verifyChecksum(hrp, data) {
    return polymod(Buffer.concat([hrpExpand(hrp), data])) === 1;
}
function encode(hrp, data) {
    var combined = Buffer.concat([data, createChecksum(hrp, data)]);
    var ret = hrp + '1';
    // tslint:disable-next-line
    for (var p = 0; p < combined.length; ++p) {
        ret += CHARSET.charAt(combined[p]);
    }
    return ret;
}
function decode(bechString) {
    var p;
    var hasLower = false;
    var hasUpper = false;
    for (p = 0; p < bechString.length; ++p) {
        if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
            return null;
        }
        if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
            hasLower = true;
        }
        if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
            hasUpper = true;
        }
    }
    if (hasLower && hasUpper) {
        return null;
    }
    bechString = bechString.toLowerCase();
    var pos = bechString.lastIndexOf('1');
    if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
        return null;
    }
    var hrp = bechString.substring(0, pos);
    var data = [];
    for (p = pos + 1; p < bechString.length; ++p) {
        var d = CHARSET.indexOf(bechString.charAt(p));
        if (d === -1) {
            return null;
        }
        data.push(d);
    }
    if (!verifyChecksum(hrp, Buffer.from(data))) {
        return null;
    }
    return { hrp: hrp, data: Buffer.from(data.slice(0, data.length - 6)) };
}
/**
 * toChecksumAddress
 *
 * takes hex-encoded string and returns the corresponding address
 * @param {string} address
 * @returns {string}
 */
var toChecksumAddress = function (address) {
    if (!isAddress(address)) {
        throw new Error("".concat(address, " is not a valid base 16 address"));
    }
    address = address.toLowerCase().replace('0x', '');
    var hash = enc_hex_1.default.stringify((0, sha256_1.default)(enc_hex_1.default.parse(address)));
    var v = new bn_js_1.default(hash, 'hex', 'be');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if ('0123456789'.indexOf(address[i]) !== -1) {
            ret += address[i];
        }
        else {
            ret += v.and(new bn_js_1.default(2).pow(new bn_js_1.default(255 - 6 * i))).gte(new bn_js_1.default(1))
                ? address[i].toUpperCase()
                : address[i].toLowerCase();
        }
    }
    return ret;
};
exports.toChecksumAddress = toChecksumAddress;
/**
 * toBech32Address
 *
 * Encodes a canonical 20-byte Ethereum-style address as a bech32 zilliqa
 * address.
 *
 * The expected format is zil1<address><checksum> where address and checksum
 * are the result of bech32 encoding a Buffer containing the address bytes.
 * @param {string} address 20 byte canonical address
 * @param {boolean} testnet
 * @returns {string} 38 char bech32 encoded zilliqa address
 */
function toBech32Address(address, testnet) {
    if (testnet === void 0) { testnet = false; }
    if (!isAddress(address)) {
        throw new Error('Invalid address format.');
    }
    var addrBz = convertBits(Buffer.from(address.replace('0x', ''), 'hex'), 8, 5);
    if (addrBz === null) {
        throw new Error('Could not convert byte Buffer to 5-bit Buffer');
    }
    return encode(testnet ? tHRP : HRP, addrBz);
}
exports.toBech32Address = toBech32Address;
/**
 * fromBech32Address
 * @param {string} address - a valid Zilliqa bech32 address
 * @param {boolean} testnet
 * @returns {string} a canonical 20-byte Ethereum-style address
 */
function fromBech32Address(address, testnet) {
    if (testnet === void 0) { testnet = false; }
    var res = decode(address);
    if (res === null) {
        throw new Error('Invalid bech32 address');
    }
    var hrp = res.hrp, data = res.data;
    var shouldBe = testnet ? tHRP : HRP;
    if (hrp !== shouldBe) {
        throw new Error("Expected hrp to be ".concat(shouldBe, " but got ").concat(hrp));
    }
    var buf = convertBits(data, 5, 8, false);
    if (buf === null) {
        throw new Error('Could not convert buffer to bytes');
    }
    return (0, exports.toChecksumAddress)(buf.toString('hex'));
}
exports.fromBech32Address = fromBech32Address;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/crypto-js/enc-hex.js":
/*!*******************************************!*\
  !*** ./node_modules/crypto-js/enc-hex.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Hex;

}));

/***/ })

}]);
//# sourceMappingURL=1.js.map