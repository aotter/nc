import { p as pondEcho, g as rippleEcho, c as computed, v as viewEcho } from "./442393e2.js";
const useEcho = (id) => {
  const pond = pondEcho[id];
  const ripple = rippleEcho[id];
  const view = computed(() => viewEcho[id]);
  const property = computed(() => view.value.property);
  const styles = computed(() => Object.keys(property.value).reduce((result, current) => {
    var _a;
    return {
      ...result,
      [current]: {
        ...(_a = view.value.property[current]) == null ? void 0 : _a.styles
      }
    };
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
