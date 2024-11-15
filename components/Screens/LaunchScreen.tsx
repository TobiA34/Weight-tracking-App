import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/mainStyles';
import { Switch } from 'react-native-switch';

const LaunchScreen = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [currentWeight, setCurrentWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [fullName, setFullName] = useState('');
  const [weight, setWeight] = useState({
    goal: '',
    weight: ''
  });
  const [isSwitchOn, setIsSwitchOn] = useState(false); // State to manage the switch value
  const toggleSwitch = (val: boolean) => {
    console.log(val); // Log the new value when the switch is toggled
    setIsSwitchOn(val); // Update the state based on the switch's value
  };

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
  // Check if the necessary fields are filled
  if (!goal) {
    Alert.alert("Please enter a weight goal");
    return;
  }

    if (!fullName) {
    Alert.alert("Please enter a full Name");
    return;
  }

  if (!currentWeight) {
    Alert.alert("Please enter your current weight");
    return;
  }

  if (!fullName) {
    Alert.alert("Please enter your full name");
    return;
  }

  // Log the current data before updating the state
  const userWeightGoal = {
    goal: goal,
    weight: currentWeight,
  };

  console.log(userWeightGoal); // This will print the correct values

  // Set the state with the weight and goal
  setWeight(userWeightGoal);

  // Store the data in AsyncStorage
  AsyncStorage.setItem('userWeightGoal', JSON.stringify(userWeightGoal));
  AsyncStorage.setItem('fullname', fullName);

  // Save the selected unit (kg or lbs) in AsyncStorage
  AsyncStorage.setItem('units', JSON.stringify(isSwitchOn ? 'KG' : 'LBS'));

  // Navigate to the next screen
  navigation.replace('Home');
};

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        {isFirstLaunch ? (
          <View style={styles.launchScreen}>
            <Text style={styles.welcomeText}>Save your goals</Text>

            <Switch
              value={isSwitchOn} // Set the value of the switch dynamically
              onValueChange={toggleSwitch} // Call toggleSwitch when the user changes the value
              disabled={false} // You can set this to true to disable the switch
              activeText={'KG'} // Text for when the switch is on
              inActiveText={'LBS'} // Text for when the switch is off
              backgroundActive={'green'} // Background color when the switch is active
              backgroundInactive={'gray'} // Background color when the switch is inactive
              circleActiveColor={'#30a566'} // Circle color when the switch is on
              circleInActiveColor={'#000000'} // Circle color when the switch is off
            />
            
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
              placeholder="Enter Your current weight  "
              placeholderTextColor="#888" // Ensure it's a color that's visible on the background
              style={styles.textInput}
              value={currentWeight}
              onChangeText={setCurrentWeight}
            />

            {/* TextInput for Weight Goal */}
            <TextInput
              multiline
              numberOfLines={4}
              placeholder="Enter Your weight Goal"
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
    </TouchableWithoutFeedback>
  );
};

export default LaunchScreen;