import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Sprites from '../Sprites/Sprites'; 
import AbilityDisplay from '../AbilityDisplay/AbilityDisplay';
import Separator from '../Separator/Separator';

const DeatailsBody = ({ data }) => {
    const abilities = data.abilities.map( (item, index) => (
        <AbilityDisplay key={index} ability={item.ability}/>
    ));

    return (
        <>
            <Sprites sources={data.sprites}/>
            <Separator />
            <View>
                <Text style={[tw`text-center text-4xl`]}>Abilities</Text>
                {abilities}
            </View>
        </>
    );
};

export default DeatailsBody;