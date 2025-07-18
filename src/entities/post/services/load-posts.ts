import { createAsyncThunk } from '@reduxjs/toolkit';

import { postRepository } from '../model/post.repository';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (_, thunkAPI) => {
    try {
      const response = await postRepository.getPosts(10, 0);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
