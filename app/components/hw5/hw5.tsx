import React from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox} />
      <View style={styles.orangeBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  blueBox: {
    width: 400,
    height: 100,
    // flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "blue",
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
});
