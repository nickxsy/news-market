import { Typography } from 'antd';

import { PostList } from '@/features/post-list';

function PostsPage() {
  return (
    <>
      <Typography.Title level={1}>Все посты</Typography.Title>
      <PostList />
    </>
  );
}

export const Component = PostsPage;
