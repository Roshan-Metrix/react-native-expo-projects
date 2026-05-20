import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function Details() {
 const params = useLocalSearchParams();

 console.log(params.name);

 useEffect(() => {
    async function fetchPokemonByName(name: string) {
       try{

       }catch(e){

       }
    }
 })

  return (
    <ScrollView
    contentContainerStyle={{
      gap: 16,
      padding: 16
    }}
    >
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
})