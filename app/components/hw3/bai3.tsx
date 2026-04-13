import React from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={[styles.box, { alignSelf: "flex-end" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    margin: 10,
  },
});
