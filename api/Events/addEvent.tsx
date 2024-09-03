import type { AxiosError } from "axios";
import axios from "axios";
import { createMutation } from "react-query-kit";

type Variables = {
  eventId: number,
  eventName: string,
  eventDate: string,
  eventDatetime: string,
  paymentDate: number,
  customerDetails: string,
  eventItemsList: [],
  eventVenue: string,
  eventStatus: string
};
type Response = { statuscode: number };

export const addEvent = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => {
    const response = await axios.post(
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/addevent",
      {
        eventId: variables.eventId,
        eventName: variables.eventName,
        eventDate: variables.eventDate,
        eventDatetime: variables.eventDatetime,
        paymentDate: variables.paymentDate,
        customerDetails: variables.customerDetails,
        eventItemsList: variables.eventItemsList,
        eventVenue: variables.eventVenue,
        eventStatus: variables.eventStatus,
      }
    );
    console.log(response.data);
    return response.data;
  },
});