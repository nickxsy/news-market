import { Spin } from 'antd';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '@/shared/lib';

import { postStore } from '@/entities/post';

export function AppLoader() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([dispatch(postStore.actions.loadPosts())])
      .then(() => {
        console.log('App loaded');
      })
      .catch(error => {
        console.error('Error loading app', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Spin />
      </div>
    );
  }

  return null;
}
