import Link from "next/link";
import { useComment } from "src/hooks/useComment";
import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const PostByCommentPostId = (props) => {
  const { data: post, error: postError } = useSWR(
    props.comment?.postId
      ? `https://jsonplaceholder.typicode.com/posts/${props.comment.postId}`
      : null,
    fetcher
  );

  if (!post && !postError) {
    return <div>ローディング中</div>;
  }
  if (postError) {
    return <div>{postError.message}</div>;
  }
  console.log("post", post);
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </div>
  );
};
