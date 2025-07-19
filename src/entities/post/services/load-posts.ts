import { createAsyncThunk } from '@reduxjs/toolkit';

import { postRepository } from '../model/post.repository';

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (page: number, thunkAPI) => {
    try {
      const limit = 10;
      const skip = (page - 1) * limit;
      const response = await postRepository.getPosts(limit, skip);

      return { ...response, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
