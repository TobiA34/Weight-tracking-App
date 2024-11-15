import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button, Image, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import { initialItemData } from '../../data';
import styles from '../../styles/mainStyles';
import DatePicker from 'react-native-date-picker';
import CustomModal from '../Modals/CustomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Card';
import HeroCard from '../HeroCard';
import WeightItem from '../weightItem';

interface WeightEntry {
  weight: number;
  date: string;
  description: string;
  image: string;
}

function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>(''); // For description
  const [goal, setGoal] = useState<string>(''); // For storing goal
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [newWeight, setnewWeight] = useState<number>(0); // For storing goal
  const [currentWeight, setcurrentWeight] = useState<string>(''); // For storing goal
  const [fullName, setFullName] = useState<string>(''); // For storing goal
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [itemData, setItemData] = useState<any[]>(initialItemData || []); // Ensure it's always an array
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Store selected image

  const toggleModal = () => setModalVisible((prev) => !prev);

  const validateFields = () => {
    if (!newWeight) {
      Alert.alert("Error", "Please enter a weight.");
      return false;
    }

    return true;
  };
  

  useEffect(() => {
    const getGoal = async () => {
      const value = await AsyncStorage.getItem("userWeightGoal");
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setGoal(parsedValue.goal);
        setcurrentWeight(parsedValue.weight);
      }
    };

    const getFullName = async () => {
      const value = await AsyncStorage.getItem("fullname");
      if (value !== null) setFullName(value);
    };

    getGoal();
    getFullName();
  }, []);

  const saveWeight = () => {
    if (!validateFields()) return;

    const userWeight: WeightEntry = {
      weight: newWeight,
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
              uri: selectedImage,
            }}
          />
        ),
        weight: `Weight: ${newWeight}`,
        date: userWeight.date,
       },
    ];

    setItemData(newItemData); // Update the state with new data
    toggleModal(); // Close modal after saving
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) setSelectedImage(response.assets[0].uri);
    });
  };

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.row}>
              <Text style={styles.addDateMarginTop}>Welcome back</Text>
              <TouchableOpacity onPress={toggleModal} style={styles.createBtn}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 8 }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{fullName ? ` ${fullName} 👋` : 'No full name set'}</Text>
            </View>

            <HeroCard
              title="Start your journey toward a healthier you by tracking your weight and setting achievable goals."
              imageSource={require('../../img/fitness.jpeg')}
            />

            <Text style={{ marginLeft: 20, fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>See goals</Text>

            <View style={styles.row}>
              <Card title={`Weight goal: ${goal} KG`} />
              <Card title={`Current weight: ${currentWeight} KG`} />
            </View>

            <View style={styles.app}>
              {Array.isArray(itemData) && itemData.length > 0 ? (
                itemData.map((item, index) => (
                  <WeightItem key={index} item={item} />
                ))
              ) : (
                <Text style={{ marginLeft: 20 }}>No weight entries available.</Text>
              )}
            </View>

            <CustomModal visible={modalVisible} onClose={toggleModal} title="Log Weight">
              <TextInput
                numberOfLines={1}
                placeholder="Enter a new weight"
                placeholderTextColor="#888"
                style={styles.textInput}
                keyboardType="numeric"
                value={newWeight.toString()}
                onChangeText={(text) => setnewWeight(parseFloat(text) || 0)}
              />

              <Button title={`Date: ${date.toLocaleDateString()}`} onPress={() => setOpen(true)} />
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

              <TouchableOpacity onPress={pickImage}>
                <Text>Pick an Image</Text>
              </TouchableOpacity>

              {selectedImage && (
                <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginTop: 20 }} />
              )}

              <TouchableOpacity style={styles.modalBtn} onPress={saveWeight}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </CustomModal>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Home;