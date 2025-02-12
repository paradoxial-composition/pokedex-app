import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
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
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const handleRedirection = (screen: string, pokemon: Pokemon) => {
    navigation.navigate(screen, { data: pokemon });
  };

  const fetchData = async (url: string = 'https://pokeapi.co/api/v2/pokemon/') => {
    try {
      const response = await getAllPokemon(url);
      setPokeList((prevList) => [...prevList, ...response.results]);
      setNextUrl(response.next);
      setIsLoading(false);
      setIsFetchingMore(false);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const fetchMoreData = async () => {
    if (!nextUrl || isFetchingMore) return;

    setIsFetchingMore(true);
    await fetchData(nextUrl as string);
  };

  useEffect(() => {
    // Initial data fetch
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
          renderItem={({ item }: { item: PokemonItem }) => (
            <CardContainer pokemon={item} handleRedirection={handleRedirection} />
          )}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? (
              // <ActivityIndicator size="large" color="#0000ff" />
              <Loader />
            ) : null
          }
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