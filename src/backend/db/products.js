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
    description:
      'With its tactile and responsive mechanical switches, this keyboard ensures each keystroke feels satisfyingly precise. Its durable construction guarantees long-lasting performance, while the customizable backlighting options add a touch of personalization. Ergonomically designed for comfort and featuring anti-ghosting technology, this keyboard is the perfect companion for both work and play',
  },
  {
    _id: uuid(),
    title: 'Keychron K8 Pro',
    brand: 'Keychron',
    price: '10500',
    categoryName: 'TKL',
    description:
      'With its tactile and responsive mechanical switches, this keyboard ensures each keystroke feels satisfyingly precise. Its durable construction guarantees long-lasting performance, while the customizable backlighting options add a touch of personalization. Ergonomically designed for comfort and featuring anti-ghosting technology, this keyboard is the perfect companion for both work and play',
  },
  {
    _id: uuid(),
    title: 'Hello Ganss GS 87C-HT',
    brand: 'Keychron',
    price: '10500',
    categoryName: 'TKL',
    description:
      'With its tactile and responsive mechanical switches, this keyboard ensures each keystroke feels satisfyingly precise. Its durable construction guarantees long-lasting performance, while the customizable backlighting options add a touch of personalization. Ergonomically designed for comfort and featuring anti-ghosting technology, this keyboard is the perfect companion for both work and play',
  },
  {
    _id: uuid(),
    title: 'HyperX Alloy Origins',
    brand: 'HyperX',
    price: '10500',
    categoryName: 'Full size',
    description:
      'With its tactile and responsive mechanical switches, this keyboard ensures each keystroke feels satisfyingly precise. Its durable construction guarantees long-lasting performance, while the customizable backlighting options add a touch of personalization. Ergonomically designed for comfort and featuring anti-ghosting technology, this keyboard is the perfect companion for both work and play',
  },
  {
    _id: uuid(),
    title: 'RK100',
    brand: 'Royal Kludge',
    price: '10500',
    categoryName: 'Full size',
    description:
      'With its tactile and responsive mechanical switches, this keyboard ensures each keystroke feels satisfyingly precise. Its durable construction guarantees long-lasting performance, while the customizable backlighting options add a touch of personalization. Ergonomically designed for comfort and featuring anti-ghosting technology, this keyboard is the perfect companion for both work and play',
  },
];
