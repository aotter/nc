// nc: 0.1.3
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { p as pondEcho, g as rippleEcho, c as computed, v as viewEcho } from "./ae1324bf.js";
const useEcho = (id) => {
  const pond = pondEcho[id];
  const ripple = rippleEcho[id];
  const view = computed(() => viewEcho[id]);
  const property = computed(() => view.value.property);
  const styles = computed(() => Object.keys(property.value).reduce((result, current) => {
    var _a;
    return __spreadProps(__spreadValues({}, result), {
      [current]: __spreadValues({}, (_a = view.value.property[current]) == null ? void 0 : _a.styles)
    });
  }, {}));
  return {
    pond,
    ripple,
    view,
    property,
    styles
  };
};
export { useEcho as u };
