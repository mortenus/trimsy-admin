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

interface FilterHandlerHook {
  handleTypeChange: (value: string) => void;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  clearSelection: () => void;
}

export default function useFilterHandler({
  router,
  searchQuery,
  setSearchQuery,
  setType,
}: {
  router: ReturnType<typeof useRouter>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
}): FilterHandlerHook {
  const clearSelection = () => {
    setType('all');
    setSearchQuery('');
    router.push('/orders');
  };

  const handleTypeChange = (value: string) => {
    if (value === 'all') {
      clearSelection();
    } else {
      router.push(`/orders?type=${encodeURIComponent(value)}`);
    }
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (!searchQuery) {
      clearSelection();
    } else {
      router.push(`/orders?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const { search, type } = router.query;

    if (search) {
      setType('all');
      setSearchQuery(search.toString());
    }

    if (type) {
      clearSelection();
      setType(type.toString());
    }
  }, [router.query]);

  return { handleTypeChange, handleSearchValueChange, handleSearch, clearSelection };
}
