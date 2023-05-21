import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Full Size',
    description:
      'Get the ultimate typing experience with our Full Size mechanical keyboards. Featuring a standard layout and spacious design, these keyboards offer complete functionality and comfort for all your typing needs.',
  },
  {
    _id: uuid(),
    categoryName: 'TKL',
    description:
      'Experience compact efficiency with our TKL (Tenkeyless) mechanical keyboards. Designed without the numeric keypad, these keyboards provide a streamlined layout, ideal for users who value portability and desk space.',
  },
  {
    _id: uuid(),
    categoryName: '75%',
    description:
      'Enjoy a perfect balance of functionality and compactness with our 75% mechanical keyboards. With a reduced layout that retains essential keys, these keyboards offer a space-saving solution without compromising on usability..',
  },
];
