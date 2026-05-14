var dagreD3 = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity6(value) {
        return value;
      }
      module.exports = identity6;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start2, transform2) {
        start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
        return function() {
          var args = arguments, index3 = -1, length3 = nativeMax(args.length - start2, 0), array4 = Array(length3);
          while (++index3 < length3) {
            array4[index3] = args[start2 + index3];
          }
          index3 = -1;
          var otherArgs = Array(start2 + 1);
          while (++index3 < start2) {
            otherArgs[index3] = args[index3];
          }
          otherArgs[start2] = transform2(array4);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant2(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant2;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root3 = freeGlobal || freeSelf || Function("return this")();
      module.exports = root3;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root3 = require_root();
      var Symbol3 = root3.Symbol;
      module.exports = Symbol3;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol3 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol3 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type2 = typeof value;
        return value != null && (type2 == "object" || type2 == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction2(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction2;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root3 = require_root();
      var coreJsData = root3["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = (function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      })();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction2 = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object2, key) {
        return object2 == null ? void 0 : object2[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object2, key) {
        var value = getValue(object2, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = (function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      })();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant2 = require_constant();
      var defineProperty = require_defineProperty();
      var identity6 = require_identity();
      var baseSetToString = !defineProperty ? identity6 : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant2(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count3 = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count3 >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count3 = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS({
    "node_modules/lodash/_baseRest.js"(exports, module) {
      var identity6 = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start2) {
        return setToString(overRest(func, start2, identity6), func + "");
      }
      module.exports = baseRest;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction2 = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction2(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length3) {
        var type2 = typeof value;
        length3 = length3 == null ? MAX_SAFE_INTEGER : length3;
        return !!length3 && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS({
    "node_modules/lodash/_isIterateeCall.js"(exports, module) {
      var eq = require_eq();
      var isArrayLike = require_isArrayLike();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      function isIterateeCall(value, index3, object2) {
        if (!isObject(object2)) {
          return false;
        }
        var type2 = typeof index3;
        if (type2 == "number" ? isArrayLike(object2) && isIndex(index3, object2.length) : type2 == "string" && index3 in object2) {
          return eq(object2[index3], value);
        }
        return false;
      }
      module.exports = isIterateeCall;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index3 = -1, result = Array(n);
        while (++index3 < n) {
          result[index3] = iteratee(index3);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
        return arguments;
      })()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root3 = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root3.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length3 = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length3)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object2) {
        var result = [];
        if (object2 != null) {
          for (var key in Object(object2)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object2) {
        if (!isObject(object2)) {
          return nativeKeysIn(object2);
        }
        var isProto = isPrototype(object2), result = [];
        for (var key in object2) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/defaults.js
  var require_defaults = __commonJS({
    "node_modules/lodash/defaults.js"(exports, module) {
      var baseRest = require_baseRest();
      var eq = require_eq();
      var isIterateeCall = require_isIterateeCall();
      var keysIn = require_keysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var defaults2 = baseRest(function(object2, sources) {
        object2 = Object(object2);
        var index3 = -1;
        var length3 = sources.length;
        var guard = length3 > 2 ? sources[2] : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length3 = 1;
        }
        while (++index3 < length3) {
          var source = sources[index3];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object2[key];
            if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
              object2[key] = source[key];
            }
          }
        }
        return object2;
      });
      module.exports = defaults2;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array4, iteratee) {
        var index3 = -1, length3 = array4 == null ? 0 : array4.length;
        while (++index3 < length3) {
          if (iteratee(array4[index3], index3, array4) === false) {
            break;
          }
        }
        return array4;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object2, iteratee, keysFunc) {
          var index3 = -1, iterable = Object(object2), props = keysFunc(object2), length3 = props.length;
          while (length3--) {
            var key = props[fromRight ? length3 : ++index3];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object2;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform2) {
        return function(arg) {
          return func(transform2(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object2) {
        if (!isPrototype(object2)) {
          return nativeKeys(object2);
        }
        var result = [];
        for (var key in Object(object2)) {
          if (hasOwnProperty.call(object2, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object2, iteratee) {
        return object2 && baseFor(object2, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length3 = collection.length, index3 = fromRight ? length3 : -1, iterable = Object(collection);
          while (fromRight ? index3-- : ++index3 < length3) {
            if (iteratee(iterable[index3], index3, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity6 = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity6;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach;
    }
  });

  // node_modules/lodash/each.js
  var require_each = __commonJS({
    "node_modules/lodash/each.js"(exports, module) {
      module.exports = require_forEach();
    }
  });

  // node_modules/lodash/_baseHas.js
  var require_baseHas = __commonJS({
    "node_modules/lodash/_baseHas.js"(exports, module) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseHas(object2, key) {
        return object2 != null && hasOwnProperty.call(object2, key);
      }
      module.exports = baseHas;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object2) {
        if (isArray(value)) {
          return false;
        }
        var type2 = typeof value;
        if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index3 = -1, length3 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index3 < length3) {
          var entry = entries[index3];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array4, key) {
        var length3 = array4.length;
        while (length3--) {
          if (eq(array4[length3][0], key)) {
            return length3;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index3 = assocIndexOf(data, key);
        if (index3 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index3 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index3, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index3 = assocIndexOf(data, key);
        return index3 < 0 ? void 0 : data[index3][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index3 = assocIndexOf(data, key);
        if (index3 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index3][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index3 = -1, length3 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index3 < length3) {
          var entry = entries[index3];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root3 = require_root();
      var Map2 = getNative(root3, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type2 = typeof value;
        return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map4, key) {
        var data = map4.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index3 = -1, length3 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index3 < length3) {
          var entry = entries[index3];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number5, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number5 || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array4, iteratee) {
        var index3 = -1, length3 = array4 == null ? 0 : array4.length, result = Array(length3);
        while (++index3 < length3) {
          result[index3] = iteratee(array4[index3], index3, array4);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol3 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object2) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object2) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object2, path2, hasFunc) {
        path2 = castPath(path2, object2);
        var index3 = -1, length3 = path2.length, result = false;
        while (++index3 < length3) {
          var key = toKey(path2[index3]);
          if (!(result = object2 != null && hasFunc(object2, key))) {
            break;
          }
          object2 = object2[key];
        }
        if (result || ++index3 != length3) {
          return result;
        }
        length3 = object2 == null ? 0 : object2.length;
        return !!length3 && isLength(length3) && isIndex(key, length3) && (isArray(object2) || isArguments(object2));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/has.js
  var require_has = __commonJS({
    "node_modules/lodash/has.js"(exports, module) {
      var baseHas = require_baseHas();
      var hasPath = require_hasPath();
      function has2(object2, path2) {
        return object2 != null && hasPath(object2, path2, baseHas);
      }
      module.exports = has2;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject2(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject2;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object2, path2) {
        path2 = castPath(path2, object2);
        var index3 = 0, length3 = path2.length;
        while (object2 != null && index3 < length3) {
          object2 = object2[toKey(path2[index3++])];
        }
        return index3 && index3 == length3 ? object2 : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object2, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object2, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object2[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object2, key, value) {
        var objValue = object2[key];
        if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
          baseAssignValue(object2, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object2, path2, value, customizer) {
        if (!isObject(object2)) {
          return object2;
        }
        path2 = castPath(path2, object2);
        var index3 = -1, length3 = path2.length, lastIndex = length3 - 1, nested = object2;
        while (nested != null && ++index3 < length3) {
          var key = toKey(path2[index3]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object2;
          }
          if (index3 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path2[index3 + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object2;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object2, paths, predicate) {
        var index3 = -1, length3 = paths.length, result = {};
        while (++index3 < length3) {
          var path2 = paths[index3], value = baseGet(object2, path2);
          if (predicate(value, path2)) {
            baseSet(result, castPath(path2, object2), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object2, key) {
        return object2 != null && key in Object(object2);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object2, path2) {
        return object2 != null && hasPath(object2, path2, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_basePick.js
  var require_basePick = __commonJS({
    "node_modules/lodash/_basePick.js"(exports, module) {
      var basePickBy = require_basePickBy();
      var hasIn = require_hasIn();
      function basePick(object2, paths) {
        return basePickBy(object2, paths, function(value, path2) {
          return hasIn(object2, path2);
        });
      }
      module.exports = basePick;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array4, values) {
        var index3 = -1, length3 = values.length, offset = array4.length;
        while (++index3 < length3) {
          array4[offset + index3] = values[index3];
        }
        return array4;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol3 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array4, depth, predicate, isStrict, result) {
        var index3 = -1, length3 = array4.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index3 < length3) {
          var value = array4[index3];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten3(array4) {
        var length3 = array4 == null ? 0 : array4.length;
        return length3 ? baseFlatten(array4, 1) : [];
      }
      module.exports = flatten3;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten3 = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten3), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/pick.js
  var require_pick = __commonJS({
    "node_modules/lodash/pick.js"(exports, module) {
      var basePick = require_basePick();
      var flatRest = require_flatRest();
      var pick2 = flatRest(function(object2, paths) {
        return object2 == null ? {} : basePick(object2, paths);
      });
      module.exports = pick2;
    }
  });

  // node_modules/lodash/_baseRange.js
  var require_baseRange = __commonJS({
    "node_modules/lodash/_baseRange.js"(exports, module) {
      var nativeCeil = Math.ceil;
      var nativeMax = Math.max;
      function baseRange(start2, end, step, fromRight) {
        var index3 = -1, length3 = nativeMax(nativeCeil((end - start2) / (step || 1)), 0), result = Array(length3);
        while (length3--) {
          result[fromRight ? length3 : ++index3] = start2;
          start2 += step;
        }
        return result;
      }
      module.exports = baseRange;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index3 = string.length;
        while (index3-- && reWhitespace.test(string.charAt(index3))) {
        }
        return index3;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign3 = value < 0 ? -1 : 1;
          return sign3 * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/_createRange.js
  var require_createRange = __commonJS({
    "node_modules/lodash/_createRange.js"(exports, module) {
      var baseRange = require_baseRange();
      var isIterateeCall = require_isIterateeCall();
      var toFinite = require_toFinite();
      function createRange(fromRight) {
        return function(start2, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start2, end, step)) {
            end = step = void 0;
          }
          start2 = toFinite(start2);
          if (end === void 0) {
            end = start2;
            start2 = 0;
          } else {
            end = toFinite(end);
          }
          step = step === void 0 ? start2 < end ? 1 : -1 : toFinite(step);
          return baseRange(start2, end, step, fromRight);
        };
      }
      module.exports = createRange;
    }
  });

  // node_modules/lodash/range.js
  var require_range = __commonJS({
    "node_modules/lodash/range.js"(exports, module) {
      var createRange = require_createRange();
      var range5 = createRange();
      module.exports = range5;
    }
  });

  // node_modules/lodash/uniqueId.js
  var require_uniqueId = __commonJS({
    "node_modules/lodash/uniqueId.js"(exports, module) {
      var toString = require_toString();
      var idCounter = 0;
      function uniqueId2(prefix) {
        var id2 = ++idCounter;
        return toString(prefix) + id2;
      }
      module.exports = uniqueId2;
    }
  });

  // index.ts
  var index_exports = {};
  __export(index_exports, {
    dagre: () => dagre_default,
    default: () => index_default,
    graphlib: () => graphlib_default,
    intersect: () => intersect_default,
    render: () => render,
    util: () => util_exports,
    version: () => version_default
  });

  // node_modules/@dagrejs/dagre/dist/dagre.esm.js
  var dagre_esm_exports = {};
  __export(dagre_esm_exports, {
    Graph: () => p,
    debug: () => fe,
    default: () => To,
    graphlib: () => z,
    layout: () => he,
    util: () => xo,
    version: () => U
  });
  var ge = Object.defineProperty;
  var hn = (e, n, t) => n in e ? ge(e, n, { enumerable: true, configurable: true, writable: true, value: t }) : e[n] = t;
  var fn = (e, n) => {
    for (var t in n) ge(e, t, { get: n[t], enumerable: true });
  };
  var pe = (e, n, t) => hn(e, typeof n != "symbol" ? n + "" : n, t);
  var z = {};
  fn(z, { Graph: () => p, alg: () => R, json: () => ye, version: () => pn });
  var bn = Object.defineProperty;
  var Le = (e, n) => {
    for (var t in n) bn(e, t, { get: n[t], enumerable: true });
  };
  var p = class {
    constructor(e) {
      this._isDirected = true, this._isMultigraph = false, this._isCompound = false, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {
      }, this._defaultEdgeLabelFn = () => {
      }, e && (this._isDirected = "directed" in e ? e.directed : true, this._isMultigraph = "multigraph" in e ? e.multigraph : false, this._isCompound = "compound" in e ? e.compound : false), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {});
    }
    isDirected() {
      return this._isDirected;
    }
    isMultigraph() {
      return this._isMultigraph;
    }
    isCompound() {
      return this._isCompound;
    }
    setGraph(e) {
      return this._label = e, this;
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(e) {
      return typeof e != "function" ? this._defaultNodeLabelFn = () => e : this._defaultNodeLabelFn = e, this;
    }
    nodeCount() {
      return this._nodeCount;
    }
    nodes() {
      return Object.keys(this._nodes);
    }
    sources() {
      return this.nodes().filter((e) => Object.keys(this._in[e]).length === 0);
    }
    sinks() {
      return this.nodes().filter((e) => Object.keys(this._out[e]).length === 0);
    }
    setNodes(e, n) {
      return e.forEach((t) => {
        n !== void 0 ? this.setNode(t, n) : this.setNode(t);
      }), this;
    }
    setNode(e, n) {
      return e in this._nodes ? (arguments.length > 1 && (this._nodes[e] = n), this) : (this._nodes[e] = arguments.length > 1 ? n : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = "\0", this._children[e] = {}, this._children["\0"][e] = true), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
    }
    node(e) {
      return this._nodes[e];
    }
    hasNode(e) {
      return e in this._nodes;
    }
    removeNode(e) {
      if (e in this._nodes) {
        let n = (t) => this.removeEdge(this._edgeObjs[t]);
        delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], this.children(e).forEach((t) => {
          this.setParent(t);
        }), delete this._children[e]), Object.keys(this._in[e]).forEach(n), delete this._in[e], delete this._preds[e], Object.keys(this._out[e]).forEach(n), delete this._out[e], delete this._sucs[e], --this._nodeCount;
      }
      return this;
    }
    setParent(e, n) {
      if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
      if (n === void 0) n = "\0";
      else {
        n += "";
        for (let t = n; t !== void 0; t = this.parent(t)) if (t === e) throw new Error("Setting " + n + " as parent of " + e + " would create a cycle");
        this.setNode(n);
      }
      return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = n, this._children[n][e] = true, this;
    }
    parent(e) {
      if (this._isCompound) {
        let n = this._parent[e];
        if (n !== "\0") return n;
      }
    }
    children(e = "\0") {
      if (this._isCompound) {
        let n = this._children[e];
        if (n) return Object.keys(n);
      } else {
        if (e === "\0") return this.nodes();
        if (this.hasNode(e)) return [];
      }
      return [];
    }
    predecessors(e) {
      let n = this._preds[e];
      if (n) return Object.keys(n);
    }
    successors(e) {
      let n = this._sucs[e];
      if (n) return Object.keys(n);
    }
    neighbors(e) {
      let n = this.predecessors(e);
      if (n) {
        let t = new Set(n);
        for (let r of this.successors(e)) t.add(r);
        return Array.from(t.values());
      }
    }
    isLeaf(e) {
      let n;
      return this.isDirected() ? n = this.successors(e) : n = this.neighbors(e), n.length === 0;
    }
    filterNodes(e) {
      let n = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
      n.setGraph(this.graph()), Object.entries(this._nodes).forEach(([o, i]) => {
        e(o) && n.setNode(o, i);
      }), Object.values(this._edgeObjs).forEach((o) => {
        n.hasNode(o.v) && n.hasNode(o.w) && n.setEdge(o, this.edge(o));
      });
      let t = {}, r = (o) => {
        let i = this.parent(o);
        return !i || n.hasNode(i) ? (t[o] = i != null ? i : void 0, i != null ? i : void 0) : i in t ? t[i] : r(i);
      };
      return this._isCompound && n.nodes().forEach((o) => n.setParent(o, r(o))), n;
    }
    setDefaultEdgeLabel(e) {
      return typeof e != "function" ? this._defaultEdgeLabelFn = () => e : this._defaultEdgeLabelFn = e, this;
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return Object.values(this._edgeObjs);
    }
    setPath(e, n) {
      return e.reduce((t, r) => (n !== void 0 ? this.setEdge(t, r, n) : this.setEdge(t, r), r)), this;
    }
    setEdge(e, n, t, r) {
      let o, i, s2, a4, d = false;
      typeof e == "object" && e !== null && "v" in e ? (o = e.v, i = e.w, s2 = e.name, arguments.length === 2 && (a4 = n, d = true)) : (o = e, i = n, s2 = r, arguments.length > 2 && (a4 = t, d = true)), o = "" + o, i = "" + i, s2 !== void 0 && (s2 = "" + s2);
      let l2 = C(this._isDirected, o, i, s2);
      if (l2 in this._edgeLabels) return d && (this._edgeLabels[l2] = a4), this;
      if (s2 !== void 0 && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
      this.setNode(o), this.setNode(i), this._edgeLabels[l2] = d ? a4 : this._defaultEdgeLabelFn(o, i, s2);
      let u4 = gn(this._isDirected, o, i, s2);
      return o = u4.v, i = u4.w, Object.freeze(u4), this._edgeObjs[l2] = u4, me(this._preds[i], o), me(this._sucs[o], i), this._in[i][l2] = u4, this._out[o][l2] = u4, this._edgeCount++, this;
    }
    edge(e, n, t) {
      let r = arguments.length === 1 ? Y(this._isDirected, e) : C(this._isDirected, e, n, t);
      return this._edgeLabels[r];
    }
    edgeAsObj(e, n, t) {
      let r = arguments.length === 1 ? this.edge(e) : this.edge(e, n, t);
      return typeof r != "object" ? { label: r } : r;
    }
    hasEdge(e, n, t) {
      return (arguments.length === 1 ? Y(this._isDirected, e) : C(this._isDirected, e, n, t)) in this._edgeLabels;
    }
    removeEdge(e, n, t) {
      let r = arguments.length === 1 ? Y(this._isDirected, e) : C(this._isDirected, e, n, t), o = this._edgeObjs[r];
      if (o) {
        let i = o.v, s2 = o.w;
        delete this._edgeLabels[r], delete this._edgeObjs[r], Ee(this._preds[s2], i), Ee(this._sucs[i], s2), delete this._in[s2][r], delete this._out[i][r], this._edgeCount--;
      }
      return this;
    }
    inEdges(e, n) {
      return this.isDirected() ? this.filterEdges(this._in[e], e, n) : this.nodeEdges(e, n);
    }
    outEdges(e, n) {
      return this.isDirected() ? this.filterEdges(this._out[e], e, n) : this.nodeEdges(e, n);
    }
    nodeEdges(e, n) {
      if (e in this._nodes) return this.filterEdges({ ...this._in[e], ...this._out[e] }, e, n);
    }
    _removeFromParentsChildList(e) {
      delete this._children[this._parent[e]][e];
    }
    filterEdges(e, n, t) {
      if (!e) return;
      let r = Object.values(e);
      return t ? r.filter((o) => o.v === n && o.w === t || o.v === t && o.w === n) : r;
    }
  };
  function me(e, n) {
    e[n] ? e[n]++ : e[n] = 1;
  }
  function Ee(e, n) {
    e[n] !== void 0 && !--e[n] && delete e[n];
  }
  function C(e, n, t, r) {
    let o = "" + n, i = "" + t;
    if (!e && o > i) {
      let s2 = o;
      o = i, i = s2;
    }
    return o + "" + i + "" + (r === void 0 ? "\0" : r);
  }
  function gn(e, n, t, r) {
    let o = "" + n, i = "" + t;
    if (!e && o > i) {
      let a4 = o;
      o = i, i = a4;
    }
    let s2 = { v: o, w: i };
    return r && (s2.name = r), s2;
  }
  function Y(e, n) {
    return C(e, n.v, n.w, n.name);
  }
  var pn = "4.0.1";
  var ye = {};
  Le(ye, { read: () => yn, write: () => mn });
  function mn(e) {
    let n = { options: { directed: e.isDirected(), multigraph: e.isMultigraph(), compound: e.isCompound() }, nodes: En(e), edges: Ln(e) }, t = e.graph();
    return t !== void 0 && (n.value = structuredClone(t)), n;
  }
  function En(e) {
    return e.nodes().map((n) => {
      let t = e.node(n), r = e.parent(n), o = { v: n };
      return t !== void 0 && (o.value = t), r !== void 0 && (o.parent = r), o;
    });
  }
  function Ln(e) {
    return e.edges().map((n) => {
      let t = e.edge(n), r = { v: n.v, w: n.w };
      return n.name !== void 0 && (r.name = n.name), t !== void 0 && (r.value = t), r;
    });
  }
  function yn(e) {
    let n = new p(e.options);
    return e.value !== void 0 && n.setGraph(e.value), e.nodes.forEach((t) => {
      n.setNode(t.v, t.value), t.parent && n.setParent(t.v, t.parent);
    }), e.edges.forEach((t) => {
      n.setEdge({ v: t.v, w: t.w, name: t.name }, t.value);
    }), n;
  }
  var R = {};
  Le(R, { CycleException: () => D, bellmanFord: () => we, components: () => Gn, dijkstra: () => F, dijkstraAll: () => _n, findCycles: () => xn, floydWarshall: () => On, isAcyclic: () => Cn, postorder: () => Pn, preorder: () => Mn, prim: () => jn, shortestPaths: () => Sn, tarjan: () => Ge, topsort: () => ke });
  var wn = () => 1;
  function we(e, n, t, r) {
    return Nn(e, String(n), t || wn, r || function(o) {
      return e.outEdges(o);
    });
  }
  function Nn(e, n, t, r) {
    let o = {}, i, s2 = 0, a4 = e.nodes(), d = function(c6) {
      let h = t(c6);
      o[c6.v].distance + h < o[c6.w].distance && (o[c6.w] = { distance: o[c6.v].distance + h, predecessor: c6.v }, i = true);
    }, l2 = function() {
      a4.forEach(function(c6) {
        r(c6).forEach(function(h) {
          let f = h.v === c6 ? h.v : h.w, g = f === h.v ? h.w : h.v;
          d({ v: f, w: g });
        });
      });
    };
    a4.forEach(function(c6) {
      let h = c6 === n ? 0 : Number.POSITIVE_INFINITY;
      o[c6] = { distance: h, predecessor: "" };
    });
    let u4 = a4.length;
    for (let c6 = 1; c6 < u4 && (i = false, s2++, l2(), !!i); c6++) ;
    if (s2 === u4 - 1 && (i = false, l2(), i)) throw new Error("The graph contains a negative weight cycle");
    return o;
  }
  function Gn(e) {
    let n = {}, t = [], r;
    function o(i) {
      i in n || (n[i] = true, r.push(i), e.successors(i).forEach(o), e.predecessors(i).forEach(o));
    }
    return e.nodes().forEach(function(i) {
      r = [], o(i), r.length && t.push(r);
    }), t;
  }
  var Ne = class {
    constructor() {
      this._arr = [], this._keyIndices = {};
    }
    size() {
      return this._arr.length;
    }
    keys() {
      return this._arr.map((e) => e.key);
    }
    has(e) {
      return e in this._keyIndices;
    }
    priority(e) {
      let n = this._keyIndices[e];
      if (n !== void 0) return this._arr[n].priority;
    }
    min() {
      if (this.size() === 0) throw new Error("Queue underflow");
      return this._arr[0].key;
    }
    add(e, n) {
      let t = this._keyIndices, r = String(e);
      if (!(r in t)) {
        let o = this._arr, i = o.length;
        return t[r] = i, o.push({ key: r, priority: n }), this._decrease(i), true;
      }
      return false;
    }
    removeMin() {
      this._swap(0, this._arr.length - 1);
      let e = this._arr.pop();
      return delete this._keyIndices[e.key], this._heapify(0), e.key;
    }
    decrease(e, n) {
      let t = this._keyIndices[e];
      if (t === void 0) throw new Error(`Key not found: ${e}`);
      let r = this._arr[t].priority;
      if (n > r) throw new Error(`New priority is greater than current priority. Key: ${e} Old: ${r} New: ${n}`);
      this._arr[t].priority = n, this._decrease(t);
    }
    _heapify(e) {
      let n = this._arr, t = 2 * e, r = t + 1, o = e;
      t < n.length && (o = n[t].priority < n[o].priority ? t : o, r < n.length && (o = n[r].priority < n[o].priority ? r : o), o !== e && (this._swap(e, o), this._heapify(o)));
    }
    _decrease(e) {
      let n = this._arr, t = n[e].priority, r;
      for (; e !== 0 && (r = e >> 1, !(n[r].priority < t)); ) this._swap(e, r), e = r;
    }
    _swap(e, n) {
      let t = this._arr, r = this._keyIndices, o = t[e], i = t[n];
      t[e] = i, t[n] = o, r[i.key] = e, r[o.key] = n;
    }
  };
  var kn = () => 1;
  function F(e, n, t, r) {
    let o = function(i) {
      return e.outEdges(i);
    };
    return vn(e, String(n), t || kn, r || o);
  }
  function vn(e, n, t, r) {
    let o = {}, i = new Ne(), s2, a4, d = function(l2) {
      let u4 = l2.v !== s2 ? l2.v : l2.w, c6 = o[u4], h = t(l2), f = a4.distance + h;
      if (h < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + l2 + " Weight: " + h);
      f < c6.distance && (c6.distance = f, c6.predecessor = s2, i.decrease(u4, f));
    };
    for (e.nodes().forEach(function(l2) {
      let u4 = l2 === n ? 0 : Number.POSITIVE_INFINITY;
      o[l2] = { distance: u4, predecessor: "" }, i.add(l2, u4);
    }); i.size() > 0 && (s2 = i.removeMin(), a4 = o[s2], a4.distance !== Number.POSITIVE_INFINITY); ) r(s2).forEach(d);
    return o;
  }
  function _n(e, n, t) {
    return e.nodes().reduce(function(r, o) {
      return r[o] = F(e, o, n, t), r;
    }, {});
  }
  function Ge(e) {
    let n = 0, t = [], r = {}, o = [];
    function i(s2) {
      let a4 = r[s2] = { onStack: true, lowlink: n, index: n++ };
      if (t.push(s2), e.successors(s2).forEach(function(d) {
        d in r ? r[d].onStack && (a4.lowlink = Math.min(a4.lowlink, r[d].index)) : (i(d), a4.lowlink = Math.min(a4.lowlink, r[d].lowlink));
      }), a4.lowlink === a4.index) {
        let d = [], l2;
        do
          l2 = t.pop(), r[l2].onStack = false, d.push(l2);
        while (s2 !== l2);
        o.push(d);
      }
    }
    return e.nodes().forEach(function(s2) {
      s2 in r || i(s2);
    }), o;
  }
  function xn(e) {
    return Ge(e).filter(function(n) {
      return n.length > 1 || n.length === 1 && e.hasEdge(n[0], n[0]);
    });
  }
  var Tn = () => 1;
  function On(e, n, t) {
    return In(e, n || Tn, t || function(r) {
      return e.outEdges(r);
    });
  }
  function In(e, n, t) {
    let r = {}, o = e.nodes();
    return o.forEach(function(i) {
      r[i] = {}, r[i][i] = { distance: 0, predecessor: "" }, o.forEach(function(s2) {
        i !== s2 && (r[i][s2] = { distance: Number.POSITIVE_INFINITY, predecessor: "" });
      }), t(i).forEach(function(s2) {
        let a4 = s2.v === i ? s2.w : s2.v, d = n(s2);
        r[i][a4] = { distance: d, predecessor: i };
      });
    }), o.forEach(function(i) {
      let s2 = r[i];
      o.forEach(function(a4) {
        let d = r[a4];
        o.forEach(function(l2) {
          let u4 = d[i], c6 = s2[l2], h = d[l2], f = u4.distance + c6.distance;
          f < h.distance && (h.distance = f, h.predecessor = c6.predecessor);
        });
      });
    }), r;
  }
  var D = class extends Error {
    constructor(...e) {
      super(...e);
    }
  };
  function ke(e) {
    let n = {}, t = {}, r = [];
    function o(i) {
      if (i in t) throw new D();
      i in n || (t[i] = true, n[i] = true, e.predecessors(i).forEach(o), delete t[i], r.push(i));
    }
    if (e.sinks().forEach(o), Object.keys(n).length !== e.nodeCount()) throw new D();
    return r;
  }
  function Cn(e) {
    try {
      ke(e);
    } catch (n) {
      if (n instanceof D) return false;
      throw n;
    }
    return true;
  }
  function Rn(e, n, t, r, o) {
    Array.isArray(n) || (n = [n]);
    let i = ((a4) => {
      var d;
      return (d = e.isDirected() ? e.successors(a4) : e.neighbors(a4)) != null ? d : [];
    }), s2 = {};
    return n.forEach(function(a4) {
      if (!e.hasNode(a4)) throw new Error("Graph does not have node: " + a4);
      o = ve(e, a4, t === "post", s2, i, r, o);
    }), o;
  }
  function ve(e, n, t, r, o, i, s2) {
    return n in r || (r[n] = true, t || (s2 = i(s2, n)), o(n).forEach(function(a4) {
      s2 = ve(e, a4, t, r, o, i, s2);
    }), t && (s2 = i(s2, n))), s2;
  }
  function _e(e, n, t) {
    return Rn(e, n, t, function(r, o) {
      return r.push(o), r;
    }, []);
  }
  function Pn(e, n) {
    return _e(e, n, "post");
  }
  function Mn(e, n) {
    return _e(e, n, "pre");
  }
  function jn(e, n) {
    let t = new p(), r = {}, o = new Ne(), i;
    function s2(d) {
      let l2 = d.v === i ? d.w : d.v, u4 = o.priority(l2);
      if (u4 !== void 0) {
        let c6 = n(d);
        c6 < u4 && (r[l2] = i, o.decrease(l2, c6));
      }
    }
    if (e.nodeCount() === 0) return t;
    e.nodes().forEach(function(d) {
      o.add(d, Number.POSITIVE_INFINITY), t.setNode(d);
    }), o.decrease(e.nodes()[0], 0);
    let a4 = false;
    for (; o.size() > 0; ) {
      if (i = o.removeMin(), i in r) t.setEdge(i, r[i]);
      else {
        if (a4) throw new Error("Input graph is not connected: " + e);
        a4 = true;
      }
      e.nodeEdges(i).forEach(s2);
    }
    return t;
  }
  function Sn(e, n, t, r) {
    return Fn(e, n, t, r != null ? r : ((o) => {
      let i = e.outEdges(o);
      return i != null ? i : [];
    }));
  }
  function Fn(e, n, t, r) {
    if (t === void 0) return F(e, n, t, r);
    let o = false, i = e.nodes();
    for (let s2 = 0; s2 < i.length; s2++) {
      let a4 = r(i[s2]);
      for (let d = 0; d < a4.length; d++) {
        let l2 = a4[d], u4 = l2.v === i[s2] ? l2.v : l2.w, c6 = u4 === l2.v ? l2.w : l2.v;
        t({ v: u4, w: c6 }) < 0 && (o = true);
      }
      if (o) return we(e, n, t, r);
    }
    return F(e, n, t, r);
  }
  function w(e, n, t, r) {
    let o = r;
    for (; e.hasNode(o); ) o = j(r);
    return t.dummy = n, e.setNode(o, t), o;
  }
  function xe(e) {
    let n = new p().setGraph(e.graph());
    return e.nodes().forEach((t) => n.setNode(t, e.node(t))), e.edges().forEach((t) => {
      let r = n.edge(t.v, t.w) || { weight: 0, minlen: 1 }, o = e.edge(t);
      n.setEdge(t.v, t.w, { weight: r.weight + o.weight, minlen: Math.max(r.minlen, o.minlen) });
    }), n;
  }
  function A(e) {
    let n = new p({ multigraph: e.isMultigraph() }).setGraph(e.graph());
    return e.nodes().forEach((t) => {
      e.children(t).length || n.setNode(t, e.node(t));
    }), e.edges().forEach((t) => {
      n.setEdge(t, e.edge(t));
    }), n;
  }
  function H(e, n) {
    let t = e.x, r = e.y, o = n.x - t, i = n.y - r, s2 = e.width / 2, a4 = e.height / 2;
    if (!o && !i) throw new Error("Not possible to find intersection inside of the rectangle");
    let d, l2;
    return Math.abs(i) * s2 > Math.abs(o) * a4 ? (i < 0 && (a4 = -a4), d = a4 * o / i, l2 = a4) : (o < 0 && (s2 = -s2), d = s2, l2 = s2 * i / o), { x: t + d, y: r + l2 };
  }
  function N(e) {
    let n = k(X(e) + 1).map(() => []);
    return e.nodes().forEach((t) => {
      let r = e.node(t), o = r.rank;
      o !== void 0 && (n[o] || (n[o] = []), n[o][r.order] = t);
    }), n;
  }
  function Te(e) {
    let n = e.nodes().map((r) => {
      let o = e.node(r).rank;
      return o === void 0 ? Number.MAX_VALUE : o;
    }), t = L(Math.min, n);
    e.nodes().forEach((r) => {
      let o = e.node(r);
      Object.hasOwn(o, "rank") && (o.rank -= t);
    });
  }
  function Oe(e) {
    let n = e.nodes().map((s2) => e.node(s2).rank).filter((s2) => s2 !== void 0), t = L(Math.min, n), r = [];
    e.nodes().forEach((s2) => {
      let a4 = e.node(s2).rank - t;
      r[a4] || (r[a4] = []), r[a4].push(s2);
    });
    let o = 0, i = e.graph().nodeRankFactor;
    Array.from(r).forEach((s2, a4) => {
      s2 === void 0 && a4 % i !== 0 ? --o : s2 !== void 0 && o && s2.forEach((d) => e.node(d).rank += o);
    });
  }
  function q(e, n, t, r) {
    let o = { width: 0, height: 0 };
    return arguments.length >= 4 && (o.rank = t, o.order = r), w(e, "border", o, n);
  }
  function Dn(e, n = Ie) {
    let t = [];
    for (let r = 0; r < e.length; r += n) {
      let o = e.slice(r, r + n);
      t.push(o);
    }
    return t;
  }
  var Ie = 65535;
  function L(e, n) {
    if (n.length > Ie) {
      let t = Dn(n);
      return e(...t.map((r) => e(...r)));
    } else return e(...n);
  }
  function X(e) {
    let t = e.nodes().map((r) => {
      let o = e.node(r).rank;
      return o === void 0 ? Number.MIN_VALUE : o;
    });
    return L(Math.max, t);
  }
  function Ce(e, n) {
    let t = { lhs: [], rhs: [] };
    return e.forEach((r) => {
      n(r) ? t.lhs.push(r) : t.rhs.push(r);
    }), t;
  }
  function P(e, n) {
    let t = Date.now();
    try {
      return n();
    } finally {
      console.log(e + " time: " + (Date.now() - t) + "ms");
    }
  }
  function M(e, n) {
    return n();
  }
  var An = 0;
  function j(e) {
    let n = ++An;
    return e + ("" + n);
  }
  function k(e, n, t = 1) {
    n == null && (n = e, e = 0);
    let r = (i) => i < n;
    t < 0 && (r = (i) => n < i);
    let o = [];
    for (let i = e; r(i); i += t) o.push(i);
    return o;
  }
  function T(e, n) {
    let t = {};
    for (let r of n) e[r] !== void 0 && (t[r] = e[r]);
    return t;
  }
  function O(e, n) {
    let t;
    return typeof n == "string" ? t = (r) => r[n] : t = n, Object.entries(e).reduce((r, [o, i]) => (r[o] = t(i, o), r), {});
  }
  function Re(e, n) {
    return e.reduce((t, r, o) => (t[r] = n[o], t), {});
  }
  var _ = "\0";
  var U = "3.0.0";
  var K = class {
    constructor() {
      pe(this, "_sentinel");
      let n = {};
      n._next = n._prev = n, this._sentinel = n;
    }
    dequeue() {
      let n = this._sentinel, t = n._prev;
      if (t !== n) return Pe(t), t;
    }
    enqueue(n) {
      let t = this._sentinel;
      n._prev && n._next && Pe(n), n._next = t._next, t._next._prev = n, t._next = n, n._prev = t;
    }
    toString() {
      let n = [], t = this._sentinel, r = t._prev;
      for (; r !== t; ) n.push(JSON.stringify(r, Vn)), r = r._prev;
      return "[" + n.join(", ") + "]";
    }
  };
  function Pe(e) {
    e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
  }
  function Vn(e, n) {
    if (e !== "_next" && e !== "_prev") return n;
  }
  var Me = K;
  var Wn = () => 1;
  function Q(e, n) {
    if (e.nodeCount() <= 1) return [];
    let t = Yn(e, n || Wn);
    return Bn(t.graph, t.buckets, t.zeroIdx).flatMap((o) => e.outEdges(o.v, o.w) || []);
  }
  function Bn(e, n, t) {
    var a4;
    let r = [], o = n[n.length - 1], i = n[0], s2;
    for (; e.nodeCount(); ) {
      for (; s2 = i.dequeue(); ) $(e, n, t, s2);
      for (; s2 = o.dequeue(); ) $(e, n, t, s2);
      if (e.nodeCount()) {
        for (let d = n.length - 2; d > 0; --d) if (s2 = (a4 = n[d]) == null ? void 0 : a4.dequeue(), s2) {
          r = r.concat($(e, n, t, s2, true) || []);
          break;
        }
      }
    }
    return r;
  }
  function $(e, n, t, r, o) {
    let i = [], s2 = o ? i : void 0;
    return (e.inEdges(r.v) || []).forEach((a4) => {
      let d = e.edge(a4), l2 = e.node(a4.v);
      o && i.push({ v: a4.v, w: a4.w }), l2.out -= d, J(n, t, l2);
    }), (e.outEdges(r.v) || []).forEach((a4) => {
      let d = e.edge(a4), l2 = a4.w, u4 = e.node(l2);
      u4.in -= d, J(n, t, u4);
    }), e.removeNode(r.v), s2;
  }
  function Yn(e, n) {
    let t = new p(), r = 0, o = 0;
    e.nodes().forEach((a4) => {
      t.setNode(a4, { v: a4, in: 0, out: 0 });
    }), e.edges().forEach((a4) => {
      let d = t.edge(a4.v, a4.w) || 0, l2 = n(a4), u4 = d + l2;
      t.setEdge(a4.v, a4.w, u4);
      let c6 = t.node(a4.v), h = t.node(a4.w);
      o = Math.max(o, c6.out += l2), r = Math.max(r, h.in += l2);
    });
    let i = zn(o + r + 3).map(() => new Me()), s2 = r + 1;
    return t.nodes().forEach((a4) => {
      J(i, s2, t.node(a4));
    }), { graph: t, buckets: i, zeroIdx: s2 };
  }
  function J(e, n, t) {
    var r, o, i;
    t.out ? t.in ? (i = e[t.out - t.in + n]) == null || i.enqueue(t) : (o = e[e.length - 1]) == null || o.enqueue(t) : (r = e[0]) == null || r.enqueue(t);
  }
  function zn(e) {
    let n = [];
    for (let t = 0; t < e; t++) n.push(t);
    return n;
  }
  function je(e) {
    (e.graph().acyclicer === "greedy" ? Q(e, t(e)) : Hn(e)).forEach((r) => {
      let o = e.edge(r);
      e.removeEdge(r), o.forwardName = r.name, o.reversed = true, e.setEdge(r.w, r.v, o, j("rev"));
    });
    function t(r) {
      return (o) => r.edge(o).weight;
    }
  }
  function Hn(e) {
    let n = [], t = {}, r = {};
    function o(i) {
      Object.hasOwn(r, i) || (r[i] = true, t[i] = true, e.outEdges(i).forEach((s2) => {
        Object.hasOwn(t, s2.w) ? n.push(s2) : o(s2.w);
      }), delete t[i]);
    }
    return e.nodes().forEach(o), n;
  }
  function Se(e) {
    e.edges().forEach((n) => {
      let t = e.edge(n);
      if (t.reversed) {
        e.removeEdge(n);
        let r = t.forwardName;
        delete t.reversed, delete t.forwardName, e.setEdge(n.w, n.v, t, r);
      }
    });
  }
  function Fe(e) {
    e.graph().dummyChains = [], e.edges().forEach((n) => Xn(e, n));
  }
  function Xn(e, n) {
    let t = n.v, r = e.node(t).rank, o = n.w, i = e.node(o).rank, s2 = n.name, a4 = e.edge(n), d = a4.labelRank;
    if (i === r + 1) return;
    e.removeEdge(n);
    let l2, u4, c6;
    for (c6 = 0, ++r; r < i; ++c6, ++r) a4.points = [], u4 = { width: 0, height: 0, edgeLabel: a4, edgeObj: n, rank: r }, l2 = w(e, "edge", u4, "_d"), r === d && (u4.width = a4.width, u4.height = a4.height, u4.dummy = "edge-label", u4.labelpos = a4.labelpos), e.setEdge(t, l2, { weight: a4.weight }, s2), c6 === 0 && e.graph().dummyChains.push(l2), t = l2;
    e.setEdge(t, o, { weight: a4.weight }, s2);
  }
  function De(e) {
    e.graph().dummyChains.forEach((n) => {
      let t = e.node(n), r = t.edgeLabel, o;
      for (e.setEdge(t.edgeObj, r); t.dummy; ) o = e.successors(n)[0], e.removeNode(n), r.points.push({ x: t.x, y: t.y }), t.dummy === "edge-label" && (r.x = t.x, r.y = t.y, r.width = t.width, r.height = t.height), n = o, t = e.node(n);
    });
  }
  function S(e) {
    let n = {};
    function t(r) {
      let o = e.node(r);
      if (Object.hasOwn(n, r)) return o.rank;
      n[r] = true;
      let i = e.outEdges(r), s2 = i ? i.map((d) => d == null ? Number.POSITIVE_INFINITY : t(d.w) - e.edge(d).minlen) : [], a4 = L(Math.min, s2);
      return a4 === Number.POSITIVE_INFINITY && (a4 = 0), o.rank = a4;
    }
    e.sources().forEach(t);
  }
  function v(e, n) {
    return e.node(n.w).rank - e.node(n.v).rank - e.edge(n).minlen;
  }
  var V = Kn;
  function Kn(e) {
    let n = new p({ directed: false }), t = e.nodes();
    if (t.length === 0) throw new Error("Graph must have at least one node");
    let r = t[0], o = e.nodeCount();
    n.setNode(r, {});
    let i, s2;
    for (; $n(n, e) < o && (i = Jn(n, e), !!i); ) s2 = n.hasNode(i.v) ? v(e, i) : -v(e, i), Qn(n, e, s2);
    return n;
  }
  function $n(e, n) {
    function t(r) {
      let o = n.nodeEdges(r);
      o && o.forEach((i) => {
        let s2 = i.v, a4 = r === s2 ? i.w : s2;
        !e.hasNode(a4) && !v(n, i) && (e.setNode(a4, {}), e.setEdge(r, a4, {}), t(a4));
      });
    }
    return e.nodes().forEach(t), e.nodeCount();
  }
  function Jn(e, n) {
    return n.edges().reduce((r, o) => {
      let i = Number.POSITIVE_INFINITY;
      return e.hasNode(o.v) !== e.hasNode(o.w) && (i = v(n, o)), i < r[0] ? [i, o] : r;
    }, [Number.POSITIVE_INFINITY, null])[1];
  }
  function Qn(e, n, t) {
    e.nodes().forEach((r) => n.node(r).rank += t);
  }
  var { preorder: Zn, postorder: et } = R;
  var Ve = x;
  x.initLowLimValues = ee;
  x.initCutValues = Z;
  x.calcCutValue = We;
  x.leaveEdge = Ye;
  x.enterEdge = ze;
  x.exchangeEdges = He;
  function x(e) {
    e = xe(e), S(e);
    let n = V(e);
    ee(n), Z(n, e);
    let t, r;
    for (; t = Ye(n); ) r = ze(n, e, t), He(n, e, t, r);
  }
  function Z(e, n) {
    let t = et(e, e.nodes());
    t = t.slice(0, t.length - 1), t.forEach((r) => nt(e, n, r));
  }
  function nt(e, n, t) {
    let o = e.node(t).parent, i = e.edge(t, o);
    i.cutvalue = We(e, n, t);
  }
  function We(e, n, t) {
    let o = e.node(t).parent, i = true, s2 = n.edge(t, o), a4 = 0;
    s2 || (i = false, s2 = n.edge(o, t)), a4 = s2.weight;
    let d = n.nodeEdges(t);
    return d && d.forEach((l2) => {
      let u4 = l2.v === t, c6 = u4 ? l2.w : l2.v;
      if (c6 !== o) {
        let h = u4 === i, f = n.edge(l2).weight;
        if (a4 += h ? f : -f, rt(e, t, c6)) {
          let b10 = e.edge(t, c6).cutvalue;
          a4 += h ? -b10 : b10;
        }
      }
    }), a4;
  }
  function ee(e, n) {
    arguments.length < 2 && (n = e.nodes()[0]), Be(e, {}, 1, n);
  }
  function Be(e, n, t, r, o) {
    let i = t, s2 = e.node(r);
    n[r] = true;
    let a4 = e.neighbors(r);
    return a4 && a4.forEach((d) => {
      Object.hasOwn(n, d) || (t = Be(e, n, t, d, r));
    }), s2.low = i, s2.lim = t++, o ? s2.parent = o : delete s2.parent, t;
  }
  function Ye(e) {
    return e.edges().find((n) => e.edge(n).cutvalue < 0);
  }
  function ze(e, n, t) {
    let r = t.v, o = t.w;
    n.hasEdge(r, o) || (r = t.w, o = t.v);
    let i = e.node(r), s2 = e.node(o), a4 = i, d = false;
    return i.lim > s2.lim && (a4 = s2, d = true), n.edges().filter((u4) => d === Ae(e, e.node(u4.v), a4) && d !== Ae(e, e.node(u4.w), a4)).reduce((u4, c6) => v(n, c6) < v(n, u4) ? c6 : u4);
  }
  function He(e, n, t, r) {
    let o = t.v, i = t.w;
    e.removeEdge(o, i), e.setEdge(r.v, r.w, {}), ee(e), Z(e, n), tt(e, n);
  }
  function tt(e, n) {
    let t = e.nodes().find((o) => !e.node(o).parent);
    if (!t) return;
    let r = Zn(e, [t]);
    r = r.slice(1), r.forEach((o) => {
      let s2 = e.node(o).parent, a4 = n.edge(o, s2), d = false;
      a4 || (a4 = n.edge(s2, o), d = true), n.node(o).rank = n.node(s2).rank + (d ? a4.minlen : -a4.minlen);
    });
  }
  function rt(e, n, t) {
    return e.hasEdge(n, t);
  }
  function Ae(e, n, t) {
    return t.low <= n.lim && n.lim <= t.lim;
  }
  var Xe = ot;
  function ot(e) {
    let n = e.graph().ranker;
    if (typeof n == "function") return n(e);
    switch (n) {
      case "network-simplex":
        qe(e);
        break;
      case "tight-tree":
        st(e);
        break;
      case "longest-path":
        it(e);
        break;
      case "none":
        break;
      default:
        qe(e);
    }
  }
  var it = S;
  function st(e) {
    S(e), V(e);
  }
  function qe(e) {
    Ve(e);
  }
  var Ue = at;
  function at(e) {
    let n = lt(e);
    e.graph().dummyChains.forEach((t) => {
      let r = e.node(t), o = r.edgeObj, i = dt(e, n, o.v, o.w), s2 = i.path, a4 = i.lca, d = 0, l2 = s2[d], u4 = true;
      for (; t !== o.w; ) {
        if (r = e.node(t), u4) {
          for (; (l2 = s2[d]) !== a4 && e.node(l2).maxRank < r.rank; ) d++;
          l2 === a4 && (u4 = false);
        }
        if (!u4) {
          for (; d < s2.length - 1 && e.node(s2[d + 1]).minRank <= r.rank; ) d++;
          l2 = s2[d];
        }
        l2 !== void 0 && e.setParent(t, l2), t = e.successors(t)[0];
      }
    });
  }
  function dt(e, n, t, r) {
    let o = [], i = [], s2 = Math.min(n[t].low, n[r].low), a4 = Math.max(n[t].lim, n[r].lim), d;
    d = t;
    do
      d = e.parent(d), o.push(d);
    while (d && (n[d].low > s2 || a4 > n[d].lim));
    let l2 = d, u4 = r;
    for (; (u4 = e.parent(u4)) !== l2; ) i.push(u4);
    return { path: o.concat(i.reverse()), lca: l2 };
  }
  function lt(e) {
    let n = {}, t = 0;
    function r(o) {
      let i = t;
      e.children(o).forEach(r), n[o] = { low: i, lim: t++ };
    }
    return e.children(_).forEach(r), n;
  }
  function Ke(e) {
    let n = w(e, "root", {}, "_root"), t = ut(e), r = Object.values(t), o = L(Math.max, r) - 1, i = 2 * o + 1;
    e.graph().nestingRoot = n, e.edges().forEach((a4) => e.edge(a4).minlen *= i);
    let s2 = ct(e) + 1;
    e.children(_).forEach((a4) => $e(e, n, i, s2, o, t, a4)), e.graph().nodeRankFactor = i;
  }
  function $e(e, n, t, r, o, i, s2) {
    var c6;
    let a4 = e.children(s2);
    if (!a4.length) {
      s2 !== n && e.setEdge(n, s2, { weight: 0, minlen: t });
      return;
    }
    let d = q(e, "_bt"), l2 = q(e, "_bb"), u4 = e.node(s2);
    e.setParent(d, s2), u4.borderTop = d, e.setParent(l2, s2), u4.borderBottom = l2, a4.forEach((h) => {
      var y5;
      $e(e, n, t, r, o, i, h);
      let f = e.node(h), g = f.borderTop ? f.borderTop : h, b10 = f.borderBottom ? f.borderBottom : h, m4 = f.borderTop ? r : 2 * r, E3 = g !== b10 ? 1 : o - ((y5 = i[s2]) != null ? y5 : 0) + 1;
      e.setEdge(d, g, { weight: m4, minlen: E3, nestingEdge: true }), e.setEdge(b10, l2, { weight: m4, minlen: E3, nestingEdge: true });
    }), e.parent(s2) || e.setEdge(n, d, { weight: 0, minlen: o + ((c6 = i[s2]) != null ? c6 : 0) });
  }
  function ut(e) {
    let n = {};
    function t(r, o) {
      let i = e.children(r);
      i && i.length && i.forEach((s2) => t(s2, o + 1)), n[r] = o;
    }
    return e.children(_).forEach((r) => t(r, 1)), n;
  }
  function ct(e) {
    return e.edges().reduce((n, t) => n + e.edge(t).weight, 0);
  }
  function Je(e) {
    let n = e.graph();
    e.removeNode(n.nestingRoot), delete n.nestingRoot, e.edges().forEach((t) => {
      e.edge(t).nestingEdge && e.removeEdge(t);
    });
  }
  var Ze = ft;
  function ft(e) {
    function n(t) {
      let r = e.children(t), o = e.node(t);
      if (r.length && r.forEach(n), Object.hasOwn(o, "minRank")) {
        o.borderLeft = [], o.borderRight = [];
        for (let i = o.minRank, s2 = o.maxRank + 1; i < s2; ++i) Qe(e, "borderLeft", "_bl", t, o, i), Qe(e, "borderRight", "_br", t, o, i);
      }
    }
    e.children(_).forEach(n);
  }
  function Qe(e, n, t, r, o, i) {
    let s2 = { width: 0, height: 0, rank: i, borderType: n }, a4 = o[n][i - 1], d = w(e, "border", s2, t);
    o[n][i] = d, e.setParent(d, r), a4 && e.setEdge(a4, d, { weight: 1 });
  }
  function nn(e) {
    var t;
    let n = (t = e.graph().rankdir) == null ? void 0 : t.toLowerCase();
    (n === "lr" || n === "rl") && rn(e);
  }
  function tn(e) {
    var t;
    let n = (t = e.graph().rankdir) == null ? void 0 : t.toLowerCase();
    (n === "bt" || n === "rl") && bt(e), (n === "lr" || n === "rl") && (gt(e), rn(e));
  }
  function rn(e) {
    e.nodes().forEach((n) => en(e.node(n))), e.edges().forEach((n) => en(e.edge(n)));
  }
  function en(e) {
    let n = e.width;
    e.width = e.height, e.height = n;
  }
  function bt(e) {
    e.nodes().forEach((n) => ne(e.node(n))), e.edges().forEach((n) => {
      var r;
      let t = e.edge(n);
      (r = t.points) == null || r.forEach(ne), Object.hasOwn(t, "y") && ne(t);
    });
  }
  function ne(e) {
    e.y = -e.y;
  }
  function gt(e) {
    e.nodes().forEach((n) => te(e.node(n))), e.edges().forEach((n) => {
      var r;
      let t = e.edge(n);
      (r = t.points) == null || r.forEach(te), Object.hasOwn(t, "x") && te(t);
    });
  }
  function te(e) {
    let n = e.x;
    e.x = e.y, e.y = n;
  }
  function re(e) {
    let n = {}, t = e.nodes().filter((d) => !e.children(d).length), r = t.map((d) => e.node(d).rank), o = L(Math.max, r), i = k(o + 1).map(() => []);
    function s2(d) {
      if (n[d]) return;
      n[d] = true;
      let l2 = e.node(d);
      i[l2.rank].push(d);
      let u4 = e.successors(d);
      u4 && u4.forEach(s2);
    }
    return t.sort((d, l2) => e.node(d).rank - e.node(l2).rank).forEach(s2), i;
  }
  function oe(e, n) {
    let t = 0;
    for (let r = 1; r < n.length; ++r) t += mt(e, n[r - 1], n[r]);
    return t;
  }
  function mt(e, n, t) {
    let r = Re(t, t.map((l2, u4) => u4)), o = n.flatMap((l2) => {
      let u4 = e.outEdges(l2);
      return u4 ? u4.map((c6) => ({ pos: r[c6.w], weight: e.edge(c6).weight })).sort((c6, h) => c6.pos - h.pos) : [];
    }), i = 1;
    for (; i < t.length; ) i <<= 1;
    let s2 = 2 * i - 1;
    i -= 1;
    let a4 = new Array(s2).fill(0), d = 0;
    return o.forEach((l2) => {
      let u4 = l2.pos + i;
      a4[u4] += l2.weight;
      let c6 = 0;
      for (; u4 > 0; ) u4 % 2 && (c6 += a4[u4 + 1]), u4 = u4 - 1 >> 1, a4[u4] += l2.weight;
      d += l2.weight * c6;
    }), d;
  }
  function ie(e, n = []) {
    return n.map((t) => {
      let r = e.inEdges(t);
      if (!r || !r.length) return { v: t };
      {
        let o = r.reduce((i, s2) => {
          let a4 = e.edge(s2), d = e.node(s2.v);
          return { sum: i.sum + a4.weight * d.order, weight: i.weight + a4.weight };
        }, { sum: 0, weight: 0 });
        return { v: t, barycenter: o.sum / o.weight, weight: o.weight };
      }
    });
  }
  function se(e, n) {
    let t = {};
    e.forEach((o, i) => {
      let s2 = { indegree: 0, in: [], out: [], vs: [o.v], i };
      o.barycenter !== void 0 && (s2.barycenter = o.barycenter, s2.weight = o.weight), t[o.v] = s2;
    }), n.edges().forEach((o) => {
      let i = t[o.v], s2 = t[o.w];
      i !== void 0 && s2 !== void 0 && (s2.indegree++, i.out.push(s2));
    });
    let r = Object.values(t).filter((o) => !o.indegree);
    return Et(r);
  }
  function Et(e) {
    let n = [];
    function t(o) {
      return (i) => {
        i.merged || (i.barycenter === void 0 || o.barycenter === void 0 || i.barycenter >= o.barycenter) && Lt(o, i);
      };
    }
    function r(o) {
      return (i) => {
        i.in.push(o), --i.indegree === 0 && e.push(i);
      };
    }
    for (; e.length; ) {
      let o = e.pop();
      n.push(o), o.in.reverse().forEach(t(o)), o.out.forEach(r(o));
    }
    return n.filter((o) => !o.merged).map((o) => T(o, ["vs", "i", "barycenter", "weight"]));
  }
  function Lt(e, n) {
    let t = 0, r = 0;
    e.weight && (t += e.barycenter * e.weight, r += e.weight), n.weight && (t += n.barycenter * n.weight, r += n.weight), e.vs = n.vs.concat(e.vs), e.barycenter = t / r, e.weight = r, e.i = Math.min(n.i, e.i), n.merged = true;
  }
  function ae(e, n) {
    let t = Ce(e, (u4) => Object.hasOwn(u4, "barycenter")), r = t.lhs, o = t.rhs.sort((u4, c6) => c6.i - u4.i), i = [], s2 = 0, a4 = 0, d = 0;
    r.sort(yt(!!n)), d = on(i, o, d), r.forEach((u4) => {
      d += u4.vs.length, i.push(u4.vs), s2 += u4.barycenter * u4.weight, a4 += u4.weight, d = on(i, o, d);
    });
    let l2 = { vs: i.flat(1) };
    return a4 && (l2.barycenter = s2 / a4, l2.weight = a4), l2;
  }
  function on(e, n, t) {
    let r;
    for (; n.length && (r = n[n.length - 1]).i <= t; ) n.pop(), e.push(r.vs), t++;
    return t;
  }
  function yt(e) {
    return (n, t) => n.barycenter < t.barycenter ? -1 : n.barycenter > t.barycenter ? 1 : e ? t.i - n.i : n.i - t.i;
  }
  function W(e, n, t, r) {
    let o = e.children(n), i = e.node(n), s2 = i ? i.borderLeft : void 0, a4 = i ? i.borderRight : void 0, d = {};
    s2 && (o = o.filter((h) => h !== s2 && h !== a4));
    let l2 = ie(e, o);
    l2.forEach((h) => {
      if (e.children(h.v).length) {
        let f = W(e, h.v, t, r);
        d[h.v] = f, Object.hasOwn(f, "barycenter") && Nt(h, f);
      }
    });
    let u4 = se(l2, t);
    wt(u4, d);
    let c6 = ae(u4, r);
    if (s2 && a4) {
      c6.vs = [s2, c6.vs, a4].flat(1);
      let h = e.predecessors(s2);
      if (h && h.length) {
        let f = e.node(h[0]), g = e.predecessors(a4), b10 = e.node(g[0]);
        Object.hasOwn(c6, "barycenter") || (c6.barycenter = 0, c6.weight = 0), c6.barycenter = (c6.barycenter * c6.weight + f.order + b10.order) / (c6.weight + 2), c6.weight += 2;
      }
    }
    return c6;
  }
  function wt(e, n) {
    e.forEach((t) => {
      t.vs = t.vs.flatMap((r) => n[r] ? n[r].vs : r);
    });
  }
  function Nt(e, n) {
    e.barycenter !== void 0 ? (e.barycenter = (e.barycenter * e.weight + n.barycenter * n.weight) / (e.weight + n.weight), e.weight += n.weight) : (e.barycenter = n.barycenter, e.weight = n.weight);
  }
  function de(e, n, t, r) {
    r || (r = e.nodes());
    let o = Gt(e), i = new p({ compound: true }).setGraph({ root: o }).setDefaultNodeLabel((s2) => e.node(s2));
    return r.forEach((s2) => {
      let a4 = e.node(s2), d = e.parent(s2);
      if (a4.rank === n || a4.minRank <= n && n <= a4.maxRank) {
        i.setNode(s2), i.setParent(s2, d || o);
        let l2 = e[t](s2);
        l2 && l2.forEach((u4) => {
          let c6 = u4.v === s2 ? u4.w : u4.v, h = i.edge(c6, s2), f = h !== void 0 ? h.weight : 0;
          i.setEdge(c6, s2, { weight: e.edge(u4).weight + f });
        }), Object.hasOwn(a4, "minRank") && i.setNode(s2, { borderLeft: a4.borderLeft[n], borderRight: a4.borderRight[n] });
      }
    }), i;
  }
  function Gt(e) {
    let n;
    for (; e.hasNode(n = j("_root")); ) ;
    return n;
  }
  function le(e, n, t) {
    let r = {}, o;
    t.forEach((i) => {
      let s2 = e.parent(i), a4, d;
      for (; s2; ) {
        if (a4 = e.parent(s2), a4 ? (d = r[a4], r[a4] = s2) : (d = o, o = s2), d && d !== s2) {
          n.setEdge(d, s2);
          return;
        }
        s2 = a4;
      }
    });
  }
  function B(e, n = {}) {
    if (typeof n.customOrder == "function") {
      n.customOrder(e, B);
      return;
    }
    let t = X(e), r = sn(e, k(1, t + 1), "inEdges"), o = sn(e, k(t - 1, -1, -1), "outEdges"), i = re(e);
    if (an(e, i), n.disableOptimalOrderHeuristic) return;
    let s2 = Number.POSITIVE_INFINITY, a4, d = n.constraints || [];
    for (let l2 = 0, u4 = 0; u4 < 4; ++l2, ++u4) {
      kt(l2 % 2 ? r : o, l2 % 4 >= 2, d), i = N(e);
      let c6 = oe(e, i);
      c6 < s2 ? (u4 = 0, a4 = Object.assign({}, i), s2 = c6) : c6 === s2 && (a4 = structuredClone(i));
    }
    an(e, a4);
  }
  function sn(e, n, t) {
    let r = /* @__PURE__ */ new Map(), o = (i, s2) => {
      r.has(i) || r.set(i, []), r.get(i).push(s2);
    };
    for (let i of e.nodes()) {
      let s2 = e.node(i);
      if (typeof s2.rank == "number" && o(s2.rank, i), typeof s2.minRank == "number" && typeof s2.maxRank == "number") for (let a4 = s2.minRank; a4 <= s2.maxRank; a4++) a4 !== s2.rank && o(a4, i);
    }
    return n.map(function(i) {
      return de(e, i, t, r.get(i) || []);
    });
  }
  function kt(e, n, t) {
    let r = new p();
    e.forEach(function(o) {
      t.forEach((a4) => r.setEdge(a4.left, a4.right));
      let i = o.graph().root, s2 = W(o, i, r, n);
      s2.vs.forEach((a4, d) => o.node(a4).order = d), le(o, r, s2.vs);
    });
  }
  function an(e, n) {
    Object.values(n).forEach((t) => t.forEach((r, o) => e.node(r).order = o));
  }
  function vt(e, n) {
    let t = {};
    function r(o, i) {
      let s2 = 0, a4 = 0, d = o.length, l2 = i[i.length - 1];
      return i.forEach((u4, c6) => {
        let h = xt(e, u4), f = h ? e.node(h).order : d;
        (h || u4 === l2) && (i.slice(a4, c6 + 1).forEach((g) => {
          let b10 = e.predecessors(g);
          b10 && b10.forEach((m4) => {
            let E3 = e.node(m4), y5 = E3.order;
            (y5 < s2 || f < y5) && !(E3.dummy && e.node(g).dummy) && dn(t, m4, g);
          });
        }), a4 = c6 + 1, s2 = f);
      }), i;
    }
    return n.length && n.reduce(r), t;
  }
  function _t(e, n) {
    let t = {};
    function r(i, s2, a4, d, l2) {
      k(s2, a4).forEach((u4) => {
        let c6 = i[u4];
        if (c6 !== void 0 && e.node(c6).dummy) {
          let h = e.predecessors(c6);
          h && h.forEach((f) => {
            if (f === void 0) return;
            let g = e.node(f);
            g.dummy && (g.order < d || g.order > l2) && dn(t, f, c6);
          });
        }
      });
    }
    function o(i, s2) {
      let a4 = -1, d = -1, l2 = 0;
      return s2.forEach((u4, c6) => {
        if (e.node(u4).dummy === "border") {
          let h = e.predecessors(u4);
          if (h && h.length) {
            let f = h[0];
            if (f === void 0) return;
            d = e.node(f).order, r(s2, l2, c6, a4, d), l2 = c6, a4 = d;
          }
        }
        r(s2, l2, s2.length, d, i.length);
      }), s2;
    }
    return n.length && n.reduce(o), t;
  }
  function xt(e, n) {
    if (e.node(n).dummy) {
      let t = e.predecessors(n);
      if (t) return t.find((r) => e.node(r).dummy);
    }
  }
  function dn(e, n, t) {
    if (n > t) {
      let o = n;
      n = t, t = o;
    }
    let r = e[n];
    r || (e[n] = r = {}), r[t] = true;
  }
  function Tt(e, n, t) {
    if (n > t) {
      let o = n;
      n = t, t = o;
    }
    let r = e[n];
    return r !== void 0 && Object.hasOwn(r, t);
  }
  function Ot(e, n, t, r) {
    let o = {}, i = {}, s2 = {};
    return n.forEach((a4) => {
      a4.forEach((d, l2) => {
        o[d] = d, i[d] = d, s2[d] = l2;
      });
    }), n.forEach((a4) => {
      let d = -1;
      a4.forEach((l2) => {
        let u4 = r(l2);
        if (u4 && u4.length) {
          let c6 = u4.sort((f, g) => {
            let b10 = s2[f], m4 = s2[g];
            return (b10 !== void 0 ? b10 : 0) - (m4 !== void 0 ? m4 : 0);
          }), h = (c6.length - 1) / 2;
          for (let f = Math.floor(h), g = Math.ceil(h); f <= g; ++f) {
            let b10 = c6[f];
            if (b10 === void 0) continue;
            let m4 = s2[b10];
            if (m4 !== void 0 && i[l2] === l2 && d < m4 && !Tt(t, l2, b10)) {
              let E3 = o[b10];
              E3 !== void 0 && (i[b10] = l2, i[l2] = o[l2] = E3, d = m4);
            }
          }
        }
      });
    }), { root: o, align: i };
  }
  function It(e, n, t, r, o = false) {
    let i = {}, s2 = Ct(e, n, t, o), a4 = o ? "borderLeft" : "borderRight";
    function d(f, g) {
      let b10 = s2.nodes().slice(), m4 = {}, E3 = b10.pop();
      for (; E3; ) {
        if (m4[E3]) f(E3);
        else {
          m4[E3] = true, b10.push(E3);
          for (let y5 of g(E3)) b10.push(y5);
        }
        E3 = b10.pop();
      }
    }
    function l2(f) {
      let g = s2.inEdges(f);
      g ? i[f] = g.reduce((b10, m4) => {
        var I2;
        let E3 = (I2 = i[m4.v]) != null ? I2 : 0, y5 = s2.edge(m4);
        return Math.max(b10, E3 + (y5 !== void 0 ? y5 : 0));
      }, 0) : i[f] = 0;
    }
    function u4(f) {
      let g = s2.outEdges(f), b10 = Number.POSITIVE_INFINITY;
      g && (b10 = g.reduce((E3, y5) => {
        let I2 = i[y5.w], be = s2.edge(y5);
        return Math.min(E3, (I2 !== void 0 ? I2 : 0) - (be !== void 0 ? be : 0));
      }, Number.POSITIVE_INFINITY));
      let m4 = e.node(f);
      b10 !== Number.POSITIVE_INFINITY && m4.borderType !== a4 && (i[f] = Math.max(i[f] !== void 0 ? i[f] : 0, b10));
    }
    function c6(f) {
      return s2.predecessors(f) || [];
    }
    function h(f) {
      return s2.successors(f) || [];
    }
    return d(l2, c6), d(u4, h), Object.keys(r).forEach((f) => {
      var b10;
      let g = t[f];
      g !== void 0 && (i[f] = (b10 = i[g]) != null ? b10 : 0);
    }), i;
  }
  function Ct(e, n, t, r) {
    let o = new p(), i = e.graph(), s2 = jt(i.nodesep, i.edgesep, r);
    return n.forEach((a4) => {
      let d;
      a4.forEach((l2) => {
        let u4 = t[l2];
        if (u4 !== void 0) {
          if (o.setNode(u4), d !== void 0) {
            let c6 = t[d];
            if (c6 !== void 0) {
              let h = o.edge(c6, u4);
              o.setEdge(c6, u4, Math.max(s2(e, l2, d), h || 0));
            }
          }
          d = l2;
        }
      });
    }), o;
  }
  function Rt(e, n) {
    return Object.values(n).reduce((t, r) => {
      let o = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
      Object.entries(r).forEach(([a4, d]) => {
        let l2 = St(e, a4) / 2;
        o = Math.max(d + l2, o), i = Math.min(d - l2, i);
      });
      let s2 = o - i;
      return s2 < t[0] && (t = [s2, r]), t;
    }, [Number.POSITIVE_INFINITY, null])[1];
  }
  function Pt(e, n) {
    let t = Object.values(n), r = L(Math.min, t), o = L(Math.max, t);
    ["u", "d"].forEach((i) => {
      ["l", "r"].forEach((s2) => {
        let a4 = i + s2, d = e[a4];
        if (!d || d === n) return;
        let l2 = Object.values(d), u4 = r - L(Math.min, l2);
        s2 !== "l" && (u4 = o - L(Math.max, l2)), u4 && (e[a4] = O(d, (c6) => c6 + u4));
      });
    });
  }
  function Mt(e, n = void 0) {
    let t = e.ul;
    return t ? O(t, (r, o) => {
      var s2, a4;
      if (n) {
        let d = n.toLowerCase(), l2 = e[d];
        if (l2 && l2[o] !== void 0) return l2[o];
      }
      let i = Object.values(e).map((d) => {
        let l2 = d[o];
        return l2 !== void 0 ? l2 : 0;
      }).sort((d, l2) => d - l2);
      return (((s2 = i[1]) != null ? s2 : 0) + ((a4 = i[2]) != null ? a4 : 0)) / 2;
    }) : {};
  }
  function ln(e) {
    let n = N(e), t = Object.assign(vt(e, n), _t(e, n)), r = {}, o;
    ["u", "d"].forEach((s2) => {
      o = s2 === "u" ? n : Object.values(n).reverse(), ["l", "r"].forEach((a4) => {
        a4 === "r" && (o = o.map((c6) => Object.values(c6).reverse()));
        let l2 = Ot(e, o, t, (c6) => (s2 === "u" ? e.predecessors(c6) : e.successors(c6)) || []), u4 = It(e, o, l2.root, l2.align, a4 === "r");
        a4 === "r" && (u4 = O(u4, (c6) => -c6)), r[s2 + a4] = u4;
      });
    });
    let i = Rt(e, r);
    return Pt(r, i), Mt(r, e.graph().align);
  }
  function jt(e, n, t) {
    return (r, o, i) => {
      let s2 = r.node(o), a4 = r.node(i), d = 0, l2;
      if (d += s2.width / 2, Object.hasOwn(s2, "labelpos")) switch (s2.labelpos.toLowerCase()) {
        case "l":
          l2 = -s2.width / 2;
          break;
        case "r":
          l2 = s2.width / 2;
          break;
      }
      if (l2 && (d += t ? l2 : -l2), l2 = void 0, d += (s2.dummy ? n : e) / 2, d += (a4.dummy ? n : e) / 2, d += a4.width / 2, Object.hasOwn(a4, "labelpos")) switch (a4.labelpos.toLowerCase()) {
        case "l":
          l2 = a4.width / 2;
          break;
        case "r":
          l2 = -a4.width / 2;
          break;
      }
      return l2 && (d += t ? l2 : -l2), d;
    };
  }
  function St(e, n) {
    return e.node(n).width;
  }
  function un(e) {
    e = A(e), Ft(e), Object.entries(ln(e)).forEach(([n, t]) => e.node(n).x = t);
  }
  function Ft(e) {
    let n = N(e), t = e.graph(), r = t.ranksep, o = t.rankalign, i = 0;
    n.forEach((s2) => {
      let a4 = s2.reduce((d, l2) => {
        var c6;
        let u4 = (c6 = e.node(l2).height) != null ? c6 : 0;
        return d > u4 ? d : u4;
      }, 0);
      s2.forEach((d) => {
        let l2 = e.node(d);
        o === "top" ? l2.y = i + l2.height / 2 : o === "bottom" ? l2.y = i + a4 - l2.height / 2 : l2.y = i + a4 / 2;
      }), i += a4 + r;
    });
  }
  function he(e, n = {}) {
    let t = n.debugTiming ? P : M;
    return t("layout", () => {
      let r = t("  buildLayoutGraph", () => Xt(e));
      return t("  runLayout", () => Dt(r, t, n)), t("  updateInputGraph", () => At(e, r)), r;
    });
  }
  function Dt(e, n, t) {
    n("    makeSpaceForEdgeLabels", () => Ut(e)), n("    removeSelfEdges", () => rr(e)), n("    acyclic", () => je(e)), n("    nestingGraph.run", () => Ke(e)), n("    rank", () => Xe(A(e))), n("    injectEdgeLabelProxies", () => Kt(e)), n("    removeEmptyRanks", () => Oe(e)), n("    nestingGraph.cleanup", () => Je(e)), n("    normalizeRanks", () => Te(e)), n("    assignRankMinMax", () => $t(e)), n("    removeEdgeLabelProxies", () => Jt(e)), n("    normalize.run", () => Fe(e)), n("    parentDummyChains", () => Ue(e)), n("    addBorderSegments", () => Ze(e)), n("    order", () => B(e, t)), n("    insertSelfEdges", () => or(e)), n("    adjustCoordinateSystem", () => nn(e)), n("    position", () => un(e)), n("    positionSelfEdges", () => ir(e)), n("    removeBorderNodes", () => tr(e)), n("    normalize.undo", () => De(e)), n("    fixupEdgeLabelCoords", () => er(e)), n("    undoCoordinateSystem", () => tn(e)), n("    translateGraph", () => Qt(e)), n("    assignNodeIntersects", () => Zt(e)), n("    reversePoints", () => nr(e)), n("    acyclic.undo", () => Se(e));
  }
  function At(e, n) {
    e.nodes().forEach((t) => {
      let r = e.node(t), o = n.node(t);
      r && (r.x = o.x, r.y = o.y, r.order = o.order, r.rank = o.rank, n.children(t).length && (r.width = o.width, r.height = o.height));
    }), e.edges().forEach((t) => {
      let r = e.edge(t), o = n.edge(t);
      r.points = o.points, Object.hasOwn(o, "x") && (r.x = o.x, r.y = o.y);
    }), e.graph().width = n.graph().width, e.graph().height = n.graph().height;
  }
  var Vt = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
  var Wt = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "TB", rankalign: "center" };
  var Bt = ["acyclicer", "ranker", "rankdir", "align", "rankalign"];
  var Yt = ["width", "height", "rank"];
  var cn = { width: 0, height: 0 };
  var zt = ["minlen", "weight", "width", "height", "labeloffset"];
  var Ht = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: "r" };
  var qt = ["labelpos"];
  function Xt(e) {
    let n = new p({ multigraph: true, compound: true }), t = ce(e.graph());
    return n.setGraph(Object.assign({}, Wt, ue(t, Vt), T(t, Bt))), e.nodes().forEach((r) => {
      let o = ce(e.node(r)), i = ue(o, Yt);
      Object.keys(cn).forEach((a4) => {
        i[a4] === void 0 && (i[a4] = cn[a4]);
      }), n.setNode(r, i);
      let s2 = e.parent(r);
      s2 !== void 0 && n.setParent(r, s2);
    }), e.edges().forEach((r) => {
      let o = ce(e.edge(r));
      n.setEdge(r, Object.assign({}, Ht, ue(o, zt), T(o, qt)));
    }), n;
  }
  function Ut(e) {
    let n = e.graph();
    n.ranksep /= 2, e.edges().forEach((t) => {
      let r = e.edge(t);
      r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (n.rankdir === "TB" || n.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
    });
  }
  function Kt(e) {
    e.edges().forEach((n) => {
      let t = e.edge(n);
      if (t.width && t.height) {
        let r = e.node(n.v), i = { rank: (e.node(n.w).rank - r.rank) / 2 + r.rank, e: n };
        w(e, "edge-proxy", i, "_ep");
      }
    });
  }
  function $t(e) {
    let n = 0;
    e.nodes().forEach((t) => {
      let r = e.node(t);
      r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, n = Math.max(n, r.maxRank));
    }), e.graph().maxRank = n;
  }
  function Jt(e) {
    e.nodes().forEach((n) => {
      let t = e.node(n);
      if (t.dummy === "edge-proxy") {
        let r = t;
        e.edge(r.e).labelRank = t.rank, e.removeNode(n);
      }
    });
  }
  function Qt(e) {
    let n = Number.POSITIVE_INFINITY, t = 0, r = Number.POSITIVE_INFINITY, o = 0, i = e.graph(), s2 = i.marginx || 0, a4 = i.marginy || 0;
    function d(l2) {
      let u4 = l2.x, c6 = l2.y, h = l2.width, f = l2.height;
      n = Math.min(n, u4 - h / 2), t = Math.max(t, u4 + h / 2), r = Math.min(r, c6 - f / 2), o = Math.max(o, c6 + f / 2);
    }
    e.nodes().forEach((l2) => d(e.node(l2))), e.edges().forEach((l2) => {
      let u4 = e.edge(l2);
      Object.hasOwn(u4, "x") && d(u4);
    }), n -= s2, r -= a4, e.nodes().forEach((l2) => {
      let u4 = e.node(l2);
      u4.x -= n, u4.y -= r;
    }), e.edges().forEach((l2) => {
      let u4 = e.edge(l2);
      u4.points.forEach((c6) => {
        c6.x -= n, c6.y -= r;
      }), Object.hasOwn(u4, "x") && (u4.x -= n), Object.hasOwn(u4, "y") && (u4.y -= r);
    }), i.width = t - n + s2, i.height = o - r + a4;
  }
  function Zt(e) {
    e.edges().forEach((n) => {
      let t = e.edge(n), r = e.node(n.v), o = e.node(n.w), i, s2;
      t.points ? (i = t.points[0], s2 = t.points[t.points.length - 1]) : (t.points = [], i = o, s2 = r), t.points.unshift(H(r, i)), t.points.push(H(o, s2));
    });
  }
  function er(e) {
    e.edges().forEach((n) => {
      let t = e.edge(n);
      if (Object.hasOwn(t, "x")) switch ((t.labelpos === "l" || t.labelpos === "r") && (t.width -= t.labeloffset), t.labelpos) {
        case "l":
          t.x -= t.width / 2 + t.labeloffset;
          break;
        case "r":
          t.x += t.width / 2 + t.labeloffset;
          break;
      }
    });
  }
  function nr(e) {
    e.edges().forEach((n) => {
      let t = e.edge(n);
      t.reversed && t.points.reverse();
    });
  }
  function tr(e) {
    e.nodes().forEach((n) => {
      if (e.children(n).length) {
        let t = e.node(n), r = e.node(t.borderTop), o = e.node(t.borderBottom), i = e.node(t.borderLeft[t.borderLeft.length - 1]), s2 = e.node(t.borderRight[t.borderRight.length - 1]);
        t.width = Math.abs(s2.x - i.x), t.height = Math.abs(o.y - r.y), t.x = i.x + t.width / 2, t.y = r.y + t.height / 2;
      }
    }), e.nodes().forEach((n) => {
      e.node(n).dummy === "border" && e.removeNode(n);
    });
  }
  function rr(e) {
    e.edges().forEach((n) => {
      if (n.v === n.w) {
        let t = e.node(n.v);
        t.selfEdges || (t.selfEdges = []), t.selfEdges.push({ e: n, label: e.edge(n) }), e.removeEdge(n);
      }
    });
  }
  function or(e) {
    N(e).forEach((t) => {
      let r = 0;
      t.forEach((o, i) => {
        let s2 = e.node(o);
        s2.order = i + r, (s2.selfEdges || []).forEach((a4) => {
          w(e, "selfedge", { width: a4.label.width, height: a4.label.height, rank: s2.rank, order: i + ++r, e: a4.e, label: a4.label }, "_se");
        }), delete s2.selfEdges;
      });
    });
  }
  function ir(e) {
    e.nodes().forEach((n) => {
      let t = e.node(n);
      if (t.dummy === "selfedge") {
        let r = t, o = e.node(r.e.v), i = o.x + o.width / 2, s2 = o.y, a4 = t.x - i, d = o.height / 2;
        e.setEdge(r.e, r.label), e.removeNode(n), r.label.points = [{ x: i + 2 * a4 / 3, y: s2 - d }, { x: i + 5 * a4 / 6, y: s2 - d }, { x: i + a4, y: s2 }, { x: i + 5 * a4 / 6, y: s2 + d }, { x: i + 2 * a4 / 3, y: s2 + d }], r.label.x = t.x, r.label.y = t.y;
      }
    });
  }
  function ue(e, n) {
    return O(T(e, n), Number);
  }
  function ce(e) {
    let n = {};
    return e && Object.entries(e).forEach(([t, r]) => {
      typeof t == "string" && (t = t.toLowerCase()), n[t] = r;
    }), n;
  }
  function fe(e) {
    let n = N(e), t = new p({ compound: true, multigraph: true }).setGraph({});
    return e.nodes().forEach((r) => {
      t.setNode(r, { label: r }), t.setParent(r, "layer" + e.node(r).rank);
    }), e.edges().forEach((r) => t.setEdge(r.v, r.w, {}, r.name)), n.forEach((r, o) => {
      let i = "layer" + o;
      t.setNode(i, { rank: "same" }), r.reduce((s2, a4) => (t.setEdge(s2, a4, { style: "invis" }), a4));
    }), t;
  }
  var xo = { time: P, notime: M };
  var sr = { graphlib: z, version: U, layout: he, debug: fe, util: { time: P, notime: M } };
  var To = sr;

  // lib/dagre.ts
  var dagre_default = dagre_esm_exports;

  // node_modules/@dagrejs/graphlib/dist/graphlib.esm.js
  var graphlib_esm_exports = {};
  __export(graphlib_esm_exports, {
    Graph: () => p2,
    alg: () => v2,
    json: () => G,
    version: () => H2
  });
  var V2 = Object.defineProperty;
  var F2 = (s2, e) => {
    for (var t in e) V2(s2, t, { get: e[t], enumerable: true });
  };
  var p2 = class {
    constructor(e) {
      this._isDirected = true;
      this._isMultigraph = false;
      this._isCompound = false;
      this._nodes = {};
      this._in = {};
      this._preds = {};
      this._out = {};
      this._sucs = {};
      this._edgeObjs = {};
      this._edgeLabels = {};
      this._nodeCount = 0;
      this._edgeCount = 0;
      this._defaultNodeLabelFn = () => {
      };
      this._defaultEdgeLabelFn = () => {
      };
      e && (this._isDirected = "directed" in e ? e.directed : true, this._isMultigraph = "multigraph" in e ? e.multigraph : false, this._isCompound = "compound" in e ? e.compound : false), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {});
    }
    isDirected() {
      return this._isDirected;
    }
    isMultigraph() {
      return this._isMultigraph;
    }
    isCompound() {
      return this._isCompound;
    }
    setGraph(e) {
      return this._label = e, this;
    }
    graph() {
      return this._label;
    }
    setDefaultNodeLabel(e) {
      return typeof e != "function" ? this._defaultNodeLabelFn = () => e : this._defaultNodeLabelFn = e, this;
    }
    nodeCount() {
      return this._nodeCount;
    }
    nodes() {
      return Object.keys(this._nodes);
    }
    sources() {
      return this.nodes().filter((e) => Object.keys(this._in[e]).length === 0);
    }
    sinks() {
      return this.nodes().filter((e) => Object.keys(this._out[e]).length === 0);
    }
    setNodes(e, t) {
      return e.forEach((n) => {
        t !== void 0 ? this.setNode(n, t) : this.setNode(n);
      }), this;
    }
    setNode(e, t) {
      return e in this._nodes ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = "\0", this._children[e] = {}, this._children["\0"][e] = true), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
    }
    node(e) {
      return this._nodes[e];
    }
    hasNode(e) {
      return e in this._nodes;
    }
    removeNode(e) {
      if (e in this._nodes) {
        let t = (n) => this.removeEdge(this._edgeObjs[n]);
        delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], this.children(e).forEach((n) => {
          this.setParent(n);
        }), delete this._children[e]), Object.keys(this._in[e]).forEach(t), delete this._in[e], delete this._preds[e], Object.keys(this._out[e]).forEach(t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
      }
      return this;
    }
    setParent(e, t) {
      if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
      if (t === void 0) t = "\0";
      else {
        t += "";
        for (let n = t; n !== void 0; n = this.parent(n)) if (n === e) throw new Error("Setting " + t + " as parent of " + e + " would create a cycle");
        this.setNode(t);
      }
      return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = true, this;
    }
    parent(e) {
      if (this._isCompound) {
        let t = this._parent[e];
        if (t !== "\0") return t;
      }
    }
    children(e = "\0") {
      if (this._isCompound) {
        let t = this._children[e];
        if (t) return Object.keys(t);
      } else {
        if (e === "\0") return this.nodes();
        if (this.hasNode(e)) return [];
      }
      return [];
    }
    predecessors(e) {
      let t = this._preds[e];
      if (t) return Object.keys(t);
    }
    successors(e) {
      let t = this._sucs[e];
      if (t) return Object.keys(t);
    }
    neighbors(e) {
      let t = this.predecessors(e);
      if (t) {
        let n = new Set(t);
        for (let i of this.successors(e)) n.add(i);
        return Array.from(n.values());
      }
    }
    isLeaf(e) {
      let t;
      return this.isDirected() ? t = this.successors(e) : t = this.neighbors(e), t.length === 0;
    }
    filterNodes(e) {
      let t = new this.constructor({ directed: this._isDirected, multigraph: this._isMultigraph, compound: this._isCompound });
      t.setGraph(this.graph()), Object.entries(this._nodes).forEach(([r, o]) => {
        e(r) && t.setNode(r, o);
      }), Object.values(this._edgeObjs).forEach((r) => {
        t.hasNode(r.v) && t.hasNode(r.w) && t.setEdge(r, this.edge(r));
      });
      let n = {}, i = (r) => {
        let o = this.parent(r);
        return !o || t.hasNode(o) ? (n[r] = o != null ? o : void 0, o != null ? o : void 0) : o in n ? n[o] : i(o);
      };
      return this._isCompound && t.nodes().forEach((r) => t.setParent(r, i(r))), t;
    }
    setDefaultEdgeLabel(e) {
      return typeof e != "function" ? this._defaultEdgeLabelFn = () => e : this._defaultEdgeLabelFn = e, this;
    }
    edgeCount() {
      return this._edgeCount;
    }
    edges() {
      return Object.values(this._edgeObjs);
    }
    setPath(e, t) {
      return e.reduce((n, i) => (t !== void 0 ? this.setEdge(n, i, t) : this.setEdge(n, i), i)), this;
    }
    setEdge(e, t, n, i) {
      let r, o, d, a4, c6 = false;
      typeof e == "object" && e !== null && "v" in e ? (r = e.v, o = e.w, d = e.name, arguments.length === 2 && (a4 = t, c6 = true)) : (r = e, o = t, d = i, arguments.length > 2 && (a4 = n, c6 = true)), r = "" + r, o = "" + o, d !== void 0 && (d = "" + d);
      let h = b(this._isDirected, r, o, d);
      if (h in this._edgeLabels) return c6 && (this._edgeLabels[h] = a4), this;
      if (d !== void 0 && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
      this.setNode(r), this.setNode(o), this._edgeLabels[h] = c6 ? a4 : this._defaultEdgeLabelFn(r, o, d);
      let u4 = J2(this._isDirected, r, o, d);
      return r = u4.v, o = u4.w, Object.freeze(u4), this._edgeObjs[h] = u4, k2(this._preds[o], r), k2(this._sucs[r], o), this._in[o][h] = u4, this._out[r][h] = u4, this._edgeCount++, this;
    }
    edge(e, t, n) {
      let i = arguments.length === 1 ? N2(this._isDirected, e) : b(this._isDirected, e, t, n);
      return this._edgeLabels[i];
    }
    edgeAsObj(e, t, n) {
      let i = arguments.length === 1 ? this.edge(e) : this.edge(e, t, n);
      return typeof i != "object" ? { label: i } : i;
    }
    hasEdge(e, t, n) {
      return (arguments.length === 1 ? N2(this._isDirected, e) : b(this._isDirected, e, t, n)) in this._edgeLabels;
    }
    removeEdge(e, t, n) {
      let i = arguments.length === 1 ? N2(this._isDirected, e) : b(this._isDirected, e, t, n), r = this._edgeObjs[i];
      if (r) {
        let o = r.v, d = r.w;
        delete this._edgeLabels[i], delete this._edgeObjs[i], x2(this._preds[d], o), x2(this._sucs[o], d), delete this._in[d][i], delete this._out[o][i], this._edgeCount--;
      }
      return this;
    }
    inEdges(e, t) {
      return this.isDirected() ? this.filterEdges(this._in[e], e, t) : this.nodeEdges(e, t);
    }
    outEdges(e, t) {
      return this.isDirected() ? this.filterEdges(this._out[e], e, t) : this.nodeEdges(e, t);
    }
    nodeEdges(e, t) {
      if (e in this._nodes) return this.filterEdges({ ...this._in[e], ...this._out[e] }, e, t);
    }
    _removeFromParentsChildList(e) {
      delete this._children[this._parent[e]][e];
    }
    filterEdges(e, t, n) {
      if (!e) return;
      let i = Object.values(e);
      return n ? i.filter((r) => r.v === t && r.w === n || r.v === n && r.w === t) : i;
    }
  };
  function k2(s2, e) {
    s2[e] ? s2[e]++ : s2[e] = 1;
  }
  function x2(s2, e) {
    s2[e] !== void 0 && !--s2[e] && delete s2[e];
  }
  function b(s2, e, t, n) {
    let i = "" + e, r = "" + t;
    if (!s2 && i > r) {
      let o = i;
      i = r, r = o;
    }
    return i + "" + r + "" + (n === void 0 ? "\0" : n);
  }
  function J2(s2, e, t, n) {
    let i = "" + e, r = "" + t;
    if (!s2 && i > r) {
      let d = i;
      i = r, r = d;
    }
    let o = { v: i, w: r };
    return n && (o.name = n), o;
  }
  function N2(s2, e) {
    return b(s2, e.v, e.w, e.name);
  }
  var H2 = "4.0.1";
  var G = {};
  F2(G, { read: () => z2, write: () => U2 });
  function U2(s2) {
    let e = { options: { directed: s2.isDirected(), multigraph: s2.isMultigraph(), compound: s2.isCompound() }, nodes: Y2(s2), edges: K2(s2) }, t = s2.graph();
    return t !== void 0 && (e.value = structuredClone(t)), e;
  }
  function Y2(s2) {
    return s2.nodes().map((e) => {
      let t = s2.node(e), n = s2.parent(e), i = { v: e };
      return t !== void 0 && (i.value = t), n !== void 0 && (i.parent = n), i;
    });
  }
  function K2(s2) {
    return s2.edges().map((e) => {
      let t = s2.edge(e), n = { v: e.v, w: e.w };
      return e.name !== void 0 && (n.name = e.name), t !== void 0 && (n.value = t), n;
    });
  }
  function z2(s2) {
    let e = new p2(s2.options);
    return s2.value !== void 0 && e.setGraph(s2.value), s2.nodes.forEach((t) => {
      e.setNode(t.v, t.value), t.parent && e.setParent(t.v, t.parent);
    }), s2.edges.forEach((t) => {
      e.setEdge({ v: t.v, w: t.w, name: t.name }, t.value);
    }), e;
  }
  var v2 = {};
  F2(v2, { CycleException: () => l, bellmanFord: () => m, components: () => R2, dijkstra: () => E, dijkstraAll: () => P2, findCycles: () => I, floydWarshall: () => D2, isAcyclic: () => O2, postorder: () => T2, preorder: () => A2, prim: () => W2, shortestPaths: () => S2, tarjan: () => y, topsort: () => L2 });
  var Q2 = () => 1;
  function m(s2, e, t, n) {
    return $2(s2, String(e), t || Q2, n || function(i) {
      return s2.outEdges(i);
    });
  }
  function $2(s2, e, t, n) {
    let i = {}, r, o = 0, d = s2.nodes(), a4 = function(u4) {
      let g = t(u4);
      i[u4.v].distance + g < i[u4.w].distance && (i[u4.w] = { distance: i[u4.v].distance + g, predecessor: u4.v }, r = true);
    }, c6 = function() {
      d.forEach(function(u4) {
        n(u4).forEach(function(g) {
          let f = g.v === u4 ? g.v : g.w, M3 = f === g.v ? g.w : g.v;
          a4({ v: f, w: M3 });
        });
      });
    };
    d.forEach(function(u4) {
      let g = u4 === e ? 0 : Number.POSITIVE_INFINITY;
      i[u4] = { distance: g, predecessor: "" };
    });
    let h = d.length;
    for (let u4 = 1; u4 < h && (r = false, o++, c6(), !!r); u4++) ;
    if (o === h - 1 && (r = false, c6(), r)) throw new Error("The graph contains a negative weight cycle");
    return i;
  }
  function R2(s2) {
    let e = {}, t = [], n;
    function i(r) {
      r in e || (e[r] = true, n.push(r), s2.successors(r).forEach(i), s2.predecessors(r).forEach(i));
    }
    return s2.nodes().forEach(function(r) {
      n = [], i(r), n.length && t.push(n);
    }), t;
  }
  var _2 = class {
    constructor() {
      this._arr = [];
      this._keyIndices = {};
    }
    size() {
      return this._arr.length;
    }
    keys() {
      return this._arr.map((e) => e.key);
    }
    has(e) {
      return e in this._keyIndices;
    }
    priority(e) {
      let t = this._keyIndices[e];
      if (t !== void 0) return this._arr[t].priority;
    }
    min() {
      if (this.size() === 0) throw new Error("Queue underflow");
      return this._arr[0].key;
    }
    add(e, t) {
      let n = this._keyIndices, i = String(e);
      if (!(i in n)) {
        let r = this._arr, o = r.length;
        return n[i] = o, r.push({ key: i, priority: t }), this._decrease(o), true;
      }
      return false;
    }
    removeMin() {
      this._swap(0, this._arr.length - 1);
      let e = this._arr.pop();
      return delete this._keyIndices[e.key], this._heapify(0), e.key;
    }
    decrease(e, t) {
      let n = this._keyIndices[e];
      if (n === void 0) throw new Error(`Key not found: ${e}`);
      let i = this._arr[n].priority;
      if (t > i) throw new Error(`New priority is greater than current priority. Key: ${e} Old: ${i} New: ${t}`);
      this._arr[n].priority = t, this._decrease(n);
    }
    _heapify(e) {
      let t = this._arr, n = 2 * e, i = n + 1, r = e;
      n < t.length && (r = t[n].priority < t[r].priority ? n : r, i < t.length && (r = t[i].priority < t[r].priority ? i : r), r !== e && (this._swap(e, r), this._heapify(r)));
    }
    _decrease(e) {
      let t = this._arr, n = t[e].priority, i;
      for (; e !== 0 && (i = e >> 1, !(t[i].priority < n)); ) this._swap(e, i), e = i;
    }
    _swap(e, t) {
      let n = this._arr, i = this._keyIndices, r = n[e], o = n[t];
      n[e] = o, n[t] = r, i[o.key] = e, i[r.key] = t;
    }
  };
  var q2 = () => 1;
  function E(s2, e, t, n) {
    let i = function(r) {
      return s2.outEdges(r);
    };
    return B2(s2, String(e), t || q2, n || i);
  }
  function B2(s2, e, t, n) {
    let i = {}, r = new _2(), o, d, a4 = function(c6) {
      let h = c6.v !== o ? c6.v : c6.w, u4 = i[h], g = t(c6), f = d.distance + g;
      if (g < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + c6 + " Weight: " + g);
      f < u4.distance && (u4.distance = f, u4.predecessor = o, r.decrease(h, f));
    };
    for (s2.nodes().forEach(function(c6) {
      let h = c6 === e ? 0 : Number.POSITIVE_INFINITY;
      i[c6] = { distance: h, predecessor: "" }, r.add(c6, h);
    }); r.size() > 0 && (o = r.removeMin(), d = i[o], d.distance !== Number.POSITIVE_INFINITY); ) n(o).forEach(a4);
    return i;
  }
  function P2(s2, e, t) {
    return s2.nodes().reduce(function(n, i) {
      return n[i] = E(s2, i, e, t), n;
    }, {});
  }
  function y(s2) {
    let e = 0, t = [], n = {}, i = [];
    function r(o) {
      let d = n[o] = { onStack: true, lowlink: e, index: e++ };
      if (t.push(o), s2.successors(o).forEach(function(a4) {
        a4 in n ? n[a4].onStack && (d.lowlink = Math.min(d.lowlink, n[a4].index)) : (r(a4), d.lowlink = Math.min(d.lowlink, n[a4].lowlink));
      }), d.lowlink === d.index) {
        let a4 = [], c6;
        do
          c6 = t.pop(), n[c6].onStack = false, a4.push(c6);
        while (o !== c6);
        i.push(a4);
      }
    }
    return s2.nodes().forEach(function(o) {
      o in n || r(o);
    }), i;
  }
  function I(s2) {
    return y(s2).filter(function(e) {
      return e.length > 1 || e.length === 1 && s2.hasEdge(e[0], e[0]);
    });
  }
  var X2 = () => 1;
  function D2(s2, e, t) {
    return Z2(s2, e || X2, t || function(n) {
      return s2.outEdges(n);
    });
  }
  function Z2(s2, e, t) {
    let n = {}, i = s2.nodes();
    return i.forEach(function(r) {
      n[r] = {}, n[r][r] = { distance: 0, predecessor: "" }, i.forEach(function(o) {
        r !== o && (n[r][o] = { distance: Number.POSITIVE_INFINITY, predecessor: "" });
      }), t(r).forEach(function(o) {
        let d = o.v === r ? o.w : o.v, a4 = e(o);
        n[r][d] = { distance: a4, predecessor: r };
      });
    }), i.forEach(function(r) {
      let o = n[r];
      i.forEach(function(d) {
        let a4 = n[d];
        i.forEach(function(c6) {
          let h = a4[r], u4 = o[c6], g = a4[c6], f = h.distance + u4.distance;
          f < g.distance && (g.distance = f, g.predecessor = u4.predecessor);
        });
      });
    }), n;
  }
  var l = class extends Error {
    constructor(...e) {
      super(...e);
    }
  };
  function L2(s2) {
    let e = {}, t = {}, n = [];
    function i(r) {
      if (r in t) throw new l();
      r in e || (t[r] = true, e[r] = true, s2.predecessors(r).forEach(i), delete t[r], n.push(r));
    }
    if (s2.sinks().forEach(i), Object.keys(e).length !== s2.nodeCount()) throw new l();
    return n;
  }
  function O2(s2) {
    try {
      L2(s2);
    } catch (e) {
      if (e instanceof l) return false;
      throw e;
    }
    return true;
  }
  function j2(s2, e, t, n, i) {
    Array.isArray(e) || (e = [e]);
    let r = ((d) => {
      var a4;
      return (a4 = s2.isDirected() ? s2.successors(d) : s2.neighbors(d)) != null ? a4 : [];
    }), o = {};
    return e.forEach(function(d) {
      if (!s2.hasNode(d)) throw new Error("Graph does not have node: " + d);
      i = C2(s2, d, t === "post", o, r, n, i);
    }), i;
  }
  function C2(s2, e, t, n, i, r, o) {
    return e in n || (n[e] = true, t || (o = r(o, e)), i(e).forEach(function(d) {
      o = C2(s2, d, t, n, i, r, o);
    }), t && (o = r(o, e))), o;
  }
  function w2(s2, e, t) {
    return j2(s2, e, t, function(n, i) {
      return n.push(i), n;
    }, []);
  }
  function T2(s2, e) {
    return w2(s2, e, "post");
  }
  function A2(s2, e) {
    return w2(s2, e, "pre");
  }
  function W2(s2, e) {
    let t = new p2(), n = {}, i = new _2(), r;
    function o(a4) {
      let c6 = a4.v === r ? a4.w : a4.v, h = i.priority(c6);
      if (h !== void 0) {
        let u4 = e(a4);
        u4 < h && (n[c6] = r, i.decrease(c6, u4));
      }
    }
    if (s2.nodeCount() === 0) return t;
    s2.nodes().forEach(function(a4) {
      i.add(a4, Number.POSITIVE_INFINITY), t.setNode(a4);
    }), i.decrease(s2.nodes()[0], 0);
    let d = false;
    for (; i.size() > 0; ) {
      if (r = i.removeMin(), r in n) t.setEdge(r, n[r]);
      else {
        if (d) throw new Error("Input graph is not connected: " + s2);
        d = true;
      }
      s2.nodeEdges(r).forEach(o);
    }
    return t;
  }
  function S2(s2, e, t, n) {
    return ee2(s2, e, t, n != null ? n : ((i) => {
      let r = s2.outEdges(i);
      return r != null ? r : [];
    }));
  }
  function ee2(s2, e, t, n) {
    if (t === void 0) return E(s2, e, t, n);
    let i = false, r = s2.nodes();
    for (let o = 0; o < r.length; o++) {
      let d = n(r[o]);
      for (let a4 = 0; a4 < d.length; a4++) {
        let c6 = d[a4], h = c6.v === r[o] ? c6.v : c6.w, u4 = h === c6.v ? c6.w : c6.v;
        t({ v: h, w: u4 }) < 0 && (i = true);
      }
      if (i) return m(s2, e, t, n);
    }
    return E(s2, e, t, n);
  }

  // lib/graphlib.ts
  var graphlib_default = graphlib_esm_exports;

  // lib/intersect/intersect-ellipse.ts
  function intersectEllipse(node, rx, ry, point6) {
    const cx = node.x;
    const cy = node.y;
    const px = cx - point6.x;
    const py = cy - point6.y;
    const det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    let dx = Math.abs(rx * ry * px / det);
    if (point6.x < cx) {
      dx = -dx;
    }
    let dy = Math.abs(rx * ry * py / det);
    if (point6.y < cy) {
      dy = -dy;
    }
    return { x: cx + dx, y: cy + dy };
  }

  // lib/intersect/intersect-circle.ts
  function intersectCircle(node, rx, point6) {
    return intersectEllipse(node, rx, rx, point6);
  }

  // lib/intersect/intersect-node.ts
  function intersectNode(node, point6) {
    return node.intersect(point6);
  }

  // lib/intersect/intersect-line.ts
  function intersectLine(p1, p22, q1, q22) {
    let num;
    const a1 = p22.y - p1.y;
    const b12 = p1.x - p22.x;
    const c1 = p22.x * p1.y - p1.x * p22.y;
    const r3 = a1 * q1.x + b12 * q1.y + c1;
    const r4 = a1 * q22.x + b12 * q22.y + c1;
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
      return;
    }
    const a22 = q22.y - q1.y;
    const b22 = q1.x - q22.x;
    const c22 = q22.x * q1.y - q1.x * q22.y;
    const r1 = a22 * p1.x + b22 * p1.y + c22;
    const r2 = a22 * p22.x + b22 * p22.y + c22;
    if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
      return;
    }
    const denom = a1 * b22 - a22 * b12;
    if (denom === 0) {
      return;
    }
    const offset = Math.abs(denom / 2);
    num = b12 * c22 - b22 * c1;
    const x6 = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a22 * c1 - a1 * c22;
    const y5 = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return { x: x6, y: y5 };
  }
  function sameSign(r1, r2) {
    return r1 * r2 > 0;
  }

  // lib/intersect/intersect-polygon.ts
  function intersectPolygon(node, polyPoints, point6) {
    const x12 = node.x;
    const y12 = node.y;
    const intersections = [];
    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    polyPoints.forEach((entry) => {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
    const left2 = x12 - node.width / 2 - minX;
    const top2 = y12 - node.height / 2 - minY;
    for (let i = 0; i < polyPoints.length; i++) {
      const p1 = polyPoints[i];
      const p22 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
      const intersect3 = intersectLine(
        node,
        point6,
        { x: left2 + p1.x, y: top2 + p1.y },
        { x: left2 + p22.x, y: top2 + p22.y }
      );
      if (intersect3) {
        intersections.push(intersect3);
      }
    }
    if (!intersections.length) {
      console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", node);
      return node;
    }
    if (intersections.length > 1) {
      intersections.sort((p3, q3) => {
        const pdx = p3.x - point6.x;
        const pdy = p3.y - point6.y;
        const distp = Math.sqrt(pdx * pdx + pdy * pdy);
        const qdx = q3.x - point6.x;
        const qdy = q3.y - point6.y;
        const distq = Math.sqrt(qdx * qdx + qdy * qdy);
        return distp < distq ? -1 : distp === distq ? 0 : 1;
      });
    }
    return intersections[0];
  }

  // lib/intersect/intersect-rect.ts
  function intersectRect(node, point6) {
    const x6 = node.x;
    const y5 = node.y;
    const dx = point6.x - x6;
    const dy = point6.y - y5;
    let w3 = node.width / 2;
    let h = node.height / 2;
    let sx;
    let sy;
    if (Math.abs(dy) * w3 > Math.abs(dx) * h) {
      if (dy < 0) {
        h = -h;
      }
      sx = dy === 0 ? 0 : h * dx / dy;
      sy = h;
    } else {
      if (dx < 0) {
        w3 = -w3;
      }
      sx = w3;
      sy = dx === 0 ? 0 : w3 * dy / dx;
    }
    return { x: x6 + sx, y: y5 + sy };
  }

  // lib/intersect/index.ts
  var intersect = {
    node: intersectNode,
    circle: intersectCircle,
    ellipse: intersectEllipse,
    polygon: intersectPolygon,
    rect: intersectRect
  };
  var intersect_default = intersect;

  // lib/util.ts
  var util_exports = {};
  __export(util_exports, {
    applyClass: () => applyClass,
    applyStyle: () => applyStyle,
    applyTransition: () => applyTransition,
    default: () => util_default,
    edgeToId: () => edgeToId,
    hasOwn: () => hasOwn,
    isSubgraph: () => isSubgraph
  });

  // lib/lodash.ts
  var import_defaults = __toESM(require_defaults());
  var import_each = __toESM(require_each());
  var import_has = __toESM(require_has());
  var import_isFunction = __toESM(require_isFunction());
  var import_isPlainObject = __toESM(require_isPlainObject());
  var import_pick = __toESM(require_pick());
  var import_range = __toESM(require_range());
  var import_uniqueId = __toESM(require_uniqueId());
  var lodash = {
    defaults: import_defaults.default,
    each: import_each.default,
    has: import_has.default,
    isFunction: import_isFunction.default,
    isPlainObject: import_isPlainObject.default,
    pick: import_pick.default,
    range: import_range.default,
    uniqueId: import_uniqueId.default
  };
  var lodash_default = lodash;

  // lib/util.ts
  function isSubgraph(g, v4) {
    return !!g.children(v4).length;
  }
  function edgeToId(e) {
    return escapeId(e.v) + ":" + escapeId(e.w) + ":" + escapeId(e.name);
  }
  function hasOwn(object2, property) {
    return Object.prototype.hasOwnProperty.call(object2, property);
  }
  var ID_DELIM = /:/g;
  function escapeId(str) {
    return str ? String(str).replace(ID_DELIM, "\\:") : "";
  }
  function applyStyle(dom, styleFn) {
    if (styleFn) {
      dom.attr("style", styleFn);
    }
  }
  function applyClass(dom, classFn, otherClasses) {
    if (classFn) {
      dom.attr("class", classFn).attr("class", otherClasses + " " + dom.attr("class"));
    }
  }
  function applyTransition(selection2, g) {
    const graph = g.graph();
    if (lodash_default.isPlainObject(graph)) {
      const transition2 = graph.transition;
      if (lodash_default.isFunction(transition2)) {
        return transition2(selection2);
      }
    }
    return selection2;
  }
  var util_default = {
    isSubgraph,
    edgeToId,
    applyStyle,
    applyClass,
    applyTransition,
    hasOwn
  };

  // lib/arrows.ts
  var normal = (parent, id2, edge, type2) => {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path2 = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    applyStyle(path2, edge[type2 + "Style"]);
    if (edge[type2 + "Class"]) {
      path2.attr("class", edge[type2 + "Class"]);
    }
  };
  var vee = (parent, id2, edge, type2) => {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path2 = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    applyStyle(path2, edge[type2 + "Style"]);
    if (edge[type2 + "Class"]) {
      path2.attr("class", edge[type2 + "Class"]);
    }
  };
  var undirected = (parent, id2, edge, type2) => {
    const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    const path2 = marker.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    applyStyle(path2, edge[type2 + "Style"]);
    if (edge[type2 + "Class"]) {
      path2.attr("class", edge[type2 + "Class"]);
    }
  };
  var arrows = {
    "default": normal,
    "normal": normal,
    "vee": vee,
    "undirected": undirected
  };
  var arrows_default = arrows;

  // node_modules/d3/src/index.js
  var src_exports = {};
  __export(src_exports, {
    Adder: () => Adder,
    Delaunay: () => Delaunay,
    FormatSpecifier: () => FormatSpecifier,
    InternMap: () => InternMap,
    InternSet: () => InternSet,
    Node: () => Node,
    Path: () => Path,
    Voronoi: () => Voronoi,
    ZoomTransform: () => Transform,
    active: () => active_default,
    arc: () => arc_default,
    area: () => area_default5,
    areaRadial: () => areaRadial_default,
    ascending: () => ascending,
    autoType: () => autoType,
    axisBottom: () => axisBottom,
    axisLeft: () => axisLeft,
    axisRight: () => axisRight,
    axisTop: () => axisTop,
    bin: () => bin,
    bisect: () => bisect_default,
    bisectCenter: () => bisectCenter,
    bisectLeft: () => bisectLeft,
    bisectRight: () => bisectRight,
    bisector: () => bisector,
    blob: () => blob_default,
    blur: () => blur,
    blur2: () => blur2,
    blurImage: () => blurImage,
    brush: () => brush_default,
    brushSelection: () => brushSelection,
    brushX: () => brushX,
    brushY: () => brushY,
    buffer: () => buffer_default,
    chord: () => chord_default,
    chordDirected: () => chordDirected,
    chordTranspose: () => chordTranspose,
    cluster: () => cluster_default,
    color: () => color,
    contourDensity: () => density_default,
    contours: () => contours_default,
    count: () => count,
    create: () => create_default,
    creator: () => creator_default,
    cross: () => cross,
    csv: () => csv2,
    csvFormat: () => csvFormat,
    csvFormatBody: () => csvFormatBody,
    csvFormatRow: () => csvFormatRow,
    csvFormatRows: () => csvFormatRows,
    csvFormatValue: () => csvFormatValue,
    csvParse: () => csvParse,
    csvParseRows: () => csvParseRows,
    cubehelix: () => cubehelix,
    cumsum: () => cumsum,
    curveBasis: () => basis_default2,
    curveBasisClosed: () => basisClosed_default2,
    curveBasisOpen: () => basisOpen_default,
    curveBumpX: () => bumpX,
    curveBumpY: () => bumpY,
    curveBundle: () => bundle_default,
    curveCardinal: () => cardinal_default,
    curveCardinalClosed: () => cardinalClosed_default,
    curveCardinalOpen: () => cardinalOpen_default,
    curveCatmullRom: () => catmullRom_default,
    curveCatmullRomClosed: () => catmullRomClosed_default,
    curveCatmullRomOpen: () => catmullRomOpen_default,
    curveLinear: () => linear_default,
    curveLinearClosed: () => linearClosed_default,
    curveMonotoneX: () => monotoneX,
    curveMonotoneY: () => monotoneY,
    curveNatural: () => natural_default,
    curveStep: () => step_default,
    curveStepAfter: () => stepAfter,
    curveStepBefore: () => stepBefore,
    descending: () => descending,
    deviation: () => deviation,
    difference: () => difference,
    disjoint: () => disjoint,
    dispatch: () => dispatch_default,
    drag: () => drag_default,
    dragDisable: () => nodrag_default,
    dragEnable: () => yesdrag,
    dsv: () => dsv,
    dsvFormat: () => dsv_default,
    easeBack: () => backInOut,
    easeBackIn: () => backIn,
    easeBackInOut: () => backInOut,
    easeBackOut: () => backOut,
    easeBounce: () => bounceOut,
    easeBounceIn: () => bounceIn,
    easeBounceInOut: () => bounceInOut,
    easeBounceOut: () => bounceOut,
    easeCircle: () => circleInOut,
    easeCircleIn: () => circleIn,
    easeCircleInOut: () => circleInOut,
    easeCircleOut: () => circleOut,
    easeCubic: () => cubicInOut,
    easeCubicIn: () => cubicIn,
    easeCubicInOut: () => cubicInOut,
    easeCubicOut: () => cubicOut,
    easeElastic: () => elasticOut,
    easeElasticIn: () => elasticIn,
    easeElasticInOut: () => elasticInOut,
    easeElasticOut: () => elasticOut,
    easeExp: () => expInOut,
    easeExpIn: () => expIn,
    easeExpInOut: () => expInOut,
    easeExpOut: () => expOut,
    easeLinear: () => linear2,
    easePoly: () => polyInOut,
    easePolyIn: () => polyIn,
    easePolyInOut: () => polyInOut,
    easePolyOut: () => polyOut,
    easeQuad: () => quadInOut,
    easeQuadIn: () => quadIn,
    easeQuadInOut: () => quadInOut,
    easeQuadOut: () => quadOut,
    easeSin: () => sinInOut,
    easeSinIn: () => sinIn,
    easeSinInOut: () => sinInOut,
    easeSinOut: () => sinOut,
    every: () => every,
    extent: () => extent,
    fcumsum: () => fcumsum,
    filter: () => filter,
    flatGroup: () => flatGroup,
    flatRollup: () => flatRollup,
    forceCenter: () => center_default,
    forceCollide: () => collide_default,
    forceLink: () => link_default,
    forceManyBody: () => manyBody_default,
    forceRadial: () => radial_default,
    forceSimulation: () => simulation_default,
    forceX: () => x_default2,
    forceY: () => y_default2,
    format: () => format,
    formatDefaultLocale: () => defaultLocale,
    formatLocale: () => locale_default,
    formatPrefix: () => formatPrefix,
    formatSpecifier: () => formatSpecifier,
    fsum: () => fsum,
    geoAlbers: () => albers_default,
    geoAlbersUsa: () => albersUsa_default,
    geoArea: () => area_default2,
    geoAzimuthalEqualArea: () => azimuthalEqualArea_default,
    geoAzimuthalEqualAreaRaw: () => azimuthalEqualAreaRaw,
    geoAzimuthalEquidistant: () => azimuthalEquidistant_default,
    geoAzimuthalEquidistantRaw: () => azimuthalEquidistantRaw,
    geoBounds: () => bounds_default,
    geoCentroid: () => centroid_default,
    geoCircle: () => circle_default,
    geoClipAntimeridian: () => antimeridian_default,
    geoClipCircle: () => circle_default2,
    geoClipExtent: () => extent_default2,
    geoClipRectangle: () => clipRectangle,
    geoConicConformal: () => conicConformal_default,
    geoConicConformalRaw: () => conicConformalRaw,
    geoConicEqualArea: () => conicEqualArea_default,
    geoConicEqualAreaRaw: () => conicEqualAreaRaw,
    geoConicEquidistant: () => conicEquidistant_default,
    geoConicEquidistantRaw: () => conicEquidistantRaw,
    geoContains: () => contains_default2,
    geoDistance: () => distance_default,
    geoEqualEarth: () => equalEarth_default,
    geoEqualEarthRaw: () => equalEarthRaw,
    geoEquirectangular: () => equirectangular_default,
    geoEquirectangularRaw: () => equirectangularRaw,
    geoGnomonic: () => gnomonic_default,
    geoGnomonicRaw: () => gnomonicRaw,
    geoGraticule: () => graticule,
    geoGraticule10: () => graticule10,
    geoIdentity: () => identity_default4,
    geoInterpolate: () => interpolate_default2,
    geoLength: () => length_default,
    geoMercator: () => mercator_default,
    geoMercatorRaw: () => mercatorRaw,
    geoNaturalEarth1: () => naturalEarth1_default,
    geoNaturalEarth1Raw: () => naturalEarth1Raw,
    geoOrthographic: () => orthographic_default,
    geoOrthographicRaw: () => orthographicRaw,
    geoPath: () => path_default,
    geoProjection: () => projection,
    geoProjectionMutator: () => projectionMutator,
    geoRotation: () => rotation_default,
    geoStereographic: () => stereographic_default,
    geoStereographicRaw: () => stereographicRaw,
    geoStream: () => stream_default,
    geoTransform: () => transform_default,
    geoTransverseMercator: () => transverseMercator_default,
    geoTransverseMercatorRaw: () => transverseMercatorRaw,
    gray: () => gray,
    greatest: () => greatest,
    greatestIndex: () => greatestIndex,
    group: () => group,
    groupSort: () => groupSort,
    groups: () => groups,
    hcl: () => hcl,
    hierarchy: () => hierarchy,
    histogram: () => bin,
    hsl: () => hsl,
    html: () => html,
    image: () => image_default,
    index: () => index,
    indexes: () => indexes,
    interpolate: () => value_default,
    interpolateArray: () => array_default,
    interpolateBasis: () => basis_default,
    interpolateBasisClosed: () => basisClosed_default,
    interpolateBlues: () => Blues_default,
    interpolateBrBG: () => BrBG_default,
    interpolateBuGn: () => BuGn_default,
    interpolateBuPu: () => BuPu_default,
    interpolateCividis: () => cividis_default,
    interpolateCool: () => cool,
    interpolateCubehelix: () => cubehelix_default,
    interpolateCubehelixDefault: () => cubehelix_default2,
    interpolateCubehelixLong: () => cubehelixLong,
    interpolateDate: () => date_default,
    interpolateDiscrete: () => discrete_default,
    interpolateGnBu: () => GnBu_default,
    interpolateGreens: () => Greens_default,
    interpolateGreys: () => Greys_default,
    interpolateHcl: () => hcl_default,
    interpolateHclLong: () => hclLong,
    interpolateHsl: () => hsl_default,
    interpolateHslLong: () => hslLong,
    interpolateHue: () => hue_default,
    interpolateInferno: () => inferno,
    interpolateLab: () => lab2,
    interpolateMagma: () => magma,
    interpolateNumber: () => number_default,
    interpolateNumberArray: () => numberArray_default,
    interpolateObject: () => object_default,
    interpolateOrRd: () => OrRd_default,
    interpolateOranges: () => Oranges_default,
    interpolatePRGn: () => PRGn_default,
    interpolatePiYG: () => PiYG_default,
    interpolatePlasma: () => plasma,
    interpolatePuBu: () => PuBu_default,
    interpolatePuBuGn: () => PuBuGn_default,
    interpolatePuOr: () => PuOr_default,
    interpolatePuRd: () => PuRd_default,
    interpolatePurples: () => Purples_default,
    interpolateRainbow: () => rainbow_default,
    interpolateRdBu: () => RdBu_default,
    interpolateRdGy: () => RdGy_default,
    interpolateRdPu: () => RdPu_default,
    interpolateRdYlBu: () => RdYlBu_default,
    interpolateRdYlGn: () => RdYlGn_default,
    interpolateReds: () => Reds_default,
    interpolateRgb: () => rgb_default,
    interpolateRgbBasis: () => rgbBasis,
    interpolateRgbBasisClosed: () => rgbBasisClosed,
    interpolateRound: () => round_default,
    interpolateSinebow: () => sinebow_default,
    interpolateSpectral: () => Spectral_default,
    interpolateString: () => string_default,
    interpolateTransformCss: () => interpolateTransformCss,
    interpolateTransformSvg: () => interpolateTransformSvg,
    interpolateTurbo: () => turbo_default,
    interpolateViridis: () => viridis_default,
    interpolateWarm: () => warm,
    interpolateYlGn: () => YlGn_default,
    interpolateYlGnBu: () => YlGnBu_default,
    interpolateYlOrBr: () => YlOrBr_default,
    interpolateYlOrRd: () => YlOrRd_default,
    interpolateZoom: () => zoom_default,
    interrupt: () => interrupt_default,
    intersection: () => intersection,
    interval: () => interval_default,
    isoFormat: () => isoFormat_default,
    isoParse: () => isoParse_default,
    json: () => json_default,
    lab: () => lab,
    lch: () => lch,
    least: () => least,
    leastIndex: () => leastIndex,
    line: () => line_default2,
    lineRadial: () => lineRadial_default,
    link: () => link2,
    linkHorizontal: () => linkHorizontal,
    linkRadial: () => linkRadial,
    linkVertical: () => linkVertical,
    local: () => local,
    map: () => map2,
    matcher: () => matcher_default,
    max: () => max,
    maxIndex: () => maxIndex,
    mean: () => mean,
    median: () => median,
    medianIndex: () => medianIndex,
    merge: () => merge,
    min: () => min,
    minIndex: () => minIndex,
    mode: () => mode,
    namespace: () => namespace_default,
    namespaces: () => namespaces_default,
    nice: () => nice,
    now: () => now,
    pack: () => pack_default,
    packEnclose: () => enclose_default,
    packSiblings: () => siblings_default,
    pairs: () => pairs,
    partition: () => partition_default,
    path: () => path,
    pathRound: () => pathRound,
    permute: () => permute,
    pie: () => pie_default,
    piecewise: () => piecewise,
    pointRadial: () => pointRadial_default,
    pointer: () => pointer_default,
    pointers: () => pointers_default,
    polygonArea: () => area_default4,
    polygonCentroid: () => centroid_default3,
    polygonContains: () => contains_default3,
    polygonHull: () => hull_default,
    polygonLength: () => length_default2,
    precisionFixed: () => precisionFixed_default,
    precisionPrefix: () => precisionPrefix_default,
    precisionRound: () => precisionRound_default,
    quadtree: () => quadtree,
    quantile: () => quantile,
    quantileIndex: () => quantileIndex,
    quantileSorted: () => quantileSorted,
    quantize: () => quantize_default,
    quickselect: () => quickselect,
    radialArea: () => areaRadial_default,
    radialLine: () => lineRadial_default,
    randomBates: () => bates_default,
    randomBernoulli: () => bernoulli_default,
    randomBeta: () => beta_default,
    randomBinomial: () => binomial_default,
    randomCauchy: () => cauchy_default,
    randomExponential: () => exponential_default,
    randomGamma: () => gamma_default,
    randomGeometric: () => geometric_default,
    randomInt: () => int_default,
    randomIrwinHall: () => irwinHall_default,
    randomLcg: () => lcg,
    randomLogNormal: () => logNormal_default,
    randomLogistic: () => logistic_default,
    randomNormal: () => normal_default,
    randomPareto: () => pareto_default,
    randomPoisson: () => poisson_default,
    randomUniform: () => uniform_default,
    randomWeibull: () => weibull_default,
    range: () => range2,
    rank: () => rank,
    reduce: () => reduce,
    reverse: () => reverse,
    rgb: () => rgb,
    ribbon: () => ribbon_default,
    ribbonArrow: () => ribbonArrow,
    rollup: () => rollup,
    rollups: () => rollups,
    scaleBand: () => band,
    scaleDiverging: () => diverging,
    scaleDivergingLog: () => divergingLog,
    scaleDivergingPow: () => divergingPow,
    scaleDivergingSqrt: () => divergingSqrt,
    scaleDivergingSymlog: () => divergingSymlog,
    scaleIdentity: () => identity4,
    scaleImplicit: () => implicit,
    scaleLinear: () => linear3,
    scaleLog: () => log2,
    scaleOrdinal: () => ordinal,
    scalePoint: () => point,
    scalePow: () => pow3,
    scaleQuantile: () => quantile2,
    scaleQuantize: () => quantize,
    scaleRadial: () => radial,
    scaleSequential: () => sequential,
    scaleSequentialLog: () => sequentialLog,
    scaleSequentialPow: () => sequentialPow,
    scaleSequentialQuantile: () => sequentialQuantile,
    scaleSequentialSqrt: () => sequentialSqrt,
    scaleSequentialSymlog: () => sequentialSymlog,
    scaleSqrt: () => sqrt2,
    scaleSymlog: () => symlog,
    scaleThreshold: () => threshold,
    scaleTime: () => time,
    scaleUtc: () => utcTime,
    scan: () => scan,
    schemeAccent: () => Accent_default,
    schemeBlues: () => scheme22,
    schemeBrBG: () => scheme,
    schemeBuGn: () => scheme10,
    schemeBuPu: () => scheme11,
    schemeCategory10: () => category10_default,
    schemeDark2: () => Dark2_default,
    schemeGnBu: () => scheme12,
    schemeGreens: () => scheme23,
    schemeGreys: () => scheme24,
    schemeObservable10: () => observable10_default,
    schemeOrRd: () => scheme13,
    schemeOranges: () => scheme27,
    schemePRGn: () => scheme2,
    schemePaired: () => Paired_default,
    schemePastel1: () => Pastel1_default,
    schemePastel2: () => Pastel2_default,
    schemePiYG: () => scheme3,
    schemePuBu: () => scheme15,
    schemePuBuGn: () => scheme14,
    schemePuOr: () => scheme4,
    schemePuRd: () => scheme16,
    schemePurples: () => scheme25,
    schemeRdBu: () => scheme5,
    schemeRdGy: () => scheme6,
    schemeRdPu: () => scheme17,
    schemeRdYlBu: () => scheme7,
    schemeRdYlGn: () => scheme8,
    schemeReds: () => scheme26,
    schemeSet1: () => Set1_default,
    schemeSet2: () => Set2_default,
    schemeSet3: () => Set3_default,
    schemeSpectral: () => scheme9,
    schemeTableau10: () => Tableau10_default,
    schemeYlGn: () => scheme19,
    schemeYlGnBu: () => scheme18,
    schemeYlOrBr: () => scheme20,
    schemeYlOrRd: () => scheme21,
    select: () => select_default2,
    selectAll: () => selectAll_default2,
    selection: () => selection_default,
    selector: () => selector_default,
    selectorAll: () => selectorAll_default,
    shuffle: () => shuffle_default,
    shuffler: () => shuffler,
    some: () => some,
    sort: () => sort,
    stack: () => stack_default,
    stackOffsetDiverging: () => diverging_default,
    stackOffsetExpand: () => expand_default,
    stackOffsetNone: () => none_default,
    stackOffsetSilhouette: () => silhouette_default,
    stackOffsetWiggle: () => wiggle_default,
    stackOrderAppearance: () => appearance_default,
    stackOrderAscending: () => ascending_default2,
    stackOrderDescending: () => descending_default2,
    stackOrderInsideOut: () => insideOut_default,
    stackOrderNone: () => none_default2,
    stackOrderReverse: () => reverse_default,
    stratify: () => stratify_default,
    style: () => styleValue,
    subset: () => subset,
    sum: () => sum,
    superset: () => superset,
    svg: () => svg,
    symbol: () => Symbol2,
    symbolAsterisk: () => asterisk_default,
    symbolCircle: () => circle_default3,
    symbolCross: () => cross_default2,
    symbolDiamond: () => diamond_default,
    symbolDiamond2: () => diamond2_default,
    symbolPlus: () => plus_default,
    symbolSquare: () => square_default,
    symbolSquare2: () => square2_default,
    symbolStar: () => star_default,
    symbolTimes: () => times_default,
    symbolTriangle: () => triangle_default,
    symbolTriangle2: () => triangle2_default,
    symbolWye: () => wye_default,
    symbolX: () => times_default,
    symbols: () => symbolsFill,
    symbolsFill: () => symbolsFill,
    symbolsStroke: () => symbolsStroke,
    text: () => text_default3,
    thresholdFreedmanDiaconis: () => thresholdFreedmanDiaconis,
    thresholdScott: () => thresholdScott,
    thresholdSturges: () => thresholdSturges,
    tickFormat: () => tickFormat,
    tickIncrement: () => tickIncrement,
    tickStep: () => tickStep,
    ticks: () => ticks,
    timeDay: () => timeDay,
    timeDays: () => timeDays,
    timeFormat: () => timeFormat,
    timeFormatDefaultLocale: () => defaultLocale2,
    timeFormatLocale: () => formatLocale,
    timeFriday: () => timeFriday,
    timeFridays: () => timeFridays,
    timeHour: () => timeHour,
    timeHours: () => timeHours,
    timeInterval: () => timeInterval,
    timeMillisecond: () => millisecond,
    timeMilliseconds: () => milliseconds,
    timeMinute: () => timeMinute,
    timeMinutes: () => timeMinutes,
    timeMonday: () => timeMonday,
    timeMondays: () => timeMondays,
    timeMonth: () => timeMonth,
    timeMonths: () => timeMonths,
    timeParse: () => timeParse,
    timeSaturday: () => timeSaturday,
    timeSaturdays: () => timeSaturdays,
    timeSecond: () => second,
    timeSeconds: () => seconds,
    timeSunday: () => timeSunday,
    timeSundays: () => timeSundays,
    timeThursday: () => timeThursday,
    timeThursdays: () => timeThursdays,
    timeTickInterval: () => timeTickInterval,
    timeTicks: () => timeTicks,
    timeTuesday: () => timeTuesday,
    timeTuesdays: () => timeTuesdays,
    timeWednesday: () => timeWednesday,
    timeWednesdays: () => timeWednesdays,
    timeWeek: () => timeSunday,
    timeWeeks: () => timeSundays,
    timeYear: () => timeYear,
    timeYears: () => timeYears,
    timeout: () => timeout_default,
    timer: () => timer,
    timerFlush: () => timerFlush,
    transition: () => transition,
    transpose: () => transpose,
    tree: () => tree_default,
    treemap: () => treemap_default,
    treemapBinary: () => binary_default,
    treemapDice: () => dice_default,
    treemapResquarify: () => resquarify_default,
    treemapSlice: () => slice_default,
    treemapSliceDice: () => sliceDice_default,
    treemapSquarify: () => squarify_default,
    tsv: () => tsv2,
    tsvFormat: () => tsvFormat,
    tsvFormatBody: () => tsvFormatBody,
    tsvFormatRow: () => tsvFormatRow,
    tsvFormatRows: () => tsvFormatRows,
    tsvFormatValue: () => tsvFormatValue,
    tsvParse: () => tsvParse,
    tsvParseRows: () => tsvParseRows,
    union: () => union,
    unixDay: () => unixDay,
    unixDays: () => unixDays,
    utcDay: () => utcDay,
    utcDays: () => utcDays,
    utcFormat: () => utcFormat,
    utcFriday: () => utcFriday,
    utcFridays: () => utcFridays,
    utcHour: () => utcHour,
    utcHours: () => utcHours,
    utcMillisecond: () => millisecond,
    utcMilliseconds: () => milliseconds,
    utcMinute: () => utcMinute,
    utcMinutes: () => utcMinutes,
    utcMonday: () => utcMonday,
    utcMondays: () => utcMondays,
    utcMonth: () => utcMonth,
    utcMonths: () => utcMonths,
    utcParse: () => utcParse,
    utcSaturday: () => utcSaturday,
    utcSaturdays: () => utcSaturdays,
    utcSecond: () => second,
    utcSeconds: () => seconds,
    utcSunday: () => utcSunday,
    utcSundays: () => utcSundays,
    utcThursday: () => utcThursday,
    utcThursdays: () => utcThursdays,
    utcTickInterval: () => utcTickInterval,
    utcTicks: () => utcTicks,
    utcTuesday: () => utcTuesday,
    utcTuesdays: () => utcTuesdays,
    utcWednesday: () => utcWednesday,
    utcWednesdays: () => utcWednesdays,
    utcWeek: () => utcSunday,
    utcWeeks: () => utcSundays,
    utcYear: () => utcYear,
    utcYears: () => utcYears,
    variance: () => variance,
    window: () => window_default,
    xml: () => xml_default,
    zip: () => zip,
    zoom: () => zoom_default2,
    zoomIdentity: () => identity5,
    zoomTransform: () => transform
  });

  // node_modules/d3-array/src/ascending.js
  function ascending(a4, b10) {
    return a4 == null || b10 == null ? NaN : a4 < b10 ? -1 : a4 > b10 ? 1 : a4 >= b10 ? 0 : NaN;
  }

  // node_modules/d3-array/src/descending.js
  function descending(a4, b10) {
    return a4 == null || b10 == null ? NaN : b10 < a4 ? -1 : b10 > a4 ? 1 : b10 >= a4 ? 0 : NaN;
  }

  // node_modules/d3-array/src/bisector.js
  function bisector(f) {
    let compare1, compare2, delta;
    if (f.length !== 2) {
      compare1 = ascending;
      compare2 = (d, x6) => ascending(f(d), x6);
      delta = (d, x6) => f(d) - x6;
    } else {
      compare1 = f === ascending || f === descending ? f : zero;
      compare2 = f;
      delta = f;
    }
    function left2(a4, x6, lo = 0, hi = a4.length) {
      if (lo < hi) {
        if (compare1(x6, x6) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a4[mid], x6) < 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right2(a4, x6, lo = 0, hi = a4.length) {
      if (lo < hi) {
        if (compare1(x6, x6) !== 0) return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a4[mid], x6) <= 0) lo = mid + 1;
          else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center2(a4, x6, lo = 0, hi = a4.length) {
      const i = left2(a4, x6, lo, hi - 1);
      return i > lo && delta(a4[i - 1], x6) > -delta(a4[i], x6) ? i - 1 : i;
    }
    return { left: left2, center: center2, right: right2 };
  }
  function zero() {
    return 0;
  }

  // node_modules/d3-array/src/number.js
  function number(x6) {
    return x6 === null ? NaN : +x6;
  }
  function* numbers(values, valueof) {
    if (valueof === void 0) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          yield value;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
          yield value;
        }
      }
    }
  }

  // node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // node_modules/d3-array/src/blur.js
  function blur(values, r) {
    if (!((r = +r) >= 0)) throw new RangeError("invalid r");
    let length3 = values.length;
    if (!((length3 = Math.floor(length3)) >= 0)) throw new RangeError("invalid length");
    if (!length3 || !r) return values;
    const blur3 = blurf(r);
    const temp = values.slice();
    blur3(values, temp, 0, length3, 1);
    blur3(temp, values, 0, length3, 1);
    blur3(values, temp, 0, length3, 1);
    return values;
  }
  var blur2 = Blur2(blurf);
  var blurImage = Blur2(blurfImage);
  function Blur2(blur3) {
    return function(data, rx, ry = rx) {
      if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
      if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
      let { data: values, width, height } = data;
      if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
      if (!((height = Math.floor(height !== void 0 ? height : values.length / width)) >= 0)) throw new RangeError("invalid height");
      if (!width || !height || !rx && !ry) return data;
      const blurx = rx && blur3(rx);
      const blury = ry && blur3(ry);
      const temp = values.slice();
      if (blurx && blury) {
        blurh(blurx, temp, values, width, height);
        blurh(blurx, values, temp, width, height);
        blurh(blurx, temp, values, width, height);
        blurv(blury, values, temp, width, height);
        blurv(blury, temp, values, width, height);
        blurv(blury, values, temp, width, height);
      } else if (blurx) {
        blurh(blurx, values, temp, width, height);
        blurh(blurx, temp, values, width, height);
        blurh(blurx, values, temp, width, height);
      } else if (blury) {
        blurv(blury, values, temp, width, height);
        blurv(blury, temp, values, width, height);
        blurv(blury, values, temp, width, height);
      }
      return data;
    };
  }
  function blurh(blur3, T3, S3, w3, h) {
    for (let y5 = 0, n = w3 * h; y5 < n; ) {
      blur3(T3, S3, y5, y5 += w3, 1);
    }
  }
  function blurv(blur3, T3, S3, w3, h) {
    for (let x6 = 0, n = w3 * h; x6 < w3; ++x6) {
      blur3(T3, S3, x6, x6 + n, w3);
    }
  }
  function blurfImage(radius) {
    const blur3 = blurf(radius);
    return (T3, S3, start2, stop, step) => {
      start2 <<= 2, stop <<= 2, step <<= 2;
      blur3(T3, S3, start2 + 0, stop + 0, step);
      blur3(T3, S3, start2 + 1, stop + 1, step);
      blur3(T3, S3, start2 + 2, stop + 2, step);
      blur3(T3, S3, start2 + 3, stop + 3, step);
    };
  }
  function blurf(radius) {
    const radius0 = Math.floor(radius);
    if (radius0 === radius) return bluri(radius);
    const t = radius - radius0;
    const w3 = 2 * radius + 1;
    return (T3, S3, start2, stop, step) => {
      if (!((stop -= step) >= start2)) return;
      let sum4 = radius0 * S3[start2];
      const s0 = step * radius0;
      const s1 = s0 + step;
      for (let i = start2, j3 = start2 + s0; i < j3; i += step) {
        sum4 += S3[Math.min(stop, i)];
      }
      for (let i = start2, j3 = stop; i <= j3; i += step) {
        sum4 += S3[Math.min(stop, i + s0)];
        T3[i] = (sum4 + t * (S3[Math.max(start2, i - s1)] + S3[Math.min(stop, i + s1)])) / w3;
        sum4 -= S3[Math.max(start2, i - s0)];
      }
    };
  }
  function bluri(radius) {
    const w3 = 2 * radius + 1;
    return (T3, S3, start2, stop, step) => {
      if (!((stop -= step) >= start2)) return;
      let sum4 = radius * S3[start2];
      const s2 = step * radius;
      for (let i = start2, j3 = start2 + s2; i < j3; i += step) {
        sum4 += S3[Math.min(stop, i)];
      }
      for (let i = start2, j3 = stop; i <= j3; i += step) {
        sum4 += S3[Math.min(stop, i + s2)];
        T3[i] = sum4 / w3;
        sum4 -= S3[Math.max(start2, i - s2)];
      }
    };
  }

  // node_modules/d3-array/src/count.js
  function count(values, valueof) {
    let count3 = 0;
    if (valueof === void 0) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          ++count3;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
          ++count3;
        }
      }
    }
    return count3;
  }

  // node_modules/d3-array/src/cross.js
  function length(array4) {
    return array4.length | 0;
  }
  function empty(length3) {
    return !(length3 > 0);
  }
  function arrayify(values) {
    return typeof values !== "object" || "length" in values ? values : Array.from(values);
  }
  function reducer(reduce2) {
    return (values) => reduce2(...values);
  }
  function cross(...values) {
    const reduce2 = typeof values[values.length - 1] === "function" && reducer(values.pop());
    values = values.map(arrayify);
    const lengths = values.map(length);
    const j3 = values.length - 1;
    const index3 = new Array(j3 + 1).fill(0);
    const product = [];
    if (j3 < 0 || lengths.some(empty)) return product;
    while (true) {
      product.push(index3.map((j4, i2) => values[i2][j4]));
      let i = j3;
      while (++index3[i] === lengths[i]) {
        if (i === 0) return reduce2 ? product.map(reduce2) : product;
        index3[i--] = 0;
      }
    }
  }

  // node_modules/d3-array/src/cumsum.js
  function cumsum(values, valueof) {
    var sum4 = 0, index3 = 0;
    return Float64Array.from(values, valueof === void 0 ? (v4) => sum4 += +v4 || 0 : (v4) => sum4 += +valueof(v4, index3++, values) || 0);
  }

  // node_modules/d3-array/src/variance.js
  function variance(values, valueof) {
    let count3 = 0;
    let delta;
    let mean2 = 0;
    let sum4 = 0;
    if (valueof === void 0) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          delta = value - mean2;
          mean2 += delta / ++count3;
          sum4 += delta * (value - mean2);
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
          delta = value - mean2;
          mean2 += delta / ++count3;
          sum4 += delta * (value - mean2);
        }
      }
    }
    if (count3 > 1) return sum4 / (count3 - 1);
  }

  // node_modules/d3-array/src/deviation.js
  function deviation(values, valueof) {
    const v4 = variance(values, valueof);
    return v4 ? Math.sqrt(v4) : v4;
  }

  // node_modules/d3-array/src/extent.js
  function extent(values, valueof) {
    let min4;
    let max5;
    if (valueof === void 0) {
      for (const value of values) {
        if (value != null) {
          if (min4 === void 0) {
            if (value >= value) min4 = max5 = value;
          } else {
            if (min4 > value) min4 = value;
            if (max5 < value) max5 = value;
          }
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null) {
          if (min4 === void 0) {
            if (value >= value) min4 = max5 = value;
          } else {
            if (min4 > value) min4 = value;
            if (max5 < value) max5 = value;
          }
        }
      }
    }
    return [min4, max5];
  }

  // node_modules/d3-array/src/fsum.js
  var Adder = class {
    constructor() {
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(x6) {
      const p3 = this._partials;
      let i = 0;
      for (let j3 = 0; j3 < this._n && j3 < 32; j3++) {
        const y5 = p3[j3], hi = x6 + y5, lo = Math.abs(x6) < Math.abs(y5) ? x6 - (hi - y5) : y5 - (hi - x6);
        if (lo) p3[i++] = lo;
        x6 = hi;
      }
      p3[i] = x6;
      this._n = i + 1;
      return this;
    }
    valueOf() {
      const p3 = this._partials;
      let n = this._n, x6, y5, lo, hi = 0;
      if (n > 0) {
        hi = p3[--n];
        while (n > 0) {
          x6 = hi;
          y5 = p3[--n];
          hi = x6 + y5;
          lo = y5 - (hi - x6);
          if (lo) break;
        }
        if (n > 0 && (lo < 0 && p3[n - 1] < 0 || lo > 0 && p3[n - 1] > 0)) {
          y5 = lo * 2;
          x6 = hi + y5;
          if (y5 == x6 - hi) hi = x6;
        }
      }
      return hi;
    }
  };
  function fsum(values, valueof) {
    const adder = new Adder();
    if (valueof === void 0) {
      for (let value of values) {
        if (value = +value) {
          adder.add(value);
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if (value = +valueof(value, ++index3, values)) {
          adder.add(value);
        }
      }
    }
    return +adder;
  }
  function fcumsum(values, valueof) {
    const adder = new Adder();
    let index3 = -1;
    return Float64Array.from(
      values,
      valueof === void 0 ? (v4) => adder.add(+v4 || 0) : (v4) => adder.add(+valueof(v4, ++index3, values) || 0)
    );
  }

  // node_modules/internmap/src/index.js
  var InternMap = class extends Map {
    constructor(entries, key = keyof) {
      super();
      Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
      if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
    }
    get(key) {
      return super.get(intern_get(this, key));
    }
    has(key) {
      return super.has(intern_get(this, key));
    }
    set(key, value) {
      return super.set(intern_set(this, key), value);
    }
    delete(key) {
      return super.delete(intern_delete(this, key));
    }
  };
  var InternSet = class extends Set {
    constructor(values, key = keyof) {
      super();
      Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
      if (values != null) for (const value of values) this.add(value);
    }
    has(value) {
      return super.has(intern_get(this, value));
    }
    add(value) {
      return super.add(intern_set(this, value));
    }
    delete(value) {
      return super.delete(intern_delete(this, value));
    }
  };
  function intern_get({ _intern, _key }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
  }
  function intern_set({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
  }
  function intern_delete({ _intern, _key }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
      value = _intern.get(key);
      _intern.delete(key);
    }
    return value;
  }
  function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  // node_modules/d3-array/src/identity.js
  function identity(x6) {
    return x6;
  }

  // node_modules/d3-array/src/group.js
  function group(values, ...keys) {
    return nest(values, identity, identity, keys);
  }
  function groups(values, ...keys) {
    return nest(values, Array.from, identity, keys);
  }
  function flatten(groups2, keys) {
    for (let i = 1, n = keys.length; i < n; ++i) {
      groups2 = groups2.flatMap((g) => g.pop().map(([key, value]) => [...g, key, value]));
    }
    return groups2;
  }
  function flatGroup(values, ...keys) {
    return flatten(groups(values, ...keys), keys);
  }
  function flatRollup(values, reduce2, ...keys) {
    return flatten(rollups(values, reduce2, ...keys), keys);
  }
  function rollup(values, reduce2, ...keys) {
    return nest(values, identity, reduce2, keys);
  }
  function rollups(values, reduce2, ...keys) {
    return nest(values, Array.from, reduce2, keys);
  }
  function index(values, ...keys) {
    return nest(values, identity, unique, keys);
  }
  function indexes(values, ...keys) {
    return nest(values, Array.from, unique, keys);
  }
  function unique(values) {
    if (values.length !== 1) throw new Error("duplicate key");
    return values[0];
  }
  function nest(values, map4, reduce2, keys) {
    return (function regroup(values2, i) {
      if (i >= keys.length) return reduce2(values2);
      const groups2 = new InternMap();
      const keyof2 = keys[i++];
      let index3 = -1;
      for (const value of values2) {
        const key = keyof2(value, ++index3, values2);
        const group2 = groups2.get(key);
        if (group2) group2.push(value);
        else groups2.set(key, [value]);
      }
      for (const [key, values3] of groups2) {
        groups2.set(key, regroup(values3, i));
      }
      return map4(groups2);
    })(values, 0);
  }

  // node_modules/d3-array/src/permute.js
  function permute(source, keys) {
    return Array.from(keys, (key) => source[key]);
  }

  // node_modules/d3-array/src/sort.js
  function sort(values, ...F3) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    values = Array.from(values);
    let [f] = F3;
    if (f && f.length !== 2 || F3.length > 1) {
      const index3 = Uint32Array.from(values, (d, i) => i);
      if (F3.length > 1) {
        F3 = F3.map((f2) => values.map(f2));
        index3.sort((i, j3) => {
          for (const f2 of F3) {
            const c6 = ascendingDefined(f2[i], f2[j3]);
            if (c6) return c6;
          }
        });
      } else {
        f = values.map(f);
        index3.sort((i, j3) => ascendingDefined(f[i], f[j3]));
      }
      return permute(values, index3);
    }
    return values.sort(compareDefined(f));
  }
  function compareDefined(compare = ascending) {
    if (compare === ascending) return ascendingDefined;
    if (typeof compare !== "function") throw new TypeError("compare is not a function");
    return (a4, b10) => {
      const x6 = compare(a4, b10);
      if (x6 || x6 === 0) return x6;
      return (compare(b10, b10) === 0) - (compare(a4, a4) === 0);
    };
  }
  function ascendingDefined(a4, b10) {
    return (a4 == null || !(a4 >= a4)) - (b10 == null || !(b10 >= b10)) || (a4 < b10 ? -1 : a4 > b10 ? 1 : 0);
  }

  // node_modules/d3-array/src/groupSort.js
  function groupSort(values, reduce2, key) {
    return (reduce2.length !== 2 ? sort(rollup(values, reduce2, key), (([ak, av], [bk, bv]) => ascending(av, bv) || ascending(ak, bk))) : sort(group(values, key), (([ak, av], [bk, bv]) => reduce2(av, bv) || ascending(ak, bk)))).map(([key2]) => key2);
  }

  // node_modules/d3-array/src/array.js
  var array = Array.prototype;
  var slice = array.slice;
  var map = array.map;

  // node_modules/d3-array/src/constant.js
  function constant(x6) {
    return () => x6;
  }

  // node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e2 = Math.sqrt(2);
  function tickSpec(start2, stop, count3) {
    const step = (stop - start2) / Math.max(0, count3), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc2;
    if (power < 0) {
      inc2 = Math.pow(10, -power) / factor;
      i1 = Math.round(start2 * inc2);
      i2 = Math.round(stop * inc2);
      if (i1 / inc2 < start2) ++i1;
      if (i2 / inc2 > stop) --i2;
      inc2 = -inc2;
    } else {
      inc2 = Math.pow(10, power) * factor;
      i1 = Math.round(start2 / inc2);
      i2 = Math.round(stop / inc2);
      if (i1 * inc2 < start2) ++i1;
      if (i2 * inc2 > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count3 && count3 < 2) return tickSpec(start2, stop, count3 * 2);
    return [i1, i2, inc2];
  }
  function ticks(start2, stop, count3) {
    stop = +stop, start2 = +start2, count3 = +count3;
    if (!(count3 > 0)) return [];
    if (start2 === stop) return [start2];
    const reverse2 = stop < start2, [i1, i2, inc2] = reverse2 ? tickSpec(stop, start2, count3) : tickSpec(start2, stop, count3);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks2 = new Array(n);
    if (reverse2) {
      if (inc2 < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc2;
      else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc2;
    } else {
      if (inc2 < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc2;
      else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc2;
    }
    return ticks2;
  }
  function tickIncrement(start2, stop, count3) {
    stop = +stop, start2 = +start2, count3 = +count3;
    return tickSpec(start2, stop, count3)[2];
  }
  function tickStep(start2, stop, count3) {
    stop = +stop, start2 = +start2, count3 = +count3;
    const reverse2 = stop < start2, inc2 = reverse2 ? tickIncrement(stop, start2, count3) : tickIncrement(start2, stop, count3);
    return (reverse2 ? -1 : 1) * (inc2 < 0 ? 1 / -inc2 : inc2);
  }

  // node_modules/d3-array/src/nice.js
  function nice(start2, stop, count3) {
    let prestep;
    while (true) {
      const step = tickIncrement(start2, stop, count3);
      if (step === prestep || step === 0 || !isFinite(step)) {
        return [start2, stop];
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      }
      prestep = step;
    }
  }

  // node_modules/d3-array/src/threshold/sturges.js
  function thresholdSturges(values) {
    return Math.max(1, Math.ceil(Math.log(count(values)) / Math.LN2) + 1);
  }

  // node_modules/d3-array/src/bin.js
  function bin() {
    var value = identity, domain = extent, threshold2 = thresholdSturges;
    function histogram(data) {
      if (!Array.isArray(data)) data = Array.from(data);
      var i, n = data.length, x6, step, values = new Array(n);
      for (i = 0; i < n; ++i) {
        values[i] = value(data[i], i, data);
      }
      var xz = domain(values), x06 = xz[0], x12 = xz[1], tz = threshold2(values, x06, x12);
      if (!Array.isArray(tz)) {
        const max5 = x12, tn2 = +tz;
        if (domain === extent) [x06, x12] = nice(x06, x12, tn2);
        tz = ticks(x06, x12, tn2);
        if (tz[0] <= x06) step = tickIncrement(x06, x12, tn2);
        if (tz[tz.length - 1] >= x12) {
          if (max5 >= x12 && domain === extent) {
            const step2 = tickIncrement(x06, x12, tn2);
            if (isFinite(step2)) {
              if (step2 > 0) {
                x12 = (Math.floor(x12 / step2) + 1) * step2;
              } else if (step2 < 0) {
                x12 = (Math.ceil(x12 * -step2) + 1) / -step2;
              }
            }
          } else {
            tz.pop();
          }
        }
      }
      var m4 = tz.length, a4 = 0, b10 = m4;
      while (tz[a4] <= x06) ++a4;
      while (tz[b10 - 1] > x12) --b10;
      if (a4 || b10 < m4) tz = tz.slice(a4, b10), m4 = b10 - a4;
      var bins = new Array(m4 + 1), bin2;
      for (i = 0; i <= m4; ++i) {
        bin2 = bins[i] = [];
        bin2.x0 = i > 0 ? tz[i - 1] : x06;
        bin2.x1 = i < m4 ? tz[i] : x12;
      }
      if (isFinite(step)) {
        if (step > 0) {
          for (i = 0; i < n; ++i) {
            if ((x6 = values[i]) != null && x06 <= x6 && x6 <= x12) {
              bins[Math.min(m4, Math.floor((x6 - x06) / step))].push(data[i]);
            }
          }
        } else if (step < 0) {
          for (i = 0; i < n; ++i) {
            if ((x6 = values[i]) != null && x06 <= x6 && x6 <= x12) {
              const j3 = Math.floor((x06 - x6) * step);
              bins[Math.min(m4, j3 + (tz[j3] <= x6))].push(data[i]);
            }
          }
        }
      } else {
        for (i = 0; i < n; ++i) {
          if ((x6 = values[i]) != null && x06 <= x6 && x6 <= x12) {
            bins[bisect_default(tz, x6, 0, m4)].push(data[i]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(_3) {
      return arguments.length ? (value = typeof _3 === "function" ? _3 : constant(_3), histogram) : value;
    };
    histogram.domain = function(_3) {
      return arguments.length ? (domain = typeof _3 === "function" ? _3 : constant([_3[0], _3[1]]), histogram) : domain;
    };
    histogram.thresholds = function(_3) {
      return arguments.length ? (threshold2 = typeof _3 === "function" ? _3 : constant(Array.isArray(_3) ? slice.call(_3) : _3), histogram) : threshold2;
    };
    return histogram;
  }

  // node_modules/d3-array/src/max.js
  function max(values, valueof) {
    let max5;
    if (valueof === void 0) {
      for (const value of values) {
        if (value != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value;
        }
      }
    }
    return max5;
  }

  // node_modules/d3-array/src/maxIndex.js
  function maxIndex(values, valueof) {
    let max5;
    let maxIndex2 = -1;
    let index3 = -1;
    if (valueof === void 0) {
      for (const value of values) {
        ++index3;
        if (value != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value, maxIndex2 = index3;
        }
      }
    } else {
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value, maxIndex2 = index3;
        }
      }
    }
    return maxIndex2;
  }

  // node_modules/d3-array/src/min.js
  function min(values, valueof) {
    let min4;
    if (valueof === void 0) {
      for (const value of values) {
        if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
          min4 = value;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (min4 > value || min4 === void 0 && value >= value)) {
          min4 = value;
        }
      }
    }
    return min4;
  }

  // node_modules/d3-array/src/minIndex.js
  function minIndex(values, valueof) {
    let min4;
    let minIndex2 = -1;
    let index3 = -1;
    if (valueof === void 0) {
      for (const value of values) {
        ++index3;
        if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
          min4 = value, minIndex2 = index3;
        }
      }
    } else {
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (min4 > value || min4 === void 0 && value >= value)) {
          min4 = value, minIndex2 = index3;
        }
      }
    }
    return minIndex2;
  }

  // node_modules/d3-array/src/quickselect.js
  function quickselect(array4, k4, left2 = 0, right2 = Infinity, compare) {
    k4 = Math.floor(k4);
    left2 = Math.floor(Math.max(0, left2));
    right2 = Math.floor(Math.min(array4.length - 1, right2));
    if (!(left2 <= k4 && k4 <= right2)) return array4;
    compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
    while (right2 > left2) {
      if (right2 - left2 > 600) {
        const n = right2 - left2 + 1;
        const m4 = k4 - left2 + 1;
        const z3 = Math.log(n);
        const s2 = 0.5 * Math.exp(2 * z3 / 3);
        const sd = 0.5 * Math.sqrt(z3 * s2 * (n - s2) / n) * (m4 - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left2, Math.floor(k4 - m4 * s2 / n + sd));
        const newRight = Math.min(right2, Math.floor(k4 + (n - m4) * s2 / n + sd));
        quickselect(array4, k4, newLeft, newRight, compare);
      }
      const t = array4[k4];
      let i = left2;
      let j3 = right2;
      swap(array4, left2, k4);
      if (compare(array4[right2], t) > 0) swap(array4, left2, right2);
      while (i < j3) {
        swap(array4, i, j3), ++i, --j3;
        while (compare(array4[i], t) < 0) ++i;
        while (compare(array4[j3], t) > 0) --j3;
      }
      if (compare(array4[left2], t) === 0) swap(array4, left2, j3);
      else ++j3, swap(array4, j3, right2);
      if (j3 <= k4) left2 = j3 + 1;
      if (k4 <= j3) right2 = j3 - 1;
    }
    return array4;
  }
  function swap(array4, i, j3) {
    const t = array4[i];
    array4[i] = array4[j3];
    array4[j3] = t;
  }

  // node_modules/d3-array/src/greatest.js
  function greatest(values, compare = ascending) {
    let max5;
    let defined = false;
    if (compare.length === 1) {
      let maxValue;
      for (const element of values) {
        const value = compare(element);
        if (defined ? ascending(value, maxValue) > 0 : ascending(value, value) === 0) {
          max5 = element;
          maxValue = value;
          defined = true;
        }
      }
    } else {
      for (const value of values) {
        if (defined ? compare(value, max5) > 0 : compare(value, value) === 0) {
          max5 = value;
          defined = true;
        }
      }
    }
    return max5;
  }

  // node_modules/d3-array/src/quantile.js
  function quantile(values, p3, valueof) {
    values = Float64Array.from(numbers(values, valueof));
    if (!(n = values.length) || isNaN(p3 = +p3)) return;
    if (p3 <= 0 || n < 2) return min(values);
    if (p3 >= 1) return max(values);
    var n, i = (n - 1) * p3, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
  }
  function quantileSorted(values, p3, valueof = number) {
    if (!(n = values.length) || isNaN(p3 = +p3)) return;
    if (p3 <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p3 >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p3, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
  }
  function quantileIndex(values, p3, valueof = number) {
    if (isNaN(p3 = +p3)) return;
    numbers2 = Float64Array.from(values, (_3, i2) => number(valueof(values[i2], i2, values)));
    if (p3 <= 0) return minIndex(numbers2);
    if (p3 >= 1) return maxIndex(numbers2);
    var numbers2, index3 = Uint32Array.from(values, (_3, i2) => i2), j3 = numbers2.length - 1, i = Math.floor(j3 * p3);
    quickselect(index3, i, 0, j3, (i2, j4) => ascendingDefined(numbers2[i2], numbers2[j4]));
    i = greatest(index3.subarray(0, i + 1), (i2) => numbers2[i2]);
    return i >= 0 ? i : -1;
  }

  // node_modules/d3-array/src/threshold/freedmanDiaconis.js
  function thresholdFreedmanDiaconis(values, min4, max5) {
    const c6 = count(values), d = quantile(values, 0.75) - quantile(values, 0.25);
    return c6 && d ? Math.ceil((max5 - min4) / (2 * d * Math.pow(c6, -1 / 3))) : 1;
  }

  // node_modules/d3-array/src/threshold/scott.js
  function thresholdScott(values, min4, max5) {
    const c6 = count(values), d = deviation(values);
    return c6 && d ? Math.ceil((max5 - min4) * Math.cbrt(c6) / (3.49 * d)) : 1;
  }

  // node_modules/d3-array/src/mean.js
  function mean(values, valueof) {
    let count3 = 0;
    let sum4 = 0;
    if (valueof === void 0) {
      for (let value of values) {
        if (value != null && (value = +value) >= value) {
          ++count3, sum4 += value;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && (value = +value) >= value) {
          ++count3, sum4 += value;
        }
      }
    }
    if (count3) return sum4 / count3;
  }

  // node_modules/d3-array/src/median.js
  function median(values, valueof) {
    return quantile(values, 0.5, valueof);
  }
  function medianIndex(values, valueof) {
    return quantileIndex(values, 0.5, valueof);
  }

  // node_modules/d3-array/src/merge.js
  function* flatten2(arrays) {
    for (const array4 of arrays) {
      yield* array4;
    }
  }
  function merge(arrays) {
    return Array.from(flatten2(arrays));
  }

  // node_modules/d3-array/src/mode.js
  function mode(values, valueof) {
    const counts = new InternMap();
    if (valueof === void 0) {
      for (let value of values) {
        if (value != null && value >= value) {
          counts.set(value, (counts.get(value) || 0) + 1);
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index3, values)) != null && value >= value) {
          counts.set(value, (counts.get(value) || 0) + 1);
        }
      }
    }
    let modeValue;
    let modeCount = 0;
    for (const [value, count3] of counts) {
      if (count3 > modeCount) {
        modeCount = count3;
        modeValue = value;
      }
    }
    return modeValue;
  }

  // node_modules/d3-array/src/pairs.js
  function pairs(values, pairof = pair) {
    const pairs2 = [];
    let previous;
    let first = false;
    for (const value of values) {
      if (first) pairs2.push(pairof(previous, value));
      previous = value;
      first = true;
    }
    return pairs2;
  }
  function pair(a4, b10) {
    return [a4, b10];
  }

  // node_modules/d3-array/src/range.js
  function range2(start2, stop, step) {
    start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range5 = new Array(n);
    while (++i < n) {
      range5[i] = start2 + i * step;
    }
    return range5;
  }

  // node_modules/d3-array/src/rank.js
  function rank(values, valueof = ascending) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    let V3 = Array.from(values);
    const R3 = new Float64Array(V3.length);
    if (valueof.length !== 2) V3 = V3.map(valueof), valueof = ascending;
    const compareIndex = (i, j3) => valueof(V3[i], V3[j3]);
    let k4, r;
    values = Uint32Array.from(V3, (_3, i) => i);
    values.sort(valueof === ascending ? (i, j3) => ascendingDefined(V3[i], V3[j3]) : compareDefined(compareIndex));
    values.forEach((j3, i) => {
      const c6 = compareIndex(j3, k4 === void 0 ? j3 : k4);
      if (c6 >= 0) {
        if (k4 === void 0 || c6 > 0) k4 = j3, r = i;
        R3[j3] = r;
      } else {
        R3[j3] = NaN;
      }
    });
    return R3;
  }

  // node_modules/d3-array/src/least.js
  function least(values, compare = ascending) {
    let min4;
    let defined = false;
    if (compare.length === 1) {
      let minValue;
      for (const element of values) {
        const value = compare(element);
        if (defined ? ascending(value, minValue) < 0 : ascending(value, value) === 0) {
          min4 = element;
          minValue = value;
          defined = true;
        }
      }
    } else {
      for (const value of values) {
        if (defined ? compare(value, min4) < 0 : compare(value, value) === 0) {
          min4 = value;
          defined = true;
        }
      }
    }
    return min4;
  }

  // node_modules/d3-array/src/leastIndex.js
  function leastIndex(values, compare = ascending) {
    if (compare.length === 1) return minIndex(values, compare);
    let minValue;
    let min4 = -1;
    let index3 = -1;
    for (const value of values) {
      ++index3;
      if (min4 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
        minValue = value;
        min4 = index3;
      }
    }
    return min4;
  }

  // node_modules/d3-array/src/greatestIndex.js
  function greatestIndex(values, compare = ascending) {
    if (compare.length === 1) return maxIndex(values, compare);
    let maxValue;
    let max5 = -1;
    let index3 = -1;
    for (const value of values) {
      ++index3;
      if (max5 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
        maxValue = value;
        max5 = index3;
      }
    }
    return max5;
  }

  // node_modules/d3-array/src/scan.js
  function scan(values, compare) {
    const index3 = leastIndex(values, compare);
    return index3 < 0 ? void 0 : index3;
  }

  // node_modules/d3-array/src/shuffle.js
  var shuffle_default = shuffler(Math.random);
  function shuffler(random) {
    return function shuffle2(array4, i0 = 0, i1 = array4.length) {
      let m4 = i1 - (i0 = +i0);
      while (m4) {
        const i = random() * m4-- | 0, t = array4[m4 + i0];
        array4[m4 + i0] = array4[i + i0];
        array4[i + i0] = t;
      }
      return array4;
    };
  }

  // node_modules/d3-array/src/sum.js
  function sum(values, valueof) {
    let sum4 = 0;
    if (valueof === void 0) {
      for (let value of values) {
        if (value = +value) {
          sum4 += value;
        }
      }
    } else {
      let index3 = -1;
      for (let value of values) {
        if (value = +valueof(value, ++index3, values)) {
          sum4 += value;
        }
      }
    }
    return sum4;
  }

  // node_modules/d3-array/src/transpose.js
  function transpose(matrix) {
    if (!(n = matrix.length)) return [];
    for (var i = -1, m4 = min(matrix, length2), transpose2 = new Array(m4); ++i < m4; ) {
      for (var j3 = -1, n, row = transpose2[i] = new Array(n); ++j3 < n; ) {
        row[j3] = matrix[j3][i];
      }
    }
    return transpose2;
  }
  function length2(d) {
    return d.length;
  }

  // node_modules/d3-array/src/zip.js
  function zip() {
    return transpose(arguments);
  }

  // node_modules/d3-array/src/every.js
  function every(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index3 = -1;
    for (const value of values) {
      if (!test(value, ++index3, values)) {
        return false;
      }
    }
    return true;
  }

  // node_modules/d3-array/src/some.js
  function some(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    let index3 = -1;
    for (const value of values) {
      if (test(value, ++index3, values)) {
        return true;
      }
    }
    return false;
  }

  // node_modules/d3-array/src/filter.js
  function filter(values, test) {
    if (typeof test !== "function") throw new TypeError("test is not a function");
    const array4 = [];
    let index3 = -1;
    for (const value of values) {
      if (test(value, ++index3, values)) {
        array4.push(value);
      }
    }
    return array4;
  }

  // node_modules/d3-array/src/map.js
  function map2(values, mapper) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
    return Array.from(values, (value, index3) => mapper(value, index3, values));
  }

  // node_modules/d3-array/src/reduce.js
  function reduce(values, reducer2, value) {
    if (typeof reducer2 !== "function") throw new TypeError("reducer is not a function");
    const iterator = values[Symbol.iterator]();
    let done, next, index3 = -1;
    if (arguments.length < 3) {
      ({ done, value } = iterator.next());
      if (done) return;
      ++index3;
    }
    while ({ done, value: next } = iterator.next(), !done) {
      value = reducer2(value, next, ++index3, values);
    }
    return value;
  }

  // node_modules/d3-array/src/reverse.js
  function reverse(values) {
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    return Array.from(values).reverse();
  }

  // node_modules/d3-array/src/difference.js
  function difference(values, ...others) {
    values = new InternSet(values);
    for (const other of others) {
      for (const value of other) {
        values.delete(value);
      }
    }
    return values;
  }

  // node_modules/d3-array/src/disjoint.js
  function disjoint(values, other) {
    const iterator = other[Symbol.iterator](), set4 = new InternSet();
    for (const v4 of values) {
      if (set4.has(v4)) return false;
      let value, done;
      while ({ value, done } = iterator.next()) {
        if (done) break;
        if (Object.is(v4, value)) return false;
        set4.add(value);
      }
    }
    return true;
  }

  // node_modules/d3-array/src/intersection.js
  function intersection(values, ...others) {
    values = new InternSet(values);
    others = others.map(set);
    out: for (const value of values) {
      for (const other of others) {
        if (!other.has(value)) {
          values.delete(value);
          continue out;
        }
      }
    }
    return values;
  }
  function set(values) {
    return values instanceof InternSet ? values : new InternSet(values);
  }

  // node_modules/d3-array/src/superset.js
  function superset(values, other) {
    const iterator = values[Symbol.iterator](), set4 = /* @__PURE__ */ new Set();
    for (const o of other) {
      const io = intern(o);
      if (set4.has(io)) continue;
      let value, done;
      while ({ value, done } = iterator.next()) {
        if (done) return false;
        const ivalue = intern(value);
        set4.add(ivalue);
        if (Object.is(io, ivalue)) break;
      }
    }
    return true;
  }
  function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  // node_modules/d3-array/src/subset.js
  function subset(values, other) {
    return superset(other, values);
  }

  // node_modules/d3-array/src/union.js
  function union(...others) {
    const set4 = new InternSet();
    for (const other of others) {
      for (const o of other) {
        set4.add(o);
      }
    }
    return set4;
  }

  // node_modules/d3-axis/src/identity.js
  function identity_default(x6) {
    return x6;
  }

  // node_modules/d3-axis/src/axis.js
  var top = 1;
  var right = 2;
  var bottom = 3;
  var left = 4;
  var epsilon = 1e-6;
  function translateX(x6) {
    return "translate(" + x6 + ",0)";
  }
  function translateY(y5) {
    return "translate(0," + y5 + ")";
  }
  function number2(scale2) {
    return (d) => +scale2(d);
  }
  function center(scale2, offset) {
    offset = Math.max(0, scale2.bandwidth() - offset * 2) / 2;
    if (scale2.round()) offset = Math.round(offset);
    return (d) => +scale2(d) + offset;
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale2) {
    var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k4 = orient === top || orient === left ? -1 : 1, x6 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
    function axis2(context) {
      var values = tickValues == null ? scale2.ticks ? scale2.ticks.apply(scale2, tickArguments) : scale2.domain() : tickValues, format2 = tickFormat2 == null ? scale2.tickFormat ? scale2.tickFormat.apply(scale2, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range5 = scale2.range(), range0 = +range5[0] + offset, range1 = +range5[range5.length - 1] + offset, position = (scale2.bandwidth ? center : number2)(scale2.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale2).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
      path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      tick = tick.merge(tickEnter);
      line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x6 + "2", k4 * tickSizeInner));
      text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x6, k4 * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
      if (context !== selection2) {
        path2 = path2.transition(context);
        tick = tick.transition(context);
        line = line.transition(context);
        text = text.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
          return isFinite(d = position(d)) ? transform2(d + offset) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
          var p3 = this.parentNode.__axis;
          return transform2((p3 && isFinite(p3 = p3(d)) ? p3 : position(d)) + offset);
        });
      }
      tickExit.remove();
      path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k4 * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k4 * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k4 * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k4 * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
      tick.attr("opacity", 1).attr("transform", function(d) {
        return transform2(position(d) + offset);
      });
      line.attr(x6 + "2", k4 * tickSizeInner);
      text.attr(x6, k4 * spacing).text(format2);
      selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
      selection2.each(function() {
        this.__axis = position;
      });
    }
    axis2.scale = function(_3) {
      return arguments.length ? (scale2 = _3, axis2) : scale2;
    };
    axis2.ticks = function() {
      return tickArguments = Array.from(arguments), axis2;
    };
    axis2.tickArguments = function(_3) {
      return arguments.length ? (tickArguments = _3 == null ? [] : Array.from(_3), axis2) : tickArguments.slice();
    };
    axis2.tickValues = function(_3) {
      return arguments.length ? (tickValues = _3 == null ? null : Array.from(_3), axis2) : tickValues && tickValues.slice();
    };
    axis2.tickFormat = function(_3) {
      return arguments.length ? (tickFormat2 = _3, axis2) : tickFormat2;
    };
    axis2.tickSize = function(_3) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_3, axis2) : tickSizeInner;
    };
    axis2.tickSizeInner = function(_3) {
      return arguments.length ? (tickSizeInner = +_3, axis2) : tickSizeInner;
    };
    axis2.tickSizeOuter = function(_3) {
      return arguments.length ? (tickSizeOuter = +_3, axis2) : tickSizeOuter;
    };
    axis2.tickPadding = function(_3) {
      return arguments.length ? (tickPadding = +_3, axis2) : tickPadding;
    };
    axis2.offset = function(_3) {
      return arguments.length ? (offset = +_3, axis2) : offset;
    };
    return axis2;
  }
  function axisTop(scale2) {
    return axis(top, scale2);
  }
  function axisRight(scale2) {
    return axis(right, scale2);
  }
  function axisBottom(scale2) {
    return axis(bottom, scale2);
  }
  function axisLeft(scale2) {
    return axis(left, scale2);
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _3 = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _3 || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _3[t] = [];
    }
    return new Dispatch(_3);
  }
  function Dispatch(_3) {
    this._ = _3;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _3 = this._, T3 = parseTypenames(typename + "", _3), t, i = -1, n = T3.length;
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T3[i]).type) && (t = get(_3[t], typename.name))) return t;
        return;
      }
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T3[i]).type) _3[t] = set2(_3[t], typename.name, callback);
        else if (callback == null) for (t in _3) _3[t] = set2(_3[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy3 = {}, _3 = this._;
      for (var t in _3) copy3[t] = _3[t].slice();
      return new Dispatch(copy3);
    },
    call: function(type2, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
      for (t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i = 0, n = type2.length, c6; i < n; ++i) {
      if ((c6 = type2[i]).name === name) {
        return c6.value;
      }
    }
  }
  function set2(type2, name, callback) {
    for (var i = 0, n = type2.length; i < n; ++i) {
      if (type2[i].name === name) {
        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
        break;
      }
    }
    if (callback != null) type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function") select = selector_default(select);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, subgroup = subgroups[j3] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array2(x6) {
    return x6 == null ? [] : Array.isArray(x6) ? x6 : Array.from(x6);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty2() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty2 : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function() {
      return array2(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll_default(select);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, node, i = 0; i < n; ++i) {
        if (node = group2[i]) {
          subgroups.push(select.call(node, node.__data__, i, group2));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter2 = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter2.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, subgroup = subgroups[j3] = [], node, i = 0; i < n; ++i) {
        if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group2, enter2, update, exit2, data) {
    var i = 0, node, groupLength = group2.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group2[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter2[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group2[i]) {
        exit2[i] = node;
      }
    }
  }
  function bindKey(parent, group2, enter2, update, exit2, data, key) {
    var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group2[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group2) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit2[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter2[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group2[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit2[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
    if (typeof value !== "function") value = constant_default(value);
    for (var m4 = groups2.length, update = new Array(m4), enter2 = new Array(m4), exit2 = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      var parent = parents[j3], group2 = groups2[j3], groupLength = group2.length, data = arraylike(value.call(parent, parent && parent.__data__, j3, parents)), dataLength = data.length, enterGroup = enter2[j3] = new Array(dataLength), updateGroup = update[j3] = new Array(dataLength), exitGroup = exit2[j3] = new Array(groupLength);
      bind(parent, group2, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter2;
    update._exit = exit2;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter2 = this.enter(), update = this, exit2 = this.exit();
    if (typeof onenter === "function") {
      enter2 = onenter(enter2);
      if (enter2) enter2 = enter2.selection();
    } else {
      enter2 = enter2.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit2.remove();
    else onexit(exit2);
    return enter2 && update ? enter2.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
      for (var group0 = groups0[j3], group1 = groups1[j3], n = group0.length, merge2 = merges[j3] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge2[i] = node;
        }
      }
    }
    for (; j3 < m0; ++j3) {
      merges[j3] = groups0[j3];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups2 = this._groups, j3 = -1, m4 = groups2.length; ++j3 < m4; ) {
      for (var group2 = groups2[j3], i = group2.length - 1, next = group2[i], node; --i >= 0; ) {
        if (node = group2[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare) compare = ascending2;
    function compareNode(a4, b10) {
      return a4 && b10 ? compare(a4.__data__, b10.__data__) : !a4 - !b10;
    }
    for (var groups2 = this._groups, m4 = groups2.length, sortgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, sortgroup = sortgroups[j3] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group2[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending2(a4, b10) {
    return a4 < b10 ? -1 : a4 > b10 ? 1 : a4 >= b10 ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], i = 0, n = group2.length; i < n; ++i) {
        var node = group2[i];
        if (node) return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this) ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], i = 0, n = group2.length, node; i < n; ++i) {
        if (node = group2[i]) callback.call(node, node.__data__, i, group2);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v4 = value.apply(this, arguments);
      if (v4 == null) this.removeAttribute(name);
      else this.setAttribute(name, v4);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v4 = value.apply(this, arguments);
      if (v4 == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v4);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v4 = value.apply(this, arguments);
      if (v4 == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v4, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v4 = value.apply(this, arguments);
      if (v4 == null) delete this[name];
      else this[name] = v4;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v4 = value.apply(this, arguments);
      this.textContent = v4 == null ? "" : v4;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v4 = value.apply(this, arguments);
      this.innerHTML = v4 == null ? "" : v4;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on2 = this.__on;
      if (!on2) return;
      for (var j3 = 0, i = -1, m4 = on2.length, o; j3 < m4; ++j3) {
        if (o = on2[j3], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on2[++i] = o;
        }
      }
      if (++i) on2.length = i;
      else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on2 = this.__on, o, listener = contextListener(value);
      if (on2) for (var j3 = 0, m4 = on2.length; j3 < m4; ++j3) {
        if ((o = on2[j3]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = { type: typename.type, name: typename.name, value, listener, options };
      if (!on2) this.__on = [o];
      else on2.push(o);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on2 = this.node().__on;
      if (on2) for (var j3 = 0, m4 = on2.length, o; j3 < m4; ++j3) {
        for (i = 0, o = on2[j3]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on2 = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on2(typenames[i], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type2, params) {
    var window2 = window_default(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type2, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups2 = this._groups, j3 = 0, m4 = groups2.length; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], i = 0, n = group2.length, node; i < n; ++i) {
        if (node = group2[i]) yield node;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups2, parents) {
    this._groups = groups2;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/create.js
  function create_default(name) {
    return select_default2(creator_default(name).call(document.documentElement));
  }

  // node_modules/d3-selection/src/local.js
  var nextId = 0;
  function local() {
    return new Local();
  }
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
      var id2 = this._;
      while (!(id2 in node)) if (!(node = node.parentNode)) return;
      return node[id2];
    },
    set: function(node, value) {
      return node[this._] = value;
    },
    remove: function(node) {
      return this._ in node && delete node[this._];
    },
    toString: function() {
      return this._;
    }
  };

  // node_modules/d3-selection/src/sourceEvent.js
  function sourceEvent_default(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }

  // node_modules/d3-selection/src/pointer.js
  function pointer_default(event, node) {
    event = sourceEvent_default(event);
    if (node === void 0) node = event.currentTarget;
    if (node) {
      var svg2 = node.ownerSVGElement || node;
      if (svg2.createSVGPoint) {
        var point6 = svg2.createSVGPoint();
        point6.x = event.clientX, point6.y = event.clientY;
        point6 = point6.matrixTransform(node.getScreenCTM().inverse());
        return [point6.x, point6.y];
      }
      if (node.getBoundingClientRect) {
        var rect2 = node.getBoundingClientRect();
        return [event.clientX - rect2.left - node.clientLeft, event.clientY - rect2.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  // node_modules/d3-selection/src/pointers.js
  function pointers_default(events, node) {
    if (events.target) {
      events = sourceEvent_default(events);
      if (node === void 0) node = events.currentTarget;
      events = events.touches || [events];
    }
    return Array.from(events, (event) => pointer_default(event, node));
  }

  // node_modules/d3-selection/src/selectAll.js
  function selectAll_default2(selector) {
    return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array2(selector)], root);
  }

  // node_modules/d3-drag/src/noevent.js
  var nonpassive = { passive: false };
  var nonpassivecapture = { capture: true, passive: false };
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-drag/src/nodrag.js
  function nodrag_default(view) {
    var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
    if ("onselectstart" in root3) {
      selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
    } else {
      root3.__noselect = root3.style.MozUserSelect;
      root3.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent_default, nonpassivecapture);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root3) {
      selection2.on("selectstart.drag", null);
    } else {
      root3.style.MozUserSelect = root3.__noselect;
      delete root3.__noselect;
    }
  }

  // node_modules/d3-drag/src/constant.js
  var constant_default2 = (x6) => () => x6;

  // node_modules/d3-drag/src/event.js
  function DragEvent(type2, {
    sourceEvent,
    subject,
    target,
    identifier,
    active,
    x: x6,
    y: y5,
    dx,
    dy,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type2, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      subject: { value: subject, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      identifier: { value: identifier, enumerable: true, configurable: true },
      active: { value: active, enumerable: true, configurable: true },
      x: { value: x6, enumerable: true, configurable: true },
      y: { value: y5, enumerable: true, configurable: true },
      dx: { value: dx, enumerable: true, configurable: true },
      dy: { value: dy, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }
  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // node_modules/d3-drag/src/drag.js
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d) {
    return d == null ? { x: event.x, y: event.y } : d;
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function drag_default() {
    var filter3 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection2) {
      selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
      if (touchending || !filter3.call(this, event, d)) return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
      nodrag_default(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent_default(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      select_default2(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent_default(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
      if (!filter3.call(this, event, d)) return;
      var touches = event.changedTouches, c6 = container.call(this, event, d), n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c6, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent_default(event);
          gesture("drag", event, touches[i]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, 500);
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }
    function beforestart(that, container2, event, d, identifier, touch) {
      var dispatch2 = listeners.copy(), p3 = pointer_default(touch || event, container2), dx, dy, s2;
      if ((s2 = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p3[0],
        y: p3[1],
        dx: 0,
        dy: 0,
        dispatch: dispatch2
      }), d)) == null) return;
      dx = s2.x - p3[0] || 0;
      dy = s2.y - p3[1] || 0;
      return function gesture(type2, event2, touch2) {
        var p02 = p3, n;
        switch (type2) {
          case "start":
            gestures[identifier] = gesture, n = active++;
            break;
          case "end":
            delete gestures[identifier], --active;
          // falls through
          case "drag":
            p3 = pointer_default(touch2 || event2, container2), n = active;
            break;
        }
        dispatch2.call(
          type2,
          that,
          new DragEvent(type2, {
            sourceEvent: event2,
            subject: s2,
            target: drag,
            identifier,
            active: n,
            x: p3[0] + dx,
            y: p3[1] + dy,
            dx: p3[0] - p02[0],
            dy: p3[1] - p02[1],
            dispatch: dispatch2
          }),
          d
        );
      };
    }
    drag.filter = function(_3) {
      return arguments.length ? (filter3 = typeof _3 === "function" ? _3 : constant_default2(!!_3), drag) : filter3;
    };
    drag.container = function(_3) {
      return arguments.length ? (container = typeof _3 === "function" ? _3 : constant_default2(_3), drag) : container;
    };
    drag.subject = function(_3) {
      return arguments.length ? (subject = typeof _3 === "function" ? _3 : constant_default2(_3), drag) : subject;
    };
    drag.touchable = function(_3) {
      return arguments.length ? (touchable = typeof _3 === "function" ? _3 : constant_default2(!!_3), drag) : touchable;
    };
    drag.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_3) {
      return arguments.length ? (clickDistance2 = (_3 = +_3) * _3, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
  }

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format2) {
    var m4, l2;
    format2 = (format2 + "").trim().toLowerCase();
    return (m4 = reHex.exec(format2)) ? (l2 = m4[1].length, m4 = parseInt(m4[1], 16), l2 === 6 ? rgbn(m4) : l2 === 3 ? new Rgb(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l2 === 8 ? rgba(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l2 === 4 ? rgba(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger.exec(format2)) ? new Rgb(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent.exec(format2)) ? new Rgb(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger.exec(format2)) ? rgba(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent.exec(format2)) ? rgba(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent.exec(format2)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent.exec(format2)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g, b10, a4) {
    if (a4 <= 0) r = g = b10 = NaN;
    return new Rgb(r, g, b10, a4);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b10, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b10, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b10, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b10;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter(k4) {
      k4 = k4 == null ? brighter : Math.pow(brighter, k4);
      return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
    },
    darker(k4) {
      k4 = k4 == null ? darker : Math.pow(darker, k4);
      return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a4 = clampa(this.opacity);
    return `${a4 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a4 === 1 ? ")" : `, ${a4})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s2, l2, a4) {
    if (a4 <= 0) h = s2 = l2 = NaN;
    else if (l2 <= 0 || l2 >= 1) h = s2 = NaN;
    else if (s2 <= 0) h = NaN;
    return new Hsl(h, s2, l2, a4);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b10 = o.b / 255, min4 = Math.min(r, g, b10), max5 = Math.max(r, g, b10), h = NaN, s2 = max5 - min4, l2 = (max5 + min4) / 2;
    if (s2) {
      if (r === max5) h = (g - b10) / s2 + (g < b10) * 6;
      else if (g === max5) h = (b10 - r) / s2 + 2;
      else h = (r - g) / s2 + 4;
      s2 /= l2 < 0.5 ? max5 + min4 : 2 - max5 - min4;
      h *= 60;
    } else {
      s2 = l2 > 0 && l2 < 1 ? 0 : h;
    }
    return new Hsl(h, s2, l2, o.opacity);
  }
  function hsl(h, s2, l2, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l2, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s2, l2, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l2;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter(k4) {
      k4 = k4 == null ? brighter : Math.pow(brighter, k4);
      return new Hsl(this.h, this.s, this.l * k4, this.opacity);
    },
    darker(k4) {
      k4 = k4 == null ? darker : Math.pow(darker, k4);
      return new Hsl(this.h, this.s, this.l * k4, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m22 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s2, m1 = 2 * l2 - m22;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m22),
        hsl2rgb(h, m1, m22),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m22),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a4 = clampa(this.opacity);
      return `${a4 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a4 === 1 ? ")" : `, ${a4})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h, m1, m22) {
    return (h < 60 ? m1 + (m22 - m1) * h / 60 : h < 180 ? m22 : h < 240 ? m1 + (m22 - m1) * (240 - h) / 60 : m1) * 255;
  }

  // node_modules/d3-color/src/math.js
  var radians = Math.PI / 180;
  var degrees = 180 / Math.PI;

  // node_modules/d3-color/src/lab.js
  var K3 = 18;
  var Xn2 = 0.96422;
  var Yn2 = 1;
  var Zn2 = 0.82521;
  var t0 = 4 / 29;
  var t1 = 6 / 29;
  var t2 = 3 * t1 * t1;
  var t3 = t1 * t1 * t1;
  function labConvert(o) {
    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) return hcl2lab(o);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b10 = rgb2lrgb(o.b), y5 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b10) / Yn2), x6, z3;
    if (r === g && g === b10) x6 = z3 = y5;
    else {
      x6 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b10) / Xn2);
      z3 = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b10) / Zn2);
    }
    return new Lab(116 * y5 - 16, 500 * (x6 - y5), 200 * (y5 - z3), o.opacity);
  }
  function gray(l2, opacity) {
    return new Lab(l2, 0, 0, opacity == null ? 1 : opacity);
  }
  function lab(l2, a4, b10, opacity) {
    return arguments.length === 1 ? labConvert(l2) : new Lab(l2, a4, b10, opacity == null ? 1 : opacity);
  }
  function Lab(l2, a4, b10, opacity) {
    this.l = +l2;
    this.a = +a4;
    this.b = +b10;
    this.opacity = +opacity;
  }
  define_default(Lab, lab, extend(Color, {
    brighter(k4) {
      return new Lab(this.l + K3 * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
    },
    darker(k4) {
      return new Lab(this.l - K3 * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
    },
    rgb() {
      var y5 = (this.l + 16) / 116, x6 = isNaN(this.a) ? y5 : y5 + this.a / 500, z3 = isNaN(this.b) ? y5 : y5 - this.b / 200;
      x6 = Xn2 * lab2xyz(x6);
      y5 = Yn2 * lab2xyz(y5);
      z3 = Zn2 * lab2xyz(z3);
      return new Rgb(
        lrgb2rgb(3.1338561 * x6 - 1.6168667 * y5 - 0.4906146 * z3),
        lrgb2rgb(-0.9787684 * x6 + 1.9161415 * y5 + 0.033454 * z3),
        lrgb2rgb(0.0719453 * x6 - 0.2289914 * y5 + 1.4052427 * z3),
        this.opacity
      );
    }
  }));
  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }
  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }
  function lrgb2rgb(x6) {
    return 255 * (x6 <= 31308e-7 ? 12.92 * x6 : 1.055 * Math.pow(x6, 1 / 2.4) - 0.055);
  }
  function rgb2lrgb(x6) {
    return (x6 /= 255) <= 0.04045 ? x6 / 12.92 : Math.pow((x6 + 0.055) / 1.055, 2.4);
  }
  function hclConvert(o) {
    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab)) o = labConvert(o);
    if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * degrees;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
  }
  function lch(l2, c6, h, opacity) {
    return arguments.length === 1 ? hclConvert(l2) : new Hcl(h, c6, l2, opacity == null ? 1 : opacity);
  }
  function hcl(h, c6, l2, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c6, l2, opacity == null ? 1 : opacity);
  }
  function Hcl(h, c6, l2, opacity) {
    this.h = +h;
    this.c = +c6;
    this.l = +l2;
    this.opacity = +opacity;
  }
  function hcl2lab(o) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * radians;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  define_default(Hcl, hcl, extend(Color, {
    brighter(k4) {
      return new Hcl(this.h, this.c, this.l + K3 * (k4 == null ? 1 : k4), this.opacity);
    },
    darker(k4) {
      return new Hcl(this.h, this.c, this.l - K3 * (k4 == null ? 1 : k4), this.opacity);
    },
    rgb() {
      return hcl2lab(this).rgb();
    }
  }));

  // node_modules/d3-color/src/cubehelix.js
  var A3 = -0.14861;
  var B3 = 1.78277;
  var C3 = -0.29227;
  var D3 = -0.90649;
  var E2 = 1.97294;
  var ED = E2 * D3;
  var EB = E2 * B3;
  var BC_DA = B3 * C3 - D3 * A3;
  function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb)) o = rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b10 = o.b / 255, l2 = (BC_DA * b10 + ED * r - EB * g) / (BC_DA + ED - EB), bl = b10 - l2, k4 = (E2 * (g - l2) - C3 * bl) / D3, s2 = Math.sqrt(k4 * k4 + bl * bl) / (E2 * l2 * (1 - l2)), h = s2 ? Math.atan2(k4, bl) * degrees - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s2, l2, o.opacity);
  }
  function cubehelix(h, s2, l2, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l2, opacity == null ? 1 : opacity);
  }
  function Cubehelix(h, s2, l2, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l2;
    this.opacity = +opacity;
  }
  define_default(Cubehelix, cubehelix, extend(Color, {
    brighter(k4) {
      k4 = k4 == null ? brighter : Math.pow(brighter, k4);
      return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
    },
    darker(k4) {
      k4 = k4 == null ? darker : Math.pow(darker, k4);
      return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
    },
    rgb() {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l2 = +this.l, a4 = isNaN(this.s) ? 0 : this.s * l2 * (1 - l2), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
      return new Rgb(
        255 * (l2 + a4 * (A3 * cosh2 + B3 * sinh2)),
        255 * (l2 + a4 * (C3 * cosh2 + D3 * sinh2)),
        255 * (l2 + a4 * (E2 * cosh2)),
        this.opacity
      );
    }
  }));

  // node_modules/d3-interpolate/src/basis.js
  function basis(t13, v0, v1, v22, v32) {
    var t22 = t13 * t13, t32 = t22 * t13;
    return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v22 + t32 * v32) / 6;
  }
  function basis_default(values) {
    var n = values.length - 1;
    return function(t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v22 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v22, v32 = i < n - 1 ? values[i + 2] : 2 * v22 - v1;
      return basis((t - i / n) * n, v0, v1, v22, v32);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n = values.length;
    return function(t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v22 = values[(i + 1) % n], v32 = values[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v22, v32);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default3 = (x6) => () => x6;

  // node_modules/d3-interpolate/src/color.js
  function linear(a4, d) {
    return function(t) {
      return a4 + t * d;
    };
  }
  function exponential(a4, b10, y5) {
    return a4 = Math.pow(a4, y5), b10 = Math.pow(b10, y5) - a4, y5 = 1 / y5, function(t) {
      return Math.pow(a4 + t * b10, y5);
    };
  }
  function hue(a4, b10) {
    var d = b10 - a4;
    return d ? linear(a4, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default3(isNaN(a4) ? b10 : a4);
  }
  function gamma(y5) {
    return (y5 = +y5) === 1 ? nogamma : function(a4, b10) {
      return b10 - a4 ? exponential(a4, b10, y5) : constant_default3(isNaN(a4) ? b10 : a4);
    };
  }
  function nogamma(a4, b10) {
    var d = b10 - a4;
    return d ? linear(a4, d) : constant_default3(isNaN(a4) ? b10 : a4);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = (function rgbGamma(y5) {
    var color2 = gamma(y5);
    function rgb2(start2, end) {
      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b10 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.r = r(t);
        start2.g = g(t);
        start2.b = b10(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  })(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length, r = new Array(n), g = new Array(n), b10 = new Array(n), i, color2;
      for (i = 0; i < n; ++i) {
        color2 = rgb(colors[i]);
        r[i] = color2.r || 0;
        g[i] = color2.g || 0;
        b10[i] = color2.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b10 = spline(b10);
      color2.opacity = 1;
      return function(t) {
        color2.r = r(t);
        color2.g = g(t);
        color2.b = b10(t);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a4, b10) {
    if (!b10) b10 = [];
    var n = a4 ? Math.min(b10.length, a4.length) : 0, c6 = b10.slice(), i;
    return function(t) {
      for (i = 0; i < n; ++i) c6[i] = a4[i] * (1 - t) + b10[i] * t;
      return c6;
    };
  }
  function isNumberArray(x6) {
    return ArrayBuffer.isView(x6) && !(x6 instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function array_default(a4, b10) {
    return (isNumberArray(b10) ? numberArray_default : genericArray)(a4, b10);
  }
  function genericArray(a4, b10) {
    var nb = b10 ? b10.length : 0, na = a4 ? Math.min(nb, a4.length) : 0, x6 = new Array(na), c6 = new Array(nb), i;
    for (i = 0; i < na; ++i) x6[i] = value_default(a4[i], b10[i]);
    for (; i < nb; ++i) c6[i] = b10[i];
    return function(t) {
      for (i = 0; i < na; ++i) c6[i] = x6[i](t);
      return c6;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a4, b10) {
    var d = /* @__PURE__ */ new Date();
    return a4 = +a4, b10 = +b10, function(t) {
      return d.setTime(a4 * (1 - t) + b10 * t), d;
    };
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a4, b10) {
    return a4 = +a4, b10 = +b10, function(t) {
      return a4 * (1 - t) + b10 * t;
    };
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a4, b10) {
    var i = {}, c6 = {}, k4;
    if (a4 === null || typeof a4 !== "object") a4 = {};
    if (b10 === null || typeof b10 !== "object") b10 = {};
    for (k4 in b10) {
      if (k4 in a4) {
        i[k4] = value_default(a4[k4], b10[k4]);
      } else {
        c6[k4] = b10[k4];
      }
    }
    return function(t) {
      for (k4 in i) c6[k4] = i[k4](t);
      return c6;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero2(b10) {
    return function() {
      return b10;
    };
  }
  function one(b10) {
    return function(t) {
      return b10(t) + "";
    };
  }
  function string_default(a4, b10) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q3 = [];
    a4 = a4 + "", b10 = b10 + "";
    while ((am = reA.exec(a4)) && (bm = reB.exec(b10))) {
      if ((bs = bm.index) > bi) {
        bs = b10.slice(bi, bs);
        if (s2[i]) s2[i] += bs;
        else s2[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s2[i]) s2[i] += bm;
        else s2[++i] = bm;
      } else {
        s2[++i] = null;
        q3.push({ i, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b10.length) {
      bs = b10.slice(bi);
      if (s2[i]) s2[i] += bs;
      else s2[++i] = bs;
    }
    return s2.length < 2 ? q3[0] ? one(q3[0].x) : zero2(b10) : (b10 = q3.length, function(t) {
      for (var i2 = 0, o; i2 < b10; ++i2) s2[(o = q3[i2]).i] = o.x(t);
      return s2.join("");
    });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a4, b10) {
    var t = typeof b10, c6;
    return b10 == null || t === "boolean" ? constant_default3(b10) : (t === "number" ? number_default : t === "string" ? (c6 = color(b10)) ? (b10 = c6, rgb_default) : string_default : b10 instanceof color ? rgb_default : b10 instanceof Date ? date_default : isNumberArray(b10) ? numberArray_default : Array.isArray(b10) ? genericArray : typeof b10.valueOf !== "function" && typeof b10.toString !== "function" || isNaN(b10) ? object_default : number_default)(a4, b10);
  }

  // node_modules/d3-interpolate/src/discrete.js
  function discrete_default(range5) {
    var n = range5.length;
    return function(t) {
      return range5[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }

  // node_modules/d3-interpolate/src/hue.js
  function hue_default(a4, b10) {
    var i = hue(+a4, +b10);
    return function(t) {
      var x6 = i(t);
      return x6 - 360 * Math.floor(x6 / 360);
    };
  }

  // node_modules/d3-interpolate/src/round.js
  function round_default(a4, b10) {
    return a4 = +a4, b10 = +b10, function(t) {
      return Math.round(a4 * (1 - t) + b10 * t);
    };
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees2 = 180 / Math.PI;
  var identity2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a4, b10, c6, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a4 * a4 + b10 * b10)) a4 /= scaleX, b10 /= scaleX;
    if (skewX = a4 * c6 + b10 * d) c6 -= a4 * skewX, d -= b10 * skewX;
    if (scaleY = Math.sqrt(c6 * c6 + d * d)) c6 /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a4 * d < b10 * c6) a4 = -a4, b10 = -b10, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b10, a4) * degrees2,
      skewX: Math.atan(skewX) * degrees2,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m4.isIdentity ? identity2 : decompose_default(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
  }
  function parseSvg(value) {
    if (value == null) return identity2;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity2;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s2) {
      return s2.length ? s2.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s2, q3) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push("translate(", null, pxComma, null, pxParen);
        q3.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s2.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a4, b10, s2, q3) {
      if (a4 !== b10) {
        if (a4 - b10 > 180) b10 += 360;
        else if (b10 - a4 > 180) a4 += 360;
        q3.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a4, b10) });
      } else if (b10) {
        s2.push(pop(s2) + "rotate(" + b10 + degParen);
      }
    }
    function skewX(a4, b10, s2, q3) {
      if (a4 !== b10) {
        q3.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a4, b10) });
      } else if (b10) {
        s2.push(pop(s2) + "skewX(" + b10 + degParen);
      }
    }
    function scale2(xa, ya, xb, yb, s2, q3) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
        q3.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a4, b10) {
      var s2 = [], q3 = [];
      a4 = parse(a4), b10 = parse(b10);
      translate(a4.translateX, a4.translateY, b10.translateX, b10.translateY, s2, q3);
      rotate(a4.rotate, b10.rotate, s2, q3);
      skewX(a4.skewX, b10.skewX, s2, q3);
      scale2(a4.scaleX, a4.scaleY, b10.scaleX, b10.scaleY, s2, q3);
      a4 = b10 = null;
      return function(t) {
        var i = -1, n = q3.length, o;
        while (++i < n) s2[(o = q3[i]).i] = o.x(t);
        return s2.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/zoom.js
  var epsilon2 = 1e-12;
  function cosh(x6) {
    return ((x6 = Math.exp(x6)) + 1 / x6) / 2;
  }
  function sinh(x6) {
    return ((x6 = Math.exp(x6)) - 1 / x6) / 2;
  }
  function tanh(x6) {
    return ((x6 = Math.exp(2 * x6)) - 1) / (x6 + 1);
  }
  var zoom_default = (function zoomRho(rho, rho2, rho4) {
    function zoom(p02, p1) {
      var ux0 = p02[0], uy0 = p02[1], w0 = p02[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S3;
      if (d2 < epsilon2) {
        S3 = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [
            ux0 + t * dx,
            uy0 + t * dy,
            w0 * Math.exp(rho * t * S3)
          ];
        };
      } else {
        var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
        S3 = (r1 - r0) / rho;
        i = function(t) {
          var s2 = t * S3, coshr0 = cosh(r0), u4 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
          return [
            ux0 + u4 * dx,
            uy0 + u4 * dy,
            w0 * coshr0 / cosh(rho * s2 + r0)
          ];
        };
      }
      i.duration = S3 * 1e3 * rho / Math.SQRT2;
      return i;
    }
    zoom.rho = function(_3) {
      var _1 = Math.max(1e-3, +_3), _22 = _1 * _1, _4 = _22 * _22;
      return zoomRho(_1, _22, _4);
    };
    return zoom;
  })(Math.SQRT2, 2, 4);

  // node_modules/d3-interpolate/src/hsl.js
  function hsl2(hue2) {
    return function(start2, end) {
      var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l2(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hsl_default = hsl2(hue);
  var hslLong = hsl2(nogamma);

  // node_modules/d3-interpolate/src/lab.js
  function lab2(start2, end) {
    var l2 = nogamma((start2 = lab(start2)).l, (end = lab(end)).l), a4 = nogamma(start2.a, end.a), b10 = nogamma(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.l = l2(t);
      start2.a = a4(t);
      start2.b = b10(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }

  // node_modules/d3-interpolate/src/hcl.js
  function hcl2(hue2) {
    return function(start2, end) {
      var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c6 = nogamma(start2.c, end.c), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.c = c6(t);
        start2.l = l2(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hcl_default = hcl2(hue);
  var hclLong = hcl2(nogamma);

  // node_modules/d3-interpolate/src/cubehelix.js
  function cubehelix2(hue2) {
    return (function cubehelixGamma(y5) {
      y5 = +y5;
      function cubehelix3(start2, end) {
        var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
        return function(t) {
          start2.h = h(t);
          start2.s = s2(t);
          start2.l = l2(Math.pow(t, y5));
          start2.opacity = opacity(t);
          return start2 + "";
        };
      }
      cubehelix3.gamma = cubehelixGamma;
      return cubehelix3;
    })(1);
  }
  var cubehelix_default = cubehelix2(hue);
  var cubehelixLong = cubehelix2(nogamma);

  // node_modules/d3-interpolate/src/piecewise.js
  function piecewise(interpolate, values) {
    if (values === void 0) values = interpolate, interpolate = value_default;
    var i = 0, n = values.length - 1, v4 = values[0], I2 = new Array(n < 0 ? 0 : n);
    while (i < n) I2[i] = interpolate(v4, v4 = values[++i]);
    return function(t) {
      var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
      return I2[i2](t - i2);
    };
  }

  // node_modules/d3-interpolate/src/quantize.js
  function quantize_default(interpolator, n) {
    var samples = new Array(n);
    for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
    return samples;
  }

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time2) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time2;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time2) {
    var t = new Timer();
    t.restart(callback, delay, time2);
    return t;
  }
  function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t03, t13 = taskHead, t22, time2 = Infinity;
    while (t13) {
      if (t13._call) {
        if (time2 > t13._time) time2 = t13._time;
        t03 = t13, t13 = t13._next;
      } else {
        t22 = t13._next, t13._next = null;
        t13 = t03 ? t03._next = t22 : taskHead = t22;
      }
    }
    taskTail = t03;
    sleep(time2);
  }
  function sleep(time2) {
    if (frame) return;
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time2 - clockNow;
    if (delay > 24) {
      if (time2 < Infinity) timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time2) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed) => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time2);
    return t;
  }

  // node_modules/d3-timer/src/interval.js
  function interval_default(callback, delay, time2) {
    var t = new Timer(), total = delay;
    if (delay == null) return t.restart(callback, delay, time2), t;
    t._restart = t.restart;
    t.restart = function(callback2, delay2, time3) {
      delay2 = +delay2, time3 = time3 == null ? now() : +time3;
      t._restart(function tick(elapsed) {
        elapsed += total;
        t._restart(tick, total += delay2, time3);
        callback2(elapsed);
      }, delay2, time3);
    };
    t.restart(callback, delay, time2);
    return t;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index3, group2, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id2 in schedules) return;
    create(node, id2, {
      name,
      index: index3,
      // For context during callback.
      group: group2,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set3(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self2) {
    var schedules = node.__transition, tween;
    schedules[id2] = self2;
    self2.timer = timer(schedule, 0, self2.time);
    function schedule(elapsed) {
      self2.state = SCHEDULED;
      self2.timer.restart(start2, self2.delay, self2.time);
      if (self2.delay <= elapsed) start2(elapsed - self2.delay);
    }
    function start2(elapsed) {
      var i, j3, n, o;
      if (self2.state !== SCHEDULED) return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self2.name) continue;
        if (o.state === STARTED) return timeout_default(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout_default(function() {
        if (self2.state === STARTED) {
          self2.state = RUNNING;
          self2.timer.restart(tick, self2.delay, self2.time);
          tick(elapsed);
        }
      });
      self2.state = STARTING;
      self2.on.call("start", node, node.__data__, self2.index, self2.group);
      if (self2.state !== STARTING) return;
      self2.state = STARTED;
      tween = new Array(n = self2.tween.length);
      for (i = 0, j3 = -1; i < n; ++i) {
        if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
          tween[++j3] = o;
        }
      }
      tween.length = j3 + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }
      if (self2.state === ENDING) {
        self2.on.call("end", node, node.__data__, self2.index, self2.group);
        stop();
      }
    }
    function stop() {
      self2.state = ENDED;
      self2.timer.stop();
      delete schedules[id2];
      for (var i in schedules) return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty4 = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty4 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty4) delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set3(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function() {
      var schedule = set3(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set3(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a4, b10) {
    var c6;
    return (typeof b10 === "number" ? number_default : b10 instanceof color ? rgb_default : (c6 = color(b10)) ? (b10 = c6, rgb_default) : string_default)(a4, b10);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t03, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t03 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t03;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t03, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t03 = (i0 = i) && attrInterpolate(name, i);
      return t03;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set3(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set3(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function") throw new Error();
    return function() {
      set3(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function() {
      var v4 = value.apply(this, arguments);
      if (typeof v4 !== "function") throw new Error();
      set3(this, id2).ease = v4;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, subgroup = subgroups[j3] = [], node, i = 0; i < n; ++i) {
        if ((node = group2[i]) && match.call(node, node.__data__, i, group2)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id) throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
      for (var group0 = groups0[j3], group1 = groups1[j3], n = group0.length, merge2 = merges[j3] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge2[i] = node;
        }
      }
    }
    for (; j3 < m0; ++j3) {
      merges[j3] = groups0[j3];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set3;
    return function() {
      var schedule = sit(this, id2), on2 = schedule.on;
      if (on2 !== on0) (on1 = (on0 = on2).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id2) return;
      if (parent) parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function") select = selector_default(select);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, subgroup = subgroups[j3] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group2[i]) && (subnode = select.call(node, node.__data__, i, group2))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function") select = selectorAll_default(select);
    for (var groups2 = this._groups, m4 = groups2.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, node, i = 0; i < n; ++i) {
        if (node = group2[i]) {
          for (var children2 = select.call(node, node.__data__, i, group2), child, inherit2 = get2(node, id2), k4 = 0, l2 = children2.length; k4 < l2; ++k4) {
            if (child = children2[k4]) {
              schedule_default(child, name, id2, k4, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule = set3(this, id2), on2 = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on2 !== on0 || listener0 !== listener) (on1 = (on0 = on2).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t03, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t03 = (i0 = i) && textInterpolate(i);
      return t03;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups2 = this._groups, m4 = groups2.length, j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, node, i = 0; i < n; ++i) {
        if (node = group2[i]) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i, group2, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups2, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0) resolve();
      } };
      that.each(function() {
        var schedule = set3(this, id2), on2 = schedule.on;
        if (on2 !== on0) {
          on1 = (on0 = on2).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0) resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups2, parents, name, id2) {
    this._groups = groups2;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default3,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // node_modules/d3-ease/src/linear.js
  var linear2 = (t) => +t;

  // node_modules/d3-ease/src/quad.js
  function quadIn(t) {
    return t * t;
  }
  function quadOut(t) {
    return t * (2 - t);
  }
  function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }

  // node_modules/d3-ease/src/cubic.js
  function cubicIn(t) {
    return t * t * t;
  }
  function cubicOut(t) {
    return --t * t * t + 1;
  }
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  // node_modules/d3-ease/src/poly.js
  var exponent = 3;
  var polyIn = (function custom(e) {
    e = +e;
    function polyIn2(t) {
      return Math.pow(t, e);
    }
    polyIn2.exponent = custom;
    return polyIn2;
  })(exponent);
  var polyOut = (function custom2(e) {
    e = +e;
    function polyOut2(t) {
      return 1 - Math.pow(1 - t, e);
    }
    polyOut2.exponent = custom2;
    return polyOut2;
  })(exponent);
  var polyInOut = (function custom3(e) {
    e = +e;
    function polyInOut2(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut2.exponent = custom3;
    return polyInOut2;
  })(exponent);

  // node_modules/d3-ease/src/sin.js
  var pi = Math.PI;
  var halfPi = pi / 2;
  function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
  }
  function sinOut(t) {
    return Math.sin(t * halfPi);
  }
  function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
  }

  // node_modules/d3-ease/src/math.js
  function tpmt(x6) {
    return (Math.pow(2, -10 * x6) - 9765625e-10) * 1.0009775171065494;
  }

  // node_modules/d3-ease/src/exp.js
  function expIn(t) {
    return tpmt(1 - +t);
  }
  function expOut(t) {
    return 1 - tpmt(t);
  }
  function expInOut(t) {
    return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
  }

  // node_modules/d3-ease/src/circle.js
  function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function circleOut(t) {
    return Math.sqrt(1 - --t * t);
  }
  function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }

  // node_modules/d3-ease/src/bounce.js
  var b1 = 4 / 11;
  var b2 = 6 / 11;
  var b3 = 8 / 11;
  var b4 = 3 / 4;
  var b5 = 9 / 11;
  var b6 = 10 / 11;
  var b7 = 15 / 16;
  var b8 = 21 / 22;
  var b9 = 63 / 64;
  var b0 = 1 / b1 / b1;
  function bounceIn(t) {
    return 1 - bounceOut(1 - t);
  }
  function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
  }
  function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
  }

  // node_modules/d3-ease/src/back.js
  var overshoot = 1.70158;
  var backIn = (function custom4(s2) {
    s2 = +s2;
    function backIn2(t) {
      return (t = +t) * t * (s2 * (t - 1) + t);
    }
    backIn2.overshoot = custom4;
    return backIn2;
  })(overshoot);
  var backOut = (function custom5(s2) {
    s2 = +s2;
    function backOut2(t) {
      return --t * t * ((t + 1) * s2 + t) + 1;
    }
    backOut2.overshoot = custom5;
    return backOut2;
  })(overshoot);
  var backInOut = (function custom6(s2) {
    s2 = +s2;
    function backInOut2(t) {
      return ((t *= 2) < 1 ? t * t * ((s2 + 1) * t - s2) : (t -= 2) * t * ((s2 + 1) * t + s2) + 2) / 2;
    }
    backInOut2.overshoot = custom6;
    return backInOut2;
  })(overshoot);

  // node_modules/d3-ease/src/elastic.js
  var tau = 2 * Math.PI;
  var amplitude = 1;
  var period = 0.3;
  var elasticIn = (function custom7(a4, p3) {
    var s2 = Math.asin(1 / (a4 = Math.max(1, a4))) * (p3 /= tau);
    function elasticIn2(t) {
      return a4 * tpmt(- --t) * Math.sin((s2 - t) / p3);
    }
    elasticIn2.amplitude = function(a5) {
      return custom7(a5, p3 * tau);
    };
    elasticIn2.period = function(p4) {
      return custom7(a4, p4);
    };
    return elasticIn2;
  })(amplitude, period);
  var elasticOut = (function custom8(a4, p3) {
    var s2 = Math.asin(1 / (a4 = Math.max(1, a4))) * (p3 /= tau);
    function elasticOut2(t) {
      return 1 - a4 * tpmt(t = +t) * Math.sin((t + s2) / p3);
    }
    elasticOut2.amplitude = function(a5) {
      return custom8(a5, p3 * tau);
    };
    elasticOut2.period = function(p4) {
      return custom8(a4, p4);
    };
    return elasticOut2;
  })(amplitude, period);
  var elasticInOut = (function custom9(a4, p3) {
    var s2 = Math.asin(1 / (a4 = Math.max(1, a4))) * (p3 /= tau);
    function elasticInOut2(t) {
      return ((t = t * 2 - 1) < 0 ? a4 * tpmt(-t) * Math.sin((s2 - t) / p3) : 2 - a4 * tpmt(t) * Math.sin((s2 + t) / p3)) / 2;
    }
    elasticInOut2.amplitude = function(a5) {
      return custom9(a5, p3 * tau);
    };
    elasticInOut2.period = function(p4) {
      return custom9(a4, p4);
    };
    return elasticInOut2;
  })(amplitude, period);

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups2 = this._groups, m4 = groups2.length, j3 = 0; j3 < m4; ++j3) {
      for (var group2 = groups2[j3], n = group2.length, node, i = 0; i < n; ++i) {
        if (node = group2[i]) {
          schedule_default(node, name, id2, i, group2, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups2, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-transition/src/active.js
  var root2 = [null];
  function active_default(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
      name = name == null ? null : name + "";
      for (i in schedules) {
        if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
          return new Transition([[node]], root2, name, +i);
        }
      }
    }
    return null;
  }

  // node_modules/d3-brush/src/constant.js
  var constant_default4 = (x6) => () => x6;

  // node_modules/d3-brush/src/event.js
  function BrushEvent(type2, {
    sourceEvent,
    target,
    selection: selection2,
    mode: mode2,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type2, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      selection: { value: selection2, enumerable: true, configurable: true },
      mode: { value: mode2, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }

  // node_modules/d3-brush/src/noevent.js
  function nopropagation2(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default2(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-brush/src/brush.js
  var MODE_DRAG = { name: "drag" };
  var MODE_SPACE = { name: "space" };
  var MODE_HANDLE = { name: "handle" };
  var MODE_CENTER = { name: "center" };
  var { abs, max: max2, min: min2 } = Math;
  function number1(e) {
    return [+e[0], +e[1]];
  }
  function number22(e) {
    return [number1(e[0]), number1(e[1])];
  }
  var X3 = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function(x6, e) {
      return x6 == null ? null : [[+x6[0], e[0][1]], [+x6[1], e[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y3 = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y5, e) {
      return y5 == null ? null : [[e[0][0], +y5[0]], [e[1][0], +y5[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function(xy) {
      return xy == null ? null : number22(xy);
    },
    output: function(xy) {
      return xy;
    }
  };
  var cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
  };
  var flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
  };
  var signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
  };
  var signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
  };
  function type(t) {
    return { type: t };
  }
  function defaultFilter2(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultExtent() {
    var svg2 = this.ownerSVGElement || this;
    if (svg2.hasAttribute("viewBox")) {
      svg2 = svg2.viewBox.baseVal;
      return [[svg2.x, svg2.y], [svg2.x + svg2.width, svg2.y + svg2.height]];
    }
    return [[0, 0], [svg2.width.baseVal.value, svg2.height.baseVal.value]];
  }
  function defaultTouchable2() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function local2(node) {
    while (!node.__brush) if (!(node = node.parentNode)) return;
    return node.__brush;
  }
  function empty3(extent2) {
    return extent2[0][0] === extent2[1][0] || extent2[0][1] === extent2[1][1];
  }
  function brushSelection(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
  }
  function brushX() {
    return brush(X3);
  }
  function brushY() {
    return brush(Y3);
  }
  function brush_default() {
    return brush(XY);
  }
  function brush(dim) {
    var extent2 = defaultExtent, filter3 = defaultFilter2, touchable = defaultTouchable2, keys = true, listeners = dispatch_default("start", "brush", "end"), handleSize = 6, touchending;
    function brush2(group2) {
      var overlay = group2.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
      overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
        var extent3 = local2(this).extent;
        select_default2(this).attr("x", extent3[0][0]).attr("y", extent3[0][1]).attr("width", extent3[1][0] - extent3[0][0]).attr("height", extent3[1][1] - extent3[0][1]);
      });
      group2.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var handle = group2.selectAll(".handle").data(dim.handles, function(d) {
        return d.type;
      });
      handle.exit().remove();
      handle.enter().append("rect").attr("class", function(d) {
        return "handle handle--" + d.type;
      }).attr("cursor", function(d) {
        return cursors[d.type];
      });
      group2.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush2.move = function(group2, selection2, event) {
      if (group2.tween) {
        group2.on("start.brush", function(event2) {
          emitter(this, arguments).beforestart().start(event2);
        }).on("interrupt.brush end.brush", function(event2) {
          emitter(this, arguments).end(event2);
        }).tween("brush", function() {
          var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(this, arguments) : selection2, state.extent), i = value_default(selection0, selection1);
          function tween(t) {
            state.selection = t === 1 && selection1 === null ? null : i(t);
            redraw.call(that);
            emit.brush();
          }
          return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
      } else {
        group2.each(function() {
          var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(that, args) : selection2, state.extent), emit = emitter(that, args).beforestart();
          interrupt_default(that);
          state.selection = selection1 === null ? null : selection1;
          redraw.call(that);
          emit.start(event).brush(event).end(event);
        });
      }
    };
    brush2.clear = function(group2, event) {
      brush2.move(group2, null, event);
    };
    function redraw() {
      var group2 = select_default2(this), selection2 = local2(this).selection;
      if (selection2) {
        group2.selectAll(".selection").style("display", null).attr("x", selection2[0][0]).attr("y", selection2[0][1]).attr("width", selection2[1][0] - selection2[0][0]).attr("height", selection2[1][1] - selection2[0][1]);
        group2.selectAll(".handle").style("display", null).attr("x", function(d) {
          return d.type[d.type.length - 1] === "e" ? selection2[1][0] - handleSize / 2 : selection2[0][0] - handleSize / 2;
        }).attr("y", function(d) {
          return d.type[0] === "s" ? selection2[1][1] - handleSize / 2 : selection2[0][1] - handleSize / 2;
        }).attr("width", function(d) {
          return d.type === "n" || d.type === "s" ? selection2[1][0] - selection2[0][0] + handleSize : handleSize;
        }).attr("height", function(d) {
          return d.type === "e" || d.type === "w" ? selection2[1][1] - selection2[0][1] + handleSize : handleSize;
        });
      } else {
        group2.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }
    }
    function emitter(that, args, clean) {
      var emit = that.__brush.emitter;
      return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
      this.that = that;
      this.args = args;
      this.state = that.__brush;
      this.active = 0;
      this.clean = clean;
    }
    Emitter.prototype = {
      beforestart: function() {
        if (++this.active === 1) this.state.emitter = this, this.starting = true;
        return this;
      },
      start: function(event, mode2) {
        if (this.starting) this.starting = false, this.emit("start", event, mode2);
        else this.emit("brush", event);
        return this;
      },
      brush: function(event, mode2) {
        this.emit("brush", event, mode2);
        return this;
      },
      end: function(event, mode2) {
        if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode2);
        return this;
      },
      emit: function(type2, event, mode2) {
        var d = select_default2(this.that).datum();
        listeners.call(
          type2,
          this.that,
          new BrushEvent(type2, {
            sourceEvent: event,
            target: brush2,
            selection: dim.output(this.state.selection),
            mode: mode2,
            dispatch: listeners
          }),
          d
        );
      }
    };
    function started(event) {
      if (touchending && !event.touches) return;
      if (!filter3.apply(this, arguments)) return;
      var that = this, type2 = event.target.__data__.type, mode2 = (keys && event.metaKey ? type2 = "overlay" : type2) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y3 ? null : signsX[type2], signY = dim === X3 ? null : signsY[type2], state = local2(that), extent3 = state.extent, selection2 = state.selection, W3 = extent3[0][0], w0, w1, N3 = extent3[0][1], n0, n1, E3 = extent3[1][0], e0, e1, S3 = extent3[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, points = Array.from(event.touches || [event], (t) => {
        const i = t.identifier;
        t = pointer_default(t, that);
        t.point0 = t.slice();
        t.identifier = i;
        return t;
      });
      interrupt_default(that);
      var emit = emitter(that, arguments, true).beforestart();
      if (type2 === "overlay") {
        if (selection2) moving = true;
        const pts = [points[0], points[1] || points[0]];
        state.selection = selection2 = [[
          w0 = dim === Y3 ? W3 : min2(pts[0][0], pts[1][0]),
          n0 = dim === X3 ? N3 : min2(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y3 ? E3 : max2(pts[0][0], pts[1][0]),
          s0 = dim === X3 ? S3 : max2(pts[0][1], pts[1][1])
        ]];
        if (points.length > 1) move(event);
      } else {
        w0 = selection2[0][0];
        n0 = selection2[0][1];
        e0 = selection2[1][0];
        s0 = selection2[1][1];
      }
      w1 = w0;
      n1 = n0;
      e1 = e0;
      s1 = s0;
      var group2 = select_default2(that).attr("pointer-events", "none");
      var overlay = group2.selectAll(".overlay").attr("cursor", cursors[type2]);
      if (event.touches) {
        emit.moved = moved;
        emit.ended = ended;
      } else {
        var view = select_default2(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
        if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
        nodrag_default(event.view);
      }
      redraw.call(that);
      emit.start(event, mode2.name);
      function moved(event2) {
        for (const p3 of event2.changedTouches || [event2]) {
          for (const d of points)
            if (d.identifier === p3.identifier) d.cur = pointer_default(p3, that);
        }
        if (shifting && !lockX && !lockY && points.length === 1) {
          const point6 = points[0];
          if (abs(point6.cur[0] - point6[0]) > abs(point6.cur[1] - point6[1]))
            lockY = true;
          else
            lockX = true;
        }
        for (const point6 of points)
          if (point6.cur) point6[0] = point6.cur[0], point6[1] = point6.cur[1];
        moving = true;
        noevent_default2(event2);
        move(event2);
      }
      function move(event2) {
        const point6 = points[0], point0 = point6.point0;
        var t;
        dx = point6[0] - point0[0];
        dy = point6[1] - point0[1];
        switch (mode2) {
          case MODE_SPACE:
          case MODE_DRAG: {
            if (signX) dx = max2(W3 - w0, min2(E3 - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
            if (signY) dy = max2(N3 - n0, min2(S3 - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
            break;
          }
          case MODE_HANDLE: {
            if (points[1]) {
              if (signX) w1 = max2(W3, min2(E3, points[0][0])), e1 = max2(W3, min2(E3, points[1][0])), signX = 1;
              if (signY) n1 = max2(N3, min2(S3, points[0][1])), s1 = max2(N3, min2(S3, points[1][1])), signY = 1;
            } else {
              if (signX < 0) dx = max2(W3 - w0, min2(E3 - w0, dx)), w1 = w0 + dx, e1 = e0;
              else if (signX > 0) dx = max2(W3 - e0, min2(E3 - e0, dx)), w1 = w0, e1 = e0 + dx;
              if (signY < 0) dy = max2(N3 - n0, min2(S3 - n0, dy)), n1 = n0 + dy, s1 = s0;
              else if (signY > 0) dy = max2(N3 - s0, min2(S3 - s0, dy)), n1 = n0, s1 = s0 + dy;
            }
            break;
          }
          case MODE_CENTER: {
            if (signX) w1 = max2(W3, min2(E3, w0 - dx * signX)), e1 = max2(W3, min2(E3, e0 + dx * signX));
            if (signY) n1 = max2(N3, min2(S3, n0 - dy * signY)), s1 = max2(N3, min2(S3, s0 + dy * signY));
            break;
          }
        }
        if (e1 < w1) {
          signX *= -1;
          t = w0, w0 = e0, e0 = t;
          t = w1, w1 = e1, e1 = t;
          if (type2 in flipX) overlay.attr("cursor", cursors[type2 = flipX[type2]]);
        }
        if (s1 < n1) {
          signY *= -1;
          t = n0, n0 = s0, s0 = t;
          t = n1, n1 = s1, s1 = t;
          if (type2 in flipY) overlay.attr("cursor", cursors[type2 = flipY[type2]]);
        }
        if (state.selection) selection2 = state.selection;
        if (lockX) w1 = selection2[0][0], e1 = selection2[1][0];
        if (lockY) n1 = selection2[0][1], s1 = selection2[1][1];
        if (selection2[0][0] !== w1 || selection2[0][1] !== n1 || selection2[1][0] !== e1 || selection2[1][1] !== s1) {
          state.selection = [[w1, n1], [e1, s1]];
          redraw.call(that);
          emit.brush(event2, mode2.name);
        }
      }
      function ended(event2) {
        nopropagation2(event2);
        if (event2.touches) {
          if (event2.touches.length) return;
          if (touchending) clearTimeout(touchending);
          touchending = setTimeout(function() {
            touchending = null;
          }, 500);
        } else {
          yesdrag(event2.view, moving);
          view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
        }
        group2.attr("pointer-events", "all");
        overlay.attr("cursor", cursors.overlay);
        if (state.selection) selection2 = state.selection;
        if (empty3(selection2)) state.selection = null, redraw.call(that);
        emit.end(event2, mode2.name);
      }
      function keydowned(event2) {
        switch (event2.keyCode) {
          case 16: {
            shifting = signX && signY;
            break;
          }
          case 18: {
            if (mode2 === MODE_HANDLE) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode2 = MODE_CENTER;
              move(event2);
            }
            break;
          }
          case 32: {
            if (mode2 === MODE_HANDLE || mode2 === MODE_CENTER) {
              if (signX < 0) e0 = e1 - dx;
              else if (signX > 0) w0 = w1 - dx;
              if (signY < 0) s0 = s1 - dy;
              else if (signY > 0) n0 = n1 - dy;
              mode2 = MODE_SPACE;
              overlay.attr("cursor", cursors.selection);
              move(event2);
            }
            break;
          }
          default:
            return;
        }
        noevent_default2(event2);
      }
      function keyupped(event2) {
        switch (event2.keyCode) {
          case 16: {
            if (shifting) {
              lockX = lockY = shifting = false;
              move(event2);
            }
            break;
          }
          case 18: {
            if (mode2 === MODE_CENTER) {
              if (signX < 0) e0 = e1;
              else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1;
              else if (signY > 0) n0 = n1;
              mode2 = MODE_HANDLE;
              move(event2);
            }
            break;
          }
          case 32: {
            if (mode2 === MODE_SPACE) {
              if (event2.altKey) {
                if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                mode2 = MODE_CENTER;
              } else {
                if (signX < 0) e0 = e1;
                else if (signX > 0) w0 = w1;
                if (signY < 0) s0 = s1;
                else if (signY > 0) n0 = n1;
                mode2 = MODE_HANDLE;
              }
              overlay.attr("cursor", cursors[type2]);
              move(event2);
            }
            break;
          }
          default:
            return;
        }
        noevent_default2(event2);
      }
    }
    function touchmoved(event) {
      emitter(this, arguments).moved(event);
    }
    function touchended(event) {
      emitter(this, arguments).ended(event);
    }
    function initialize() {
      var state = this.__brush || { selection: null };
      state.extent = number22(extent2.apply(this, arguments));
      state.dim = dim;
      return state;
    }
    brush2.extent = function(_3) {
      return arguments.length ? (extent2 = typeof _3 === "function" ? _3 : constant_default4(number22(_3)), brush2) : extent2;
    };
    brush2.filter = function(_3) {
      return arguments.length ? (filter3 = typeof _3 === "function" ? _3 : constant_default4(!!_3), brush2) : filter3;
    };
    brush2.touchable = function(_3) {
      return arguments.length ? (touchable = typeof _3 === "function" ? _3 : constant_default4(!!_3), brush2) : touchable;
    };
    brush2.handleSize = function(_3) {
      return arguments.length ? (handleSize = +_3, brush2) : handleSize;
    };
    brush2.keyModifiers = function(_3) {
      return arguments.length ? (keys = !!_3, brush2) : keys;
    };
    brush2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? brush2 : value;
    };
    return brush2;
  }

  // node_modules/d3-chord/src/math.js
  var abs2 = Math.abs;
  var cos = Math.cos;
  var sin = Math.sin;
  var pi2 = Math.PI;
  var halfPi2 = pi2 / 2;
  var tau2 = pi2 * 2;
  var max3 = Math.max;
  var epsilon3 = 1e-12;

  // node_modules/d3-chord/src/chord.js
  function range3(i, j3) {
    return Array.from({ length: j3 - i }, (_3, k4) => i + k4);
  }
  function compareValue(compare) {
    return function(a4, b10) {
      return compare(
        a4.source.value + a4.target.value,
        b10.source.value + b10.target.value
      );
    };
  }
  function chord_default() {
    return chord(false, false);
  }
  function chordTranspose() {
    return chord(false, true);
  }
  function chordDirected() {
    return chord(true, false);
  }
  function chord(directed, transpose2) {
    var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
    function chord2(matrix) {
      var n = matrix.length, groupSums = new Array(n), groupIndex = range3(0, n), chords = new Array(n * n), groups2 = new Array(n), k4 = 0, dx;
      matrix = Float64Array.from({ length: n * n }, transpose2 ? (_3, i) => matrix[i % n][i / n | 0] : (_3, i) => matrix[i / n | 0][i % n]);
      for (let i = 0; i < n; ++i) {
        let x6 = 0;
        for (let j3 = 0; j3 < n; ++j3) x6 += matrix[i * n + j3] + directed * matrix[j3 * n + i];
        k4 += groupSums[i] = x6;
      }
      k4 = max3(0, tau2 - padAngle * n) / k4;
      dx = k4 ? padAngle : tau2 / n;
      {
        let x6 = 0;
        if (sortGroups) groupIndex.sort((a4, b10) => sortGroups(groupSums[a4], groupSums[b10]));
        for (const i of groupIndex) {
          const x06 = x6;
          if (directed) {
            const subgroupIndex = range3(~n + 1, n).filter((j3) => j3 < 0 ? matrix[~j3 * n + i] : matrix[i * n + j3]);
            if (sortSubgroups) subgroupIndex.sort((a4, b10) => sortSubgroups(a4 < 0 ? -matrix[~a4 * n + i] : matrix[i * n + a4], b10 < 0 ? -matrix[~b10 * n + i] : matrix[i * n + b10]));
            for (const j3 of subgroupIndex) {
              if (j3 < 0) {
                const chord3 = chords[~j3 * n + i] || (chords[~j3 * n + i] = { source: null, target: null });
                chord3.target = { index: i, startAngle: x6, endAngle: x6 += matrix[~j3 * n + i] * k4, value: matrix[~j3 * n + i] };
              } else {
                const chord3 = chords[i * n + j3] || (chords[i * n + j3] = { source: null, target: null });
                chord3.source = { index: i, startAngle: x6, endAngle: x6 += matrix[i * n + j3] * k4, value: matrix[i * n + j3] };
              }
            }
            groups2[i] = { index: i, startAngle: x06, endAngle: x6, value: groupSums[i] };
          } else {
            const subgroupIndex = range3(0, n).filter((j3) => matrix[i * n + j3] || matrix[j3 * n + i]);
            if (sortSubgroups) subgroupIndex.sort((a4, b10) => sortSubgroups(matrix[i * n + a4], matrix[i * n + b10]));
            for (const j3 of subgroupIndex) {
              let chord3;
              if (i < j3) {
                chord3 = chords[i * n + j3] || (chords[i * n + j3] = { source: null, target: null });
                chord3.source = { index: i, startAngle: x6, endAngle: x6 += matrix[i * n + j3] * k4, value: matrix[i * n + j3] };
              } else {
                chord3 = chords[j3 * n + i] || (chords[j3 * n + i] = { source: null, target: null });
                chord3.target = { index: i, startAngle: x6, endAngle: x6 += matrix[i * n + j3] * k4, value: matrix[i * n + j3] };
                if (i === j3) chord3.source = chord3.target;
              }
              if (chord3.source && chord3.target && chord3.source.value < chord3.target.value) {
                const source = chord3.source;
                chord3.source = chord3.target;
                chord3.target = source;
              }
            }
            groups2[i] = { index: i, startAngle: x06, endAngle: x6, value: groupSums[i] };
          }
          x6 += dx;
        }
      }
      chords = Object.values(chords);
      chords.groups = groups2;
      return sortChords ? chords.sort(sortChords) : chords;
    }
    chord2.padAngle = function(_3) {
      return arguments.length ? (padAngle = max3(0, _3), chord2) : padAngle;
    };
    chord2.sortGroups = function(_3) {
      return arguments.length ? (sortGroups = _3, chord2) : sortGroups;
    };
    chord2.sortSubgroups = function(_3) {
      return arguments.length ? (sortSubgroups = _3, chord2) : sortSubgroups;
    };
    chord2.sortChords = function(_3) {
      return arguments.length ? (_3 == null ? sortChords = null : (sortChords = compareValue(_3))._ = _3, chord2) : sortChords && sortChords._;
    };
    return chord2;
  }

  // node_modules/d3-path/src/path.js
  var pi3 = Math.PI;
  var tau3 = 2 * pi3;
  var epsilon4 = 1e-6;
  var tauEpsilon = tau3 - epsilon4;
  function append(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += arguments[i] + strings[i];
    }
  }
  function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k4 = 10 ** d;
    return function(strings) {
      this._ += strings[0];
      for (let i = 1, n = strings.length; i < n; ++i) {
        this._ += Math.round(arguments[i] * k4) / k4 + strings[i];
      }
    };
  }
  var Path = class {
    constructor(digits) {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null;
      this._ = "";
      this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x6, y5) {
      this._append`M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y5}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(x6, y5) {
      this._append`L${this._x1 = +x6},${this._y1 = +y5}`;
    }
    quadraticCurveTo(x12, y12, x6, y5) {
      this._append`Q${+x12},${+y12},${this._x1 = +x6},${this._y1 = +y5}`;
    }
    bezierCurveTo(x12, y12, x22, y22, x6, y5) {
      this._append`C${+x12},${+y12},${+x22},${+y22},${this._x1 = +x6},${this._y1 = +y5}`;
    }
    arcTo(x12, y12, x22, y22, r) {
      x12 = +x12, y12 = +y12, x22 = +x22, y22 = +y22, r = +r;
      if (r < 0) throw new Error(`negative radius: ${r}`);
      let x06 = this._x1, y06 = this._y1, x21 = x22 - x12, y21 = y22 - y12, x01 = x06 - x12, y01 = y06 - y12, l01_2 = x01 * x01 + y01 * y01;
      if (this._x1 === null) {
        this._append`M${this._x1 = x12},${this._y1 = y12}`;
      } else if (!(l01_2 > epsilon4)) ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon4) || !r) {
        this._append`L${this._x1 = x12},${this._y1 = y12}`;
      } else {
        let x20 = x22 - x06, y20 = y22 - y06, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l2 = r * Math.tan((pi3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l2 / l01, t21 = l2 / l21;
        if (Math.abs(t01 - 1) > epsilon4) {
          this._append`L${x12 + t01 * x01},${y12 + t01 * y01}`;
        }
        this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x12 + t21 * x21},${this._y1 = y12 + t21 * y21}`;
      }
    }
    arc(x6, y5, r, a0, a1, ccw) {
      x6 = +x6, y5 = +y5, r = +r, ccw = !!ccw;
      if (r < 0) throw new Error(`negative radius: ${r}`);
      let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x06 = x6 + dx, y06 = y5 + dy, cw = 1 ^ ccw, da2 = ccw ? a0 - a1 : a1 - a0;
      if (this._x1 === null) {
        this._append`M${x06},${y06}`;
      } else if (Math.abs(this._x1 - x06) > epsilon4 || Math.abs(this._y1 - y06) > epsilon4) {
        this._append`L${x06},${y06}`;
      }
      if (!r) return;
      if (da2 < 0) da2 = da2 % tau3 + tau3;
      if (da2 > tauEpsilon) {
        this._append`A${r},${r},0,1,${cw},${x6 - dx},${y5 - dy}A${r},${r},0,1,${cw},${this._x1 = x06},${this._y1 = y06}`;
      } else if (da2 > epsilon4) {
        this._append`A${r},${r},0,${+(da2 >= pi3)},${cw},${this._x1 = x6 + r * Math.cos(a1)},${this._y1 = y5 + r * Math.sin(a1)}`;
      }
    }
    rect(x6, y5, w3, h) {
      this._append`M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y5}h${w3 = +w3}v${+h}h${-w3}Z`;
    }
    toString() {
      return this._;
    }
  };
  function path() {
    return new Path();
  }
  path.prototype = Path.prototype;
  function pathRound(digits = 3) {
    return new Path(+digits);
  }

  // node_modules/d3-chord/src/array.js
  var slice2 = Array.prototype.slice;

  // node_modules/d3-chord/src/constant.js
  function constant_default5(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-chord/src/ribbon.js
  function defaultSource(d) {
    return d.source;
  }
  function defaultTarget(d) {
    return d.target;
  }
  function defaultRadius(d) {
    return d.radius;
  }
  function defaultStartAngle(d) {
    return d.startAngle;
  }
  function defaultEndAngle(d) {
    return d.endAngle;
  }
  function defaultPadAngle() {
    return 0;
  }
  function defaultArrowheadRadius() {
    return 10;
  }
  function ribbon(headRadius) {
    var source = defaultSource, target = defaultTarget, sourceRadius = defaultRadius, targetRadius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, padAngle = defaultPadAngle, context = null;
    function ribbon2() {
      var buffer, s2 = source.apply(this, arguments), t = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = slice2.call(arguments), sr2 = +sourceRadius.apply(this, (argv[0] = s2, argv)), sa0 = startAngle.apply(this, argv) - halfPi2, sa1 = endAngle.apply(this, argv) - halfPi2, tr2 = +targetRadius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi2, ta1 = endAngle.apply(this, argv) - halfPi2;
      if (!context) context = buffer = path();
      if (ap > epsilon3) {
        if (abs2(sa1 - sa0) > ap * 2 + epsilon3) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);
        else sa0 = sa1 = (sa0 + sa1) / 2;
        if (abs2(ta1 - ta0) > ap * 2 + epsilon3) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);
        else ta0 = ta1 = (ta0 + ta1) / 2;
      }
      context.moveTo(sr2 * cos(sa0), sr2 * sin(sa0));
      context.arc(0, 0, sr2, sa0, sa1);
      if (sa0 !== ta0 || sa1 !== ta1) {
        if (headRadius) {
          var hr = +headRadius.apply(this, arguments), tr22 = tr2 - hr, ta2 = (ta0 + ta1) / 2;
          context.quadraticCurveTo(0, 0, tr22 * cos(ta0), tr22 * sin(ta0));
          context.lineTo(tr2 * cos(ta2), tr2 * sin(ta2));
          context.lineTo(tr22 * cos(ta1), tr22 * sin(ta1));
        } else {
          context.quadraticCurveTo(0, 0, tr2 * cos(ta0), tr2 * sin(ta0));
          context.arc(0, 0, tr2, ta0, ta1);
        }
      }
      context.quadraticCurveTo(0, 0, sr2 * cos(sa0), sr2 * sin(sa0));
      context.closePath();
      if (buffer) return context = null, buffer + "" || null;
    }
    if (headRadius) ribbon2.headRadius = function(_3) {
      return arguments.length ? (headRadius = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : headRadius;
    };
    ribbon2.radius = function(_3) {
      return arguments.length ? (sourceRadius = targetRadius = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : sourceRadius;
    };
    ribbon2.sourceRadius = function(_3) {
      return arguments.length ? (sourceRadius = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : sourceRadius;
    };
    ribbon2.targetRadius = function(_3) {
      return arguments.length ? (targetRadius = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : targetRadius;
    };
    ribbon2.startAngle = function(_3) {
      return arguments.length ? (startAngle = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : startAngle;
    };
    ribbon2.endAngle = function(_3) {
      return arguments.length ? (endAngle = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : endAngle;
    };
    ribbon2.padAngle = function(_3) {
      return arguments.length ? (padAngle = typeof _3 === "function" ? _3 : constant_default5(+_3), ribbon2) : padAngle;
    };
    ribbon2.source = function(_3) {
      return arguments.length ? (source = _3, ribbon2) : source;
    };
    ribbon2.target = function(_3) {
      return arguments.length ? (target = _3, ribbon2) : target;
    };
    ribbon2.context = function(_3) {
      return arguments.length ? (context = _3 == null ? null : _3, ribbon2) : context;
    };
    return ribbon2;
  }
  function ribbon_default() {
    return ribbon();
  }
  function ribbonArrow() {
    return ribbon(defaultArrowheadRadius);
  }

  // node_modules/d3-contour/src/array.js
  var array3 = Array.prototype;
  var slice3 = array3.slice;

  // node_modules/d3-contour/src/ascending.js
  function ascending_default(a4, b10) {
    return a4 - b10;
  }

  // node_modules/d3-contour/src/area.js
  function area_default(ring) {
    var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
    while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
    return area;
  }

  // node_modules/d3-contour/src/constant.js
  var constant_default6 = (x6) => () => x6;

  // node_modules/d3-contour/src/contains.js
  function contains_default(ring, hole) {
    var i = -1, n = hole.length, c6;
    while (++i < n) if (c6 = ringContains(ring, hole[i])) return c6;
    return 0;
  }
  function ringContains(ring, point6) {
    var x6 = point6[0], y5 = point6[1], contains = -1;
    for (var i = 0, n = ring.length, j3 = n - 1; i < n; j3 = i++) {
      var pi6 = ring[i], xi = pi6[0], yi = pi6[1], pj = ring[j3], xj = pj[0], yj = pj[1];
      if (segmentContains(pi6, pj, point6)) return 0;
      if (yi > y5 !== yj > y5 && x6 < (xj - xi) * (y5 - yi) / (yj - yi) + xi) contains = -contains;
    }
    return contains;
  }
  function segmentContains(a4, b10, c6) {
    var i;
    return collinear(a4, b10, c6) && within(a4[i = +(a4[0] === b10[0])], c6[i], b10[i]);
  }
  function collinear(a4, b10, c6) {
    return (b10[0] - a4[0]) * (c6[1] - a4[1]) === (c6[0] - a4[0]) * (b10[1] - a4[1]);
  }
  function within(p3, q3, r) {
    return p3 <= q3 && q3 <= r || r <= q3 && q3 <= p3;
  }

  // node_modules/d3-contour/src/noop.js
  function noop_default() {
  }

  // node_modules/d3-contour/src/contours.js
  var cases = [
    [],
    [[[1, 1.5], [0.5, 1]]],
    [[[1.5, 1], [1, 1.5]]],
    [[[1.5, 1], [0.5, 1]]],
    [[[1, 0.5], [1.5, 1]]],
    [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
    [[[1, 0.5], [1, 1.5]]],
    [[[1, 0.5], [0.5, 1]]],
    [[[0.5, 1], [1, 0.5]]],
    [[[1, 1.5], [1, 0.5]]],
    [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
    [[[1.5, 1], [1, 0.5]]],
    [[[0.5, 1], [1.5, 1]]],
    [[[1, 1.5], [1.5, 1]]],
    [[[0.5, 1], [1, 1.5]]],
    []
  ];
  function contours_default() {
    var dx = 1, dy = 1, threshold2 = thresholdSturges, smooth = smoothLinear;
    function contours(values) {
      var tz = threshold2(values);
      if (!Array.isArray(tz)) {
        const e = extent(values, finite);
        tz = ticks(...nice(e[0], e[1], tz), tz);
        while (tz[tz.length - 1] >= e[1]) tz.pop();
        while (tz[1] < e[0]) tz.shift();
      } else {
        tz = tz.slice().sort(ascending_default);
      }
      return tz.map((value) => contour(values, value));
    }
    function contour(values, value) {
      const v4 = value == null ? NaN : +value;
      if (isNaN(v4)) throw new Error(`invalid value: ${value}`);
      var polygons = [], holes = [];
      isorings(values, v4, function(ring) {
        smooth(ring, values, v4);
        if (area_default(ring) > 0) polygons.push([ring]);
        else holes.push(ring);
      });
      holes.forEach(function(hole) {
        for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
          if (contains_default((polygon = polygons[i])[0], hole) !== -1) {
            polygon.push(hole);
            return;
          }
        }
      });
      return {
        type: "MultiPolygon",
        value,
        coordinates: polygons
      };
    }
    function isorings(values, value, callback) {
      var fragmentByStart = new Array(), fragmentByEnd = new Array(), x6, y5, t03, t13, t22, t32;
      x6 = y5 = -1;
      t13 = above(values[0], value);
      cases[t13 << 1].forEach(stitch);
      while (++x6 < dx - 1) {
        t03 = t13, t13 = above(values[x6 + 1], value);
        cases[t03 | t13 << 1].forEach(stitch);
      }
      cases[t13 << 0].forEach(stitch);
      while (++y5 < dy - 1) {
        x6 = -1;
        t13 = above(values[y5 * dx + dx], value);
        t22 = above(values[y5 * dx], value);
        cases[t13 << 1 | t22 << 2].forEach(stitch);
        while (++x6 < dx - 1) {
          t03 = t13, t13 = above(values[y5 * dx + dx + x6 + 1], value);
          t32 = t22, t22 = above(values[y5 * dx + x6 + 1], value);
          cases[t03 | t13 << 1 | t22 << 2 | t32 << 3].forEach(stitch);
        }
        cases[t13 | t22 << 3].forEach(stitch);
      }
      x6 = -1;
      t22 = values[y5 * dx] >= value;
      cases[t22 << 2].forEach(stitch);
      while (++x6 < dx - 1) {
        t32 = t22, t22 = above(values[y5 * dx + x6 + 1], value);
        cases[t22 << 2 | t32 << 3].forEach(stitch);
      }
      cases[t22 << 3].forEach(stitch);
      function stitch(line) {
        var start2 = [line[0][0] + x6, line[0][1] + y5], end = [line[1][0] + x6, line[1][1] + y5], startIndex = index3(start2), endIndex = index3(end), f, g;
        if (f = fragmentByEnd[startIndex]) {
          if (g = fragmentByStart[endIndex]) {
            delete fragmentByEnd[f.end];
            delete fragmentByStart[g.start];
            if (f === g) {
              f.ring.push(end);
              callback(f.ring);
            } else {
              fragmentByStart[f.start] = fragmentByEnd[g.end] = { start: f.start, end: g.end, ring: f.ring.concat(g.ring) };
            }
          } else {
            delete fragmentByEnd[f.end];
            f.ring.push(end);
            fragmentByEnd[f.end = endIndex] = f;
          }
        } else if (f = fragmentByStart[endIndex]) {
          if (g = fragmentByEnd[startIndex]) {
            delete fragmentByStart[f.start];
            delete fragmentByEnd[g.end];
            if (f === g) {
              f.ring.push(end);
              callback(f.ring);
            } else {
              fragmentByStart[g.start] = fragmentByEnd[f.end] = { start: g.start, end: f.end, ring: g.ring.concat(f.ring) };
            }
          } else {
            delete fragmentByStart[f.start];
            f.ring.unshift(start2);
            fragmentByStart[f.start = startIndex] = f;
          }
        } else {
          fragmentByStart[startIndex] = fragmentByEnd[endIndex] = { start: startIndex, end: endIndex, ring: [start2, end] };
        }
      }
    }
    function index3(point6) {
      return point6[0] * 2 + point6[1] * (dx + 1) * 4;
    }
    function smoothLinear(ring, values, value) {
      ring.forEach(function(point6) {
        var x6 = point6[0], y5 = point6[1], xt2 = x6 | 0, yt2 = y5 | 0, v1 = valid(values[yt2 * dx + xt2]);
        if (x6 > 0 && x6 < dx && xt2 === x6) {
          point6[0] = smooth1(x6, valid(values[yt2 * dx + xt2 - 1]), v1, value);
        }
        if (y5 > 0 && y5 < dy && yt2 === y5) {
          point6[1] = smooth1(y5, valid(values[(yt2 - 1) * dx + xt2]), v1, value);
        }
      });
    }
    contours.contour = contour;
    contours.size = function(_3) {
      if (!arguments.length) return [dx, dy];
      var _0 = Math.floor(_3[0]), _1 = Math.floor(_3[1]);
      if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
      return dx = _0, dy = _1, contours;
    };
    contours.thresholds = function(_3) {
      return arguments.length ? (threshold2 = typeof _3 === "function" ? _3 : Array.isArray(_3) ? constant_default6(slice3.call(_3)) : constant_default6(_3), contours) : threshold2;
    };
    contours.smooth = function(_3) {
      return arguments.length ? (smooth = _3 ? smoothLinear : noop_default, contours) : smooth === smoothLinear;
    };
    return contours;
  }
  function finite(x6) {
    return isFinite(x6) ? x6 : NaN;
  }
  function above(x6, value) {
    return x6 == null ? false : +x6 >= value;
  }
  function valid(v4) {
    return v4 == null || isNaN(v4 = +v4) ? -Infinity : v4;
  }
  function smooth1(x6, v0, v1, value) {
    const a4 = value - v0;
    const b10 = v1 - v0;
    const d = isFinite(a4) || isFinite(b10) ? a4 / b10 : Math.sign(a4) / Math.sign(b10);
    return isNaN(d) ? x6 : x6 + d - 0.5;
  }

  // node_modules/d3-contour/src/density.js
  function defaultX(d) {
    return d[0];
  }
  function defaultY(d) {
    return d[1];
  }
  function defaultWeight() {
    return 1;
  }
  function density_default() {
    var x6 = defaultX, y5 = defaultY, weight = defaultWeight, dx = 960, dy = 500, r = 20, k4 = 2, o = r * 3, n = dx + o * 2 >> k4, m4 = dy + o * 2 >> k4, threshold2 = constant_default6(20);
    function grid(data) {
      var values = new Float32Array(n * m4), pow2k = Math.pow(2, -k4), i = -1;
      for (const d of data) {
        var xi = (x6(d, ++i, data) + o) * pow2k, yi = (y5(d, i, data) + o) * pow2k, wi = +weight(d, i, data);
        if (wi && xi >= 0 && xi < n && yi >= 0 && yi < m4) {
          var x06 = Math.floor(xi), y06 = Math.floor(yi), xt2 = xi - x06 - 0.5, yt2 = yi - y06 - 0.5;
          values[x06 + y06 * n] += (1 - xt2) * (1 - yt2) * wi;
          values[x06 + 1 + y06 * n] += xt2 * (1 - yt2) * wi;
          values[x06 + 1 + (y06 + 1) * n] += xt2 * yt2 * wi;
          values[x06 + (y06 + 1) * n] += (1 - xt2) * yt2 * wi;
        }
      }
      blur2({ data: values, width: n, height: m4 }, r * pow2k);
      return values;
    }
    function density(data) {
      var values = grid(data), tz = threshold2(values), pow4k = Math.pow(2, 2 * k4);
      if (!Array.isArray(tz)) {
        tz = ticks(Number.MIN_VALUE, max(values) / pow4k, tz);
      }
      return contours_default().size([n, m4]).thresholds(tz.map((d) => d * pow4k))(values).map((c6, i) => (c6.value = +tz[i], transform2(c6)));
    }
    density.contours = function(data) {
      var values = grid(data), contours = contours_default().size([n, m4]), pow4k = Math.pow(2, 2 * k4), contour = (value) => {
        value = +value;
        var c6 = transform2(contours.contour(values, value * pow4k));
        c6.value = value;
        return c6;
      };
      Object.defineProperty(contour, "max", { get: () => max(values) / pow4k });
      return contour;
    };
    function transform2(geometry) {
      geometry.coordinates.forEach(transformPolygon);
      return geometry;
    }
    function transformPolygon(coordinates2) {
      coordinates2.forEach(transformRing);
    }
    function transformRing(coordinates2) {
      coordinates2.forEach(transformPoint);
    }
    function transformPoint(coordinates2) {
      coordinates2[0] = coordinates2[0] * Math.pow(2, k4) - o;
      coordinates2[1] = coordinates2[1] * Math.pow(2, k4) - o;
    }
    function resize() {
      o = r * 3;
      n = dx + o * 2 >> k4;
      m4 = dy + o * 2 >> k4;
      return density;
    }
    density.x = function(_3) {
      return arguments.length ? (x6 = typeof _3 === "function" ? _3 : constant_default6(+_3), density) : x6;
    };
    density.y = function(_3) {
      return arguments.length ? (y5 = typeof _3 === "function" ? _3 : constant_default6(+_3), density) : y5;
    };
    density.weight = function(_3) {
      return arguments.length ? (weight = typeof _3 === "function" ? _3 : constant_default6(+_3), density) : weight;
    };
    density.size = function(_3) {
      if (!arguments.length) return [dx, dy];
      var _0 = +_3[0], _1 = +_3[1];
      if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
      return dx = _0, dy = _1, resize();
    };
    density.cellSize = function(_3) {
      if (!arguments.length) return 1 << k4;
      if (!((_3 = +_3) >= 1)) throw new Error("invalid cell size");
      return k4 = Math.floor(Math.log(_3) / Math.LN2), resize();
    };
    density.thresholds = function(_3) {
      return arguments.length ? (threshold2 = typeof _3 === "function" ? _3 : Array.isArray(_3) ? constant_default6(slice3.call(_3)) : constant_default6(_3), density) : threshold2;
    };
    density.bandwidth = function(_3) {
      if (!arguments.length) return Math.sqrt(r * (r + 1));
      if (!((_3 = +_3) >= 0)) throw new Error("invalid bandwidth");
      return r = (Math.sqrt(4 * _3 * _3 + 1) - 1) / 2, resize();
    };
    return density;
  }

  // node_modules/robust-predicates/esm/util.js
  var epsilon5 = 11102230246251565e-32;
  var splitter = 134217729;
  var resulterrbound = (3 + 8 * epsilon5) * epsilon5;
  function sum2(elen, e, flen, f, h) {
    let Q3, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if (fnow > enow === fnow > -enow) {
      Q3 = enow;
      enow = e[++eindex];
    } else {
      Q3 = fnow;
      fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = enow + Q3;
        hh = Q3 - (Qnew - enow);
        enow = e[++eindex];
      } else {
        Qnew = fnow + Q3;
        hh = Q3 - (Qnew - fnow);
        fnow = f[++findex];
      }
      Q3 = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
      while (eindex < elen && findex < flen) {
        if (fnow > enow === fnow > -enow) {
          Qnew = Q3 + enow;
          bvirt = Qnew - Q3;
          hh = Q3 - (Qnew - bvirt) + (enow - bvirt);
          enow = e[++eindex];
        } else {
          Qnew = Q3 + fnow;
          bvirt = Qnew - Q3;
          hh = Q3 - (Qnew - bvirt) + (fnow - bvirt);
          fnow = f[++findex];
        }
        Q3 = Qnew;
        if (hh !== 0) {
          h[hindex++] = hh;
        }
      }
    }
    while (eindex < elen) {
      Qnew = Q3 + enow;
      bvirt = Qnew - Q3;
      hh = Q3 - (Qnew - bvirt) + (enow - bvirt);
      enow = e[++eindex];
      Q3 = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
    while (findex < flen) {
      Qnew = Q3 + fnow;
      bvirt = Qnew - Q3;
      hh = Q3 - (Qnew - bvirt) + (fnow - bvirt);
      fnow = f[++findex];
      Q3 = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
    if (Q3 !== 0 || hindex === 0) {
      h[hindex++] = Q3;
    }
    return hindex;
  }
  function estimate(elen, e) {
    let Q3 = e[0];
    for (let i = 1; i < elen; i++) Q3 += e[i];
    return Q3;
  }
  function vec(n) {
    return new Float64Array(n);
  }

  // node_modules/robust-predicates/esm/orient2d.js
  var ccwerrboundA = (3 + 16 * epsilon5) * epsilon5;
  var ccwerrboundB = (2 + 12 * epsilon5) * epsilon5;
  var ccwerrboundC = (9 + 64 * epsilon5) * epsilon5 * epsilon5;
  var B4 = vec(4);
  var C1 = vec(8);
  var C22 = vec(12);
  var D4 = vec(16);
  var u = vec(4);
  function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c6, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t13, t03, u32;
    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;
    s1 = acx * bcy;
    c6 = splitter * acx;
    ahi = c6 - (c6 - acx);
    alo = acx - ahi;
    c6 = splitter * bcy;
    bhi = c6 - (c6 - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t13 = acy * bcx;
    c6 = splitter * acy;
    ahi = c6 - (c6 - acy);
    alo = acy - ahi;
    c6 = splitter * bcx;
    bhi = c6 - (c6 - bcx);
    blo = bcx - bhi;
    t03 = alo * blo - (t13 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t03;
    bvirt = s0 - _i;
    B4[0] = s0 - (_i + bvirt) + (bvirt - t03);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t13;
    bvirt = _0 - _i;
    B4[1] = _0 - (_i + bvirt) + (bvirt - t13);
    u32 = _j + _i;
    bvirt = u32 - _j;
    B4[2] = _j - (u32 - bvirt) + (_i - bvirt);
    B4[3] = u32;
    let det = estimate(4, B4);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
      return det;
    }
    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);
    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
      return det;
    }
    errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
    det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;
    s1 = acxtail * bcy;
    c6 = splitter * acxtail;
    ahi = c6 - (c6 - acxtail);
    alo = acxtail - ahi;
    c6 = splitter * bcy;
    bhi = c6 - (c6 - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t13 = acytail * bcx;
    c6 = splitter * acytail;
    ahi = c6 - (c6 - acytail);
    alo = acytail - ahi;
    c6 = splitter * bcx;
    bhi = c6 - (c6 - bcx);
    blo = bcx - bhi;
    t03 = alo * blo - (t13 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t03;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t03);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t13;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t13);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const C1len = sum2(4, B4, 4, u, C1);
    s1 = acx * bcytail;
    c6 = splitter * acx;
    ahi = c6 - (c6 - acx);
    alo = acx - ahi;
    c6 = splitter * bcytail;
    bhi = c6 - (c6 - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t13 = acy * bcxtail;
    c6 = splitter * acy;
    ahi = c6 - (c6 - acy);
    alo = acy - ahi;
    c6 = splitter * bcxtail;
    bhi = c6 - (c6 - bcxtail);
    blo = bcxtail - bhi;
    t03 = alo * blo - (t13 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t03;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t03);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t13;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t13);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const C2len = sum2(C1len, C1, 4, u, C22);
    s1 = acxtail * bcytail;
    c6 = splitter * acxtail;
    ahi = c6 - (c6 - acxtail);
    alo = acxtail - ahi;
    c6 = splitter * bcytail;
    bhi = c6 - (c6 - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t13 = acytail * bcxtail;
    c6 = splitter * acytail;
    ahi = c6 - (c6 - acytail);
    alo = acytail - ahi;
    c6 = splitter * bcxtail;
    bhi = c6 - (c6 - bcxtail);
    blo = bcxtail - bhi;
    t03 = alo * blo - (t13 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t03;
    bvirt = s0 - _i;
    u[0] = s0 - (_i + bvirt) + (bvirt - t03);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t13;
    bvirt = _0 - _i;
    u[1] = _0 - (_i + bvirt) + (bvirt - t13);
    u32 = _j + _i;
    bvirt = u32 - _j;
    u[2] = _j - (u32 - bvirt) + (_i - bvirt);
    u[3] = u32;
    const Dlen = sum2(C2len, C22, 4, u, D4);
    return D4[Dlen - 1];
  }
  function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;
    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;
    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
  }

  // node_modules/robust-predicates/esm/orient3d.js
  var o3derrboundA = (7 + 56 * epsilon5) * epsilon5;
  var o3derrboundB = (3 + 28 * epsilon5) * epsilon5;
  var o3derrboundC = (26 + 288 * epsilon5) * epsilon5 * epsilon5;
  var bc = vec(4);
  var ca = vec(4);
  var ab = vec(4);
  var at_b = vec(4);
  var at_c = vec(4);
  var bt_c = vec(4);
  var bt_a = vec(4);
  var ct_a = vec(4);
  var ct_b = vec(4);
  var bct = vec(8);
  var cat = vec(8);
  var abt = vec(8);
  var u2 = vec(4);
  var _8 = vec(8);
  var _8b = vec(8);
  var _16 = vec(16);
  var _12 = vec(12);
  var fin = vec(192);
  var fin2 = vec(192);

  // node_modules/robust-predicates/esm/incircle.js
  var iccerrboundA = (10 + 96 * epsilon5) * epsilon5;
  var iccerrboundB = (4 + 48 * epsilon5) * epsilon5;
  var iccerrboundC = (44 + 576 * epsilon5) * epsilon5 * epsilon5;
  var bc2 = vec(4);
  var ca2 = vec(4);
  var ab2 = vec(4);
  var aa = vec(4);
  var bb = vec(4);
  var cc = vec(4);
  var u3 = vec(4);
  var v3 = vec(4);
  var axtbc = vec(8);
  var aytbc = vec(8);
  var bxtca = vec(8);
  var bytca = vec(8);
  var cxtab = vec(8);
  var cytab = vec(8);
  var abt2 = vec(8);
  var bct2 = vec(8);
  var cat2 = vec(8);
  var abtt = vec(4);
  var bctt = vec(4);
  var catt = vec(4);
  var _82 = vec(8);
  var _162 = vec(16);
  var _16b = vec(16);
  var _16c = vec(16);
  var _32 = vec(32);
  var _32b = vec(32);
  var _48 = vec(48);
  var _64 = vec(64);
  var fin3 = vec(1152);
  var fin22 = vec(1152);

  // node_modules/robust-predicates/esm/insphere.js
  var isperrboundA = (16 + 224 * epsilon5) * epsilon5;
  var isperrboundB = (5 + 72 * epsilon5) * epsilon5;
  var isperrboundC = (71 + 1408 * epsilon5) * epsilon5 * epsilon5;
  var ab3 = vec(4);
  var bc3 = vec(4);
  var cd = vec(4);
  var de2 = vec(4);
  var ea = vec(4);
  var ac = vec(4);
  var bd = vec(4);
  var ce2 = vec(4);
  var da = vec(4);
  var eb = vec(4);
  var abc = vec(24);
  var bcd = vec(24);
  var cde = vec(24);
  var dea = vec(24);
  var eab = vec(24);
  var abd = vec(24);
  var bce = vec(24);
  var cda = vec(24);
  var deb = vec(24);
  var eac = vec(24);
  var adet = vec(1152);
  var bdet = vec(1152);
  var cdet = vec(1152);
  var ddet = vec(1152);
  var edet = vec(1152);
  var abdet = vec(2304);
  var cddet = vec(2304);
  var cdedet = vec(3456);
  var deter = vec(5760);
  var _83 = vec(8);
  var _8b2 = vec(8);
  var _8c = vec(8);
  var _163 = vec(16);
  var _24 = vec(24);
  var _482 = vec(48);
  var _48b = vec(48);
  var _96 = vec(96);
  var _192 = vec(192);
  var _384x = vec(384);
  var _384y = vec(384);
  var _384z = vec(384);
  var _768 = vec(768);
  var xdet = vec(96);
  var ydet = vec(96);
  var zdet = vec(96);
  var fin4 = vec(1152);

  // node_modules/delaunator/index.js
  var EPSILON = Math.pow(2, -52);
  var EDGE_STACK = new Uint32Array(512);
  var Delaunator = class _Delaunator {
    /**
     * Constructs a delaunay triangulation object given an array of points (`[x, y]` by default).
     * `getX` and `getY` are optional functions of the form `(point) => value` for custom point formats.
     *
     * @template P
     * @param {P[]} points
     * @param {(p: P) => number} [getX]
     * @param {(p: P) => number} [getY]
     */
    // @ts-expect-error TS2322
    static from(points, getX = defaultGetX, getY = defaultGetY) {
      const n = points.length;
      const coords = new Float64Array(n * 2);
      for (let i = 0; i < n; i++) {
        const p3 = points[i];
        coords[2 * i] = getX(p3);
        coords[2 * i + 1] = getY(p3);
      }
      return new _Delaunator(coords);
    }
    /**
     * Constructs a delaunay triangulation object given an array of point coordinates of the form:
     * `[x0, y0, x1, y1, ...]` (use a typed array for best performance). Duplicate points are skipped.
     *
     * @param {T} coords
     */
    constructor(coords) {
      const n = coords.length >> 1;
      if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
      this.coords = coords;
      const maxTriangles = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(maxTriangles * 3);
      this._halfedges = new Int32Array(maxTriangles * 3);
      this._hashSize = Math.ceil(Math.sqrt(n));
      this._hullPrev = new Uint32Array(n);
      this._hullNext = new Uint32Array(n);
      this._hullTri = new Uint32Array(n);
      this._hullHash = new Int32Array(this._hashSize);
      this._ids = new Uint32Array(n);
      this._dists = new Float64Array(n);
      this.trianglesLen = 0;
      this._cx = 0;
      this._cy = 0;
      this._hullStart = 0;
      this.hull = this._triangles;
      this.triangles = this._triangles;
      this.halfedges = this._halfedges;
      this.update();
    }
    /**
     * Updates the triangulation if you modified `delaunay.coords` values in place, avoiding expensive memory allocations.
     * Useful for iterative relaxation algorithms such as Lloyd's.
     */
    update() {
      const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
      const n = coords.length >> 1;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY2 = -Infinity;
      for (let i = 0; i < n; i++) {
        const x6 = coords[2 * i];
        const y5 = coords[2 * i + 1];
        if (x6 < minX) minX = x6;
        if (y5 < minY) minY = y5;
        if (x6 > maxX) maxX = x6;
        if (y5 > maxY2) maxY2 = y5;
        this._ids[i] = i;
      }
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY2) / 2;
      let i0 = 0, i1 = 0, i2 = 0;
      for (let i = 0, minDist = Infinity; i < n; i++) {
        const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist) {
          i0 = i;
          minDist = d;
        }
      }
      const i0x = coords[2 * i0];
      const i0y = coords[2 * i0 + 1];
      for (let i = 0, minDist = Infinity; i < n; i++) {
        if (i === i0) continue;
        const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
        if (d < minDist && d > 0) {
          i1 = i;
          minDist = d;
        }
      }
      let i1x = coords[2 * i1];
      let i1y = coords[2 * i1 + 1];
      let minRadius = Infinity;
      for (let i = 0; i < n; i++) {
        if (i === i0 || i === i1) continue;
        const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
        if (r < minRadius) {
          i2 = i;
          minRadius = r;
        }
      }
      let i2x = coords[2 * i2];
      let i2y = coords[2 * i2 + 1];
      if (minRadius === Infinity) {
        for (let i = 0; i < n; i++) {
          this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        const hull = new Uint32Array(n);
        let j3 = 0;
        for (let i = 0, d0 = -Infinity; i < n; i++) {
          const id2 = this._ids[i];
          const d = this._dists[id2];
          if (d > d0) {
            hull[j3++] = id2;
            d0 = d;
          }
        }
        this.hull = hull.subarray(0, j3);
        this.triangles = new Uint32Array(0);
        this.halfedges = new Int32Array(0);
        return;
      }
      if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
        const i = i1;
        const x6 = i1x;
        const y5 = i1y;
        i1 = i2;
        i1x = i2x;
        i1y = i2y;
        i2 = i;
        i2x = x6;
        i2y = y5;
      }
      const center2 = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
      this._cx = center2.x;
      this._cy = center2.y;
      for (let i = 0; i < n; i++) {
        this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center2.x, center2.y);
      }
      quicksort(this._ids, this._dists, 0, n - 1);
      this._hullStart = i0;
      let hullSize = 3;
      hullNext[i0] = hullPrev[i2] = i1;
      hullNext[i1] = hullPrev[i0] = i2;
      hullNext[i2] = hullPrev[i1] = i0;
      hullTri[i0] = 0;
      hullTri[i1] = 1;
      hullTri[i2] = 2;
      hullHash.fill(-1);
      hullHash[this._hashKey(i0x, i0y)] = i0;
      hullHash[this._hashKey(i1x, i1y)] = i1;
      hullHash[this._hashKey(i2x, i2y)] = i2;
      this.trianglesLen = 0;
      this._addTriangle(i0, i1, i2, -1, -1, -1);
      for (let k4 = 0, xp = 0, yp = 0; k4 < this._ids.length; k4++) {
        const i = this._ids[k4];
        const x6 = coords[2 * i];
        const y5 = coords[2 * i + 1];
        if (k4 > 0 && Math.abs(x6 - xp) <= EPSILON && Math.abs(y5 - yp) <= EPSILON) continue;
        xp = x6;
        yp = y5;
        if (i === i0 || i === i1 || i === i2) continue;
        let start2 = 0;
        for (let j3 = 0, key = this._hashKey(x6, y5); j3 < this._hashSize; j3++) {
          start2 = hullHash[(key + j3) % this._hashSize];
          if (start2 !== -1 && start2 !== hullNext[start2]) break;
        }
        start2 = hullPrev[start2];
        let e = start2, q3;
        while (q3 = hullNext[e], orient2d(x6, y5, coords[2 * e], coords[2 * e + 1], coords[2 * q3], coords[2 * q3 + 1]) >= 0) {
          e = q3;
          if (e === start2) {
            e = -1;
            break;
          }
        }
        if (e === -1) continue;
        let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
        hullTri[i] = this._legalize(t + 2);
        hullTri[e] = t;
        hullSize++;
        let n2 = hullNext[e];
        while (q3 = hullNext[n2], orient2d(x6, y5, coords[2 * n2], coords[2 * n2 + 1], coords[2 * q3], coords[2 * q3 + 1]) < 0) {
          t = this._addTriangle(n2, i, q3, hullTri[i], -1, hullTri[n2]);
          hullTri[i] = this._legalize(t + 2);
          hullNext[n2] = n2;
          hullSize--;
          n2 = q3;
        }
        if (e === start2) {
          while (q3 = hullPrev[e], orient2d(x6, y5, coords[2 * q3], coords[2 * q3 + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
            t = this._addTriangle(q3, i, e, -1, hullTri[e], hullTri[q3]);
            this._legalize(t + 2);
            hullTri[q3] = t;
            hullNext[e] = e;
            hullSize--;
            e = q3;
          }
        }
        this._hullStart = hullPrev[i] = e;
        hullNext[e] = hullPrev[n2] = i;
        hullNext[i] = n2;
        hullHash[this._hashKey(x6, y5)] = i;
        hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
      }
      this.hull = new Uint32Array(hullSize);
      for (let i = 0, e = this._hullStart; i < hullSize; i++) {
        this.hull[i] = e;
        e = hullNext[e];
      }
      this.triangles = this._triangles.subarray(0, this.trianglesLen);
      this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    /**
     * Calculate an angle-based key for the edge hash used for advancing convex hull.
     *
     * @param {number} x
     * @param {number} y
     * @private
     */
    _hashKey(x6, y5) {
      return Math.floor(pseudoAngle(x6 - this._cx, y5 - this._cy) * this._hashSize) % this._hashSize;
    }
    /**
     * Flip an edge in a pair of triangles if it doesn't satisfy the Delaunay condition.
     *
     * @param {number} a
     * @private
     */
    _legalize(a4) {
      const { _triangles: triangles, _halfedges: halfedges, coords } = this;
      let i = 0;
      let ar = 0;
      while (true) {
        const b10 = halfedges[a4];
        const a0 = a4 - a4 % 3;
        ar = a0 + (a4 + 2) % 3;
        if (b10 === -1) {
          if (i === 0) break;
          a4 = EDGE_STACK[--i];
          continue;
        }
        const b02 = b10 - b10 % 3;
        const al = a0 + (a4 + 1) % 3;
        const bl = b02 + (b10 + 2) % 3;
        const p02 = triangles[ar];
        const pr = triangles[a4];
        const pl = triangles[al];
        const p1 = triangles[bl];
        const illegal = inCircle(
          coords[2 * p02],
          coords[2 * p02 + 1],
          coords[2 * pr],
          coords[2 * pr + 1],
          coords[2 * pl],
          coords[2 * pl + 1],
          coords[2 * p1],
          coords[2 * p1 + 1]
        );
        if (illegal) {
          triangles[a4] = p1;
          triangles[b10] = p02;
          const hbl = halfedges[bl];
          if (hbl === -1) {
            let e = this._hullStart;
            do {
              if (this._hullTri[e] === bl) {
                this._hullTri[e] = a4;
                break;
              }
              e = this._hullPrev[e];
            } while (e !== this._hullStart);
          }
          this._link(a4, hbl);
          this._link(b10, halfedges[ar]);
          this._link(ar, bl);
          const br = b02 + (b10 + 1) % 3;
          if (i < EDGE_STACK.length) {
            EDGE_STACK[i++] = br;
          }
        } else {
          if (i === 0) break;
          a4 = EDGE_STACK[--i];
        }
      }
      return ar;
    }
    /**
     * Link two half-edges to each other.
     * @param {number} a
     * @param {number} b
     * @private
     */
    _link(a4, b10) {
      this._halfedges[a4] = b10;
      if (b10 !== -1) this._halfedges[b10] = a4;
    }
    /**
     * Add a new triangle given vertex indices and adjacent half-edge ids.
     *
     * @param {number} i0
     * @param {number} i1
     * @param {number} i2
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @private
     */
    _addTriangle(i0, i1, i2, a4, b10, c6) {
      const t = this.trianglesLen;
      this._triangles[t] = i0;
      this._triangles[t + 1] = i1;
      this._triangles[t + 2] = i2;
      this._link(t, a4);
      this._link(t + 1, b10);
      this._link(t + 2, c6);
      this.trianglesLen += 3;
      return t;
    }
  };
  function pseudoAngle(dx, dy) {
    const p3 = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p3 : 1 + p3) / 4;
  }
  function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }
  function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
  }
  function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x6 = (ey * bl - dy * cl) * d;
    const y5 = (dx * cl - ex * bl) * d;
    return x6 * x6 + y5 * y5;
  }
  function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x6 = ax + (ey * bl - dy * cl) * d;
    const y5 = ay + (dx * cl - ex * bl) * d;
    return { x: x6, y: y5 };
  }
  function quicksort(ids, dists, left2, right2) {
    if (right2 - left2 <= 20) {
      for (let i = left2 + 1; i <= right2; i++) {
        const temp = ids[i];
        const tempDist = dists[temp];
        let j3 = i - 1;
        while (j3 >= left2 && dists[ids[j3]] > tempDist) ids[j3 + 1] = ids[j3--];
        ids[j3 + 1] = temp;
      }
    } else {
      const median2 = left2 + right2 >> 1;
      let i = left2 + 1;
      let j3 = right2;
      swap2(ids, median2, i);
      if (dists[ids[left2]] > dists[ids[right2]]) swap2(ids, left2, right2);
      if (dists[ids[i]] > dists[ids[right2]]) swap2(ids, i, right2);
      if (dists[ids[left2]] > dists[ids[i]]) swap2(ids, left2, i);
      const temp = ids[i];
      const tempDist = dists[temp];
      while (true) {
        do
          i++;
        while (dists[ids[i]] < tempDist);
        do
          j3--;
        while (dists[ids[j3]] > tempDist);
        if (j3 < i) break;
        swap2(ids, i, j3);
      }
      ids[left2 + 1] = ids[j3];
      ids[j3] = temp;
      if (right2 - i + 1 >= j3 - left2) {
        quicksort(ids, dists, i, right2);
        quicksort(ids, dists, left2, j3 - 1);
      } else {
        quicksort(ids, dists, left2, j3 - 1);
        quicksort(ids, dists, i, right2);
      }
    }
  }
  function swap2(arr, i, j3) {
    const tmp = arr[i];
    arr[i] = arr[j3];
    arr[j3] = tmp;
  }
  function defaultGetX(p3) {
    return p3[0];
  }
  function defaultGetY(p3) {
    return p3[1];
  }

  // node_modules/d3-delaunay/src/path.js
  var epsilon6 = 1e-6;
  var Path2 = class {
    constructor() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null;
      this._ = "";
    }
    moveTo(x6, y5) {
      this._ += `M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y5}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    }
    lineTo(x6, y5) {
      this._ += `L${this._x1 = +x6},${this._y1 = +y5}`;
    }
    arc(x6, y5, r) {
      x6 = +x6, y5 = +y5, r = +r;
      const x06 = x6 + r;
      const y06 = y5;
      if (r < 0) throw new Error("negative radius");
      if (this._x1 === null) this._ += `M${x06},${y06}`;
      else if (Math.abs(this._x1 - x06) > epsilon6 || Math.abs(this._y1 - y06) > epsilon6) this._ += "L" + x06 + "," + y06;
      if (!r) return;
      this._ += `A${r},${r},0,1,1,${x6 - r},${y5}A${r},${r},0,1,1,${this._x1 = x06},${this._y1 = y06}`;
    }
    rect(x6, y5, w3, h) {
      this._ += `M${this._x0 = this._x1 = +x6},${this._y0 = this._y1 = +y5}h${+w3}v${+h}h${-w3}Z`;
    }
    value() {
      return this._ || null;
    }
  };

  // node_modules/d3-delaunay/src/polygon.js
  var Polygon = class {
    constructor() {
      this._ = [];
    }
    moveTo(x6, y5) {
      this._.push([x6, y5]);
    }
    closePath() {
      this._.push(this._[0].slice());
    }
    lineTo(x6, y5) {
      this._.push([x6, y5]);
    }
    value() {
      return this._.length ? this._ : null;
    }
  };

  // node_modules/d3-delaunay/src/voronoi.js
  var Voronoi = class {
    constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
      if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
      this.delaunay = delaunay;
      this._circumcenters = new Float64Array(delaunay.points.length * 2);
      this.vectors = new Float64Array(delaunay.points.length * 2);
      this.xmax = xmax, this.xmin = xmin;
      this.ymax = ymax, this.ymin = ymin;
      this._init();
    }
    update() {
      this.delaunay.update();
      this._init();
      return this;
    }
    _init() {
      const { delaunay: { points, hull, triangles }, vectors } = this;
      let bx, by;
      const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
      for (let i = 0, j3 = 0, n = triangles.length, x6, y5; i < n; i += 3, j3 += 2) {
        const t13 = triangles[i] * 2;
        const t22 = triangles[i + 1] * 2;
        const t32 = triangles[i + 2] * 2;
        const x13 = points[t13];
        const y13 = points[t13 + 1];
        const x22 = points[t22];
        const y22 = points[t22 + 1];
        const x32 = points[t32];
        const y32 = points[t32 + 1];
        const dx = x22 - x13;
        const dy = y22 - y13;
        const ex = x32 - x13;
        const ey = y32 - y13;
        const ab4 = (dx * ey - dy * ex) * 2;
        if (Math.abs(ab4) < 1e-9) {
          if (bx === void 0) {
            bx = by = 0;
            for (const i2 of hull) bx += points[i2 * 2], by += points[i2 * 2 + 1];
            bx /= hull.length, by /= hull.length;
          }
          const a4 = 1e9 * Math.sign((bx - x13) * ey - (by - y13) * ex);
          x6 = (x13 + x32) / 2 - a4 * ey;
          y5 = (y13 + y32) / 2 + a4 * ex;
        } else {
          const d = 1 / ab4;
          const bl = dx * dx + dy * dy;
          const cl = ex * ex + ey * ey;
          x6 = x13 + (ey * bl - dy * cl) * d;
          y5 = y13 + (dx * cl - ex * bl) * d;
        }
        circumcenters[j3] = x6;
        circumcenters[j3 + 1] = y5;
      }
      let h = hull[hull.length - 1];
      let p02, p1 = h * 4;
      let x06, x12 = points[2 * h];
      let y06, y12 = points[2 * h + 1];
      vectors.fill(0);
      for (let i = 0; i < hull.length; ++i) {
        h = hull[i];
        p02 = p1, x06 = x12, y06 = y12;
        p1 = h * 4, x12 = points[2 * h], y12 = points[2 * h + 1];
        vectors[p02 + 2] = vectors[p1] = y06 - y12;
        vectors[p02 + 3] = vectors[p1 + 1] = x12 - x06;
      }
    }
    render(context) {
      const buffer = context == null ? context = new Path2() : void 0;
      const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
      if (hull.length <= 1) return null;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j3 = halfedges[i];
        if (j3 < i) continue;
        const ti = Math.floor(i / 3) * 2;
        const tj = Math.floor(j3 / 3) * 2;
        const xi = circumcenters[ti];
        const yi = circumcenters[ti + 1];
        const xj = circumcenters[tj];
        const yj = circumcenters[tj + 1];
        this._renderSegment(xi, yi, xj, yj, context);
      }
      let h0, h1 = hull[hull.length - 1];
      for (let i = 0; i < hull.length; ++i) {
        h0 = h1, h1 = hull[i];
        const t = Math.floor(inedges[h1] / 3) * 2;
        const x6 = circumcenters[t];
        const y5 = circumcenters[t + 1];
        const v4 = h0 * 4;
        const p3 = this._project(x6, y5, vectors[v4 + 2], vectors[v4 + 3]);
        if (p3) this._renderSegment(x6, y5, p3[0], p3[1], context);
      }
      return buffer && buffer.value();
    }
    renderBounds(context) {
      const buffer = context == null ? context = new Path2() : void 0;
      context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
      return buffer && buffer.value();
    }
    renderCell(i, context) {
      const buffer = context == null ? context = new Path2() : void 0;
      const points = this._clip(i);
      if (points === null || !points.length) return;
      context.moveTo(points[0], points[1]);
      let n = points.length;
      while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1) n -= 2;
      for (let i2 = 2; i2 < n; i2 += 2) {
        if (points[i2] !== points[i2 - 2] || points[i2 + 1] !== points[i2 - 1])
          context.lineTo(points[i2], points[i2 + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    *cellPolygons() {
      const { delaunay: { points } } = this;
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const cell = this.cellPolygon(i);
        if (cell) cell.index = i, yield cell;
      }
    }
    cellPolygon(i) {
      const polygon = new Polygon();
      this.renderCell(i, polygon);
      return polygon.value();
    }
    _renderSegment(x06, y06, x12, y12, context) {
      let S3;
      const c0 = this._regioncode(x06, y06);
      const c1 = this._regioncode(x12, y12);
      if (c0 === 0 && c1 === 0) {
        context.moveTo(x06, y06);
        context.lineTo(x12, y12);
      } else if (S3 = this._clipSegment(x06, y06, x12, y12, c0, c1)) {
        context.moveTo(S3[0], S3[1]);
        context.lineTo(S3[2], S3[3]);
      }
    }
    contains(i, x6, y5) {
      if ((x6 = +x6, x6 !== x6) || (y5 = +y5, y5 !== y5)) return false;
      return this.delaunay._step(i, x6, y5) === i;
    }
    *neighbors(i) {
      const ci = this._clip(i);
      if (ci) for (const j3 of this.delaunay.neighbors(i)) {
        const cj = this._clip(j3);
        if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
          for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
            if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
              yield j3;
              break loop;
            }
          }
        }
      }
    }
    _cell(i) {
      const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
      const e0 = inedges[i];
      if (e0 === -1) return null;
      const points = [];
      let e = e0;
      do {
        const t = Math.floor(e / 3);
        points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break;
        e = halfedges[e];
      } while (e !== e0 && e !== -1);
      return points;
    }
    _clip(i) {
      if (i === 0 && this.delaunay.hull.length === 1) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      const points = this._cell(i);
      if (points === null) return null;
      const { vectors: V3 } = this;
      const v4 = i * 4;
      return this._simplify(V3[v4] || V3[v4 + 1] ? this._clipInfinite(i, points, V3[v4], V3[v4 + 1], V3[v4 + 2], V3[v4 + 3]) : this._clipFinite(i, points));
    }
    _clipFinite(i, points) {
      const n = points.length;
      let P3 = null;
      let x06, y06, x12 = points[n - 2], y12 = points[n - 1];
      let c0, c1 = this._regioncode(x12, y12);
      let e0, e1 = 0;
      for (let j3 = 0; j3 < n; j3 += 2) {
        x06 = x12, y06 = y12, x12 = points[j3], y12 = points[j3 + 1];
        c0 = c1, c1 = this._regioncode(x12, y12);
        if (c0 === 0 && c1 === 0) {
          e0 = e1, e1 = 0;
          if (P3) P3.push(x12, y12);
          else P3 = [x12, y12];
        } else {
          let S3, sx0, sy0, sx1, sy1;
          if (c0 === 0) {
            if ((S3 = this._clipSegment(x06, y06, x12, y12, c0, c1)) === null) continue;
            [sx0, sy0, sx1, sy1] = S3;
          } else {
            if ((S3 = this._clipSegment(x12, y12, x06, y06, c1, c0)) === null) continue;
            [sx1, sy1, sx0, sy0] = S3;
            e0 = e1, e1 = this._edgecode(sx0, sy0);
            if (e0 && e1) this._edge(i, e0, e1, P3, P3.length);
            if (P3) P3.push(sx0, sy0);
            else P3 = [sx0, sy0];
          }
          e0 = e1, e1 = this._edgecode(sx1, sy1);
          if (e0 && e1) this._edge(i, e0, e1, P3, P3.length);
          if (P3) P3.push(sx1, sy1);
          else P3 = [sx1, sy1];
        }
      }
      if (P3) {
        e0 = e1, e1 = this._edgecode(P3[0], P3[1]);
        if (e0 && e1) this._edge(i, e0, e1, P3, P3.length);
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      }
      return P3;
    }
    _clipSegment(x06, y06, x12, y12, c0, c1) {
      const flip = c0 < c1;
      if (flip) [x06, y06, x12, y12, c0, c1] = [x12, y12, x06, y06, c1, c0];
      while (true) {
        if (c0 === 0 && c1 === 0) return flip ? [x12, y12, x06, y06] : [x06, y06, x12, y12];
        if (c0 & c1) return null;
        let x6, y5, c6 = c0 || c1;
        if (c6 & 8) x6 = x06 + (x12 - x06) * (this.ymax - y06) / (y12 - y06), y5 = this.ymax;
        else if (c6 & 4) x6 = x06 + (x12 - x06) * (this.ymin - y06) / (y12 - y06), y5 = this.ymin;
        else if (c6 & 2) y5 = y06 + (y12 - y06) * (this.xmax - x06) / (x12 - x06), x6 = this.xmax;
        else y5 = y06 + (y12 - y06) * (this.xmin - x06) / (x12 - x06), x6 = this.xmin;
        if (c0) x06 = x6, y06 = y5, c0 = this._regioncode(x06, y06);
        else x12 = x6, y12 = y5, c1 = this._regioncode(x12, y12);
      }
    }
    _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
      let P3 = Array.from(points), p3;
      if (p3 = this._project(P3[0], P3[1], vx0, vy0)) P3.unshift(p3[0], p3[1]);
      if (p3 = this._project(P3[P3.length - 2], P3[P3.length - 1], vxn, vyn)) P3.push(p3[0], p3[1]);
      if (P3 = this._clipFinite(i, P3)) {
        for (let j3 = 0, n = P3.length, c0, c1 = this._edgecode(P3[n - 2], P3[n - 1]); j3 < n; j3 += 2) {
          c0 = c1, c1 = this._edgecode(P3[j3], P3[j3 + 1]);
          if (c0 && c1) j3 = this._edge(i, c0, c1, P3, j3), n = P3.length;
        }
      } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
        P3 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
      }
      return P3;
    }
    _edge(i, e0, e1, P3, j3) {
      while (e0 !== e1) {
        let x6, y5;
        switch (e0) {
          case 5:
            e0 = 4;
            continue;
          // top-left
          case 4:
            e0 = 6, x6 = this.xmax, y5 = this.ymin;
            break;
          // top
          case 6:
            e0 = 2;
            continue;
          // top-right
          case 2:
            e0 = 10, x6 = this.xmax, y5 = this.ymax;
            break;
          // right
          case 10:
            e0 = 8;
            continue;
          // bottom-right
          case 8:
            e0 = 9, x6 = this.xmin, y5 = this.ymax;
            break;
          // bottom
          case 9:
            e0 = 1;
            continue;
          // bottom-left
          case 1:
            e0 = 5, x6 = this.xmin, y5 = this.ymin;
            break;
        }
        if ((P3[j3] !== x6 || P3[j3 + 1] !== y5) && this.contains(i, x6, y5)) {
          P3.splice(j3, 0, x6, y5), j3 += 2;
        }
      }
      return j3;
    }
    _project(x06, y06, vx, vy) {
      let t = Infinity, c6, x6, y5;
      if (vy < 0) {
        if (y06 <= this.ymin) return null;
        if ((c6 = (this.ymin - y06) / vy) < t) y5 = this.ymin, x6 = x06 + (t = c6) * vx;
      } else if (vy > 0) {
        if (y06 >= this.ymax) return null;
        if ((c6 = (this.ymax - y06) / vy) < t) y5 = this.ymax, x6 = x06 + (t = c6) * vx;
      }
      if (vx > 0) {
        if (x06 >= this.xmax) return null;
        if ((c6 = (this.xmax - x06) / vx) < t) x6 = this.xmax, y5 = y06 + (t = c6) * vy;
      } else if (vx < 0) {
        if (x06 <= this.xmin) return null;
        if ((c6 = (this.xmin - x06) / vx) < t) x6 = this.xmin, y5 = y06 + (t = c6) * vy;
      }
      return [x6, y5];
    }
    _edgecode(x6, y5) {
      return (x6 === this.xmin ? 1 : x6 === this.xmax ? 2 : 0) | (y5 === this.ymin ? 4 : y5 === this.ymax ? 8 : 0);
    }
    _regioncode(x6, y5) {
      return (x6 < this.xmin ? 1 : x6 > this.xmax ? 2 : 0) | (y5 < this.ymin ? 4 : y5 > this.ymax ? 8 : 0);
    }
    _simplify(P3) {
      if (P3 && P3.length > 4) {
        for (let i = 0; i < P3.length; i += 2) {
          const j3 = (i + 2) % P3.length, k4 = (i + 4) % P3.length;
          if (P3[i] === P3[j3] && P3[j3] === P3[k4] || P3[i + 1] === P3[j3 + 1] && P3[j3 + 1] === P3[k4 + 1]) {
            P3.splice(j3, 2), i -= 2;
          }
        }
        if (!P3.length) P3 = null;
      }
      return P3;
    }
  };

  // node_modules/d3-delaunay/src/delaunay.js
  var tau4 = 2 * Math.PI;
  var pow = Math.pow;
  function pointX(p3) {
    return p3[0];
  }
  function pointY(p3) {
    return p3[1];
  }
  function collinear2(d) {
    const { triangles, coords } = d;
    for (let i = 0; i < triangles.length; i += 3) {
      const a4 = 2 * triangles[i], b10 = 2 * triangles[i + 1], c6 = 2 * triangles[i + 2], cross2 = (coords[c6] - coords[a4]) * (coords[b10 + 1] - coords[a4 + 1]) - (coords[b10] - coords[a4]) * (coords[c6 + 1] - coords[a4 + 1]);
      if (cross2 > 1e-10) return false;
    }
    return true;
  }
  function jitter(x6, y5, r) {
    return [x6 + Math.sin(x6 + y5) * r, y5 + Math.cos(x6 - y5) * r];
  }
  var Delaunay = class _Delaunay {
    static from(points, fx = pointX, fy = pointY, that) {
      return new _Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
    }
    constructor(points) {
      this._delaunator = new Delaunator(points);
      this.inedges = new Int32Array(points.length / 2);
      this._hullIndex = new Int32Array(points.length / 2);
      this.points = this._delaunator.coords;
      this._init();
    }
    update() {
      this._delaunator.update();
      this._init();
      return this;
    }
    _init() {
      const d = this._delaunator, points = this.points;
      if (d.hull && d.hull.length > 2 && collinear2(d)) {
        this.collinear = Int32Array.from({ length: points.length / 2 }, (_3, i) => i).sort((i, j3) => points[2 * i] - points[2 * j3] || points[2 * i + 1] - points[2 * j3 + 1]);
        const e = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [points[2 * e], points[2 * e + 1], points[2 * f], points[2 * f + 1]], r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
        for (let i = 0, n = points.length / 2; i < n; ++i) {
          const p3 = jitter(points[2 * i], points[2 * i + 1], r);
          points[2 * i] = p3[0];
          points[2 * i + 1] = p3[1];
        }
        this._delaunator = new Delaunator(points);
      } else {
        delete this.collinear;
      }
      const halfedges = this.halfedges = this._delaunator.halfedges;
      const hull = this.hull = this._delaunator.hull;
      const triangles = this.triangles = this._delaunator.triangles;
      const inedges = this.inedges.fill(-1);
      const hullIndex = this._hullIndex.fill(-1);
      for (let e = 0, n = halfedges.length; e < n; ++e) {
        const p3 = triangles[e % 3 === 2 ? e - 2 : e + 1];
        if (halfedges[e] === -1 || inedges[p3] === -1) inedges[p3] = e;
      }
      for (let i = 0, n = hull.length; i < n; ++i) {
        hullIndex[hull[i]] = i;
      }
      if (hull.length <= 2 && hull.length > 0) {
        this.triangles = new Int32Array(3).fill(-1);
        this.halfedges = new Int32Array(3).fill(-1);
        this.triangles[0] = hull[0];
        inedges[hull[0]] = 1;
        if (hull.length === 2) {
          inedges[hull[1]] = 0;
          this.triangles[1] = hull[1];
          this.triangles[2] = hull[1];
        }
      }
    }
    voronoi(bounds) {
      return new Voronoi(this, bounds);
    }
    *neighbors(i) {
      const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear3 } = this;
      if (collinear3) {
        const l2 = collinear3.indexOf(i);
        if (l2 > 0) yield collinear3[l2 - 1];
        if (l2 < collinear3.length - 1) yield collinear3[l2 + 1];
        return;
      }
      const e0 = inedges[i];
      if (e0 === -1) return;
      let e = e0, p02 = -1;
      do {
        yield p02 = triangles[e];
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) return;
        e = halfedges[e];
        if (e === -1) {
          const p3 = hull[(_hullIndex[i] + 1) % hull.length];
          if (p3 !== p02) yield p3;
          return;
        }
      } while (e !== e0);
    }
    find(x6, y5, i = 0) {
      if ((x6 = +x6, x6 !== x6) || (y5 = +y5, y5 !== y5)) return -1;
      const i0 = i;
      let c6;
      while ((c6 = this._step(i, x6, y5)) >= 0 && c6 !== i && c6 !== i0) i = c6;
      return c6;
    }
    _step(i, x6, y5) {
      const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
      if (inedges[i] === -1 || !points.length) return (i + 1) % (points.length >> 1);
      let c6 = i;
      let dc = pow(x6 - points[i * 2], 2) + pow(y5 - points[i * 2 + 1], 2);
      const e0 = inedges[i];
      let e = e0;
      do {
        let t = triangles[e];
        const dt2 = pow(x6 - points[t * 2], 2) + pow(y5 - points[t * 2 + 1], 2);
        if (dt2 < dc) dc = dt2, c6 = t;
        e = e % 3 === 2 ? e - 2 : e + 1;
        if (triangles[e] !== i) break;
        e = halfedges[e];
        if (e === -1) {
          e = hull[(_hullIndex[i] + 1) % hull.length];
          if (e !== t) {
            if (pow(x6 - points[e * 2], 2) + pow(y5 - points[e * 2 + 1], 2) < dc) return e;
          }
          break;
        }
      } while (e !== e0);
      return c6;
    }
    render(context) {
      const buffer = context == null ? context = new Path2() : void 0;
      const { points, halfedges, triangles } = this;
      for (let i = 0, n = halfedges.length; i < n; ++i) {
        const j3 = halfedges[i];
        if (j3 < i) continue;
        const ti = triangles[i] * 2;
        const tj = triangles[j3] * 2;
        context.moveTo(points[ti], points[ti + 1]);
        context.lineTo(points[tj], points[tj + 1]);
      }
      this.renderHull(context);
      return buffer && buffer.value();
    }
    renderPoints(context, r) {
      if (r === void 0 && (!context || typeof context.moveTo !== "function")) r = context, context = null;
      r = r == void 0 ? 2 : +r;
      const buffer = context == null ? context = new Path2() : void 0;
      const { points } = this;
      for (let i = 0, n = points.length; i < n; i += 2) {
        const x6 = points[i], y5 = points[i + 1];
        context.moveTo(x6 + r, y5);
        context.arc(x6, y5, r, 0, tau4);
      }
      return buffer && buffer.value();
    }
    renderHull(context) {
      const buffer = context == null ? context = new Path2() : void 0;
      const { hull, points } = this;
      const h = hull[0] * 2, n = hull.length;
      context.moveTo(points[h], points[h + 1]);
      for (let i = 1; i < n; ++i) {
        const h2 = 2 * hull[i];
        context.lineTo(points[h2], points[h2 + 1]);
      }
      context.closePath();
      return buffer && buffer.value();
    }
    hullPolygon() {
      const polygon = new Polygon();
      this.renderHull(polygon);
      return polygon.value();
    }
    renderTriangle(i, context) {
      const buffer = context == null ? context = new Path2() : void 0;
      const { points, triangles } = this;
      const t03 = triangles[i *= 3] * 2;
      const t13 = triangles[i + 1] * 2;
      const t22 = triangles[i + 2] * 2;
      context.moveTo(points[t03], points[t03 + 1]);
      context.lineTo(points[t13], points[t13 + 1]);
      context.lineTo(points[t22], points[t22 + 1]);
      context.closePath();
      return buffer && buffer.value();
    }
    *trianglePolygons() {
      const { triangles } = this;
      for (let i = 0, n = triangles.length / 3; i < n; ++i) {
        yield this.trianglePolygon(i);
      }
    }
    trianglePolygon(i) {
      const polygon = new Polygon();
      this.renderTriangle(i, polygon);
      return polygon.value();
    }
  };
  function flatArray(points, fx, fy, that) {
    const n = points.length;
    const array4 = new Float64Array(n * 2);
    for (let i = 0; i < n; ++i) {
      const p3 = points[i];
      array4[i * 2] = fx.call(that, p3, i, points);
      array4[i * 2 + 1] = fy.call(that, p3, i, points);
    }
    return array4;
  }
  function* flatIterable(points, fx, fy, that) {
    let i = 0;
    for (const p3 of points) {
      yield fx.call(that, p3, i, points);
      yield fy.call(that, p3, i, points);
      ++i;
    }
  }

  // node_modules/d3-dsv/src/dsv.js
  var EOL = {};
  var EOF = {};
  var QUOTE = 34;
  var NEWLINE = 10;
  var RETURN = 13;
  function objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
      return JSON.stringify(name) + ": d[" + i + '] || ""';
    }).join(",") + "}");
  }
  function customConverter(columns, f) {
    var object2 = objectConverter(columns);
    return function(row, i) {
      return f(object2(row), i, columns);
    };
  }
  function inferColumns(rows) {
    var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
    rows.forEach(function(row) {
      for (var column in row) {
        if (!(column in columnSet)) {
          columns.push(columnSet[column] = column);
        }
      }
    });
    return columns;
  }
  function pad(value, width) {
    var s2 = value + "", length3 = s2.length;
    return length3 < width ? new Array(width - length3 + 1).join(0) + s2 : s2;
  }
  function formatYear(year) {
    return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
  }
  function formatDate(date2) {
    var hours = date2.getUTCHours(), minutes = date2.getUTCMinutes(), seconds2 = date2.getUTCSeconds(), milliseconds2 = date2.getUTCMilliseconds();
    return isNaN(date2) ? "Invalid Date" : formatYear(date2.getUTCFullYear(), 4) + "-" + pad(date2.getUTCMonth() + 1, 2) + "-" + pad(date2.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
  }
  function dsv_default(delimiter) {
    var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text, f) {
      var convert, columns, rows = parseRows(text, function(row, i) {
        if (convert) return convert(row, i - 1);
        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
      });
      rows.columns = columns || [];
      return rows;
    }
    function parseRows(text, f) {
      var rows = [], N3 = text.length, I2 = 0, n = 0, t, eof = N3 <= 0, eol = false;
      if (text.charCodeAt(N3 - 1) === NEWLINE) --N3;
      if (text.charCodeAt(N3 - 1) === RETURN) --N3;
      function token() {
        if (eof) return EOF;
        if (eol) return eol = false, EOL;
        var i, j3 = I2, c6;
        if (text.charCodeAt(j3) === QUOTE) {
          while (I2++ < N3 && text.charCodeAt(I2) !== QUOTE || text.charCodeAt(++I2) === QUOTE) ;
          if ((i = I2) >= N3) eof = true;
          else if ((c6 = text.charCodeAt(I2++)) === NEWLINE) eol = true;
          else if (c6 === RETURN) {
            eol = true;
            if (text.charCodeAt(I2) === NEWLINE) ++I2;
          }
          return text.slice(j3 + 1, i - 1).replace(/""/g, '"');
        }
        while (I2 < N3) {
          if ((c6 = text.charCodeAt(i = I2++)) === NEWLINE) eol = true;
          else if (c6 === RETURN) {
            eol = true;
            if (text.charCodeAt(I2) === NEWLINE) ++I2;
          } else if (c6 !== DELIMITER) continue;
          return text.slice(j3, i);
        }
        return eof = true, text.slice(j3, N3);
      }
      while ((t = token()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF) row.push(t), t = token();
        if (f && (row = f(row, n++)) == null) continue;
        rows.push(row);
      }
      return rows;
    }
    function preformatBody(rows, columns) {
      return rows.map(function(row) {
        return columns.map(function(column) {
          return formatValue(row[column]);
        }).join(delimiter);
      });
    }
    function format2(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
      if (columns == null) columns = inferColumns(rows);
      return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(value) {
      return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
    }
    return {
      parse,
      parseRows,
      format: format2,
      formatBody,
      formatRows,
      formatRow,
      formatValue
    };
  }

  // node_modules/d3-dsv/src/csv.js
  var csv = dsv_default(",");
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatBody = csv.formatBody;
  var csvFormatRows = csv.formatRows;
  var csvFormatRow = csv.formatRow;
  var csvFormatValue = csv.formatValue;

  // node_modules/d3-dsv/src/tsv.js
  var tsv = dsv_default("	");
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatBody = tsv.formatBody;
  var tsvFormatRows = tsv.formatRows;
  var tsvFormatRow = tsv.formatRow;
  var tsvFormatValue = tsv.formatValue;

  // node_modules/d3-dsv/src/autoType.js
  function autoType(object2) {
    for (var key in object2) {
      var value = object2[key].trim(), number5, m4;
      if (!value) value = null;
      else if (value === "true") value = true;
      else if (value === "false") value = false;
      else if (value === "NaN") value = NaN;
      else if (!isNaN(number5 = +value)) value = number5;
      else if (m4 = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
        if (fixtz && !!m4[4] && !m4[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
        value = new Date(value);
      } else continue;
      object2[key] = value;
    }
    return object2;
  }
  var fixtz = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();

  // node_modules/d3-fetch/src/blob.js
  function responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
  }
  function blob_default(input, init2) {
    return fetch(input, init2).then(responseBlob);
  }

  // node_modules/d3-fetch/src/buffer.js
  function responseArrayBuffer(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.arrayBuffer();
  }
  function buffer_default(input, init2) {
    return fetch(input, init2).then(responseArrayBuffer);
  }

  // node_modules/d3-fetch/src/text.js
  function responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
  }
  function text_default3(input, init2) {
    return fetch(input, init2).then(responseText);
  }

  // node_modules/d3-fetch/src/dsv.js
  function dsvParse(parse) {
    return function(input, init2, row) {
      if (arguments.length === 2 && typeof init2 === "function") row = init2, init2 = void 0;
      return text_default3(input, init2).then(function(response) {
        return parse(response, row);
      });
    };
  }
  function dsv(delimiter, input, init2, row) {
    if (arguments.length === 3 && typeof init2 === "function") row = init2, init2 = void 0;
    var format2 = dsv_default(delimiter);
    return text_default3(input, init2).then(function(response) {
      return format2.parse(response, row);
    });
  }
  var csv2 = dsvParse(csvParse);
  var tsv2 = dsvParse(tsvParse);

  // node_modules/d3-fetch/src/image.js
  function image_default(input, init2) {
    return new Promise(function(resolve, reject) {
      var image = new Image();
      for (var key in init2) image[key] = init2[key];
      image.onerror = reject;
      image.onload = function() {
        resolve(image);
      };
      image.src = input;
    });
  }

  // node_modules/d3-fetch/src/json.js
  function responseJson(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    if (response.status === 204 || response.status === 205) return;
    return response.json();
  }
  function json_default(input, init2) {
    return fetch(input, init2).then(responseJson);
  }

  // node_modules/d3-fetch/src/xml.js
  function parser(type2) {
    return (input, init2) => text_default3(input, init2).then((text) => new DOMParser().parseFromString(text, type2));
  }
  var xml_default = parser("application/xml");
  var html = parser("text/html");
  var svg = parser("image/svg+xml");

  // node_modules/d3-force/src/center.js
  function center_default(x6, y5) {
    var nodes, strength = 1;
    if (x6 == null) x6 = 0;
    if (y5 == null) y5 = 0;
    function force() {
      var i, n = nodes.length, node, sx = 0, sy = 0;
      for (i = 0; i < n; ++i) {
        node = nodes[i], sx += node.x, sy += node.y;
      }
      for (sx = (sx / n - x6) * strength, sy = (sy / n - y5) * strength, i = 0; i < n; ++i) {
        node = nodes[i], node.x -= sx, node.y -= sy;
      }
    }
    force.initialize = function(_3) {
      nodes = _3;
    };
    force.x = function(_3) {
      return arguments.length ? (x6 = +_3, force) : x6;
    };
    force.y = function(_3) {
      return arguments.length ? (y5 = +_3, force) : y5;
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = +_3, force) : strength;
    };
    return force;
  }

  // node_modules/d3-quadtree/src/add.js
  function add_default(d) {
    const x6 = +this._x.call(null, d), y5 = +this._y.call(null, d);
    return add(this.cover(x6, y5), x6, y5, d);
  }
  function add(tree, x6, y5, d) {
    if (isNaN(x6) || isNaN(y5)) return tree;
    var parent, node = tree._root, leaf = { data: d }, x06 = tree._x0, y06 = tree._y0, x12 = tree._x1, y12 = tree._y1, xm, ym, xp, yp, right2, bottom2, i, j3;
    if (!node) return tree._root = leaf, tree;
    while (node.length) {
      if (right2 = x6 >= (xm = (x06 + x12) / 2)) x06 = xm;
      else x12 = xm;
      if (bottom2 = y5 >= (ym = (y06 + y12) / 2)) y06 = ym;
      else y12 = ym;
      if (parent = node, !(node = node[i = bottom2 << 1 | right2])) return parent[i] = leaf, tree;
    }
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x6 === xp && y5 === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    do {
      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
      if (right2 = x6 >= (xm = (x06 + x12) / 2)) x06 = xm;
      else x12 = xm;
      if (bottom2 = y5 >= (ym = (y06 + y12) / 2)) y06 = ym;
      else y12 = ym;
    } while ((i = bottom2 << 1 | right2) === (j3 = (yp >= ym) << 1 | xp >= xm));
    return parent[j3] = node, parent[i] = leaf, tree;
  }
  function addAll(data) {
    var d, i, n = data.length, x6, y5, xz = new Array(n), yz = new Array(n), x06 = Infinity, y06 = Infinity, x12 = -Infinity, y12 = -Infinity;
    for (i = 0; i < n; ++i) {
      if (isNaN(x6 = +this._x.call(null, d = data[i])) || isNaN(y5 = +this._y.call(null, d))) continue;
      xz[i] = x6;
      yz[i] = y5;
      if (x6 < x06) x06 = x6;
      if (x6 > x12) x12 = x6;
      if (y5 < y06) y06 = y5;
      if (y5 > y12) y12 = y5;
    }
    if (x06 > x12 || y06 > y12) return this;
    this.cover(x06, y06).cover(x12, y12);
    for (i = 0; i < n; ++i) {
      add(this, xz[i], yz[i], data[i]);
    }
    return this;
  }

  // node_modules/d3-quadtree/src/cover.js
  function cover_default(x6, y5) {
    if (isNaN(x6 = +x6) || isNaN(y5 = +y5)) return this;
    var x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1;
    if (isNaN(x06)) {
      x12 = (x06 = Math.floor(x6)) + 1;
      y12 = (y06 = Math.floor(y5)) + 1;
    } else {
      var z3 = x12 - x06 || 1, node = this._root, parent, i;
      while (x06 > x6 || x6 >= x12 || y06 > y5 || y5 >= y12) {
        i = (y5 < y06) << 1 | x6 < x06;
        parent = new Array(4), parent[i] = node, node = parent, z3 *= 2;
        switch (i) {
          case 0:
            x12 = x06 + z3, y12 = y06 + z3;
            break;
          case 1:
            x06 = x12 - z3, y12 = y06 + z3;
            break;
          case 2:
            x12 = x06 + z3, y06 = y12 - z3;
            break;
          case 3:
            x06 = x12 - z3, y06 = y12 - z3;
            break;
        }
      }
      if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x06;
    this._y0 = y06;
    this._x1 = x12;
    this._y1 = y12;
    return this;
  }

  // node_modules/d3-quadtree/src/data.js
  function data_default2() {
    var data = [];
    this.visit(function(node) {
      if (!node.length) do
        data.push(node.data);
      while (node = node.next);
    });
    return data;
  }

  // node_modules/d3-quadtree/src/extent.js
  function extent_default(_3) {
    return arguments.length ? this.cover(+_3[0][0], +_3[0][1]).cover(+_3[1][0], +_3[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }

  // node_modules/d3-quadtree/src/quad.js
  function quad_default(node, x06, y06, x12, y12) {
    this.node = node;
    this.x0 = x06;
    this.y0 = y06;
    this.x1 = x12;
    this.y1 = y12;
  }

  // node_modules/d3-quadtree/src/find.js
  function find_default(x6, y5, radius) {
    var data, x06 = this._x0, y06 = this._y0, x12, y12, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q3, i;
    if (node) quads.push(new quad_default(node, x06, y06, x32, y32));
    if (radius == null) radius = Infinity;
    else {
      x06 = x6 - radius, y06 = y5 - radius;
      x32 = x6 + radius, y32 = y5 + radius;
      radius *= radius;
    }
    while (q3 = quads.pop()) {
      if (!(node = q3.node) || (x12 = q3.x0) > x32 || (y12 = q3.y0) > y32 || (x22 = q3.x1) < x06 || (y22 = q3.y1) < y06) continue;
      if (node.length) {
        var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
        quads.push(
          new quad_default(node[3], xm, ym, x22, y22),
          new quad_default(node[2], x12, ym, xm, y22),
          new quad_default(node[1], xm, y12, x22, ym),
          new quad_default(node[0], x12, y12, xm, ym)
        );
        if (i = (y5 >= ym) << 1 | x6 >= xm) {
          q3 = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q3;
        }
      } else {
        var dx = x6 - +this._x.call(null, node.data), dy = y5 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x06 = x6 - d, y06 = y5 - d;
          x32 = x6 + d, y32 = y5 + d;
          data = node.data;
        }
      }
    }
    return data;
  }

  // node_modules/d3-quadtree/src/remove.js
  function remove_default3(d) {
    if (isNaN(x6 = +this._x.call(null, d)) || isNaN(y5 = +this._y.call(null, d))) return this;
    var parent, node = this._root, retainer, previous, next, x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1, x6, y5, xm, ym, right2, bottom2, i, j3;
    if (!node) return this;
    if (node.length) while (true) {
      if (right2 = x6 >= (xm = (x06 + x12) / 2)) x06 = xm;
      else x12 = xm;
      if (bottom2 = y5 >= (ym = (y06 + y12) / 2)) y06 = ym;
      else y12 = ym;
      if (!(parent = node, node = node[i = bottom2 << 1 | right2])) return this;
      if (!node.length) break;
      if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j3 = i;
    }
    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    if (previous) return next ? previous.next = next : delete previous.next, this;
    if (!parent) return this._root = next, this;
    next ? parent[i] = next : delete parent[i];
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
      if (retainer) retainer[j3] = node;
      else this._root = node;
    }
    return this;
  }
  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
    return this;
  }

  // node_modules/d3-quadtree/src/root.js
  function root_default() {
    return this._root;
  }

  // node_modules/d3-quadtree/src/size.js
  function size_default2() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length) do
        ++size;
      while (node = node.next);
    });
    return size;
  }

  // node_modules/d3-quadtree/src/visit.js
  function visit_default(callback) {
    var quads = [], q3, node = this._root, child, x06, y06, x12, y12;
    if (node) quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
    while (q3 = quads.pop()) {
      if (!callback(node = q3.node, x06 = q3.x0, y06 = q3.y0, x12 = q3.x1, y12 = q3.y1) && node.length) {
        var xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
        if (child = node[3]) quads.push(new quad_default(child, xm, ym, x12, y12));
        if (child = node[2]) quads.push(new quad_default(child, x06, ym, xm, y12));
        if (child = node[1]) quads.push(new quad_default(child, xm, y06, x12, ym));
        if (child = node[0]) quads.push(new quad_default(child, x06, y06, xm, ym));
      }
    }
    return this;
  }

  // node_modules/d3-quadtree/src/visitAfter.js
  function visitAfter_default(callback) {
    var quads = [], next = [], q3;
    if (this._root) quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q3 = quads.pop()) {
      var node = q3.node;
      if (node.length) {
        var child, x06 = q3.x0, y06 = q3.y0, x12 = q3.x1, y12 = q3.y1, xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
        if (child = node[0]) quads.push(new quad_default(child, x06, y06, xm, ym));
        if (child = node[1]) quads.push(new quad_default(child, xm, y06, x12, ym));
        if (child = node[2]) quads.push(new quad_default(child, x06, ym, xm, y12));
        if (child = node[3]) quads.push(new quad_default(child, xm, ym, x12, y12));
      }
      next.push(q3);
    }
    while (q3 = next.pop()) {
      callback(q3.node, q3.x0, q3.y0, q3.x1, q3.y1);
    }
    return this;
  }

  // node_modules/d3-quadtree/src/x.js
  function defaultX2(d) {
    return d[0];
  }
  function x_default(_3) {
    return arguments.length ? (this._x = _3, this) : this._x;
  }

  // node_modules/d3-quadtree/src/y.js
  function defaultY2(d) {
    return d[1];
  }
  function y_default(_3) {
    return arguments.length ? (this._y = _3, this) : this._y;
  }

  // node_modules/d3-quadtree/src/quadtree.js
  function quadtree(nodes, x6, y5) {
    var tree = new Quadtree(x6 == null ? defaultX2 : x6, y5 == null ? defaultY2 : y5, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }
  function Quadtree(x6, y5, x06, y06, x12, y12) {
    this._x = x6;
    this._y = y5;
    this._x0 = x06;
    this._y0 = y06;
    this._x1 = x12;
    this._y1 = y12;
    this._root = void 0;
  }
  function leaf_copy(leaf) {
    var copy3 = { data: leaf.data }, next = copy3;
    while (leaf = leaf.next) next = next.next = { data: leaf.data };
    return copy3;
  }
  var treeProto = quadtree.prototype = Quadtree.prototype;
  treeProto.copy = function() {
    var copy3 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy3;
    if (!node.length) return copy3._root = leaf_copy(node), copy3;
    nodes = [{ source: node, target: copy3._root = new Array(4) }];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length) nodes.push({ source: child, target: node.target[i] = new Array(4) });
          else node.target[i] = leaf_copy(child);
        }
      }
    }
    return copy3;
  };
  treeProto.add = add_default;
  treeProto.addAll = addAll;
  treeProto.cover = cover_default;
  treeProto.data = data_default2;
  treeProto.extent = extent_default;
  treeProto.find = find_default;
  treeProto.remove = remove_default3;
  treeProto.removeAll = removeAll;
  treeProto.root = root_default;
  treeProto.size = size_default2;
  treeProto.visit = visit_default;
  treeProto.visitAfter = visitAfter_default;
  treeProto.x = x_default;
  treeProto.y = y_default;

  // node_modules/d3-force/src/constant.js
  function constant_default7(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-force/src/jiggle.js
  function jiggle_default(random) {
    return (random() - 0.5) * 1e-6;
  }

  // node_modules/d3-force/src/collide.js
  function x3(d) {
    return d.x + d.vx;
  }
  function y2(d) {
    return d.y + d.vy;
  }
  function collide_default(radius) {
    var nodes, radii, random, strength = 1, iterations2 = 1;
    if (typeof radius !== "function") radius = constant_default7(radius == null ? 1 : +radius);
    function force() {
      var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
      for (var k4 = 0; k4 < iterations2; ++k4) {
        tree = quadtree(nodes, x3, y2).visitAfter(prepare);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          ri = radii[node.index], ri2 = ri * ri;
          xi = node.x + node.vx;
          yi = node.y + node.vy;
          tree.visit(apply);
        }
      }
      function apply(quad, x06, y06, x12, y12) {
        var data = quad.data, rj = quad.r, r = ri + rj;
        if (data) {
          if (data.index > node.index) {
            var x6 = xi - data.x - data.vx, y5 = yi - data.y - data.vy, l2 = x6 * x6 + y5 * y5;
            if (l2 < r * r) {
              if (x6 === 0) x6 = jiggle_default(random), l2 += x6 * x6;
              if (y5 === 0) y5 = jiggle_default(random), l2 += y5 * y5;
              l2 = (r - (l2 = Math.sqrt(l2))) / l2 * strength;
              node.vx += (x6 *= l2) * (r = (rj *= rj) / (ri2 + rj));
              node.vy += (y5 *= l2) * r;
              data.vx -= x6 * (r = 1 - r);
              data.vy -= y5 * r;
            }
          }
          return;
        }
        return x06 > xi + r || x12 < xi - r || y06 > yi + r || y12 < yi - r;
      }
    }
    function prepare(quad) {
      if (quad.data) return quad.r = radii[quad.data.index];
      for (var i = quad.r = 0; i < 4; ++i) {
        if (quad[i] && quad[i].r > quad.r) {
          quad.r = quad[i].r;
        }
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node;
      radii = new Array(n);
      for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.iterations = function(_3) {
      return arguments.length ? (iterations2 = +_3, force) : iterations2;
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = +_3, force) : strength;
    };
    force.radius = function(_3) {
      return arguments.length ? (radius = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : radius;
    };
    return force;
  }

  // node_modules/d3-force/src/link.js
  function index2(d) {
    return d.index;
  }
  function find2(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
  }
  function link_default(links) {
    var id2 = index2, strength = defaultStrength, strengths, distance = constant_default7(30), distances, nodes, count3, bias, random, iterations2 = 1;
    if (links == null) links = [];
    function defaultStrength(link3) {
      return 1 / Math.min(count3[link3.source.index], count3[link3.target.index]);
    }
    function force(alpha) {
      for (var k4 = 0, n = links.length; k4 < iterations2; ++k4) {
        for (var i = 0, link3, source, target, x6, y5, l2, b10; i < n; ++i) {
          link3 = links[i], source = link3.source, target = link3.target;
          x6 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
          y5 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
          l2 = Math.sqrt(x6 * x6 + y5 * y5);
          l2 = (l2 - distances[i]) / l2 * alpha * strengths[i];
          x6 *= l2, y5 *= l2;
          target.vx -= x6 * (b10 = bias[i]);
          target.vy -= y5 * b10;
          source.vx += x6 * (b10 = 1 - b10);
          source.vy += y5 * b10;
        }
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, m4 = links.length, nodeById = new Map(nodes.map((d, i2) => [id2(d, i2, nodes), d])), link3;
      for (i = 0, count3 = new Array(n); i < m4; ++i) {
        link3 = links[i], link3.index = i;
        if (typeof link3.source !== "object") link3.source = find2(nodeById, link3.source);
        if (typeof link3.target !== "object") link3.target = find2(nodeById, link3.target);
        count3[link3.source.index] = (count3[link3.source.index] || 0) + 1;
        count3[link3.target.index] = (count3[link3.target.index] || 0) + 1;
      }
      for (i = 0, bias = new Array(m4); i < m4; ++i) {
        link3 = links[i], bias[i] = count3[link3.source.index] / (count3[link3.source.index] + count3[link3.target.index]);
      }
      strengths = new Array(m4), initializeStrength();
      distances = new Array(m4), initializeDistance();
    }
    function initializeStrength() {
      if (!nodes) return;
      for (var i = 0, n = links.length; i < n; ++i) {
        strengths[i] = +strength(links[i], i, links);
      }
    }
    function initializeDistance() {
      if (!nodes) return;
      for (var i = 0, n = links.length; i < n; ++i) {
        distances[i] = +distance(links[i], i, links);
      }
    }
    force.initialize = function(_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.links = function(_3) {
      return arguments.length ? (links = _3, initialize(), force) : links;
    };
    force.id = function(_3) {
      return arguments.length ? (id2 = _3, force) : id2;
    };
    force.iterations = function(_3) {
      return arguments.length ? (iterations2 = +_3, force) : iterations2;
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default7(+_3), initializeStrength(), force) : strength;
    };
    force.distance = function(_3) {
      return arguments.length ? (distance = typeof _3 === "function" ? _3 : constant_default7(+_3), initializeDistance(), force) : distance;
    };
    return force;
  }

  // node_modules/d3-force/src/lcg.js
  var a = 1664525;
  var c = 1013904223;
  var m2 = 4294967296;
  function lcg_default() {
    let s2 = 1;
    return () => (s2 = (a * s2 + c) % m2) / m2;
  }

  // node_modules/d3-force/src/simulation.js
  function x4(d) {
    return d.x;
  }
  function y3(d) {
    return d.y;
  }
  var initialRadius = 10;
  var initialAngle = Math.PI * (3 - Math.sqrt(5));
  function simulation_default(nodes) {
    var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default("tick", "end"), random = lcg_default();
    if (nodes == null) nodes = [];
    function step() {
      tick();
      event.call("tick", simulation);
      if (alpha < alphaMin) {
        stepper.stop();
        event.call("end", simulation);
      }
    }
    function tick(iterations2) {
      var i, n = nodes.length, node;
      if (iterations2 === void 0) iterations2 = 1;
      for (var k4 = 0; k4 < iterations2; ++k4) {
        alpha += (alphaTarget - alpha) * alphaDecay;
        forces.forEach(function(force) {
          force(alpha);
        });
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          if (node.fx == null) node.x += node.vx *= velocityDecay;
          else node.x = node.fx, node.vx = 0;
          if (node.fy == null) node.y += node.vy *= velocityDecay;
          else node.y = node.fy, node.vy = 0;
        }
      }
      return simulation;
    }
    function initializeNodes() {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.index = i;
        if (node.fx != null) node.x = node.fx;
        if (node.fy != null) node.y = node.fy;
        if (isNaN(node.x) || isNaN(node.y)) {
          var radius = initialRadius * Math.sqrt(0.5 + i), angle2 = i * initialAngle;
          node.x = radius * Math.cos(angle2);
          node.y = radius * Math.sin(angle2);
        }
        if (isNaN(node.vx) || isNaN(node.vy)) {
          node.vx = node.vy = 0;
        }
      }
    }
    function initializeForce(force) {
      if (force.initialize) force.initialize(nodes, random);
      return force;
    }
    initializeNodes();
    return simulation = {
      tick,
      restart: function() {
        return stepper.restart(step), simulation;
      },
      stop: function() {
        return stepper.stop(), simulation;
      },
      nodes: function(_3) {
        return arguments.length ? (nodes = _3, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
      },
      alpha: function(_3) {
        return arguments.length ? (alpha = +_3, simulation) : alpha;
      },
      alphaMin: function(_3) {
        return arguments.length ? (alphaMin = +_3, simulation) : alphaMin;
      },
      alphaDecay: function(_3) {
        return arguments.length ? (alphaDecay = +_3, simulation) : +alphaDecay;
      },
      alphaTarget: function(_3) {
        return arguments.length ? (alphaTarget = +_3, simulation) : alphaTarget;
      },
      velocityDecay: function(_3) {
        return arguments.length ? (velocityDecay = 1 - _3, simulation) : 1 - velocityDecay;
      },
      randomSource: function(_3) {
        return arguments.length ? (random = _3, forces.forEach(initializeForce), simulation) : random;
      },
      force: function(name, _3) {
        return arguments.length > 1 ? (_3 == null ? forces.delete(name) : forces.set(name, initializeForce(_3)), simulation) : forces.get(name);
      },
      find: function(x6, y5, radius) {
        var i = 0, n = nodes.length, dx, dy, d2, node, closest;
        if (radius == null) radius = Infinity;
        else radius *= radius;
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dx = x6 - node.x;
          dy = y5 - node.y;
          d2 = dx * dx + dy * dy;
          if (d2 < radius) closest = node, radius = d2;
        }
        return closest;
      },
      on: function(name, _3) {
        return arguments.length > 1 ? (event.on(name, _3), simulation) : event.on(name);
      }
    };
  }

  // node_modules/d3-force/src/manyBody.js
  function manyBody_default() {
    var nodes, node, random, alpha, strength = constant_default7(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_3) {
      var i, n = nodes.length, tree = quadtree(nodes, x4, y3).visitAfter(accumulate);
      for (alpha = _3, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length, node2;
      strengths = new Array(n);
      for (i = 0; i < n; ++i) node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
    }
    function accumulate(quad) {
      var strength2 = 0, q3, c6, weight = 0, x6, y5, i;
      if (quad.length) {
        for (x6 = y5 = i = 0; i < 4; ++i) {
          if ((q3 = quad[i]) && (c6 = Math.abs(q3.value))) {
            strength2 += q3.value, weight += c6, x6 += c6 * q3.x, y5 += c6 * q3.y;
          }
        }
        quad.x = x6 / weight;
        quad.y = y5 / weight;
      } else {
        q3 = quad;
        q3.x = q3.data.x;
        q3.y = q3.data.y;
        do
          strength2 += strengths[q3.data.index];
        while (q3 = q3.next);
      }
      quad.value = strength2;
    }
    function apply(quad, x12, _3, x22) {
      if (!quad.value) return true;
      var x6 = quad.x - node.x, y5 = quad.y - node.y, w3 = x22 - x12, l2 = x6 * x6 + y5 * y5;
      if (w3 * w3 / theta2 < l2) {
        if (l2 < distanceMax2) {
          if (x6 === 0) x6 = jiggle_default(random), l2 += x6 * x6;
          if (y5 === 0) y5 = jiggle_default(random), l2 += y5 * y5;
          if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
          node.vx += x6 * quad.value * alpha / l2;
          node.vy += y5 * quad.value * alpha / l2;
        }
        return true;
      } else if (quad.length || l2 >= distanceMax2) return;
      if (quad.data !== node || quad.next) {
        if (x6 === 0) x6 = jiggle_default(random), l2 += x6 * x6;
        if (y5 === 0) y5 = jiggle_default(random), l2 += y5 * y5;
        if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
      }
      do
        if (quad.data !== node) {
          w3 = strengths[quad.data.index] * alpha / l2;
          node.vx += x6 * w3;
          node.vy += y5 * w3;
        }
      while (quad = quad.next);
    }
    force.initialize = function(_nodes, _random) {
      nodes = _nodes;
      random = _random;
      initialize();
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : strength;
    };
    force.distanceMin = function(_3) {
      return arguments.length ? (distanceMin2 = _3 * _3, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_3) {
      return arguments.length ? (distanceMax2 = _3 * _3, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_3) {
      return arguments.length ? (theta2 = _3 * _3, force) : Math.sqrt(theta2);
    };
    return force;
  }

  // node_modules/d3-force/src/radial.js
  function radial_default(radius, x6, y5) {
    var nodes, strength = constant_default7(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = constant_default7(+radius);
    if (x6 == null) x6 = 0;
    if (y5 == null) y5 = 0;
    function force(alpha) {
      for (var i = 0, n = nodes.length; i < n; ++i) {
        var node = nodes[i], dx = node.x - x6 || 1e-6, dy = node.y - y5 || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k4 = (radiuses[i] - r) * strengths[i] * alpha / r;
        node.vx += dx * k4;
        node.vy += dy * k4;
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      radiuses = new Array(n);
      for (i = 0; i < n; ++i) {
        radiuses[i] = +radius(nodes[i], i, nodes);
        strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_3) {
      nodes = _3, initialize();
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : strength;
    };
    force.radius = function(_3) {
      return arguments.length ? (radius = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : radius;
    };
    force.x = function(_3) {
      return arguments.length ? (x6 = +_3, force) : x6;
    };
    force.y = function(_3) {
      return arguments.length ? (y5 = +_3, force) : y5;
    };
    return force;
  }

  // node_modules/d3-force/src/x.js
  function x_default2(x6) {
    var strength = constant_default7(0.1), nodes, strengths, xz;
    if (typeof x6 !== "function") x6 = constant_default7(x6 == null ? 0 : +x6);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      xz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(xz[i] = +x6(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_3) {
      nodes = _3;
      initialize();
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : strength;
    };
    force.x = function(_3) {
      return arguments.length ? (x6 = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : x6;
    };
    return force;
  }

  // node_modules/d3-force/src/y.js
  function y_default2(y5) {
    var strength = constant_default7(0.1), nodes, strengths, yz;
    if (typeof y5 !== "function") y5 = constant_default7(y5 == null ? 0 : +y5);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
      }
    }
    function initialize() {
      if (!nodes) return;
      var i, n = nodes.length;
      strengths = new Array(n);
      yz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(yz[i] = +y5(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_3) {
      nodes = _3;
      initialize();
    };
    force.strength = function(_3) {
      return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : strength;
    };
    force.y = function(_3) {
      return arguments.length ? (y5 = typeof _3 === "function" ? _3 : constant_default7(+_3), initialize(), force) : y5;
    };
    return force;
  }

  // node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x6) {
    return Math.abs(x6 = Math.round(x6)) >= 1e21 ? x6.toLocaleString("en").replace(/,/g, "") : x6.toString(10);
  }
  function formatDecimalParts(x6, p3) {
    if (!isFinite(x6) || x6 === 0) return null;
    var i = (x6 = p3 ? x6.toExponential(p3 - 1) : x6.toExponential()).indexOf("e"), coefficient = x6.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x6.slice(i + 1)
    ];
  }

  // node_modules/d3-format/src/exponent.js
  function exponent_default(x6) {
    return x6 = formatDecimalParts(Math.abs(x6)), x6 ? x6[1] : NaN;
  }

  // node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width) {
      var i = value.length, t = [], j3 = 0, g = grouping[0], length3 = 0;
      while (i > 0 && g > 0) {
        if (length3 + g + 1 > width) g = Math.max(1, width - length3);
        t.push(value.substring(i -= g, i + g));
        if ((length3 += g + 1) > width) break;
        g = grouping[j3 = (j3 + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }

  // node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // node_modules/d3-format/src/formatSpecifier.js
  var re2 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re2.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s2) {
    out: for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0) i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i]) break out;
          if (i0 > 0) i0 = 0;
          break;
      }
    }
    return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
  }

  // node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x6, p3) {
    var d = formatDecimalParts(x6, p3);
    if (!d) return prefixExponent = void 0, x6.toPrecision(p3);
    var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x6, Math.max(0, p3 + i - 1))[0];
  }

  // node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x6, p3) {
    var d = formatDecimalParts(x6, p3);
    if (!d) return x6 + "";
    var coefficient = d[0], exponent2 = d[1];
    return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
  }

  // node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": (x6, p3) => (x6 * 100).toFixed(p3),
    "b": (x6) => Math.round(x6).toString(2),
    "c": (x6) => x6 + "",
    "d": formatDecimal_default,
    "e": (x6, p3) => x6.toExponential(p3),
    "f": (x6, p3) => x6.toFixed(p3),
    "g": (x6, p3) => x6.toPrecision(p3),
    "o": (x6) => Math.round(x6).toString(8),
    "p": (x6, p3) => formatRounded_default(x6 * 100, p3),
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": (x6) => Math.round(x6).toString(16).toUpperCase(),
    "x": (x6) => Math.round(x6).toString(16)
  };

  // node_modules/d3-format/src/identity.js
  function identity_default2(x6) {
    return x6;
  }

  // node_modules/d3-format/src/locale.js
  var map3 = Array.prototype.map;
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale3) {
    var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
    function newFormat(specifier, options) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
      if (type2 === "n") comma = true, type2 = "g";
      else if (!formatTypes_default[type2]) precision === void 0 && (precision = 12), trim = true, type2 = "g";
      if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
      var prefix = (options && options.prefix !== void 0 ? options.prefix : "") + (symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : ""), suffix = (symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "") + (options && options.suffix !== void 0 ? options.suffix : "");
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix, valueSuffix = suffix, i, n, c6;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim) value = formatTrim_default(value);
          if (valueNegative && +value === 0 && sign3 !== "+") valueNegative = false;
          valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : minus : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
          valueSuffix = (type2 === "s" && !isNaN(value) && prefixExponent !== void 0 ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c6 = value.charCodeAt(i), 48 > c6 || c6 > 57) {
                valueSuffix = (c6 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero3) value = group2(value, Infinity);
        var length3 = valuePrefix.length + value.length + valueSuffix.length, padding = length3 < width ? new Array(width - length3 + 1).join(fill) : "";
        if (comma && zero3) value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length3 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length3);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k4 = Math.pow(10, -e), f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier), { suffix: prefixes[8 + e / 3] });
      return function(value2) {
        return f(k4 * value2);
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // node_modules/d3-format/src/precisionFixed.js
  function precisionFixed_default(step) {
    return Math.max(0, -exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionPrefix.js
  function precisionPrefix_default(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionRound.js
  function precisionRound_default(step, max5) {
    step = Math.abs(step), max5 = Math.abs(max5) - step;
    return Math.max(0, exponent_default(max5) - exponent_default(step)) + 1;
  }

  // node_modules/d3-geo/src/math.js
  var epsilon7 = 1e-6;
  var epsilon22 = 1e-12;
  var pi4 = Math.PI;
  var halfPi3 = pi4 / 2;
  var quarterPi = pi4 / 4;
  var tau5 = pi4 * 2;
  var degrees3 = 180 / pi4;
  var radians2 = pi4 / 180;
  var abs3 = Math.abs;
  var atan = Math.atan;
  var atan2 = Math.atan2;
  var cos2 = Math.cos;
  var ceil = Math.ceil;
  var exp = Math.exp;
  var hypot = Math.hypot;
  var log = Math.log;
  var pow2 = Math.pow;
  var sin2 = Math.sin;
  var sign = Math.sign || function(x6) {
    return x6 > 0 ? 1 : x6 < 0 ? -1 : 0;
  };
  var sqrt = Math.sqrt;
  var tan = Math.tan;
  function acos(x6) {
    return x6 > 1 ? 0 : x6 < -1 ? pi4 : Math.acos(x6);
  }
  function asin(x6) {
    return x6 > 1 ? halfPi3 : x6 < -1 ? -halfPi3 : Math.asin(x6);
  }
  function haversin(x6) {
    return (x6 = sin2(x6 / 2)) * x6;
  }

  // node_modules/d3-geo/src/noop.js
  function noop2() {
  }

  // node_modules/d3-geo/src/stream.js
  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }
  var streamObjectType = {
    Feature: function(object2, stream) {
      streamGeometry(object2.geometry, stream);
    },
    FeatureCollection: function(object2, stream) {
      var features = object2.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };
  var streamGeometryType = {
    Sphere: function(object2, stream) {
      stream.sphere();
    },
    Point: function(object2, stream) {
      object2 = object2.coordinates;
      stream.point(object2[0], object2[1], object2[2]);
    },
    MultiPoint: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
    },
    LineString: function(object2, stream) {
      streamLine(object2.coordinates, stream, 0);
    },
    MultiLineString: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) streamLine(coordinates2[i], stream, 0);
    },
    Polygon: function(object2, stream) {
      streamPolygon(object2.coordinates, stream);
    },
    MultiPolygon: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) streamPolygon(coordinates2[i], stream);
    },
    GeometryCollection: function(object2, stream) {
      var geometries = object2.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };
  function streamLine(coordinates2, stream, closed) {
    var i = -1, n = coordinates2.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }
  function streamPolygon(coordinates2, stream) {
    var i = -1, n = coordinates2.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates2[i], stream, 1);
    stream.polygonEnd();
  }
  function stream_default(object2, stream) {
    if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
      streamObjectType[object2.type](object2, stream);
    } else {
      streamGeometry(object2, stream);
    }
  }

  // node_modules/d3-geo/src/area.js
  var areaRingSum = new Adder();
  var areaSum = new Adder();
  var lambda00;
  var phi00;
  var lambda0;
  var cosPhi0;
  var sinPhi0;
  var areaStream = {
    point: noop2,
    lineStart: noop2,
    lineEnd: noop2,
    polygonStart: function() {
      areaRingSum = new Adder();
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
      var areaRing = +areaRingSum;
      areaSum.add(areaRing < 0 ? tau5 + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop2;
    },
    sphere: function() {
      areaSum.add(tau5);
    }
  };
  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }
  function areaRingEnd() {
    areaPoint(lambda00, phi00);
  }
  function areaPointFirst(lambda, phi2) {
    areaStream.point = areaPoint;
    lambda00 = lambda, phi00 = phi2;
    lambda *= radians2, phi2 *= radians2;
    lambda0 = lambda, cosPhi0 = cos2(phi2 = phi2 / 2 + quarterPi), sinPhi0 = sin2(phi2);
  }
  function areaPoint(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    phi2 = phi2 / 2 + quarterPi;
    var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos2(phi2), sinPhi = sin2(phi2), k4 = sinPhi0 * sinPhi, u4 = cosPhi0 * cosPhi + k4 * cos2(adLambda), v4 = k4 * sdLambda * sin2(adLambda);
    areaRingSum.add(atan2(v4, u4));
    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
  }
  function area_default2(object2) {
    areaSum = new Adder();
    stream_default(object2, areaStream);
    return areaSum * 2;
  }

  // node_modules/d3-geo/src/cartesian.js
  function spherical(cartesian2) {
    return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
  }
  function cartesian(spherical2) {
    var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
    return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
  }
  function cartesianDot(a4, b10) {
    return a4[0] * b10[0] + a4[1] * b10[1] + a4[2] * b10[2];
  }
  function cartesianCross(a4, b10) {
    return [a4[1] * b10[2] - a4[2] * b10[1], a4[2] * b10[0] - a4[0] * b10[2], a4[0] * b10[1] - a4[1] * b10[0]];
  }
  function cartesianAddInPlace(a4, b10) {
    a4[0] += b10[0], a4[1] += b10[1], a4[2] += b10[2];
  }
  function cartesianScale(vector, k4) {
    return [vector[0] * k4, vector[1] * k4, vector[2] * k4];
  }
  function cartesianNormalizeInPlace(d) {
    var l2 = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l2, d[1] /= l2, d[2] /= l2;
  }

  // node_modules/d3-geo/src/bounds.js
  var lambda02;
  var phi0;
  var lambda1;
  var phi1;
  var lambda2;
  var lambda002;
  var phi002;
  var p0;
  var deltaSum;
  var ranges;
  var range4;
  var boundsStream = {
    point: boundsPoint,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
      boundsStream.point = boundsRingPoint;
      boundsStream.lineStart = boundsRingStart;
      boundsStream.lineEnd = boundsRingEnd;
      deltaSum = new Adder();
      areaStream.polygonStart();
    },
    polygonEnd: function() {
      areaStream.polygonEnd();
      boundsStream.point = boundsPoint;
      boundsStream.lineStart = boundsLineStart;
      boundsStream.lineEnd = boundsLineEnd;
      if (areaRingSum < 0) lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      else if (deltaSum > epsilon7) phi1 = 90;
      else if (deltaSum < -epsilon7) phi0 = -90;
      range4[0] = lambda02, range4[1] = lambda1;
    },
    sphere: function() {
      lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    }
  };
  function boundsPoint(lambda, phi2) {
    ranges.push(range4 = [lambda02 = lambda, lambda1 = lambda]);
    if (phi2 < phi0) phi0 = phi2;
    if (phi2 > phi1) phi1 = phi2;
  }
  function linePoint(lambda, phi2) {
    var p3 = cartesian([lambda * radians2, phi2 * radians2]);
    if (p0) {
      var normal2 = cartesianCross(p0, p3), equatorial = [normal2[1], -normal2[0], 0], inflection = cartesianCross(equatorial, normal2);
      cartesianNormalizeInPlace(inflection);
      inflection = spherical(inflection);
      var delta = lambda - lambda2, sign3 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees3 * sign3, phii, antimeridian = abs3(delta) > 180;
      if (antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
        phii = inflection[1] * degrees3;
        if (phii > phi1) phi1 = phii;
      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
        phii = -inflection[1] * degrees3;
        if (phii < phi0) phi0 = phii;
      } else {
        if (phi2 < phi0) phi0 = phi2;
        if (phi2 > phi1) phi1 = phi2;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
        }
      } else {
        if (lambda1 >= lambda02) {
          if (lambda < lambda02) lambda02 = lambda;
          if (lambda > lambda1) lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda02, lambda) > angle(lambda02, lambda1)) lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda02, lambda1)) lambda02 = lambda;
          }
        }
      }
    } else {
      ranges.push(range4 = [lambda02 = lambda, lambda1 = lambda]);
    }
    if (phi2 < phi0) phi0 = phi2;
    if (phi2 > phi1) phi1 = phi2;
    p0 = p3, lambda2 = lambda;
  }
  function boundsLineStart() {
    boundsStream.point = linePoint;
  }
  function boundsLineEnd() {
    range4[0] = lambda02, range4[1] = lambda1;
    boundsStream.point = boundsPoint;
    p0 = null;
  }
  function boundsRingPoint(lambda, phi2) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs3(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      lambda002 = lambda, phi002 = phi2;
    }
    areaStream.point(lambda, phi2);
    linePoint(lambda, phi2);
  }
  function boundsRingStart() {
    areaStream.lineStart();
  }
  function boundsRingEnd() {
    boundsRingPoint(lambda002, phi002);
    areaStream.lineEnd();
    if (abs3(deltaSum) > epsilon7) lambda02 = -(lambda1 = 180);
    range4[0] = lambda02, range4[1] = lambda1;
    p0 = null;
  }
  function angle(lambda04, lambda12) {
    return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
  }
  function rangeCompare(a4, b10) {
    return a4[0] - b10[0];
  }
  function rangeContains(range5, x6) {
    return range5[0] <= range5[1] ? range5[0] <= x6 && x6 <= range5[1] : x6 < range5[0] || range5[1] < x6;
  }
  function bounds_default(feature) {
    var i, n, a4, b10, merged, deltaMax, delta;
    phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
    ranges = [];
    stream_default(feature, boundsStream);
    if (n = ranges.length) {
      ranges.sort(rangeCompare);
      for (i = 1, a4 = ranges[0], merged = [a4]; i < n; ++i) {
        b10 = ranges[i];
        if (rangeContains(a4, b10[0]) || rangeContains(a4, b10[1])) {
          if (angle(a4[0], b10[1]) > angle(a4[0], a4[1])) a4[1] = b10[1];
          if (angle(b10[0], a4[1]) > angle(a4[0], a4[1])) a4[0] = b10[0];
        } else {
          merged.push(a4 = b10);
        }
      }
      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a4 = merged[n]; i <= n; a4 = b10, ++i) {
        b10 = merged[i];
        if ((delta = angle(a4[1], b10[0])) > deltaMax) deltaMax = delta, lambda02 = b10[0], lambda1 = a4[1];
      }
    }
    ranges = range4 = null;
    return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
  }

  // node_modules/d3-geo/src/centroid.js
  var W0;
  var W1;
  var X0;
  var Y0;
  var Z0;
  var X1;
  var Y1;
  var Z1;
  var X22;
  var Y22;
  var Z22;
  var lambda003;
  var phi003;
  var x0;
  var y0;
  var z0;
  var centroidStream = {
    sphere: noop2,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    }
  };
  function centroidPoint(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    var cosPhi = cos2(phi2);
    centroidPointCartesian(cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2));
  }
  function centroidPointCartesian(x6, y5, z3) {
    ++W0;
    X0 += (x6 - X0) / W0;
    Y0 += (y5 - Y0) / W0;
    Z0 += (z3 - Z0) / W0;
  }
  function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
  }
  function centroidLinePointFirst(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    var cosPhi = cos2(phi2);
    x0 = cosPhi * cos2(lambda);
    y0 = cosPhi * sin2(lambda);
    z0 = sin2(phi2);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLinePoint(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    var cosPhi = cos2(phi2), x6 = cosPhi * cos2(lambda), y5 = cosPhi * sin2(lambda), z3 = sin2(phi2), w3 = atan2(sqrt((w3 = y0 * z3 - z0 * y5) * w3 + (w3 = z0 * x6 - x0 * z3) * w3 + (w3 = x0 * y5 - y0 * x6) * w3), x0 * x6 + y0 * y5 + z0 * z3);
    W1 += w3;
    X1 += w3 * (x0 + (x0 = x6));
    Y1 += w3 * (y0 + (y0 = y5));
    Z1 += w3 * (z0 + (z0 = z3));
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }
  function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
  }
  function centroidRingEnd() {
    centroidRingPoint(lambda003, phi003);
    centroidStream.point = centroidPoint;
  }
  function centroidRingPointFirst(lambda, phi2) {
    lambda003 = lambda, phi003 = phi2;
    lambda *= radians2, phi2 *= radians2;
    centroidStream.point = centroidRingPoint;
    var cosPhi = cos2(phi2);
    x0 = cosPhi * cos2(lambda);
    y0 = cosPhi * sin2(lambda);
    z0 = sin2(phi2);
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidRingPoint(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    var cosPhi = cos2(phi2), x6 = cosPhi * cos2(lambda), y5 = cosPhi * sin2(lambda), z3 = sin2(phi2), cx = y0 * z3 - z0 * y5, cy = z0 * x6 - x0 * z3, cz = x0 * y5 - y0 * x6, m4 = hypot(cx, cy, cz), w3 = asin(m4), v4 = m4 && -w3 / m4;
    X22.add(v4 * cx);
    Y22.add(v4 * cy);
    Z22.add(v4 * cz);
    W1 += w3;
    X1 += w3 * (x0 + (x0 = x6));
    Y1 += w3 * (y0 + (y0 = y5));
    Z1 += w3 * (z0 + (z0 = z3));
    centroidPointCartesian(x0, y0, z0);
  }
  function centroid_default(object2) {
    W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = 0;
    X22 = new Adder();
    Y22 = new Adder();
    Z22 = new Adder();
    stream_default(object2, centroidStream);
    var x6 = +X22, y5 = +Y22, z3 = +Z22, m4 = hypot(x6, y5, z3);
    if (m4 < epsilon22) {
      x6 = X1, y5 = Y1, z3 = Z1;
      if (W1 < epsilon7) x6 = X0, y5 = Y0, z3 = Z0;
      m4 = hypot(x6, y5, z3);
      if (m4 < epsilon22) return [NaN, NaN];
    }
    return [atan2(y5, x6) * degrees3, asin(z3 / m4) * degrees3];
  }

  // node_modules/d3-geo/src/constant.js
  function constant_default8(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-geo/src/compose.js
  function compose_default(a4, b10) {
    function compose(x6, y5) {
      return x6 = a4(x6, y5), b10(x6[0], x6[1]);
    }
    if (a4.invert && b10.invert) compose.invert = function(x6, y5) {
      return x6 = b10.invert(x6, y5), x6 && a4.invert(x6[0], x6[1]);
    };
    return compose;
  }

  // node_modules/d3-geo/src/rotation.js
  function rotationIdentity(lambda, phi2) {
    if (abs3(lambda) > pi4) lambda -= Math.round(lambda / tau5) * tau5;
    return [lambda, phi2];
  }
  rotationIdentity.invert = rotationIdentity;
  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau5) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
  }
  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi2) {
      lambda += deltaLambda;
      if (abs3(lambda) > pi4) lambda -= Math.round(lambda / tau5) * tau5;
      return [lambda, phi2];
    };
  }
  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
  }
  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos2(deltaPhi), sinDeltaPhi = sin2(deltaPhi), cosDeltaGamma = cos2(deltaGamma), sinDeltaGamma = sin2(deltaGamma);
    function rotation(lambda, phi2) {
      var cosPhi = cos2(phi2), x6 = cos2(lambda) * cosPhi, y5 = sin2(lambda) * cosPhi, z3 = sin2(phi2), k4 = z3 * cosDeltaPhi + x6 * sinDeltaPhi;
      return [
        atan2(y5 * cosDeltaGamma - k4 * sinDeltaGamma, x6 * cosDeltaPhi - z3 * sinDeltaPhi),
        asin(k4 * cosDeltaGamma + y5 * sinDeltaGamma)
      ];
    }
    rotation.invert = function(lambda, phi2) {
      var cosPhi = cos2(phi2), x6 = cos2(lambda) * cosPhi, y5 = sin2(lambda) * cosPhi, z3 = sin2(phi2), k4 = z3 * cosDeltaGamma - y5 * sinDeltaGamma;
      return [
        atan2(y5 * cosDeltaGamma + z3 * sinDeltaGamma, x6 * cosDeltaPhi + k4 * sinDeltaPhi),
        asin(k4 * cosDeltaPhi - x6 * sinDeltaPhi)
      ];
    };
    return rotation;
  }
  function rotation_default(rotate) {
    rotate = rotateRadians(rotate[0] * radians2, rotate[1] * radians2, rotate.length > 2 ? rotate[2] * radians2 : 0);
    function forward(coordinates2) {
      coordinates2 = rotate(coordinates2[0] * radians2, coordinates2[1] * radians2);
      return coordinates2[0] *= degrees3, coordinates2[1] *= degrees3, coordinates2;
    }
    forward.invert = function(coordinates2) {
      coordinates2 = rotate.invert(coordinates2[0] * radians2, coordinates2[1] * radians2);
      return coordinates2[0] *= degrees3, coordinates2[1] *= degrees3, coordinates2;
    };
    return forward;
  }

  // node_modules/d3-geo/src/circle.js
  function circleStream(stream, radius, delta, direction, t03, t13) {
    if (!delta) return;
    var cosRadius = cos2(radius), sinRadius = sin2(radius), step = direction * delta;
    if (t03 == null) {
      t03 = radius + direction * tau5;
      t13 = radius - step / 2;
    } else {
      t03 = circleRadius(cosRadius, t03);
      t13 = circleRadius(cosRadius, t13);
      if (direction > 0 ? t03 < t13 : t03 > t13) t03 += direction * tau5;
    }
    for (var point6, t = t03; direction > 0 ? t > t13 : t < t13; t -= step) {
      point6 = spherical([cosRadius, -sinRadius * cos2(t), -sinRadius * sin2(t)]);
      stream.point(point6[0], point6[1]);
    }
  }
  function circleRadius(cosRadius, point6) {
    point6 = cartesian(point6), point6[0] -= cosRadius;
    cartesianNormalizeInPlace(point6);
    var radius = acos(-point6[1]);
    return ((-point6[2] < 0 ? -radius : radius) + tau5 - epsilon7) % tau5;
  }
  function circle_default() {
    var center2 = constant_default8([0, 0]), radius = constant_default8(90), precision = constant_default8(2), ring, rotate, stream = { point: point6 };
    function point6(x6, y5) {
      ring.push(x6 = rotate(x6, y5));
      x6[0] *= degrees3, x6[1] *= degrees3;
    }
    function circle2() {
      var c6 = center2.apply(this, arguments), r = radius.apply(this, arguments) * radians2, p3 = precision.apply(this, arguments) * radians2;
      ring = [];
      rotate = rotateRadians(-c6[0] * radians2, -c6[1] * radians2, 0).invert;
      circleStream(stream, r, p3, 1);
      c6 = { type: "Polygon", coordinates: [ring] };
      ring = rotate = null;
      return c6;
    }
    circle2.center = function(_3) {
      return arguments.length ? (center2 = typeof _3 === "function" ? _3 : constant_default8([+_3[0], +_3[1]]), circle2) : center2;
    };
    circle2.radius = function(_3) {
      return arguments.length ? (radius = typeof _3 === "function" ? _3 : constant_default8(+_3), circle2) : radius;
    };
    circle2.precision = function(_3) {
      return arguments.length ? (precision = typeof _3 === "function" ? _3 : constant_default8(+_3), circle2) : precision;
    };
    return circle2;
  }

  // node_modules/d3-geo/src/clip/buffer.js
  function buffer_default2() {
    var lines = [], line;
    return {
      point: function(x6, y5, m4) {
        line.push([x6, y5, m4]);
      },
      lineStart: function() {
        lines.push(line = []);
      },
      lineEnd: noop2,
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }

  // node_modules/d3-geo/src/pointEqual.js
  function pointEqual_default(a4, b10) {
    return abs3(a4[0] - b10[0]) < epsilon7 && abs3(a4[1] - b10[1]) < epsilon7;
  }

  // node_modules/d3-geo/src/clip/rejoin.js
  function Intersection(point6, points, other, entry) {
    this.x = point6;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function(segment) {
      if ((n2 = segment.length - 1) <= 0) return;
      var n2, p02 = segment[0], p1 = segment[n2], x6;
      if (pointEqual_default(p02, p1)) {
        if (!p02[2] && !p1[2]) {
          stream.lineStart();
          for (i = 0; i < n2; ++i) stream.point((p02 = segment[i])[0], p02[1]);
          stream.lineEnd();
          return;
        }
        p1[0] += 2 * epsilon7;
      }
      subject.push(x6 = new Intersection(p02, segment, null, true));
      clip.push(x6.o = new Intersection(p02, null, x6, false));
      subject.push(x6 = new Intersection(p1, segment, null, false));
      clip.push(x6.o = new Intersection(p1, null, x6, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection2);
    link(subject);
    link(clip);
    for (i = 0, n = clip.length; i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }
    var start2 = subject[0], points, point6;
    while (1) {
      var current = start2, isSubject = true;
      while (current.v) if ((current = current.n) === start2) return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i) stream.point((point6 = points[i])[0], point6[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i) stream.point((point6 = points[i])[0], point6[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }
  function link(array4) {
    if (!(n = array4.length)) return;
    var n, i = 0, a4 = array4[0], b10;
    while (++i < n) {
      a4.n = b10 = array4[i];
      b10.p = a4;
      a4 = b10;
    }
    a4.n = b10 = array4[0];
    b10.p = a4;
  }

  // node_modules/d3-geo/src/polygonContains.js
  function longitude(point6) {
    return abs3(point6[0]) <= pi4 ? point6[0] : sign(point6[0]) * ((abs3(point6[0]) + pi4) % tau5 - pi4);
  }
  function polygonContains_default(polygon, point6) {
    var lambda = longitude(point6), phi2 = point6[1], sinPhi = sin2(phi2), normal2 = [sin2(lambda), -cos2(lambda), 0], angle2 = 0, winding = 0;
    var sum4 = new Adder();
    if (sinPhi === 1) phi2 = halfPi3 + epsilon7;
    else if (sinPhi === -1) phi2 = -halfPi3 - epsilon7;
    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m4 = (ring = polygon[i]).length)) continue;
      var ring, m4, point0 = ring[m4 - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin2(phi02), cosPhi03 = cos2(phi02);
      for (var j3 = 0; j3 < m4; ++j3, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
        var point1 = ring[j3], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi12), cosPhi1 = cos2(phi12), delta = lambda12 - lambda04, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi4, k4 = sinPhi03 * sinPhi1;
        sum4.add(atan2(k4 * sign3 * sin2(absDelta), cosPhi03 * cosPhi1 + k4 * cos2(absDelta)));
        angle2 += antimeridian ? delta + sign3 * tau5 : delta;
        if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
          var arc = cartesianCross(cartesian(point0), cartesian(point1));
          cartesianNormalizeInPlace(arc);
          var intersection2 = cartesianCross(normal2, arc);
          cartesianNormalizeInPlace(intersection2);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection2[2]);
          if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }
    return (angle2 < -epsilon7 || angle2 < epsilon7 && sum4 < -epsilon22) ^ winding & 1;
  }

  // node_modules/d3-geo/src/clip/index.js
  function clip_default(pointVisible, clipLine, interpolate, start2) {
    return function(sink) {
      var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
      var clip = {
        point: point6,
        lineStart,
        lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point6;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = merge(segments);
          var startInside = polygonContains_default(polygon, start2);
          if (segments.length) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };
      function point6(lambda, phi2) {
        if (pointVisible(lambda, phi2)) sink.point(lambda, phi2);
      }
      function pointLine(lambda, phi2) {
        line.point(lambda, phi2);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point6;
        line.lineEnd();
      }
      function pointRing(lambda, phi2) {
        ring.push([lambda, phi2]);
        ringSink.point(lambda, phi2);
      }
      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();
        var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m4, segment, point7;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m4 = segment.length - 1) > 0) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m4; ++i) sink.point((point7 = segment[i])[0], point7[1]);
            sink.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(validSegment));
      }
      return clip;
    };
  }
  function validSegment(segment) {
    return segment.length > 1;
  }
  function compareIntersection(a4, b10) {
    return ((a4 = a4.x)[0] < 0 ? a4[1] - halfPi3 - epsilon7 : halfPi3 - a4[1]) - ((b10 = b10.x)[0] < 0 ? b10[1] - halfPi3 - epsilon7 : halfPi3 - b10[1]);
  }

  // node_modules/d3-geo/src/clip/antimeridian.js
  var antimeridian_default = clip_default(
    function() {
      return true;
    },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi4, -halfPi3]
  );
  function clipAntimeridianLine(stream) {
    var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda12, phi12) {
        var sign1 = lambda12 > 0 ? pi4 : -pi4, delta = abs3(lambda12 - lambda04);
        if (abs3(delta - pi4) < epsilon7) {
          stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi3 : -halfPi3);
          stream.point(sign0, phi02);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi02);
          stream.point(lambda12, phi02);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi4) {
          if (abs3(lambda04 - sign0) < epsilon7) lambda04 -= sign0 * epsilon7;
          if (abs3(lambda12 - sign1) < epsilon7) lambda12 -= sign1 * epsilon7;
          phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
          stream.point(sign0, phi02);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi02);
          clean = 0;
        }
        stream.point(lambda04 = lambda12, phi02 = phi12);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda04 = phi02 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
    var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin2(lambda04 - lambda12);
    return abs3(sinLambda0Lambda1) > epsilon7 ? atan((sin2(phi02) * (cosPhi1 = cos2(phi12)) * sin2(lambda12) - sin2(phi12) * (cosPhi03 = cos2(phi02)) * sin2(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
  }
  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi2;
    if (from == null) {
      phi2 = direction * halfPi3;
      stream.point(-pi4, phi2);
      stream.point(0, phi2);
      stream.point(pi4, phi2);
      stream.point(pi4, 0);
      stream.point(pi4, -phi2);
      stream.point(0, -phi2);
      stream.point(-pi4, -phi2);
      stream.point(-pi4, 0);
      stream.point(-pi4, phi2);
    } else if (abs3(from[0] - to[0]) > epsilon7) {
      var lambda = from[0] < to[0] ? pi4 : -pi4;
      phi2 = direction * lambda / 2;
      stream.point(-lambda, phi2);
      stream.point(0, phi2);
      stream.point(lambda, phi2);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  // node_modules/d3-geo/src/clip/circle.js
  function circle_default2(radius) {
    var cr = cos2(radius), delta = 2 * radians2, smallRadius = cr > 0, notHemisphere = abs3(cr) > epsilon7;
    function interpolate(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi2) {
      return cos2(lambda) * cos2(phi2) > cr;
    }
    function clipLine(stream) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(lambda, phi2) {
          var point1 = [lambda, phi2], point22, v4 = visible(lambda, phi2), c6 = smallRadius ? v4 ? 0 : code(lambda, phi2) : v4 ? code(lambda + (lambda < 0 ? pi4 : -pi4), phi2) : 0;
          if (!point0 && (v00 = v0 = v4)) stream.lineStart();
          if (v4 !== v0) {
            point22 = intersect3(point0, point1);
            if (!point22 || pointEqual_default(point0, point22) || pointEqual_default(point1, point22))
              point1[2] = 1;
          }
          if (v4 !== v0) {
            clean = 0;
            if (v4) {
              stream.lineStart();
              point22 = intersect3(point1, point0);
              stream.point(point22[0], point22[1]);
            } else {
              point22 = intersect3(point0, point1);
              stream.point(point22[0], point22[1], 2);
              stream.lineEnd();
            }
            point0 = point22;
          } else if (notHemisphere && point0 && smallRadius ^ v4) {
            var t;
            if (!(c6 & c0) && (t = intersect3(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1], 3);
              }
            }
          }
          if (v4 && (!point0 || !pointEqual_default(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v4, c0 = c6;
        },
        lineEnd: function() {
          if (v0) stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect3(a4, b10, two) {
      var pa = cartesian(a4), pb = cartesian(b10);
      var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a4;
      var c1 = cr * n2n2 / determinant, c22 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B5 = cartesianScale(n2, c22);
      cartesianAddInPlace(A5, B5);
      var u4 = n1xn2, w3 = cartesianDot(A5, u4), uu = cartesianDot(u4, u4), t22 = w3 * w3 - uu * (cartesianDot(A5, A5) - 1);
      if (t22 < 0) return;
      var t = sqrt(t22), q3 = cartesianScale(u4, (-w3 - t) / uu);
      cartesianAddInPlace(q3, A5);
      q3 = spherical(q3);
      if (!two) return q3;
      var lambda04 = a4[0], lambda12 = b10[0], phi02 = a4[1], phi12 = b10[1], z3;
      if (lambda12 < lambda04) z3 = lambda04, lambda04 = lambda12, lambda12 = z3;
      var delta2 = lambda12 - lambda04, polar = abs3(delta2 - pi4) < epsilon7, meridian = polar || delta2 < epsilon7;
      if (!polar && phi12 < phi02) z3 = phi02, phi02 = phi12, phi12 = z3;
      if (meridian ? polar ? phi02 + phi12 > 0 ^ q3[1] < (abs3(q3[0] - lambda04) < epsilon7 ? phi02 : phi12) : phi02 <= q3[1] && q3[1] <= phi12 : delta2 > pi4 ^ (lambda04 <= q3[0] && q3[0] <= lambda12)) {
        var q1 = cartesianScale(u4, (-w3 + t) / uu);
        cartesianAddInPlace(q1, A5);
        return [q3, spherical(q1)];
      }
    }
    function code(lambda, phi2) {
      var r = smallRadius ? radius : pi4 - radius, code2 = 0;
      if (lambda < -r) code2 |= 1;
      else if (lambda > r) code2 |= 2;
      if (phi2 < -r) code2 |= 4;
      else if (phi2 > r) code2 |= 8;
      return code2;
    }
    return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi4, radius - pi4]);
  }

  // node_modules/d3-geo/src/clip/line.js
  function line_default(a4, b10, x06, y06, x12, y12) {
    var ax = a4[0], ay = a4[1], bx = b10[0], by = b10[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r;
    r = x06 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
      if (r < t03) return;
      if (r < t13) t13 = r;
    } else if (dx > 0) {
      if (r > t13) return;
      if (r > t03) t03 = r;
    }
    r = x12 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
      if (r > t13) return;
      if (r > t03) t03 = r;
    } else if (dx > 0) {
      if (r < t03) return;
      if (r < t13) t13 = r;
    }
    r = y06 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
      if (r < t03) return;
      if (r < t13) t13 = r;
    } else if (dy > 0) {
      if (r > t13) return;
      if (r > t03) t03 = r;
    }
    r = y12 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
      if (r > t13) return;
      if (r > t03) t03 = r;
    } else if (dy > 0) {
      if (r < t03) return;
      if (r < t13) t13 = r;
    }
    if (t03 > 0) a4[0] = ax + t03 * dx, a4[1] = ay + t03 * dy;
    if (t13 < 1) b10[0] = ax + t13 * dx, b10[1] = ay + t13 * dy;
    return true;
  }

  // node_modules/d3-geo/src/clip/rectangle.js
  var clipMax = 1e9;
  var clipMin = -clipMax;
  function clipRectangle(x06, y06, x12, y12) {
    function visible(x6, y5) {
      return x06 <= x6 && x6 <= x12 && y06 <= y5 && y5 <= y12;
    }
    function interpolate(from, to, direction, stream) {
      var a4 = 0, a1 = 0;
      if (from == null || (a4 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
        do
          stream.point(a4 === 0 || a4 === 3 ? x06 : x12, a4 > 1 ? y12 : y06);
        while ((a4 = (a4 + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }
    function corner(p3, direction) {
      return abs3(p3[0] - x06) < epsilon7 ? direction > 0 ? 0 : 3 : abs3(p3[0] - x12) < epsilon7 ? direction > 0 ? 2 : 1 : abs3(p3[1] - y06) < epsilon7 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compareIntersection2(a4, b10) {
      return comparePoint(a4.x, b10.x);
    }
    function comparePoint(a4, b10) {
      var ca3 = corner(a4, 1), cb = corner(b10, 1);
      return ca3 !== cb ? ca3 - cb : ca3 === 0 ? b10[1] - a4[1] : ca3 === 1 ? a4[0] - b10[0] : ca3 === 2 ? a4[1] - b10[1] : b10[0] - a4[0];
    }
    return function(stream) {
      var activeStream = stream, bufferStream = buffer_default2(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
      var clipStream = {
        point: point6,
        lineStart,
        lineEnd,
        polygonStart,
        polygonEnd
      };
      function point6(x6, y5) {
        if (visible(x6, y5)) activeStream.point(x6, y5);
      }
      function polygonInside() {
        var winding = 0;
        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring2 = polygon[i], j3 = 1, m4 = ring2.length, point7 = ring2[0], a0, a1, b02 = point7[0], b12 = point7[1]; j3 < m4; ++j3) {
            a0 = b02, a1 = b12, point7 = ring2[j3], b02 = point7[0], b12 = point7[1];
            if (a1 <= y12) {
              if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x06 - a0)) ++winding;
            } else {
              if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x06 - a0)) --winding;
            }
          }
        }
        return winding;
      }
      function polygonStart() {
        activeStream = bufferStream, segments = [], polygon = [], clean = true;
      }
      function polygonEnd() {
        var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
        if (cleanInside || visible2) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible2) {
            rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
          }
          stream.polygonEnd();
        }
        activeStream = stream, segments = polygon = ring = null;
      }
      function lineStart() {
        clipStream.point = linePoint2;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint2(x__, y__);
          if (v__ && v_) bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point6;
        if (v_) activeStream.lineEnd();
      }
      function linePoint2(x6, y5) {
        var v4 = visible(x6, y5);
        if (polygon) ring.push([x6, y5]);
        if (first) {
          x__ = x6, y__ = y5, v__ = v4;
          first = false;
          if (v4) {
            activeStream.lineStart();
            activeStream.point(x6, y5);
          }
        } else {
          if (v4 && v_) activeStream.point(x6, y5);
          else {
            var a4 = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b10 = [x6 = Math.max(clipMin, Math.min(clipMax, x6)), y5 = Math.max(clipMin, Math.min(clipMax, y5))];
            if (line_default(a4, b10, x06, y06, x12, y12)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a4[0], a4[1]);
              }
              activeStream.point(b10[0], b10[1]);
              if (!v4) activeStream.lineEnd();
              clean = false;
            } else if (v4) {
              activeStream.lineStart();
              activeStream.point(x6, y5);
              clean = false;
            }
          }
        }
        x_ = x6, y_ = y5, v_ = v4;
      }
      return clipStream;
    };
  }

  // node_modules/d3-geo/src/clip/extent.js
  function extent_default2() {
    var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
    return clip = {
      stream: function(stream) {
        return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
      },
      extent: function(_3) {
        return arguments.length ? (x06 = +_3[0][0], y06 = +_3[0][1], x12 = +_3[1][0], y12 = +_3[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
      }
    };
  }

  // node_modules/d3-geo/src/length.js
  var lengthSum;
  var lambda03;
  var sinPhi02;
  var cosPhi02;
  var lengthStream = {
    sphere: noop2,
    point: noop2,
    lineStart: lengthLineStart,
    lineEnd: noop2,
    polygonStart: noop2,
    polygonEnd: noop2
  };
  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }
  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop2;
  }
  function lengthPointFirst(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    lambda03 = lambda, sinPhi02 = sin2(phi2), cosPhi02 = cos2(phi2);
    lengthStream.point = lengthPoint;
  }
  function lengthPoint(lambda, phi2) {
    lambda *= radians2, phi2 *= radians2;
    var sinPhi = sin2(phi2), cosPhi = cos2(phi2), delta = abs3(lambda - lambda03), cosDelta = cos2(delta), sinDelta = sin2(delta), x6 = cosPhi * sinDelta, y5 = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z3 = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
    lengthSum.add(atan2(sqrt(x6 * x6 + y5 * y5), z3));
    lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
  }
  function length_default(object2) {
    lengthSum = new Adder();
    stream_default(object2, lengthStream);
    return +lengthSum;
  }

  // node_modules/d3-geo/src/distance.js
  var coordinates = [null, null];
  var object = { type: "LineString", coordinates };
  function distance_default(a4, b10) {
    coordinates[0] = a4;
    coordinates[1] = b10;
    return length_default(object);
  }

  // node_modules/d3-geo/src/contains.js
  var containsObjectType = {
    Feature: function(object2, point6) {
      return containsGeometry(object2.geometry, point6);
    },
    FeatureCollection: function(object2, point6) {
      var features = object2.features, i = -1, n = features.length;
      while (++i < n) if (containsGeometry(features[i].geometry, point6)) return true;
      return false;
    }
  };
  var containsGeometryType = {
    Sphere: function() {
      return true;
    },
    Point: function(object2, point6) {
      return containsPoint(object2.coordinates, point6);
    },
    MultiPoint: function(object2, point6) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) if (containsPoint(coordinates2[i], point6)) return true;
      return false;
    },
    LineString: function(object2, point6) {
      return containsLine(object2.coordinates, point6);
    },
    MultiLineString: function(object2, point6) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) if (containsLine(coordinates2[i], point6)) return true;
      return false;
    },
    Polygon: function(object2, point6) {
      return containsPolygon(object2.coordinates, point6);
    },
    MultiPolygon: function(object2, point6) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n) if (containsPolygon(coordinates2[i], point6)) return true;
      return false;
    },
    GeometryCollection: function(object2, point6) {
      var geometries = object2.geometries, i = -1, n = geometries.length;
      while (++i < n) if (containsGeometry(geometries[i], point6)) return true;
      return false;
    }
  };
  function containsGeometry(geometry, point6) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point6) : false;
  }
  function containsPoint(coordinates2, point6) {
    return distance_default(coordinates2, point6) === 0;
  }
  function containsLine(coordinates2, point6) {
    var ao, bo, ab4;
    for (var i = 0, n = coordinates2.length; i < n; i++) {
      bo = distance_default(coordinates2[i], point6);
      if (bo === 0) return true;
      if (i > 0) {
        ab4 = distance_default(coordinates2[i], coordinates2[i - 1]);
        if (ab4 > 0 && ao <= ab4 && bo <= ab4 && (ao + bo - ab4) * (1 - Math.pow((ao - bo) / ab4, 2)) < epsilon22 * ab4)
          return true;
      }
      ao = bo;
    }
    return false;
  }
  function containsPolygon(coordinates2, point6) {
    return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point6));
  }
  function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
  }
  function pointRadians(point6) {
    return [point6[0] * radians2, point6[1] * radians2];
  }
  function contains_default2(object2, point6) {
    return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point6);
  }

  // node_modules/d3-geo/src/graticule.js
  function graticuleX(y06, y12, dy) {
    var y5 = range2(y06, y12 - epsilon7, dy).concat(y12);
    return function(x6) {
      return y5.map(function(y6) {
        return [x6, y6];
      });
    };
  }
  function graticuleY(x06, x12, dx) {
    var x6 = range2(x06, x12 - epsilon7, dx).concat(x12);
    return function(y5) {
      return x6.map(function(x7) {
        return [x7, y5];
      });
    };
  }
  function graticule() {
    var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x6, y5, X4, Y4, precision = 2.5;
    function graticule2() {
      return { type: "MultiLineString", coordinates: lines() };
    }
    function lines() {
      return range2(ceil(X03 / DX) * DX, X13, DX).map(X4).concat(range2(ceil(Y03 / DY) * DY, Y13, DY).map(Y4)).concat(range2(ceil(x06 / dx) * dx, x12, dx).filter(function(x7) {
        return abs3(x7 % DX) > epsilon7;
      }).map(x6)).concat(range2(ceil(y06 / dy) * dy, y12, dy).filter(function(y6) {
        return abs3(y6 % DY) > epsilon7;
      }).map(y5));
    }
    graticule2.lines = function() {
      return lines().map(function(coordinates2) {
        return { type: "LineString", coordinates: coordinates2 };
      });
    };
    graticule2.outline = function() {
      return {
        type: "Polygon",
        coordinates: [
          X4(X03).concat(
            Y4(Y13).slice(1),
            X4(X13).reverse().slice(1),
            Y4(Y03).reverse().slice(1)
          )
        ]
      };
    };
    graticule2.extent = function(_3) {
      if (!arguments.length) return graticule2.extentMinor();
      return graticule2.extentMajor(_3).extentMinor(_3);
    };
    graticule2.extentMajor = function(_3) {
      if (!arguments.length) return [[X03, Y03], [X13, Y13]];
      X03 = +_3[0][0], X13 = +_3[1][0];
      Y03 = +_3[0][1], Y13 = +_3[1][1];
      if (X03 > X13) _3 = X03, X03 = X13, X13 = _3;
      if (Y03 > Y13) _3 = Y03, Y03 = Y13, Y13 = _3;
      return graticule2.precision(precision);
    };
    graticule2.extentMinor = function(_3) {
      if (!arguments.length) return [[x06, y06], [x12, y12]];
      x06 = +_3[0][0], x12 = +_3[1][0];
      y06 = +_3[0][1], y12 = +_3[1][1];
      if (x06 > x12) _3 = x06, x06 = x12, x12 = _3;
      if (y06 > y12) _3 = y06, y06 = y12, y12 = _3;
      return graticule2.precision(precision);
    };
    graticule2.step = function(_3) {
      if (!arguments.length) return graticule2.stepMinor();
      return graticule2.stepMajor(_3).stepMinor(_3);
    };
    graticule2.stepMajor = function(_3) {
      if (!arguments.length) return [DX, DY];
      DX = +_3[0], DY = +_3[1];
      return graticule2;
    };
    graticule2.stepMinor = function(_3) {
      if (!arguments.length) return [dx, dy];
      dx = +_3[0], dy = +_3[1];
      return graticule2;
    };
    graticule2.precision = function(_3) {
      if (!arguments.length) return precision;
      precision = +_3;
      x6 = graticuleX(y06, y12, 90);
      y5 = graticuleY(x06, x12, precision);
      X4 = graticuleX(Y03, Y13, 90);
      Y4 = graticuleY(X03, X13, precision);
      return graticule2;
    };
    return graticule2.extentMajor([[-180, -90 + epsilon7], [180, 90 - epsilon7]]).extentMinor([[-180, -80 - epsilon7], [180, 80 + epsilon7]]);
  }
  function graticule10() {
    return graticule()();
  }

  // node_modules/d3-geo/src/interpolate.js
  function interpolate_default2(a4, b10) {
    var x06 = a4[0] * radians2, y06 = a4[1] * radians2, x12 = b10[0] * radians2, y12 = b10[1] * radians2, cy0 = cos2(y06), sy0 = sin2(y06), cy1 = cos2(y12), sy1 = sin2(y12), kx0 = cy0 * cos2(x06), ky0 = cy0 * sin2(x06), kx1 = cy1 * cos2(x12), ky1 = cy1 * sin2(x12), d = 2 * asin(sqrt(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k4 = sin2(d);
    var interpolate = d ? function(t) {
      var B5 = sin2(t *= d) / k4, A5 = sin2(d - t) / k4, x6 = A5 * kx0 + B5 * kx1, y5 = A5 * ky0 + B5 * ky1, z3 = A5 * sy0 + B5 * sy1;
      return [
        atan2(y5, x6) * degrees3,
        atan2(z3, sqrt(x6 * x6 + y5 * y5)) * degrees3
      ];
    } : function() {
      return [x06 * degrees3, y06 * degrees3];
    };
    interpolate.distance = d;
    return interpolate;
  }

  // node_modules/d3-geo/src/identity.js
  var identity_default3 = (x6) => x6;

  // node_modules/d3-geo/src/path/area.js
  var areaSum2 = new Adder();
  var areaRingSum2 = new Adder();
  var x00;
  var y00;
  var x02;
  var y02;
  var areaStream2 = {
    point: noop2,
    lineStart: noop2,
    lineEnd: noop2,
    polygonStart: function() {
      areaStream2.lineStart = areaRingStart2;
      areaStream2.lineEnd = areaRingEnd2;
    },
    polygonEnd: function() {
      areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop2;
      areaSum2.add(abs3(areaRingSum2));
      areaRingSum2 = new Adder();
    },
    result: function() {
      var area = areaSum2 / 2;
      areaSum2 = new Adder();
      return area;
    }
  };
  function areaRingStart2() {
    areaStream2.point = areaPointFirst2;
  }
  function areaPointFirst2(x6, y5) {
    areaStream2.point = areaPoint2;
    x00 = x02 = x6, y00 = y02 = y5;
  }
  function areaPoint2(x6, y5) {
    areaRingSum2.add(y02 * x6 - x02 * y5);
    x02 = x6, y02 = y5;
  }
  function areaRingEnd2() {
    areaPoint2(x00, y00);
  }
  var area_default3 = areaStream2;

  // node_modules/d3-geo/src/path/bounds.js
  var x03 = Infinity;
  var y03 = x03;
  var x1 = -x03;
  var y1 = x1;
  var boundsStream2 = {
    point: boundsPoint2,
    lineStart: noop2,
    lineEnd: noop2,
    polygonStart: noop2,
    polygonEnd: noop2,
    result: function() {
      var bounds = [[x03, y03], [x1, y1]];
      x1 = y1 = -(y03 = x03 = Infinity);
      return bounds;
    }
  };
  function boundsPoint2(x6, y5) {
    if (x6 < x03) x03 = x6;
    if (x6 > x1) x1 = x6;
    if (y5 < y03) y03 = y5;
    if (y5 > y1) y1 = y5;
  }
  var bounds_default2 = boundsStream2;

  // node_modules/d3-geo/src/path/centroid.js
  var X02 = 0;
  var Y02 = 0;
  var Z02 = 0;
  var X12 = 0;
  var Y12 = 0;
  var Z12 = 0;
  var X23 = 0;
  var Y23 = 0;
  var Z23 = 0;
  var x002;
  var y002;
  var x04;
  var y04;
  var centroidStream2 = {
    point: centroidPoint2,
    lineStart: centroidLineStart2,
    lineEnd: centroidLineEnd2,
    polygonStart: function() {
      centroidStream2.lineStart = centroidRingStart2;
      centroidStream2.lineEnd = centroidRingEnd2;
    },
    polygonEnd: function() {
      centroidStream2.point = centroidPoint2;
      centroidStream2.lineStart = centroidLineStart2;
      centroidStream2.lineEnd = centroidLineEnd2;
    },
    result: function() {
      var centroid = Z23 ? [X23 / Z23, Y23 / Z23] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
      X02 = Y02 = Z02 = X12 = Y12 = Z12 = X23 = Y23 = Z23 = 0;
      return centroid;
    }
  };
  function centroidPoint2(x6, y5) {
    X02 += x6;
    Y02 += y5;
    ++Z02;
  }
  function centroidLineStart2() {
    centroidStream2.point = centroidPointFirstLine;
  }
  function centroidPointFirstLine(x6, y5) {
    centroidStream2.point = centroidPointLine;
    centroidPoint2(x04 = x6, y04 = y5);
  }
  function centroidPointLine(x6, y5) {
    var dx = x6 - x04, dy = y5 - y04, z3 = sqrt(dx * dx + dy * dy);
    X12 += z3 * (x04 + x6) / 2;
    Y12 += z3 * (y04 + y5) / 2;
    Z12 += z3;
    centroidPoint2(x04 = x6, y04 = y5);
  }
  function centroidLineEnd2() {
    centroidStream2.point = centroidPoint2;
  }
  function centroidRingStart2() {
    centroidStream2.point = centroidPointFirstRing;
  }
  function centroidRingEnd2() {
    centroidPointRing(x002, y002);
  }
  function centroidPointFirstRing(x6, y5) {
    centroidStream2.point = centroidPointRing;
    centroidPoint2(x002 = x04 = x6, y002 = y04 = y5);
  }
  function centroidPointRing(x6, y5) {
    var dx = x6 - x04, dy = y5 - y04, z3 = sqrt(dx * dx + dy * dy);
    X12 += z3 * (x04 + x6) / 2;
    Y12 += z3 * (y04 + y5) / 2;
    Z12 += z3;
    z3 = y04 * x6 - x04 * y5;
    X23 += z3 * (x04 + x6);
    Y23 += z3 * (y04 + y5);
    Z23 += z3 * 3;
    centroidPoint2(x04 = x6, y04 = y5);
  }
  var centroid_default2 = centroidStream2;

  // node_modules/d3-geo/src/path/context.js
  function PathContext(context) {
    this._context = context;
  }
  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_3) {
      return this._radius = _3, this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0) this._context.closePath();
      this._point = NaN;
    },
    point: function(x6, y5) {
      switch (this._point) {
        case 0: {
          this._context.moveTo(x6, y5);
          this._point = 1;
          break;
        }
        case 1: {
          this._context.lineTo(x6, y5);
          break;
        }
        default: {
          this._context.moveTo(x6 + this._radius, y5);
          this._context.arc(x6, y5, this._radius, 0, tau5);
          break;
        }
      }
    },
    result: noop2
  };

  // node_modules/d3-geo/src/path/measure.js
  var lengthSum2 = new Adder();
  var lengthRing;
  var x003;
  var y003;
  var x05;
  var y05;
  var lengthStream2 = {
    point: noop2,
    lineStart: function() {
      lengthStream2.point = lengthPointFirst2;
    },
    lineEnd: function() {
      if (lengthRing) lengthPoint2(x003, y003);
      lengthStream2.point = noop2;
    },
    polygonStart: function() {
      lengthRing = true;
    },
    polygonEnd: function() {
      lengthRing = null;
    },
    result: function() {
      var length3 = +lengthSum2;
      lengthSum2 = new Adder();
      return length3;
    }
  };
  function lengthPointFirst2(x6, y5) {
    lengthStream2.point = lengthPoint2;
    x003 = x05 = x6, y003 = y05 = y5;
  }
  function lengthPoint2(x6, y5) {
    x05 -= x6, y05 -= y5;
    lengthSum2.add(sqrt(x05 * x05 + y05 * y05));
    x05 = x6, y05 = y5;
  }
  var measure_default = lengthStream2;

  // node_modules/d3-geo/src/path/string.js
  var cacheDigits;
  var cacheAppend;
  var cacheRadius;
  var cacheCircle;
  var PathString = class {
    constructor(digits) {
      this._append = digits == null ? append2 : appendRound2(digits);
      this._radius = 4.5;
      this._ = "";
    }
    pointRadius(_3) {
      this._radius = +_3;
      return this;
    }
    polygonStart() {
      this._line = 0;
    }
    polygonEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line === 0) this._ += "Z";
      this._point = NaN;
    }
    point(x6, y5) {
      switch (this._point) {
        case 0: {
          this._append`M${x6},${y5}`;
          this._point = 1;
          break;
        }
        case 1: {
          this._append`L${x6},${y5}`;
          break;
        }
        default: {
          this._append`M${x6},${y5}`;
          if (this._radius !== cacheRadius || this._append !== cacheAppend) {
            const r = this._radius;
            const s2 = this._;
            this._ = "";
            this._append`m0,${r}a${r},${r} 0 1,1 0,${-2 * r}a${r},${r} 0 1,1 0,${2 * r}z`;
            cacheRadius = r;
            cacheAppend = this._append;
            cacheCircle = this._;
            this._ = s2;
          }
          this._ += cacheCircle;
          break;
        }
      }
    }
    result() {
      const result = this._;
      this._ = "";
      return result.length ? result : null;
    }
  };
  function append2(strings) {
    let i = 1;
    this._ += strings[0];
    for (const j3 = strings.length; i < j3; ++i) {
      this._ += arguments[i] + strings[i];
    }
  }
  function appendRound2(digits) {
    const d = Math.floor(digits);
    if (!(d >= 0)) throw new RangeError(`invalid digits: ${digits}`);
    if (d > 15) return append2;
    if (d !== cacheDigits) {
      const k4 = 10 ** d;
      cacheDigits = d;
      cacheAppend = function append3(strings) {
        let i = 1;
        this._ += strings[0];
        for (const j3 = strings.length; i < j3; ++i) {
          this._ += Math.round(arguments[i] * k4) / k4 + strings[i];
        }
      };
    }
    return cacheAppend;
  }

  // node_modules/d3-geo/src/path/index.js
  function path_default(projection2, context) {
    let digits = 3, pointRadius = 4.5, projectionStream, contextStream;
    function path2(object2) {
      if (object2) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        stream_default(object2, projectionStream(contextStream));
      }
      return contextStream.result();
    }
    path2.area = function(object2) {
      stream_default(object2, projectionStream(area_default3));
      return area_default3.result();
    };
    path2.measure = function(object2) {
      stream_default(object2, projectionStream(measure_default));
      return measure_default.result();
    };
    path2.bounds = function(object2) {
      stream_default(object2, projectionStream(bounds_default2));
      return bounds_default2.result();
    };
    path2.centroid = function(object2) {
      stream_default(object2, projectionStream(centroid_default2));
      return centroid_default2.result();
    };
    path2.projection = function(_3) {
      if (!arguments.length) return projection2;
      projectionStream = _3 == null ? (projection2 = null, identity_default3) : (projection2 = _3).stream;
      return path2;
    };
    path2.context = function(_3) {
      if (!arguments.length) return context;
      contextStream = _3 == null ? (context = null, new PathString(digits)) : new PathContext(context = _3);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return path2;
    };
    path2.pointRadius = function(_3) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _3 === "function" ? _3 : (contextStream.pointRadius(+_3), +_3);
      return path2;
    };
    path2.digits = function(_3) {
      if (!arguments.length) return digits;
      if (_3 == null) digits = null;
      else {
        const d = Math.floor(_3);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${_3}`);
        digits = d;
      }
      if (context === null) contextStream = new PathString(digits);
      return path2;
    };
    return path2.projection(projection2).digits(digits).context(context);
  }

  // node_modules/d3-geo/src/transform.js
  function transform_default(methods) {
    return {
      stream: transformer(methods)
    };
  }
  function transformer(methods) {
    return function(stream) {
      var s2 = new TransformStream();
      for (var key in methods) s2[key] = methods[key];
      s2.stream = stream;
      return s2;
    };
  }
  function TransformStream() {
  }
  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x6, y5) {
      this.stream.point(x6, y5);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };

  // node_modules/d3-geo/src/projection/fit.js
  function fit(projection2, fitBounds, object2) {
    var clip = projection2.clipExtent && projection2.clipExtent();
    projection2.scale(150).translate([0, 0]);
    if (clip != null) projection2.clipExtent(null);
    stream_default(object2, projection2.stream(bounds_default2));
    fitBounds(bounds_default2.result());
    if (clip != null) projection2.clipExtent(clip);
    return projection2;
  }
  function fitExtent(projection2, extent2, object2) {
    return fit(projection2, function(b10) {
      var w3 = extent2[1][0] - extent2[0][0], h = extent2[1][1] - extent2[0][1], k4 = Math.min(w3 / (b10[1][0] - b10[0][0]), h / (b10[1][1] - b10[0][1])), x6 = +extent2[0][0] + (w3 - k4 * (b10[1][0] + b10[0][0])) / 2, y5 = +extent2[0][1] + (h - k4 * (b10[1][1] + b10[0][1])) / 2;
      projection2.scale(150 * k4).translate([x6, y5]);
    }, object2);
  }
  function fitSize(projection2, size, object2) {
    return fitExtent(projection2, [[0, 0], size], object2);
  }
  function fitWidth(projection2, width, object2) {
    return fit(projection2, function(b10) {
      var w3 = +width, k4 = w3 / (b10[1][0] - b10[0][0]), x6 = (w3 - k4 * (b10[1][0] + b10[0][0])) / 2, y5 = -k4 * b10[0][1];
      projection2.scale(150 * k4).translate([x6, y5]);
    }, object2);
  }
  function fitHeight(projection2, height, object2) {
    return fit(projection2, function(b10) {
      var h = +height, k4 = h / (b10[1][1] - b10[0][1]), x6 = -k4 * b10[0][0], y5 = (h - k4 * (b10[1][1] + b10[0][1])) / 2;
      projection2.scale(150 * k4).translate([x6, y5]);
    }, object2);
  }

  // node_modules/d3-geo/src/projection/resample.js
  var maxDepth = 16;
  var cosMinDistance = cos2(30 * radians2);
  function resample_default(project, delta2) {
    return +delta2 ? resample(project, delta2) : resampleNone(project);
  }
  function resampleNone(project) {
    return transformer({
      point: function(x6, y5) {
        x6 = project(x6, y5);
        this.stream.point(x6[0], x6[1]);
      }
    });
  }
  function resample(project, delta2) {
    function resampleLineTo(x06, y06, lambda04, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
      var dx = x12 - x06, dy = y12 - y06, d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a4 = a0 + a1, b10 = b02 + b12, c6 = c0 + c1, m4 = sqrt(a4 * a4 + b10 * b10 + c6 * c6), phi2 = asin(c6 /= m4), lambda22 = abs3(abs3(c6) - 1) < epsilon7 || abs3(lambda04 - lambda12) < epsilon7 ? (lambda04 + lambda12) / 2 : atan2(b10, a4), p3 = project(lambda22, phi2), x22 = p3[0], y22 = p3[1], dx2 = x22 - x06, dy2 = y22 - y06, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 || abs3((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x06, y06, lambda04, a0, b02, c0, x22, y22, lambda22, a4 /= m4, b10 /= m4, c6, depth, stream);
          stream.point(x22, y22);
          resampleLineTo(x22, y22, lambda22, a4, b10, c6, x12, y12, lambda12, a1, b12, c1, depth, stream);
        }
      }
    }
    return function(stream) {
      var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b02, c0;
      var resampleStream = {
        point: point6,
        lineStart,
        lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resampleStream.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resampleStream.lineStart = lineStart;
        }
      };
      function point6(x6, y5) {
        x6 = project(x6, y5);
        stream.point(x6[0], x6[1]);
      }
      function lineStart() {
        x06 = NaN;
        resampleStream.point = linePoint2;
        stream.lineStart();
      }
      function linePoint2(lambda, phi2) {
        var c6 = cartesian([lambda, phi2]), p3 = project(lambda, phi2);
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x06 = p3[0], y06 = p3[1], lambda04 = lambda, a0 = c6[0], b02 = c6[1], c0 = c6[2], maxDepth, stream);
        stream.point(x06, y06);
      }
      function lineEnd() {
        resampleStream.point = point6;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }
      function ringPoint(lambda, phi2) {
        linePoint2(lambda004 = lambda, phi2), x004 = x06, y004 = y06, a00 = a0, b00 = b02, c00 = c0;
        resampleStream.point = linePoint2;
      }
      function ringEnd() {
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }
      return resampleStream;
    };
  }

  // node_modules/d3-geo/src/projection/index.js
  var transformRadians = transformer({
    point: function(x6, y5) {
      this.stream.point(x6 * radians2, y5 * radians2);
    }
  });
  function transformRotate(rotate) {
    return transformer({
      point: function(x6, y5) {
        var r = rotate(x6, y5);
        return this.stream.point(r[0], r[1]);
      }
    });
  }
  function scaleTranslate(k4, dx, dy, sx, sy) {
    function transform2(x6, y5) {
      x6 *= sx;
      y5 *= sy;
      return [dx + k4 * x6, dy - k4 * y5];
    }
    transform2.invert = function(x6, y5) {
      return [(x6 - dx) / k4 * sx, (dy - y5) / k4 * sy];
    };
    return transform2;
  }
  function scaleTranslateRotate(k4, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k4, dx, dy, sx, sy);
    var cosAlpha = cos2(alpha), sinAlpha = sin2(alpha), a4 = cosAlpha * k4, b10 = sinAlpha * k4, ai = cosAlpha / k4, bi = sinAlpha / k4, ci = (sinAlpha * dy - cosAlpha * dx) / k4, fi = (sinAlpha * dx + cosAlpha * dy) / k4;
    function transform2(x6, y5) {
      x6 *= sx;
      y5 *= sy;
      return [a4 * x6 - b10 * y5 + dx, dy - b10 * x6 - a4 * y5];
    }
    transform2.invert = function(x6, y5) {
      return [sx * (ai * x6 - bi * y5 + ci), sy * (fi - bi * x6 - ai * y5)];
    };
    return transform2;
  }
  function projection(project) {
    return projectionMutator(function() {
      return project;
    })();
  }
  function projectionMutator(projectAt) {
    var project, k4 = 150, x6 = 480, y5 = 250, lambda = 0, phi2 = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default3, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection2(point6) {
      return projectRotateTransform(point6[0] * radians2, point6[1] * radians2);
    }
    function invert(point6) {
      point6 = projectRotateTransform.invert(point6[0], point6[1]);
      return point6 && [point6[0] * degrees3, point6[1] * degrees3];
    }
    projection2.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection2.preclip = function(_3) {
      return arguments.length ? (preclip = _3, theta = void 0, reset()) : preclip;
    };
    projection2.postclip = function(_3) {
      return arguments.length ? (postclip = _3, x06 = y06 = x12 = y12 = null, reset()) : postclip;
    };
    projection2.clipAngle = function(_3) {
      return arguments.length ? (preclip = +_3 ? circle_default2(theta = _3 * radians2) : (theta = null, antimeridian_default), reset()) : theta * degrees3;
    };
    projection2.clipExtent = function(_3) {
      return arguments.length ? (postclip = _3 == null ? (x06 = y06 = x12 = y12 = null, identity_default3) : clipRectangle(x06 = +_3[0][0], y06 = +_3[0][1], x12 = +_3[1][0], y12 = +_3[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
    };
    projection2.scale = function(_3) {
      return arguments.length ? (k4 = +_3, recenter()) : k4;
    };
    projection2.translate = function(_3) {
      return arguments.length ? (x6 = +_3[0], y5 = +_3[1], recenter()) : [x6, y5];
    };
    projection2.center = function(_3) {
      return arguments.length ? (lambda = _3[0] % 360 * radians2, phi2 = _3[1] % 360 * radians2, recenter()) : [lambda * degrees3, phi2 * degrees3];
    };
    projection2.rotate = function(_3) {
      return arguments.length ? (deltaLambda = _3[0] % 360 * radians2, deltaPhi = _3[1] % 360 * radians2, deltaGamma = _3.length > 2 ? _3[2] % 360 * radians2 : 0, recenter()) : [deltaLambda * degrees3, deltaPhi * degrees3, deltaGamma * degrees3];
    };
    projection2.angle = function(_3) {
      return arguments.length ? (alpha = _3 % 360 * radians2, recenter()) : alpha * degrees3;
    };
    projection2.reflectX = function(_3) {
      return arguments.length ? (sx = _3 ? -1 : 1, recenter()) : sx < 0;
    };
    projection2.reflectY = function(_3) {
      return arguments.length ? (sy = _3 ? -1 : 1, recenter()) : sy < 0;
    };
    projection2.precision = function(_3) {
      return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _3 * _3), reset()) : sqrt(delta2);
    };
    projection2.fitExtent = function(extent2, object2) {
      return fitExtent(projection2, extent2, object2);
    };
    projection2.fitSize = function(size, object2) {
      return fitSize(projection2, size, object2);
    };
    projection2.fitWidth = function(width, object2) {
      return fitWidth(projection2, width, object2);
    };
    projection2.fitHeight = function(height, object2) {
      return fitHeight(projection2, height, object2);
    };
    function recenter() {
      var center2 = scaleTranslateRotate(k4, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi2)), transform2 = scaleTranslateRotate(k4, x6 - center2[0], y5 - center2[1], sx, sy, alpha);
      rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
      projectTransform = compose_default(project, transform2);
      projectRotateTransform = compose_default(rotate, projectTransform);
      projectResample = resample_default(projectTransform, delta2);
      return reset();
    }
    function reset() {
      cache = cacheStream = null;
      return projection2;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection2.invert = project.invert && invert;
      return recenter();
    };
  }

  // node_modules/d3-geo/src/projection/conic.js
  function conicProjection(projectAt) {
    var phi02 = 0, phi12 = pi4 / 3, m4 = projectionMutator(projectAt), p3 = m4(phi02, phi12);
    p3.parallels = function(_3) {
      return arguments.length ? m4(phi02 = _3[0] * radians2, phi12 = _3[1] * radians2) : [phi02 * degrees3, phi12 * degrees3];
    };
    return p3;
  }

  // node_modules/d3-geo/src/projection/cylindricalEqualArea.js
  function cylindricalEqualAreaRaw(phi02) {
    var cosPhi03 = cos2(phi02);
    function forward(lambda, phi2) {
      return [lambda * cosPhi03, sin2(phi2) / cosPhi03];
    }
    forward.invert = function(x6, y5) {
      return [x6 / cosPhi03, asin(y5 * cosPhi03)];
    };
    return forward;
  }

  // node_modules/d3-geo/src/projection/conicEqualArea.js
  function conicEqualAreaRaw(y06, y12) {
    var sy0 = sin2(y06), n = (sy0 + sin2(y12)) / 2;
    if (abs3(n) < epsilon7) return cylindricalEqualAreaRaw(y06);
    var c6 = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c6) / n;
    function project(x6, y5) {
      var r = sqrt(c6 - 2 * n * sin2(y5)) / n;
      return [r * sin2(x6 *= n), r0 - r * cos2(x6)];
    }
    project.invert = function(x6, y5) {
      var r0y = r0 - y5, l2 = atan2(x6, abs3(r0y)) * sign(r0y);
      if (r0y * n < 0)
        l2 -= pi4 * sign(x6) * sign(r0y);
      return [l2 / n, asin((c6 - (x6 * x6 + r0y * r0y) * n * n) / (2 * n))];
    };
    return project;
  }
  function conicEqualArea_default() {
    return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
  }

  // node_modules/d3-geo/src/projection/albers.js
  function albers_default() {
    return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
  }

  // node_modules/d3-geo/src/projection/albersUsa.js
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function(x6, y5) {
        var i = -1;
        while (++i < n) streams[i].point(x6, y5);
      },
      sphere: function() {
        var i = -1;
        while (++i < n) streams[i].sphere();
      },
      lineStart: function() {
        var i = -1;
        while (++i < n) streams[i].lineStart();
      },
      lineEnd: function() {
        var i = -1;
        while (++i < n) streams[i].lineEnd();
      },
      polygonStart: function() {
        var i = -1;
        while (++i < n) streams[i].polygonStart();
      },
      polygonEnd: function() {
        var i = -1;
        while (++i < n) streams[i].polygonEnd();
      }
    };
  }
  function albersUsa_default() {
    var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point6, pointStream = { point: function(x6, y5) {
      point6 = [x6, y5];
    } };
    function albersUsa(coordinates2) {
      var x6 = coordinates2[0], y5 = coordinates2[1];
      return point6 = null, (lower48Point.point(x6, y5), point6) || (alaskaPoint.point(x6, y5), point6) || (hawaiiPoint.point(x6, y5), point6);
    }
    albersUsa.invert = function(coordinates2) {
      var k4 = lower48.scale(), t = lower48.translate(), x6 = (coordinates2[0] - t[0]) / k4, y5 = (coordinates2[1] - t[1]) / k4;
      return (y5 >= 0.12 && y5 < 0.234 && x6 >= -0.425 && x6 < -0.214 ? alaska : y5 >= 0.166 && y5 < 0.234 && x6 >= -0.214 && x6 < -0.115 ? hawaii : lower48).invert(coordinates2);
    };
    albersUsa.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
    };
    albersUsa.precision = function(_3) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_3), alaska.precision(_3), hawaii.precision(_3);
      return reset();
    };
    albersUsa.scale = function(_3) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_3), alaska.scale(_3 * 0.35), hawaii.scale(_3);
      return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_3) {
      if (!arguments.length) return lower48.translate();
      var k4 = lower48.scale(), x6 = +_3[0], y5 = +_3[1];
      lower48Point = lower48.translate(_3).clipExtent([[x6 - 0.455 * k4, y5 - 0.238 * k4], [x6 + 0.455 * k4, y5 + 0.238 * k4]]).stream(pointStream);
      alaskaPoint = alaska.translate([x6 - 0.307 * k4, y5 + 0.201 * k4]).clipExtent([[x6 - 0.425 * k4 + epsilon7, y5 + 0.12 * k4 + epsilon7], [x6 - 0.214 * k4 - epsilon7, y5 + 0.234 * k4 - epsilon7]]).stream(pointStream);
      hawaiiPoint = hawaii.translate([x6 - 0.205 * k4, y5 + 0.212 * k4]).clipExtent([[x6 - 0.214 * k4 + epsilon7, y5 + 0.166 * k4 + epsilon7], [x6 - 0.115 * k4 - epsilon7, y5 + 0.234 * k4 - epsilon7]]).stream(pointStream);
      return reset();
    };
    albersUsa.fitExtent = function(extent2, object2) {
      return fitExtent(albersUsa, extent2, object2);
    };
    albersUsa.fitSize = function(size, object2) {
      return fitSize(albersUsa, size, object2);
    };
    albersUsa.fitWidth = function(width, object2) {
      return fitWidth(albersUsa, width, object2);
    };
    albersUsa.fitHeight = function(height, object2) {
      return fitHeight(albersUsa, height, object2);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUsa;
    }
    return albersUsa.scale(1070);
  }

  // node_modules/d3-geo/src/projection/azimuthal.js
  function azimuthalRaw(scale2) {
    return function(x6, y5) {
      var cx = cos2(x6), cy = cos2(y5), k4 = scale2(cx * cy);
      if (k4 === Infinity) return [2, 0];
      return [
        k4 * cy * sin2(x6),
        k4 * sin2(y5)
      ];
    };
  }
  function azimuthalInvert(angle2) {
    return function(x6, y5) {
      var z3 = sqrt(x6 * x6 + y5 * y5), c6 = angle2(z3), sc = sin2(c6), cc2 = cos2(c6);
      return [
        atan2(x6 * sc, z3 * cc2),
        asin(z3 && y5 * sc / z3)
      ];
    };
  }

  // node_modules/d3-geo/src/projection/azimuthalEqualArea.js
  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
    return sqrt(2 / (1 + cxcy));
  });
  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z3) {
    return 2 * asin(z3 / 2);
  });
  function azimuthalEqualArea_default() {
    return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
  }

  // node_modules/d3-geo/src/projection/azimuthalEquidistant.js
  var azimuthalEquidistantRaw = azimuthalRaw(function(c6) {
    return (c6 = acos(c6)) && c6 / sin2(c6);
  });
  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z3) {
    return z3;
  });
  function azimuthalEquidistant_default() {
    return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
  }

  // node_modules/d3-geo/src/projection/mercator.js
  function mercatorRaw(lambda, phi2) {
    return [lambda, log(tan((halfPi3 + phi2) / 2))];
  }
  mercatorRaw.invert = function(x6, y5) {
    return [x6, 2 * atan(exp(y5)) - halfPi3];
  };
  function mercator_default() {
    return mercatorProjection(mercatorRaw).scale(961 / tau5);
  }
  function mercatorProjection(project) {
    var m4 = projection(project), center2 = m4.center, scale2 = m4.scale, translate = m4.translate, clipExtent = m4.clipExtent, x06 = null, y06, x12, y12;
    m4.scale = function(_3) {
      return arguments.length ? (scale2(_3), reclip()) : scale2();
    };
    m4.translate = function(_3) {
      return arguments.length ? (translate(_3), reclip()) : translate();
    };
    m4.center = function(_3) {
      return arguments.length ? (center2(_3), reclip()) : center2();
    };
    m4.clipExtent = function(_3) {
      return arguments.length ? (_3 == null ? x06 = y06 = x12 = y12 = null : (x06 = +_3[0][0], y06 = +_3[0][1], x12 = +_3[1][0], y12 = +_3[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
    };
    function reclip() {
      var k4 = pi4 * scale2(), t = m4(rotation_default(m4.rotate()).invert([0, 0]));
      return clipExtent(x06 == null ? [[t[0] - k4, t[1] - k4], [t[0] + k4, t[1] + k4]] : project === mercatorRaw ? [[Math.max(t[0] - k4, x06), y06], [Math.min(t[0] + k4, x12), y12]] : [[x06, Math.max(t[1] - k4, y06)], [x12, Math.min(t[1] + k4, y12)]]);
    }
    return reclip();
  }

  // node_modules/d3-geo/src/projection/conicConformal.js
  function tany(y5) {
    return tan((halfPi3 + y5) / 2);
  }
  function conicConformalRaw(y06, y12) {
    var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : log(cy0 / cos2(y12)) / log(tany(y12) / tany(y06)), f = cy0 * pow2(tany(y06), n) / n;
    if (!n) return mercatorRaw;
    function project(x6, y5) {
      if (f > 0) {
        if (y5 < -halfPi3 + epsilon7) y5 = -halfPi3 + epsilon7;
      } else {
        if (y5 > halfPi3 - epsilon7) y5 = halfPi3 - epsilon7;
      }
      var r = f / pow2(tany(y5), n);
      return [r * sin2(n * x6), f - r * cos2(n * x6)];
    }
    project.invert = function(x6, y5) {
      var fy = f - y5, r = sign(n) * sqrt(x6 * x6 + fy * fy), l2 = atan2(x6, abs3(fy)) * sign(fy);
      if (fy * n < 0)
        l2 -= pi4 * sign(x6) * sign(fy);
      return [l2 / n, 2 * atan(pow2(f / r, 1 / n)) - halfPi3];
    };
    return project;
  }
  function conicConformal_default() {
    return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
  }

  // node_modules/d3-geo/src/projection/equirectangular.js
  function equirectangularRaw(lambda, phi2) {
    return [lambda, phi2];
  }
  equirectangularRaw.invert = equirectangularRaw;
  function equirectangular_default() {
    return projection(equirectangularRaw).scale(152.63);
  }

  // node_modules/d3-geo/src/projection/conicEquidistant.js
  function conicEquidistantRaw(y06, y12) {
    var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : (cy0 - cos2(y12)) / (y12 - y06), g = cy0 / n + y06;
    if (abs3(n) < epsilon7) return equirectangularRaw;
    function project(x6, y5) {
      var gy = g - y5, nx = n * x6;
      return [gy * sin2(nx), g - gy * cos2(nx)];
    }
    project.invert = function(x6, y5) {
      var gy = g - y5, l2 = atan2(x6, abs3(gy)) * sign(gy);
      if (gy * n < 0)
        l2 -= pi4 * sign(x6) * sign(gy);
      return [l2 / n, g - sign(n) * sqrt(x6 * x6 + gy * gy)];
    };
    return project;
  }
  function conicEquidistant_default() {
    return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
  }

  // node_modules/d3-geo/src/projection/equalEarth.js
  var A1 = 1.340264;
  var A22 = -0.081106;
  var A32 = 893e-6;
  var A4 = 3796e-6;
  var M2 = sqrt(3) / 2;
  var iterations = 12;
  function equalEarthRaw(lambda, phi2) {
    var l2 = asin(M2 * sin2(phi2)), l22 = l2 * l2, l6 = l22 * l22 * l22;
    return [
      lambda * cos2(l2) / (M2 * (A1 + 3 * A22 * l22 + l6 * (7 * A32 + 9 * A4 * l22))),
      l2 * (A1 + A22 * l22 + l6 * (A32 + A4 * l22))
    ];
  }
  equalEarthRaw.invert = function(x6, y5) {
    var l2 = y5, l22 = l2 * l2, l6 = l22 * l22 * l22;
    for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
      fy = l2 * (A1 + A22 * l22 + l6 * (A32 + A4 * l22)) - y5;
      fpy = A1 + 3 * A22 * l22 + l6 * (7 * A32 + 9 * A4 * l22);
      l2 -= delta = fy / fpy, l22 = l2 * l2, l6 = l22 * l22 * l22;
      if (abs3(delta) < epsilon22) break;
    }
    return [
      M2 * x6 * (A1 + 3 * A22 * l22 + l6 * (7 * A32 + 9 * A4 * l22)) / cos2(l2),
      asin(sin2(l2) / M2)
    ];
  };
  function equalEarth_default() {
    return projection(equalEarthRaw).scale(177.158);
  }

  // node_modules/d3-geo/src/projection/gnomonic.js
  function gnomonicRaw(x6, y5) {
    var cy = cos2(y5), k4 = cos2(x6) * cy;
    return [cy * sin2(x6) / k4, sin2(y5) / k4];
  }
  gnomonicRaw.invert = azimuthalInvert(atan);
  function gnomonic_default() {
    return projection(gnomonicRaw).scale(144.049).clipAngle(60);
  }

  // node_modules/d3-geo/src/projection/identity.js
  function identity_default4() {
    var k4 = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca3, sa, x06 = null, y06, x12, y12, kx2 = 1, ky2 = 1, transform2 = transformer({
      point: function(x6, y5) {
        var p3 = projection2([x6, y5]);
        this.stream.point(p3[0], p3[1]);
      }
    }), postclip = identity_default3, cache, cacheStream;
    function reset() {
      kx2 = k4 * sx;
      ky2 = k4 * sy;
      cache = cacheStream = null;
      return projection2;
    }
    function projection2(p3) {
      var x6 = p3[0] * kx2, y5 = p3[1] * ky2;
      if (alpha) {
        var t = y5 * ca3 - x6 * sa;
        x6 = x6 * ca3 + y5 * sa;
        y5 = t;
      }
      return [x6 + tx, y5 + ty];
    }
    projection2.invert = function(p3) {
      var x6 = p3[0] - tx, y5 = p3[1] - ty;
      if (alpha) {
        var t = y5 * ca3 + x6 * sa;
        x6 = x6 * ca3 - y5 * sa;
        y5 = t;
      }
      return [x6 / kx2, y5 / ky2];
    };
    projection2.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform2(postclip(cacheStream = stream));
    };
    projection2.postclip = function(_3) {
      return arguments.length ? (postclip = _3, x06 = y06 = x12 = y12 = null, reset()) : postclip;
    };
    projection2.clipExtent = function(_3) {
      return arguments.length ? (postclip = _3 == null ? (x06 = y06 = x12 = y12 = null, identity_default3) : clipRectangle(x06 = +_3[0][0], y06 = +_3[0][1], x12 = +_3[1][0], y12 = +_3[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
    };
    projection2.scale = function(_3) {
      return arguments.length ? (k4 = +_3, reset()) : k4;
    };
    projection2.translate = function(_3) {
      return arguments.length ? (tx = +_3[0], ty = +_3[1], reset()) : [tx, ty];
    };
    projection2.angle = function(_3) {
      return arguments.length ? (alpha = _3 % 360 * radians2, sa = sin2(alpha), ca3 = cos2(alpha), reset()) : alpha * degrees3;
    };
    projection2.reflectX = function(_3) {
      return arguments.length ? (sx = _3 ? -1 : 1, reset()) : sx < 0;
    };
    projection2.reflectY = function(_3) {
      return arguments.length ? (sy = _3 ? -1 : 1, reset()) : sy < 0;
    };
    projection2.fitExtent = function(extent2, object2) {
      return fitExtent(projection2, extent2, object2);
    };
    projection2.fitSize = function(size, object2) {
      return fitSize(projection2, size, object2);
    };
    projection2.fitWidth = function(width, object2) {
      return fitWidth(projection2, width, object2);
    };
    projection2.fitHeight = function(height, object2) {
      return fitHeight(projection2, height, object2);
    };
    return projection2;
  }

  // node_modules/d3-geo/src/projection/naturalEarth1.js
  function naturalEarth1Raw(lambda, phi2) {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    return [
      lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
      phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
    ];
  }
  naturalEarth1Raw.invert = function(x6, y5) {
    var phi2 = y5, i = 25, delta;
    do {
      var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
      phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y5) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
    } while (abs3(delta) > epsilon7 && --i > 0);
    return [
      x6 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
      phi2
    ];
  };
  function naturalEarth1_default() {
    return projection(naturalEarth1Raw).scale(175.295);
  }

  // node_modules/d3-geo/src/projection/orthographic.js
  function orthographicRaw(x6, y5) {
    return [cos2(y5) * sin2(x6), sin2(y5)];
  }
  orthographicRaw.invert = azimuthalInvert(asin);
  function orthographic_default() {
    return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon7);
  }

  // node_modules/d3-geo/src/projection/stereographic.js
  function stereographicRaw(x6, y5) {
    var cy = cos2(y5), k4 = 1 + cos2(x6) * cy;
    return [cy * sin2(x6) / k4, sin2(y5) / k4];
  }
  stereographicRaw.invert = azimuthalInvert(function(z3) {
    return 2 * atan(z3);
  });
  function stereographic_default() {
    return projection(stereographicRaw).scale(250).clipAngle(142);
  }

  // node_modules/d3-geo/src/projection/transverseMercator.js
  function transverseMercatorRaw(lambda, phi2) {
    return [log(tan((halfPi3 + phi2) / 2)), -lambda];
  }
  transverseMercatorRaw.invert = function(x6, y5) {
    return [-y5, 2 * atan(exp(x6)) - halfPi3];
  };
  function transverseMercator_default() {
    var m4 = mercatorProjection(transverseMercatorRaw), center2 = m4.center, rotate = m4.rotate;
    m4.center = function(_3) {
      return arguments.length ? center2([-_3[1], _3[0]]) : (_3 = center2(), [_3[1], -_3[0]]);
    };
    m4.rotate = function(_3) {
      return arguments.length ? rotate([_3[0], _3[1], _3.length > 2 ? _3[2] + 90 : 90]) : (_3 = rotate(), [_3[0], _3[1], _3[2] - 90]);
    };
    return rotate([0, 0, 90]).scale(159.155);
  }

  // node_modules/d3-hierarchy/src/cluster.js
  function defaultSeparation(a4, b10) {
    return a4.parent === b10.parent ? 1 : 2;
  }
  function meanX(children2) {
    return children2.reduce(meanXReduce, 0) / children2.length;
  }
  function meanXReduce(x6, c6) {
    return x6 + c6.x;
  }
  function maxY(children2) {
    return 1 + children2.reduce(maxYReduce, 0);
  }
  function maxYReduce(y5, c6) {
    return Math.max(y5, c6.y);
  }
  function leafLeft(node) {
    var children2;
    while (children2 = node.children) node = children2[0];
    return node;
  }
  function leafRight(node) {
    var children2;
    while (children2 = node.children) node = children2[children2.length - 1];
    return node;
  }
  function cluster_default() {
    var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster(root3) {
      var previousNode, x6 = 0;
      root3.eachAfter(function(node) {
        var children2 = node.children;
        if (children2) {
          node.x = meanX(children2);
          node.y = maxY(children2);
        } else {
          node.x = previousNode ? x6 += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left2 = leafLeft(root3), right2 = leafRight(root3), x06 = left2.x - separation(left2, right2) / 2, x12 = right2.x + separation(right2, left2) / 2;
      return root3.eachAfter(nodeSize ? function(node) {
        node.x = (node.x - root3.x) * dx;
        node.y = (root3.y - node.y) * dy;
      } : function(node) {
        node.x = (node.x - x06) / (x12 - x06) * dx;
        node.y = (1 - (root3.y ? node.y / root3.y : 1)) * dy;
      });
    }
    cluster.separation = function(x6) {
      return arguments.length ? (separation = x6, cluster) : separation;
    };
    cluster.size = function(x6) {
      return arguments.length ? (nodeSize = false, dx = +x6[0], dy = +x6[1], cluster) : nodeSize ? null : [dx, dy];
    };
    cluster.nodeSize = function(x6) {
      return arguments.length ? (nodeSize = true, dx = +x6[0], dy = +x6[1], cluster) : nodeSize ? [dx, dy] : null;
    };
    return cluster;
  }

  // node_modules/d3-hierarchy/src/hierarchy/count.js
  function count2(node) {
    var sum4 = 0, children2 = node.children, i = children2 && children2.length;
    if (!i) sum4 = 1;
    else while (--i >= 0) sum4 += children2[i].value;
    node.value = sum4;
  }
  function count_default() {
    return this.eachAfter(count2);
  }

  // node_modules/d3-hierarchy/src/hierarchy/each.js
  function each_default2(callback, that) {
    let index3 = -1;
    for (const node of this) {
      callback.call(that, node, ++index3, this);
    }
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
  function eachBefore_default(callback, that) {
    var node = this, nodes = [node], children2, i, index3 = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index3, this);
      if (children2 = node.children) {
        for (i = children2.length - 1; i >= 0; --i) {
          nodes.push(children2[i]);
        }
      }
    }
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
  function eachAfter_default(callback, that) {
    var node = this, nodes = [node], next = [], children2, i, n, index3 = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children2 = node.children) {
        for (i = 0, n = children2.length; i < n; ++i) {
          nodes.push(children2[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index3, this);
    }
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/find.js
  function find_default2(callback, that) {
    let index3 = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index3, this)) {
        return node;
      }
    }
  }

  // node_modules/d3-hierarchy/src/hierarchy/sum.js
  function sum_default(value) {
    return this.eachAfter(function(node) {
      var sum4 = +value(node.data) || 0, children2 = node.children, i = children2 && children2.length;
      while (--i >= 0) sum4 += children2[i].value;
      node.value = sum4;
    });
  }

  // node_modules/d3-hierarchy/src/hierarchy/sort.js
  function sort_default2(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  // node_modules/d3-hierarchy/src/hierarchy/path.js
  function path_default2(end) {
    var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
    while (start2 !== ancestor) {
      start2 = start2.parent;
      nodes.push(start2);
    }
    var k4 = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k4, 0, end);
      end = end.parent;
    }
    return nodes;
  }
  function leastCommonAncestor(a4, b10) {
    if (a4 === b10) return a4;
    var aNodes = a4.ancestors(), bNodes = b10.ancestors(), c6 = null;
    a4 = aNodes.pop();
    b10 = bNodes.pop();
    while (a4 === b10) {
      c6 = a4;
      a4 = aNodes.pop();
      b10 = bNodes.pop();
    }
    return c6;
  }

  // node_modules/d3-hierarchy/src/hierarchy/ancestors.js
  function ancestors_default() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  // node_modules/d3-hierarchy/src/hierarchy/descendants.js
  function descendants_default() {
    return Array.from(this);
  }

  // node_modules/d3-hierarchy/src/hierarchy/leaves.js
  function leaves_default() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  // node_modules/d3-hierarchy/src/hierarchy/links.js
  function links_default() {
    var root3 = this, links = [];
    root3.each(function(node) {
      if (node !== root3) {
        links.push({ source: node.parent, target: node });
      }
    });
    return links;
  }

  // node_modules/d3-hierarchy/src/hierarchy/iterator.js
  function* iterator_default2() {
    var node = this, current, next = [node], children2, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        yield node;
        if (children2 = node.children) {
          for (i = 0, n = children2.length; i < n; ++i) {
            next.push(children2[i]);
          }
        }
      }
    } while (next.length);
  }

  // node_modules/d3-hierarchy/src/hierarchy/index.js
  function hierarchy(data, children2) {
    if (data instanceof Map) {
      data = [void 0, data];
      if (children2 === void 0) children2 = mapChildren;
    } else if (children2 === void 0) {
      children2 = objectChildren;
    }
    var root3 = new Node(data), node, nodes = [root3], child, childs, i, n;
    while (node = nodes.pop()) {
      if ((childs = children2(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }
    return root3.eachBefore(computeHeight);
  }
  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }
  function objectChildren(d) {
    return d.children;
  }
  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }
  function copyData(node) {
    if (node.data.value !== void 0) node.value = node.data.value;
    node.data = node.data.data;
  }
  function computeHeight(node) {
    var height = 0;
    do
      node.height = height;
    while ((node = node.parent) && node.height < ++height);
  }
  function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
  }
  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: count_default,
    each: each_default2,
    eachAfter: eachAfter_default,
    eachBefore: eachBefore_default,
    find: find_default2,
    sum: sum_default,
    sort: sort_default2,
    path: path_default2,
    ancestors: ancestors_default,
    descendants: descendants_default,
    leaves: leaves_default,
    links: links_default,
    copy: node_copy,
    [Symbol.iterator]: iterator_default2
  };

  // node_modules/d3-hierarchy/src/accessors.js
  function optional(f) {
    return f == null ? null : required(f);
  }
  function required(f) {
    if (typeof f !== "function") throw new Error();
    return f;
  }

  // node_modules/d3-hierarchy/src/constant.js
  function constantZero() {
    return 0;
  }
  function constant_default9(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-hierarchy/src/lcg.js
  var a2 = 1664525;
  var c2 = 1013904223;
  var m3 = 4294967296;
  function lcg_default2() {
    let s2 = 1;
    return () => (s2 = (a2 * s2 + c2) % m3) / m3;
  }

  // node_modules/d3-hierarchy/src/array.js
  function array_default2(x6) {
    return typeof x6 === "object" && "length" in x6 ? x6 : Array.from(x6);
  }
  function shuffle(array4, random) {
    let m4 = array4.length, t, i;
    while (m4) {
      i = random() * m4-- | 0;
      t = array4[m4];
      array4[m4] = array4[i];
      array4[i] = t;
    }
    return array4;
  }

  // node_modules/d3-hierarchy/src/pack/enclose.js
  function enclose_default(circles) {
    return packEncloseRandom(circles, lcg_default2());
  }
  function packEncloseRandom(circles, random) {
    var i = 0, n = (circles = shuffle(Array.from(circles), random)).length, B5 = [], p3, e;
    while (i < n) {
      p3 = circles[i];
      if (e && enclosesWeak(e, p3)) ++i;
      else e = encloseBasis(B5 = extendBasis(B5, p3)), i = 0;
    }
    return e;
  }
  function extendBasis(B5, p3) {
    var i, j3;
    if (enclosesWeakAll(p3, B5)) return [p3];
    for (i = 0; i < B5.length; ++i) {
      if (enclosesNot(p3, B5[i]) && enclosesWeakAll(encloseBasis2(B5[i], p3), B5)) {
        return [B5[i], p3];
      }
    }
    for (i = 0; i < B5.length - 1; ++i) {
      for (j3 = i + 1; j3 < B5.length; ++j3) {
        if (enclosesNot(encloseBasis2(B5[i], B5[j3]), p3) && enclosesNot(encloseBasis2(B5[i], p3), B5[j3]) && enclosesNot(encloseBasis2(B5[j3], p3), B5[i]) && enclosesWeakAll(encloseBasis3(B5[i], B5[j3], p3), B5)) {
          return [B5[i], B5[j3], p3];
        }
      }
    }
    throw new Error();
  }
  function enclosesNot(a4, b10) {
    var dr = a4.r - b10.r, dx = b10.x - a4.x, dy = b10.y - a4.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  }
  function enclosesWeak(a4, b10) {
    var dr = a4.r - b10.r + Math.max(a4.r, b10.r, 1) * 1e-9, dx = b10.x - a4.x, dy = b10.y - a4.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  function enclosesWeakAll(a4, B5) {
    for (var i = 0; i < B5.length; ++i) {
      if (!enclosesWeak(a4, B5[i])) {
        return false;
      }
    }
    return true;
  }
  function encloseBasis(B5) {
    switch (B5.length) {
      case 1:
        return encloseBasis1(B5[0]);
      case 2:
        return encloseBasis2(B5[0], B5[1]);
      case 3:
        return encloseBasis3(B5[0], B5[1], B5[2]);
    }
  }
  function encloseBasis1(a4) {
    return {
      x: a4.x,
      y: a4.y,
      r: a4.r
    };
  }
  function encloseBasis2(a4, b10) {
    var x12 = a4.x, y12 = a4.y, r1 = a4.r, x22 = b10.x, y22 = b10.y, r2 = b10.r, x21 = x22 - x12, y21 = y22 - y12, r21 = r2 - r1, l2 = Math.sqrt(x21 * x21 + y21 * y21);
    return {
      x: (x12 + x22 + x21 / l2 * r21) / 2,
      y: (y12 + y22 + y21 / l2 * r21) / 2,
      r: (l2 + r1 + r2) / 2
    };
  }
  function encloseBasis3(a4, b10, c6) {
    var x12 = a4.x, y12 = a4.y, r1 = a4.r, x22 = b10.x, y22 = b10.y, r2 = b10.r, x32 = c6.x, y32 = c6.y, r3 = c6.r, a22 = x12 - x22, a32 = x12 - x32, b22 = y12 - y22, b32 = y12 - y32, c22 = r2 - r1, c32 = r3 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d2 = d1 - x22 * x22 - y22 * y22 + r2 * r2, d3 = d1 - x32 * x32 - y32 * y32 + r3 * r3, ab4 = a32 * b22 - a22 * b32, xa = (b22 * d3 - b32 * d2) / (ab4 * 2) - x12, xb = (b32 * c22 - b22 * c32) / ab4, ya = (a32 * d2 - a22 * d3) / (ab4 * 2) - y12, yb = (a22 * c32 - a32 * c22) / ab4, A5 = xb * xb + yb * yb - 1, B5 = 2 * (r1 + xa * xb + ya * yb), C4 = xa * xa + ya * ya - r1 * r1, r = -(Math.abs(A5) > 1e-6 ? (B5 + Math.sqrt(B5 * B5 - 4 * A5 * C4)) / (2 * A5) : C4 / B5);
    return {
      x: x12 + xa + xb * r,
      y: y12 + ya + yb * r,
      r
    };
  }

  // node_modules/d3-hierarchy/src/pack/siblings.js
  function place(b10, a4, c6) {
    var dx = b10.x - a4.x, x6, a22, dy = b10.y - a4.y, y5, b22, d2 = dx * dx + dy * dy;
    if (d2) {
      a22 = a4.r + c6.r, a22 *= a22;
      b22 = b10.r + c6.r, b22 *= b22;
      if (a22 > b22) {
        x6 = (d2 + b22 - a22) / (2 * d2);
        y5 = Math.sqrt(Math.max(0, b22 / d2 - x6 * x6));
        c6.x = b10.x - x6 * dx - y5 * dy;
        c6.y = b10.y - x6 * dy + y5 * dx;
      } else {
        x6 = (d2 + a22 - b22) / (2 * d2);
        y5 = Math.sqrt(Math.max(0, a22 / d2 - x6 * x6));
        c6.x = a4.x + x6 * dx - y5 * dy;
        c6.y = a4.y + x6 * dy + y5 * dx;
      }
    } else {
      c6.x = a4.x + c6.r;
      c6.y = a4.y;
    }
  }
  function intersects(a4, b10) {
    var dr = a4.r + b10.r - 1e-6, dx = b10.x - a4.x, dy = b10.y - a4.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  function score(node) {
    var a4 = node._, b10 = node.next._, ab4 = a4.r + b10.r, dx = (a4.x * b10.r + b10.x * a4.r) / ab4, dy = (a4.y * b10.r + b10.y * a4.r) / ab4;
    return dx * dx + dy * dy;
  }
  function Node2(circle2) {
    this._ = circle2;
    this.next = null;
    this.previous = null;
  }
  function packSiblingsRandom(circles, random) {
    if (!(n = (circles = array_default2(circles)).length)) return 0;
    var a4, b10, c6, n, aa2, ca3, i, j3, k4, sj, sk;
    a4 = circles[0], a4.x = 0, a4.y = 0;
    if (!(n > 1)) return a4.r;
    b10 = circles[1], a4.x = -b10.r, b10.x = a4.r, b10.y = 0;
    if (!(n > 2)) return a4.r + b10.r;
    place(b10, a4, c6 = circles[2]);
    a4 = new Node2(a4), b10 = new Node2(b10), c6 = new Node2(c6);
    a4.next = c6.previous = b10;
    b10.next = a4.previous = c6;
    c6.next = b10.previous = a4;
    pack: for (i = 3; i < n; ++i) {
      place(a4._, b10._, c6 = circles[i]), c6 = new Node2(c6);
      j3 = b10.next, k4 = a4.previous, sj = b10._.r, sk = a4._.r;
      do {
        if (sj <= sk) {
          if (intersects(j3._, c6._)) {
            b10 = j3, a4.next = b10, b10.previous = a4, --i;
            continue pack;
          }
          sj += j3._.r, j3 = j3.next;
        } else {
          if (intersects(k4._, c6._)) {
            a4 = k4, a4.next = b10, b10.previous = a4, --i;
            continue pack;
          }
          sk += k4._.r, k4 = k4.previous;
        }
      } while (j3 !== k4.next);
      c6.previous = a4, c6.next = b10, a4.next = b10.previous = b10 = c6;
      aa2 = score(a4);
      while ((c6 = c6.next) !== b10) {
        if ((ca3 = score(c6)) < aa2) {
          a4 = c6, aa2 = ca3;
        }
      }
      b10 = a4.next;
    }
    a4 = [b10._], c6 = b10;
    while ((c6 = c6.next) !== b10) a4.push(c6._);
    c6 = packEncloseRandom(a4, random);
    for (i = 0; i < n; ++i) a4 = circles[i], a4.x -= c6.x, a4.y -= c6.y;
    return c6.r;
  }
  function siblings_default(circles) {
    packSiblingsRandom(circles, lcg_default2());
    return circles;
  }

  // node_modules/d3-hierarchy/src/pack/index.js
  function defaultRadius2(d) {
    return Math.sqrt(d.value);
  }
  function pack_default() {
    var radius = null, dx = 1, dy = 1, padding = constantZero;
    function pack(root3) {
      const random = lcg_default2();
      root3.x = dx / 2, root3.y = dy / 2;
      if (radius) {
        root3.eachBefore(radiusLeaf(radius)).eachAfter(packChildrenRandom(padding, 0.5, random)).eachBefore(translateChild(1));
      } else {
        root3.eachBefore(radiusLeaf(defaultRadius2)).eachAfter(packChildrenRandom(constantZero, 1, random)).eachAfter(packChildrenRandom(padding, root3.r / Math.min(dx, dy), random)).eachBefore(translateChild(Math.min(dx, dy) / (2 * root3.r)));
      }
      return root3;
    }
    pack.radius = function(x6) {
      return arguments.length ? (radius = optional(x6), pack) : radius;
    };
    pack.size = function(x6) {
      return arguments.length ? (dx = +x6[0], dy = +x6[1], pack) : [dx, dy];
    };
    pack.padding = function(x6) {
      return arguments.length ? (padding = typeof x6 === "function" ? x6 : constant_default9(+x6), pack) : padding;
    };
    return pack;
  }
  function radiusLeaf(radius) {
    return function(node) {
      if (!node.children) {
        node.r = Math.max(0, +radius(node) || 0);
      }
    };
  }
  function packChildrenRandom(padding, k4, random) {
    return function(node) {
      if (children2 = node.children) {
        var children2, i, n = children2.length, r = padding(node) * k4 || 0, e;
        if (r) for (i = 0; i < n; ++i) children2[i].r += r;
        e = packSiblingsRandom(children2, random);
        if (r) for (i = 0; i < n; ++i) children2[i].r -= r;
        node.r = e + r;
      }
    };
  }
  function translateChild(k4) {
    return function(node) {
      var parent = node.parent;
      node.r *= k4;
      if (parent) {
        node.x = parent.x + k4 * node.x;
        node.y = parent.y + k4 * node.y;
      }
    };
  }

  // node_modules/d3-hierarchy/src/treemap/round.js
  function round_default2(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  }

  // node_modules/d3-hierarchy/src/treemap/dice.js
  function dice_default(parent, x06, y06, x12, y12) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k4 = parent.value && (x12 - x06) / parent.value;
    while (++i < n) {
      node = nodes[i], node.y0 = y06, node.y1 = y12;
      node.x0 = x06, node.x1 = x06 += node.value * k4;
    }
  }

  // node_modules/d3-hierarchy/src/partition.js
  function partition_default() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root3) {
      var n = root3.height + 1;
      root3.x0 = root3.y0 = padding;
      root3.x1 = dx;
      root3.y1 = dy / n;
      root3.eachBefore(positionNode(dy, n));
      if (round) root3.eachBefore(round_default2);
      return root3;
    }
    function positionNode(dy2, n) {
      return function(node) {
        if (node.children) {
          dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
        }
        var x06 = node.x0, y06 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
        if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
        if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
        node.x0 = x06;
        node.y0 = y06;
        node.x1 = x12;
        node.y1 = y12;
      };
    }
    partition.round = function(x6) {
      return arguments.length ? (round = !!x6, partition) : round;
    };
    partition.size = function(x6) {
      return arguments.length ? (dx = +x6[0], dy = +x6[1], partition) : [dx, dy];
    };
    partition.padding = function(x6) {
      return arguments.length ? (padding = +x6, partition) : padding;
    };
    return partition;
  }

  // node_modules/d3-hierarchy/src/stratify.js
  var preroot = { depth: -1 };
  var ambiguous = {};
  var imputed = {};
  function defaultId(d) {
    return d.id;
  }
  function defaultParentId(d) {
    return d.parentId;
  }
  function stratify_default() {
    var id2 = defaultId, parentId = defaultParentId, path2;
    function stratify(data) {
      var nodes = Array.from(data), currentId = id2, currentParentId = parentId, n, d, i, root3, parent, node, nodeId, nodeKey, nodeByKey = /* @__PURE__ */ new Map();
      if (path2 != null) {
        const I2 = nodes.map((d2, i2) => normalize(path2(d2, i2, data)));
        const P3 = I2.map(parentof);
        const S3 = new Set(I2).add("");
        for (const i2 of P3) {
          if (!S3.has(i2)) {
            S3.add(i2);
            I2.push(i2);
            P3.push(parentof(i2));
            nodes.push(imputed);
          }
        }
        currentId = (_3, i2) => I2[i2];
        currentParentId = (_3, i2) => P3[i2];
      }
      for (i = 0, n = nodes.length; i < n; ++i) {
        d = nodes[i], node = nodes[i] = new Node(d);
        if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
          nodeKey = node.id = nodeId;
          nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
        }
        if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) {
          node.parent = nodeId;
        }
      }
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (nodeId = node.parent) {
          parent = nodeByKey.get(nodeId);
          if (!parent) throw new Error("missing: " + nodeId);
          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
          if (parent.children) parent.children.push(node);
          else parent.children = [node];
          node.parent = parent;
        } else {
          if (root3) throw new Error("multiple roots");
          root3 = node;
        }
      }
      if (!root3) throw new Error("no root");
      if (path2 != null) {
        while (root3.data === imputed && root3.children.length === 1) {
          root3 = root3.children[0], --n;
        }
        for (let i2 = nodes.length - 1; i2 >= 0; --i2) {
          node = nodes[i2];
          if (node.data !== imputed) break;
          node.data = null;
        }
      }
      root3.parent = preroot;
      root3.eachBefore(function(node2) {
        node2.depth = node2.parent.depth + 1;
        --n;
      }).eachBefore(computeHeight);
      root3.parent = null;
      if (n > 0) throw new Error("cycle");
      return root3;
    }
    stratify.id = function(x6) {
      return arguments.length ? (id2 = optional(x6), stratify) : id2;
    };
    stratify.parentId = function(x6) {
      return arguments.length ? (parentId = optional(x6), stratify) : parentId;
    };
    stratify.path = function(x6) {
      return arguments.length ? (path2 = optional(x6), stratify) : path2;
    };
    return stratify;
  }
  function normalize(path2) {
    path2 = `${path2}`;
    let i = path2.length;
    if (slash(path2, i - 1) && !slash(path2, i - 2)) path2 = path2.slice(0, -1);
    return path2[0] === "/" ? path2 : `/${path2}`;
  }
  function parentof(path2) {
    let i = path2.length;
    if (i < 2) return "";
    while (--i > 1) if (slash(path2, i)) break;
    return path2.slice(0, i);
  }
  function slash(path2, i) {
    if (path2[i] === "/") {
      let k4 = 0;
      while (i > 0 && path2[--i] === "\\") ++k4;
      if ((k4 & 1) === 0) return true;
    }
    return false;
  }

  // node_modules/d3-hierarchy/src/tree.js
  function defaultSeparation2(a4, b10) {
    return a4.parent === b10.parent ? 1 : 2;
  }
  function nextLeft(v4) {
    var children2 = v4.children;
    return children2 ? children2[0] : v4.t;
  }
  function nextRight(v4) {
    var children2 = v4.children;
    return children2 ? children2[children2.length - 1] : v4.t;
  }
  function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function executeShifts(v4) {
    var shift = 0, change = 0, children2 = v4.children, i = children2.length, w3;
    while (--i >= 0) {
      w3 = children2[i];
      w3.z += shift;
      w3.m += shift;
      shift += w3.s + (change += w3.c);
    }
  }
  function nextAncestor(vim, v4, ancestor) {
    return vim.a.parent === v4.parent ? vim.a : ancestor;
  }
  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null;
    this.a = this;
    this.z = 0;
    this.m = 0;
    this.c = 0;
    this.s = 0;
    this.t = null;
    this.i = i;
  }
  TreeNode.prototype = Object.create(Node.prototype);
  function treeRoot(root3) {
    var tree = new TreeNode(root3, 0), node, nodes = [tree], child, children2, i, n;
    while (node = nodes.pop()) {
      if (children2 = node._.children) {
        node.children = new Array(n = children2.length);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new TreeNode(children2[i], i));
          child.parent = node;
        }
      }
    }
    (tree.parent = new TreeNode(null, 0)).children = [tree];
    return tree;
  }
  function tree_default() {
    var separation = defaultSeparation2, dx = 1, dy = 1, nodeSize = null;
    function tree(root3) {
      var t = treeRoot(root3);
      t.eachAfter(firstWalk), t.parent.m = -t.z;
      t.eachBefore(secondWalk);
      if (nodeSize) root3.eachBefore(sizeNode);
      else {
        var left2 = root3, right2 = root3, bottom2 = root3;
        root3.eachBefore(function(node) {
          if (node.x < left2.x) left2 = node;
          if (node.x > right2.x) right2 = node;
          if (node.depth > bottom2.depth) bottom2 = node;
        });
        var s2 = left2 === right2 ? 1 : separation(left2, right2) / 2, tx = s2 - left2.x, kx2 = dx / (right2.x + s2 + tx), ky2 = dy / (bottom2.depth || 1);
        root3.eachBefore(function(node) {
          node.x = (node.x + tx) * kx2;
          node.y = node.depth * ky2;
        });
      }
      return root3;
    }
    function firstWalk(v4) {
      var children2 = v4.children, siblings = v4.parent.children, w3 = v4.i ? siblings[v4.i - 1] : null;
      if (children2) {
        executeShifts(v4);
        var midpoint = (children2[0].z + children2[children2.length - 1].z) / 2;
        if (w3) {
          v4.z = w3.z + separation(v4._, w3._);
          v4.m = v4.z - midpoint;
        } else {
          v4.z = midpoint;
        }
      } else if (w3) {
        v4.z = w3.z + separation(v4._, w3._);
      }
      v4.parent.A = apportion(v4, w3, v4.parent.A || siblings[0]);
    }
    function secondWalk(v4) {
      v4._.x = v4.z + v4.parent.m;
      v4.m += v4.parent.m;
    }
    function apportion(v4, w3, ancestor) {
      if (w3) {
        var vip = v4, vop = v4, vim = w3, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
          vom = nextLeft(vom);
          vop = nextRight(vop);
          vop.a = v4;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            moveSubtree(nextAncestor(vim, v4, ancestor), v4, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !nextRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !nextLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v4;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= dx;
      node.y = node.depth * dy;
    }
    tree.separation = function(x6) {
      return arguments.length ? (separation = x6, tree) : separation;
    };
    tree.size = function(x6) {
      return arguments.length ? (nodeSize = false, dx = +x6[0], dy = +x6[1], tree) : nodeSize ? null : [dx, dy];
    };
    tree.nodeSize = function(x6) {
      return arguments.length ? (nodeSize = true, dx = +x6[0], dy = +x6[1], tree) : nodeSize ? [dx, dy] : null;
    };
    return tree;
  }

  // node_modules/d3-hierarchy/src/treemap/slice.js
  function slice_default(parent, x06, y06, x12, y12) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k4 = parent.value && (y12 - y06) / parent.value;
    while (++i < n) {
      node = nodes[i], node.x0 = x06, node.x1 = x12;
      node.y0 = y06, node.y1 = y06 += node.value * k4;
    }
  }

  // node_modules/d3-hierarchy/src/treemap/squarify.js
  var phi = (1 + Math.sqrt(5)) / 2;
  function squarifyRatio(ratio, parent, x06, y06, x12, y12) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while (i0 < n) {
      dx = x12 - x06, dy = y12 - y06;
      do
        sumValue = nodes[i1++].value;
      while (!sumValue && i1 < n);
      minValue = maxValue = sumValue;
      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
      beta = sumValue * sumValue * alpha;
      minRatio = Math.max(maxValue / beta, beta / minValue);
      for (; i1 < n; ++i1) {
        sumValue += nodeValue = nodes[i1].value;
        if (nodeValue < minValue) minValue = nodeValue;
        if (nodeValue > maxValue) maxValue = nodeValue;
        beta = sumValue * sumValue * alpha;
        newRatio = Math.max(maxValue / beta, beta / minValue);
        if (newRatio > minRatio) {
          sumValue -= nodeValue;
          break;
        }
        minRatio = newRatio;
      }
      rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
      if (row.dice) dice_default(row, x06, y06, x12, value ? y06 += dy * sumValue / value : y12);
      else slice_default(row, x06, y06, value ? x06 += dx * sumValue / value : x12, y12);
      value -= sumValue, i0 = i1;
    }
    return rows;
  }
  var squarify_default = (function custom10(ratio) {
    function squarify(parent, x06, y06, x12, y12) {
      squarifyRatio(ratio, parent, x06, y06, x12, y12);
    }
    squarify.ratio = function(x6) {
      return custom10((x6 = +x6) > 1 ? x6 : 1);
    };
    return squarify;
  })(phi);

  // node_modules/d3-hierarchy/src/treemap/index.js
  function treemap_default() {
    var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
    function treemap(root3) {
      root3.x0 = root3.y0 = 0;
      root3.x1 = dx;
      root3.y1 = dy;
      root3.eachBefore(positionNode);
      paddingStack = [0];
      if (round) root3.eachBefore(round_default2);
      return root3;
    }
    function positionNode(node) {
      var p3 = paddingStack[node.depth], x06 = node.x0 + p3, y06 = node.y0 + p3, x12 = node.x1 - p3, y12 = node.y1 - p3;
      if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
      node.x0 = x06;
      node.y0 = y06;
      node.x1 = x12;
      node.y1 = y12;
      if (node.children) {
        p3 = paddingStack[node.depth + 1] = paddingInner(node) / 2;
        x06 += paddingLeft(node) - p3;
        y06 += paddingTop(node) - p3;
        x12 -= paddingRight(node) - p3;
        y12 -= paddingBottom(node) - p3;
        if (x12 < x06) x06 = x12 = (x06 + x12) / 2;
        if (y12 < y06) y06 = y12 = (y06 + y12) / 2;
        tile(node, x06, y06, x12, y12);
      }
    }
    treemap.round = function(x6) {
      return arguments.length ? (round = !!x6, treemap) : round;
    };
    treemap.size = function(x6) {
      return arguments.length ? (dx = +x6[0], dy = +x6[1], treemap) : [dx, dy];
    };
    treemap.tile = function(x6) {
      return arguments.length ? (tile = required(x6), treemap) : tile;
    };
    treemap.padding = function(x6) {
      return arguments.length ? treemap.paddingInner(x6).paddingOuter(x6) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x6) {
      return arguments.length ? (paddingInner = typeof x6 === "function" ? x6 : constant_default9(+x6), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x6) {
      return arguments.length ? treemap.paddingTop(x6).paddingRight(x6).paddingBottom(x6).paddingLeft(x6) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x6) {
      return arguments.length ? (paddingTop = typeof x6 === "function" ? x6 : constant_default9(+x6), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x6) {
      return arguments.length ? (paddingRight = typeof x6 === "function" ? x6 : constant_default9(+x6), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x6) {
      return arguments.length ? (paddingBottom = typeof x6 === "function" ? x6 : constant_default9(+x6), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x6) {
      return arguments.length ? (paddingLeft = typeof x6 === "function" ? x6 : constant_default9(+x6), treemap) : paddingLeft;
    };
    return treemap;
  }

  // node_modules/d3-hierarchy/src/treemap/binary.js
  function binary_default(parent, x06, y06, x12, y12) {
    var nodes = parent.children, i, n = nodes.length, sum4, sums = new Array(n + 1);
    for (sums[0] = sum4 = i = 0; i < n; ++i) {
      sums[i + 1] = sum4 += nodes[i].value;
    }
    partition(0, n, parent.value, x06, y06, x12, y12);
    function partition(i2, j3, value, x07, y07, x13, y13) {
      if (i2 >= j3 - 1) {
        var node = nodes[i2];
        node.x0 = x07, node.y0 = y07;
        node.x1 = x13, node.y1 = y13;
        return;
      }
      var valueOffset = sums[i2], valueTarget = value / 2 + valueOffset, k4 = i2 + 1, hi = j3 - 1;
      while (k4 < hi) {
        var mid = k4 + hi >>> 1;
        if (sums[mid] < valueTarget) k4 = mid + 1;
        else hi = mid;
      }
      if (valueTarget - sums[k4 - 1] < sums[k4] - valueTarget && i2 + 1 < k4) --k4;
      var valueLeft = sums[k4] - valueOffset, valueRight = value - valueLeft;
      if (x13 - x07 > y13 - y07) {
        var xk = value ? (x07 * valueRight + x13 * valueLeft) / value : x13;
        partition(i2, k4, valueLeft, x07, y07, xk, y13);
        partition(k4, j3, valueRight, xk, y07, x13, y13);
      } else {
        var yk = value ? (y07 * valueRight + y13 * valueLeft) / value : y13;
        partition(i2, k4, valueLeft, x07, y07, x13, yk);
        partition(k4, j3, valueRight, x07, yk, x13, y13);
      }
    }
  }

  // node_modules/d3-hierarchy/src/treemap/sliceDice.js
  function sliceDice_default(parent, x06, y06, x12, y12) {
    (parent.depth & 1 ? slice_default : dice_default)(parent, x06, y06, x12, y12);
  }

  // node_modules/d3-hierarchy/src/treemap/resquarify.js
  var resquarify_default = (function custom11(ratio) {
    function resquarify(parent, x06, y06, x12, y12) {
      if ((rows = parent._squarify) && rows.ratio === ratio) {
        var rows, row, nodes, i, j3 = -1, n, m4 = rows.length, value = parent.value;
        while (++j3 < m4) {
          row = rows[j3], nodes = row.children;
          for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
          if (row.dice) dice_default(row, x06, y06, x12, value ? y06 += (y12 - y06) * row.value / value : y12);
          else slice_default(row, x06, y06, value ? x06 += (x12 - x06) * row.value / value : x12, y12);
          value -= row.value;
        }
      } else {
        parent._squarify = rows = squarifyRatio(ratio, parent, x06, y06, x12, y12);
        rows.ratio = ratio;
      }
    }
    resquarify.ratio = function(x6) {
      return custom11((x6 = +x6) > 1 ? x6 : 1);
    };
    return resquarify;
  })(phi);

  // node_modules/d3-polygon/src/area.js
  function area_default4(polygon) {
    var i = -1, n = polygon.length, a4, b10 = polygon[n - 1], area = 0;
    while (++i < n) {
      a4 = b10;
      b10 = polygon[i];
      area += a4[1] * b10[0] - a4[0] * b10[1];
    }
    return area / 2;
  }

  // node_modules/d3-polygon/src/centroid.js
  function centroid_default3(polygon) {
    var i = -1, n = polygon.length, x6 = 0, y5 = 0, a4, b10 = polygon[n - 1], c6, k4 = 0;
    while (++i < n) {
      a4 = b10;
      b10 = polygon[i];
      k4 += c6 = a4[0] * b10[1] - b10[0] * a4[1];
      x6 += (a4[0] + b10[0]) * c6;
      y5 += (a4[1] + b10[1]) * c6;
    }
    return k4 *= 3, [x6 / k4, y5 / k4];
  }

  // node_modules/d3-polygon/src/cross.js
  function cross_default(a4, b10, c6) {
    return (b10[0] - a4[0]) * (c6[1] - a4[1]) - (b10[1] - a4[1]) * (c6[0] - a4[0]);
  }

  // node_modules/d3-polygon/src/hull.js
  function lexicographicOrder(a4, b10) {
    return a4[0] - b10[0] || a4[1] - b10[1];
  }
  function computeUpperHullIndexes(points) {
    const n = points.length, indexes2 = [0, 1];
    let size = 2, i;
    for (i = 2; i < n; ++i) {
      while (size > 1 && cross_default(points[indexes2[size - 2]], points[indexes2[size - 1]], points[i]) <= 0) --size;
      indexes2[size++] = i;
    }
    return indexes2.slice(0, size);
  }
  function hull_default(points) {
    if ((n = points.length) < 3) return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
    sortedPoints.sort(lexicographicOrder);
    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
    var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull;
  }

  // node_modules/d3-polygon/src/contains.js
  function contains_default3(polygon, point6) {
    var n = polygon.length, p3 = polygon[n - 1], x6 = point6[0], y5 = point6[1], x06 = p3[0], y06 = p3[1], x12, y12, inside = false;
    for (var i = 0; i < n; ++i) {
      p3 = polygon[i], x12 = p3[0], y12 = p3[1];
      if (y12 > y5 !== y06 > y5 && x6 < (x06 - x12) * (y5 - y12) / (y06 - y12) + x12) inside = !inside;
      x06 = x12, y06 = y12;
    }
    return inside;
  }

  // node_modules/d3-polygon/src/length.js
  function length_default2(polygon) {
    var i = -1, n = polygon.length, b10 = polygon[n - 1], xa, ya, xb = b10[0], yb = b10[1], perimeter = 0;
    while (++i < n) {
      xa = xb;
      ya = yb;
      b10 = polygon[i];
      xb = b10[0];
      yb = b10[1];
      xa -= xb;
      ya -= yb;
      perimeter += Math.hypot(xa, ya);
    }
    return perimeter;
  }

  // node_modules/d3-random/src/defaultSource.js
  var defaultSource_default = Math.random;

  // node_modules/d3-random/src/uniform.js
  var uniform_default = (function sourceRandomUniform(source) {
    function randomUniform(min4, max5) {
      min4 = min4 == null ? 0 : +min4;
      max5 = max5 == null ? 1 : +max5;
      if (arguments.length === 1) max5 = min4, min4 = 0;
      else max5 -= min4;
      return function() {
        return source() * max5 + min4;
      };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
  })(defaultSource_default);

  // node_modules/d3-random/src/int.js
  var int_default = (function sourceRandomInt(source) {
    function randomInt(min4, max5) {
      if (arguments.length < 2) max5 = min4, min4 = 0;
      min4 = Math.floor(min4);
      max5 = Math.floor(max5) - min4;
      return function() {
        return Math.floor(source() * max5 + min4);
      };
    }
    randomInt.source = sourceRandomInt;
    return randomInt;
  })(defaultSource_default);

  // node_modules/d3-random/src/normal.js
  var normal_default = (function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
      var x6, r;
      mu = mu == null ? 0 : +mu;
      sigma = sigma == null ? 1 : +sigma;
      return function() {
        var y5;
        if (x6 != null) y5 = x6, x6 = null;
        else do {
          x6 = source() * 2 - 1;
          y5 = source() * 2 - 1;
          r = x6 * x6 + y5 * y5;
        } while (!r || r > 1);
        return mu + sigma * y5 * Math.sqrt(-2 * Math.log(r) / r);
      };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
  })(defaultSource_default);

  // node_modules/d3-random/src/logNormal.js
  var logNormal_default = (function sourceRandomLogNormal(source) {
    var N3 = normal_default.source(source);
    function randomLogNormal() {
      var randomNormal = N3.apply(this, arguments);
      return function() {
        return Math.exp(randomNormal());
      };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
  })(defaultSource_default);

  // node_modules/d3-random/src/irwinHall.js
  var irwinHall_default = (function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
      if ((n = +n) <= 0) return () => 0;
      return function() {
        for (var sum4 = 0, i = n; i > 1; --i) sum4 += source();
        return sum4 + i * source();
      };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
  })(defaultSource_default);

  // node_modules/d3-random/src/bates.js
  var bates_default = (function sourceRandomBates(source) {
    var I2 = irwinHall_default.source(source);
    function randomBates(n) {
      if ((n = +n) === 0) return source;
      var randomIrwinHall = I2(n);
      return function() {
        return randomIrwinHall() / n;
      };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
  })(defaultSource_default);

  // node_modules/d3-random/src/exponential.js
  var exponential_default = (function sourceRandomExponential(source) {
    function randomExponential(lambda) {
      return function() {
        return -Math.log1p(-source()) / lambda;
      };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
  })(defaultSource_default);

  // node_modules/d3-random/src/pareto.js
  var pareto_default = (function sourceRandomPareto(source) {
    function randomPareto(alpha) {
      if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
      alpha = 1 / -alpha;
      return function() {
        return Math.pow(1 - source(), alpha);
      };
    }
    randomPareto.source = sourceRandomPareto;
    return randomPareto;
  })(defaultSource_default);

  // node_modules/d3-random/src/bernoulli.js
  var bernoulli_default = (function sourceRandomBernoulli(source) {
    function randomBernoulli(p3) {
      if ((p3 = +p3) < 0 || p3 > 1) throw new RangeError("invalid p");
      return function() {
        return Math.floor(source() + p3);
      };
    }
    randomBernoulli.source = sourceRandomBernoulli;
    return randomBernoulli;
  })(defaultSource_default);

  // node_modules/d3-random/src/geometric.js
  var geometric_default = (function sourceRandomGeometric(source) {
    function randomGeometric(p3) {
      if ((p3 = +p3) < 0 || p3 > 1) throw new RangeError("invalid p");
      if (p3 === 0) return () => Infinity;
      if (p3 === 1) return () => 1;
      p3 = Math.log1p(-p3);
      return function() {
        return 1 + Math.floor(Math.log1p(-source()) / p3);
      };
    }
    randomGeometric.source = sourceRandomGeometric;
    return randomGeometric;
  })(defaultSource_default);

  // node_modules/d3-random/src/gamma.js
  var gamma_default = (function sourceRandomGamma(source) {
    var randomNormal = normal_default.source(source)();
    function randomGamma(k4, theta) {
      if ((k4 = +k4) < 0) throw new RangeError("invalid k");
      if (k4 === 0) return () => 0;
      theta = theta == null ? 1 : +theta;
      if (k4 === 1) return () => -Math.log1p(-source()) * theta;
      var d = (k4 < 1 ? k4 + 1 : k4) - 1 / 3, c6 = 1 / (3 * Math.sqrt(d)), multiplier = k4 < 1 ? () => Math.pow(source(), 1 / k4) : () => 1;
      return function() {
        do {
          do {
            var x6 = randomNormal(), v4 = 1 + c6 * x6;
          } while (v4 <= 0);
          v4 *= v4 * v4;
          var u4 = 1 - source();
        } while (u4 >= 1 - 0.0331 * x6 * x6 * x6 * x6 && Math.log(u4) >= 0.5 * x6 * x6 + d * (1 - v4 + Math.log(v4)));
        return d * v4 * multiplier() * theta;
      };
    }
    randomGamma.source = sourceRandomGamma;
    return randomGamma;
  })(defaultSource_default);

  // node_modules/d3-random/src/beta.js
  var beta_default = (function sourceRandomBeta(source) {
    var G2 = gamma_default.source(source);
    function randomBeta(alpha, beta) {
      var X4 = G2(alpha), Y4 = G2(beta);
      return function() {
        var x6 = X4();
        return x6 === 0 ? 0 : x6 / (x6 + Y4());
      };
    }
    randomBeta.source = sourceRandomBeta;
    return randomBeta;
  })(defaultSource_default);

  // node_modules/d3-random/src/binomial.js
  var binomial_default = (function sourceRandomBinomial(source) {
    var G2 = geometric_default.source(source), B5 = beta_default.source(source);
    function randomBinomial(n, p3) {
      n = +n;
      if ((p3 = +p3) >= 1) return () => n;
      if (p3 <= 0) return () => 0;
      return function() {
        var acc = 0, nn2 = n, pp = p3;
        while (nn2 * pp > 16 && nn2 * (1 - pp) > 16) {
          var i = Math.floor((nn2 + 1) * pp), y5 = B5(i, nn2 - i + 1)();
          if (y5 <= pp) {
            acc += i;
            nn2 -= i;
            pp = (pp - y5) / (1 - y5);
          } else {
            nn2 = i - 1;
            pp /= y5;
          }
        }
        var sign3 = pp < 0.5, pFinal = sign3 ? pp : 1 - pp, g = G2(pFinal);
        for (var s2 = g(), k4 = 0; s2 <= nn2; ++k4) s2 += g();
        return acc + (sign3 ? k4 : nn2 - k4);
      };
    }
    randomBinomial.source = sourceRandomBinomial;
    return randomBinomial;
  })(defaultSource_default);

  // node_modules/d3-random/src/weibull.js
  var weibull_default = (function sourceRandomWeibull(source) {
    function randomWeibull(k4, a4, b10) {
      var outerFunc;
      if ((k4 = +k4) === 0) {
        outerFunc = (x6) => -Math.log(x6);
      } else {
        k4 = 1 / k4;
        outerFunc = (x6) => Math.pow(x6, k4);
      }
      a4 = a4 == null ? 0 : +a4;
      b10 = b10 == null ? 1 : +b10;
      return function() {
        return a4 + b10 * outerFunc(-Math.log1p(-source()));
      };
    }
    randomWeibull.source = sourceRandomWeibull;
    return randomWeibull;
  })(defaultSource_default);

  // node_modules/d3-random/src/cauchy.js
  var cauchy_default = (function sourceRandomCauchy(source) {
    function randomCauchy(a4, b10) {
      a4 = a4 == null ? 0 : +a4;
      b10 = b10 == null ? 1 : +b10;
      return function() {
        return a4 + b10 * Math.tan(Math.PI * source());
      };
    }
    randomCauchy.source = sourceRandomCauchy;
    return randomCauchy;
  })(defaultSource_default);

  // node_modules/d3-random/src/logistic.js
  var logistic_default = (function sourceRandomLogistic(source) {
    function randomLogistic(a4, b10) {
      a4 = a4 == null ? 0 : +a4;
      b10 = b10 == null ? 1 : +b10;
      return function() {
        var u4 = source();
        return a4 + b10 * Math.log(u4 / (1 - u4));
      };
    }
    randomLogistic.source = sourceRandomLogistic;
    return randomLogistic;
  })(defaultSource_default);

  // node_modules/d3-random/src/poisson.js
  var poisson_default = (function sourceRandomPoisson(source) {
    var G2 = gamma_default.source(source), B5 = binomial_default.source(source);
    function randomPoisson(lambda) {
      return function() {
        var acc = 0, l2 = lambda;
        while (l2 > 16) {
          var n = Math.floor(0.875 * l2), t = G2(n)();
          if (t > l2) return acc + B5(n - 1, l2 / t)();
          acc += n;
          l2 -= t;
        }
        for (var s2 = -Math.log1p(-source()), k4 = 0; s2 <= l2; ++k4) s2 -= Math.log1p(-source());
        return acc + k4;
      };
    }
    randomPoisson.source = sourceRandomPoisson;
    return randomPoisson;
  })(defaultSource_default);

  // node_modules/d3-random/src/lcg.js
  var mul = 1664525;
  var inc = 1013904223;
  var eps = 1 / 4294967296;
  function lcg(seed = Math.random()) {
    let state = (0 <= seed && seed < 1 ? seed / eps : Math.abs(seed)) | 0;
    return () => (state = mul * state + inc | 0, eps * (state >>> 0));
  }

  // node_modules/d3-scale/src/init.js
  function initRange(domain, range5) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range5).domain(domain);
        break;
    }
    return this;
  }
  function initInterpolator(domain, interpolator) {
    switch (arguments.length) {
      case 0:
        break;
      case 1: {
        if (typeof domain === "function") this.interpolator(domain);
        else this.range(domain);
        break;
      }
      default: {
        this.domain(domain);
        if (typeof interpolator === "function") this.interpolator(interpolator);
        else this.range(interpolator);
        break;
      }
    }
    return this;
  }

  // node_modules/d3-scale/src/ordinal.js
  var implicit = /* @__PURE__ */ Symbol("implicit");
  function ordinal() {
    var index3 = new InternMap(), domain = [], range5 = [], unknown = implicit;
    function scale2(d) {
      let i = index3.get(d);
      if (i === void 0) {
        if (unknown !== implicit) return unknown;
        index3.set(d, i = domain.push(d) - 1);
      }
      return range5[i % range5.length];
    }
    scale2.domain = function(_3) {
      if (!arguments.length) return domain.slice();
      domain = [], index3 = new InternMap();
      for (const value of _3) {
        if (index3.has(value)) continue;
        index3.set(value, domain.push(value) - 1);
      }
      return scale2;
    };
    scale2.range = function(_3) {
      return arguments.length ? (range5 = Array.from(_3), scale2) : range5.slice();
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    scale2.copy = function() {
      return ordinal(domain, range5).unknown(unknown);
    };
    initRange.apply(scale2, arguments);
    return scale2;
  }

  // node_modules/d3-scale/src/band.js
  function band() {
    var scale2 = ordinal().unknown(void 0), domain = scale2.domain, ordinalRange = scale2.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale2.unknown;
    function rescale() {
      var n = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop = reverse2 ? r0 : r1;
      step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
      if (round) step = Math.floor(step);
      start2 += (stop - start2 - step * (n - paddingInner)) * align;
      bandwidth = step * (1 - paddingInner);
      if (round) start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
      var values = range2(n).map(function(i) {
        return start2 + step * i;
      });
      return ordinalRange(reverse2 ? values.reverse() : values);
    }
    scale2.domain = function(_3) {
      return arguments.length ? (domain(_3), rescale()) : domain();
    };
    scale2.range = function(_3) {
      return arguments.length ? ([r0, r1] = _3, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
    };
    scale2.rangeRound = function(_3) {
      return [r0, r1] = _3, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale2.bandwidth = function() {
      return bandwidth;
    };
    scale2.step = function() {
      return step;
    };
    scale2.round = function(_3) {
      return arguments.length ? (round = !!_3, rescale()) : round;
    };
    scale2.padding = function(_3) {
      return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_3), rescale()) : paddingInner;
    };
    scale2.paddingInner = function(_3) {
      return arguments.length ? (paddingInner = Math.min(1, _3), rescale()) : paddingInner;
    };
    scale2.paddingOuter = function(_3) {
      return arguments.length ? (paddingOuter = +_3, rescale()) : paddingOuter;
    };
    scale2.align = function(_3) {
      return arguments.length ? (align = Math.max(0, Math.min(1, _3)), rescale()) : align;
    };
    scale2.copy = function() {
      return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return initRange.apply(rescale(), arguments);
  }
  function pointish(scale2) {
    var copy3 = scale2.copy;
    scale2.padding = scale2.paddingOuter;
    delete scale2.paddingInner;
    delete scale2.paddingOuter;
    scale2.copy = function() {
      return pointish(copy3());
    };
    return scale2;
  }
  function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
  }

  // node_modules/d3-scale/src/constant.js
  function constants(x6) {
    return function() {
      return x6;
    };
  }

  // node_modules/d3-scale/src/number.js
  function number3(x6) {
    return +x6;
  }

  // node_modules/d3-scale/src/continuous.js
  var unit = [0, 1];
  function identity3(x6) {
    return x6;
  }
  function normalize2(a4, b10) {
    return (b10 -= a4 = +a4) ? function(x6) {
      return (x6 - a4) / b10;
    } : constants(isNaN(b10) ? NaN : 0.5);
  }
  function clamper(a4, b10) {
    var t;
    if (a4 > b10) t = a4, a4 = b10, b10 = t;
    return function(x6) {
      return Math.max(a4, Math.min(b10, x6));
    };
  }
  function bimap(domain, range5, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range5[0], r1 = range5[1];
    if (d1 < d0) d0 = normalize2(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize2(d0, d1), r0 = interpolate(r0, r1);
    return function(x6) {
      return r0(d0(x6));
    };
  }
  function polymap(domain, range5, interpolate) {
    var j3 = Math.min(domain.length, range5.length) - 1, d = new Array(j3), r = new Array(j3), i = -1;
    if (domain[j3] < domain[0]) {
      domain = domain.slice().reverse();
      range5 = range5.slice().reverse();
    }
    while (++i < j3) {
      d[i] = normalize2(domain[i], domain[i + 1]);
      r[i] = interpolate(range5[i], range5[i + 1]);
    }
    return function(x6) {
      var i2 = bisect_default(domain, x6, 1, j3) - 1;
      return r[i2](d[i2](x6));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer2() {
    var domain = unit, range5 = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity3, piecewise2, output, input;
    function rescale() {
      var n = Math.min(domain.length, range5.length);
      if (clamp !== identity3) clamp = clamper(domain[0], domain[n - 1]);
      piecewise2 = n > 2 ? polymap : bimap;
      output = input = null;
      return scale2;
    }
    function scale2(x6) {
      return x6 == null || isNaN(x6 = +x6) ? unknown : (output || (output = piecewise2(domain.map(transform2), range5, interpolate)))(transform2(clamp(x6)));
    }
    scale2.invert = function(y5) {
      return clamp(untransform((input || (input = piecewise2(range5, domain.map(transform2), number_default)))(y5)));
    };
    scale2.domain = function(_3) {
      return arguments.length ? (domain = Array.from(_3, number3), rescale()) : domain.slice();
    };
    scale2.range = function(_3) {
      return arguments.length ? (range5 = Array.from(_3), rescale()) : range5.slice();
    };
    scale2.rangeRound = function(_3) {
      return range5 = Array.from(_3), interpolate = round_default, rescale();
    };
    scale2.clamp = function(_3) {
      return arguments.length ? (clamp = _3 ? true : identity3, rescale()) : clamp !== identity3;
    };
    scale2.interpolate = function(_3) {
      return arguments.length ? (interpolate = _3, rescale()) : interpolate;
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    return function(t, u4) {
      transform2 = t, untransform = u4;
      return rescale();
    };
  }
  function continuous() {
    return transformer2()(identity3, identity3);
  }

  // node_modules/d3-scale/src/tickFormat.js
  function tickFormat(start2, stop, count3, specifier) {
    var step = tickStep(start2, stop, count3), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  // node_modules/d3-scale/src/linear.js
  function linearish(scale2) {
    var domain = scale2.domain;
    scale2.ticks = function(count3) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count3 == null ? 10 : count3);
    };
    scale2.tickFormat = function(count3, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count3 == null ? 10 : count3, specifier);
    };
    scale2.nice = function(count3) {
      if (count3 == null) count3 = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start2 = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start2) {
        step = start2, start2 = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start2, stop, count3);
        if (step === prestep) {
          d[i0] = start2;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start2 = Math.floor(start2 / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start2 = Math.ceil(start2 * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale2;
    };
    return scale2;
  }
  function linear3() {
    var scale2 = continuous();
    scale2.copy = function() {
      return copy(scale2, linear3());
    };
    initRange.apply(scale2, arguments);
    return linearish(scale2);
  }

  // node_modules/d3-scale/src/identity.js
  function identity4(domain) {
    var unknown;
    function scale2(x6) {
      return x6 == null || isNaN(x6 = +x6) ? unknown : x6;
    }
    scale2.invert = scale2;
    scale2.domain = scale2.range = function(_3) {
      return arguments.length ? (domain = Array.from(_3, number3), scale2) : domain.slice();
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    scale2.copy = function() {
      return identity4(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, number3) : [0, 1];
    return linearish(scale2);
  }

  // node_modules/d3-scale/src/nice.js
  function nice2(domain, interval2) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x06 = domain[i0], x12 = domain[i1], t;
    if (x12 < x06) {
      t = i0, i0 = i1, i1 = t;
      t = x06, x06 = x12, x12 = t;
    }
    domain[i0] = interval2.floor(x06);
    domain[i1] = interval2.ceil(x12);
    return domain;
  }

  // node_modules/d3-scale/src/log.js
  function transformLog(x6) {
    return Math.log(x6);
  }
  function transformExp(x6) {
    return Math.exp(x6);
  }
  function transformLogn(x6) {
    return -Math.log(-x6);
  }
  function transformExpn(x6) {
    return -Math.exp(-x6);
  }
  function pow10(x6) {
    return isFinite(x6) ? +("1e" + x6) : x6 < 0 ? 0 : x6;
  }
  function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x6) => Math.pow(base, x6);
  }
  function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x6) => Math.log(x6) / base);
  }
  function reflect(f) {
    return (x6, k4) => -f(-x6, k4);
  }
  function loggish(transform2) {
    const scale2 = transform2(transformLog, transformExp);
    const domain = scale2.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
      logs = logp(base), pows = powp(base);
      if (domain()[0] < 0) {
        logs = reflect(logs), pows = reflect(pows);
        transform2(transformLogn, transformExpn);
      } else {
        transform2(transformLog, transformExp);
      }
      return scale2;
    }
    scale2.base = function(_3) {
      return arguments.length ? (base = +_3, rescale()) : base;
    };
    scale2.domain = function(_3) {
      return arguments.length ? (domain(_3), rescale()) : domain();
    };
    scale2.ticks = (count3) => {
      const d = domain();
      let u4 = d[0];
      let v4 = d[d.length - 1];
      const r = v4 < u4;
      if (r) [u4, v4] = [v4, u4];
      let i = logs(u4);
      let j3 = logs(v4);
      let k4;
      let t;
      const n = count3 == null ? 10 : +count3;
      let z3 = [];
      if (!(base % 1) && j3 - i < n) {
        i = Math.floor(i), j3 = Math.ceil(j3);
        if (u4 > 0) for (; i <= j3; ++i) {
          for (k4 = 1; k4 < base; ++k4) {
            t = i < 0 ? k4 / pows(-i) : k4 * pows(i);
            if (t < u4) continue;
            if (t > v4) break;
            z3.push(t);
          }
        }
        else for (; i <= j3; ++i) {
          for (k4 = base - 1; k4 >= 1; --k4) {
            t = i > 0 ? k4 / pows(-i) : k4 * pows(i);
            if (t < u4) continue;
            if (t > v4) break;
            z3.push(t);
          }
        }
        if (z3.length * 2 < n) z3 = ticks(u4, v4, n);
      } else {
        z3 = ticks(i, j3, Math.min(j3 - i, n)).map(pows);
      }
      return r ? z3.reverse() : z3;
    };
    scale2.tickFormat = (count3, specifier) => {
      if (count3 == null) count3 = 10;
      if (specifier == null) specifier = base === 10 ? "s" : ",";
      if (typeof specifier !== "function") {
        if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
        specifier = format(specifier);
      }
      if (count3 === Infinity) return specifier;
      const k4 = Math.max(1, base * count3 / scale2.ticks().length);
      return (d) => {
        let i = d / pows(Math.round(logs(d)));
        if (i * base < base - 0.5) i *= base;
        return i <= k4 ? specifier(d) : "";
      };
    };
    scale2.nice = () => {
      return domain(nice2(domain(), {
        floor: (x6) => pows(Math.floor(logs(x6))),
        ceil: (x6) => pows(Math.ceil(logs(x6)))
      }));
    };
    return scale2;
  }
  function log2() {
    const scale2 = loggish(transformer2()).domain([1, 10]);
    scale2.copy = () => copy(scale2, log2()).base(scale2.base());
    initRange.apply(scale2, arguments);
    return scale2;
  }

  // node_modules/d3-scale/src/symlog.js
  function transformSymlog(c6) {
    return function(x6) {
      return Math.sign(x6) * Math.log1p(Math.abs(x6 / c6));
    };
  }
  function transformSymexp(c6) {
    return function(x6) {
      return Math.sign(x6) * Math.expm1(Math.abs(x6)) * c6;
    };
  }
  function symlogish(transform2) {
    var c6 = 1, scale2 = transform2(transformSymlog(c6), transformSymexp(c6));
    scale2.constant = function(_3) {
      return arguments.length ? transform2(transformSymlog(c6 = +_3), transformSymexp(c6)) : c6;
    };
    return linearish(scale2);
  }
  function symlog() {
    var scale2 = symlogish(transformer2());
    scale2.copy = function() {
      return copy(scale2, symlog()).constant(scale2.constant());
    };
    return initRange.apply(scale2, arguments);
  }

  // node_modules/d3-scale/src/pow.js
  function transformPow(exponent2) {
    return function(x6) {
      return x6 < 0 ? -Math.pow(-x6, exponent2) : Math.pow(x6, exponent2);
    };
  }
  function transformSqrt(x6) {
    return x6 < 0 ? -Math.sqrt(-x6) : Math.sqrt(x6);
  }
  function transformSquare(x6) {
    return x6 < 0 ? -x6 * x6 : x6 * x6;
  }
  function powish(transform2) {
    var scale2 = transform2(identity3, identity3), exponent2 = 1;
    function rescale() {
      return exponent2 === 1 ? transform2(identity3, identity3) : exponent2 === 0.5 ? transform2(transformSqrt, transformSquare) : transform2(transformPow(exponent2), transformPow(1 / exponent2));
    }
    scale2.exponent = function(_3) {
      return arguments.length ? (exponent2 = +_3, rescale()) : exponent2;
    };
    return linearish(scale2);
  }
  function pow3() {
    var scale2 = powish(transformer2());
    scale2.copy = function() {
      return copy(scale2, pow3()).exponent(scale2.exponent());
    };
    initRange.apply(scale2, arguments);
    return scale2;
  }
  function sqrt2() {
    return pow3.apply(null, arguments).exponent(0.5);
  }

  // node_modules/d3-scale/src/radial.js
  function square(x6) {
    return Math.sign(x6) * x6 * x6;
  }
  function unsquare(x6) {
    return Math.sign(x6) * Math.sqrt(Math.abs(x6));
  }
  function radial() {
    var squared = continuous(), range5 = [0, 1], round = false, unknown;
    function scale2(x6) {
      var y5 = unsquare(squared(x6));
      return isNaN(y5) ? unknown : round ? Math.round(y5) : y5;
    }
    scale2.invert = function(y5) {
      return squared.invert(square(y5));
    };
    scale2.domain = function(_3) {
      return arguments.length ? (squared.domain(_3), scale2) : squared.domain();
    };
    scale2.range = function(_3) {
      return arguments.length ? (squared.range((range5 = Array.from(_3, number3)).map(square)), scale2) : range5.slice();
    };
    scale2.rangeRound = function(_3) {
      return scale2.range(_3).round(true);
    };
    scale2.round = function(_3) {
      return arguments.length ? (round = !!_3, scale2) : round;
    };
    scale2.clamp = function(_3) {
      return arguments.length ? (squared.clamp(_3), scale2) : squared.clamp();
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    scale2.copy = function() {
      return radial(squared.domain(), range5).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    initRange.apply(scale2, arguments);
    return linearish(scale2);
  }

  // node_modules/d3-scale/src/quantile.js
  function quantile2() {
    var domain = [], range5 = [], thresholds = [], unknown;
    function rescale() {
      var i = 0, n = Math.max(1, range5.length);
      thresholds = new Array(n - 1);
      while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
      return scale2;
    }
    function scale2(x6) {
      return x6 == null || isNaN(x6 = +x6) ? unknown : range5[bisect_default(thresholds, x6)];
    }
    scale2.invertExtent = function(y5) {
      var i = range5.indexOf(y5);
      return i < 0 ? [NaN, NaN] : [
        i > 0 ? thresholds[i - 1] : domain[0],
        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
      ];
    };
    scale2.domain = function(_3) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _3) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(ascending);
      return rescale();
    };
    scale2.range = function(_3) {
      return arguments.length ? (range5 = Array.from(_3), rescale()) : range5.slice();
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    scale2.quantiles = function() {
      return thresholds.slice();
    };
    scale2.copy = function() {
      return quantile2().domain(domain).range(range5).unknown(unknown);
    };
    return initRange.apply(scale2, arguments);
  }

  // node_modules/d3-scale/src/quantize.js
  function quantize() {
    var x06 = 0, x12 = 1, n = 1, domain = [0.5], range5 = [0, 1], unknown;
    function scale2(x6) {
      return x6 != null && x6 <= x6 ? range5[bisect_default(domain, x6, 0, n)] : unknown;
    }
    function rescale() {
      var i = -1;
      domain = new Array(n);
      while (++i < n) domain[i] = ((i + 1) * x12 - (i - n) * x06) / (n + 1);
      return scale2;
    }
    scale2.domain = function(_3) {
      return arguments.length ? ([x06, x12] = _3, x06 = +x06, x12 = +x12, rescale()) : [x06, x12];
    };
    scale2.range = function(_3) {
      return arguments.length ? (n = (range5 = Array.from(_3)).length - 1, rescale()) : range5.slice();
    };
    scale2.invertExtent = function(y5) {
      var i = range5.indexOf(y5);
      return i < 0 ? [NaN, NaN] : i < 1 ? [x06, domain[0]] : i >= n ? [domain[n - 1], x12] : [domain[i - 1], domain[i]];
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : scale2;
    };
    scale2.thresholds = function() {
      return domain.slice();
    };
    scale2.copy = function() {
      return quantize().domain([x06, x12]).range(range5).unknown(unknown);
    };
    return initRange.apply(linearish(scale2), arguments);
  }

  // node_modules/d3-scale/src/threshold.js
  function threshold() {
    var domain = [0.5], range5 = [0, 1], unknown, n = 1;
    function scale2(x6) {
      return x6 != null && x6 <= x6 ? range5[bisect_default(domain, x6, 0, n)] : unknown;
    }
    scale2.domain = function(_3) {
      return arguments.length ? (domain = Array.from(_3), n = Math.min(domain.length, range5.length - 1), scale2) : domain.slice();
    };
    scale2.range = function(_3) {
      return arguments.length ? (range5 = Array.from(_3), n = Math.min(domain.length, range5.length - 1), scale2) : range5.slice();
    };
    scale2.invertExtent = function(y5) {
      var i = range5.indexOf(y5);
      return [domain[i - 1], domain[i]];
    };
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    scale2.copy = function() {
      return threshold().domain(domain).range(range5).unknown(unknown);
    };
    return initRange.apply(scale2, arguments);
  }

  // node_modules/d3-time/src/interval.js
  var t02 = /* @__PURE__ */ new Date();
  var t12 = /* @__PURE__ */ new Date();
  function timeInterval(floori, offseti, count3, field) {
    function interval2(date2) {
      return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
    }
    interval2.floor = (date2) => {
      return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
    };
    interval2.ceil = (date2) => {
      return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
    };
    interval2.round = (date2) => {
      const d0 = interval2(date2), d1 = interval2.ceil(date2);
      return date2 - d0 < d1 - date2 ? d0 : d1;
    };
    interval2.offset = (date2, step) => {
      return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
    };
    interval2.range = (start2, stop, step) => {
      const range5 = [];
      start2 = interval2.ceil(start2);
      step = step == null ? 1 : Math.floor(step);
      if (!(start2 < stop) || !(step > 0)) return range5;
      let previous;
      do
        range5.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
      while (previous < start2 && start2 < stop);
      return range5;
    };
    interval2.filter = (test) => {
      return timeInterval((date2) => {
        if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
      }, (date2, step) => {
        if (date2 >= date2) {
          if (step < 0) while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
          else while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
        }
      });
    };
    if (count3) {
      interval2.count = (start2, end) => {
        t02.setTime(+start2), t12.setTime(+end);
        floori(t02), floori(t12);
        return Math.floor(count3(t02, t12));
      };
      interval2.every = (step) => {
        step = Math.floor(step);
        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? (d) => field(d) % step === 0 : (d) => interval2.count(0, d) % step === 0);
      };
    }
    return interval2;
  }

  // node_modules/d3-time/src/millisecond.js
  var millisecond = timeInterval(() => {
  }, (date2, step) => {
    date2.setTime(+date2 + step);
  }, (start2, end) => {
    return end - start2;
  });
  millisecond.every = (k4) => {
    k4 = Math.floor(k4);
    if (!isFinite(k4) || !(k4 > 0)) return null;
    if (!(k4 > 1)) return millisecond;
    return timeInterval((date2) => {
      date2.setTime(Math.floor(date2 / k4) * k4);
    }, (date2, step) => {
      date2.setTime(+date2 + step * k4);
    }, (start2, end) => {
      return (end - start2) / k4;
    });
  };
  var milliseconds = millisecond.range;

  // node_modules/d3-time/src/duration.js
  var durationSecond = 1e3;
  var durationMinute = durationSecond * 60;
  var durationHour = durationMinute * 60;
  var durationDay = durationHour * 24;
  var durationWeek = durationDay * 7;
  var durationMonth = durationDay * 30;
  var durationYear = durationDay * 365;

  // node_modules/d3-time/src/second.js
  var second = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds());
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationSecond);
  }, (start2, end) => {
    return (end - start2) / durationSecond;
  }, (date2) => {
    return date2.getUTCSeconds();
  });
  var seconds = second.range;

  // node_modules/d3-time/src/minute.js
  var timeMinute = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationMinute);
  }, (start2, end) => {
    return (end - start2) / durationMinute;
  }, (date2) => {
    return date2.getMinutes();
  });
  var timeMinutes = timeMinute.range;
  var utcMinute = timeInterval((date2) => {
    date2.setUTCSeconds(0, 0);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationMinute);
  }, (start2, end) => {
    return (end - start2) / durationMinute;
  }, (date2) => {
    return date2.getUTCMinutes();
  });
  var utcMinutes = utcMinute.range;

  // node_modules/d3-time/src/hour.js
  var timeHour = timeInterval((date2) => {
    date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationHour);
  }, (start2, end) => {
    return (end - start2) / durationHour;
  }, (date2) => {
    return date2.getHours();
  });
  var timeHours = timeHour.range;
  var utcHour = timeInterval((date2) => {
    date2.setUTCMinutes(0, 0, 0);
  }, (date2, step) => {
    date2.setTime(+date2 + step * durationHour);
  }, (start2, end) => {
    return (end - start2) / durationHour;
  }, (date2) => {
    return date2.getUTCHours();
  });
  var utcHours = utcHour.range;

  // node_modules/d3-time/src/day.js
  var timeDay = timeInterval(
    (date2) => date2.setHours(0, 0, 0, 0),
    (date2, step) => date2.setDate(date2.getDate() + step),
    (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
    (date2) => date2.getDate() - 1
  );
  var timeDays = timeDay.range;
  var utcDay = timeInterval((date2) => {
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step);
  }, (start2, end) => {
    return (end - start2) / durationDay;
  }, (date2) => {
    return date2.getUTCDate() - 1;
  });
  var utcDays = utcDay.range;
  var unixDay = timeInterval((date2) => {
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step);
  }, (start2, end) => {
    return (end - start2) / durationDay;
  }, (date2) => {
    return Math.floor(date2 / durationDay);
  });
  var unixDays = unixDay.range;

  // node_modules/d3-time/src/week.js
  function timeWeekday(i) {
    return timeInterval((date2) => {
      date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setDate(date2.getDate() + step * 7);
    }, (start2, end) => {
      return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
  }
  var timeSunday = timeWeekday(0);
  var timeMonday = timeWeekday(1);
  var timeTuesday = timeWeekday(2);
  var timeWednesday = timeWeekday(3);
  var timeThursday = timeWeekday(4);
  var timeFriday = timeWeekday(5);
  var timeSaturday = timeWeekday(6);
  var timeSundays = timeSunday.range;
  var timeMondays = timeMonday.range;
  var timeTuesdays = timeTuesday.range;
  var timeWednesdays = timeWednesday.range;
  var timeThursdays = timeThursday.range;
  var timeFridays = timeFriday.range;
  var timeSaturdays = timeSaturday.range;
  function utcWeekday(i) {
    return timeInterval((date2) => {
      date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCDate(date2.getUTCDate() + step * 7);
    }, (start2, end) => {
      return (end - start2) / durationWeek;
    });
  }
  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);
  var utcSundays = utcSunday.range;
  var utcMondays = utcMonday.range;
  var utcTuesdays = utcTuesday.range;
  var utcWednesdays = utcWednesday.range;
  var utcThursdays = utcThursday.range;
  var utcFridays = utcFriday.range;
  var utcSaturdays = utcSaturday.range;

  // node_modules/d3-time/src/month.js
  var timeMonth = timeInterval((date2) => {
    date2.setDate(1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setMonth(date2.getMonth() + step);
  }, (start2, end) => {
    return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
  }, (date2) => {
    return date2.getMonth();
  });
  var timeMonths = timeMonth.range;
  var utcMonth = timeInterval((date2) => {
    date2.setUTCDate(1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCMonth(date2.getUTCMonth() + step);
  }, (start2, end) => {
    return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
  }, (date2) => {
    return date2.getUTCMonth();
  });
  var utcMonths = utcMonth.range;

  // node_modules/d3-time/src/year.js
  var timeYear = timeInterval((date2) => {
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step);
  }, (start2, end) => {
    return end.getFullYear() - start2.getFullYear();
  }, (date2) => {
    return date2.getFullYear();
  });
  timeYear.every = (k4) => {
    return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : timeInterval((date2) => {
      date2.setFullYear(Math.floor(date2.getFullYear() / k4) * k4);
      date2.setMonth(0, 1);
      date2.setHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setFullYear(date2.getFullYear() + step * k4);
    });
  };
  var timeYears = timeYear.range;
  var utcYear = timeInterval((date2) => {
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step);
  }, (start2, end) => {
    return end.getUTCFullYear() - start2.getUTCFullYear();
  }, (date2) => {
    return date2.getUTCFullYear();
  });
  utcYear.every = (k4) => {
    return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : timeInterval((date2) => {
      date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k4) * k4);
      date2.setUTCMonth(0, 1);
      date2.setUTCHours(0, 0, 0, 0);
    }, (date2, step) => {
      date2.setUTCFullYear(date2.getUTCFullYear() + step * k4);
    });
  };
  var utcYears = utcYear.range;

  // node_modules/d3-time/src/ticks.js
  function ticker(year, month, week, day, hour, minute) {
    const tickIntervals = [
      [second, 1, durationSecond],
      [second, 5, 5 * durationSecond],
      [second, 15, 15 * durationSecond],
      [second, 30, 30 * durationSecond],
      [minute, 1, durationMinute],
      [minute, 5, 5 * durationMinute],
      [minute, 15, 15 * durationMinute],
      [minute, 30, 30 * durationMinute],
      [hour, 1, durationHour],
      [hour, 3, 3 * durationHour],
      [hour, 6, 6 * durationHour],
      [hour, 12, 12 * durationHour],
      [day, 1, durationDay],
      [day, 2, 2 * durationDay],
      [week, 1, durationWeek],
      [month, 1, durationMonth],
      [month, 3, 3 * durationMonth],
      [year, 1, durationYear]
    ];
    function ticks2(start2, stop, count3) {
      const reverse2 = stop < start2;
      if (reverse2) [start2, stop] = [stop, start2];
      const interval2 = count3 && typeof count3.range === "function" ? count3 : tickInterval(start2, stop, count3);
      const ticks3 = interval2 ? interval2.range(start2, +stop + 1) : [];
      return reverse2 ? ticks3.reverse() : ticks3;
    }
    function tickInterval(start2, stop, count3) {
      const target = Math.abs(stop - start2) / count3;
      const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
      if (i === tickIntervals.length) return year.every(tickStep(start2 / durationYear, stop / durationYear, count3));
      if (i === 0) return millisecond.every(Math.max(tickStep(start2, stop, count3), 1));
      const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
      return t.every(step);
    }
    return [ticks2, tickInterval];
  }
  var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
  var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

  // node_modules/d3-time-format/src/locale.js
  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date2.setFullYear(d.y);
      return date2;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date2.setUTCFullYear(d.y);
      return date2;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newDate(y5, m4, d) {
    return { y: y5, m: m4, d, H: 0, M: 0, S: 0, L: 0 };
  }
  function formatLocale(locale3) {
    var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "f": formatMicroseconds,
      "g": formatYearISO,
      "G": formatFullYearISO,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "q": formatQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatSeconds,
      "u": formatWeekdayNumberMonday,
      "U": formatWeekNumberSunday,
      "V": formatWeekNumberISO,
      "w": formatWeekdayNumberSunday,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear2,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "f": formatUTCMicroseconds,
      "g": formatUTCYearISO,
      "G": formatUTCFullYearISO,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "q": formatUTCQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatUTCSeconds,
      "u": formatUTCWeekdayNumberMonday,
      "U": formatUTCWeekNumberSunday,
      "V": formatUTCWeekNumberISO,
      "w": formatUTCWeekdayNumberSunday,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "f": parseMicroseconds,
      "g": parseYear,
      "G": parseFullYear,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "q": parseQuarter,
      "Q": parseUnixTimestamp,
      "s": parseUnixTimestampSeconds,
      "S": parseSeconds,
      "u": parseWeekdayNumberMonday,
      "U": parseWeekNumberSunday,
      "V": parseWeekNumberISO,
      "w": parseWeekdayNumberSunday,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats2) {
      return function(date2) {
        var string = [], i = -1, j3 = 0, n = specifier.length, c6, pad3, format2;
        if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j3, i));
            if ((pad3 = pads[c6 = specifier.charAt(++i)]) != null) c6 = specifier.charAt(++i);
            else pad3 = c6 === "e" ? " " : "0";
            if (format2 = formats2[c6]) c6 = format2(date2, pad3);
            string.push(c6);
            j3 = i + 1;
          }
        }
        string.push(specifier.slice(j3, i));
        return string.join("");
      };
    }
    function newParse(specifier, Z3) {
      return function(string) {
        var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
        if (i != string.length) return null;
        if ("Q" in d) return new Date(d.Q);
        if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
        if (Z3 && !("Z" in d)) d.Z = 0;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        if (d.m === void 0) d.m = "q" in d ? d.q : 0;
        if ("V" in d) {
          if (d.V < 1 || d.V > 53) return null;
          if (!("w" in d)) d.w = 1;
          if ("Z" in d) {
            week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
            week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
            week = utcDay.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
            week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
            week = timeDay.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
          day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
          d.m = 0;
          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
        }
        if ("Z" in d) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }
        return localDate(d);
      };
    }
    function parseSpecifier(d, specifier, string, j3) {
      var i = 0, n = specifier.length, m4 = string.length, c6, parse;
      while (i < n) {
        if (j3 >= m4) return -1;
        c6 = specifier.charCodeAt(i++);
        if (c6 === 37) {
          c6 = specifier.charAt(i++);
          parse = parses[c6 in pads ? specifier.charAt(i++) : c6];
          if (!parse || (j3 = parse(d, string, j3)) < 0) return -1;
        } else if (c6 != string.charCodeAt(j3++)) {
          return -1;
        }
      }
      return j3;
    }
    function parsePeriod(d, string, i) {
      var n = periodRe.exec(string.slice(i));
      return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
      return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
      return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
      format: function(specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      parse: function(specifier) {
        var p3 = newParse(specifier += "", false);
        p3.toString = function() {
          return specifier;
        };
        return p3;
      },
      utcFormat: function(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      utcParse: function(specifier) {
        var p3 = newParse(specifier += "", true);
        p3.toString = function() {
          return specifier;
        };
        return p3;
      }
    };
  }
  var pads = { "-": "", "_": " ", "0": "0" };
  var numberRe = /^\s*\d+/;
  var percentRe = /^%/;
  var requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad2(value, fill, width) {
    var sign3 = value < 0 ? "-" : "", string = (sign3 ? -value : value) + "", length3 = string.length;
    return sign3 + (length3 < width ? new Array(width - length3 + 1).join(fill) + string : string);
  }
  function requote(s2) {
    return s2.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    return new Map(names.map((name, i) => [name.toLowerCase(), i]));
  }
  function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
  }
  function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p3) {
    return pad2(d.getDate(), p3, 2);
  }
  function formatHour24(d, p3) {
    return pad2(d.getHours(), p3, 2);
  }
  function formatHour12(d, p3) {
    return pad2(d.getHours() % 12 || 12, p3, 2);
  }
  function formatDayOfYear(d, p3) {
    return pad2(1 + timeDay.count(timeYear(d), d), p3, 3);
  }
  function formatMilliseconds(d, p3) {
    return pad2(d.getMilliseconds(), p3, 3);
  }
  function formatMicroseconds(d, p3) {
    return formatMilliseconds(d, p3) + "000";
  }
  function formatMonthNumber(d, p3) {
    return pad2(d.getMonth() + 1, p3, 2);
  }
  function formatMinutes(d, p3) {
    return pad2(d.getMinutes(), p3, 2);
  }
  function formatSeconds(d, p3) {
    return pad2(d.getSeconds(), p3, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
  }
  function formatWeekNumberSunday(d, p3) {
    return pad2(timeSunday.count(timeYear(d) - 1, d), p3, 2);
  }
  function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  }
  function formatWeekNumberISO(d, p3) {
    d = dISO(d);
    return pad2(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p3, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p3) {
    return pad2(timeMonday.count(timeYear(d) - 1, d), p3, 2);
  }
  function formatYear2(d, p3) {
    return pad2(d.getFullYear() % 100, p3, 2);
  }
  function formatYearISO(d, p3) {
    d = dISO(d);
    return pad2(d.getFullYear() % 100, p3, 2);
  }
  function formatFullYear(d, p3) {
    return pad2(d.getFullYear() % 1e4, p3, 4);
  }
  function formatFullYearISO(d, p3) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
    return pad2(d.getFullYear() % 1e4, p3, 4);
  }
  function formatZone(d) {
    var z3 = d.getTimezoneOffset();
    return (z3 > 0 ? "-" : (z3 *= -1, "+")) + pad2(z3 / 60 | 0, "0", 2) + pad2(z3 % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p3) {
    return pad2(d.getUTCDate(), p3, 2);
  }
  function formatUTCHour24(d, p3) {
    return pad2(d.getUTCHours(), p3, 2);
  }
  function formatUTCHour12(d, p3) {
    return pad2(d.getUTCHours() % 12 || 12, p3, 2);
  }
  function formatUTCDayOfYear(d, p3) {
    return pad2(1 + utcDay.count(utcYear(d), d), p3, 3);
  }
  function formatUTCMilliseconds(d, p3) {
    return pad2(d.getUTCMilliseconds(), p3, 3);
  }
  function formatUTCMicroseconds(d, p3) {
    return formatUTCMilliseconds(d, p3) + "000";
  }
  function formatUTCMonthNumber(d, p3) {
    return pad2(d.getUTCMonth() + 1, p3, 2);
  }
  function formatUTCMinutes(d, p3) {
    return pad2(d.getUTCMinutes(), p3, 2);
  }
  function formatUTCSeconds(d, p3) {
    return pad2(d.getUTCSeconds(), p3, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p3) {
    return pad2(utcSunday.count(utcYear(d) - 1, d), p3, 2);
  }
  function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  }
  function formatUTCWeekNumberISO(d, p3) {
    d = UTCdISO(d);
    return pad2(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p3, 2);
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p3) {
    return pad2(utcMonday.count(utcYear(d) - 1, d), p3, 2);
  }
  function formatUTCYear(d, p3) {
    return pad2(d.getUTCFullYear() % 100, p3, 2);
  }
  function formatUTCYearISO(d, p3) {
    d = UTCdISO(d);
    return pad2(d.getUTCFullYear() % 100, p3, 2);
  }
  function formatUTCFullYear(d, p3) {
    return pad2(d.getUTCFullYear() % 1e4, p3, 4);
  }
  function formatUTCFullYearISO(d, p3) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
    return pad2(d.getUTCFullYear() % 1e4, p3, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1e3);
  }

  // node_modules/d3-time-format/src/defaultLocale.js
  var locale2;
  var timeFormat;
  var timeParse;
  var utcFormat;
  var utcParse;
  defaultLocale2({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  function defaultLocale2(definition) {
    locale2 = formatLocale(definition);
    timeFormat = locale2.format;
    timeParse = locale2.parse;
    utcFormat = locale2.utcFormat;
    utcParse = locale2.utcParse;
    return locale2;
  }

  // node_modules/d3-time-format/src/isoFormat.js
  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
  function formatIsoNative(date2) {
    return date2.toISOString();
  }
  var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
  var isoFormat_default = formatIso;

  // node_modules/d3-time-format/src/isoParse.js
  function parseIsoNative(string) {
    var date2 = new Date(string);
    return isNaN(date2) ? null : date2;
  }
  var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);
  var isoParse_default = parseIso;

  // node_modules/d3-scale/src/time.js
  function date(t) {
    return new Date(t);
  }
  function number4(t) {
    return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
  }
  function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
    var scale2 = continuous(), invert = scale2.invert, domain = scale2.domain;
    var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear3 = format2("%Y");
    function tickFormat2(date2) {
      return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear3)(date2);
    }
    scale2.invert = function(y5) {
      return new Date(invert(y5));
    };
    scale2.domain = function(_3) {
      return arguments.length ? domain(Array.from(_3, number4)) : domain().map(date);
    };
    scale2.ticks = function(interval2) {
      var d = domain();
      return ticks2(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
    };
    scale2.tickFormat = function(count3, specifier) {
      return specifier == null ? tickFormat2 : format2(specifier);
    };
    scale2.nice = function(interval2) {
      var d = domain();
      if (!interval2 || typeof interval2.range !== "function") interval2 = tickInterval(d[0], d[d.length - 1], interval2 == null ? 10 : interval2);
      return interval2 ? domain(nice2(d, interval2)) : scale2;
    };
    scale2.copy = function() {
      return copy(scale2, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
    };
    return scale2;
  }
  function time() {
    return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
  }

  // node_modules/d3-scale/src/utcTime.js
  function utcTime() {
    return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
  }

  // node_modules/d3-scale/src/sequential.js
  function transformer3() {
    var x06 = 0, x12 = 1, t03, t13, k10, transform2, interpolator = identity3, clamp = false, unknown;
    function scale2(x6) {
      return x6 == null || isNaN(x6 = +x6) ? unknown : interpolator(k10 === 0 ? 0.5 : (x6 = (transform2(x6) - t03) * k10, clamp ? Math.max(0, Math.min(1, x6)) : x6));
    }
    scale2.domain = function(_3) {
      return arguments.length ? ([x06, x12] = _3, t03 = transform2(x06 = +x06), t13 = transform2(x12 = +x12), k10 = t03 === t13 ? 0 : 1 / (t13 - t03), scale2) : [x06, x12];
    };
    scale2.clamp = function(_3) {
      return arguments.length ? (clamp = !!_3, scale2) : clamp;
    };
    scale2.interpolator = function(_3) {
      return arguments.length ? (interpolator = _3, scale2) : interpolator;
    };
    function range5(interpolate) {
      return function(_3) {
        var r0, r1;
        return arguments.length ? ([r0, r1] = _3, interpolator = interpolate(r0, r1), scale2) : [interpolator(0), interpolator(1)];
      };
    }
    scale2.range = range5(value_default);
    scale2.rangeRound = range5(round_default);
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    return function(t) {
      transform2 = t, t03 = t(x06), t13 = t(x12), k10 = t03 === t13 ? 0 : 1 / (t13 - t03);
      return scale2;
    };
  }
  function copy2(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
  }
  function sequential() {
    var scale2 = linearish(transformer3()(identity3));
    scale2.copy = function() {
      return copy2(scale2, sequential());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function sequentialLog() {
    var scale2 = loggish(transformer3()).domain([1, 10]);
    scale2.copy = function() {
      return copy2(scale2, sequentialLog()).base(scale2.base());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function sequentialSymlog() {
    var scale2 = symlogish(transformer3());
    scale2.copy = function() {
      return copy2(scale2, sequentialSymlog()).constant(scale2.constant());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function sequentialPow() {
    var scale2 = powish(transformer3());
    scale2.copy = function() {
      return copy2(scale2, sequentialPow()).exponent(scale2.exponent());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
  }

  // node_modules/d3-scale/src/sequentialQuantile.js
  function sequentialQuantile() {
    var domain = [], interpolator = identity3;
    function scale2(x6) {
      if (x6 != null && !isNaN(x6 = +x6)) return interpolator((bisect_default(domain, x6, 1) - 1) / (domain.length - 1));
    }
    scale2.domain = function(_3) {
      if (!arguments.length) return domain.slice();
      domain = [];
      for (let d of _3) if (d != null && !isNaN(d = +d)) domain.push(d);
      domain.sort(ascending);
      return scale2;
    };
    scale2.interpolator = function(_3) {
      return arguments.length ? (interpolator = _3, scale2) : interpolator;
    };
    scale2.range = function() {
      return domain.map((d, i) => interpolator(i / (domain.length - 1)));
    };
    scale2.quantiles = function(n) {
      return Array.from({ length: n + 1 }, (_3, i) => quantile(domain, i / n));
    };
    scale2.copy = function() {
      return sequentialQuantile(interpolator).domain(domain);
    };
    return initInterpolator.apply(scale2, arguments);
  }

  // node_modules/d3-scale/src/diverging.js
  function transformer4() {
    var x06 = 0, x12 = 0.5, x22 = 1, s2 = 1, t03, t13, t22, k10, k21, interpolator = identity3, transform2, clamp = false, unknown;
    function scale2(x6) {
      return isNaN(x6 = +x6) ? unknown : (x6 = 0.5 + ((x6 = +transform2(x6)) - t13) * (s2 * x6 < s2 * t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x6)) : x6));
    }
    scale2.domain = function(_3) {
      return arguments.length ? ([x06, x12, x22] = _3, t03 = transform2(x06 = +x06), t13 = transform2(x12 = +x12), t22 = transform2(x22 = +x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1, scale2) : [x06, x12, x22];
    };
    scale2.clamp = function(_3) {
      return arguments.length ? (clamp = !!_3, scale2) : clamp;
    };
    scale2.interpolator = function(_3) {
      return arguments.length ? (interpolator = _3, scale2) : interpolator;
    };
    function range5(interpolate) {
      return function(_3) {
        var r0, r1, r2;
        return arguments.length ? ([r0, r1, r2] = _3, interpolator = piecewise(interpolate, [r0, r1, r2]), scale2) : [interpolator(0), interpolator(0.5), interpolator(1)];
      };
    }
    scale2.range = range5(value_default);
    scale2.rangeRound = range5(round_default);
    scale2.unknown = function(_3) {
      return arguments.length ? (unknown = _3, scale2) : unknown;
    };
    return function(t) {
      transform2 = t, t03 = t(x06), t13 = t(x12), t22 = t(x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), s2 = t13 < t03 ? -1 : 1;
      return scale2;
    };
  }
  function diverging() {
    var scale2 = linearish(transformer4()(identity3));
    scale2.copy = function() {
      return copy2(scale2, diverging());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function divergingLog() {
    var scale2 = loggish(transformer4()).domain([0.1, 1, 10]);
    scale2.copy = function() {
      return copy2(scale2, divergingLog()).base(scale2.base());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function divergingSymlog() {
    var scale2 = symlogish(transformer4());
    scale2.copy = function() {
      return copy2(scale2, divergingSymlog()).constant(scale2.constant());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function divergingPow() {
    var scale2 = powish(transformer4());
    scale2.copy = function() {
      return copy2(scale2, divergingPow()).exponent(scale2.exponent());
    };
    return initInterpolator.apply(scale2, arguments);
  }
  function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
  }

  // node_modules/d3-scale-chromatic/src/colors.js
  function colors_default(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  // node_modules/d3-scale-chromatic/src/categorical/category10.js
  var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

  // node_modules/d3-scale-chromatic/src/categorical/Accent.js
  var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

  // node_modules/d3-scale-chromatic/src/categorical/Dark2.js
  var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

  // node_modules/d3-scale-chromatic/src/categorical/observable10.js
  var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

  // node_modules/d3-scale-chromatic/src/categorical/Paired.js
  var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  // node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
  var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

  // node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
  var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

  // node_modules/d3-scale-chromatic/src/categorical/Set1.js
  var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  // node_modules/d3-scale-chromatic/src/categorical/Set2.js
  var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

  // node_modules/d3-scale-chromatic/src/categorical/Set3.js
  var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

  // node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
  var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

  // node_modules/d3-scale-chromatic/src/ramp.js
  var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

  // node_modules/d3-scale-chromatic/src/diverging/BrBG.js
  var scheme = new Array(3).concat(
    "d8b365f5f5f55ab4ac",
    "a6611adfc27d80cdc1018571",
    "a6611adfc27df5f5f580cdc1018571",
    "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
    "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
    "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
    "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
    "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
    "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
  ).map(colors_default);
  var BrBG_default = ramp_default(scheme);

  // node_modules/d3-scale-chromatic/src/diverging/PRGn.js
  var scheme2 = new Array(3).concat(
    "af8dc3f7f7f77fbf7b",
    "7b3294c2a5cfa6dba0008837",
    "7b3294c2a5cff7f7f7a6dba0008837",
    "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
    "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
    "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
    "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
    "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
    "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
  ).map(colors_default);
  var PRGn_default = ramp_default(scheme2);

  // node_modules/d3-scale-chromatic/src/diverging/PiYG.js
  var scheme3 = new Array(3).concat(
    "e9a3c9f7f7f7a1d76a",
    "d01c8bf1b6dab8e1864dac26",
    "d01c8bf1b6daf7f7f7b8e1864dac26",
    "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
    "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
    "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
    "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
    "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
    "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
  ).map(colors_default);
  var PiYG_default = ramp_default(scheme3);

  // node_modules/d3-scale-chromatic/src/diverging/PuOr.js
  var scheme4 = new Array(3).concat(
    "998ec3f7f7f7f1a340",
    "5e3c99b2abd2fdb863e66101",
    "5e3c99b2abd2f7f7f7fdb863e66101",
    "542788998ec3d8daebfee0b6f1a340b35806",
    "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
    "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
    "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
    "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
    "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
  ).map(colors_default);
  var PuOr_default = ramp_default(scheme4);

  // node_modules/d3-scale-chromatic/src/diverging/RdBu.js
  var scheme5 = new Array(3).concat(
    "ef8a62f7f7f767a9cf",
    "ca0020f4a58292c5de0571b0",
    "ca0020f4a582f7f7f792c5de0571b0",
    "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
    "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
    "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
    "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
    "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
    "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  ).map(colors_default);
  var RdBu_default = ramp_default(scheme5);

  // node_modules/d3-scale-chromatic/src/diverging/RdGy.js
  var scheme6 = new Array(3).concat(
    "ef8a62ffffff999999",
    "ca0020f4a582bababa404040",
    "ca0020f4a582ffffffbababa404040",
    "b2182bef8a62fddbc7e0e0e09999994d4d4d",
    "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
    "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
    "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
    "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
    "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
  ).map(colors_default);
  var RdGy_default = ramp_default(scheme6);

  // node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
  var scheme7 = new Array(3).concat(
    "fc8d59ffffbf91bfdb",
    "d7191cfdae61abd9e92c7bb6",
    "d7191cfdae61ffffbfabd9e92c7bb6",
    "d73027fc8d59fee090e0f3f891bfdb4575b4",
    "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
    "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
    "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
    "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
    "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
  ).map(colors_default);
  var RdYlBu_default = ramp_default(scheme7);

  // node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
  var scheme8 = new Array(3).concat(
    "fc8d59ffffbf91cf60",
    "d7191cfdae61a6d96a1a9641",
    "d7191cfdae61ffffbfa6d96a1a9641",
    "d73027fc8d59fee08bd9ef8b91cf601a9850",
    "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
    "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
    "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
    "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
    "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
  ).map(colors_default);
  var RdYlGn_default = ramp_default(scheme8);

  // node_modules/d3-scale-chromatic/src/diverging/Spectral.js
  var scheme9 = new Array(3).concat(
    "fc8d59ffffbf99d594",
    "d7191cfdae61abdda42b83ba",
    "d7191cfdae61ffffbfabdda42b83ba",
    "d53e4ffc8d59fee08be6f59899d5943288bd",
    "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
    "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
    "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
    "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
    "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
  ).map(colors_default);
  var Spectral_default = ramp_default(scheme9);

  // node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
  var scheme10 = new Array(3).concat(
    "e5f5f999d8c92ca25f",
    "edf8fbb2e2e266c2a4238b45",
    "edf8fbb2e2e266c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
  ).map(colors_default);
  var BuGn_default = ramp_default(scheme10);

  // node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
  var scheme11 = new Array(3).concat(
    "e0ecf49ebcda8856a7",
    "edf8fbb3cde38c96c688419d",
    "edf8fbb3cde38c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
  ).map(colors_default);
  var BuPu_default = ramp_default(scheme11);

  // node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
  var scheme12 = new Array(3).concat(
    "e0f3dba8ddb543a2ca",
    "f0f9e8bae4bc7bccc42b8cbe",
    "f0f9e8bae4bc7bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
  ).map(colors_default);
  var GnBu_default = ramp_default(scheme12);

  // node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
  var scheme13 = new Array(3).concat(
    "fee8c8fdbb84e34a33",
    "fef0d9fdcc8afc8d59d7301f",
    "fef0d9fdcc8afc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
  ).map(colors_default);
  var OrRd_default = ramp_default(scheme13);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
  var scheme14 = new Array(3).concat(
    "ece2f0a6bddb1c9099",
    "f6eff7bdc9e167a9cf02818a",
    "f6eff7bdc9e167a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
  ).map(colors_default);
  var PuBuGn_default = ramp_default(scheme14);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
  var scheme15 = new Array(3).concat(
    "ece7f2a6bddb2b8cbe",
    "f1eef6bdc9e174a9cf0570b0",
    "f1eef6bdc9e174a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
  ).map(colors_default);
  var PuBu_default = ramp_default(scheme15);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
  var scheme16 = new Array(3).concat(
    "e7e1efc994c7dd1c77",
    "f1eef6d7b5d8df65b0ce1256",
    "f1eef6d7b5d8df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
  ).map(colors_default);
  var PuRd_default = ramp_default(scheme16);

  // node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
  var scheme17 = new Array(3).concat(
    "fde0ddfa9fb5c51b8a",
    "feebe2fbb4b9f768a1ae017e",
    "feebe2fbb4b9f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
  ).map(colors_default);
  var RdPu_default = ramp_default(scheme17);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
  var scheme18 = new Array(3).concat(
    "edf8b17fcdbb2c7fb8",
    "ffffcca1dab441b6c4225ea8",
    "ffffcca1dab441b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
  ).map(colors_default);
  var YlGnBu_default = ramp_default(scheme18);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
  var scheme19 = new Array(3).concat(
    "f7fcb9addd8e31a354",
    "ffffccc2e69978c679238443",
    "ffffccc2e69978c67931a354006837",
    "ffffccd9f0a3addd8e78c67931a354006837",
    "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
  ).map(colors_default);
  var YlGn_default = ramp_default(scheme19);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
  var scheme20 = new Array(3).concat(
    "fff7bcfec44fd95f0e",
    "ffffd4fed98efe9929cc4c02",
    "ffffd4fed98efe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
  ).map(colors_default);
  var YlOrBr_default = ramp_default(scheme20);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
  var scheme21 = new Array(3).concat(
    "ffeda0feb24cf03b20",
    "ffffb2fecc5cfd8d3ce31a1c",
    "ffffb2fecc5cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
  ).map(colors_default);
  var YlOrRd_default = ramp_default(scheme21);

  // node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
  var scheme22 = new Array(3).concat(
    "deebf79ecae13182bd",
    "eff3ffbdd7e76baed62171b5",
    "eff3ffbdd7e76baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  ).map(colors_default);
  var Blues_default = ramp_default(scheme22);

  // node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
  var scheme23 = new Array(3).concat(
    "e5f5e0a1d99b31a354",
    "edf8e9bae4b374c476238b45",
    "edf8e9bae4b374c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  ).map(colors_default);
  var Greens_default = ramp_default(scheme23);

  // node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
  var scheme24 = new Array(3).concat(
    "f0f0f0bdbdbd636363",
    "f7f7f7cccccc969696525252",
    "f7f7f7cccccc969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
  ).map(colors_default);
  var Greys_default = ramp_default(scheme24);

  // node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
  var scheme25 = new Array(3).concat(
    "efedf5bcbddc756bb1",
    "f2f0f7cbc9e29e9ac86a51a3",
    "f2f0f7cbc9e29e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
  ).map(colors_default);
  var Purples_default = ramp_default(scheme25);

  // node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
  var scheme26 = new Array(3).concat(
    "fee0d2fc9272de2d26",
    "fee5d9fcae91fb6a4acb181d",
    "fee5d9fcae91fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  ).map(colors_default);
  var Reds_default = ramp_default(scheme26);

  // node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
  var scheme27 = new Array(3).concat(
    "fee6cefdae6be6550d",
    "feeddefdbe85fd8d3cd94701",
    "feeddefdbe85fd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
  ).map(colors_default);
  var Oranges_default = ramp_default(scheme27);

  // node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
  function cividis_default(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
  }

  // node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
  var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

  // node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
  var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var c3 = cubehelix();
  function rainbow_default(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    c3.h = 360 * t - 100;
    c3.s = 1.5 - 1.5 * ts;
    c3.l = 0.8 - 0.9 * ts;
    return c3 + "";
  }

  // node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
  var c4 = rgb();
  var pi_1_3 = Math.PI / 3;
  var pi_2_3 = Math.PI * 2 / 3;
  function sinebow_default(t) {
    var x6;
    t = (0.5 - t) * Math.PI;
    c4.r = 255 * (x6 = Math.sin(t)) * x6;
    c4.g = 255 * (x6 = Math.sin(t + pi_1_3)) * x6;
    c4.b = 255 * (x6 = Math.sin(t + pi_2_3)) * x6;
    return c4 + "";
  }

  // node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
  function turbo_default(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
  }

  // node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
  function ramp(range5) {
    var n = range5.length;
    return function(t) {
      return range5[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }
  var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
  var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
  var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
  var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  // node_modules/d3-shape/src/constant.js
  function constant_default10(x6) {
    return function constant2() {
      return x6;
    };
  }

  // node_modules/d3-shape/src/math.js
  var abs4 = Math.abs;
  var atan22 = Math.atan2;
  var cos3 = Math.cos;
  var max4 = Math.max;
  var min3 = Math.min;
  var sin3 = Math.sin;
  var sqrt3 = Math.sqrt;
  var epsilon8 = 1e-12;
  var pi5 = Math.PI;
  var halfPi4 = pi5 / 2;
  var tau6 = 2 * pi5;
  function acos2(x6) {
    return x6 > 1 ? 0 : x6 < -1 ? pi5 : Math.acos(x6);
  }
  function asin2(x6) {
    return x6 >= 1 ? halfPi4 : x6 <= -1 ? -halfPi4 : Math.asin(x6);
  }

  // node_modules/d3-shape/src/path.js
  function withPath(shape) {
    let digits = 3;
    shape.digits = function(_3) {
      if (!arguments.length) return digits;
      if (_3 == null) {
        digits = null;
      } else {
        const d = Math.floor(_3);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${_3}`);
        digits = d;
      }
      return shape;
    };
    return () => new Path(digits);
  }

  // node_modules/d3-shape/src/arc.js
  function arcInnerRadius(d) {
    return d.innerRadius;
  }
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  function arcStartAngle(d) {
    return d.startAngle;
  }
  function arcEndAngle(d) {
    return d.endAngle;
  }
  function arcPadAngle(d) {
    return d && d.padAngle;
  }
  function intersect2(x06, y06, x12, y12, x22, y22, x32, y32) {
    var x10 = x12 - x06, y10 = y12 - y06, x322 = x32 - x22, y322 = y32 - y22, t = y322 * x10 - x322 * y10;
    if (t * t < epsilon8) return;
    t = (x322 * (y06 - y22) - y322 * (x06 - x22)) / t;
    return [x06 + t * x10, y06 + t * y10];
  }
  function cornerTangents(x06, y06, x12, y12, r1, rc, cw) {
    var x01 = x06 - x12, y01 = y06 - y12, lo = (cw ? rc : -rc) / sqrt3(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x06 + ox, y11 = y06 + oy, x10 = x12 + ox, y10 = y12 + oy, x004 = (x11 + x10) / 2, y004 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D5 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt3(max4(0, r * r * d2 - D5 * D5)), cx0 = (D5 * dy - dx * d) / d2, cy0 = (-D5 * dx - dy * d) / d2, cx1 = (D5 * dy + dx * d) / d2, cy1 = (-D5 * dx + dy * d) / d2, dx0 = cx0 - x004, dy0 = cy0 - y004, dx1 = cx1 - x004, dy1 = cy1 - y004;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }
  function arc_default() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default10(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc);
    function arc() {
      var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi4, a1 = endAngle.apply(this, arguments) - halfPi4, da2 = abs4(a1 - a0), cw = a1 > a0;
      if (!context) context = buffer = path2();
      if (r1 < r0) r = r1, r1 = r0, r0 = r;
      if (!(r1 > epsilon8)) context.moveTo(0, 0);
      else if (da2 > tau6 - epsilon8) {
        context.moveTo(r1 * cos3(a0), r1 * sin3(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > epsilon8) {
          context.moveTo(r0 * cos3(a1), r0 * sin3(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      } else {
        var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da2, da1 = da2, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon8 && (padRadius ? +padRadius.apply(this, arguments) : sqrt3(r0 * r0 + r1 * r1)), rc = min3(abs4(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t03, t13;
        if (rp > epsilon8) {
          var p02 = asin2(rp / r0 * sin3(ap)), p1 = asin2(rp / r1 * sin3(ap));
          if ((da0 -= p02 * 2) > epsilon8) p02 *= cw ? 1 : -1, a00 += p02, a10 -= p02;
          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > epsilon8) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }
        var x01 = r1 * cos3(a01), y01 = r1 * sin3(a01), x10 = r0 * cos3(a10), y10 = r0 * sin3(a10);
        if (rc > epsilon8) {
          var x11 = r1 * cos3(a11), y11 = r1 * sin3(a11), x004 = r0 * cos3(a00), y004 = r0 * sin3(a00), oc;
          if (da2 < pi5) {
            if (oc = intersect2(x01, y01, x004, y004, x11, y11, x10, y10)) {
              var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin3(acos2((ax * bx + ay * by) / (sqrt3(ax * ax + ay * ay) * sqrt3(bx * bx + by * by))) / 2), lc = sqrt3(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = min3(rc, (r0 - lc) / (kc - 1));
              rc1 = min3(rc, (r1 - lc) / (kc + 1));
            } else {
              rc0 = rc1 = 0;
            }
          }
        }
        if (!(da1 > epsilon8)) context.moveTo(x01, y01);
        else if (rc1 > epsilon8) {
          t03 = cornerTangents(x004, y004, x01, y01, r1, rc1, cw);
          t13 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
          context.moveTo(t03.cx + t03.x01, t03.cy + t03.y01);
          if (rc1 < rc) context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
          else {
            context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
            context.arc(0, 0, r1, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), !cw);
            context.arc(t13.cx, t13.cy, rc1, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
          }
        } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
        if (!(r0 > epsilon8) || !(da0 > epsilon8)) context.lineTo(x10, y10);
        else if (rc0 > epsilon8) {
          t03 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t13 = cornerTangents(x01, y01, x004, y004, r0, -rc0, cw);
          context.lineTo(t03.cx + t03.x01, t03.cy + t03.y01);
          if (rc0 < rc) context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
          else {
            context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
            context.arc(0, 0, r0, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), cw);
            context.arc(t13.cx, t13.cy, rc0, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
          }
        } else context.arc(0, 0, r0, a10, a00, cw);
      }
      context.closePath();
      if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a4 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi5 / 2;
      return [cos3(a4) * r, sin3(a4) * r];
    };
    arc.innerRadius = function(_3) {
      return arguments.length ? (innerRadius = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : innerRadius;
    };
    arc.outerRadius = function(_3) {
      return arguments.length ? (outerRadius = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : outerRadius;
    };
    arc.cornerRadius = function(_3) {
      return arguments.length ? (cornerRadius = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : cornerRadius;
    };
    arc.padRadius = function(_3) {
      return arguments.length ? (padRadius = _3 == null ? null : typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : padRadius;
    };
    arc.startAngle = function(_3) {
      return arguments.length ? (startAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : startAngle;
    };
    arc.endAngle = function(_3) {
      return arguments.length ? (endAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : endAngle;
    };
    arc.padAngle = function(_3) {
      return arguments.length ? (padAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), arc) : padAngle;
    };
    arc.context = function(_3) {
      return arguments.length ? (context = _3 == null ? null : _3, arc) : context;
    };
    return arc;
  }

  // node_modules/d3-shape/src/array.js
  var slice4 = Array.prototype.slice;
  function array_default3(x6) {
    return typeof x6 === "object" && "length" in x6 ? x6 : Array.from(x6);
  }

  // node_modules/d3-shape/src/curve/linear.js
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
        // falls through
        default:
          this._context.lineTo(x6, y5);
          break;
      }
    }
  };
  function linear_default(context) {
    return new Linear(context);
  }

  // node_modules/d3-shape/src/point.js
  function x5(p3) {
    return p3[0];
  }
  function y4(p3) {
    return p3[1];
  }

  // node_modules/d3-shape/src/line.js
  function line_default2(x6, y5) {
    var defined = constant_default10(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
    x6 = typeof x6 === "function" ? x6 : x6 === void 0 ? x5 : constant_default10(x6);
    y5 = typeof y5 === "function" ? y5 : y5 === void 0 ? y4 : constant_default10(y5);
    function line(data) {
      var i, n = (data = array_default3(data)).length, d, defined0 = false, buffer;
      if (context == null) output = curve(buffer = path2());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();
          else output.lineEnd();
        }
        if (defined0) output.point(+x6(d, i, data), +y5(d, i, data));
      }
      if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_3) {
      return arguments.length ? (x6 = typeof _3 === "function" ? _3 : constant_default10(+_3), line) : x6;
    };
    line.y = function(_3) {
      return arguments.length ? (y5 = typeof _3 === "function" ? _3 : constant_default10(+_3), line) : y5;
    };
    line.defined = function(_3) {
      return arguments.length ? (defined = typeof _3 === "function" ? _3 : constant_default10(!!_3), line) : defined;
    };
    line.curve = function(_3) {
      return arguments.length ? (curve = _3, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_3) {
      return arguments.length ? (_3 == null ? context = output = null : output = curve(context = _3), line) : context;
    };
    return line;
  }

  // node_modules/d3-shape/src/area.js
  function area_default5(x06, y06, y12) {
    var x12 = null, defined = constant_default10(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
    x06 = typeof x06 === "function" ? x06 : x06 === void 0 ? x5 : constant_default10(+x06);
    y06 = typeof y06 === "function" ? y06 : y06 === void 0 ? constant_default10(0) : constant_default10(+y06);
    y12 = typeof y12 === "function" ? y12 : y12 === void 0 ? y4 : constant_default10(+y12);
    function area(data) {
      var i, j3, k4, n = (data = array_default3(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
      if (context == null) output = curve(buffer = path2());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j3 = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k4 = i - 1; k4 >= j3; --k4) {
              output.point(x0z[k4], y0z[k4]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          x0z[i] = +x06(d, i, data), y0z[i] = +y06(d, i, data);
          output.point(x12 ? +x12(d, i, data) : x0z[i], y12 ? +y12(d, i, data) : y0z[i]);
        }
      }
      if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
      return line_default2().defined(defined).curve(curve).context(context);
    }
    area.x = function(_3) {
      return arguments.length ? (x06 = typeof _3 === "function" ? _3 : constant_default10(+_3), x12 = null, area) : x06;
    };
    area.x0 = function(_3) {
      return arguments.length ? (x06 = typeof _3 === "function" ? _3 : constant_default10(+_3), area) : x06;
    };
    area.x1 = function(_3) {
      return arguments.length ? (x12 = _3 == null ? null : typeof _3 === "function" ? _3 : constant_default10(+_3), area) : x12;
    };
    area.y = function(_3) {
      return arguments.length ? (y06 = typeof _3 === "function" ? _3 : constant_default10(+_3), y12 = null, area) : y06;
    };
    area.y0 = function(_3) {
      return arguments.length ? (y06 = typeof _3 === "function" ? _3 : constant_default10(+_3), area) : y06;
    };
    area.y1 = function(_3) {
      return arguments.length ? (y12 = _3 == null ? null : typeof _3 === "function" ? _3 : constant_default10(+_3), area) : y12;
    };
    area.lineX0 = area.lineY0 = function() {
      return arealine().x(x06).y(y06);
    };
    area.lineY1 = function() {
      return arealine().x(x06).y(y12);
    };
    area.lineX1 = function() {
      return arealine().x(x12).y(y06);
    };
    area.defined = function(_3) {
      return arguments.length ? (defined = typeof _3 === "function" ? _3 : constant_default10(!!_3), area) : defined;
    };
    area.curve = function(_3) {
      return arguments.length ? (curve = _3, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_3) {
      return arguments.length ? (_3 == null ? context = output = null : output = curve(context = _3), area) : context;
    };
    return area;
  }

  // node_modules/d3-shape/src/descending.js
  function descending_default(a4, b10) {
    return b10 < a4 ? -1 : b10 > a4 ? 1 : b10 >= a4 ? 0 : NaN;
  }

  // node_modules/d3-shape/src/identity.js
  function identity_default5(d) {
    return d;
  }

  // node_modules/d3-shape/src/pie.js
  function pie_default() {
    var value = identity_default5, sortValues = descending_default, sort2 = null, startAngle = constant_default10(0), endAngle = constant_default10(tau6), padAngle = constant_default10(0);
    function pie(data) {
      var i, n = (data = array_default3(data)).length, j3, k4, sum4 = 0, index3 = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da2 = Math.min(tau6, Math.max(-tau6, endAngle.apply(this, arguments) - a0)), a1, p3 = Math.min(Math.abs(da2) / n, padAngle.apply(this, arguments)), pa = p3 * (da2 < 0 ? -1 : 1), v4;
      for (i = 0; i < n; ++i) {
        if ((v4 = arcs[index3[i] = i] = +value(data[i], i, data)) > 0) {
          sum4 += v4;
        }
      }
      if (sortValues != null) index3.sort(function(i2, j4) {
        return sortValues(arcs[i2], arcs[j4]);
      });
      else if (sort2 != null) index3.sort(function(i2, j4) {
        return sort2(data[i2], data[j4]);
      });
      for (i = 0, k4 = sum4 ? (da2 - n * pa) / sum4 : 0; i < n; ++i, a0 = a1) {
        j3 = index3[i], v4 = arcs[j3], a1 = a0 + (v4 > 0 ? v4 * k4 : 0) + pa, arcs[j3] = {
          data: data[j3],
          index: i,
          value: v4,
          startAngle: a0,
          endAngle: a1,
          padAngle: p3
        };
      }
      return arcs;
    }
    pie.value = function(_3) {
      return arguments.length ? (value = typeof _3 === "function" ? _3 : constant_default10(+_3), pie) : value;
    };
    pie.sortValues = function(_3) {
      return arguments.length ? (sortValues = _3, sort2 = null, pie) : sortValues;
    };
    pie.sort = function(_3) {
      return arguments.length ? (sort2 = _3, sortValues = null, pie) : sort2;
    };
    pie.startAngle = function(_3) {
      return arguments.length ? (startAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), pie) : startAngle;
    };
    pie.endAngle = function(_3) {
      return arguments.length ? (endAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), pie) : endAngle;
    };
    pie.padAngle = function(_3) {
      return arguments.length ? (padAngle = typeof _3 === "function" ? _3 : constant_default10(+_3), pie) : padAngle;
    };
    return pie;
  }

  // node_modules/d3-shape/src/curve/radial.js
  var curveRadialLinear = curveRadial(linear_default);
  function Radial(curve) {
    this._curve = curve;
  }
  Radial.prototype = {
    areaStart: function() {
      this._curve.areaStart();
    },
    areaEnd: function() {
      this._curve.areaEnd();
    },
    lineStart: function() {
      this._curve.lineStart();
    },
    lineEnd: function() {
      this._curve.lineEnd();
    },
    point: function(a4, r) {
      this._curve.point(r * Math.sin(a4), r * -Math.cos(a4));
    }
  };
  function curveRadial(curve) {
    function radial2(context) {
      return new Radial(curve(context));
    }
    radial2._curve = curve;
    return radial2;
  }

  // node_modules/d3-shape/src/lineRadial.js
  function lineRadial(l2) {
    var c6 = l2.curve;
    l2.angle = l2.x, delete l2.x;
    l2.radius = l2.y, delete l2.y;
    l2.curve = function(_3) {
      return arguments.length ? c6(curveRadial(_3)) : c6()._curve;
    };
    return l2;
  }
  function lineRadial_default() {
    return lineRadial(line_default2().curve(curveRadialLinear));
  }

  // node_modules/d3-shape/src/areaRadial.js
  function areaRadial_default() {
    var a4 = area_default5().curve(curveRadialLinear), c6 = a4.curve, x06 = a4.lineX0, x12 = a4.lineX1, y06 = a4.lineY0, y12 = a4.lineY1;
    a4.angle = a4.x, delete a4.x;
    a4.startAngle = a4.x0, delete a4.x0;
    a4.endAngle = a4.x1, delete a4.x1;
    a4.radius = a4.y, delete a4.y;
    a4.innerRadius = a4.y0, delete a4.y0;
    a4.outerRadius = a4.y1, delete a4.y1;
    a4.lineStartAngle = function() {
      return lineRadial(x06());
    }, delete a4.lineX0;
    a4.lineEndAngle = function() {
      return lineRadial(x12());
    }, delete a4.lineX1;
    a4.lineInnerRadius = function() {
      return lineRadial(y06());
    }, delete a4.lineY0;
    a4.lineOuterRadius = function() {
      return lineRadial(y12());
    }, delete a4.lineY1;
    a4.curve = function(_3) {
      return arguments.length ? c6(curveRadial(_3)) : c6()._curve;
    };
    return a4;
  }

  // node_modules/d3-shape/src/pointRadial.js
  function pointRadial_default(x6, y5) {
    return [(y5 = +y5) * Math.cos(x6 -= Math.PI / 2), y5 * Math.sin(x6)];
  }

  // node_modules/d3-shape/src/curve/bump.js
  var Bump = class {
    constructor(context, x6) {
      this._context = context;
      this._x = x6;
    }
    areaStart() {
      this._line = 0;
    }
    areaEnd() {
      this._line = NaN;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    }
    point(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0: {
          this._point = 1;
          if (this._line) this._context.lineTo(x6, y5);
          else this._context.moveTo(x6, y5);
          break;
        }
        case 1:
          this._point = 2;
        // falls through
        default: {
          if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x6) / 2, this._y0, this._x0, y5, x6, y5);
          else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y5) / 2, x6, this._y0, x6, y5);
          break;
        }
      }
      this._x0 = x6, this._y0 = y5;
    }
  };
  var BumpRadial = class {
    constructor(context) {
      this._context = context;
    }
    lineStart() {
      this._point = 0;
    }
    lineEnd() {
    }
    point(x6, y5) {
      x6 = +x6, y5 = +y5;
      if (this._point === 0) {
        this._point = 1;
      } else {
        const p02 = pointRadial_default(this._x0, this._y0);
        const p1 = pointRadial_default(this._x0, this._y0 = (this._y0 + y5) / 2);
        const p22 = pointRadial_default(x6, this._y0);
        const p3 = pointRadial_default(x6, y5);
        this._context.moveTo(...p02);
        this._context.bezierCurveTo(...p1, ...p22, ...p3);
      }
      this._x0 = x6, this._y0 = y5;
    }
  };
  function bumpX(context) {
    return new Bump(context, true);
  }
  function bumpY(context) {
    return new Bump(context, false);
  }
  function bumpRadial(context) {
    return new BumpRadial(context);
  }

  // node_modules/d3-shape/src/link.js
  function linkSource(d) {
    return d.source;
  }
  function linkTarget(d) {
    return d.target;
  }
  function link2(curve) {
    let source = linkSource, target = linkTarget, x6 = x5, y5 = y4, context = null, output = null, path2 = withPath(link3);
    function link3() {
      let buffer;
      const argv = slice4.call(arguments);
      const s2 = source.apply(this, argv);
      const t = target.apply(this, argv);
      if (context == null) output = curve(buffer = path2());
      output.lineStart();
      argv[0] = s2, output.point(+x6.apply(this, argv), +y5.apply(this, argv));
      argv[0] = t, output.point(+x6.apply(this, argv), +y5.apply(this, argv));
      output.lineEnd();
      if (buffer) return output = null, buffer + "" || null;
    }
    link3.source = function(_3) {
      return arguments.length ? (source = _3, link3) : source;
    };
    link3.target = function(_3) {
      return arguments.length ? (target = _3, link3) : target;
    };
    link3.x = function(_3) {
      return arguments.length ? (x6 = typeof _3 === "function" ? _3 : constant_default10(+_3), link3) : x6;
    };
    link3.y = function(_3) {
      return arguments.length ? (y5 = typeof _3 === "function" ? _3 : constant_default10(+_3), link3) : y5;
    };
    link3.context = function(_3) {
      return arguments.length ? (_3 == null ? context = output = null : output = curve(context = _3), link3) : context;
    };
    return link3;
  }
  function linkHorizontal() {
    return link2(bumpX);
  }
  function linkVertical() {
    return link2(bumpY);
  }
  function linkRadial() {
    const l2 = link2(bumpRadial);
    l2.angle = l2.x, delete l2.x;
    l2.radius = l2.y, delete l2.y;
    return l2;
  }

  // node_modules/d3-shape/src/symbol/asterisk.js
  var sqrt32 = sqrt3(3);
  var asterisk_default = {
    draw(context, size) {
      const r = sqrt3(size + min3(size / 28, 0.75)) * 0.59436;
      const t = r / 2;
      const u4 = t * sqrt32;
      context.moveTo(0, r);
      context.lineTo(0, -r);
      context.moveTo(-u4, -t);
      context.lineTo(u4, t);
      context.moveTo(-u4, t);
      context.lineTo(u4, -t);
    }
  };

  // node_modules/d3-shape/src/symbol/circle.js
  var circle_default3 = {
    draw(context, size) {
      const r = sqrt3(size / pi5);
      context.moveTo(r, 0);
      context.arc(0, 0, r, 0, tau6);
    }
  };

  // node_modules/d3-shape/src/symbol/cross.js
  var cross_default2 = {
    draw(context, size) {
      const r = sqrt3(size / 5) / 2;
      context.moveTo(-3 * r, -r);
      context.lineTo(-r, -r);
      context.lineTo(-r, -3 * r);
      context.lineTo(r, -3 * r);
      context.lineTo(r, -r);
      context.lineTo(3 * r, -r);
      context.lineTo(3 * r, r);
      context.lineTo(r, r);
      context.lineTo(r, 3 * r);
      context.lineTo(-r, 3 * r);
      context.lineTo(-r, r);
      context.lineTo(-3 * r, r);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/diamond.js
  var tan30 = sqrt3(1 / 3);
  var tan30_2 = tan30 * 2;
  var diamond_default = {
    draw(context, size) {
      const y5 = sqrt3(size / tan30_2);
      const x6 = y5 * tan30;
      context.moveTo(0, -y5);
      context.lineTo(x6, 0);
      context.lineTo(0, y5);
      context.lineTo(-x6, 0);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/diamond2.js
  var diamond2_default = {
    draw(context, size) {
      const r = sqrt3(size) * 0.62625;
      context.moveTo(0, -r);
      context.lineTo(r, 0);
      context.lineTo(0, r);
      context.lineTo(-r, 0);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/plus.js
  var plus_default = {
    draw(context, size) {
      const r = sqrt3(size - min3(size / 7, 2)) * 0.87559;
      context.moveTo(-r, 0);
      context.lineTo(r, 0);
      context.moveTo(0, r);
      context.lineTo(0, -r);
    }
  };

  // node_modules/d3-shape/src/symbol/square.js
  var square_default = {
    draw(context, size) {
      const w3 = sqrt3(size);
      const x6 = -w3 / 2;
      context.rect(x6, x6, w3, w3);
    }
  };

  // node_modules/d3-shape/src/symbol/square2.js
  var square2_default = {
    draw(context, size) {
      const r = sqrt3(size) * 0.4431;
      context.moveTo(r, r);
      context.lineTo(r, -r);
      context.lineTo(-r, -r);
      context.lineTo(-r, r);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/star.js
  var ka = 0.8908130915292852;
  var kr = sin3(pi5 / 10) / sin3(7 * pi5 / 10);
  var kx = sin3(tau6 / 10) * kr;
  var ky = -cos3(tau6 / 10) * kr;
  var star_default = {
    draw(context, size) {
      const r = sqrt3(size * ka);
      const x6 = kx * r;
      const y5 = ky * r;
      context.moveTo(0, -r);
      context.lineTo(x6, y5);
      for (let i = 1; i < 5; ++i) {
        const a4 = tau6 * i / 5;
        const c6 = cos3(a4);
        const s2 = sin3(a4);
        context.lineTo(s2 * r, -c6 * r);
        context.lineTo(c6 * x6 - s2 * y5, s2 * x6 + c6 * y5);
      }
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/triangle.js
  var sqrt33 = sqrt3(3);
  var triangle_default = {
    draw(context, size) {
      const y5 = -sqrt3(size / (sqrt33 * 3));
      context.moveTo(0, y5 * 2);
      context.lineTo(-sqrt33 * y5, -y5);
      context.lineTo(sqrt33 * y5, -y5);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/triangle2.js
  var sqrt34 = sqrt3(3);
  var triangle2_default = {
    draw(context, size) {
      const s2 = sqrt3(size) * 0.6824;
      const t = s2 / 2;
      const u4 = s2 * sqrt34 / 2;
      context.moveTo(0, -s2);
      context.lineTo(u4, t);
      context.lineTo(-u4, t);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/wye.js
  var c5 = -0.5;
  var s = sqrt3(3) / 2;
  var k3 = 1 / sqrt3(12);
  var a3 = (k3 / 2 + 1) * 3;
  var wye_default = {
    draw(context, size) {
      const r = sqrt3(size / a3);
      const x06 = r / 2, y06 = r * k3;
      const x12 = x06, y12 = r * k3 + r;
      const x22 = -x12, y22 = y12;
      context.moveTo(x06, y06);
      context.lineTo(x12, y12);
      context.lineTo(x22, y22);
      context.lineTo(c5 * x06 - s * y06, s * x06 + c5 * y06);
      context.lineTo(c5 * x12 - s * y12, s * x12 + c5 * y12);
      context.lineTo(c5 * x22 - s * y22, s * x22 + c5 * y22);
      context.lineTo(c5 * x06 + s * y06, c5 * y06 - s * x06);
      context.lineTo(c5 * x12 + s * y12, c5 * y12 - s * x12);
      context.lineTo(c5 * x22 + s * y22, c5 * y22 - s * x22);
      context.closePath();
    }
  };

  // node_modules/d3-shape/src/symbol/times.js
  var times_default = {
    draw(context, size) {
      const r = sqrt3(size - min3(size / 6, 1.7)) * 0.6189;
      context.moveTo(-r, -r);
      context.lineTo(r, r);
      context.moveTo(-r, r);
      context.lineTo(r, -r);
    }
  };

  // node_modules/d3-shape/src/symbol.js
  var symbolsFill = [
    circle_default3,
    cross_default2,
    diamond_default,
    square_default,
    star_default,
    triangle_default,
    wye_default
  ];
  var symbolsStroke = [
    circle_default3,
    plus_default,
    times_default,
    triangle2_default,
    asterisk_default,
    square2_default,
    diamond2_default
  ];
  function Symbol2(type2, size) {
    let context = null, path2 = withPath(symbol);
    type2 = typeof type2 === "function" ? type2 : constant_default10(type2 || circle_default3);
    size = typeof size === "function" ? size : constant_default10(size === void 0 ? 64 : +size);
    function symbol() {
      let buffer;
      if (!context) context = buffer = path2();
      type2.apply(this, arguments).draw(context, +size.apply(this, arguments));
      if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_3) {
      return arguments.length ? (type2 = typeof _3 === "function" ? _3 : constant_default10(_3), symbol) : type2;
    };
    symbol.size = function(_3) {
      return arguments.length ? (size = typeof _3 === "function" ? _3 : constant_default10(+_3), symbol) : size;
    };
    symbol.context = function(_3) {
      return arguments.length ? (context = _3 == null ? null : _3, symbol) : context;
    };
    return symbol;
  }

  // node_modules/d3-shape/src/noop.js
  function noop_default2() {
  }

  // node_modules/d3-shape/src/curve/basis.js
  function point2(that, x6, y5) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x6) / 6,
      (that._y0 + 4 * that._y1 + y5) / 6
    );
  }
  function Basis(context) {
    this._context = context;
  }
  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          point2(this, this._x1, this._y1);
        // falls through
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        // falls through
        default:
          point2(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = x6;
      this._y0 = this._y1, this._y1 = y5;
    }
  };
  function basis_default2(context) {
    return new Basis(context);
  }

  // node_modules/d3-shape/src/curve/basisClosed.js
  function BasisClosed(context) {
    this._context = context;
  }
  BasisClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = x6, this._y2 = y5;
          break;
        case 1:
          this._point = 2;
          this._x3 = x6, this._y3 = y5;
          break;
        case 2:
          this._point = 3;
          this._x4 = x6, this._y4 = y5;
          this._context.moveTo((this._x0 + 4 * this._x1 + x6) / 6, (this._y0 + 4 * this._y1 + y5) / 6);
          break;
        default:
          point2(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = x6;
      this._y0 = this._y1, this._y1 = y5;
    }
  };
  function basisClosed_default2(context) {
    return new BasisClosed(context);
  }

  // node_modules/d3-shape/src/curve/basisOpen.js
  function BasisOpen(context) {
    this._context = context;
  }
  BasisOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var x06 = (this._x0 + 4 * this._x1 + x6) / 6, y06 = (this._y0 + 4 * this._y1 + y5) / 6;
          this._line ? this._context.lineTo(x06, y06) : this._context.moveTo(x06, y06);
          break;
        case 3:
          this._point = 4;
        // falls through
        default:
          point2(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = x6;
      this._y0 = this._y1, this._y1 = y5;
    }
  };
  function basisOpen_default(context) {
    return new BasisOpen(context);
  }

  // node_modules/d3-shape/src/curve/bundle.js
  function Bundle(context, beta) {
    this._basis = new Basis(context);
    this._beta = beta;
  }
  Bundle.prototype = {
    lineStart: function() {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function() {
      var x6 = this._x, y5 = this._y, j3 = x6.length - 1;
      if (j3 > 0) {
        var x06 = x6[0], y06 = y5[0], dx = x6[j3] - x06, dy = y5[j3] - y06, i = -1, t;
        while (++i <= j3) {
          t = i / j3;
          this._basis.point(
            this._beta * x6[i] + (1 - this._beta) * (x06 + t * dx),
            this._beta * y5[i] + (1 - this._beta) * (y06 + t * dy)
          );
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function(x6, y5) {
      this._x.push(+x6);
      this._y.push(+y5);
    }
  };
  var bundle_default = (function custom12(beta) {
    function bundle(context) {
      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
    }
    bundle.beta = function(beta2) {
      return custom12(+beta2);
    };
    return bundle;
  })(0.85);

  // node_modules/d3-shape/src/curve/cardinal.js
  function point3(that, x6, y5) {
    that._context.bezierCurveTo(
      that._x1 + that._k * (that._x2 - that._x0),
      that._y1 + that._k * (that._y2 - that._y0),
      that._x2 + that._k * (that._x1 - x6),
      that._y2 + that._k * (that._y1 - y5),
      that._x2,
      that._y2
    );
  }
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  Cardinal.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          point3(this, this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
          this._x1 = x6, this._y1 = y5;
          break;
        case 2:
          this._point = 3;
        // falls through
        default:
          point3(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var cardinal_default = (function custom13(tension) {
    function cardinal(context) {
      return new Cardinal(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom13(+tension2);
    };
    return cardinal;
  })(0);

  // node_modules/d3-shape/src/curve/cardinalClosed.js
  function CardinalClosed(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x6, this._y3 = y5;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x6, this._y4 = y5);
          break;
        case 2:
          this._point = 3;
          this._x5 = x6, this._y5 = y5;
          break;
        default:
          point3(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var cardinalClosed_default = (function custom14(tension) {
    function cardinal(context) {
      return new CardinalClosed(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom14(+tension2);
    };
    return cardinal;
  })(0);

  // node_modules/d3-shape/src/curve/cardinalOpen.js
  function CardinalOpen(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        // falls through
        default:
          point3(this, x6, y5);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var cardinalOpen_default = (function custom15(tension) {
    function cardinal(context) {
      return new CardinalOpen(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom15(+tension2);
    };
    return cardinal;
  })(0);

  // node_modules/d3-shape/src/curve/catmullRom.js
  function point4(that, x6, y5) {
    var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
    if (that._l01_a > epsilon8) {
      var a4 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x12 = (x12 * a4 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y12 = (y12 * a4 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > epsilon8) {
      var b10 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m4 = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x22 = (x22 * b10 + that._x1 * that._l23_2a - x6 * that._l12_2a) / m4;
      y22 = (y22 * b10 + that._y1 * that._l23_2a - y5 * that._l12_2a) / m4;
    }
    that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
  }
  function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRom.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      if (this._point) {
        var x23 = this._x2 - x6, y23 = this._y2 - y5;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        // falls through
        default:
          point4(this, x6, y5);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var catmullRom_default = (function custom16(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom16(+alpha2);
    };
    return catmullRom;
  })(0.5);

  // node_modules/d3-shape/src/curve/catmullRomClosed.js
  function CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      if (this._point) {
        var x23 = this._x2 - x6, y23 = this._y2 - y5;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x6, this._y3 = y5;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x6, this._y4 = y5);
          break;
        case 2:
          this._point = 3;
          this._x5 = x6, this._y5 = y5;
          break;
        default:
          point4(this, x6, y5);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var catmullRomClosed_default = (function custom17(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom17(+alpha2);
    };
    return catmullRom;
  })(0.5);

  // node_modules/d3-shape/src/curve/catmullRomOpen.js
  function CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      if (this._point) {
        var x23 = this._x2 - x6, y23 = this._y2 - y5;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        // falls through
        default:
          point4(this, x6, y5);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
    }
  };
  var catmullRomOpen_default = (function custom18(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom18(+alpha2);
    };
    return catmullRom;
  })(0.5);

  // node_modules/d3-shape/src/curve/linearClosed.js
  function LinearClosed(context) {
    this._context = context;
  }
  LinearClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._point) this._context.closePath();
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      if (this._point) this._context.lineTo(x6, y5);
      else this._point = 1, this._context.moveTo(x6, y5);
    }
  };
  function linearClosed_default(context) {
    return new LinearClosed(context);
  }

  // node_modules/d3-shape/src/curve/monotone.js
  function sign2(x6) {
    return x6 < 0 ? -1 : 1;
  }
  function slope3(that, x22, y22) {
    var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p3 = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p3)) || 0;
  }
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  function point5(that, t03, t13) {
    var x06 = that._x0, y06 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x06) / 3;
    that._context.bezierCurveTo(x06 + dx, y06 + dx * t03, x12 - dx, y12 - dx * t13, x12, y12);
  }
  function MonotoneX(context) {
    this._context = context;
  }
  MonotoneX.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          point5(this, this._t0, slope2(this, this._t0));
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      var t13 = NaN;
      x6 = +x6, y5 = +y5;
      if (x6 === this._x1 && y5 === this._y1) return;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          point5(this, slope2(this, t13 = slope3(this, x6, y5)), t13);
          break;
        default:
          point5(this, this._t0, t13 = slope3(this, x6, y5));
          break;
      }
      this._x0 = this._x1, this._x1 = x6;
      this._y0 = this._y1, this._y1 = y5;
      this._t0 = t13;
    }
  };
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x6, y5) {
    MonotoneX.prototype.point.call(this, y5, x6);
  };
  function ReflectContext(context) {
    this._context = context;
  }
  ReflectContext.prototype = {
    moveTo: function(x6, y5) {
      this._context.moveTo(y5, x6);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(x6, y5) {
      this._context.lineTo(y5, x6);
    },
    bezierCurveTo: function(x12, y12, x22, y22, x6, y5) {
      this._context.bezierCurveTo(y12, x12, y22, x22, y5, x6);
    }
  };
  function monotoneX(context) {
    return new MonotoneX(context);
  }
  function monotoneY(context) {
    return new MonotoneY(context);
  }

  // node_modules/d3-shape/src/curve/natural.js
  function Natural(context) {
    this._context = context;
  }
  Natural.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [];
      this._y = [];
    },
    lineEnd: function() {
      var x6 = this._x, y5 = this._y, n = x6.length;
      if (n) {
        this._line ? this._context.lineTo(x6[0], y5[0]) : this._context.moveTo(x6[0], y5[0]);
        if (n === 2) {
          this._context.lineTo(x6[1], y5[1]);
        } else {
          var px = controlPoints(x6), py = controlPoints(y5);
          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x6[i1], y5[i1]);
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1) this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function(x6, y5) {
      this._x.push(+x6);
      this._y.push(+y5);
    }
  };
  function controlPoints(x6) {
    var i, n = x6.length - 1, m4, a4 = new Array(n), b10 = new Array(n), r = new Array(n);
    a4[0] = 0, b10[0] = 2, r[0] = x6[0] + 2 * x6[1];
    for (i = 1; i < n - 1; ++i) a4[i] = 1, b10[i] = 4, r[i] = 4 * x6[i] + 2 * x6[i + 1];
    a4[n - 1] = 2, b10[n - 1] = 7, r[n - 1] = 8 * x6[n - 1] + x6[n];
    for (i = 1; i < n; ++i) m4 = a4[i] / b10[i - 1], b10[i] -= m4, r[i] -= m4 * r[i - 1];
    a4[n - 1] = r[n - 1] / b10[n - 1];
    for (i = n - 2; i >= 0; --i) a4[i] = (r[i] - a4[i + 1]) / b10[i];
    b10[n - 1] = (x6[n] + a4[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i) b10[i] = 2 * x6[i + 1] - a4[i + 1];
    return [a4, b10];
  }
  function natural_default(context) {
    return new Natural(context);
  }

  // node_modules/d3-shape/src/curve/step.js
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  Step.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
      if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
      if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x6, y5) {
      x6 = +x6, y5 = +y5;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x6, y5) : this._context.moveTo(x6, y5);
          break;
        case 1:
          this._point = 2;
        // falls through
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y5);
            this._context.lineTo(x6, y5);
          } else {
            var x12 = this._x * (1 - this._t) + x6 * this._t;
            this._context.lineTo(x12, this._y);
            this._context.lineTo(x12, y5);
          }
          break;
        }
      }
      this._x = x6, this._y = y5;
    }
  };
  function step_default(context) {
    return new Step(context, 0.5);
  }
  function stepBefore(context) {
    return new Step(context, 0);
  }
  function stepAfter(context) {
    return new Step(context, 1);
  }

  // node_modules/d3-shape/src/offset/none.js
  function none_default(series, order) {
    if (!((n = series.length) > 1)) return;
    for (var i = 1, j3, s0, s1 = series[order[0]], n, m4 = s1.length; i < n; ++i) {
      s0 = s1, s1 = series[order[i]];
      for (j3 = 0; j3 < m4; ++j3) {
        s1[j3][1] += s1[j3][0] = isNaN(s0[j3][1]) ? s0[j3][0] : s0[j3][1];
      }
    }
  }

  // node_modules/d3-shape/src/order/none.js
  function none_default2(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0) o[n] = n;
    return o;
  }

  // node_modules/d3-shape/src/stack.js
  function stackValue(d, key) {
    return d[key];
  }
  function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
  }
  function stack_default() {
    var keys = constant_default10([]), order = none_default2, offset = none_default, value = stackValue;
    function stack(data) {
      var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j3 = -1, oz;
      for (const d of data) {
        for (i = 0, ++j3; i < n; ++i) {
          (sz[i][j3] = [0, +value(d, sz[i].key, j3, data)]).data = d;
        }
      }
      for (i = 0, oz = array_default3(order(sz)); i < n; ++i) {
        sz[oz[i]].index = i;
      }
      offset(sz, oz);
      return sz;
    }
    stack.keys = function(_3) {
      return arguments.length ? (keys = typeof _3 === "function" ? _3 : constant_default10(Array.from(_3)), stack) : keys;
    };
    stack.value = function(_3) {
      return arguments.length ? (value = typeof _3 === "function" ? _3 : constant_default10(+_3), stack) : value;
    };
    stack.order = function(_3) {
      return arguments.length ? (order = _3 == null ? none_default2 : typeof _3 === "function" ? _3 : constant_default10(Array.from(_3)), stack) : order;
    };
    stack.offset = function(_3) {
      return arguments.length ? (offset = _3 == null ? none_default : _3, stack) : offset;
    };
    return stack;
  }

  // node_modules/d3-shape/src/offset/expand.js
  function expand_default(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, n, j3 = 0, m4 = series[0].length, y5; j3 < m4; ++j3) {
      for (y5 = i = 0; i < n; ++i) y5 += series[i][j3][1] || 0;
      if (y5) for (i = 0; i < n; ++i) series[i][j3][1] /= y5;
    }
    none_default(series, order);
  }

  // node_modules/d3-shape/src/offset/diverging.js
  function diverging_default(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var i, j3 = 0, d, dy, yp, yn2, n, m4 = series[order[0]].length; j3 < m4; ++j3) {
      for (yp = yn2 = 0, i = 0; i < n; ++i) {
        if ((dy = (d = series[order[i]][j3])[1] - d[0]) > 0) {
          d[0] = yp, d[1] = yp += dy;
        } else if (dy < 0) {
          d[1] = yn2, d[0] = yn2 += dy;
        } else {
          d[0] = 0, d[1] = dy;
        }
      }
    }
  }

  // node_modules/d3-shape/src/offset/silhouette.js
  function silhouette_default(series, order) {
    if (!((n = series.length) > 0)) return;
    for (var j3 = 0, s0 = series[order[0]], n, m4 = s0.length; j3 < m4; ++j3) {
      for (var i = 0, y5 = 0; i < n; ++i) y5 += series[i][j3][1] || 0;
      s0[j3][1] += s0[j3][0] = -y5 / 2;
    }
    none_default(series, order);
  }

  // node_modules/d3-shape/src/offset/wiggle.js
  function wiggle_default(series, order) {
    if (!((n = series.length) > 0) || !((m4 = (s0 = series[order[0]]).length) > 0)) return;
    for (var y5 = 0, j3 = 1, s0, m4, n; j3 < m4; ++j3) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]], sij0 = si[j3][1] || 0, sij1 = si[j3 - 1][1] || 0, s3 = (sij0 - sij1) / 2;
        for (var k4 = 0; k4 < i; ++k4) {
          var sk = series[order[k4]], skj0 = sk[j3][1] || 0, skj1 = sk[j3 - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        s1 += sij0, s2 += s3 * sij0;
      }
      s0[j3 - 1][1] += s0[j3 - 1][0] = y5;
      if (s1) y5 -= s2 / s1;
    }
    s0[j3 - 1][1] += s0[j3 - 1][0] = y5;
    none_default(series, order);
  }

  // node_modules/d3-shape/src/order/appearance.js
  function appearance_default(series) {
    var peaks = series.map(peak);
    return none_default2(series).sort(function(a4, b10) {
      return peaks[a4] - peaks[b10];
    });
  }
  function peak(series) {
    var i = -1, j3 = 0, n = series.length, vi, vj = -Infinity;
    while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j3 = i;
    return j3;
  }

  // node_modules/d3-shape/src/order/ascending.js
  function ascending_default2(series) {
    var sums = series.map(sum3);
    return none_default2(series).sort(function(a4, b10) {
      return sums[a4] - sums[b10];
    });
  }
  function sum3(series) {
    var s2 = 0, i = -1, n = series.length, v4;
    while (++i < n) if (v4 = +series[i][1]) s2 += v4;
    return s2;
  }

  // node_modules/d3-shape/src/order/descending.js
  function descending_default2(series) {
    return ascending_default2(series).reverse();
  }

  // node_modules/d3-shape/src/order/insideOut.js
  function insideOut_default(series) {
    var n = series.length, i, j3, sums = series.map(sum3), order = appearance_default(series), top2 = 0, bottom2 = 0, tops = [], bottoms = [];
    for (i = 0; i < n; ++i) {
      j3 = order[i];
      if (top2 < bottom2) {
        top2 += sums[j3];
        tops.push(j3);
      } else {
        bottom2 += sums[j3];
        bottoms.push(j3);
      }
    }
    return bottoms.reverse().concat(tops);
  }

  // node_modules/d3-shape/src/order/reverse.js
  function reverse_default(series) {
    return none_default2(series).reverse();
  }

  // node_modules/d3-zoom/src/constant.js
  var constant_default11 = (x6) => () => x6;

  // node_modules/d3-zoom/src/event.js
  function ZoomEvent(type2, {
    sourceEvent,
    target,
    transform: transform2,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type2, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform2, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }

  // node_modules/d3-zoom/src/transform.js
  function Transform(k4, x6, y5) {
    this.k = k4;
    this.x = x6;
    this.y = y5;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k4) {
      return k4 === 1 ? this : new Transform(this.k * k4, this.x, this.y);
    },
    translate: function(x6, y5) {
      return x6 === 0 & y5 === 0 ? this : new Transform(this.k, this.x + this.k * x6, this.y + this.k * y5);
    },
    apply: function(point6) {
      return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
    },
    applyX: function(x6) {
      return x6 * this.k + this.x;
    },
    applyY: function(y5) {
      return y5 * this.k + this.y;
    },
    invert: function(location2) {
      return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
    },
    invertX: function(x6) {
      return (x6 - this.x) / this.k;
    },
    invertY: function(y5) {
      return (y5 - this.y) / this.k;
    },
    rescaleX: function(x6) {
      return x6.copy().domain(x6.range().map(this.invertX, this).map(x6.invert, x6));
    },
    rescaleY: function(y5) {
      return y5.copy().domain(y5.range().map(this.invertY, this).map(y5.invert, y5));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity5 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom) if (!(node = node.parentNode)) return identity5;
    return node.__zoom;
  }

  // node_modules/d3-zoom/src/noevent.js
  function nopropagation3(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default3(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-zoom/src/zoom.js
  function defaultFilter3(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent2() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity5;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable3() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform2, extent2, translateExtent) {
    var dx0 = transform2.invertX(extent2[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent2[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent2[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent2[1][1]) - translateExtent[1][1];
    return transform2.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }
  function zoom_default2() {
    var filter3 = defaultFilter3, extent2 = defaultExtent2, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable3, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform2, point6, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule(collection, transform2, point6, event);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
        });
      }
    };
    zoom.scaleBy = function(selection2, k4, p3, event) {
      zoom.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
        return k0 * k1;
      }, p3, event);
    };
    zoom.scaleTo = function(selection2, k4, p3, event) {
      zoom.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t03 = this.__zoom, p02 = p3 == null ? centroid(e) : typeof p3 === "function" ? p3.apply(this, arguments) : p3, p1 = t03.invert(p02), k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
        return constrain(translate(scale2(t03, k1), p02, p1), e, translateExtent);
      }, p3, event);
    };
    zoom.translateBy = function(selection2, x6, y5, event) {
      zoom.transform(selection2, function() {
        return constrain(this.__zoom.translate(
          typeof x6 === "function" ? x6.apply(this, arguments) : x6,
          typeof y5 === "function" ? y5.apply(this, arguments) : y5
        ), extent2.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom.translateTo = function(selection2, x6, y5, p3, event) {
      zoom.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t = this.__zoom, p02 = p3 == null ? centroid(e) : typeof p3 === "function" ? p3.apply(this, arguments) : p3;
        return constrain(identity5.translate(p02[0], p02[1]).scale(t.k).translate(
          typeof x6 === "function" ? -x6.apply(this, arguments) : -x6,
          typeof y5 === "function" ? -y5.apply(this, arguments) : -y5
        ), e, translateExtent);
      }, p3, event);
    };
    function scale2(transform2, k4) {
      k4 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k4));
      return k4 === transform2.k ? transform2 : new Transform(k4, transform2.x, transform2.y);
    }
    function translate(transform2, p02, p1) {
      var x6 = p02[0] - p1[0] * transform2.k, y5 = p02[1] - p1[1] * transform2.k;
      return x6 === transform2.x && y5 === transform2.y ? transform2 : new Transform(transform2.k, x6, y5);
    }
    function centroid(extent3) {
      return [(+extent3[0][0] + +extent3[1][0]) / 2, (+extent3[0][1] + +extent3[1][1]) / 2];
    }
    function schedule(transition2, transform2, point6, event) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g = gesture(that, args).event(event), e = extent2.apply(that, args), p3 = point6 == null ? centroid(e) : typeof point6 === "function" ? point6.apply(that, args) : point6, w3 = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a4 = that.__zoom, b10 = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a4.invert(p3).concat(w3 / a4.k), b10.invert(p3).concat(w3 / b10.k));
        return function(t) {
          if (t === 1) t = b10;
          else {
            var l2 = i(t), k4 = w3 / l2[2];
            t = new Transform(k4, p3[0] - l2[0] * k4, p3[1] - l2[1] * k4);
          }
          g.zoom(null, t);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent2.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function(event) {
        if (event) this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform2) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
        this.that.__zoom = transform2;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type2) {
        var d = select_default2(this.that).datum();
        listeners.call(
          type2,
          this.that,
          new ZoomEvent(type2, {
            sourceEvent: this.sourceEvent,
            target: zoom,
            type: type2,
            transform: this.that.__zoom,
            dispatch: listeners
          }),
          d
        );
      }
    };
    function wheeled(event, ...args) {
      if (!filter3.apply(this, arguments)) return;
      var g = gesture(this, args).event(event), t = this.__zoom, k4 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p3 = pointer_default(event);
      if (g.wheel) {
        if (g.mouse[0][0] !== p3[0] || g.mouse[0][1] !== p3[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p3);
        }
        clearTimeout(g.wheel);
      } else if (t.k === k4) return;
      else {
        g.mouse = [p3, t.invert(p3)];
        interrupt_default(this);
        g.start();
      }
      noevent_default3(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale2(t, k4), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter3.apply(this, arguments)) return;
      var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v4 = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p3 = pointer_default(event, currentTarget), x06 = event.clientX, y06 = event.clientY;
      nodrag_default(event.view);
      nopropagation3(event);
      g.mouse = [p3, this.__zoom.invert(p3)];
      interrupt_default(this);
      g.start();
      function mousemoved(event2) {
        noevent_default3(event2);
        if (!g.moved) {
          var dx = event2.clientX - x06, dy = event2.clientY - y06;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }
      function mouseupped(event2) {
        v4.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g.moved);
        noevent_default3(event2);
        g.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter3.apply(this, arguments)) return;
      var t03 = this.__zoom, p02 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t03.invert(p02), k1 = t03.k * (event.shiftKey ? 0.5 : 2), t13 = constrain(translate(scale2(t03, k1), p02, p1), extent2.apply(this, args), translateExtent);
      noevent_default3(event);
      if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t13, p02, event);
      else select_default2(this).call(zoom.transform, t13, p02, event);
    }
    function touchstarted(event, ...args) {
      if (!filter3.apply(this, arguments)) return;
      var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p3;
      nopropagation3(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p3 = pointer_default(t, this);
        p3 = [p3, this.__zoom.invert(p3), t.identifier];
        if (!g.touch0) g.touch0 = p3, started = true, g.taps = 1 + !!touchstarting;
        else if (!g.touch1 && g.touch0[2] !== p3[2]) g.touch1 = p3, g.taps = 0;
      }
      if (touchstarting) touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g.taps < 2) touchfirst = p3[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
        interrupt_default(this);
        g.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p3, l2;
      noevent_default3(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p3 = pointer_default(t, this);
        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p3;
        else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p3;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p02 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale2(t, Math.sqrt(dp / dl));
        p3 = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
        l2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0) p3 = g.touch0[0], l2 = g.touch0[1];
      else return;
      g.zoom("touch", constrain(translate(t, p3, l2), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
      nopropagation3(event);
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
      }
      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else {
        g.end();
        if (g.taps === 2) {
          t = pointer_default(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p3 = select_default2(this).on("dblclick.zoom");
            if (p3) p3.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function(_3) {
      return arguments.length ? (wheelDelta = typeof _3 === "function" ? _3 : constant_default11(+_3), zoom) : wheelDelta;
    };
    zoom.filter = function(_3) {
      return arguments.length ? (filter3 = typeof _3 === "function" ? _3 : constant_default11(!!_3), zoom) : filter3;
    };
    zoom.touchable = function(_3) {
      return arguments.length ? (touchable = typeof _3 === "function" ? _3 : constant_default11(!!_3), zoom) : touchable;
    };
    zoom.extent = function(_3) {
      return arguments.length ? (extent2 = typeof _3 === "function" ? _3 : constant_default11([[+_3[0][0], +_3[0][1]], [+_3[1][0], +_3[1][1]]]), zoom) : extent2;
    };
    zoom.scaleExtent = function(_3) {
      return arguments.length ? (scaleExtent[0] = +_3[0], scaleExtent[1] = +_3[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function(_3) {
      return arguments.length ? (translateExtent[0][0] = +_3[0][0], translateExtent[1][0] = +_3[1][0], translateExtent[0][1] = +_3[0][1], translateExtent[1][1] = +_3[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function(_3) {
      return arguments.length ? (constrain = _3, zoom) : constrain;
    };
    zoom.duration = function(_3) {
      return arguments.length ? (duration = +_3, zoom) : duration;
    };
    zoom.interpolate = function(_3) {
      return arguments.length ? (interpolate = _3, zoom) : interpolate;
    };
    zoom.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_3) {
      return arguments.length ? (clickDistance2 = (_3 = +_3) * _3, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_3) {
      return arguments.length ? (tapDistance = +_3, zoom) : tapDistance;
    };
    return zoom;
  }

  // lib/d3.ts
  var d3_default = src_exports;

  // lib/label/add-html-label.ts
  function addHtmlLabel(root3, node) {
    const fo = root3.append("foreignObject").attr("width", "100000");
    const div = fo.append("xhtml:div");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    const label = node.label;
    switch (typeof label) {
      case "function":
        div.insert(label);
        break;
      case "object":
        div.insert(() => label);
        break;
      default:
        div.html(label);
    }
    applyStyle(div, node.labelStyle);
    div.style("display", "inline-block");
    div.style("white-space", "nowrap");
    const client = div.node().getBoundingClientRect();
    fo.attr("width", client.width).attr("height", client.height);
    return fo;
  }

  // lib/label/add-svg-label.ts
  function addSVGLabel(root3, node) {
    const domNode = root3;
    domNode.node().appendChild(node.label);
    applyStyle(domNode, node.labelStyle);
    return domNode;
  }

  // lib/label/add-text-label.ts
  function addTextLabel(root3, node) {
    const domNode = root3.append("text");
    const lines = processEscapeSequences(node.label).split("\n");
    for (let i = 0; i < lines.length; i++) {
      domNode.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(lines[i]);
    }
    applyStyle(domNode, node.labelStyle);
    return domNode;
  }
  function processEscapeSequences(text) {
    let newText = "";
    let escaped = false;
    let ch;
    for (let i = 0; i < text.length; ++i) {
      ch = text[i];
      if (escaped) {
        switch (ch) {
          case "n":
            newText += "\n";
            break;
          default:
            newText += ch;
        }
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else {
        newText += ch;
      }
    }
    return newText;
  }

  // lib/label/add-label.ts
  function addLabel(root3, node, location2) {
    const label = node.label;
    const labelSvg = root3.append("g");
    if (node.labelType === "svg") {
      addSVGLabel(labelSvg, node);
    } else if (typeof label !== "string" || node.labelType === "html") {
      addHtmlLabel(labelSvg, node);
    } else {
      addTextLabel(labelSvg, node);
    }
    const labelBBox = labelSvg.node().getBBox();
    let y5;
    switch (location2) {
      case "top":
        y5 = -node.height / 2;
        break;
      case "bottom":
        y5 = node.height / 2 - labelBBox.height;
        break;
      default:
        y5 = -labelBBox.height / 2;
    }
    labelSvg.attr(
      "transform",
      "translate(" + -labelBBox.width / 2 + "," + y5 + ")"
    );
    return labelSvg;
  }

  // lib/create-clusters.ts
  function createClusters(selection2, g) {
    const clusters = g.nodes().filter((v4) => isSubgraph(g, v4));
    let svgClusters = selection2.selectAll("g.cluster").data(clusters, (v4) => v4);
    svgClusters.selectAll("*").remove();
    svgClusters.enter().append("g").attr("class", "cluster").attr("id", (v4) => {
      const node = g.node(v4);
      return node.id;
    }).style("opacity", 0);
    svgClusters = selection2.selectAll("g.cluster");
    applyTransition(svgClusters, g).style("opacity", 1);
    svgClusters.each(function(v4) {
      const node = g.node(v4);
      const thisGroup = d3_default.select(this);
      d3_default.select(this).append("rect");
      const labelGroup = thisGroup.append("g").attr("class", "label");
      addLabel(labelGroup, node, node.clusterLabelPos);
    });
    svgClusters.selectAll("rect").each(function(c6) {
      const node = g.node(c6);
      const domCluster = d3_default.select(this);
      applyStyle(domCluster, node.style);
    });
    let exitSelection;
    if (svgClusters.exit) {
      exitSelection = svgClusters.exit();
    } else {
      exitSelection = svgClusters.selectAll(null);
    }
    applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgClusters;
  }

  // lib/create-edge-labels.ts
  function createEdgeLabels(selection2, g) {
    let svgEdgeLabels = selection2.selectAll("g.edgeLabel").data(g.edges(), (e) => edgeToId(e)).classed("update", true);
    svgEdgeLabels.exit().remove();
    svgEdgeLabels.enter().append("g").classed("edgeLabel", true).style("opacity", 0);
    svgEdgeLabels = selection2.selectAll("g.edgeLabel");
    svgEdgeLabels.each(function(e) {
      const root3 = d3_default.select(this);
      root3.select(".label").remove();
      const edge = g.edge(e);
      const label = addLabel(root3, g.edge(e), "center").classed("label", true);
      const bbox = label.node().getBBox();
      if (edge.labelId) {
        label.attr("id", edge.labelId);
      }
      if (!hasOwn(edge, "width")) {
        edge.width = bbox.width;
      }
      if (!hasOwn(edge, "height")) {
        edge.height = bbox.height;
      }
    });
    let exitSelection;
    if (svgEdgeLabels.exit) {
      exitSelection = svgEdgeLabels.exit();
    } else {
      exitSelection = svgEdgeLabels.selectAll(null);
    }
    applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgEdgeLabels;
  }

  // lib/create-edge-paths.ts
  function createEdgePaths(selection2, g, arrows2) {
    const previousPaths = selection2.selectAll("g.edgePath").data(g.edges(), (e) => edgeToId(e)).classed("update", true);
    const newPaths = enter(previousPaths, g);
    exit(previousPaths, g);
    const svgPaths = previousPaths.merge !== void 0 ? previousPaths.merge(newPaths) : previousPaths;
    applyTransition(svgPaths, g).style("opacity", 1);
    svgPaths.each(function(e) {
      const domEdge = d3_default.select(this);
      const edge = g.edge(e);
      edge.elem = this;
      if (edge.id) {
        domEdge.attr("id", edge.id);
      }
      applyClass(
        domEdge,
        edge["class"],
        (domEdge.classed("update") ? "update " : "") + "edgePath"
      );
    });
    svgPaths.selectAll("path.path").each(function(e) {
      const edge = g.edge(e);
      edge.arrowheadId = lodash_default.uniqueId("arrowhead");
      const domEdge = d3_default.select(this).attr("marker-end", () => {
        return "url(" + makeFragmentRef(location.href, edge.arrowheadId) + ")";
      }).style("fill", "none");
      applyTransition(domEdge, g).attr("d", (e3) => calcPoints(g, e3));
      applyStyle(domEdge, edge.style);
    });
    svgPaths.selectAll("defs *").remove();
    svgPaths.selectAll("defs").each(function(e) {
      const edge = g.edge(e);
      const arrowhead = arrows2[edge.arrowhead];
      arrowhead(d3_default.select(this), edge.arrowheadId, edge, "arrowhead");
    });
    return svgPaths;
  }
  function makeFragmentRef(url, fragmentId) {
    const baseUrl = url.split("#")[0];
    return baseUrl + "#" + fragmentId;
  }
  function calcPoints(g, e) {
    const edge = g.edge(e);
    const tail = g.node(e.v);
    const head = g.node(e.w);
    const points = edge.points.slice(1, edge.points.length - 1);
    points.unshift(intersectNode(tail, points[0]));
    points.push(intersectNode(head, points[points.length - 1]));
    return createLine(edge, points);
  }
  function createLine(edge, points) {
    const line = (d3_default.line || d3_default.svg.line)().x((d) => d.x).y((d) => d.y);
    (line.curve || line.interpolate)(edge.curve);
    return line(points);
  }
  function getCoords(elem) {
    const bbox = elem.getBBox();
    const owner = elem.ownerSVGElement;
    const ownerMatrix = owner && owner.getScreenCTM();
    const elemMatrix = elem.getScreenCTM();
    if (!ownerMatrix || !elemMatrix) {
      return { x: bbox.width / 2, y: bbox.height / 2 };
    }
    const matrix = ownerMatrix.inverse().multiply(elemMatrix).translate(bbox.width / 2, bbox.height / 2);
    return { x: matrix.e, y: matrix.f };
  }
  function enter(svgPaths, g) {
    const svgPathsEnter = svgPaths.enter().append("g").attr("class", "edgePath").style("opacity", 0);
    svgPathsEnter.append("path").attr("class", "path").attr("d", (e) => {
      const edge = g.edge(e);
      const sourceElem = g.node(e.v).elem;
      const points = lodash_default.range(edge.points.length).map(() => getCoords(sourceElem));
      return createLine(edge, points);
    });
    svgPathsEnter.append("defs");
    return svgPathsEnter;
  }
  function exit(svgPaths, g) {
    const svgPathExit = svgPaths.exit();
    applyTransition(svgPathExit, g).style("opacity", 0).remove();
  }

  // lib/create-nodes.ts
  function createNodes(selection2, g, shapes2) {
    const simpleNodes = g.nodes().filter((v4) => !isSubgraph(g, v4));
    let svgNodes = selection2.selectAll("g.node").data(simpleNodes, (v4) => v4).classed("update", true);
    svgNodes.exit().remove();
    svgNodes.enter().append("g").attr("class", "node").style("opacity", 0);
    svgNodes = selection2.selectAll("g.node");
    svgNodes.each(function(v4) {
      const node = g.node(v4);
      const thisGroup = d3_default.select(this);
      applyClass(
        thisGroup,
        node["class"],
        (thisGroup.classed("update") ? "update " : "") + "node"
      );
      thisGroup.select("g.label").remove();
      const labelGroup = thisGroup.append("g").attr("class", "label");
      const labelDom = addLabel(labelGroup, node);
      const shape = shapes2[node.shape];
      const bbox = lodash_default.pick(labelDom.node().getBBox(), "width", "height");
      node.elem = this;
      if (node.id) {
        thisGroup.attr("id", node.id);
      }
      if (node.labelId) {
        labelGroup.attr("id", node.labelId);
      }
      if (lodash_default.has(node, "width")) {
        bbox.width = node.width;
      }
      if (lodash_default.has(node, "height")) {
        bbox.height = node.height;
      }
      bbox.width += node.paddingLeft + node.paddingRight;
      bbox.height += node.paddingTop + node.paddingBottom;
      labelGroup.attr("transform", "translate(" + (node.paddingLeft - node.paddingRight) / 2 + "," + (node.paddingTop - node.paddingBottom) / 2 + ")");
      const root3 = d3_default.select(this);
      root3.select(".label-container").remove();
      const shapeSvg = shape(root3, bbox, node).classed("label-container", true);
      applyStyle(shapeSvg, node.style);
      const shapeBBox = shapeSvg.node().getBBox();
      node.width = shapeBBox.width;
      node.height = shapeBBox.height;
    });
    let exitSelection;
    if (svgNodes.exit) {
      exitSelection = svgNodes.exit();
    } else {
      exitSelection = svgNodes.selectAll(null);
    }
    applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgNodes;
  }

  // lib/position-clusters.ts
  function positionClusters(selection2, g) {
    const created = selection2.filter(function() {
      return !d3_default.select(this).classed("update");
    });
    function translate(v4) {
      const node = g.node(v4);
      return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    applyTransition(selection2, g).style("opacity", 1).attr("transform", translate);
    applyTransition(created.selectAll("rect"), g).attr("width", function(v4) {
      return g.node(v4).width;
    }).attr("height", function(v4) {
      return g.node(v4).height;
    }).attr("x", function(v4) {
      const node = g.node(v4);
      return -node.width / 2;
    }).attr("y", function(v4) {
      const node = g.node(v4);
      return -node.height / 2;
    });
  }

  // lib/position-edge-labels.ts
  function positionEdgeLabels(selection2, g) {
    const created = selection2.filter(function() {
      return !d3_default.select(this).classed("update");
    });
    function translate(e) {
      const edge = g.edge(e);
      return lodash_default.has(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
    }
    created.attr("transform", translate);
    applyTransition(selection2, g).style("opacity", 1).attr("transform", translate);
  }

  // lib/position-nodes.ts
  function positionNodes(selection2, g) {
    const created = selection2.filter(function() {
      return !d3_default.select(this).classed("update");
    });
    function translate(v4) {
      const node = g.node(v4);
      return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    applyTransition(selection2, g).style("opacity", 1).attr("transform", translate);
  }

  // lib/shapes.ts
  var rect = (parent, bbox, node) => {
    const shapeSvg = parent.insert("rect", ":first-child").attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("width", bbox.width).attr("height", bbox.height);
    node.intersect = (point6) => {
      return intersectRect(node, point6);
    };
    return shapeSvg;
  };
  var ellipse = (parent, bbox, node) => {
    const rx = bbox.width / 2;
    const ry = bbox.height / 2;
    const shapeSvg = parent.insert("ellipse", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("rx", rx).attr("ry", ry);
    node.intersect = (point6) => {
      return intersectEllipse(node, rx, ry, point6);
    };
    return shapeSvg;
  };
  var circle = (parent, bbox, node) => {
    const r = Math.max(bbox.width, bbox.height) / 2;
    const shapeSvg = parent.insert("circle", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("r", r);
    node.intersect = (point6) => {
      return intersectCircle(node, r, point6);
    };
    return shapeSvg;
  };
  var diamond = (parent, bbox, node) => {
    const w3 = bbox.width * Math.SQRT2 / 2;
    const h = bbox.height * Math.SQRT2 / 2;
    const points = [
      { x: 0, y: -h },
      { x: -w3, y: 0 },
      { x: 0, y: h },
      { x: w3, y: 0 }
    ];
    const shapeSvg = parent.insert("polygon", ":first-child").attr("points", points.map((p3) => p3.x + "," + p3.y).join(" "));
    node.intersect = (p3) => {
      return intersectPolygon(node, points, p3);
    };
    return shapeSvg;
  };
  var shapes = {
    rect,
    ellipse,
    circle,
    diamond
  };
  var shapes_default = shapes;

  // lib/render.ts
  var layout = dagre_default.layout;
  function render() {
    let createNodes2 = createNodes;
    let createClusters2 = createClusters;
    let createEdgeLabels2 = createEdgeLabels;
    let createEdgePaths2 = createEdgePaths;
    const positionNodes2 = positionNodes;
    const positionEdgeLabels2 = positionEdgeLabels;
    const positionClusters2 = positionClusters;
    let shapes2 = shapes_default;
    let arrows2 = arrows_default;
    const fn2 = ((svg2, g) => {
      preProcessGraph(g);
      const outputGroup = createOrSelectGroup(svg2, "output");
      const clustersGroup = createOrSelectGroup(outputGroup, "clusters");
      const edgePathsGroup = createOrSelectGroup(outputGroup, "edgePaths");
      const edgeLabels = createEdgeLabels2(createOrSelectGroup(outputGroup, "edgeLabels"), g);
      const nodes = createNodes2(createOrSelectGroup(outputGroup, "nodes"), g, shapes2);
      layout(g);
      positionNodes2(nodes, g);
      positionEdgeLabels2(edgeLabels, g);
      createEdgePaths2(edgePathsGroup, g, arrows2);
      const clusters = createClusters2(clustersGroup, g);
      positionClusters2(clusters, g);
      postProcessGraph(g);
    });
    function createNodesAccessor(value) {
      if (!arguments.length) return createNodes2;
      if (value) {
        createNodes2 = value;
      }
      return fn2;
    }
    fn2.createNodes = createNodesAccessor;
    function createClustersAccessor(value) {
      if (!arguments.length) return createClusters2;
      if (value) {
        createClusters2 = value;
      }
      return fn2;
    }
    fn2.createClusters = createClustersAccessor;
    function createEdgeLabelsAccessor(value) {
      if (!arguments.length) return createEdgeLabels2;
      if (value) {
        createEdgeLabels2 = value;
      }
      return fn2;
    }
    fn2.createEdgeLabels = createEdgeLabelsAccessor;
    function createEdgePathsAccessor(value) {
      if (!arguments.length) return createEdgePaths2;
      if (value) {
        createEdgePaths2 = value;
      }
      return fn2;
    }
    fn2.createEdgePaths = createEdgePathsAccessor;
    function shapesAccessor(value) {
      if (!arguments.length) return shapes2;
      if (value) {
        shapes2 = value;
      }
      return fn2;
    }
    fn2.shapes = shapesAccessor;
    function arrowsAccessor(value) {
      if (!arguments.length) return arrows2;
      if (value) {
        arrows2 = value;
      }
      return fn2;
    }
    fn2.arrows = arrowsAccessor;
    return fn2;
  }
  var NODE_DEFAULT_ATTRS = {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    rx: 0,
    ry: 0,
    shape: "rect"
  };
  var EDGE_DEFAULT_ATTRS = {
    arrowhead: "normal",
    curve: d3_default.curveLinear
  };
  function preProcessGraph(g) {
    g.nodes().forEach((v4) => {
      const node = g.node(v4);
      if (!hasOwn(node, "label") && !g.children(v4).length) {
        node.label = v4;
      }
      if (hasOwn(node, "paddingX")) {
        lodash_default.defaults(node, {
          paddingLeft: node.paddingX,
          paddingRight: node.paddingX
        });
      }
      if (hasOwn(node, "paddingY")) {
        lodash_default.defaults(node, {
          paddingTop: node.paddingY,
          paddingBottom: node.paddingY
        });
      }
      if (hasOwn(node, "padding")) {
        lodash_default.defaults(node, {
          paddingLeft: node.padding,
          paddingRight: node.padding,
          paddingTop: node.padding,
          paddingBottom: node.padding
        });
      }
      lodash_default.defaults(node, NODE_DEFAULT_ATTRS);
      lodash_default.each(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], (k4) => {
        node[k4] = Number(node[k4]);
      });
      if (hasOwn(node, "width")) {
        node._prevWidth = node.width;
      }
      if (hasOwn(node, "height")) {
        node._prevHeight = node.height;
      }
    });
    g.edges().forEach((e) => {
      const edge = g.edge(e);
      if (!hasOwn(edge, "label")) {
        edge.label = "";
      }
      lodash_default.defaults(edge, EDGE_DEFAULT_ATTRS);
    });
  }
  function postProcessGraph(g) {
    lodash_default.each(g.nodes(), (v4) => {
      const node = g.node(v4);
      if (hasOwn(node, "_prevWidth")) {
        node.width = node._prevWidth;
      } else {
        delete node.width;
      }
      if (hasOwn(node, "_prevHeight")) {
        node.height = node._prevHeight;
      } else {
        delete node.height;
      }
      delete node._prevWidth;
      delete node._prevHeight;
    });
  }
  function createOrSelectGroup(root3, name) {
    let selection2 = root3.select("g." + name);
    if (selection2.empty()) {
      selection2 = root3.append("g").attr("class", name);
    }
    return selection2;
  }

  // lib/version.ts
  var version = "0.6.5-pre";
  var version_default = version;

  // index.ts
  var dagreD3 = {
    graphlib: graphlib_default,
    dagre: dagre_default,
    intersect: intersect_default,
    render,
    util: util_exports,
    version: version_default
  };
  var index_default = dagreD3;
  return __toCommonJS(index_exports);
})();
/*! For license information please see dagre-d3.js.LEGAL.txt */
//# sourceMappingURL=dagre-d3.js.map
