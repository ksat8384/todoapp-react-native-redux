import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from './ListItem';
import {deleteTodo} from '../redux/todoSlice';

const ListTodo = () => {
  console.log('Render : List');

  const dispatch = useDispatch();
  const {todoList} = useSelector(state => state.toDo);
  console.log('todoList =', todoList);

  const onRemove = id => {
    console.log('onRemove called = id = ', id);
    dispatch(deleteTodo({id}));
  };

  const renderItem = ({item}) => (
    <ListItem key={item.id} item={item} onRemove={onRemove} />
  );

  return (
    <FlatList testID="flat-list" data={todoList} renderItem={renderItem} />
  );
};

export default ListTodo;
