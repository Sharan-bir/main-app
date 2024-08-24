import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";
import { useGetEvents } from "@/api/actions";

type Events = {
  eventId: number;
  eventName: string;
  eventDate: number;
  eventDatetime: number;
  paymentDate: number;
  customerDetails: string;
  eventItemsList: EventItems[];
  eventVenue: string;
  eventStatus: string;
};

type EventItems = {
  id: number;
  itemId: number;
  itemName: string;
  quantity: number;
  eventId: number;
};

const Home = () => {

  
  const { data } = useGetEvents();

  if (data) {
    console.log(data.map((event) => event.eventName));
  }

  // console.log(data?.map((event) => event.eventName))

  return (
    <SafeAreaView>
      <Link href="/(auth)/sign-in">
        <Text>Go to home screen!</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
