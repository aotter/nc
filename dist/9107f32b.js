// nc: 0.3.0
import { d as defineComponent, m as ref, y as reactive, c as computed, k as onMounted, I as INTERSECTION, a as openBlock, b as createElementBlock, g as createBlock, n as normalizeStyle, u as unref, r as resolveDynamicComponent, z as NC_PICTURE_TAG, h as useCssVars, C as CLICK, R as READY } from "./9ac4870b.js";
import { n as noop } from "./69d29d6e.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{aspect-ratio:var(--24c2e7e4)/var(--24c2e7a6);display:grid;grid-template-rows:repeat(var(--236740da),1fr);grid-template-columns:repeat(var(--b5b07776),1fr);gap:var(--287a1eb3)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--24c2e7e4) / var(--24c2e7a6) * 100%);content:""}.root :after{display:block;clear:both;content:""}}.picture{grid-row:var(--9e2fb07a)/calc(var(--9e2fb07a) + var(--5184cc85) + 1);grid-column:var(--7c01ec82)/calc(var(--7c01ec82) + var(--2cb8c0b4) + 1);display:grid;place-content:center;overflow:hidden}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Banner.ce",
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      return {
        "24c2e7e4": unref(type).dimension[0],
        "24c2e7a6": unref(type).dimension[1],
        "236740da": ((_b = (_a = unref(properties).root) == null ? void 0 : _a.grid) == null ? void 0 : _b.rows) || 12,
        "b5b07776": ((_d = (_c = unref(properties).root) == null ? void 0 : _c.grid) == null ? void 0 : _d.columns) || 12,
        "287a1eb3": ((_f = (_e = unref(properties).root) == null ? void 0 : _e.grid) == null ? void 0 : _f.gap) || 0,
        "7c01ec82": ((_i = (_h = (_g = unref(properties).picture) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[0]) || 1,
        "9e2fb07a": ((_l = (_k = (_j = unref(properties).picture) == null ? void 0 : _j.position) == null ? void 0 : _k.coordinate) == null ? void 0 : _l[1]) || 1,
        "2cb8c0b4": ((_o = (_n = (_m = unref(properties).picture) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[0]) || 12,
        "5184cc85": ((_r = (_q = (_p = unref(properties).picture) == null ? void 0 : _p.position) == null ? void 0 : _q.dimension) == null ? void 0 : _r[1]) || 12
      };
    });
    const rootElement = ref();
    const { ripple } = useRipple(props.ncId);
    const { type, properties } = useType(props.ncId);
    const banner = reactive({
      picture: computed(() => properties.value.picture),
      root: computed(() => properties.value.root)
    });
    onMounted(() => {
      ripple.listen(INTERSECTION, noop, {
        element: rootElement.value,
        impressions: properties.value.root.events.impressions
      });
    });
    const handleClickBanner = () => {
      var _a;
      ripple.send(CLICK, (_a = banner.root) == null ? void 0 : _a.events.click);
    };
    const handleLoad = (loadedSrc) => {
      ripple.send(READY, { loadedSrc });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "root",
        role: "link",
        ref_key: "rootElement",
        ref: rootElement,
        style: normalizeStyle(unref(properties).root.style),
        onClick: handleClickBanner
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_TAG)), {
          ".sources": banner.picture.picture.sources,
          ".src": banner.picture.picture.src,
          ".onLoad": handleLoad,
          style: normalizeStyle(unref(properties).picture.style),
          class: "picture"
        }, null, 8, [".sources", ".src", "style"]))
      ], 4);
    };
  }
});
var Banner_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Banner_ce as default };
