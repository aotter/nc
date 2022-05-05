// nc: 0.2.2
import { d as defineComponent, r as reactive, c as computed, a as openBlock, b as createElementBlock, e as createBaseVNode, f as createBlock, u as unref, g as resolveDynamicComponent, B as NC_PICTURE_ELEMENT, h as normalizeStyle, C as CLICK, R as READY } from "./1d4ee282.js";
import { u as useEcho } from "./ece4d06b.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{color:initial;background-color:initial;line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.banner__picture{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);height:auto}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const { ripple, styles, properties } = useEcho(props.ncId);
    const banner = reactive({
      picture: computed(() => properties.value.bannerPicture),
      root: computed(() => properties.value.banner)
    });
    const handleClickBanner = () => {
      var _a;
      ripple.send(CLICK, (_a = banner.root) == null ? void 0 : _a.events.click);
    };
    const handleLoad = (src) => {
      ripple.send(READY, src);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "banner",
        role: "link",
        style: normalizeStyle(unref(styles).banner),
        onClick: handleClickBanner
      }, [
        createBaseVNode("div", {
          class: "banner__picture",
          style: normalizeStyle(unref(styles).bannerPicture)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(unref(NC_PICTURE_ELEMENT)), {
            ".sources": unref(banner).picture.sources,
            ".src": unref(banner).picture.src,
            ".onLoad": handleLoad
          }, null, 8, [".sources", ".src"]))
        ], 4)
      ], 4);
    };
  }
});
var Banner_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { Banner_ce as default };
