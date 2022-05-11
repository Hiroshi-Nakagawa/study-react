import { fetcher } from "src/util/fetcher";
const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useComment = () => {
  const router = useRouter();
  const { data: comment, error: commentError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    comment,
    error: commentError,
    isLoading: !comment && !commentError,
  };
};
