import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Ensure correct icon import
import styles from '../../styles/mainStyles';
import modalStyles from '../../styles/modalStyles';
const CustomModal = ({ visible, onClose, children,title }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          {/* Header Row with Text and Close Button */}
          <View style={modalStyles.headerRow}>
            <Text style={modalStyles.modalTitle}>{title}</Text>
            {/* Close Button Icon */}
            <Pressable onPress={onClose}>
              <FontAwesome name="close" color="red" size={20} />
            </Pressable>
          </View>

          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;