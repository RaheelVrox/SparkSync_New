
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const  AreasDeregulated= ({ cities }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>
        {cities.map((city, index) => (
          <View key={index} style={styles.column}>
            <Text style={styles.text}>{city}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AreasDeregulated;
