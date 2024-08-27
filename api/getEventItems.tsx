import type { AxiosError } from "axios";
import axios from "axios";
import { createQuery } from "react-query-kit";
import { useFocusEffect } from "expo-router";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type EventItems = {
  itemId: number;
  itemName: string;
  itemType: string;
  itemDesc: string;
  itemCost: number;
  itemImagePath: string;
  itemAddFields: string;
  imageString: string;
};

type Response = EventItems[];
type Variables = void;

const [token, setToken] = React.useState<string | null>(null);

useFocusEffect(
  React.useCallback(() => {
    AsyncStorage.getItem("Token")
      .then((jwtToken) => setToken(jwtToken))
      .catch((error) => {
        console.log(error);
      });
  }, [])
);

export const useGetEventItems = createQuery<Response, Variables, AxiosError>({
  queryKey: ["event-items"],
  fetcher: async () => {
    const url =
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/items";
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
    console.log(response.data);
    return response.data;
  },
});
