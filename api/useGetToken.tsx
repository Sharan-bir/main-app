import type { AxiosError } from 'axios';
import axios from 'axios';
import { createMutation } from 'react-query-kit';

type Variables = { username: string; password: string };
type Response = { id_token: string };

export const useGetToken = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) => {
    const response = await axios.post(
      'http://192.168.2.113:8084/api/authenticate',
      {
        username: variables.username,
        password: variables.password,
      }
    );
    // console.log(response.data);
    return response.data;
  },
});
