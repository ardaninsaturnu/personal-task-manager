import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    taskAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    }
  }
})

export const { taskAdded } = tasksSlice.actions
export default tasksSlice.reducer