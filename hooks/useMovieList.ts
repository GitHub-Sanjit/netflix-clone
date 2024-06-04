import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  return { data, error, isLoading };
};

export default useMovieList;
