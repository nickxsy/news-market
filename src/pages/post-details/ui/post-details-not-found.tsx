import { Empty, Flex } from 'antd';

import { BackHomeButton } from '@/features/back-home-button';

export function PostDetailsNotFound() {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      gap={12}
      style={{ height: '100%', width: '100%' }}
    >
      <Empty description="Пост не найден">
        <BackHomeButton />
      </Empty>
    </Flex>
  );
}
