// nc: 0.3.0
import { u as useView } from "./169febe6.js";
import { c as computed } from "./9ac4870b.js";
const useLayout = (id) => {
  const { view } = useView(id);
  const layout = computed(() => view.value.layout);
  const properties = computed(() => layout.value.properties);
  return {
    layout,
    properties
  };
};
export { useLayout as u };
