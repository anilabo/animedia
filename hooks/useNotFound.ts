// これはカスタムフックではないので、のちにutilsに移動すること。
import { AxiosError } from "axios";

interface IErrorResponse {
  error: string;
}

// if axios get the 404 response, 
// then it will return 404 page with 'notFound' option in getServerSideProps.
export const isNotFoundCode = (error: unknown) => {
  return (
    (error as AxiosError<IErrorResponse>).response &&
    (error as AxiosError<IErrorResponse>).response!.status === 404
  );
};
