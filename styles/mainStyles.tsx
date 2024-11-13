// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  app: {
    width: 390,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 3,
  },
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
  col:{
    flexDirection:'column',
  },
 
  item: {
    width: '48%', // Two-column layout
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff",
    height: 'auto',
    borderRadius: 16
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: "#333"
  },
  addDateMarginTop: {
    fontSize: 24,
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 2,
  },
  
  

  createBtn: {
    backgroundColor: 'black',
    height: 35,
    width: 35,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
 
  postionEnd: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-end',

  },
 
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

    textInput: {
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:16,
    height:60,
    width: 320,
    marginTop:8,
    marginBottom:16,
    color:'black'
  },

  textarea:{
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:16,
    height:200,
    width: 320,
    marginTop:8,
    marginBottom:16,
    color:'black'
  },
  
  addTop:{
    marginTop:8,
  },
   addBottom:{
    marginBottom:8,
  },
   selectList: {
    marginTop: 20,  // Adjust the margin top as needed
    width: '100%',  // This ensures the SelectList fills the screen width
  },

  modalBtn: {
    width: 300,         // 80% of the modal width
    height: 50,           // 50 pixels in height
    backgroundColor: '#007AFF', // Change color to your preference
    borderRadius: 8,      // Rounded corners for better aesthetics
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    marginVertical: 10, 
  },

    buttonText: {
    color: '#fff',        // White text color
    fontSize: 16,         // Text size
    fontWeight: 'bold',
  }
});