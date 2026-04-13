import React from "react";
import { View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 3,
    backgroundColor: "blue",
  },
  bottom: {
    flex: 1,
    backgroundColor: "red",
  },
});
