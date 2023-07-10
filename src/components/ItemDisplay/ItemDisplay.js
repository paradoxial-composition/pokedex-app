import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { getDataFromUrl } from '../../../api/api';

const ItemDisplay = ({item}) => {
    const [itemData, setItemData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getDataFromUrl(item.url);
                setItemData(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Couldnt fetch Item data ..', error)
            }
        }

        fetchData();
    }, []);

    const getItemName = () => itemData.names.filter( item => 'en' == item.language.name)[0].name || '--';

    return (
        <View style={[tw`w-1/2 h-16 m-auto flex-col items-center`]}>
            {isLoading ? 
                <Text>Loading ...</Text> :                
                    <>
                        <Image 
                            style={[tw`w-1/2 flex-1`]}
                            source={{
                                uri: itemData.sprites.default
                            }}
                            resizeMode='contain'
                        />
                        <Text style={[tw`text-center text-lg`]}>{getItemName()}</Text>
                    </>
                }
        </View>
    );
}

export default ItemDisplay;
