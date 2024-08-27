import type { AxiosError } from "axios";
import axios from "axios";
import { createQuery } from "react-query-kit";
import { bearerToken } from "@/api/ApiProvider";

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

export const useGetEventItems = createQuery<Response, Variables, AxiosError>({
  queryKey: ["event-items"],
  fetcher: async () => {
    const url =
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/items";
    const response = await axios.get(url, {
      headers: {
        Authorization: bearerToken,
      },
    });
    console.log(response.data);
    return response.data;
  },
});
