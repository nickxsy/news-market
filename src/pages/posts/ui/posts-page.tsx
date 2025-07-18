import { Col, Row, Typography } from 'antd';

import { PostItem } from '@/entities/post';

import { usePosts } from '../model/use-posts';

function PostsPage() {
  const { posts } = usePosts();

  return (
    <>
      <Typography.Title level={1}>Все посты</Typography.Title>
      <Row gutter={[16, 16]}>
        {posts.map(post => (
          <Col span={8} key={post.id}>
            <PostItem post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export const Component = PostsPage;
