import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";
import { useGetEventItems } from "@/api/getEventItems";
import ItemCard from "@/components/ItemCard";

const Home = () => {
  const { data } = useGetEventItems();
  const imagee =
    "https://eventexperts.s3.ap-northeast-2.amazonaws.com/11/arch%20wedding%20decor";
  return (
    <SafeAreaView>
      <Link href="/(root)/(screen)/(menu)/eventitem">
        <Text style={style.container}>
          Suppose you will logged in after pressing this!{" "}
        </Text>
      </Link>

      <ScrollView>
        {data?.map((event) => (
          <ItemCard
            keyId={event.itemId}
            title={event.itemName}
            imageUrl={imagee}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
