import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function MainScreen({ navigation }) {
  const handleClick = () => {
    navigation.navigate("Secundry");
  };
  return (
    <View style={styles.container}>
      <Button onPress={handleClick} title="Secundry" />
      <Text>Main</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
