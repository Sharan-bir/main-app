import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import UpcomingEvent from "@/components/UpcomingEvent";
import PastEvent from "@/components/PastEvent";

const eventdetail = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.Textcontainer}>
          <Text style={styles.boldText}>Upcoming Events</Text>
        </View>

        <View style={styles.Eventcontainer}>
          <UpcomingEvent />
          <UpcomingEvent />
          <UpcomingEvent />
        </View>

        <View style={styles.Textcontainer}>
          <Text style={styles.boldText}>Past Events</Text>
        </View>
        <View style={styles.Eventcontainer}>
          <PastEvent />
          <PastEvent />
          <PastEvent />
        </View>
      </ScrollView>
    </>
  );
};

export default eventdetail;

const styles = StyleSheet.create({
  Eventcontainer: {
    flex: 1,
    alignItems: "center",
    height: "auto",
  },
  Textcontainer: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  boldText: {
    fontSize: 12,
    fontFamily: "MontserratLight",
    fontWeight: "bold",
  },
});
