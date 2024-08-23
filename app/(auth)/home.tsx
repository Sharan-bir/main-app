import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView >
      <Link href="/(root)/(screen)/(menu)/eventitem" >
        <Text style={style.container}>Suppose you will logged in after pressing this! </Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})