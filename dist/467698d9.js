// nc: 0.3.0
import { u as useView } from "./169febe6.js";
import { c as computed } from "./9ac4870b.js";
const useType = (id) => {
  const { view } = useView(id);
  const type = computed(() => view.value.type);
  const properties = computed(() => type.value.properties);
  return {
    properties,
    type
  };
};
export { useType as u };
