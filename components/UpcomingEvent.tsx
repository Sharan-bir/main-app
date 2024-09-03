import { View, Text, StyleSheet } from "react-native";
import React from "react";

const UpcomingEvent = ({ title, address, date, KeyId }: any) => {
  return (
    <View key={KeyId} style={style.container}>
      <Text>{title}</Text>
      <Text style={{ lineHeight: 20, color: "#6e6c67", fontSize: 12 }}>
        {address}
      </Text>
      <Text>{date}.</Text>
    </View>
  );
};

export default UpcomingEvent;

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "#C7F9FF",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#0195B5",
    height: 80,
    width: "90%",
  },
  bold: {
    fontWeight: "bold",
  },
});
