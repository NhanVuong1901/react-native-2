import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HW02() {
  const directions = [
    "column",
    "column-reverse",
    "row",
    "row-reverse",
  ] as const;

  const [index, setIndex] = useState(0);

  const changeDirection = () => {
    setIndex((prev) => (prev + 1) % directions.length);
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={changeDirection}>
        <Text style={styles.buttonText}>Đổi flexDirection</Text>
      </TouchableOpacity>

      <View style={[styles.container, { flexDirection: directions[index] }]}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.text}>1</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text style={styles.text}>2</Text>
        </View>

        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <Text style={styles.status}>
        flexDirection hiện tại: {directions[index]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
  },

  button: {
    backgroundColor: "#1f1a1d",
    marginHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  container: {
    flex: 1,
    borderWidth: 2,
    margin: 10,
  },

  box: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  status: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
});
