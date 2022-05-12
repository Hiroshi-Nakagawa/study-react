import { useCommentsByPostsId } from "src/hooks/useFetchArray";

export const CommentsByPostsId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul>
      {data.map((comment) => {
        return <li key={comment.id}>{comment.body}</li>;
      })}
    </ul>
  );
};
