import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link, useFocusEffect } from "expo-router";
import { getItems } from "@/api/Items/getItems";
import ItemCard from "@/components/ItemCard";

const Home = () => {
  const { data } = getItems();
  return (
    <SafeAreaView>
      <Link href="/(root)/(screen)/(menu)/eventitem">
        <Text style={style.container}>
          Suppose you will logged in after pressing this!{" "}
        </Text>
      </Link>

      <ScrollView style={style.bottom}>
        {data ? (
          data.map((event) => (
            <ItemCard
              keyId={event.itemId}
              title={event.itemName}
              imageUrl={event.itemImagePath}
              price={event.itemCost}
              ShowPrice={true}
            />
          ))
        ) : (
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "medium", marginRight: 60 }}>hello</Text>
          </View>
        )}
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
  bottom: {
    marginBottom: 1,
  },
});
