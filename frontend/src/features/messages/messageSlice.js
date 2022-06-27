import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messageService from './messageService';

const initialState = {
  allMessages: [],
  singleMessage: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createMessage = createAsyncThunk(
  'messages/create',
  async (messageData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await messageService.createMessage(messageData, token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;
