import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
    avatar: string;
    name: string;
    sity: string;
    text: string;
}

interface TextStateFeedBack {
    cards: CardState[];
}

const initialState: TextStateFeedBack = {
    cards: [
        {
            avatar: "/avatar/ava_1.png",
            name: 'Иван Иванов',
            sity: 'Санкт-Петербург',
            text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
        },
        {
            avatar: "",
            name: 'Константинов Михаил Павлович',
            sity: 'Санкт-Петербург',
            text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '
        },
        {
            avatar: "/avatar/ava_2.png",
            name: 'Артем Корнилов',
            sity: 'Самара',
            text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '
        },
        {
            avatar: "",
            name: 'Константинов Михаил Павлович',
            sity: 'Санкт-Петербург',
            text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '
        },
        {
            avatar: "",
            name: 'Константинов Михаил Павлович',
            sity: 'Санкт-Петербург',
            text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы '
        }
    ]
};

const feedBackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setAvatar(state, action: PayloadAction<{ index: number; avatar: string }>) {
            const { index, avatar } = action.payload;
            if (state.cards[index]) {
                state.cards[index].avatar = avatar;
            }
        },
        setName(state, action: PayloadAction<{ index: number; name: string }>) {
            const { index, name } = action.payload;
            if (state.cards[index]) {
                state.cards[index].name = name;
            }
        },
        setSity(state, action: PayloadAction<{ index: number; sity: string }>) {
            const { index, sity } = action.payload;
            if (state.cards[index]) {
                state.cards[index].sity = sity;
            }
        },
        setText(state, action: PayloadAction<{ index: number; text: string }>) {
            const { index, text } = action.payload;
            if (state.cards[index]) {
                state.cards[index].text = text;
            }
        },
    },
});

export const { setAvatar, setName, setSity, setText } = feedBackSlice.actions;

export default feedBackSlice.reducer;
