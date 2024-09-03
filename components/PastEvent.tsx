import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PastEvent = ({ title, address, date, KeyId }: any) => {
  return (
    <View key={KeyId} style={style.container}>
      <Text>{title}</Text>
      <Text style={{ lineHeight: 20, color: "#c2c0ba", fontSize: 12 }}>
        {address}
      </Text>
      <Text>{date}.</Text>
    </View>
  );
};

export default PastEvent;

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#838383",
    height: 80,
    width: "90%",
  },

  bold: {
    fontWeight: "bold",
  },
});
