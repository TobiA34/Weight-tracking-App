import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button, Image, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';
import WeightItem from '../weightItem';
import { initialItemData, currentDay } from '../../data';
import styles from '../../styles/mainStyles';
import DatePicker from 'react-native-date-picker';
import CustomModal from '../Modals/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Card';
import HeroCard from '../HeroCard';

interface WeightEntry {
  weight: string;
  date: string;
  description: string;
}

function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [text, setText] = useState<string>(''); // For description
  const [goal, setGoal] = useState<string>(''); // For storing goal
  const [currentWeight, setcurrentWeight] = useState<string>(''); // For storing goal
  const [fullName,setFullName] = useState<string>(''); // For storing goal
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [itemData, setItemData] = useState<any[]>(initialItemData || []); // Ensure it's always an array

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  // Function to validate fields before saving
  const validateFields = () => {
    if (!selected) {
      Alert.alert("Error", "Please select a weight.");
      return false;
    }
    if (!text.trim()) {
      Alert.alert("Error", "Please enter a description.");
      return false;
    }
    if (!date) {
      Alert.alert("Error", "Please select a valid date.");
      return false;
    }
    return true;
  };

  // Fetch the saved goal from AsyncStorage when the component mounts
  useEffect(() => {
    const getGoal = async () => {
      const value = await AsyncStorage.getItem("userWeightGoal");

      if (value !== null) {
        // We have data! Parse it and extract the goal
        const parsedValue = JSON.parse(value);
        console.log(parsedValue.goal); // Log the goal to the console
        setGoal(parsedValue.goal); // Store the goal in state
        setcurrentWeight(parsedValue.weight)
      }
    };

        const getFullName = async () => {
      const value = await AsyncStorage.getItem("fullname");

      if (value !== null) {
        // We have data! Parse it and extract the goal
        const parsedValue = JSON.parse(value);
          setFullName(value)
      }
    };

    getGoal();
    getFullName();
  }, []); // Empty dependency array to only run on mount

  // Function to save weight entry
  const saveWeight = () => {
    if (!validateFields()) return;

    const newWeight: WeightEntry = {
      weight: selected,
      date: date.toLocaleDateString(),
      description: text,
    };

    const newItemData = [
      ...itemData,
      {
        icon: (
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: 'https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png',
            }}
          />
        ),
        weight: `Weight: ${selected}`,
        date: newWeight.date,
      },
    ];

    setItemData(newItemData); // Update the state with new data
    toggleModal(); // Close modal after saving
  };

  // Function to generate a weight scale (e.g., from 0 to 200 kg)
  function generateWeightScale(maxWeight: number = 200, step: number = 1) {
    const weightScale: { key: string; value: string }[] = [];
    for (let i = 0; i <= maxWeight; i += step) {
      weightScale.push({ key: i.toString(), value: i + ' kg' });
    }
    return weightScale;
  }

  const weightScale = generateWeightScale(200, 1);

  return (
    <SafeAreaProvider style={{ marginTop: 40 }}>
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.addDateMarginTop}>Welcome back</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.createBtn}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft:14}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{AsyncStorage.getItem("fullname")}  👋 </Text>
        </View>


<HeroCard 
  title="Start your journey toward a healthier you by tracking your weight and setting achievable goals. With easy-to-use features, you can log your progress, stay motivated, and visualize your success over time. Whether you’re aiming to lose, gain, or maintain weight, we’re here to support every step of the way. Let’s get started and take control of your health today! 💪"
  imageSource={require('../../img/fitness.jpeg')}
/>

  <View>
<Text style={{ marginLeft: 20, fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>See goals</Text>

<View style={styles.row}>
          <Card title={`Goal: ${goal} KG`} />
          <Card title={`Current weight: ${currentWeight} KG`} />
        </View>
  </View>


        <View style={styles.app}>
          {Array.isArray(itemData) && itemData.length > 0 ? (
            itemData.map((item, index) => (
              <WeightItem key={index} item={item} />
            ))
          ) : (
            <Text>No weight entries available.</Text>
          )}
        </View>

        <CustomModal visible={modalVisible} onClose={toggleModal} title="Log Weight">
          <SelectList
            setSelected={(val: string) => setSelected(val)}
            data={weightScale}
            save="value"
            style={{ width: '100%' }}
          />
          <Button
            title={`Date: ${date.toLocaleDateString()}`}
            onPress={() => setOpen(true)}
          />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(selectedDate: Date) => {
              setOpen(false);
              setDate(selectedDate);
            }}
            onCancel={() => setOpen(false)}
          />
          {/* TextInput displaying the saved goal */}
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Your saved goal will appear here"
            placeholderTextColor="#888"
            style={styles.textarea}
            value={goal}  // Set the value to the saved goal
            editable={false}  // Make it read-only, if needed
            style = {styles.textInput}
          />
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Enter Description"
            placeholderTextColor="#888"
            style={styles.textarea}
            value={text}
            maxLength={600}
            onChangeText={setText}
          />
          <TouchableOpacity style={styles.modalBtn} onPress={saveWeight}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </CustomModal>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Home;