import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  icon: string;
  strong: string;
  description: string;
}

interface TextStateHowIt {
  cards: CardState[];
}

const initialState: TextStateHowIt = {
  cards: [
    {
      icon: "/svg_icon/waiting.svg",
      strong: 'Прочитай задание внимательно',
      description: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
      icon: "/svg_icon/delivery-truck.svg",
      strong: 'Изучи весь макет заранее',
      description: 'Подумай как это будет работать на разных разрешениях и при скролле',
    },
    {
      icon: "/svg_icon/secure.svg",
      strong: 'Сделай хорошо',
      description: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    },
    {
      icon: "/svg_icon/money-bags.svg",
      strong: 'Получи предложение',
      description: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
    }
  ]
};

const textSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setIcon(state, action: PayloadAction<{ index: number; icon: string }>) {
      const { index, icon } = action.payload;
      if (state.cards[index]) {
        state.cards[index].icon = icon;
      }
    },
    setStrong(state, action: PayloadAction<{ index: number; strong: string }>) {
      const { index, strong } = action.payload;
      if (state.cards[index]) {
        state.cards[index].strong = strong;
      }
    },
    setDescription(state, action: PayloadAction<{ index: number; description: string }>) {
      const { index, description } = action.payload;
      if (state.cards[index]) {
        state.cards[index].description = description;
      }
    },
  },
});

export const { setIcon, setStrong, setDescription } = textSlice.actions;

export default textSlice.reducer;