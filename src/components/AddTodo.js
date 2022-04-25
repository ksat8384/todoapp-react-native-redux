import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoSlice';

const AddTodo = () => {
  const [state, setState] = useState({
    content: '',
    contentError: null,
  });

  const dispatch = useDispatch();

  const handleChange = text => {
    console.log('handleChange > text = ', text);
    setState({...state, content: text, contentError: null});
  };

  const onAdd = () => {
    if (state.content === '') {
      console.log('text is empty.');
      setState({...state, contentError: 'You must write something!'});
      return;
    }
    dispatch(addTodo({newContent: content}));
    setState({...state, content: ''});
  };

  const {content, contentError} = state;

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter todo item"
        value={content}
        onChangeText={handleChange}
      />
      <Button style={styles.button} title="Add" onPress={onAdd} />
      {contentError ? <Text>{contentError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default AddTodo;
