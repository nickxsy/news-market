import { Button, Spin, Tag, Typography } from 'antd';

import { usePostDetails } from '../model/use-post-details';

import { PostDetailsNotFound } from './post-details-not-found';

export function PostDetailsPage() {
  const { post, isLoading, error } = usePostDetails();

  if (isLoading) {
    return <Spin />;
  }

  if (!post || error) {
    return <PostDetailsNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <Typography.Title level={1}>{post.title}</Typography.Title>

          {/* Мета-информация */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-4">
              <Typography.Text>Автор ID: {post.userId}</Typography.Text>
              <Typography.Text>Просмотры: {post.views}</Typography.Text>
            </div>
            <div className="flex items-center space-x-4">
              <Typography.Text>👍 {post.reactions.likes}</Typography.Text>
              <Typography.Text>👎 {post.reactions.dislikes}</Typography.Text>
            </div>
          </div>

          {/* Теги */}
          {post.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Tag key={tag} color="blue">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Содержимое поста */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="prose prose-lg max-w-none">
            <Typography.Paragraph>{post.body}</Typography.Paragraph>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="mt-6 flex justify-between">
          <Button onClick={() => window.history.back()}>← Назад</Button>
        </div>
      </div>
    </div>
  );
}

export const Component = PostDetailsPage;
