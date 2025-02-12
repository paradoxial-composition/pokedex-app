import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { getDataFromUrl } from '../../../api/api';

interface ItemData {
  names: {
    name: string;
    language: {
      name: string;
    };
  }[];
  sprites: {
    default: string;
  };
}

interface Item {
  url: string;
}

interface ItemDisplayProps {
  item: Item;
}

const ItemDisplay: React.FC<ItemDisplayProps> = ({ item }) => {
  const [itemData, setItemData] = useState<ItemData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataFromUrl<ItemData>(item.url);
        setItemData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Could not fetch Item data:', error);
      }
    };

    fetchData();
  }, [item.url]);

  const getItemName = () =>
    itemData?.names.find(item => item.language.name === 'en')?.name || '--';

  return (
    <View style={[tw`w-1/2 h-16 m-auto flex-col items-center`]}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Image
            style={[tw`w-1/2 flex-1`]}
            source={{
              uri: itemData?.sprites.default,
            }}
            resizeMode="contain"
          />
          <Text style={[tw`text-center text-lg`]}>{getItemName()}</Text>
        </>
      )}
    </View>
  );
};

export default ItemDisplay;
