import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getPokemonData } from '../../../api/api';
import CardPlaceholder from "./CardPlaceholder";

const CardContainer = ({ pokemon, handleRedirection }) => {
    const [pokdeData, setPokeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPokemonData(pokemon.name);
                setPokeData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error while fetching a single pokemon\'s data .. ', error);
            }
        };
        
        fetchData();
    }, []);

    return isLoading ? 
        <CardPlaceholder /> : 
        <Card key={pokdeData.name} pokemon={pokdeData} handleRedirection={handleRedirection}/>
}

export default CardContainer