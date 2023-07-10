import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const ListScreen = () => {    
    const friends = Array.from({ length: 9 }, (_, index) => ({name: 'Friend #' + (index + 1)})); 

    return (
      <FlatList 
          contentContainerStyle={styles.wrapper}
          data={friends}
          keyExtractor={friend => friend.name}
          renderItem={({item}) =>
              (<Text style={styles.text} >{item.name}</Text>)
          }
      />
    );
};

const styles = StyleSheet.create({
  text: {
    width: 300,
    fontSize: 30,
    margin: 'auto',
    color: 'purple',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
  },
  wrapper: {
    width: '100%',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ListScreen;
