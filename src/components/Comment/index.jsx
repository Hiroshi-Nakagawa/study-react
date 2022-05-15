import Head from "next/head";
import { PostByCommentPostId } from "src/components/Post/PostByCommentPostId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div>
        {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-2">
        <PostByCommentPostId id={data?.postId} />
      </div>
    </div>
  );
};
