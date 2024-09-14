import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AxiosError } from "axios";
import axios from "axios";
import { createMutation } from "react-query-kit";


export type Variables = {
  itemId: number;
  itemName: string;
  quantity: number;
  eventId: number;
};

type Response = {};

export const generateQuotation = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => {
    const token = await AsyncStorage.getItem("Token");

    const response = await axios.post(
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/generatequotation",
      {
        eventName: "strinlnflsn",
        eventDate: "2024-09-12",
        eventDatetime: "2024-09-12",
        paymentDate: "2024-09-12",
        customerDetails: "stjbkjbkrin",
        eventItemsList: [
          {
            itemId: variables.itemId,
            itemName: variables.itemName,
            quantity: variables.quantity,
            eventId: variables.eventId
          },
        ],
        eventVenue: "strin",
        eventStatus: "ONGOING",
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  },
});
