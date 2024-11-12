// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row', // Arrange text and button in a row
    justifyContent: 'space-between', // Space between the text and the button
    width: '100%', // Make the row take full width of the modal
    alignItems: 'center', // Center the items vertically within the row
    marginBottom: 20, // Optional: Add some space below the header row
  },
  modalTitle: {
    fontSize: 18, // Optional: Adjust the title font size
    fontWeight: 'bold', // Optional: Add bold styling to the title
  },
});