// data.js
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';

// Sample Data
// export const itemData = [
//   {
//     icon: (
//       <Image
//         style={{width: 120, height: 120}}
//         source={{
//           uri: 'https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png',
//         }}
//       />
//     ),
//     title: 'Twitter',
//     weight: 'Weight: 200lbs',
//     date: '11/11/2024',
//   },
//   {
//     icon: (
//       <Image
//         style={{width: 120, height: 120}}
//         source={{
//           uri: 'https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png',
//         }}
//       />
//     ),
//     title: 'Instagram',
//     weight: 'Weight: 200lbs',
//     date: '11/11/2024',
//   },
//   // Add other items here
// ];


const currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getDay()];
 