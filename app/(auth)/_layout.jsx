import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
// import Signin from './signin'; // Ensure this import path is correct
// import Signup from './signup';
// import {HomeScreen} from './index';

const AuthLayout = () => {
  return (
      <Tabs
        screenOptions={{
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="signin"
          options={{
            title: "signin",
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            title: "index",
          }}
        />

        <Tabs.Screen
          name="signup"
          options={{
            title: "signup",
          }}
        />
      </Tabs>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
