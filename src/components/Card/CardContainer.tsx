import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getPokemonData } from "../../../api/api";
import CardPlaceholder from "./CardPlaceholder";
import { Pokemon, PokemonItem } from "../../models/pokemon";

interface CardContainerProps {
  pokemon: PokemonItem;
  handleRedirection: (screen: string, pokemon: Pokemon) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  pokemon,
  handleRedirection,
}) => {
  const [pokeData, setPokeData] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonData(pokemon.name);
        setPokeData(response);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error while fetching ${pokemon.name} data:`, error);
      }
    };

    fetchData();
  }, [pokemon.name]);

  return isLoading ? (
    <CardPlaceholder />
  ) : (
    <Card
      key={pokeData?.name}
      pokemon={pokeData!}
      handleRedirection={handleRedirection}
    />
  );
};

export default CardContainer;
