import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../data/PokeRepo";

export default function BetterAPICall() {
  //state variable to store the pokemon
  const [pokemonList, setPokemonList] = useState([]);
  //state variable to track when the component is loading (waiting on API response)
  const [isLoading, setIsLoading] = useState(true);
  //state variable for errors
  const [error, setError] = useState(null);

  useEffect(() => {
    //we need async function
    const fetchPokemon = async () => {
      try {
        //set loading to true
        setIsLoading(true);
        //fetch the list of pokemon
        const list = await fetchPokemonList();
        console.log(list);
        //list.forEach((poke) => console.log(poke));
        //lets make an array to store a collection of pokemon details
        const detailedList = [];
        for (const pokemon of list) {
          console.log("inside list");
          console.log(list);
          const details = await fetchPokemonDetails(pokemon.url);
          detailedList.push(details);
        }
        // const detailedList = await Promise.all(
        //   list.map((pokemon) => fetchPokemonDetails(pokemon.url))
        // );
        // console.log(detailedList);
      } catch (error) {
        //update the error state
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <View>
      <Text>BetterAPICall</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
