import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView >
      <Link href="/(root)/(screen)/(menu)/eventitem" >
        <Text>Go to home screen!</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
