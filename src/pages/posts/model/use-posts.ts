import { useEffect } from 'react';

import { apiFetch } from '@/shared/api';

export function usePosts() {
  useEffect(() => {
    const response = apiFetch('/posts?limit=10&skip=0', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    console.log(response);
  }, []);

  return {
    posts: [],
    total: 0,
    skip: 0,
    limit: 10
  };
}
