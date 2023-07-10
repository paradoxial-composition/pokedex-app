import React from 'react';
import { View, Text } from 'react-native';
import Loader from '../Loader/Loader';
import tw from 'twrnc';

const CardPlaceholder = () => {

    return (
        <View style={[tw`mb-5`]}>
                <View style={[tw`w-full h-42 m-auto`]}>
                    <Loader />
                </View>
                <View style={[tw`w-full p-2 m-auto flex justify-center border-2 rounded-b-3xl`]}>
                    <View style={[tw`w-full flex-col`]}>
                        <Text style={[tw`text-center my-2 uppercase text-3xl`]}>--</Text>
                    </View>
                    
                    <View style={[tw`w-full flex flex-row justify-center my-2`]}>
                        <Text style={[tw`mx-2  text-xl`]}>{`Height: -- m`}</Text>
                        <Text style={[tw`mx-2  text-xl`]}>{`Weight: -- Kg`}</Text>
                    </View>
                </View>
        </View>
    )
}

export default CardPlaceholder;