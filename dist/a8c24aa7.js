// nc: 0.1.2
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { s as events, o as openBlock, a as createElementBlock, b as createBaseVNode, d as defineComponent, k as ref, t as reactive, c as computed, l as onMounted, m as onBeforeUnmount, n as normalizeStyle, u as unref, x as withDirectives, y as vShow, z as createTextVNode, A as toDisplayString, e as createBlock, r as resolveDynamicComponent } from "./15d2cd5b.js";
import { u as useEcho } from "./e0b4fba8.js";
import { _ as _export_sfc } from "./841cd136.js";
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
    __publicField(this, "initialized", false);
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
    this.adsLoader.addEventListener(this.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, false);
    this.adsLoader.addEventListener(this.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
  }
  onAdsManagerLoaded(adsManagerLoadedEvent) {
    this.adsManager = adsManagerLoadedEvent.getAdsManager({
      currentTime: 0,
      duration: 0
    }, {
      uiElements: [],
      enablePreloading: true
    });
    this.adsManager.addEventListener(this.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this));
    this.adsManager.addEventListener(this.ima.AdEvent.Type.ALL_ADS_COMPLETED, this.onAllAdsCompleted.bind(this));
    this.adsManager.addEventListener(this.ima.AdEvent.Type.LOADED, this.onLoaded.bind(this));
    this.adsManager.init(1920, 1080, this.ima.ViewMode.NORMAL);
    this.adsManager.setVolume(0);
    this.initialized && this.adsManager.start();
  }
  onLoaded() {
    if (this.initialized)
      return;
    this.emit("ready");
    this.initialized = true;
  }
  onAllAdsCompleted() {
    this.adsLoader.requestAds(this.adsRequest);
  }
  onAdError(adErrorEvent) {
    var _a, _b;
    console.log(adErrorEvent.getError());
    (_b = (_a = this.adsManager) == null ? void 0 : _a.destroy) == null ? void 0 : _b.call(_a);
  }
}
class IMAPlayer extends IMA {
  constructor() {
    super();
    __publicField(this, "started", false);
    __publicField(this, "muted", true);
    __publicField(this, "remainingTime", 0);
    __publicField(this, "observer");
    __publicField(this, "animationFrame");
    this.once("ready", () => {
      this.watchIntersection();
      this.watchRemainingTime();
    });
  }
  setConfig(config) {
    this.config = config;
  }
  play() {
    try {
      if (this.started) {
        this.adsManager.resume();
      } else {
        this.adsManager.start();
        this.started = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
  pause() {
    this.adsManager.pause();
  }
  destroy() {
    this.adDisplayContainer.destroy();
    this.adsManager.destroy();
    this.adsLoader.destroy();
    this.observer.disconnect();
    this.removeAllListeners();
    cancelAnimationFrame(this.animationFrame);
  }
  toggleMuted() {
    this.muted = !this.muted;
    this.adsManager.setVolume(this.muted ? 0 : 1);
    this.emit("muted", this.muted);
  }
  watchIntersection() {
    const { element } = this.config;
    this.observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        this.play();
      } else {
        this.pause();
      }
    }, {
      threshold: [0.1, 0.9]
    });
    this.observer.observe(element);
  }
  watchRemainingTime() {
    this.animationFrame = requestAnimationFrame(() => {
      const newRemainingTime = this.adsManager.getRemainingTime();
      this.remainingTime = newRemainingTime;
      this.emit("progress", this.remainingTime);
      this.watchRemainingTime();
    });
  }
}
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-miterlimit": "10",
  "stroke-width": "32",
  d: "M416 432 64 80"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71zm8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3zM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256zm64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256z"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256z"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5$1);
}
var VolumeMute = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M232 416a23.88 23.88 0 0 1-14.2-4.68 8.27 8.27 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8.27 8.27 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336z"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8z"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432z"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_5);
}
var VolumeUnmute = { render };
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.vast{position:relative;width:100%;height:100%;overflow:hidden}.vast__ima{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:100%;height:100%}.vast__ima>div{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.vast__ima iframe{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.vast__remaining-text{position:absolute;bottom:0;left:0;z-index:2;margin:1rem;font-size:.8rem;color:#fff;pointer-events:none;mix-blend-mode:difference}.vast__volume-button{position:absolute;right:0;bottom:0;z-index:3;width:1.375rem;height:1.375rem;margin:1rem;font-size:.8rem;color:#fff;mix-blend-mode:difference}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const imaElement = ref();
    const formattedRemaining = ref("");
    const videoStatus = reactive({
      muted: true,
      ready: false
    });
    const { property, styles } = useEcho(props.ncId);
    const remainingPrefix = computed(() => {
      var _a;
      return ((_a = property.value.vastRemainingText) == null ? void 0 : _a.content) || "Ad";
    });
    const player = new IMAPlayer();
    onMounted(() => {
      if (!imaElement.value)
        return;
      player.setConfig({
        element: imaElement.value,
        url: property.value.vast.url,
        xml: property.value.vast.xml
      });
      player.once("ready", () => {
        videoStatus.ready = true;
      });
      player.on("progress", (remaining) => {
        formattedRemaining.value = new Date(remaining * 1e3).toISOString().slice(14, 19);
      });
      player.on("muted", (muted) => {
        videoStatus.muted = muted;
      });
    });
    const handleToggleMute = () => {
      player.toggleMuted();
    };
    onBeforeUnmount(() => {
      player.destroy();
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
          [vShow, unref(videoStatus).ready]
        ]),
        withDirectives(createBaseVNode("button", {
          type: "button",
          class: "vast__volume-button",
          onClick: handleToggleMute,
          style: normalizeStyle(unref(styles).vastVolumeButton)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(videoStatus).muted ? unref(VolumeMute) : unref(VolumeUnmute))))
        ], 4), [
          [vShow, unref(videoStatus).ready]
        ])
      ], 4);
    };
  }
});
var Vast_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Vast_ce as default };
