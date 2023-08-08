import { StyleSheet } from "react-native";

export const nums = StyleSheet.create({
  input: {
    width: "80%",
    padding: 9,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 18,
  },
  btn: {
    padding: 8,
    margin: 5,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: "#00f",
  },
  item: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    marginEnd: 20,
    marginVertical: 10,
  },
  list: {
    marginStart: 10,
    width: "100%",
  },
  listBtn: {
    marginEnd: 15,
    padding: 5,
  },
  numView: {
    width: "95%",
    // height: 120,
    position: "absolute",
    zIndex: 100,
    // top: '0%',
    padding: 5,
    marginHorizontal: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cancelBtn: {
    left: "90%",
    padding: 5,
    borderWidth: 0.4,
    borderColor: "#000",
    borderRadius: 10,
    width: 30,
    backgroundColor: "#f00",
  },
});
