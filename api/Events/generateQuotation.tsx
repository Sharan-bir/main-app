import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AxiosError } from "axios";
import axios from "axios";
import { createMutation } from "react-query-kit";
import RNFS from 'react-native-fs';
import RNOpenFile  from 'react-native-open-file';

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
        responseType: 'blob', // Important to handle file download
      }
    );

    const blob = response.data; // This is the file content
    const fileName = `quotation_${Date.now()}.docx`;
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    // Write the file to the device's local storage
    await RNFS.writeFile(filePath, blob, 'base64')
      .then(() => {
        console.log(`File saved successfully to: ${filePath}`);

        // Automatically open the .docx file after saving
        RNOpenFile.open(filePath)
          .then(() => {
            console.log(`File opened successfully: ${filePath}`);
          })
          .catch((error: any) => {
            console.error("Error opening the file:", error);
          });
      })
      .catch((err:any) => {
        console.error("Error saving the file:", err);
      });

    return response.data;
  },
});
