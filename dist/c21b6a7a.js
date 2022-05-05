// nc: 0.2.2
import { k as h, l as inject, m as onMounted, q as onUnmounted, s as isRef, w as ref, x as getCurrentInstance, c as computed, y as watch, F as Fragment, z as createVNode, T as Text } from "./1d4ee282.js";
/*!
  * @intlify/shared v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key) {
  return hasOwnProperty$1.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$1 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * @intlify/message-resolver v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isObject = (val) => val !== null && typeof val === "object";
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
/*!
  * @intlify/runtime v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: (key, modifier) => {
      const msg = message(key)(ctx);
      return isString(modifier) ? _modifier(modifier)(msg) : msg;
    },
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
/*!
  * @intlify/message-compiler v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
function createCompileError(code, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * @intlify/devtools-if v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * @intlify/core-base v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n2, version, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n: i18n2,
    version,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const VERSION$1 = "9.1.10";
const NOT_REOSLVED = -1;
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString(val) ? val.toUpperCase() : val,
    lower: (val) => isString(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _cid = 0;
function createCoreContext(options = {}) {
  const version = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) ? options.locale : "en-US";
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    datetimeFormats,
    numberFormats,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    onWarn,
    __datetimeFormatters,
    __numberFormatters,
    __meta
  };
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function getLocaleChain(ctx, fallback, start) {
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(start);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(start, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  getLocaleChain(ctx, fallback, locale);
}
function createCoreError(code) {
  return createCompileError(code, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [format, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  if (!resolvedMessage && (!(isString(format) || isMessageFunction(format)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
  if (occurred) {
    return format;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format) ? format.key : "",
      locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
      format: isString(format) ? format : isMessageFunction(format) ? format.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject$1(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn } = context;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages[targetLocale] || {};
    if ((format = resolveValue(message, key)) === null) {
      format = message[key];
    }
    if (isString(format) || isFunction(format))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format = missingRet;
    }
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format)) {
    const msg2 = format;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(14);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules } = context;
  const resolveMessage = (key) => {
    const val = resolveValue(message, key);
    if (isString(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
      throw createCoreError(16);
    }
    value = new Date(arg1);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(16);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(15);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(14);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    options = arg2;
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(14);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    options = arg2;
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.1.10";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
function createI18nError(code, ...args) {
  return createCompileError(code, null, void 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
const DatetimePartsSymbol = makeSymbol("__datetimeParts");
const NumberPartsSymbol = makeSymbol("__numberParts");
makeSymbol("__enableEmitter");
makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
const InejctWithOption = makeSymbol("__injectWithOption");
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach(({ locale: locale2, resource }) => {
      if (locale2) {
        ret[locale2] = ret[locale2] || {};
        deepCopy(resource, ret[locale2]);
      } else {
        deepCopy(resource, ret);
      }
    });
  }
  if (options.flatJson) {
    for (const key in ret) {
      if (hasOwn$1(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(20);
  }
  for (const key in src) {
    if (hasOwn$1(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
};
function createComposer(options = {}) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US");
  const _fallbackLocale = ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    return createCoreContext({
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      datetimeFormats: _datetimeFormats.value,
      numberFormats: _numberFormats.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
      __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
      __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
      __meta: { framework: "vue" }
    });
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(14);
    }
  }
  function t(...args) {
    return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$1(arg3)) {
      throw createI18nError(15);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) ? createVNode(Text, null, val, 0) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = translate(_context2, ...args);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [createVNode(Text, null, key, 0)], (val) => isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString(val) || isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return resolveValue(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = resolveValue(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    datetimeFormats,
    numberFormats,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    rt,
    d,
    n,
    te,
    tm,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [TransrateVNodeSymbol]: transrateVNode,
    [NumberPartsSymbol]: numberParts,
    [DatetimePartsSymbol]: datetimeParts,
    [SetPluralRulesSymbol]: setPluralRules,
    [InejctWithOption]: options.__injectWithOption
  };
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
const Translation = {
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n$1({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      return isString(props.tag) ? h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? h(props.tag, assignedAttrs, children) : h(Fragment, assignedAttrs, children);
    };
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    return slots.default ? slots.default() : [];
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject$1(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    return isString(props.tag) ? h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? h(props.tag, assignedAttrs, children) : h(Fragment, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n$1({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n2[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n$1({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n2[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const bind = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(22);
    }
    const composer = getComposer$2(i18n2, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = composer.t(...makeParams(parsedValue));
  };
  return {
    beforeMount: bind,
    beforeUpdate: bind
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(19, "path");
    }
    return value;
  } else {
    throw createI18nError(20);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n2, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  app.directive("t", vTDirective(i18n2));
}
function createI18n(options = {}) {
  const __globalInjection = !!options.globalInjection;
  const __instances = /* @__PURE__ */ new Map();
  const __global = createComposer(options);
  const symbol = makeSymbol("");
  const i18n2 = {
    get mode() {
      return "composition";
    },
    async install(app, ...options2) {
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
      if (__globalInjection) {
        injectGlobalFields(app, i18n2.global);
      }
      {
        apply(app, i18n2, ...options2);
      }
    },
    get global() {
      return __global;
    },
    __instances,
    __getInstance(component) {
      return __instances.get(component) || null;
    },
    __setInstance(component, instance) {
      __instances.set(component, instance);
    },
    __deleteInstance(component) {
      __instances.delete(component);
    }
  };
  return i18n2;
}
function useI18n$1(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(16);
  }
  if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(17);
  }
  const i18n2 = inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
  if (!i18n2) {
    throw createI18nError(22);
  }
  const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
  if (scope === "global") {
    let messages = isObject$1(options.messages) ? options.messages : {};
    if ("__i18nGlobal" in instance.type) {
      messages = getLocaleMessages(global2.locale.value, {
        messages,
        __i18n: instance.type.__i18nGlobal
      });
    }
    const locales = Object.keys(messages);
    if (locales.length) {
      locales.forEach((locale) => {
        global2.mergeLocaleMessage(locale, messages[locale]);
      });
    }
    if (isObject$1(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$1(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  if (i18n2.mode === "legacy") {
    throw createI18nError(18);
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const type = instance.type;
    const composerOptions = assign({}, options);
    if (type.__i18n) {
      composerOptions.__i18n = type.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      const vueI18n = i18nInternal.__getInstance(current);
      if (vueI18n != null) {
        composer = vueI18n.__composer;
      }
      if (useComponent && composer && !composer[InejctWithOption]) {
        composer = null;
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n2, target, composer) {
  onMounted(() => {
  }, target);
  onUnmounted(() => {
    i18n2.__deleteInstance(target);
  }, target);
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(22);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(22);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
var en = {
  "ad": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Ad"]);
  }
};
var zh = {
  "ad": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u5EE3\u544A"]);
  }
};
const getBrowserLocale = () => {
  const navigatorLocale = navigator.languages !== void 0 ? navigator.languages[0] : navigator.language;
  if (!navigatorLocale) {
    return void 0;
  }
  const trimmedLocale = navigatorLocale.trim().split("-")[0];
  return trimmedLocale;
};
const i18n = createI18n({
  fallbackLocale: "en",
  legacy: false,
  locale: getBrowserLocale(),
  messages: {
    en,
    zh
  }
});
const useI18n = (options) => {
  var _a;
  const { global: global2 } = i18n;
  const messages = (_a = options == null ? void 0 : options.messages) != null ? _a : {};
  const locales = Object.keys(messages);
  if (locales.length > 0) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  return global2;
};
export { useI18n as u };
