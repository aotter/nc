import { d as defineComponent, c as computed, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createBlock, f as unref, r as resolveDynamicComponent, j as NC_PICTURE_ELEMENT, n as normalizeStyle, C as CLICK } from "./442393e2.js";
import { u as useEcho } from "./9b751489.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.banner{position:relative;width:100%;height:100%;overflow:hidden}.banner__picture{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);height:auto}\n';
const _hoisted_1 = { class: "banner__picture" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { ripple, styles, property } = useEcho(props.ncId);
    const bannerPicture = computed(() => property.value.bannerPicture);
    const handleClickBanner = () => {
      var _a;
      ripple.send(CLICK, (_a = property.value.banner) == null ? void 0 : _a.event.click);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "banner",
        role: "link",
        style: normalizeStyle(unref(styles).banner),
        onClick: handleClickBanner
      }, [
        createBaseVNode("div", _hoisted_1, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
            ".sources": unref(bannerPicture).sources,
            ".src": unref(bannerPicture).src,
            ".styles": unref(bannerPicture).styles
          }, null, 8, [".sources", ".src", ".styles"]))
        ])
      ], 4);
    };
  }
});
var Banner_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Banner_ce as default };
