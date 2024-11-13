import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Card Component
const Card = ({ title, description, imageSource }) => {
  return (
    <View style={styles.cardContainer} >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

// Styling for the Card component
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // for Android shadow
    overflow: 'hidden', // Prevents content overflowing the rounded corners
    width:170,
    height:103,
    marginHorizontal:10,
    marginVertical:10
  },
 
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 24,
    color: '#666',
    marginBottom: 10,
  },
});

export default Card;