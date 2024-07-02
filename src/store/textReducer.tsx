import { createSlice } from '@reduxjs/toolkit';

interface TextState {
  title: string;
  description: string;
  zag_how_it_works: string;
}

const initialState: TextState = {
  title: 'Говорят, никогда не поздно сменить профессию',
  description: 'Сделай круто тестовое задание и у тебя получится',
  zag_how_it_works: 'Как это работает'
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setZag_how_it_works(state, action) {
        state.zag_how_it_works = action.payload;
      },
  },
});

export const { setTitle, setDescription } = textSlice.actions;

export default textSlice.reducer;