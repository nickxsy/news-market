import { Button, Empty, Flex } from 'antd';
import { useNavigate } from 'react-router';

import { ROUTES } from '@/shared/model';

export function PostDetailsNotFound() {
  const navigate = useNavigate();

  return (
    <Flex
      justify="center"
      align="center"
      vertical
      gap={12}
      style={{ height: '100%', width: '100%' }}
    >
      <Empty description="Пост не найден" />
      <Button
        type="primary"
        onClick={() => navigate(ROUTES.posts, { replace: true })}
      >
        Вернуться на главную
      </Button>
    </Flex>
  );
}
