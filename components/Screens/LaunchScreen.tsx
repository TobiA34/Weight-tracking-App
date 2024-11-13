import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/mainStyles';

const LaunchScreen = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [currentWeight, setCurrentWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [fullName, setFullName] = useState('')
  const [weight, setWeight] = useState({
    goal: '',
    weight: ''
  });

  // Check if it's the user's first time launching the app
  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      
      if (hasLaunched === null) {
        // First time launch
        setIsFirstLaunch(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      } else {
        // App has been launched before
        setIsFirstLaunch(false);
        navigation.replace('Home');
      }
    };

    checkFirstLaunch();
  }, []);

  // Render nothing until the first launch status is determined
  if (isFirstLaunch === null) {
    return null;
  }

  const saveInfo = () => {
    // Log the current data before updating the state
    const userWeightGoal = {
      goal: goal,
      weight: currentWeight,
    };

    console.log(userWeightGoal); // This will now print the correct values

    // Set the state with the weight and goal
    setWeight(userWeightGoal);

    // Store the data in AsyncStorage
    AsyncStorage.setItem('userWeightGoal', JSON.stringify(userWeightGoal));

   AsyncStorage.setItem('fullname', fullName);



    // Navigate to the next screen
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {isFirstLaunch ? (
        <View style={styles.launchScreen}>
          <Text style={styles.welcomeText}>Save your goals</Text>
          
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Enter Your full name"
            placeholderTextColor="#888" // Ensure it's a color that's visible on the background
            style={styles.textInput}
            value={fullName}
            onChangeText={setFullName}
          />

          {/* TextInput for Current Weight */}
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Enter Your current weight (KG)"
            placeholderTextColor="#888" // Ensure it's a color that's visible on the background
            style={styles.textInput}
            value={currentWeight}
            onChangeText={setCurrentWeight}
          />

          {/* TextInput for Weight Goal */}
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Enter Your weight Goal (KG)"
            placeholderTextColor="#888" // Ensure it's a color that's visible on the background
            style={styles.textInput}
            value={goal}
            onChangeText={setGoal}
          />

          {/* Save Button */}
          <Button 
            title="Save" 
            onPress={saveInfo} // Navigate to the next screen
          />
        </View>
      ) : (
        <View style={styles.launchScreen}>
          <Text>App already launched before</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LaunchScreen;