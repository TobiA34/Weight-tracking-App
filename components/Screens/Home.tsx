import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';
import WeightItem from '../weightItem';
// Sample Data
import { itemData, data, currentDay } from '../../data';
import styles from '../../styles/mainStyles';
import CustomModal from '../Modals/CustomModal';
import DatePicker from 'react-native-date-picker'

// Get current day

// Main App Component
function Home() {
const initialText = '';
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState("");
  const [text, setText] = useState(initialText);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const inputAccessoryViewID = 'uniqueID';
// Function to generate weight scale (from 0 to maxWeight with step)
function generateWeightScale(maxWeight = 200, step = 1) {
  const weightScale = [];

  for (let i = 0; i <= maxWeight; i += step) {
    weightScale.push({ key: i.toString(), value: i + ' kg' });
  }

  return weightScale;
}

// Example usage in your component:
const weightScale = generateWeightScale(200, 1); // Generate weights from 0 kg to 200 kg with 1 kg increments

  return (
    <SafeAreaProvider>
      <ScrollView>
        {/* Header Row */}
        <View style={styles.row}>
          <Text style={styles.addDateMarginTop}>{currentDay} Weight</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.createBtn}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Grid Items */}
        <View style={styles.app}>
          {itemData.map((item, index) => (
            <WeightItem key={index} item={item} />
          ))}
        </View>

        {/* Modal */}
        {/* Custom Modal */}
        <CustomModal visible={modalVisible} onClose={toggleModal} title="Log Weight">
          
          {/* SelectList with margin-top */}
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={weightScale} 
            save="value"
            style={styles.selectList} // Apply margin-top here
          />
          <Button title="Select A date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        </CustomModal>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Home;

 