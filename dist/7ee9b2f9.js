// nc: 0.3.0
import { d as defineComponent, c as computed, o as onUnmounted, a as openBlock, b as createElementBlock, e as createBaseVNode, f as createVNode, n as normalizeStyle, u as unref, t as toDisplayString, g as createBlock, r as resolveDynamicComponent, h as useCssVars, N as NC } from "./9ac4870b.js";
import { L as Logo } from "./958bc691.js";
import { u as useI18n } from "./af843f4b.js";
import { u as useLayout } from "./e2c37d58.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useView } from "./169febe6.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '@charset "UTF-8";*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}:host{--color-50: #f8fafc;--color-50-80: #f8fafccc;--color-50-50: #f8fafc80;--color-50-20: #f8fafc33;--color-100: #f1f5f9;--color-100-80: #f1f5f9cc;--color-100-50: #f1f5f980;--color-100-20: #f1f5f933;--color-200: #e2e8f0;--color-200-80: #e2e8f0cc;--color-200-50: #e2e8f080;--color-200-20: #e2e8f033;--color-300: #cbd5e1;--color-300-80: #cbd5e1cc;--color-300-50: #cbd5e180;--color-300-20: #cbd5e133;--color-400: #94a3b8;--color-400-80: #94a3b8cc;--color-400-50: #94a3b880;--color-400-20: #94a3b833;--color-500: #64748b;--color-500-80: #64748bcc;--color-500-50: #64748b80;--color-500-20: #64748b33;--color-600: #475569;--color-600-80: #475569cc;--color-600-50: #47556980;--color-600-20: #47556933;--color-700: #334155;--color-700-80: #334155cc;--color-700-50: #33415580;--color-700-20: #33415533;--color-800: #1e293b;--color-800-80: #1e293bcc;--color-800-50: #1e293b80;--color-800-20: #1e293b33;--color-900: #0f172a;--color-900-80: #0f172acc;--color-900-50: #0f172a80;--color-900-20: #0f172a33;--z-index-logo: 100;--z-index-type: 20;--z-index-layout: 10;--z-index-default: 0;--ease-default: cubic-bezier(.7, 0, .3, 1);--duration-slow: .3s;--duration-default: .2s;--duration-fast: .1s;all:initial;font-family:system-ui,-apple-system,BlinkMacSystemFont,Open Sans,Helvetica Neue,Microsoft JhengHei,\\5fae\\8edf\\6b63\\9ed1\\9ad4,sans-serif;font-size:16px;-webkit-user-select:none;-moz-user-select:none;user-select:none;color-scheme:light dark;isolation:isolate}.root{aspect-ratio:var(--54288f42)/var(--54288f61);display:grid;grid-template-rows:repeat(var(--7bbaeb5c),1fr);grid-template-columns:repeat(var(--4d002d26),1fr);gap:var(--3dec259c);position:relative;z-index:var(--z-index-default);overflow:hidden;background-color:var(--color-200);border-radius:1.25rem;transition:background-color var(--duration-default) var(--ease-default),color var(--duration-default) var(--ease-default)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--54288f42) / var(--54288f61) * 100%);content:""}.root :after{display:block;clear:both;content:""}}@media (prefers-color-scheme: dark){.root{background-color:var(--color-800)}}.placeholder{grid-row:var(--5ca2c059)/calc(var(--5ca2c059) + var(--058135ca) + 1);grid-column:var(--27bc8518)/calc(var(--27bc8518) + var(--d5438f88) + 1);display:grid;gap:.75rem;place-content:center;align-items:center;justify-items:center;color:var(--color-400)}.placeholder path{fill:var(--color-400)}@media (prefers-color-scheme: dark){.placeholder{color:var(--color-500)}.placeholder path{fill:var(--color-500)}}.rocket{-webkit-animation:rocket 2s infinite;animation:rocket 2s infinite;width:32pt;height:32pt}@-webkit-keyframes rocket{0%,to{transform:translate(1px,1px) rotate(0)}20%{transform:translate(-3px) rotate(1deg)}40%{transform:translate(1px,-1px) rotate(1deg)}60%{transform:translate(-3px,1px) rotate(0)}80%{transform:translate(-1px,-1px) rotate(1deg)}}@keyframes rocket{0%,to{transform:translate(1px,1px) rotate(0)}20%{transform:translate(-3px) rotate(1deg)}40%{transform:translate(1px,-1px) rotate(1deg)}60%{transform:translate(-3px,1px) rotate(0)}80%{transform:translate(-1px,-1px) rotate(1deg)}}.text{font-size:clamp(.875rem,.875rem + .1vw,1rem);font-weight:500}.layout{grid-row:var(--1f0c8618)/calc(var(--1f0c8618) + var(--ddd33c94) + 1);grid-column:var(--88d8fc9a)/calc(var(--88d8fc9a) + var(--293534d7) + 1);z-index:var(--z-index-layout)}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "View.ce",
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
        "54288f42": unref(view).dimension[0],
        "54288f61": unref(view).dimension[1],
        "7bbaeb5c": ((_b = (_a = unref(properties).root) == null ? void 0 : _a.grid) == null ? void 0 : _b.rows) || 12,
        "4d002d26": ((_d = (_c = unref(properties).root) == null ? void 0 : _c.grid) == null ? void 0 : _d.columns) || 12,
        "3dec259c": ((_f = (_e = unref(properties).root) == null ? void 0 : _e.grid) == null ? void 0 : _f.gap) || 0,
        "27bc8518": ((_i = (_h = (_g = unref(properties).placeholder) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[0]) || 1,
        "5ca2c059": ((_l = (_k = (_j = unref(properties).placeholder) == null ? void 0 : _j.position) == null ? void 0 : _k.coordinate) == null ? void 0 : _l[1]) || 1,
        "d5438f88": ((_o = (_n = (_m = unref(properties).placeholder) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[0]) || 12,
        "058135ca": ((_r = (_q = (_p = unref(properties).placeholder) == null ? void 0 : _p.position) == null ? void 0 : _q.dimension) == null ? void 0 : _r[1]) || 12,
        "88d8fc9a": ((_u = (_t = (_s = unref(properties).layout) == null ? void 0 : _s.position) == null ? void 0 : _t.coordinate) == null ? void 0 : _u[0]) || 1,
        "1f0c8618": ((_x = (_w = (_v = unref(properties).layout) == null ? void 0 : _v.position) == null ? void 0 : _w.coordinate) == null ? void 0 : _x[1]) || 1,
        "293534d7": ((_A = (_z = (_y = unref(properties).layout) == null ? void 0 : _y.position) == null ? void 0 : _z.dimension) == null ? void 0 : _A[0]) || 12,
        "ddd33c94": ((_D = (_C = (_B = unref(properties).layout) == null ? void 0 : _B.position) == null ? void 0 : _C.dimension) == null ? void 0 : _D[1]) || 12
      };
    });
    const { t } = useI18n();
    const { ripple } = useRipple(props.ncId);
    const { view, properties } = useView(props.ncId);
    const { layout } = useLayout(props.ncId);
    const component = computed(() => `${NC}-${layout.value.name}`);
    onUnmounted(() => {
      ripple.destroy();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", {
        class: "root",
        style: normalizeStyle((_a = unref(properties).root) == null ? void 0 : _a.style)
      }, [
        createBaseVNode("div", {
          class: "placeholder",
          style: normalizeStyle((_b = unref(properties).placeholder) == null ? void 0 : _b.style)
        }, [
          createVNode(unref(Logo), {
            class: "rocket",
            style: normalizeStyle((_c = unref(properties).rocket) == null ? void 0 : _c.style)
          }, null, 8, ["style"]),
          createBaseVNode("p", {
            class: "text",
            style: normalizeStyle((_d = unref(properties).text) == null ? void 0 : _d.style)
          }, toDisplayString(unref(t)("advertisement")), 5)
        ], 4),
        (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
          "nc-id": __props.ncId,
          class: "layout",
          style: normalizeStyle((_e = unref(properties).layout) == null ? void 0 : _e.style)
        }, null, 8, ["nc-id", "style"]))
      ], 4);
    };
  }
});
var View_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { View_ce as default };
