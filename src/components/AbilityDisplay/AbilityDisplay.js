import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getDataFromUrl } from '../../../api/api';
import tw from 'twrnc';

const AbilityDisplay = ({ ability }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [abilityData, setAbilityData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getDataFromUrl(ability.url);
                setAbilityData(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Error while getting Ability Data ..', error);
            }
        }

        fetchData();
    }, []);

    const getAbilityShortDescription = () => abilityData.effect_entries.filter( item => 'en' == item.language.name)[0].effect || '--';
    const getAbilityFullDescription = () => abilityData.effect_entries.filter( item => 'en' == item.language.name)[0].short_effect || '--';

    return (
        <View style={[tw`w-4/5 m-auto flex-col items-center my-2`]}>
        {isLoading ?
        <Text>...Loading </Text> :
            <>
                <Text style={[tw`w-full text-center text-2xl uppercase underline mb-2`]}>{abilityData.name}</Text>
                <Text style={[tw`w-full text-center text-xl mb-2`]}>{getAbilityShortDescription()}</Text>
                <Text style={[tw`w-full text-center text-lg`]}>{getAbilityFullDescription()}</Text>
            </>
        }
        </View>
    );
}

export default AbilityDisplay;