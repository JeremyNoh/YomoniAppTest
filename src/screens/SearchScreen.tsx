import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { Input } from '../components/atoms/Input';
import { PokemonList } from '../components/organisms/PokemonList';
import { pokemonApi } from '../api/pokemon';

export const SearchScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: pokemons } = useQuery({
    queryKey: ['pokemons', searchQuery],
    queryFn: () => pokemonApi.searchPokemons(searchQuery),
  });

  return (
    <View style={styles.container}>
      <Input
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Recherche ton Pokemon..."
      />
      <PokemonList
        pokemons={pokemons || []}
        onPokemonPress={(name) => navigation.navigate('Details', { name })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    flex: 1
  },
});