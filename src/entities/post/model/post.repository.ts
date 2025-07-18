import { apiFetch } from '@/shared/api';

export const postRepository = {
  getPosts: async (limit: number, skip: number) => {
    try {
      const response = await apiFetch(`/posts?limit=${limit}&skip=${skip}`, {
        method: 'GET'
      });
      return response.json();
    } catch (error) {
      console.error('Error fetching posts', error);
      throw error;
    }
  },
  getPostById: async (id: number) => {
    try {
      const response = await apiFetch(`/posts/${id}`, {
        method: 'GET'
      });
      return response.json();
    } catch (error) {
      console.error('Error fetching post by id', error);
      throw error;
    }
  }
};
