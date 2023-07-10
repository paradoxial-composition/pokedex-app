import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { getPokemonData } from '../../api/api';
import Loader from  '../components/Loader/Loader';

const SearchScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async ( value ) => {
        let pokemon = null;
        setIsLoading(true);
        setErrorMessage('');
        try {
            pokemon = await getPokemonData(value);
            if( pokemon ) {
                navigation.navigate('PokeDetails', { data: pokemon });
            }
        } catch ( error ) {
            setErrorMessage('Couldn\'t fetch data !');
            console.error('Error While fetching pokemon data ..', error);
        }
        
        setIsLoading(false);
    };

    return (
        <View style={[tw`w-full flex-col p-5 my-3`]}>
            {isLoading ? 
                <Loader /> : 
            <View style={[tw`w-full flex-col justify-center items-center`]}>
                <TextInput 
                    style={[tw`w-3/4 m-auto border-gray-400 text-center text-lg p-2 mb-5`]}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchValue}
                    onChangeText={ value => setSearchValue(value) }
                    placeholder='Poké search..'
                />
                <TouchableOpacity onPress={() => handleSearch(searchValue)}>
                    <Text style={[tw`shadow-2xl`, styles.text]}>Search</Text>
                </TouchableOpacity>
                <Text style={[tw`text-lg text-red-500 text-center mt-3`]}>{errorMessage}</Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
      width: 150,
      fontSize: 20,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 25,
      color: 'white',
      backgroundColor: '#E54222',
      paddingVertical: 4,
    },
  });

export default SearchScreen;