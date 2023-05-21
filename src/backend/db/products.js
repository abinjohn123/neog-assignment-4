import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: 'Keychron K2 V2',
    brand: 'Keychron',
    price: '9000',
    categoryName: '75%',
  },
  {
    _id: uuid(),
    title: 'Keychron K8 Pro',
    brand: 'Keychron',
    price: '10500',
    categoryName: 'TKL',
  },
  {
    _id: uuid(),
    title: 'Hello Ganss GS 87C-HT',
    brand: 'Keychron',
    price: '10500',
    categoryName: 'TKL',
  },
  {
    _id: uuid(),
    title: 'HyperX Alloy Origins',
    brand: 'HyperX',
    price: '10500',
    categoryName: 'Full size',
  },
  {
    _id: uuid(),
    title: 'RK100',
    brand: 'RK100',
    price: '10500',
    categoryName: 'Full size',
  },
];
