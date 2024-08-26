import type { AxiosError } from "axios";
import axios from "axios";
import { createMutation } from "react-query-kit";

type Variables = {
  firstName: string;
  password: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  matchingPassword: string;
  emEventOrg: string;
};
type Response = { statuscode: number };

export const useCreateUser = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => {
    const response = await axios.post(
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/users/signup",
      {
        firstName: variables.firstName,
        password: variables.password,
        lastName: variables.lastName,
        emailId: variables.emailId,
        phoneNumber: variables.phoneNumber,
        matchingPassword: variables.matchingPassword,
        emEventOrg: variables.emEventOrg,
      }
    );
    console.log(response.data);
    return response.data;
  },
});
