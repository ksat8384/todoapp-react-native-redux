import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'toDo',
  initialState: { todoList: [] },
  reducers: {
    addTodo(state, action) {
      console.log('action = ', action);
      const { newContent } = action.payload
       console.log('newContent = ', newContent);
      let newTodo = {
        id: Math.random(),
        content: newContent,
      };
      state.todoList.push(newTodo);
      console.log('state>>', state)
    },
    deleteTodo(state, action) {
      let { todoList } = state;
      state.todoList = todoList.filter(todo => todo.id !== action.payload.id);
    },
    editTodo(state, action) { 
      let { todoList } = state;
      state.todoList = todoList.map(todo => todo.id === action.payload.id? action.payload: todo)
    }
  },
});

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;
