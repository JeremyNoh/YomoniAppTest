import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { PokemonImage } from '../components/atoms/PokemonImage';
import { pokemonApi } from '../api/pokemon';

export const DetailsScreen = ({ route }: any) => {
  const { name } = route.params;
  
  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => pokemonApi.getPokemonDetails(name),
  });

  if (!pokemon) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <PokemonImage
          url={pokemon.sprites.other['official-artwork'].front_default}
          size={200}
        />
        <Text style={styles.name}>{pokemon.name}</Text>
        
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Stats</Text>
          {pokemon.stats.map((stat: any) => (
            <View key={stat.stat.name} style={styles.statRow}>
              <Text style={styles.statName}>{stat.stat.name}</Text>
              <Text style={styles.statValue}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.typesContainer}>
          <Text style={styles.sectionTitle}>Types</Text>
          <View style={styles.typesList}>
            {pokemon.types.map((type: any) => (
              <View key={type.type.name} style={styles.typeTag}>
                <Text style={styles.typeText}>{type.type.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginVertical: 20,
  },
  statsContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  statName: {
    textTransform: 'capitalize',
  },
  statValue: {
    fontWeight: 'bold',
  },
  typesContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  typesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeTag: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 5,
  },
  typeText: {
    color: 'white',
    textTransform: 'capitalize',
  },
});