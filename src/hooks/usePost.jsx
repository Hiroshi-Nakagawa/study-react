import { fetcher } from "src/util/fetcher";
const { default: useSWR } = require("swr");

export const usePost = (id) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
