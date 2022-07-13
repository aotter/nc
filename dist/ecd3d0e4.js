// nc: 0.3.0
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a as openBlock, b as createElementBlock, e as createBaseVNode, H as events, d as defineComponent, m as ref, y as reactive, c as computed, B as watchEffect, o as onUnmounted, n as normalizeStyle, u as unref, J as withDirectives, K as vShow, L as createTextVNode, t as toDisplayString, g as createBlock, r as resolveDynamicComponent, h as useCssVars, I as INTERSECTION, R as READY } from "./9ac4870b.js";
import { u as useI18n } from "./af843f4b.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
const _hoisted_1$1 = {
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2 14v-4a1 1 0 0 1 1-1h2.697a1 1 0 0 0 .555-.168l4.193-2.796A1 1 0 0 1 12 6.87V17.13a1 1 0 0 1-1.555.832l-4.193-2.795A1 1 0 0 0 5.697 15H3a1 1 0 0 1-1-1Z",
  stroke: "currentColor"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M16.5 7.5S18 9 18 11.5s-1.5 4-1.5 4M19.5 4.5S22 7 22 11.5s-2.5 7-2.5 7",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
var SoundHigh = { render: render$1 };
const _hoisted_1 = {
  "stroke-width": "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "m17 14 2-2m2-2-2 2m0 0-2-2m2 2 2 2",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 14v-4a1 1 0 0 1 1-1h2.697a1 1 0 0 0 .555-.168l4.193-2.796A1 1 0 0 1 13 6.87V17.13a1 1 0 0 1-1.555.832l-4.193-2.795A1 1 0 0 0 6.697 15H4a1 1 0 0 1-1-1Z",
  stroke: "currentColor"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
var SoundOff = { render };
var loadScript = function(src) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};
var imaSdkSrc = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
var pendingPromise = null;
var promiseFinished = function() {
  pendingPromise = null;
};
var loadImaSdk = function() {
  var w = window;
  if (w.google && w.google.ima) {
    return Promise.resolve(w.google.ima);
  }
  if (pendingPromise) {
    return pendingPromise;
  }
  pendingPromise = loadScript(imaSdkSrc).then(function() {
    return w.google.ima;
  });
  pendingPromise.then(promiseFinished).catch(promiseFinished);
  return pendingPromise;
};
class IMA extends events.exports.EventEmitter {
  constructor() {
    super();
    __publicField(this, "config");
    __publicField(this, "ima");
    __publicField(this, "adDisplayContainer");
    __publicField(this, "adsLoader");
    __publicField(this, "adsRequest");
    __publicField(this, "adsManager");
    loadImaSdk().then((ima) => {
      this.ima = ima;
      this.initIMA();
    });
  }
  initIMA() {
    const { element, url, xml } = this.config;
    const locale = window.navigator.language.replace("-", "_").toLowerCase() || "en";
    this.ima.settings.setLocale(locale);
    this.adDisplayContainer = new this.ima.AdDisplayContainer(element);
    this.adDisplayContainer.initialize();
    this.adsLoader = new this.ima.AdsLoader(this.adDisplayContainer);
    this.adsRequest = new this.ima.AdsRequest();
    url && (this.adsRequest.adTagUrl = url);
    xml && (this.adsRequest.adsResponse = xml);
    this.adsRequest.linearAdSlotWidth = 1920;
    this.adsRequest.linearAdSlotHeight = 1080;
    this.adsLoader.requestAds(this.adsRequest);
    this.adsLoader.addEventListener(this.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError, false);
    this.adsLoader.addEventListener(this.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded.bind(this), false);
  }
  _onAdsManagerLoaded(adsManagerLoadedEvent) {
    this.adsManager = adsManagerLoadedEvent.getAdsManager({
      currentTime: 0,
      duration: 0
    }, {
      enablePreloading: true,
      uiElements: []
    });
    this.adsManager.addEventListener(this.ima.AdErrorEvent.Type.AD_ERROR, this._onAdError.bind(this));
    this.adsManager.addEventListener(this.ima.AdEvent.Type.ALL_ADS_COMPLETED, this._onAllAdsCompleted.bind(this));
    this.adsManager.addEventListener(this.ima.AdEvent.Type.LOADED, this._onLoaded.bind(this));
    this.adsManager.init(1920, 1080, this.ima.ViewMode.NORMAL);
    this.adsManager.setVolume(0);
  }
  _onLoaded() {
    this.emit("init");
  }
  _onAllAdsCompleted() {
    this.adsLoader.requestAds(this.adsRequest);
    this.emit("restart");
  }
  _onAdError(adErrorEvent) {
    var _a, _b;
    console.log(adErrorEvent.getError());
    (_b = (_a = this.adsManager) == null ? void 0 : _a.destroy) == null ? void 0 : _b.call(_a);
  }
}
class IMAPlayer extends IMA {
  constructor() {
    super();
    __publicField(this, "remaining", 0);
    __publicField(this, "started", false);
    __publicField(this, "playing", false);
    __publicField(this, "_observer");
    __publicField(this, "_animationFrame");
    this.on("init", () => {
      this.playing && this.adsManager.start();
    });
  }
  setConfig(config) {
    this.config = config;
  }
  play() {
    if (this.playing)
      return;
    this.playing = true;
    if (this.started) {
      this.adsManager.resume();
    } else {
      this.started = true;
      this.adsManager.start();
    }
    this._watchRemaining();
  }
  pause() {
    if (!this.playing)
      return;
    this.playing = false;
    this.adsManager.pause();
    this._stopWatchRemaining();
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_b = (_a = this.adDisplayContainer) == null ? void 0 : _a.destroy) == null ? void 0 : _b.call(_a);
    (_d = (_c = this.adsManager) == null ? void 0 : _c.destroy) == null ? void 0 : _d.call(_c);
    (_f = (_e = this.adsLoader) == null ? void 0 : _e.destroy) == null ? void 0 : _f.call(_e);
    (_h = (_g = this._observer) == null ? void 0 : _g.disconnect) == null ? void 0 : _h.call(_g);
    this.removeAllListeners();
    this._stopWatchRemaining();
  }
  mute() {
    this.adsManager.setVolume(0);
    this.emit("mute");
  }
  unmute() {
    this.adsManager.setVolume(1);
    this.emit("unmute");
  }
  _watchRemaining() {
    if (this._animationFrame) {
      this._stopWatchRemaining();
    }
    this._animationFrame = requestAnimationFrame(() => {
      const newRemaining = this.adsManager.getRemainingTime() > 0 ? this.adsManager.getRemainingTime() : 0;
      this.remaining = newRemaining;
      this.emit("remaining", this.remaining);
      this._watchRemaining();
    });
  }
  _stopWatchRemaining() {
    cancelAnimationFrame(this._animationFrame);
  }
}
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{aspect-ratio:var(--5a8bb146)/var(--5a8bb108);display:grid;grid-template-rows:repeat(var(--0985063c),1fr);grid-template-columns:repeat(var(--982d1ed4),1fr);gap:var(--166043c2)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--5a8bb146) / var(--5a8bb108) * 100%);content:""}.root :after{display:block;clear:both;content:""}}.player{grid-row:var(--575c933b)/calc(var(--575c933b) + var(--100d9006) + 1);grid-column:var(--227657fa)/calc(var(--227657fa) + var(--dfcfe9c4) + 1);position:relative}.player>div{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.player iframe{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.remaining{grid-row:var(--d7945756)/calc(var(--d7945756) + var(--9529ba54) + 1);grid-column:var(--227657fa)/calc(var(--227657fa) + var(--fef630d6) + 1);display:grid;grid-template-columns:-webkit-max-content;grid-template-columns:max-content;grid-auto-flow:column;gap:.25rem;align-self:center;justify-self:center;font-size:.875rem;color:#fff;mix-blend-mode:difference}.volume{grid-row:var(--d7945756)/calc(var(--d7945756) + var(--9529ba54) + 1);grid-column:var(--2c54a777)/calc(var(--2c54a777) + var(--fef630d6) + 1);display:grid;align-self:center;justify-self:center;width:24pt;height:24pt;color:#fff;mix-blend-mode:difference}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Vast.ce",
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
      return {
        "5a8bb146": unref(type).dimension[0],
        "5a8bb108": unref(type).dimension[1],
        "0985063c": ((_b = (_a = unref(properties).root) == null ? void 0 : _a.grid) == null ? void 0 : _b.rows) || 12,
        "982d1ed4": ((_d = (_c = unref(properties).root) == null ? void 0 : _c.grid) == null ? void 0 : _d.columns) || 12,
        "166043c2": ((_f = (_e = unref(properties).root) == null ? void 0 : _e.grid) == null ? void 0 : _f.gap) || 0,
        "227657fa": ((_i = (_h = (_g = unref(properties).player) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[0]) || 1,
        "575c933b": ((_l = (_k = (_j = unref(properties).player) == null ? void 0 : _j.position) == null ? void 0 : _k.coordinate) == null ? void 0 : _l[1]) || 1,
        "dfcfe9c4": ((_o = (_n = (_m = unref(properties).player) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[0]) || 12,
        "100d9006": ((_r = (_q = (_p = unref(properties).player) == null ? void 0 : _p.position) == null ? void 0 : _q.dimension) == null ? void 0 : _r[1]) || 12,
        "d7945756": ((_u = (_t = (_s = unref(properties).player) == null ? void 0 : _s.position) == null ? void 0 : _t.coordinate) == null ? void 0 : _u[1]) || 10,
        "fef630d6": ((_x = (_w = (_v = unref(properties).player) == null ? void 0 : _v.position) == null ? void 0 : _w.dimension) == null ? void 0 : _x[0]) || 2,
        "9529ba54": ((_A = (_z = (_y = unref(properties).player) == null ? void 0 : _y.position) == null ? void 0 : _z.dimension) == null ? void 0 : _A[1]) || 2,
        "2c54a777": ((_D = (_C = (_B = unref(properties).player) == null ? void 0 : _B.position) == null ? void 0 : _C.coordinate) == null ? void 0 : _D[0]) || 11
      };
    });
    const rootElement = ref();
    const playerElement = ref();
    const formattedRemaining = ref("");
    let imaPlayer = void 0;
    const status = reactive({
      isInitialized: false,
      isMute: true
    });
    const { t } = useI18n();
    const { ripple } = useRipple(props.ncId);
    const { type, properties } = useType(props.ncId);
    const vast = reactive({
      remaining: computed(() => properties.value.remaining),
      root: computed(() => properties.value.root),
      rootSettings: computed(() => properties.value.root.settings)
    });
    const remainingPrefix = computed(() => vast.remaining || t("ad"));
    const handleCleanup = () => {
      imaPlayer == null ? void 0 : imaPlayer.destroy();
    };
    watchEffect((onCleanup) => {
      if (!playerElement.value)
        return;
      imaPlayer = new IMAPlayer();
      imaPlayer.setConfig({
        element: playerElement.value,
        url: vast.rootSettings.url,
        xml: vast.rootSettings.xml
      });
      imaPlayer.once("init", () => {
        status.isMute = true;
        status.isInitialized = true;
        ripple.listen(INTERSECTION, (entry) => {
          if (entry.isIntersecting) {
            imaPlayer == null ? void 0 : imaPlayer.play();
          } else {
            imaPlayer == null ? void 0 : imaPlayer.pause();
          }
        }, {
          element: rootElement.value
        });
        ripple.send(READY, {});
      });
      imaPlayer.on("remaining", (remaining) => {
        formattedRemaining.value = new Date(remaining * 1e3).toISOString().slice(14, 19);
      });
      imaPlayer.on("restart", () => {
        status.isMute = true;
      });
      imaPlayer.on("mute", () => {
        status.isMute = true;
      });
      imaPlayer.on("unmute", () => {
        status.isMute = false;
      });
      onCleanup(() => {
        handleCleanup();
      });
    });
    const handleToggleMute = () => {
      const { isMute } = status;
      isMute ? imaPlayer == null ? void 0 : imaPlayer.unmute() : imaPlayer == null ? void 0 : imaPlayer.mute();
    };
    onUnmounted(() => {
      handleCleanup();
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", {
        class: "root",
        ref_key: "rootElement",
        ref: rootElement,
        style: normalizeStyle(unref(properties).root.style)
      }, [
        createBaseVNode("div", {
          ref_key: "playerElement",
          ref: playerElement,
          role: "link",
          class: "player",
          style: normalizeStyle((_a = unref(properties).player) == null ? void 0 : _a.style)
        }, null, 4),
        withDirectives(createBaseVNode("p", {
          class: "remaining",
          style: normalizeStyle((_b = unref(properties).remaining) == null ? void 0 : _b.style)
        }, [
          createTextVNode(toDisplayString(unref(remainingPrefix)) + " ", 1),
          createBaseVNode("time", null, "(" + toDisplayString(formattedRemaining.value) + ")", 1)
        ], 4), [
          [vShow, status.isInitialized]
        ]),
        withDirectives((openBlock(), createBlock(resolveDynamicComponent(status.isMute ? unref(SoundOff) : unref(SoundHigh)), {
          role: "button",
          class: "volume",
          style: normalizeStyle(unref(properties).volume),
          onClick: handleToggleMute
        }, null, 8, ["style"])), [
          [vShow, status.isInitialized]
        ])
      ], 4);
    };
  }
});
var Vast_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Vast_ce as default };
