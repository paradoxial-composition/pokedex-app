import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getDataFromUrl } from '../../../api/api';
import tw from 'twrnc';

interface AbilityData {
  name: string;
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
    };
  }[];
}

interface Ability {
  url: string;
}

interface AbilityDisplayProps {
  ability: Ability;
}

const AbilityDisplay: React.FC<AbilityDisplayProps> = ({ ability }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [abilityData, setAbilityData] = useState<AbilityData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataFromUrl<AbilityData>(ability.url);
        setAbilityData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error while getting Ability Data:', error);
      }
    };

    fetchData();
  }, [ability.url]);

  const getAbilityShortDescription = () =>
    abilityData?.effect_entries.find(item => item.language.name === 'en')?.effect || '--';

  const getAbilityFullDescription = () =>
    abilityData?.effect_entries.find(item => item.language.name === 'en')?.short_effect || '--';

  return (
    <View style={[tw`w-4/5 m-auto flex-col items-center my-2`]}>
      {isLoading ? (
        <Text>...Loading</Text>
      ) : (
        <>
          <Text style={[tw`w-full text-center text-2xl uppercase underline mb-2`]}>
            {abilityData?.name}
          </Text>
          <Text style={[tw`w-full text-center text-xl mb-2`]}>
            {getAbilityShortDescription()}
          </Text>
          <Text style={[tw`w-full text-center text-lg`]}>
            {getAbilityFullDescription()}
          </Text>
        </>
      )}
    </View>
  );
};

export default AbilityDisplay;
