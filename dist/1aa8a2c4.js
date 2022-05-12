// nc: 0.2.2
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a as openBlock, b as createElementBlock, e as createBaseVNode, M as events, d as defineComponent, w as ref, r as reactive, c as computed, D as watchEffect, o as onBeforeUnmount, h as normalizeStyle, u as unref, O as withDirectives, Q as vShow, S as createTextVNode, t as toDisplayString, f as createBlock, g as resolveDynamicComponent, I as INTERSECTIONS, R as READY } from "./caac094b.js";
import { u as useEcho } from "./47f77b24.js";
import { u as useI18n } from "./dc66880a.js";
import { _ as _export_sfc } from "./841cd136.js";
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
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{color:initial;background-color:initial;line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.vast__ima{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.vast__ima>div{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.vast__ima iframe{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.vast__remaining-text{position:absolute;bottom:0;left:0;margin:1.625rem;font-size:.875rem;color:#fff;pointer-events:none;mix-blend-mode:difference}.vast__volume-button{position:absolute;right:0;bottom:0;width:1.875rem;height:1.875rem;margin:1.625rem;color:#fff;mix-blend-mode:difference}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const imaElement = ref();
    const formattedRemaining = ref("");
    let imaPlayer = null;
    const status = reactive({
      isInitialized: false,
      isMute: true
    });
    const { t } = useI18n();
    const { properties, styles, ripple } = useEcho(props.ncId);
    const chest = reactive({
      remainingText: computed(() => properties.value.vastRemainingText),
      root: computed(() => properties.value.vast)
    });
    const remainingPrefix = computed(() => {
      var _a;
      return ((_a = chest.remainingText) == null ? void 0 : _a.content) || t("ad");
    });
    watchEffect((cleanup) => {
      const element = imaElement.value;
      if (!element)
        return;
      const player = imaPlayer = new IMAPlayer();
      player.setConfig({
        element,
        url: chest.root.url,
        xml: chest.root.xml
      });
      player.once("init", () => {
        status.isMute = true;
        status.isInitialized = true;
        ripple.listen(INTERSECTIONS, (entry) => {
          if (entry.isIntersecting) {
            player.play();
          } else {
            player.pause();
          }
        });
        ripple.send(READY);
      });
      player.on("remaining", (remaining) => {
        formattedRemaining.value = new Date(remaining * 1e3).toISOString().slice(14, 19);
      });
      player.on("restart", () => {
        status.isMute = true;
      });
      player.on("mute", () => {
        status.isMute = true;
      });
      player.on("unmute", () => {
        status.isMute = false;
      });
      cleanup(() => {
        player.destroy();
      });
    });
    const handleToggleMute = () => {
      const { isMute } = status;
      isMute ? imaPlayer == null ? void 0 : imaPlayer.unmute() : imaPlayer == null ? void 0 : imaPlayer.mute();
    };
    onBeforeUnmount(() => {
      imaPlayer == null ? void 0 : imaPlayer.destroy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vast",
        style: normalizeStyle(unref(styles).vast)
      }, [
        createBaseVNode("div", {
          ref_key: "imaElement",
          ref: imaElement,
          role: "link",
          class: "vast__ima",
          style: normalizeStyle(unref(styles).vastIma)
        }, null, 4),
        withDirectives(createBaseVNode("span", {
          class: "vast__remaining-text",
          style: normalizeStyle(unref(styles).vastRemainingText)
        }, [
          createTextVNode(toDisplayString(unref(remainingPrefix)) + " ", 1),
          createBaseVNode("time", null, "(" + toDisplayString(formattedRemaining.value) + ")", 1)
        ], 4), [
          [vShow, unref(status).isInitialized]
        ]),
        withDirectives(createBaseVNode("button", {
          type: "button",
          class: "vast__volume-button",
          onClick: handleToggleMute,
          style: normalizeStyle(unref(styles).vastVolumeButton)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(status).isMute ? unref(SoundOff) : unref(SoundHigh))))
        ], 4), [
          [vShow, unref(status).isInitialized]
        ])
      ], 4);
    };
  }
});
var Vast_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Vast_ce as default };
