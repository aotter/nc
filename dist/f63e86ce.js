// nc: 0.3.0
import { d as defineComponent, m as ref, y as reactive, c as computed, k as onMounted, I as INTERSECTION, B as watchEffect, o as onUnmounted, a as openBlock, b as createElementBlock, g as createBlock, r as resolveDynamicComponent, u as unref, z as NC_PICTURE_TAG, f as createVNode, D as withCtx, E as TransitionGroup, n as normalizeStyle, h as useCssVars, R as READY, F as Fragment, G as renderList, C as CLICK } from "./9ac4870b.js";
import { n as noop } from "./69d29d6e.js";
import { g as gsapWithCSS } from "./406a7049.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{aspect-ratio:var(--50e080c1)/var(--50e080e0);display:grid;grid-template-rows:repeat(var(--6cf9b4d5),1fr);grid-template-columns:repeat(var(--321c4fc3),1fr);gap:var(--599fdc75)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--50e080c1) / var(--50e080e0) * 100%);content:""}.root :after{display:block;clear:both;content:""}}.items{grid-row:var(--f202029c)/calc(var(--f202029c) + var(--279ba374) + 1);grid-column:var(--5218c371)/calc(var(--5218c371) + var(--808b12d6) + 1);display:grid;grid-template-rows:repeat(var(--ce3b51cc),1fr);grid-template-columns:repeat(var(--674c05d8),1fr);gap:var(--7b5dfc0f);padding:0 var(--7b5dfc0f)}.item{display:grid;place-content:center}.picture{grid-row:var(--7dead570)/calc(var(--7dead570) + var(--1e877a32) + 1);grid-column:var(--49049a2f)/calc(var(--49049a2f) + var(--92b3655a) + 1);display:grid;place-content:center}.flip-move{transition:transform var(--duration-slow) var(--ease-default)}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Chest.ce",
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
      return {
        "50e080c1": unref(type).dimension[0],
        "50e080e0": unref(type).dimension[1],
        "6cf9b4d5": ((_a = unref(properties).root.grid) == null ? void 0 : _a.rows) || 12,
        "321c4fc3": ((_b = unref(properties).root.grid) == null ? void 0 : _b.columns) || 12,
        "599fdc75": ((_c = unref(properties).root.grid) == null ? void 0 : _c.gap) || 0,
        "5218c371": ((_f = (_e = (_d = unref(properties).items) == null ? void 0 : _d.position) == null ? void 0 : _e.coordinate) == null ? void 0 : _f[0]) || 1,
        "f202029c": ((_i = (_h = (_g = unref(properties).items) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[1]) || 1,
        "808b12d6": ((_l = (_k = (_j = unref(properties).items) == null ? void 0 : _j.position) == null ? void 0 : _k.dimension) == null ? void 0 : _l[0]) || 12,
        "279ba374": ((_o = (_n = (_m = unref(properties).items) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[1]) || 12,
        "ce3b51cc": ((_q = (_p = unref(properties).items) == null ? void 0 : _p.grid) == null ? void 0 : _q.rows) || 1,
        "674c05d8": ((_s = (_r = unref(properties).items) == null ? void 0 : _r.grid) == null ? void 0 : _s.columns) || 3,
        "7b5dfc0f": ((_u = (_t = unref(properties).items) == null ? void 0 : _t.grid) == null ? void 0 : _u.gap) || "1rem",
        "49049a2f": ((_x = (_w = (_v = unref(properties).picture) == null ? void 0 : _v.position) == null ? void 0 : _w.coordinate) == null ? void 0 : _x[0]) || 1,
        "7dead570": ((_A = (_z = (_y = unref(properties).picture) == null ? void 0 : _y.position) == null ? void 0 : _z.coordinate) == null ? void 0 : _A[1]) || 1,
        "92b3655a": ((_D = (_C = (_B = unref(properties).picture) == null ? void 0 : _B.position) == null ? void 0 : _C.dimension) == null ? void 0 : _D[0]) || 12,
        "1e877a32": ((_G = (_F = (_E = unref(properties).picture) == null ? void 0 : _E.position) == null ? void 0 : _F.dimension) == null ? void 0 : _G[1]) || 12
      };
    });
    const itemActiveKey = ref();
    const shuffledChestItems = ref([]);
    const rootElement = ref();
    let intervalTween = void 0;
    let eventRestoreDelayCall = void 0;
    let eventDelayCall = void 0;
    const { properties, type } = useType(props.ncId);
    const { ripple } = useRipple(props.ncId);
    const chest = reactive({
      picture: computed(() => properties.value.picture.picture),
      rootOptionsEvents: computed(() => {
        var _a, _b;
        return (_b = (_a = properties.value.root) == null ? void 0 : _a.options) == null ? void 0 : _b.events;
      }),
      rootOptionsShuffle: computed(() => {
        var _a, _b;
        return (_b = (_a = properties.value.root) == null ? void 0 : _a.options) == null ? void 0 : _b.shuffle;
      }),
      rootSettingsItems: computed(() => properties.value.root.settings.items)
    });
    const eventRestore = computed(() => {
      var _a;
      return ((_a = chest.rootOptionsEvents) == null ? void 0 : _a.restore) || 5e3;
    });
    const eventDelay = computed(() => {
      var _a;
      return ((_a = chest.rootOptionsEvents) == null ? void 0 : _a.delay) || 500;
    });
    const chestItemsWithKey = computed(() => chest.rootSettingsItems.map((item, index) => ({
      ...item,
      key: index
    })));
    onMounted(() => {
      ripple.listen(INTERSECTION, noop, {
        element: rootElement.value,
        impressions: properties.value.root.events.impressions
      });
    });
    const shuffleChestItems = () => {
      shuffledChestItems.value = gsapWithCSS.utils.shuffle([...chestItemsWithKey.value]);
    };
    const startShuffleChestItems = (interval) => {
      intervalTween = gsapWithCSS.set(shuffleChestItems, {
        onRepeat: shuffleChestItems,
        repeat: -1,
        repeatDelay: interval / 1e3
      });
    };
    const handleCleanupTween = () => {
      eventRestoreDelayCall == null ? void 0 : eventRestoreDelayCall.kill();
      intervalTween == null ? void 0 : intervalTween.kill();
      eventDelayCall == null ? void 0 : eventDelayCall.kill();
    };
    watchEffect((onCleanup) => {
      var _a;
      if ((_a = chest.rootOptionsShuffle) == null ? void 0 : _a.enable) {
        shuffleChestItems();
        if (chest.rootOptionsShuffle.interval) {
          startShuffleChestItems(chest.rootOptionsShuffle.interval);
        }
      }
      shuffleChestItems();
      onCleanup(() => {
        handleCleanupTween();
      });
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
    const handleLoad = (loadedSrc) => {
      ripple.send(READY, { loadedSrc });
    };
    onUnmounted(() => {
      handleCleanupTween();
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: "root",
        ref_key: "rootElement",
        ref: rootElement,
        style: normalizeStyle(unref(properties).root.style)
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_TAG)), {
          class: "picture",
          ".sources": chest.picture.sources,
          ".src": chest.picture.src,
          ".onLoad": handleLoad
        }, null, 8, [".sources", ".src"])),
        createVNode(TransitionGroup, {
          tag: "div",
          name: "flip",
          class: "items",
          styles: (_a = unref(properties).items) == null ? void 0 : _a.style
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(shuffledChestItems.value, ({ key, active, idle, events, style }) => {
              return openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_TAG)), {
                key,
                class: "item",
                style: normalizeStyle(style),
                role: "link",
                onClick: ($event) => handleClickChestItem(key, events.click),
                ".sources": itemActiveKey.value === key ? active.picture.sources : idle.picture.sources,
                ".src": itemActiveKey.value === key ? active.picture.src : idle.picture.src
              }, null, 8, ["style", "onClick", ".sources", ".src"]);
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
