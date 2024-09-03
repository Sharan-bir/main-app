import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Notification = () => {
  return (
    <View style={style.container}>
      <Text style={{ paddingLeft: 10 }}>
        You have a <Text style={style.bold}>Dance Event</Text> at{" "}
        <Text style={style.bold}>Indigo Xp, Kormangala, Bangalore-49</Text>{" "}
        dated <Text style={style.bold}>05/10/2024.</Text>
      </Text>
      <Text style={{ textAlign: "left" }}>
        Please contact the client as soon as possible.
      </Text>
    </View>
  );
};

export default Notification;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 0,
  },
  bold: {
    fontWeight: "bold",
  },
});
