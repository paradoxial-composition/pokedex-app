import React from 'react';
import { ScrollView } from 'react-native';
import DetailsHeader from '../components/DetailsHeader/DetailsHeader';
import DetailsBody from '../components/DetailsBody/DetailsBody';
import tw from 'twrnc';
import { Pokemon } from '../models/pokemon';


interface NavigationParams {
  data: Pokemon;
}

interface PokeListProps {
  navigation: {
    state: {
      params: NavigationParams;
    };
  };
}

const PokeList: React.FC<PokeListProps> = (props) => {
  const { data } = props.navigation.state.params;

  return (
    <ScrollView style={tw`w-full flex-col`}>
      <DetailsHeader pokemon={data} />
      <DetailsBody data={data} />
    </ScrollView>
  );
};

export default PokeList;