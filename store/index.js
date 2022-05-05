import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './slices/taskSlice';

const taskMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const taskState = store.getState();
  if (typeof window !== 'undefined') {
    localStorage.setItem('task', JSON.stringify(taskState))
  }

  return result;
};

export default configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskMiddleware),
})

