// nc: 0.2.2
import { d as defineComponent, r as reactive, I as INTERSECTIONS, n as noop, R as READY, c as computed, o as onBeforeUnmount, a as openBlock, b as createElementBlock, e as createBaseVNode, u as unref, t as toDisplayString, f as createBlock, g as resolveDynamicComponent, N as NC_ELEMENT_PREFIX, h as normalizeStyle, i as useCssVars } from "./caac094b.js";
import { u as useEcho } from "./47f77b24.js";
import { u as useI18n } from "./dc66880a.js";
import { _ as _export_sfc } from "./841cd136.js";
var _style_0 = '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid}:host{color:initial;background-color:initial;line-height:1.15;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:focus{outline:none}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.view{--background-color: #e2e8f099;--color: #000;transition:border-color .25s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;position:relative;padding-top:var(--12752362);overflow:hidden;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;isolation:isolate;border-radius:.5rem}@media (prefers-color-scheme: dark){.view{--background-color: #47556999;--color: #fff}}.view__placeholder{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);transition:background-color .25s ease-in-out;display:grid;background-color:var(--background-color)}.view__placeholder-text-wrapper{display:grid;place-content:center}.view__placeholder-text{transition:border-color .25s ease-in-out,color .25s ease-in-out;padding:.375rem .5rem;font-size:.625rem;color:var(--color);border:1px solid var(--color);border-radius:.5rem;mix-blend-mode:difference}.view__placeholder-image-wrapper{position:relative;display:grid}.view__placeholder-image{width:100%;height:100%}.view__placeholder-cover{transition:background-color .25s ease-in-out;position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);background-color:var(--background-color);-webkit-backdrop-filter:blur(2rem) saturate(180%);backdrop-filter:blur(2rem) saturate(180%)}.view__content{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);z-index:90}\n';
const _hoisted_1 = { class: "view__placeholder" };
const _hoisted_2 = {
  key: 0,
  class: "view__placeholder-image-wrapper"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "view__placeholder-cover" }, null, -1);
const _hoisted_5 = {
  key: 1,
  class: "view__placeholder-text-wrapper"
};
const _hoisted_6 = { class: "view__placeholder-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    ncId: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "12752362": unref(aspectRatioCSSVariable)
    }));
    const ready = reactive({
      src: "",
      status: false
    });
    const { t } = useI18n();
    const { view, ripple, styles, properties } = useEcho(props.ncId);
    ripple.listen(INTERSECTIONS, noop, {
      events: properties.value.view.events.impressions
    });
    ripple.listen(READY, (event) => {
      const { loadedSrc } = event != null ? event : { loadedSrc: "" };
      ready.status = true;
      ready.src = loadedSrc;
    });
    const aspectRatioCSSVariable = computed(() => `${view.value.height / view.value.width * 100}%`);
    onBeforeUnmount(() => {
      ripple.destroy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "view",
        style: normalizeStyle(unref(styles).view)
      }, [
        createBaseVNode("div", _hoisted_1, [
          unref(ready).status && unref(ready).src ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("img", {
              src: unref(ready).src,
              class: "view__placeholder-image"
            }, null, 8, _hoisted_3),
            _hoisted_4
          ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("ad")), 1)
          ]))
        ]),
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
