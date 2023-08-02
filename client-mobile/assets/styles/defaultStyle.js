import { StyleSheet } from "react-native";


export const defaultStyle = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    between: {
        justifyContent: 'space-between'
    },
    around: {
        justifyContent: 'space-around'
    },
    tCenter: {
        textAlign: 'center'
    },
    switchMode: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    switchBtn: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 0.5
    },
    modalBack: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1F1F1F81',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
    }
  });