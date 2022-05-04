import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        key: action.payload.key,
        name: action.payload.name,
        priority: action.payload.priority,
        completed: false
      }
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter( item => item.key !== action.payload.key );
    }
  }
})

export const { addTask,deleteTask } = taskSlice.actions
export default taskSlice.reducer