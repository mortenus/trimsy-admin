import axios from 'axios';
import React from 'react';

type TData = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
  };
  slug: string;
  _id: string;
};

const useFetchBlogs = () => {
  const [items, setItems] = React.useState<[] | TData[]>([]);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const [currentPage, setPageNumber] = React.useState<number>(1);

  const incrementPage = () => {
    if (currentPage < totalPages) setPageNumber(currentPage + 1);
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setPageNumber(currentPage - 1);
    }
  };

  React.useEffect(() => {
    axios
      .get(`https://secure.trimsy.org/blogs?page=${currentPage}`)
      .then(({ data }: any) => {
        setItems(data.items);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.error('Request Blogs err: ', err));
  }, [currentPage]);

  return { items, totalPages, currentPage, setPageNumber, incrementPage, decrementPage };
};

export default useFetchBlogs;
