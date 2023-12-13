// // useOrders.ts
// import { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/router';
// import useDataFetching from './hooks/useDataFetching';
// import useScrollHandler from './hooks/useScrollHandler';
// import useFilterHandler from './hooks/useFilterHandler';
// import axios from 'core/blog/axios';

// const DEBOUNCE_DELAY = 200;
// const API_ENDPOINT = 'http://localhost:3001/admin/careers';

// type TStatus = 'completed' | 'canceled' | 'pending';

// interface OrderData {
//   _id: number;
//   created_at: string;
//   general: {
//     fullname: string;
//     email: string;
//     product: string;
//     status: TStatus;
//   };
//   securityData?: {
//     ip: string;
//     userAgent: string;
//   };
// }

// export default function useOrders() {
//   const router = useRouter();

//   const [data, setData] = useState<OrderData[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(2);
//   const [isFetching, setIsFetching] = useState<boolean | null>(true);
//   const [bottomText, setBottomText] = useState<string>('Scroll down for more');
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [type, setType] = useState<string>('all');
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { fetchData, resetItems } = useDataFetching({
//     API_ENDPOINT,
//     page,
//     totalPages,
//     setData,
//     setPage,
//     setTotalPages,
//     setIsFetching,
//     setBottomText,
//   });

//   const { handleScroll } = useScrollHandler({
//     containerRef,
//     fetchData,
//     isFetching,
//   });

//   const { handleTypeChange, handleSearchValueChange, handleSearch, clearSelection } =
//     useFilterHandler({
//       router,
//       searchQuery,
//       setSearchQuery,
//       setType,
//     });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;
//     container?.addEventListener('scroll', handleScroll);

//     return () => {
//       container?.removeEventListener('scroll', handleScroll);
//     };
//   }, [containerRef, handleScroll, isFetching]);

//   // Other utility functions

//   return {
//     data,
//     isFetching,
//     bottomText,
//     containerRef,
//     handleTypeChange,
//     handleSearchValueChange,
//     handleSearch,
//     clearSelection,
//     isRefreshingItems,
//     refreshItems,
//   };
// }

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'core/blog/axios';
import useDataFetching from './hooks/useDataFetching';
import useScrollHandler from './hooks/useScrollHandler';
import useFilterHandler from './hooks/useFilterHandler';
import debounce from 'utils/debounce';
import { OrderData } from './Orders.types';
import checkApiEndpoint from 'utils/checkApiEndpoint';

interface OrdersHook {
  data: OrderData[];
  bottomText: string;
  containerRef: React.RefObject<HTMLDivElement>;
  handleScroll: () => void;
  handleTypeChange: (value: string) => void;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  clearSelection: () => void;
  isRefreshingItems: boolean;
  refreshItems: () => void;
  onClickDelete: (id: number) => void;
  onTypeChange: (type: string, id: number) => void;
  type: string;
  searchQuery: string;
  dataFetchError?: string | null;
  isFetching: boolean | null;
  isFetchingQuieries: boolean;
}

export default function useOrders(): OrdersHook {
  const router = useRouter();

  const API_ENDPOINT = checkApiEndpoint();

  useEffect(() => {
    console.log(API_ENDPOINT);
  }, [API_ENDPOINT, router.pathname]);

  const [data, setData] = useState<OrderData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(2);
  const [isFetching, setIsFetching] = useState<boolean | null>(true);
  const [bottomText, setBottomText] = useState<string>('Scroll down for more');
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const { fetchData, cleanFetchData, dataFetchError, setDataFetchError } = useDataFetching({
    API_ENDPOINT,
    page,
    totalPages,
    setData,
    setPage,
    setTotalPages,
    setIsFetching,
    setBottomText,
  });

  const { handleScroll } = useScrollHandler({
    containerRef,
    fetchData,
    isFetching,
  });

  const {
    handleTypeChange,
    handleSearchValueChange,
    handleSearch,
    clearSelection,
    isFetchingQuieries,
  } = useFilterHandler({
    router,
    setSearchQuery,
    setType,
    searchQuery,
    type,
    API_ENDPOINT,
    setData,
    setIsFetching,
    cleanFetchData,
    setDataFetchError,
  });

  const [isRefreshingItems, setIsRefreshingItems] = useState<boolean>(false);

  const refreshItems = debounce(() => {
    setIsRefreshingItems(true);
    cleanFetchData();
    setIsRefreshingItems(false);
  }, 200);

  const [deleteQueue, setDeleteQueue] = useState<number[]>([]);

  useEffect(() => {
    // Process the delete queue
    const processDeleteQueue = async () => {
      try {
        for (const id of deleteQueue) {
          // Convert the id to a string before using it in the URL
          const idString = id.toString();

          // Send a request to delete the item with the given id
          await axios.delete(`${API_ENDPOINT}/admin/careers/${idString}`);
        }

        // Clear the delete queue after processing
      } catch (error: any) {
        // If there's an error (deletion failed), you can handle it here
        console.error('Error deleting item:', error.response?.data || error.message);

        // If the deletion fails, revert the UI state by updating with the original array
        const updatedData = data.filter((item) => !deleteQueue.includes(item._id));
        optimisticUpdate(updatedData);
      } finally {
        // Clear the delete queue after handling the error or success
        setDeleteQueue([]);
      }
    };

    // Check if there are items in the delete queue to process
    if (deleteQueue.length > 0) {
      processDeleteQueue();
    }
  }, [deleteQueue, data]);

  const optimisticUpdate = (updatedData: OrderData[]) => {
    setData([...updatedData]);
  };

  const onClickDelete = (id: number) => {
    // Add the id to the delete queue
    setDeleteQueue((prevQueue) => [...prevQueue, id]);

    // Optimistically update the UI
    const updatedData = data.filter((item) => item._id !== id);
    optimisticUpdate(updatedData);
  };

  const onTypeChange = async (status: string, id: number) => {
    try {
      const patchData = {
        id,
        status,
      };

      await axios.patch(`${API_ENDPOINT}/admin/careers/status`, patchData).then(() => {
        // Update the status of a specific item
        const updatedItems = data.map((item) =>
          item._id === id ? { ...item, status: status } : item,
        );

        console.log('updated items:', updatedItems);

        setData(updatedItems);
      });

      // Clear the delete queue after processing
    } catch (error: any) {
      // If there's an error (deletion failed), you can handle it here
      console.error('Error patching item with status:', error.response?.data || error.message);

      // If the deletion fails, revert the UI state by updating with the original array
      //   const updatedData = data.filter((item) => !deleteQueue.includes(item._id));
      //   optimisticUpdate(updatedData);
    } finally {
    }
  };

  return {
    data,
    bottomText,
    isFetching,
    containerRef,
    handleScroll,
    handleTypeChange,
    handleSearchValueChange,
    handleSearch,
    clearSelection,
    isRefreshingItems,
    refreshItems,
    type,
    searchQuery,
    onClickDelete,
    dataFetchError,
    onTypeChange,
    isFetchingQuieries,
  };
}
