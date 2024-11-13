import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Card Component
const HeroCard = ({ title, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.heroCardContainer} onPress={onPress}>
    <View style={ styles.cardContent}>
         <Image style={styles.cardImage} source={{uri:"https://t4.ftcdn.net/jpg/02/43/13/15/240_F_243131531_jmNppYX9Ux2Hj2RV9yYR1swicwcYr8EQ.jpg"}} />
      <View style={styles.cardContent}>
        // <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
    </View>
 
      </View>
    </TouchableOpacity>
  );
};

// Styling for the Card component
const styles = StyleSheet.create({
  heroCardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // for Android shadow
    overflow: 'hidden', // Prevents content overflowing the rounded corners
    width:'95%',
    height:'auto',
    marginHorizontal:10,
    marginVertical: 30,
    
   },
cardImage: {
  width: '30%', // Ensures the image fills the width of the container
  height: 160, // Adjust the height as needed
  resizeMode: 'cover', // Makes sure the image doesn't stretch or distort
},
  cardContent: {
    padding: 0,
    flexDirection:'row-reverse',
    alignContent:'center',
   },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    width:'50%',
    marginHorizontal:30,
    marginTop:24
   },
   
    cardDescription: {
    fontSize: 24,
    color: '#666',
    marginBottom: 10,
    width: 200
  },
});

export default HeroCard;