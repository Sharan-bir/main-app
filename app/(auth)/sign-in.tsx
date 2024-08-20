import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <Link href="/(root)/(tabs)/(menu)/event-items">
        <Text>Go to home screen!</Text>
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
