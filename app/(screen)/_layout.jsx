import { View, Text } from 'react-native';
import React from 'react';
import {Drawer} from 'expo-router/drawer';
 
const ScreenLayout = () => {
  return (
    <>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ title: "Home", headerShown: true }}
        />
        <Drawer.Screen name="eventitem" options={{ title: "Event Items" }} />
        <Drawer.Screen name="eventdetail" options={{ title: "Event Detail" }} />
      </Drawer>
    </>
  )
}

export default ScreenLayout;