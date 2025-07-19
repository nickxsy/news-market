import { Empty, Flex, Typography } from 'antd';

import { BackHomeButton } from '@/features/back-home-button';

function NotFoundPage() {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      gap={12}
      style={{ height: '100%', width: '100%' }}
    >
      <Empty>
        <Flex vertical gap={1}>
          <Typography.Title level={1}>404</Typography.Title>
          <Typography.Paragraph>Страница не найдена</Typography.Paragraph>
        </Flex>
        <BackHomeButton />
      </Empty>
    </Flex>
  );
}

export const Component = NotFoundPage;
