import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState:{
        topics:{}
    },
    reducers:{
        addTopic: (state, action) => {
            if(!state.topics[action.payload.id]){
                state.topics[action.payload.id] = {...action.payload, quizIds: []};
            }
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
})

export const { addTopic,  addQuizId} = topicsSlice.actions;  // Destructure the action creators
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;