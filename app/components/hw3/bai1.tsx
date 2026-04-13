import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    width:80,
    height:80,
    backgroundColor:'red',
    margin:10
  }
});