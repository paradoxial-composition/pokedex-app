import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getAllPokemon } from '../../api/api';
import CardContainer from '../components/Card/CardContainer';
import Loader from '../components/Loader/Loader';
import tw from 'twrnc';
import { PokemonItem, Pokemon } from '../models/pokemon';

interface PokeListProps {
  navigation: {
    navigate: (screen: string, params?: { data?: Pokemon }) => void;
  };
}

const PokeList: React.FC<PokeListProps> = ({ navigation }) => {
  const [pokeList, setPokeList] = useState<PokemonItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleRedirection = (screen: string, pokemon: Pokemon = {} as Pokemon) => {
    navigation.navigate(screen, { data: pokemon });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPokemon();
        setPokeList(response.results as PokemonItem[]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={[tw`flex-col p-5`]}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          contentContainerStyle={[tw`my-5`]}
          data={pokeList}
          keyExtractor={(pokemon: PokemonItem) => pokemon.name}
          renderItem={({ item }: {item: PokemonItem}) => (
            <CardContainer pokemon={item} handleRedirection={handleRedirection} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pokeItem: {
    width: '45%',
  },
});

export default PokeList;