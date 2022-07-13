// nc: 0.3.0
import { d as defineComponent, c as computed, a as openBlock, b as createElementBlock, g as createBlock, n as normalizeStyle, u as unref, r as resolveDynamicComponent, x as NC_LOGO_TAG, h as useCssVars, N as NC, C as CLICK, A as AsealClickEvent } from "./9ac4870b.js";
import { V as VAST } from "./ad373129.js";
import { u as useLayout } from "./e2c37d58.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{aspect-ratio:var(--17d81498)/var(--17d814b7);display:grid;grid-template-rows:repeat(var(--10977e8d),1fr);grid-template-columns:repeat(var(--69118b0b),1fr);gap:var(--f1d697a6)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--17d81498) / var(--17d814b7) * 100%);content:""}.root :after{display:block;clear:both;content:""}}.type{grid-row:var(--3afd1e7f)/calc(var(--3afd1e7f) + var(--48cc797e) + 1);grid-column:var(--0616e33e)/calc(var(--0616e33e) + var(--73b89662) + 1);z-index:var(--z-index-type)}.logo{grid-row:var(--58db50f0)/calc(var(--58db50f0) + var(--b6194b00) + 1);grid-column:var(--0e2229e8)/calc(var(--0e2229e8) + var(--700d1f3f) + 1);z-index:var(--z-index-logo);justify-self:var(--73fe5514);margin:.25rem}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Default.ce",
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
        "17d81498": unref(layout).dimension[0],
        "17d814b7": unref(layout).dimension[1],
        "10977e8d": ((_b = (_a = unref(properties).root) == null ? void 0 : _a.grid) == null ? void 0 : _b.rows) || 12,
        "69118b0b": ((_d = (_c = unref(properties).root) == null ? void 0 : _c.grid) == null ? void 0 : _d.columns) || 12,
        "f1d697a6": ((_f = (_e = unref(properties).root) == null ? void 0 : _e.grid) == null ? void 0 : _f.gap) || 0,
        "0616e33e": ((_i = (_h = (_g = unref(properties).type) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[0]) || 1,
        "3afd1e7f": ((_l = (_k = (_j = unref(properties).type) == null ? void 0 : _j.position) == null ? void 0 : _k.coordinate) == null ? void 0 : _l[1]) || 1,
        "73b89662": ((_o = (_n = (_m = unref(properties).type) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[0]) || 12,
        "48cc797e": ((_r = (_q = (_p = unref(properties).type) == null ? void 0 : _p.position) == null ? void 0 : _q.dimension) == null ? void 0 : _r[1]) || 12,
        "0e2229e8": ((_u = (_t = (_s = unref(properties).logo) == null ? void 0 : _s.position) == null ? void 0 : _t.coordinate) == null ? void 0 : _u[0]) || (unref(type).name === unref(VAST) ? 1 : 12),
        "58db50f0": ((_x = (_w = (_v = unref(properties).logo) == null ? void 0 : _v.position) == null ? void 0 : _w.coordinate) == null ? void 0 : _x[1]) || 1,
        "700d1f3f": ((_A = (_z = (_y = unref(properties).logo) == null ? void 0 : _y.position) == null ? void 0 : _z.dimension) == null ? void 0 : _A[0]) || 1,
        "b6194b00": ((_D = (_C = (_B = unref(properties).logo) == null ? void 0 : _B.position) == null ? void 0 : _C.dimension) == null ? void 0 : _D[1]) || 1,
        "73fe5514": unref(type).name === unref(VAST) ? "start" : "end"
      };
    });
    const { ripple } = useRipple(props.ncId);
    const { layout, properties } = useLayout(props.ncId);
    const { type } = useType(props.ncId);
    const component = computed(() => `${NC}-${type.value.name}`);
    const handleClickLogo = () => {
      ripple.send(CLICK, AsealClickEvent);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("div", {
        class: "root",
        style: normalizeStyle((_a = unref(properties).root) == null ? void 0 : _a.style)
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(component)), {
          "nc-id": __props.ncId,
          class: "type",
          style: normalizeStyle((_b = unref(properties).type) == null ? void 0 : _b.style)
        }, null, 8, ["nc-id", "style"])),
        (openBlock(), createBlock(resolveDynamicComponent(unref(NC_LOGO_TAG)), {
          class: "logo",
          style: normalizeStyle((_c = unref(properties).logo) == null ? void 0 : _c.style),
          onClick: handleClickLogo
        }, null, 8, ["style"]))
      ], 4);
    };
  }
});
var Default_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Default_ce as default };
