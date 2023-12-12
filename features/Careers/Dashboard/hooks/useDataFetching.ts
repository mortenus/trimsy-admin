// useDataFetching.ts
import React from 'react';
import axios from 'core/blog/axios';
import { DashboardData } from '../Dashboard.types';
import { useRouter } from 'next/router';

interface DataFetchingProps {
  API_ENDPOINT: string;
  page: number;
  totalPages: number;
  setData: React.Dispatch<React.SetStateAction<DashboardData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean | null>>;
  setBottomText: React.Dispatch<React.SetStateAction<string>>;
}

export default function useDataFetching({
  API_ENDPOINT,
  page,
  totalPages,
  setData,
  setPage,
  setTotalPages,
  setIsFetching,
  setBottomText,
}: DataFetchingProps) {
  const [dataFetchError, setDataFetchError] = React.useState<string | null>(null);
  const router = useRouter();

  const fetchData = async () => {
    if (page > totalPages) {
      setIsFetching(null);
      setBottomText('All orders loaded');
      return;
    }

    setIsFetching(true);
    setBottomText('Loading...');

    try {
      const response = await axios.get(`${API_ENDPOINT}/admin/careers`, {
        params: { page },
      });

      const responseData = response.data.slice(0, 3);

      if (responseData) {
        setData(responseData);
        setIsFetching(null);

        // setTotalPages(responseData.totalPages);

        // setPage((prevPageCount) => {
        //   console.log(prevPageCount, responseData.totalPages);
        //   if (prevPageCount >= responseData.totalPages) {
        //     setIsFetching(null);
        //     setBottomText('All orders loaded');
        //   }

        //   return prevPageCount + 1;
        // });

        setDataFetchError(null);

        setIsFetching(false);
        setBottomText('Scroll down for more');
      } else {
        setDataFetchError('There has been an error while loading orders, please refresh the page');
        console.error('Invalid data structure:', responseData);
      }
    } catch (error) {
      setIsFetching(false);
      setDataFetchError('There has been an error while loading orders, please refresh the page');
      console.error('Error fetching data:', error);
    }
  };

  const cleanFetchData = async () => {
    setPage(1);

    setIsFetching(true);
    setBottomText('Loading...');

    try {
      const resp = await axios.get(`${API_ENDPOINT}/admin/careers/dashboard`);

      const data = resp.data;

      if (data) {
        setData(data);
        // setIsFetching(null);

        // setDataFetchError(null);
        setIsFetching(null);
      } else {
        setDataFetchError('There has been an error while loading orders, please refresh the page');
      }
    } catch (error) {
      setIsFetching(false);
      setDataFetchError('There has been an error while loading orders, please refresh the page');
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    cleanFetchData();
  }, []);

  return { fetchData, cleanFetchData, setDataFetchError, dataFetchError };
}
