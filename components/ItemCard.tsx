import { View, Text, Image } from "react-native";
import React from "react";

const ItemCard = ({
  keyId,
  title,
  imageUrl,
}: {
  keyId: number;
  title: string;
  imageUrl: string;
}) => {
  return (
    <View key={keyId}>
      <Text>{title}</Text>
      <Image source={{ uri: `${imageUrl}` }} width={100} height={100} />
    </View>
  );
};

export default ItemCard;
