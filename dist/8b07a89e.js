// nc: 0.3.0
import { _ as _export_sfc } from "./841cd136.js";
import { d as defineComponent, c as computed, a as openBlock, b as createElementBlock, F as Fragment, G as renderList, u as unref, e as createBaseVNode } from "./9ac4870b.js";
const APNG = "image/apng";
const AVIF = "image/avif";
const WEBP = "image/webp";
const PictureSourceOrderMap = {
  [APNG]: 2,
  [AVIF]: 3,
  [WEBP]: 1
};
var _style_0 = "*:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*:before,*:after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}::-moz-placeholder{color:unset}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}:where([draggable=true]){-webkit-user-drag:element}button:where([type=button]),*:where([role=link],[role=button]){cursor:pointer}.root{width:100%;height:auto;-webkit-touch-callout:none}\n";
const _hoisted_1 = ["srcset", "type"];
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Picture.ce",
  props: {
    onLoad: {
      required: false,
      type: Function
    },
    sources: {
      required: false,
      type: Array
    },
    src: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const sortedSources = computed(() => [...props.sources || []].sort((a, b) => PictureSourceOrderMap[a.type] - PictureSourceOrderMap[b.type]));
    const handleLoad = (e) => {
      var _a;
      const target = e.target;
      (_a = props.onLoad) == null ? void 0 : _a.call(props, target.currentSrc || target.src);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("picture", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortedSources), (source, index) => {
          return openBlock(), createElementBlock("source", {
            srcset: source.srcset,
            type: source.type,
            key: index
          }, null, 8, _hoisted_1);
        }), 128)),
        createBaseVNode("img", {
          class: "root",
          onLoad: handleLoad,
          src: __props.src,
          draggable: "false"
        }, null, 40, _hoisted_2)
      ]);
    };
  }
});
var Picture_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Picture_ce as default };
