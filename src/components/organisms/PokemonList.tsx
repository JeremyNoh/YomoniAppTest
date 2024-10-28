import React from 'react';
import { FlatList, StyleSheet, Dimensions, useWindowDimensions, View } from 'react-native';
import { PokemonCard } from '../molecules/PokemonCard';
import { API_IMG } from '@/src/api/pokemon';

interface Pokemon {
  name: string;
  url: string;
}

const getImageUrlPokemon = (url: string) => {
  return `${API_IMG}${url}.png`
}

interface PokemonListProps {
  pokemons: Pokemon[];
  onPokemonPress: (name: string) => void;
}

export const PokemonList = ({ pokemons, onPokemonPress }: PokemonListProps) => {
  const { width } = useWindowDimensions();

  const numColumns = Math.floor(width / 160);

  const cardWidth = width / numColumns - 20; // 20 pour les marges (10 de chaque côté)

  const renderItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard
      name={item.name}
      imageUrl={getImageUrlPokemon(item.url.split('/')[6])}
      onPress={() => onPokemonPress(item.name)}
      style={{ width: cardWidth }}
    />
  );

  return (
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        key={numColumns}
        style={styles.list}
      />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flex:1
  },
});