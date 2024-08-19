import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const eventdetail = () => {
  return (
    <View style={styles.container}>
      <Text>Event Details</Text>
    </View>
  )
}

export default eventdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});