import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';


type Response = {};
type Variables = void;

export const use = createQuery<Response, Variables, AxiosError>({
  queryKey: [''],
  fetcher:async () => {
   const response = await
  },
});
