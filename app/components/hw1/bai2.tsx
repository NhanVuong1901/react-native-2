import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { flex: 1, backgroundColor: 'red' }]} />
      <View style={[styles.box, { flex: 2, backgroundColor: 'blue' }]} />
      <View style={[styles.box, { flex: 1, backgroundColor: 'green' }]} />
      <View style={[styles.box, { flex: 3, backgroundColor: 'orange' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  box: { width: '100%' }
});