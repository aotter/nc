// nc: 0.3.0
import { d as defineComponent, a as openBlock, g as createBlock, M as normalizeClass, u as unref, h as useCssVars } from "./9ac4870b.js";
import { L as Logo } from "./958bc691.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = "*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{width:var(--09a0e90d);height:var(--10ad3ec0)}.hover-animation:hover{-webkit-animation:rocket 2s infinite;animation:rocket 2s infinite}@-webkit-keyframes rocket{0%,to{transform:translate(1px,1px) rotate(0)}20%{transform:translate(-3px) rotate(1deg)}40%{transform:translate(1px,-1px) rotate(1deg)}60%{transform:translate(-3px,1px) rotate(0)}80%{transform:translate(-1px,-1px) rotate(1deg)}}@keyframes rocket{0%,to{transform:translate(1px,1px) rotate(0)}20%{transform:translate(-3px) rotate(1deg)}40%{transform:translate(1px,-1px) rotate(1deg)}60%{transform:translate(-3px,1px) rotate(0)}80%{transform:translate(-1px,-1px) rotate(1deg)}}\n";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Logo.ce",
  props: {
    enableAnimation: {
      default: true,
      type: Boolean
    },
    height: {
      default: "16pt",
      type: String
    },
    width: {
      default: "16pt",
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "09a0e90d": props.width,
      "10ad3ec0": props.height
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Logo), {
        class: normalizeClass(["root", __props.enableAnimation && "hover-animation"]),
        role: "link",
        title: "Aseal"
      }, null, 8, ["class"]);
    };
  }
});
var Logo_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Logo_ce as default };
