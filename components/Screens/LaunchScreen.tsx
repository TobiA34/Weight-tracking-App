import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LaunchScreen = ({ navigation }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

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

  return (
    <SafeAreaView style={styles.container}>
      {isFirstLaunch ? (
        <View style={styles.launchScreen}>
          <Text style={styles.welcomeText}>Welcome to the App!</Text>
          <Button 
            title="Get Started" 
            onPress={() => navigation.replace('Home')} // Navigate to the next screen
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchScreen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LaunchScreen;