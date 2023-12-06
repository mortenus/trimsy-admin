// // useFilterHandler.ts
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// interface FilterHandlerProps {
//   router: ReturnType<typeof useRouter>;
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
//   setType: React.Dispatch<React.SetStateAction<string>>;
// }

// export default function useFilterHandler({
//   router,
//   searchQuery,
//   setSearchQuery,
//   setType,
// }: FilterHandlerProps) {
//   const clearSelection = () => {
//     setType('all');
//     setSearchQuery('');
//     router.push('/orders');
//   };

//   const handleTypeChange = (value: string) => {
//     if (value === 'all') {
//       clearSelection();
//     } else {
//       router.push(`/orders?type=${encodeURIComponent(value)}`);
//     }
//   };

//   const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     if (!searchQuery) {
//       clearSelection();
//     } else {
//       router.push(`/orders?search=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   useEffect(() => {
//     const { search, type } = router.query;

//     if (search) {
//       setType('all');
//       setSearchQuery(search.toString());
//     }

//     if (type) {
//       clearSelection();
//       setType(type.toString());
//     }
//   }, [router.query]);

//   return { handleTypeChange, handleSearchValueChange, handleSearch, clearSelection };
// }

// useFilterHandler.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'core/blog/axios';

interface FilterHandlerHook {
  handleTypeChange: (value: string) => void;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  clearSelection: () => void;
}

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

export default function useFilterHandler({
  router,
  searchQuery,
  setSearchQuery,
  setType,
  type,
  API_ENDPOINT,
  setData,
  setIsFetching,
  cleanFetchData,
}: {
  router: ReturnType<typeof useRouter>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  type: string;
  API_ENDPOINT: string;
  setData: (data: OrderData[]) => void;
  setIsFetching: (bool: boolean | null) => void;
  cleanFetchData: () => void;
}): FilterHandlerHook {
  const clearSelection = () => {
    setType('all');
    setSearchQuery('');
    cleanFetchData();
    router.push('/orders');
  };

  const handleTypeChange = (value: string) => {
    if (value === 'all') {
      clearSelection();
    } else {
      router.push(
        `/orders?type=${encodeURIComponent(value)}${
          searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''
        }`,
      );
    }
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      clearSelection();
    } else {
      router.push(
        `/orders?search=${encodeURIComponent(searchQuery)}${
          type !== 'all' ? `&type=${encodeURIComponent(type)}` : ''
        }`,
      );
    }
  };

  useEffect(() => {
    const { search, type } = router.query;

    if (search) {
      //   setType('all');
      setSearchQuery(search.toString());
    }

    if (type) {
      //   clearSelection();
      setType(type.toString());
    }

    if (router.pathname === '/orders' && router.asPath.includes('?')) {
      // Make a request to the backend with the current query parameters
      const fetchData = async () => {
        try {
          const excludedPathname = router.asPath.replace('/orders', '');
          const response = await axios.get(`${API_ENDPOINT}/query${excludedPathname}`);

          if (!response.data || response.data.length < 1) {
            // Make it
          }

          setIsFetching(null);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [router.query]);

  return { handleTypeChange, handleSearchValueChange, handleSearch, clearSelection };
}
