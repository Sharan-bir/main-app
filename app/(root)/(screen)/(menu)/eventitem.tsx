import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import { Feather } from "@expo/vector-icons";
import { getItems } from "@/api/Items/getItems";
import ItemCard from "@/components/ItemCard";
import { useRouter } from "expo-router";

const eventitem = () => {
  const [search, setSearch] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));
  const { data } = getItems();
  const router = useRouter();

  const openItemCreation = () => {
    router.replace("/(root)/(screen)/(menu)/eventitem");
  };
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);

    // Animate the thumb movement
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 27],
  });

  return (
    <>
      {data && data.length > 0 ? (
        <View style={styles.TopOptions}>
          <SearchBar
            value={search}
            placeholder="Search items by name"
            handleChangeText={(e: any) => setSearch(e)}
            customWidth="90%"
          />
          <View style={{ alignItems: "center", marginRight: 80 }}>
            <Text style={styles.toggleText}>
              {isEnabled ? "Hide Price" : "Show Price"}
            </Text>
            <TouchableOpacity
              style={[styles.toggleButton]}
              onPress={toggleSwitch}
              activeOpacity={0.8}
            >
              <Animated.View
                style={[
                  styles.switch,
                  {
                    transform: [{ translateX: thumbPosition }],
                    backgroundColor: isEnabled ? "#fef100" : "#000",
                  },
                ]}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => console.log("ClipBoard pressed")}>
            <Feather
              name="clipboard"
              size={24}
              color="black"
              style={styles.clipboard}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
      <ScrollView style={{ marginTop: 10 }}>
        {data && data.length > 0 ? (
          <View style={styles.ItemContainer}>
            {/* First row with three components and a fixed component on the right */}
            <View style={styles.row}>
              {data.slice(0, 2).map((event) => (
                <ItemCard
                  keyId={event.itemId}
                  title={event.itemName}
                  imageUrl={event.itemImagePath}
                  price={event.itemCost}
                  ShowPrice={isEnabled}
                />
              ))}
              {/* Fixed component on the right of the first row */}

              <View style={styles.fixedComponent}>
                <TouchableOpacity onPress={openItemCreation}>
                  <View style={styles.square}>
                    <Text style={styles.plus}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Subsequent rows with 3 components each */}
            {Array.from({ length: Math.ceil(data.slice(3).length / 3) }).map(
              (_, rowIndex) => (
                <View style={styles.row} key={rowIndex}>
                  {data
                    .slice(3 + rowIndex * 3, 3 + (rowIndex + 1) * 3)
                    .map((event) => (
                      <ItemCard
                        key={event.itemId}
                        keyId={event.itemId}
                        title={event.itemName}
                        imageUrl={event.itemImagePath}
                        price={event.itemCost}
                        ShowPrice={isEnabled}
                      />
                    ))}
                </View>
              )
            )}
          </View>
        ) : (
          <View style={styles.container}>
            <Image source={images.boxGif} style={styles.gif} />
            <AddButton label="Add Items" />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default eventitem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  gif: {
    width: 200,
    height: 200,
  },
  TopOptions: {
    flexDirection: "row",
  },
  share: {
    position: "absolute",
    marginTop: 28,
    right: 70,
  },
  clipboard: {
    position: "absolute",
    marginTop: 28,
    right: 30,
  },
  toggleButton: {
    width: 46,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "transparent",
    justifyContent: "center",
    padding: 2,
  },
  switch: {
    width: 14,
    height: 14,
    borderRadius: 10,
    position: "absolute",
    top: 2,
  },
  toggleText: {
    fontSize: 10,
    fontFamily: "MontserratLight",
    marginTop: 18,
    fontWeight: "heavy",
    marginBottom: 2,
  },
  ItemContainer: {
    flex: 1,
    padding: 5,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5, // space between rows
  },
  fixedComponent: {
    maxWidth: 110, // Fixed width for the fixed component
    height: 107,
    borderWidth: 1,
    margin: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 36,
    height: 36,
    backgroundColor: "#fef100",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c5ba00",
    marginLeft: 40,
    marginRight: 40,
  },
  plus: {
    fontSize: 16,
    color: "#000",
  },
});
