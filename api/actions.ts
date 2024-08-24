import type { AxiosError } from "axios";
import axios from "axios";
import { createQuery } from "react-query-kit";



// {
//   "eventId": 23,
//   "eventName": "arch wedding",
//   "eventDate": 1719532800000,
//   "eventDatetime": 1719615241754,
//   "paymentDate": 1720137600000,
//   "customerDetails": "mobile\nemail",
//   "eventItemsList": [],
//   "eventVenue": "lalit",
//   "eventStatus": null
// },

export type Events = {
  eventId: number;
  eventName: string;
  eventDate: number;
  eventDatetime: number;
  paymentDate: number;
  customerDetails: string;
  eventItemsList: EventItems[];
  eventVenue: string;
  eventStatus: string;
}

export type EventItems = {
  id: number;
  itemId: number;
  itemName: string;
  quantity: number;
  eventId: number;
}


type Response = Events[]
type Variables = void;

// const eventDetailsUrl = process.env.BACKEND_URL + "/event/viewitems"

export const useGetEvents = createQuery<Response, Variables, AxiosError>({
  queryKey: ["event-items"],
  fetcher: async () => {
    const url = process.env.BACKEND_URL + "/event/events"
    const userAuthToken = "eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX01BTkFHRVIiXSwic3ViIjoiY29uYW4uZEBnbWFpbC5jb20iLCJpYXQiOjE3MjQ0OTYxOTIsImV4cCI6MTcyNDUxNDE5Mn0.-F_zoEXAOLmicHQ77TlE2jO0XBHXer8Xde7JOceZuqLRS52ZvAZw52rJTjcVMO8iLyuZe6gFl0ckK8agttkLMg"
    const bearerToken = `Bearer ${userAuthToken}`;
    const response = await axios.get(
      url,
      {
        headers: {
          Authorization: bearerToken,
        },
      }
    );
    return response.data;
  },
});


