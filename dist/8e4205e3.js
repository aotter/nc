// nc: 0.3.0
import { d as defineComponent, R as READY, a as openBlock, b as createElementBlock } from "./9ac4870b.js";
import { u as useRipple } from "./a21008ac.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = "*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{position:relative}\n";
const _hoisted_1 = { class: "scratch" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Scratch.ce",
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    console.log(props.ncId, "hi");
    const { ripple } = useRipple(props.ncId);
    ripple.send(READY, {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "Scratch");
    };
  }
});
var Scratch_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Scratch_ce as default };
