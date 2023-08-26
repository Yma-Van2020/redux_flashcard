import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice.js';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState:{
        quizzes:{}
    },
    reducers:{
        addQuiz: (state, action) => {
        state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const addQuizAndQuizId = (payload) => {
    return async(dispatch) => {
        try {
            await dispatch(addQuiz({ id, name, topicId, cardIds }));
            await dispatch(addQuizId({ topicId, quizId: id }));
        } catch (error) {
            console.error("An error occurred while adding quiz and quiz ID:", error);
        }
    }
}

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;