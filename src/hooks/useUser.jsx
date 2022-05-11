import { fetcher } from "src/util/fetcher";
const { useRouter } = require("next/router");
const { default: useSWR } = require("swr");

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    user,
    error: userError,
    isLoading: !user && !userError,
  };
};
