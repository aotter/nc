// nc: 0.3.0
import { d as defineComponent, c as computed, a as openBlock, b as createElementBlock, g as createBlock, n as normalizeStyle, u as unref, r as resolveDynamicComponent, e as createBaseVNode, t as toDisplayString, x as NC_LOGO_TAG, h as useCssVars, N as NC, C as CLICK, A as AsealClickEvent } from "./9ac4870b.js";
import { V as VAST } from "./ad373129.js";
import { u as useI18n } from "./af843f4b.js";
import { u as useLayout } from "./e2c37d58.js";
import { u as useRipple } from "./a21008ac.js";
import { u as useType } from "./467698d9.js";
import { _ as _export_sfc } from "./841cd136.js";
import "./169febe6.js";
var _style_0 = '*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{display:grid;grid-template-rows:repeat(var(--3d032ae6),1fr);grid-template-columns:repeat(var(--dc99c1ea),1fr);gap:var(--0672bfa6);aspect-ratio:var(--780c0098)/var(--780c00b7);background-color:var(--color-200);transition:background-color var(--duration-default) var(--ease-default),color var(--duration-default) var(--ease-default)}@supports not (aspect-ratio: auto){.root :before{float:left;padding-top:calc(var(--780c0098) / var(--780c00b7) * 100%);content:""}.root :after{display:block;clear:both;content:""}}@media (prefers-color-scheme: dark){.root{background-color:var(--color-800)}}.type{grid-row:var(--7151eb02)/calc(var(--7151eb02) + var(--2462b318) + 1);grid-column:var(--db1e6184)/calc(var(--db1e6184) + var(--00128262) + 1);z-index:var(--z-index-type)}.title{grid-row:var(--ca97f3aa)/calc(var(--ca97f3aa) + var(--1d349a24) + 1);grid-column:var(--65cdcae2)/calc(var(--65cdcae2) + var(--592103f4) + 1);-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;max-width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:0 1rem;overflow:hidden;font-size:clamp(.875rem,.875rem + .2vw,1.2rem);font-weight:700;line-height:2rem;color:var(--color-900)}@media (prefers-color-scheme: dark){.title{color:var(--color-100)}}.sponsor{grid-row:var(--5a2de2a8)/calc(var(--5a2de2a8) + var(--3f34faac) + 1);grid-column:var(--5c310a38)/calc(var(--5c310a38) + var(--0a4ebf71) + 1);display:grid;align-content:center;padding:0 1rem;overflow:hidden;font-size:clamp(.625rem,.5rem + .2vw,.875rem);color:var(--color-600);white-space:nowrap}@media (prefers-color-scheme: dark){.sponsor{color:var(--color-400)}}.call-to-action{grid-row:var(--626e4f5d)/calc(var(--626e4f5d) + var(--987698c6) + 1);grid-column:var(--0ae5bb06)/calc(var(--0ae5bb06) + var(--7ede785d) + 1);display:grid;place-content:center;overflow:hidden;font-size:clamp(.875rem,.5rem + .1vw,1rem);font-weight:700;color:var(--color-700);letter-spacing:.05rem;white-space:nowrap;background-color:var(--color-300);border-radius:1.25rem 0;transition:all var(--duration-default) var(--ease-default);transform:scale(1);transform-origin:100% 100%}.call-to-action:hover{color:var(--color-100);background-color:var(--color-600);transform:scale(1.05)}@media (prefers-color-scheme: dark){.call-to-action{color:var(--color-200);background-color:var(--color-900)}.call-to-action:hover{color:var(--color-100);background-color:var(--color-700)}}.logo{grid-row:var(--35958620)/calc(var(--35958620) + var(--6fabee80) + 1);grid-column:var(--4123ec68)/calc(var(--4123ec68) + var(--3ac5b33f) + 1);z-index:var(--z-index-logo);justify-self:var(--22bb2d14);margin:.25rem}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Template.ce",
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la;
      return {
        "3d032ae6": ((_b = (_a = unref(properties).root) == null ? void 0 : _a.grid) == null ? void 0 : _b.rows) || 12,
        "dc99c1ea": ((_d = (_c = unref(properties).root) == null ? void 0 : _c.grid) == null ? void 0 : _d.columns) || 12,
        "0672bfa6": ((_f = (_e = unref(properties).root) == null ? void 0 : _e.grid) == null ? void 0 : _f.gap) || 0,
        "780c0098": unref(layout).dimension[0],
        "780c00b7": unref(layout).dimension[1],
        "db1e6184": ((_i = (_h = (_g = unref(properties).type) == null ? void 0 : _g.position) == null ? void 0 : _h.coordinate) == null ? void 0 : _i[0]) || 1,
        "7151eb02": ((_l = (_k = (_j = unref(properties).type) == null ? void 0 : _j.position) == null ? void 0 : _k.coordinate) == null ? void 0 : _l[1]) || 1,
        "00128262": ((_o = (_n = (_m = unref(properties).type) == null ? void 0 : _m.position) == null ? void 0 : _n.dimension) == null ? void 0 : _o[0]) || 12,
        "2462b318": ((_r = (_q = (_p = unref(properties).type) == null ? void 0 : _p.position) == null ? void 0 : _q.dimension) == null ? void 0 : _r[1]) || 8,
        "65cdcae2": ((_u = (_t = (_s = unref(properties).title) == null ? void 0 : _s.position) == null ? void 0 : _t.coordinate) == null ? void 0 : _u[0]) || 1,
        "ca97f3aa": ((_x = (_w = (_v = unref(properties).title) == null ? void 0 : _v.position) == null ? void 0 : _w.coordinate) == null ? void 0 : _x[1]) || 9,
        "592103f4": ((_A = (_z = (_y = unref(properties).title) == null ? void 0 : _y.position) == null ? void 0 : _z.dimension) == null ? void 0 : _A[0]) || 12,
        "1d349a24": ((_D = (_C = (_B = unref(properties).title) == null ? void 0 : _B.position) == null ? void 0 : _C.dimension) == null ? void 0 : _D[1]) || 2,
        "5c310a38": ((_G = (_F = (_E = unref(properties).sponsor) == null ? void 0 : _E.position) == null ? void 0 : _F.coordinate) == null ? void 0 : _G[0]) || 1,
        "5a2de2a8": ((_J = (_I = (_H = unref(properties).sponsor) == null ? void 0 : _H.position) == null ? void 0 : _I.coordinate) == null ? void 0 : _J[1]) || 11,
        "0a4ebf71": ((_M = (_L = (_K = unref(properties).sponsor) == null ? void 0 : _K.position) == null ? void 0 : _L.dimension) == null ? void 0 : _M[0]) || 8,
        "3f34faac": ((_P = (_O = (_N = unref(properties).sponsor) == null ? void 0 : _N.position) == null ? void 0 : _O.dimension) == null ? void 0 : _P[1]) || 2,
        "0ae5bb06": ((_S = (_R = (_Q = unref(properties).callToAction) == null ? void 0 : _Q.position) == null ? void 0 : _R.coordinate) == null ? void 0 : _S[0]) || 10,
        "626e4f5d": ((_V = (_U = (_T = unref(properties).callToAction) == null ? void 0 : _T.position) == null ? void 0 : _U.coordinate) == null ? void 0 : _V[1]) || 11,
        "7ede785d": ((_Y = (_X = (_W = unref(properties).callToAction) == null ? void 0 : _W.position) == null ? void 0 : _X.dimension) == null ? void 0 : _Y[0]) || 3,
        "987698c6": ((_$ = (__ = (_Z = unref(properties).callToAction) == null ? void 0 : _Z.position) == null ? void 0 : __.dimension) == null ? void 0 : _$[1]) || 2,
        "4123ec68": ((_ca = (_ba = (_aa = unref(properties).logo) == null ? void 0 : _aa.position) == null ? void 0 : _ba.coordinate) == null ? void 0 : _ca[0]) || (unref(type).name === unref(VAST) ? 1 : 12),
        "35958620": ((_fa = (_ea = (_da = unref(properties).logo) == null ? void 0 : _da.position) == null ? void 0 : _ea.coordinate) == null ? void 0 : _fa[1]) || 1,
        "3ac5b33f": ((_ia = (_ha = (_ga = unref(properties).logo) == null ? void 0 : _ga.position) == null ? void 0 : _ha.dimension) == null ? void 0 : _ia[0]) || 1,
        "6fabee80": ((_la = (_ka = (_ja = unref(properties).logo) == null ? void 0 : _ja.position) == null ? void 0 : _ka.dimension) == null ? void 0 : _la[1]) || 1,
        "22bb2d14": unref(type).name === unref(VAST) ? "start" : "end"
      };
    });
    const { t } = useI18n();
    const { ripple } = useRipple(props.ncId);
    const { layout, properties } = useLayout(props.ncId);
    const { type } = useType(props.ncId);
    const component = computed(() => `${NC}-${type.value.name}`);
    const handleClickLogo = () => {
      ripple.send(CLICK, AsealClickEvent);
    };
    const handleClickTitle = () => {
      ripple.send(CLICK, properties.value.title.events.click);
    };
    const handleClickCallToAction = () => {
      ripple.send(CLICK, properties.value.callToAction.events.click);
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
        createBaseVNode("h1", {
          class: "title",
          role: "link",
          style: normalizeStyle(unref(properties).title.style),
          onClick: handleClickTitle
        }, toDisplayString(unref(properties).title.text.content), 5),
        createBaseVNode("p", {
          class: "sponsor",
          style: normalizeStyle(unref(properties).sponsor.style)
        }, toDisplayString(unref(t)("sponsor")) + " | " + toDisplayString(unref(properties).sponsor.text.content), 5),
        createBaseVNode("button", {
          class: "call-to-action",
          type: "button",
          style: normalizeStyle(unref(properties).callToAction.style),
          onClick: handleClickCallToAction
        }, toDisplayString(unref(properties).callToAction.text.content), 5),
        (openBlock(), createBlock(resolveDynamicComponent(unref(NC_LOGO_TAG)), {
          class: "logo",
          style: normalizeStyle((_c = unref(properties).logo) == null ? void 0 : _c.style),
          onClick: handleClickLogo
        }, null, 8, ["style"]))
      ], 4);
    };
  }
});
var Template_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Template_ce as default };
