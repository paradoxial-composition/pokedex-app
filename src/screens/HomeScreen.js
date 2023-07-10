import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import SearchScreen from "./SearchScreen";
import Separator from '../components/Separator/Separator';

const HomeScreen = ({navigation}) => {
  return  (
    <View style={[tw`w-full h-1/2 flex justify-center items-center`]}>
      <SearchScreen navigation={navigation}/>
      <Separator />
      <TouchableOpacity onPress={() => navigation.navigate('PokeList') }>
        <Text style={[tw`shadow-2xl my-5`, styles.text]}>Go to pokedex</Text>
      </TouchableOpacity>
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    width: 250,
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 25,
    color: 'white',
    backgroundColor: '#E54222',
    paddingVertical: 8,
  },
});

export default HomeScreen;
