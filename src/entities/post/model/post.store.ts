import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/shared/lib';

import { loadPosts } from '../services/load-posts';

import type { Post, PostsResponse } from './types';

type PostsState = PostsResponse & {
  isLoading: boolean;
  isError: boolean;
  error?: string;
  hasMore?: boolean;
  page: number;
};

const initialState: PostsState = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 10,
  isLoading: false,
  isError: false,
  error: undefined,
  hasMore: true,
  page: 1
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loadPosts.fulfilled, (state, action) => {
      const { posts, total, skip, limit, page } = action.payload;

      if (page === 1) {
        state.posts = posts;
      } else {
        state.posts = [...state.posts, ...posts];
      }

      state.total = total;
      state.skip = skip;
      state.limit = limit;
      state.page = page;
      state.isLoading = false;

      state.hasMore = state.posts.length < total;
    });
    builder.addCase(loadPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(loadPosts.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.error = undefined;
    });
  }
});

const selectIsLoading = createSelector(
  (state: RootState) => state.posts.isLoading,
  isLoading => isLoading
);

const selectIsError = createSelector(
  (state: RootState) => state.posts.isError,
  isError => isError
);

const selectError = createSelector(
  (state: RootState) => state.posts.error,
  error => error
);

const selectPosts = createSelector(
  (state: RootState) => state.posts.posts,
  posts => posts
);

const selectPostById = createSelector(
  (state: RootState) => state.posts.posts,
  (_, id) => id,
  (posts, id) => posts.find((post: Post) => post.id === id)
);

const selectPostHasMore = createSelector(
  (state: RootState) => state.posts.hasMore,
  posts => posts
);

const selectPostPage = createSelector(
  (state: RootState) => state.posts.page,
  posts => posts
);

export const postStore = {
  selectors: {
    selectIsLoading,
    selectIsError,
    selectError,
    selectPosts,
    selectPostById,
    selectPostHasMore,
    selectPostPage
  },
  actions: {
    loadPosts
  },
  slice: postSlice
};

export const postReducer = postSlice.reducer;
