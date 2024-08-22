import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const eventitem = () => {
  return (
    <View style={styles.container}>
      <Text>Event Items</Text>
    </View>
  )
}

export default eventitem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});