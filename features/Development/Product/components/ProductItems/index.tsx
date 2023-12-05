import Card from '../Card';
import React from 'react';

const arr = [
  {
    id: 1,
    title: 'Nike LeBron XVIII',
    price: 499,
    imageUrl: '/static/img/sneakers/8.jpg',
  },
  {
    id: 2,
    title: 'Jordan Air Jordan 11',
    price: 499,
    imageUrl: '/static/img/sneakers/7.jpg',
  },
  {
    id: 3,
    title: 'Nike Kyrie 7',
    price: 249,
    imageUrl: '/static/img/sneakers/6.jpg',
  },
  {
    id: 4,
    title: 'Under Armour Curry 8',
    price: 349,
    imageUrl: '/static/img/sneakers/5.jpg',
    added: true,
  },

  {
    id: 5,
    title: 'Puma X Aka Boku Future Rider',
    price: 349,
    imageUrl: '/static/img/sneakers/4.jpg',
  },
  {
    id: 6,
    title: 'Nike Blazer Mid Suede',
    price: 300,
    imageUrl: '/static/img/sneakers/1.jpg',
  },
];

const ProductItems = () => {
  return (
    <>
      {arr.map((item, id) => (
        <Card key={id} {...item} />
      ))}
    </>
  );
};

export default ProductItems;
