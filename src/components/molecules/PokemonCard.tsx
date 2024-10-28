import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { PokemonImage } from '../atoms/PokemonImage';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const PokemonCard = ({ name, imageUrl, onPress, style }: PokemonCardProps) => (
  <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
    <PokemonImage url={imageUrl} />
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});