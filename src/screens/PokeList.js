import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getAllPokemons } from '../../api/api';
import CardContainer from '../components/Card/CardContainer';
import Loader from '../components/Loader/Loader';
import tw from 'twrnc';

const PokeList = ({ navigation }) => {
    const [pokeList, setPokeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleRedirection = (component, pokemon = {}) => {
        navigation.navigate(component, { data: pokemon });
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getAllPokemons();
            setPokeList(response.results);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching Pokémon list:', error);
          }
        };
      
        fetchData();
    }, []);
    
    return (
        <View style={[tw`flex-col p-5`]}>
            {isLoading ? 
                <Loader /> : 
                <FlatList 
                    contentContainerStyle={[tw`my-5`]}
                    data={pokeList}
                    keyExtractor={pokemon => pokemon.name}
                    renderItem={({item}) =>
                        (<CardContainer pokemon={item} handleRedirection={handleRedirection}/>)
                    }
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    pokeList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    pokeItem: {
        width: '45%'
    }
})
export default PokeList;