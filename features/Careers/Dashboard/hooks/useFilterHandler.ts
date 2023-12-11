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
import { DashboardData } from '../Dashboard.types';

interface FilterHandlerHook {
  handleTypeChange: (value: string) => void;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  clearSelection: () => void;
  isFetchingQuieries: boolean;
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
  setDataFetchError,
}: {
  router: ReturnType<typeof useRouter>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  type: string;
  API_ENDPOINT: string;
  setData: (data: DashboardData) => void;
  setIsFetching: (bool: boolean | null) => void;
  cleanFetchData: () => void;
  setDataFetchError: (err: string) => void;
}): FilterHandlerHook {
  const [isFetchingQuieries, setIsFetchingQuieries] = useState<boolean>(false);

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
        setIsFetchingQuieries(true);
        setDataFetchError('');
        try {
          const excludedPathname = router.asPath.replace('/orders', '');
          const response = await axios.get(`${API_ENDPOINT}/query${excludedPathname}`);

          if (!response.data || response.data.length < 1) {
            setDataFetchError('No orders were found that match the criteria');
          }

          setIsFetching(null);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setDataFetchError(`Error fetching data:', ${error}`);
        } finally {
          setIsFetchingQuieries(false);
        }
      };

      fetchData();
    }
  }, [router.query]);

  return {
    handleTypeChange,
    handleSearchValueChange,
    handleSearch,
    clearSelection,
    isFetchingQuieries,
  };
}
