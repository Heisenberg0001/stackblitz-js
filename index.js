import './style.css';
import { books, people } from './data.js';
//

//1
//use people array
console.log('Working on People Array !!!');
// 1. Calculate sum of all teacher salaries
let sumTSalaries = 0;

for (let person of people) {
  if (person.occupation === 'Teacher') {
    sumTSalaries += person.salary;
  }
}
console.log(`Sum of all teachers salaries is: ${sumTSalaries}`);

// 2. Create a new array with the same people but double salaries of developers
let developers = [];
let tempPerson;

for (let person of people) {
  if (person.occupation === 'Developer') {
    tempPerson = { ...person };
    tempPerson.salary *= 2;
    developers.push(tempPerson);
    continue;
  }
  developers.push(person);
}
console.log(developers);

// 3. Filter people who has a dog
let filteredArr = [];

for (let person of people) {
  if (person.pets.includes('dog')) {
    filteredArr.push(person);
  }
}

console.log(filteredArr);

// 4. Figure out if all the people have pets or not
let allHasPet = 'Yes';

for (let person of people) {
  if (person.pets.length === 0) {
    allHasPet = 'No';
    break;
  }
}

console.log(`Does all have Pet ? ${allHasPet}`);

// 5. Figure out if any of the people are above age 30

let above30 = 'No';

for (let person of people) {
  if (person.age > 30) {
    above30 = 'Yes';
    break;
  }
}

console.log(`Is there anyone above 30 ? ${above30}`);

///2
//use books array
console.log(
  '*//////////////////////////////////////////////////////////////////////////////*'
);

//I like fiction.
// I prefer to buy as many books as I can.
// I have 20 dollars to spend on books.
// I read from 11:00 to 18:00.
// My speed read is 250 wpm (words per minute).

console.log('Working on Books Array !!!');

const budget = 20;
const hoursToRead = 7;
const readSpeedInMinute = 250;
const minutesToRead = hoursToRead * 60;

let fictionArr = [];
let generatedArr = [];
let counter = 0;
let totalWordsToRead = readSpeedInMinute * minutesToRead;

for (let book of books) {
  if (book.category === 'fiction') {
    fictionArr.push(book);
  }
}

fictionArr = fictionArr.sort(
  (fistEl, secondEl) => fistEl.price - secondEl.price
);

for (let book of fictionArr) {
  counter += book.price;
  totalWordsToRead -= book.pages * readSpeedInMinute;

  if (budget < counter || totalWordsToRead < 0) {
    break;
  }
  generatedArr.push(book);
}

console.log(`Books to read: `);
console.log(generatedArr);
