import { Button, type ButtonProps } from 'antd';
import { useNavigate } from 'react-router';

import { ROUTES } from '@/shared/model';

export function BackHomeButton({
  children = 'Вернуться на главную',
  type = 'primary',
  ...props
}: ButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      type={type}
      children={children}
      onClick={() => navigate(ROUTES.POSTS, { replace: true })}
      {...props}
    />
  );
}
