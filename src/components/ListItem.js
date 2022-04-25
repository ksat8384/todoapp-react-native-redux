import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ListItem = React.memo(({item, onRemove}) => {
  console.log('Render : ListItem');
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.content}</Text>
      <Button
        testID="remove"
        title="Remove"
        onPress={() => onRemove(item.id)}
      />
    </View>
  );
});

export default ListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00ffff',
    padding: 20,
    marginVertical: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
});
