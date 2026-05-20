import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

interface Pokemon {
  name: string;
  image: string;
  game_index?: number;
  types: PokemonType[];
}

interface PokemonType{
  type: {
    name: string;
    url: string;
  }
}

const colorsByType = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export default function Index() {

const [pokemons, setPokemons] = useState<Pokemon[]>([]);

useEffect(() => {
  fetchPokemons();
},[])

async function fetchPokemons(){
  try{
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=12"
    );

    const data = await response.json();
    
    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.front_default,
          game_index: details.game_indices[0]?.game_index,
          types: details.types
        }
      })
    )
    
    setPokemons(detailedPokemons);
  }catch(e){
    console.log(e);
  }
}

  return (
    <ScrollView
    contentContainerStyle={{
      gap: 15,
      padding: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center'
    }}
    >
      {pokemons.map((p) => (
        <Link 
        key={p.name}
        href={{pathname: '/details', params: { name: p.name }}}
        style={{
          // @ts-ignore
          backgroundColor: colorsByType[p.types[0].type.name] + 60,
          borderRadius: 20,
          width: 'auto',
          height: 220
        }}
        >
        <View>
          <Image 
            source={{ uri: p.image }}
            style={{ width: 150, height: 140 }}
          />
          <View style={{
            marginVertical: -5,
            paddingBottom: 16,
          }}>
          <Text style={styles.name}>
            {p.name}
          </Text>
          <Text style={styles.type}>
            {p.game_index}
          </Text>
          </View>
          </View>
      </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  },
  type: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center'
  }
})