// nc: 0.3.0
import { s as toRef, c as computed, v as viewEcho } from "./9ac4870b.js";
const useView = (id) => {
  const view = toRef(viewEcho, id);
  const properties = computed(() => view.value.properties);
  return {
    properties,
    view
  };
};
export { useView as u };
