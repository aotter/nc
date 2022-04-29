// nc: 0.2.0
import { d as defineComponent, w as ref, r as reactive, c as computed, D as watchEffect, o as onBeforeUnmount, a as openBlock, b as createElementBlock, e as createBaseVNode, f as createBlock, u as unref, g as resolveDynamicComponent, B as NC_PICTURE_ELEMENT, z as createVNode, E as withCtx, G as TransitionGroup, h as normalizeStyle, i as useCssVars, R as READY, F as Fragment, H as renderList, C as CLICK } from "./1c5a78e2.js";
import { g as gsapWithCSS } from "./406a7049.js";
import { u as useEcho } from "./025901b0.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{color:initial;background-color:initial;line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.chest{height:100%}.chest__container{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);display:grid;grid-template-rows:repeat(var(--37e906e6),1fr);grid-template-columns:repeat(var(--3c83dbb0),1fr);grid-auto-flow:column;gap:var(--d31a97ae);place-content:center;padding:var(--d31a97ae)}.chest__container .flip-move{transition:transform .25s cubic-bezier(.7,0,.3,1)}.chest__item{display:grid;place-content:center}.chest__picture{display:grid;place-content:center;width:100%;height:100%}\n';
const _hoisted_1 = { class: "chest__picture" };
const _hoisted_2 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "d31a97ae": unref(gridGap),
      "37e906e6": unref(gridRows),
      "3c83dbb0": unref(gridColumns)
    }));
    const itemActiveKey = ref();
    const shuffledChestItems = ref([]);
    let intervalTween = void 0;
    let eventRestoreDelayCall = void 0;
    let eventDelayCall = void 0;
    const { property, ripple, styles } = useEcho(props.ncId);
    const chest = reactive({
      items: computed(() => property.value.chestItems),
      optionEvent: computed(() => {
        var _a, _b;
        return (_b = (_a = property.value.chest) == null ? void 0 : _a.option) == null ? void 0 : _b.event;
      }),
      optionGrid: computed(() => {
        var _a, _b;
        return (_b = (_a = property.value.chestContainer) == null ? void 0 : _a.option) == null ? void 0 : _b.grid;
      }),
      optionShuffle: computed(() => {
        var _a, _b;
        return (_b = (_a = property.value.chest) == null ? void 0 : _a.option) == null ? void 0 : _b.shuffle;
      }),
      picture: computed(() => property.value.chestPicture)
    });
    const gridColumns = computed(() => {
      var _a;
      return ((_a = chest.optionGrid) == null ? void 0 : _a.columns) || 3;
    });
    const gridGap = computed(() => {
      var _a;
      return ((_a = chest.optionGrid) == null ? void 0 : _a.gap) || "1rem";
    });
    const gridRows = computed(() => {
      var _a;
      return ((_a = chest.optionGrid) == null ? void 0 : _a.rows) || 1;
    });
    const eventRestore = computed(() => {
      var _a;
      return ((_a = chest.optionEvent) == null ? void 0 : _a.restore) || 5e3;
    });
    const eventDelay = computed(() => {
      var _a;
      return ((_a = chest.optionEvent) == null ? void 0 : _a.delay) || 500;
    });
    const shuffleChestItems = () => {
      shuffledChestItems.value = gsapWithCSS.utils.shuffle([...chest.items]);
    };
    const startShuffleChestItems = (interval) => {
      intervalTween = gsapWithCSS.set(shuffleChestItems, {
        onRepeat: shuffleChestItems,
        repeat: -1,
        repeatDelay: interval / 1e3
      });
    };
    const cleanupTween = () => {
      eventRestoreDelayCall == null ? void 0 : eventRestoreDelayCall.kill();
      intervalTween == null ? void 0 : intervalTween.kill();
      eventDelayCall == null ? void 0 : eventDelayCall.kill();
    };
    watchEffect((cleanup) => {
      var _a;
      cleanupTween();
      if ((_a = chest.optionShuffle) == null ? void 0 : _a.enable) {
        shuffleChestItems();
        if (chest.optionShuffle.interval) {
          startShuffleChestItems(chest.optionShuffle.interval);
        }
        return;
      }
      shuffleChestItems();
      cleanup(cleanupTween);
    });
    const handleClickChestItem = (key, event) => {
      eventDelayCall == null ? void 0 : eventDelayCall.kill();
      intervalTween == null ? void 0 : intervalTween.pause();
      eventRestoreDelayCall == null ? void 0 : eventRestoreDelayCall.kill();
      itemActiveKey.value = key;
      eventRestoreDelayCall = gsapWithCSS.delayedCall(eventRestore.value / 1e3, () => {
        itemActiveKey.value = void 0;
        intervalTween == null ? void 0 : intervalTween.resume();
      });
      eventDelayCall = gsapWithCSS.delayedCall(eventDelay.value / 1e3, () => {
        ripple.send(CLICK, event);
      });
    };
    const handleLoad = (src) => {
      ripple.send(READY, src);
    };
    onBeforeUnmount(cleanupTween);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chest",
        style: normalizeStyle(unref(styles).chest)
      }, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
            ".sources": unref(chest).picture.sources,
            ".src": unref(chest).picture.src,
            ".onLoad": handleLoad
          }, null, 8, [".sources", ".src"]))
        ]),
        createVNode(TransitionGroup, {
          tag: "div",
          name: "flip",
          class: "chest__container",
          styles: unref(styles).chestContainer
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(shuffledChestItems.value, ({
              key,
              activePicture,
              inactivePicture,
              event,
              styles: styles2
            }) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "chest__item",
                style: normalizeStyle(styles2),
                onClick: ($event) => handleClickChestItem(key, event.click)
              }, [
                createBaseVNode("div", null, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
                    ".sources": itemActiveKey.value === key ? activePicture.sources : inactivePicture.sources,
                    ".src": itemActiveKey.value === key ? activePicture.src : inactivePicture.src
                  }, null, 8, [".sources", ".src"]))
                ])
              ], 12, _hoisted_2);
            }), 128))
          ]),
          _: 1
        }, 8, ["styles"])
      ], 4);
    };
  }
});
var Chest_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Chest_ce as default };
