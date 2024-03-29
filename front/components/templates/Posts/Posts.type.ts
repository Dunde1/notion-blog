import { PostListProps } from "@components/organisms/PostList/PostList.type";

export interface PostsProps extends PostListProps {
  isLoading?: boolean;
  isFetching?: boolean;
  requestNextPostData: () => void;
}
