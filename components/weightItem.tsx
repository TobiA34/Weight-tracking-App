import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeightItem = ({ item }) => {
  // Define a placeholder image path

  return (
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <Image
          source={item.icon ? { uri: item.icon } : ""}  // Conditionally render image or placeholder
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.addTop}>{item.weight}</Text>
      <Text style={styles.addTop}>Date: {item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    height: 100, // Adjust as needed
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  item: {
    width: '45%',          
    flexDirection: 'column',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 16,
    marginLeft: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  addTop: {
    marginTop: 8,
  },
});

export default WeightItem;