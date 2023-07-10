import React from 'react';
import { View, Text, Image } from 'react-native';
import Separator from '../Separator/Separator';
import tw from 'twrnc';

const Sprites = ({ sources }) => {
    const hasFemaleForm = () => {
        return (sources.back_female) ? true : false;
    }

    return (
        <View style={[tw`w-full mt-3`]}>
            <Separator />
            <Text style={[tw`w-full text-center text-2xl`]}>Sprites</Text>
            <View style={[tw`w-4/5 h-24 m-auto flex flex-row`]}>
                <Image 
                    style={[tw`w-1/4 flex-1`]}
                    source={{uri: sources.back_default}}
                    resizeMode='contain'
                />
                <Image 
                    style={[tw`w-1/4 flex-1`]}
                    source={{uri: sources.front_default}}
                    resizeMode='contain'
                />
                <Image 
                    style={[tw`w-1/4 flex-1`]}
                    source={{uri: sources.back_shiny}}
                    resizeMode='contain'
                />
                <Image 
                    style={[tw`w-1/4 flex-1`]}
                    source={{uri: sources.front_shiny}}
                    resizeMode='contain'
                />
            </View>

            {hasFemaleForm() && <>
                <Text style={[tw`w-full text-center text-2xl`]}>Female Forms</Text>
                <View style={[tw`w-4/5 h-24 m-auto flex flex-row`]}>
                    <Image 
                        style={[tw`w-1/4 flex-1`]}
                        source={{uri: sources.back_female}}
                        resizeMode='contain'
                    />
                    <Image 
                        style={[tw`w-1/4 flex-1`]}
                        source={{uri: sources.front_female}}
                        resizeMode='contain'
                    />
                    <Image 
                        style={[tw`w-1/4 flex-1`]}
                        source={{uri: sources.back_shiny_female}}
                        resizeMode='contain'
                    />
                    <Image 
                        style={[tw`w-1/4 flex-1`]}
                        source={{uri: sources.front_shiny_female}}
                        resizeMode='contain'
                    />
                </View>
            </>}
        </View>
    );
};

export default Sprites;