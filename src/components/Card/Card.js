import React, { useEffect } from "react";
import tw from "twrnc";
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../mocks/typeColors';
import * as globalStyle from '../../scss/global';

const Card = ({ pokemon, handleRedirection }) => {
    const typeTags = pokemon.types.map( (item, index) => {
        return (<>
            <Text 
                key={index}
                style={[
                        tw`mx-3 uppercase border rounded-3xl p-1 px-2`,
                        {backgroundColor: colors[item.type.name]}
                    ]}
            >
                {item.type.name}
            </Text>
        </>)
    });

    return (
        <View style={[tw`mb-5`]}>
            <TouchableOpacity onPress={() => handleRedirection('PokeDetails', pokemon)}>
                <View style={[tw`w-full h-42 m-auto`]}>
                    <Image 
                        style={[tw`flex-1`]}
                        source={{
                            uri: pokemon.sprites.other['official-artwork'].front_default
                        }}
                        resizeMode="contain"
                    />
                </View>
                <View style={[tw`w-full p-2 m-auto flex justify-center border-2 rounded-b-3xl`, styles.infoCard]}>
                    <View style={[tw`w-2/3 h-24 m-auto flex flex-row  my-2`]}>
                        <Image 
                            style={[tw`w-1/2 flex-1`]}
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            resizeMode="contain"
                        />
                        <Image 
                            style={[tw`w-1/2 flex-1`]}
                            source={{
                                uri: pokemon.sprites.back_default
                            }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={[tw`w-full flex-col`]}>
                        <Text style={[tw`text-center my-2 uppercase text-3xl text-zinc-200`]}>{pokemon.name}</Text>
                        <View style={[tw`flex flex-row justify-center my-2`]}>{typeTags}</View>
                    </View>
                    
                    <View style={[tw`w-full flex flex-row justify-center my-2`]}>
                        <Text style={[tw`mx-2  text-xl text-zinc-200`]}>{`Height: ${pokemon.height/10} m`}</Text>
                        <Text style={[tw`mx-2  text-xl text-zinc-200`]}>{`Weight: ${pokemon.weight/100} Kg`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    infoCard: {
        backgroundColor: globalStyle.default.colors.red,
    }
})
export default Card;