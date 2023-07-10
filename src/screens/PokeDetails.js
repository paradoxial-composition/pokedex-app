import React from 'react';
import { ScrollView  } from 'react-native';
import DetailsHeader from '../components/DetailsHeader/DetailsHeader';
import DeatailsBody from '../components/DetailsBody/DetailsBody';
import tw from 'twrnc';

const PokeList = (props) => {
    const { data } = props.navigation.state.params;
    return (
        <ScrollView style={[tw`w-full flex-col`]}>
            <DetailsHeader pokemon={data}/>
            <DeatailsBody data={data}/>
        </ScrollView>
    );
}

export default PokeList;