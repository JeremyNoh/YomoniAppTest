import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

interface PokemonImageProps {
  url: string;
  size?: number;
}

export const PokemonImage = ({ url, size = 100 }: PokemonImageProps) => (
  <Image
    source={{ uri: url }}
    style={[styles.image, { width: size, height: size }]}
  />
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
});