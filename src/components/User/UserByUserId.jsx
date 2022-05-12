import Link from "next/link";
import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );
  if (!data && !error) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      created by{" "}
      <Link href={`/users/${data.id}`}>
        <a>{data.name}</a>
      </Link>
    </div>
  );
};
