// useDataFetching.ts
import { useEffect } from 'react';
import axios from 'core/blog/axios';

type TStatus = 'completed' | 'canceled' | 'pending';

interface OrderData {
  _id: number;
  created_at: string;
  general: {
    fullname: string;
    email: string;
    product: string;
    status: TStatus;
  };
  securityData?: {
    ip: string;
    userAgent: string;
  };
}

interface DataFetchingProps {
  API_ENDPOINT: string;
  page: number;
  totalPages: number;
  setData: React.Dispatch<React.SetStateAction<OrderData[]>>;
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
  const fetchData = async () => {
    if (page > totalPages) {
      setIsFetching(null);
      setBottomText('All orders loaded');
      return;
    }

    setIsFetching(true);
    setBottomText('Loading...');

    try {
      console.log('sending');
      const response = await axios.get(API_ENDPOINT, {
        params: { page },
      });

      const responseData = response.data;

      if (responseData) {
        setData((prev) => [...prev, ...responseData.items]);
        setTotalPages(responseData.totalPages);

        setPage((prevPageCount) => {
          console.log(prevPageCount, responseData.totalPages);
          if (prevPageCount >= responseData.totalPages) {
            setIsFetching(null);
            setBottomText('All orders loaded');
          }

          return prevPageCount + 1;
        });

        setIsFetching(false);
        setBottomText('Scroll down for more');
      } else {
        alert('There has been an error while loading data, please contact the admin.');
        console.error('Invalid data structure:', responseData);
      }
    } catch (error) {
      setIsFetching(false);
      setBottomText('Scroll down for more');
      console.error('Error fetching data:', error);
    }
  };

  const cleanFetchData = async () => {
    setData([]);
    setPage(1);

    setIsFetching(true);
    setBottomText('Loading...');

    try {
      console.log('sending');
      const response = await axios.get(API_ENDPOINT, {
        params: { page: 1 },
      });

      const responseData = response.data;

      if (responseData) {
        setData(responseData.items);
        setTotalPages(responseData.totalPages);

        setPage((prevPageCount) => {
          if (prevPageCount >= responseData.totalPages) {
            setIsFetching(null);
            setBottomText('All orders loaded');
          }

          return prevPageCount + 1;
        });

        setIsFetching(false);
        setBottomText('Scroll down for more');
      } else {
        alert('There has been an error while loading data, please contact the admin.');
        console.error('Invalid data structure:', responseData);
      }
    } catch (error) {
      setIsFetching(false);
      setBottomText('Scroll down for more');
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchData, cleanFetchData };
}
