import React from 'react';
import { View, Image, Text } from 'react-native';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import tw from 'twrnc';
import Separator from '../Separator/Separator';
import { Pokemon } from '../../models/pokemon';

interface DetailHeaderProps {
  pokemon: Pokemon;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ pokemon }) => {
  const heldItems = pokemon.held_items?.map((item, index) => (
    <ItemDisplay key={index} item={item.item} />
  ));

  return (
    <View style={[tw`w-full`]}>
      <View style={[tw`w-full h-70 m-auto`]}>
        <Image
          style={[tw`flex-1`]}
          source={{
            uri: pokemon.sprites?.other?.['official-artwork']?.front_default,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={[tw`w-full flex-col`]}>
        <Text style={[tw`text-center my-2 uppercase text-3xl`]}>{pokemon.name}</Text>
        <Text style={[tw`text-center my-1 text-xl`]}>{`Height: ${pokemon.height ? pokemon.height / 10 : '--'} m`}</Text>
        <Text style={[tw`text-center my-1 text-xl`]}>{`Weight: ${pokemon.weight ? pokemon.weight / 100 : '--'} Kg`}</Text>
        <Text style={[tw`text-center my-1 text-xl`]}>{`Base experience: ${pokemon.base_experience ?? '--'}`}</Text>
      </View>
      {heldItems && heldItems?.length > 0 && (
        <>
          <Separator />
          <View style={[tw`w-full flex-col my-3`]}>
            <Text style={[tw`w-full text-center text-xl`]}>Held Items</Text>
            <View style={[tw`w-full flex-row`]}>
              {heldItems}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default DetailHeader;
