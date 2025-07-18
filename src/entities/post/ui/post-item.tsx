import { Card, Col, Flex, Row, Tag, Typography } from 'antd';
import { Link } from 'react-router';

import { type Post } from '@/entities/post';

function PostTags({ tags }: { tags: string[] }) {
  return (
    <Row gutter={[8, 8]}>
      {tags.map(tag => (
        <Tag key={tag} color="blue">
          {tag}
        </Tag>
      ))}
    </Row>
  );
}

export function PostItem({ post }: { post: Post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <Card title={post.title} hoverable>
        <Typography.Paragraph ellipsis={{ rows: 3 }}>
          {post.body}
        </Typography.Paragraph>

        <Flex vertical gap={12}>
          {post.tags.length > 0 && <PostTags tags={post.tags} />}

          <Row gutter={[8, 8]}>
            {post.reactions.likes > 0 && (
              <Col span={12}>
                <Typography.Text>
                  👍 {post.reactions.likes} likes
                </Typography.Text>
              </Col>
            )}
            {post.reactions.dislikes > 0 && (
              <Col span={12}>
                <Typography.Text>
                  👎 {post.reactions.dislikes} dislikes
                </Typography.Text>
              </Col>
            )}
          </Row>
        </Flex>
      </Card>
    </Link>
  );
}
