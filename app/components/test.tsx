import React from "react";
import { View } from "react-native";

export default function index() {
  return (
    <View
      style={{
        backgroundColor: "azure",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          backgroundColor: "tomato",
          width: 400,
          height: 100,
          // flexBasis: 100,
          // flexGrow: 1,
          // flexShrink: 1,
          // flex: -1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "cyan",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
