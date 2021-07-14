export const books = [
  {
    id: 1,
    author: 'J.R.R Tolkien',
    title: 'The lord of the rings, The Fellowship of the Ring',
    price: 8.54,
    pages: 555,
    category: 'fiction'
  },
  {
    id: 2,
    author: 'J.R.R Tolkien',
    title: 'The lord of the rings, The Two Towers',
    price: 8.34,
    pages: 467,
    category: 'fiction'
  },
  {
    id: 3,
    author: 'J.K. Rowling',
    title: "Harry Potter and the Philosopher's Stone",
    price: 8.16,
    pages: 345,
    category: 'fiction'
  },
  {
    id: 4,
    author: 'Lewis Carroll',
    title: 'Alice in Wonderland',
    price: 2.7,
    pages: 86,
    category: 'fiction'
  },
  {
    id: 5,
    author: 'C.S. Lewis',
    title: 'The Chronicles of Narnia',
    price: 2.99,
    pages: 118,
    category: 'fiction'
  },
  {
    id: 6,
    author: 'Stephen Hawking',
    title: 'The universe in a nutshell',
    price: 22.93,
    pages: 224,
    category: 'science'
  }
];

export const people = [
  {
    name: 'Ben',
    age: 30,
    occupation: 'Banker',
    salary: 3000,
    pets: []
  },
  {
    name: 'Jane',
    age: 26,
    occupation: 'Teacher',
    salary: 1200,
    pets: ['dog']
  },
  {
    name: 'John',
    age: 31,
    occupation: 'Developer',
    salary: 4000,
    pets: ['dog', 'cat']
  },
  {
    name: 'Mike',
    age: 26,
    occupation: 'Developer',
    salary: 5000,
    pets: []
  },
  {
    name: 'Tom',
    age: 34,
    occupation: 'Teacher',
    salary: 3400,
    pets: ['dog', 'parrot']
  }
];

// 1. Calculate sum of all teacher salaries
// 2. Create a new array with the same people but double salaries of developers
// 3. Filter people who has a dog
// 4. Figure out if all the people have pets or not
// 5. Figure out if any of the people are above age 30
