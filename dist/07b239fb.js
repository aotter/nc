// nc: 0.2.3
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { d as defineComponent, r as reactive, c as computed, w as ref, P as POSITION, D as watchEffect, o as onBeforeUnmount, a as openBlock, b as createElementBlock, e as createBaseVNode, f as createBlock, u as unref, g as resolveDynamicComponent, B as NC_PICTURE_ELEMENT, h as normalizeStyle, F as Fragment, H as renderList, R as READY, C as CLICK, J as createCommentVNode, t as toDisplayString, K as nextTick } from "./e271f0b0.js";
import { g as gsapWithCSS } from "./406a7049.js";
import { u as useEcho } from "./c390ef47.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{color:initial;background-color:initial;line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.parallax{height:100%}.parallax__layer{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-content:center;width:100%;height:100%}.parallax__picture{display:grid;place-content:center;width:100%;height:100%}\n';
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const { ripple, properties, styles } = useEcho(props.ncId);
    const parallax = reactive({
      layers: computed(() => properties.value.parallaxLayers),
      picture: computed(() => properties.value.parallaxPicture),
      root: computed(() => properties.value.parallax)
    });
    const pictureElement = ref();
    const layersElements = ref([]);
    const combineAnimationElement = computed(() => {
      return [
        {
          animation: parallax.picture.animation,
          element: pictureElement.value
        },
        ...parallax.layers.map((layer, index) => ({
          animation: layer.animation,
          element: layersElements.value[index]
        }))
      ];
    });
    const initialTimeline = () => {
      const timeline2 = gsapWithCSS.timeline({
        defaults: {
          duration: 0,
          ease: "none"
        },
        paused: true
      }).set({}, {}, 100);
      return timeline2;
    };
    let timeline = initialTimeline();
    ripple.listen(POSITION, ({ positionRatio }) => {
      timeline.progress(positionRatio);
    });
    const cleanupTween = () => {
      timeline.kill();
      parallax.layers.forEach((layer) => {
        gsapWithCSS.killTweensOf(layer);
      });
    };
    watchEffect((cleanup) => {
      cleanupTween();
      timeline = initialTimeline();
      nextTick(() => {
        combineAnimationElement.value.forEach((layer, index, layers) => {
          var _a, _b, _c, _d;
          const { animation, element } = layer;
          if (!animation)
            return;
          const animationKeys = Object.keys(animation);
          const hasTo = animationKeys.includes("to");
          const hasFrom = animationKeys.includes("from");
          const hasSet = animationKeys.includes("set");
          const hasFromTo = hasTo && hasFrom;
          const method = hasFromTo ? "fromTo" : hasSet ? "set" : hasFrom ? "from" : "to";
          const {
            from = {},
            to = {},
            set = {},
            start = 0,
            end = 100,
            target = "current"
          } = animation;
          const targetElement = target === "current" ? element : target === "previous" ? layers[--index].element : layers[++index].element;
          if (!targetElement)
            return;
          const duration = end - start;
          switch (method) {
            case "to":
              timeline.add(gsapWithCSS.to(targetElement, __spreadProps(__spreadValues({}, to), {
                duration
              })), start);
              break;
            case "from":
              timeline.add(gsapWithCSS.from(targetElement, __spreadProps(__spreadValues({}, from), {
                duration
              })), start);
              break;
            case "fromTo":
              timeline.add(gsapWithCSS.fromTo(targetElement, __spreadValues({}, from), __spreadProps(__spreadValues({}, to), {
                duration
              })), start);
              break;
            case "set": {
              const isPrevious = target === "previous";
              const { end: end2 } = (_b = (_a = layers[index - 1]) == null ? void 0 : _a.animation) != null ? _b : {};
              const { start: start2 } = (_d = (_c = layers[index + 1]) == null ? void 0 : _c.animation) != null ? _d : {};
              timeline.add(gsapWithCSS.set(targetElement, __spreadValues({}, set)), isPrevious ? end2 : start2);
              break;
            }
          }
        });
        timeline.progress(1);
      });
      cleanup(cleanupTween);
    });
    const handleLoad = (loadedSrc) => {
      ripple.send(READY, { loadedSrc });
    };
    const handleClickParallax = () => {
      var _a;
      ripple.send(CLICK, (_a = parallax.root) == null ? void 0 : _a.events.click);
    };
    onBeforeUnmount(cleanupTween);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "parallax",
        onClick: handleClickParallax
      }, [
        createBaseVNode("div", {
          ref_key: "pictureElement",
          ref: pictureElement,
          class: "parallax__picture",
          style: normalizeStyle(unref(styles).parallaxPicture)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
            ".sources": unref(parallax).picture.sources,
            ".src": unref(parallax).picture.src,
            ".onLoad": handleLoad
          }, null, 8, [".sources", ".src"]))
        ], 4),
        createBaseVNode("div", {
          class: "parallax__container",
          style: normalizeStyle(unref(styles).parallaxContainer)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(parallax).layers, (layer, index) => {
            return openBlock(), createElementBlock("div", {
              class: "parallax__layer",
              key: index,
              style: normalizeStyle(layer.styles),
              ref_for: true,
              ref: (ref2) => {
                layersElements.value.push(ref2);
              }
            }, [
              layer.picture && !layer.text ? (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
                key: 0,
                ".sources": layer.picture.sources,
                ".src": layer.picture.src
              }, null, 8, [".sources", ".src"])) : createCommentVNode("", true),
              !layer.picture && layer.text ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(layer.text.content), 1)) : createCommentVNode("", true)
            ], 4);
          }), 128))
        ], 4)
      ]);
    };
  }
});
var Parallax_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Parallax_ce as default };
