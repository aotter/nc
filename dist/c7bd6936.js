// nc: 0.3.0
import { d as defineComponent, m as ref, y as reactive, c as computed, k as onMounted, I as INTERSECTION, P as POSITION, B as watchEffect, o as onUnmounted, a as openBlock, b as createElementBlock, g as createBlock, n as normalizeStyle, u as unref, r as resolveDynamicComponent, z as NC_PICTURE_TAG, e as createBaseVNode, F as Fragment, G as renderList, h as useCssVars, R as READY, C as CLICK } from "./9ac4870b.js";
import { n as noop } from "./69d29d6e.js";
import { g as gsapWithCSS } from "./406a7049.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{aspect-ratio:var(--4ca3966c)/var(--4ca3962e);display:grid;grid-template-rows:repeat(var(--0eae4dac),1fr);grid-template-columns:repeat(var(--0962738c),1fr);gap:var(--2882bf0c)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--4ca3966c) / var(--4ca3962e) * 100%);content:""}.root :after{display:block;clear:both;content:""}}.picture{grid-row:var(--7ec18687)/calc(var(--7ec18687) + var(--1f5e2b49) + 1);grid-column:var(--49db4b46)/calc(var(--49db4b46) + var(--9106032c) + 1);display:grid;place-content:center}.layers{grid-row:var(--2faa2309)/calc(var(--2faa2309) + var(--5f72706a) + 1);grid-column:var(--0a783070)/calc(var(--0a783070) + var(--68659aec) + 1);display:grid;grid-template-rows:repeat(var(--08cbf622),1fr);grid-template-columns:repeat(var(--78345d2e),1fr);gap:var(--74696b0f)}.layer{grid-row:var(--coordinate-y)/calc(var(--coordinate-y) + var(--dimension-height) + 1);grid-column:var(--coordinate-x)/calc(var(--coordinate-x) + var(--dimension-width) + 1);display:grid;place-content:center}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Scroll.ce",
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
        "4ca3966c": unref(type).dimension[0],
        "4ca3962e": unref(type).dimension[1],
        "0eae4dac": ((_a = unref(properties).root.grid) == null ? void 0 : _a.rows) || 12,
        "0962738c": ((_b = unref(properties).root.grid) == null ? void 0 : _b.columns) || 12,
        "2882bf0c": ((_c = unref(properties).root.grid) == null ? void 0 : _c.gap) || 0,
        "49db4b46": ((_f = (_e = (_d = unref(properties).picture) == null ? void 0 : _d.position) == null ? void 0 : _e.coordinate) == null ? void 0 : _f[0]) || 1,
        "7ec18687": ((_i = (_h = (_g = unref(properties).picture) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[1]) || 1,
        "9106032c": ((_l = (_k = (_j = unref(properties).picture) == null ? void 0 : _j.position) == null ? void 0 : _k.dimension) == null ? void 0 : _l[0]) || 12,
        "1f5e2b49": ((_o = (_n = (_m = unref(properties).picture) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[1]) || 12,
        "0a783070": ((_r = (_q = (_p = unref(properties).layers) == null ? void 0 : _p.position) == null ? void 0 : _q.coordinate) == null ? void 0 : _r[0]) || 1,
        "2faa2309": ((_u = (_t = (_s = unref(properties).layers) == null ? void 0 : _s.position) == null ? void 0 : _t.coordinate) == null ? void 0 : _u[1]) || 1,
        "68659aec": ((_x = (_w = (_v = unref(properties).layers) == null ? void 0 : _v.position) == null ? void 0 : _w.dimension) == null ? void 0 : _x[0]) || 12,
        "5f72706a": ((_A = (_z = (_y = unref(properties).layers) == null ? void 0 : _y.position) == null ? void 0 : _z.dimension) == null ? void 0 : _A[1]) || 12,
        "08cbf622": ((_C = (_B = unref(properties).layers) == null ? void 0 : _B.grid) == null ? void 0 : _C.rows) || 12,
        "78345d2e": ((_E = (_D = unref(properties).layers) == null ? void 0 : _D.grid) == null ? void 0 : _E.columns) || 12,
        "74696b0f": ((_G = (_F = unref(properties).layers) == null ? void 0 : _F.grid) == null ? void 0 : _G.gap) || 0
      };
    });
    const { ripple } = useRipple(props.ncId);
    const { type, properties } = useType(props.ncId);
    const rootElement = ref();
    const scroll = reactive({
      picture: computed(() => properties.value.picture.picture),
      root: computed(() => properties.value.root),
      rootSettingsLayers: computed(() => properties.value.root.settings.layers)
    });
    onMounted(() => {
      ripple.listen(INTERSECTION, noop, {
        element: rootElement.value,
        impressions: properties.value.root.events.impressions
      });
    });
    const layerElements = ref([]);
    const combineAnimationElement = computed(() => scroll.rootSettingsLayers.map((layer, index) => ({
      animation: layer.animation,
      element: layerElements.value[index]
    })));
    const initialTimeline = () => gsapWithCSS.timeline({
      defaults: {
        duration: 0,
        ease: "none"
      },
      paused: true
    }).set({}, {}, 100);
    let timeline = void 0;
    ripple.listen(POSITION, ({ positionRatio }) => {
      timeline == null ? void 0 : timeline.progress(positionRatio);
    });
    const handleCleanupTween = () => {
      timeline == null ? void 0 : timeline.kill();
      layerElements.value.forEach((element) => {
        gsapWithCSS.killTweensOf(element);
      });
    };
    watchEffect((onCleanup) => {
      timeline = initialTimeline();
      combineAnimationElement.value.forEach((layer, index, layers) => {
        var _a, _b, _c, _d;
        const { animation, element } = layer;
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
            timeline == null ? void 0 : timeline.add(gsapWithCSS.to(targetElement, {
              ...to,
              duration
            }), start);
            break;
          case "from":
            timeline == null ? void 0 : timeline.add(gsapWithCSS.from(targetElement, {
              ...from,
              duration
            }), start);
            break;
          case "fromTo":
            timeline == null ? void 0 : timeline.add(gsapWithCSS.fromTo(targetElement, from, {
              ...to,
              duration
            }), start);
            break;
          case "set": {
            const isPrevious = target === "previous";
            const { end: end2 } = (_b = (_a = layers[index - 1]) == null ? void 0 : _a.animation) != null ? _b : {};
            const { start: start2 } = (_d = (_c = layers[index + 1]) == null ? void 0 : _c.animation) != null ? _d : {};
            timeline == null ? void 0 : timeline.add(gsapWithCSS.set(targetElement, set), isPrevious ? end2 : start2);
            break;
          }
        }
      });
      onCleanup(() => {
        handleCleanupTween();
      });
    });
    const handleLoad = (loadedSrc) => {
      ripple.send(READY, { loadedSrc });
    };
    const handleClickScroll = () => {
      var _a;
      ripple.send(CLICK, (_a = scroll.root) == null ? void 0 : _a.events.click);
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
        role: "link",
        onClick: handleClickScroll
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_TAG)), {
          ".sources": scroll.picture.sources,
          ".src": scroll.picture.src,
          ".onLoad": handleLoad,
          class: "picture",
          style: normalizeStyle(unref(properties).picture.style)
        }, null, 8, [".sources", ".src", "style"])),
        createBaseVNode("div", {
          class: "layers",
          style: normalizeStyle((_a = unref(properties).layers) == null ? void 0 : _a.style)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(scroll.rootSettingsLayers, ({ picture, style, position }, index) => {
            var _a2, _b, _c, _d;
            return openBlock(), createBlock(resolveDynamicComponent(picture ? unref(NC_PICTURE_TAG) : "div"), {
              class: "layer",
              key: index,
              style: normalizeStyle({
                ...style,
                "--coordinate-x": ((_a2 = position == null ? void 0 : position.coordinate) == null ? void 0 : _a2[0]) || 1,
                "--coordinate-y": ((_b = position == null ? void 0 : position.coordinate) == null ? void 0 : _b[1]) || 1,
                "--dimension-width": ((_c = position == null ? void 0 : position.dimension) == null ? void 0 : _c[0]) || 12,
                "--dimension-height": ((_d = position == null ? void 0 : position.dimension) == null ? void 0 : _d[0]) || 12
              }),
              ref_for: true,
              ref: (ref2) => {
                layerElements.value.push(ref2);
              },
              ".sources": picture == null ? void 0 : picture.sources,
              ".src": picture == null ? void 0 : picture.src
            }, null, 8, ["style", ".sources", ".src"]);
          }), 128))
        ], 4)
      ], 512);
    };
  }
});
var Scroll_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Scroll_ce as default };
