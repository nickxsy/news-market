import {
  ArrowLeftOutlined,
  DislikeOutlined,
  EyeOutlined,
  LikeOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Row,
  Space,
  Spin,
  Tag,
  Typography
} from 'antd';

import { usePostDetails } from '../model/use-post-details';

import { PostDetailsNotFound } from './post-details-not-found';

const { Title, Text, Paragraph } = Typography;

export function PostDetailsPage() {
  const { post, isLoading, error } = usePostDetails();

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (!post || error) {
    return <PostDetailsNotFound />;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Card>
        <Title level={1} style={{ marginBottom: '24px' }}>
          {post.title}
        </Title>

        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={12}>
            <Space size="large">
              <Space>
                <UserOutlined />
                <Text type="secondary">Автор ID: {post.userId}</Text>
              </Space>
              <Space>
                <EyeOutlined />
                <Text type="secondary">Просмотры: {post.views}</Text>
              </Space>
            </Space>
          </Col>
          <Col xs={24} sm={12}>
            <Space size="large">
              <Space>
                <LikeOutlined style={{ color: '#52c41a' }} />
                <Text type="secondary">{post.reactions.likes}</Text>
              </Space>
              <Space>
                <DislikeOutlined style={{ color: '#ff4d4f' }} />
                <Text type="secondary">{post.reactions.dislikes}</Text>
              </Space>
            </Space>
          </Col>
        </Row>

        {post.tags.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <Text strong style={{ display: 'block', marginBottom: '8px' }}>
              Теги:
            </Text>
            <Space wrap>
              {post.tags.map((tag: string) => (
                <Tag key={tag} color="blue">
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>
        )}

        <Divider />

        <div style={{ marginBottom: '24px' }}>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
            {post.body}
          </Paragraph>
        </div>

        <Flex justify="start">
          <Button
            type="primary"
            icon={<ArrowLeftOutlined />}
            onClick={() => window.history.back()}
            size="large"
          >
            Назад
          </Button>
        </Flex>
      </Card>
    </div>
  );
}

export const Component = PostDetailsPage;
