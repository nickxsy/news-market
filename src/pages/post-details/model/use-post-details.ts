import { useParams } from 'react-router';

import { useAppSelector } from '@/shared/lib';

import { postStore } from '@/entities/post';

export function usePostDetails() {
  const { id } = useParams();
  const post = useAppSelector(state =>
    postStore.selectors.selectPostById(state, Number(id))
  );
  const isLoading = useAppSelector(postStore.selectors.selectIsLoading);
  const error = useAppSelector(postStore.selectors.selectError);

  return { post, isLoading, error };
}
