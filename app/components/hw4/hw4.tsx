import React from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    margin: 10,
    // alignItems: "center",
    alignContent: "space-around",
  },

  box: {
    width: 120,
    height: 100,
    backgroundColor: "purple",
    margin: 5,
  },
  box1: {
    width: 120,
    height: 250,
    backgroundColor: "purple",
    margin: 5,
  },
});
