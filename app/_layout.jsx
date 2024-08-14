import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Stack,Link} from 'expo-router';

const RootLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
     </>
  )
}

export default RootLayout;

const styles = StyleSheet.create({})