import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Main Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    color:'orangered',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
