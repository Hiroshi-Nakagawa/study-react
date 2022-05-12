import { Comment } from "src/components/Comment";
import { Header } from "src/components/Header";
import { PostByCommentPostId } from "src/components/Post/PostByCommentPostId";
import { useComment } from "src/hooks/useComment";

const CommentsId = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <Header />
      <Comment />
      <PostByCommentPostId id={data?.postId} />
    </div>
  );
};

export default CommentsId;
