// nc: 0.1.3
import { d as defineComponent, I as INTERSECTIONS, c as computed, o as openBlock, a as createElementBlock, b as createBaseVNode, e as createBlock, r as resolveDynamicComponent, u as unref, n as normalizeStyle, f as useCssVars, N as NC_ELEMENT_PREFIX } from "./ae1324bf.js";
import { u as useEcho } from "./19fb4cb0.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.view{position:relative;padding-top:var(--58dbdbf4);overflow:hidden;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;isolation:isolate;border-radius:.5rem}.view__content{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}\n';
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "58dbdbf4": unref(aspectRatioCSSVar)
    }));
    const { view, ripple, property, styles } = useEcho(props.ncId);
    ripple.listen(INTERSECTIONS, void 0, property.value.view.event.intersections);
    const aspectRatioCSSVar = computed(() => `${view.value.height / view.value.width * 100}%`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "view",
        style: normalizeStyle(unref(styles).view)
      }, [
        createBaseVNode("div", {
          class: "view__content",
          style: normalizeStyle(unref(styles).viewContent)
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(`${unref(NC_ELEMENT_PREFIX)}${unref(view).layout}`), { "nc-id": __props.ncId }, null, 8, ["nc-id"]))
        ], 4)
      ], 4);
    };
  }
});
var View_ce = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export { View_ce as default };
