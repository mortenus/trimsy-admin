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
  type: string;
  searchQuery: string;
}

const API_ENDPOINT = 'http://localhost:3001/admin/careers';

export default function useOrders(): OrdersHook {
  const router = useRouter();

  const [data, setData] = useState<OrderData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(2);
  const [isFetching, setIsFetching] = useState<boolean | null>(true);
  const [bottomText, setBottomText] = useState<string>('Scroll down for more');
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const { fetchData, cleanFetchData } = useDataFetching({
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

  const { handleTypeChange, handleSearchValueChange, handleSearch, clearSelection } =
    useFilterHandler({
      router,
      setSearchQuery,
      setType,
      searchQuery,
    });

  const [isRefreshingItems, setIsRefreshingItems] = useState<boolean>(false);

  const refreshItems = debounce(() => {
    setIsRefreshingItems(true);
    cleanFetchData();
    setIsRefreshingItems(false);
  }, 200);

  return {
    data,
    bottomText,
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
  };
}
