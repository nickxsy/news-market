import { useAppSelector } from '@/shared/lib';

import { postStore } from '@/entities/post';

export function usePosts() {
  const posts = useAppSelector(postStore.selectors.selectPosts);
  const isLoading = useAppSelector(postStore.selectors.selectIsLoading);
  const error = useAppSelector(postStore.selectors.selectError);
  const isError = useAppSelector(postStore.selectors.selectIsError);

  return {
    posts,
    isLoading,
    isError,
    error
  };
}
