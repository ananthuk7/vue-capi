import axios from "axios";
import { ref } from "vue";

export function useFetchResource() {
  const data = ref([]);
  const loadingState = ref(null);
  function fetchResource(url) {
    loadingState.value = "loading";
    axios.get(url).then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        data.value = response.data.results;
      }, 1000);
    });
  }
  return { data, loadingState, fetchResource };
}
