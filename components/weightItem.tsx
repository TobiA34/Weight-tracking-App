import { View, Text,StyleSheet} from 'react-native';

const weightItem = ({item}) => {
  return (
    <>
    <View style={styles.item}>
      {item.icon}
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.addTop}>{item.weight}</Text>
      <Text style={styles.addTop}>Date: {item.date}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  app: {
    width: 390,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    marginVertical: 60,
    marginHorizontal: 3,
  },
  item: {
    width: '45%', // Two-column layout
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    height: 'auto',
    borderRadius: 16,
    marginLeft:16
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
    marginTop: 100,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postionEnd: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-end',

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 350,
    height: 'auto',
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
    height:32,
    width: 320
  },
  addTop:{
    marginTop:8,
  }
});

export default weightItem
