import { createSelector, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/shared/lib';

import { loadPosts } from '../services/load-posts';

import type { Post, PostsResponse } from './types';

type PostsState = PostsResponse & {
  isLoading: boolean;
  isError: boolean;
  error?: string;
};

const initialState: PostsState = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 10,
  isLoading: false,
  isError: false,
  error: undefined
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
      state.posts = action.payload.posts;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
      state.isLoading = false;
    });
    builder.addCase(loadPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      state.posts = [];
      state.total = 0;
      state.skip = 0;
      state.limit = 10;
    });
    builder.addCase(loadPosts.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.error = undefined;
      state.posts = [];
      state.total = 0;
      state.skip = 0;
      state.limit = 10;
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

export const postStore = {
  selectors: {
    selectIsLoading,
    selectIsError,
    selectError,
    selectPosts,
    selectPostById
  },
  actions: {
    loadPosts
  },
  slice: postSlice
};

export const postReducer = postSlice.reducer;
