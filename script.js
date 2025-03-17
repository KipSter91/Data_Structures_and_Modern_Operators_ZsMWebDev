'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//ENHANCED OBJECT LITERALS
const openingHours = {
  [weekdays1[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ENHANCED OBJECT LITERALS
  openingHours,
  order(starterIndex = 3, mainIndex = 1) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(
      `Thank you! Your order is received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${adress}. Enjoy your meal.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
  adress: 'Socratesstraat 195',
  time: '22:15',
});

restaurant.orderDelivery({
  starterIndex: 2,
  adress: 'Socratesstraat 195',
});

console.log(restaurant.order());

///////////////////DESCTRUCTURING OBJECTS///////////////////////////////
const { name, openingHours2, categories } = restaurant;
console.log(name, openingHours2, categories);

//variable names different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [], contact = [] } = restaurant;
console.log(menu, starters, contact);

//mutating variables
let n1 = 123;
let n2 = 456;

const obj = { n1: 3, n2: 345, n3: 77 };
({ n1, n2 } = obj);
console.log(n1, n2);

//nested objects
const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);

/////////////////////////DESTRUCTURING ARRAYS//////////////////
const arr = [10, 20, 30];
const a = [0];
const b = [1];
const c = [3];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//mutating variables
[main, secondary] = [secondary, main];

console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(0, 0);
console.log(starter, mainCourse);

let nested = [2, 4, [6, 7]];
const [i, j, k] = nested;

console.log(i, j, k);

//destructuring in destructuring
let [q, w, [p, r]] = nested;
console.log(q, w, p, r);

//default values
[p = 1, q = 1, r = 1] = [15, , 52];
console.log(p, q, r);

///////////////SPREAD OPERATOR (...)////////////////////////////
let spreadArr = [1, 1, ...arr];
console.log(spreadArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy or merge arrays with spread operator
const copyNewMenu = [...newMenu];
console.log(copyNewMenu);

const mixedMenu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
  'Tomatosoep',
];
console.log(mixedMenu);

//ITERABLES: arrays, strings, sets, maps, but NOT objects
const str = 'Jonas';
const letters = [...str, 's', 's', 'w'];
console.log(letters);

//real-world example
const ingredients = [
  //   prompt(`What is your first ingredient?`) || 'Funghi',
  //   prompt(`Ingredient 2?`) || 'Bacon',
  //   prompt(`Ingredient 3?`) || 'Cheese',
];
// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {
  Owner: 'Barbara Márku',
  ...restaurant,
  Foundedin: 1985,
};
console.log(newRestaurant);

//1) DESTRUCTURING
//SPREAD because of the RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2);

//REST beacause of the LEFT side of =
const [num1, num2, ...others] = [1, 2, 3, 4, 5, 6];
console.log(num1, num2, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = openingHours;
console.log(weekdays);

//2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

const arr5 = [45, 7, 65, 4, 5, 6, 4, 7, 89, 6];
add(...arr5);

add(21, 2, 3);

restaurant.orderPizza('Bacon', 'Funghi', 'Gorgonzola');

// OR (||), AND (&&) operators
//Use ANY data type, return ANY data type, short-circuiting (short-circuit evaluation)

console.log('---------OR--------');
console.log(3 || 'Barbara');
console.log('' || 'Barbara');
console.log(true || 0);
console.log(undefined || null);
console.log(NaN || undefined);
console.log(NaN || null || undefined || 'Barbara' || 1987);

//Practical example
restaurant.numGuests = 0;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//use OR operator to define the default value
guests1 = restaurant.numGuests || 10;
console.log(guests1);

//nullish coalescing operator ==> if the defined value nullish NULL or UNDEFINED
let guests = restaurant.numGuests ?? 10;
console.log(guests);

console.log('----------AND-----------');
console.log(3 && 'Barbara');
console.log('' && 'Barbara');
console.log(true && 0);
console.log(undefined && null);
console.log(NaN && undefined);
console.log(NaN && null && undefined && 'Barbara' && 1987);

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Bacon', 'Funghi', '');
}
//Use && operator instead of if statement
restaurant.orderPizza && restaurant.orderPizza('Bacon', 'Funghi', 'Pineapple');

//LOGICAL ASSIGMENT OPERATORS
const rest1 = {
  owner: 'Barbara Márku',
  restName: 'BaraFood',
  // numGuests: 100,
  numGuests: 0,
};
const rest2 = {
  owner: 'Zsolt Márku',
  restName: 'ZsociFood',
};

rest2.menu = rest2.menu || {
  Pizzas: ['Pepperoni', 'Margharita', 'FourSeason'],
  Soeps: ['Tomato', 'Chicken', 'Funghi'],
};
console.log(rest2);

rest1.Soeps = rest2.menu.Soeps;
console.log(rest1);

//OR assigment operator
rest2.numGuests ||= 50;
console.log(rest2);

//logical nullish assigment operator (null or undefined NOT 0 or "")
rest1.numGuests ??= 10;
console.log(rest1);

//AND assigment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

//CODING CHALLENGE
console.log('--------------CODING CHALLENGE 1-----------------');
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
let { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log(`Team 1 is more likely to win!`);
let team1odds = game.odds.team1;
team1odds = 33;
let team2odds = game.odds.team2;
team2odds = 2;
team1odds < team2odds && console.log(`Team 1 is more likely to win!`);
team1odds > team2odds && console.log(`Team 2 is more likely to win!`);

console.log('--------------CODING CHALLENGE 2-----------------');
//1)
for (const [i, players] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${players}`);
}

//2)
const odds = Object.values(game.odds);
console.log(odds);
let sum = 0;
for (const values of odds) sum += values;

const avarage = sum / odds.length;
console.log(`The avarage of the odds is: ${avarage}.`);

//3)
for (const [team, odd] of Object.entries(game.odds)) {
  let teams = game?.[team] ?? 'draw';
  console.log(`Odd of ${teams}: ${odd}`);
}

//4)BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);

//LOOPING ARRAYS: THE FOR-OF LOOP
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);
//simply the elements
for (const elements of menu2) console.log(elements);

//element with them indexes (old-school way)
for (const elementAndIndexes of menu2.entries()) {
  console.log(`${elementAndIndexes[0] + 1}: ${elementAndIndexes[1]}`);
}
//with desctructuring
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//OPTIONAL CHAINING
//with if statement
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//wtih optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  let open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we are open at ${open}`);
}
//methods
console.log(restaurant.order?.(1, 2) ?? "Method doesn't exist!");
console.log(restaurant.orderRisotto?.() ?? "Method doesn't exist!");

//arrays
const users = [
  {
    name: 'Barbara',
    email: 'barbara.marku1987@gmail.com',
    cell: '',
  },
];

const [{ name: userName, email: userMail, cell: userCell }] = users;
console.log(userName);

const newUsers = [...users, { location: 'Rotterdam' }];
console.log(newUsers);
console.log(newUsers[1]?.location ?? 'empty array');
console.log(users[0]?.name ?? 'empty');

//LOOP OVER OBJECT INDIRECTLY
//property NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for (const [days, { open, close }] of entries) {
  console.log(`Our opening hours are: on ${days} from ${open} till ${close}.`);
}
//SETS
const orderSet = new Set([
  'Pizza',
  'Pizza',
  'Pasta',
  'Risotto',
  'Cake',
  'Risotto',
]);
console.log(orderSet);

console.log(new Set('Jonas'));
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Soep'));
console.log(orderSet.size);
orderSet.add('Soep');
console.log(orderSet);
orderSet.delete('Pizza');
console.log(orderSet);

for (const order of orderSet) console.log(order);
//Example

const staff = ['Chef', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('barbaramarku').size);

//MAPS
const rest = new Map();
rest
  .set('name', 'BaraFood')
  .set(1, 'Rotterdam')
  .set(2, 'Budapest')
  .set(true, 'We are open! :)')
  .set(false, 'We are closed! :(');
console.log(rest);
rest.set('open', 11).set('close', 20);
console.log(rest);
console.log(rest.get('name'));

const time = new Date().getHours();
console.log(time);
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('name'));
rest.delete(2);
// rest.clear();
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //undefined
const arr3 = [1, 2];
rest.set(arr, 'Test2');
console.log(rest.get(arr));
console.log(rest.size);

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language on the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  [4, 'Python'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert opbjects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));

for (const [i, options] of question) {
  if (typeof i == 'number') console.log(`Answer ${i}: ${options}`);
}
// const userInput = Number(prompt('Which answer is the correct one?'));
// console.log(question.get(question.get('correct') === userInput));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

console.log('------------Coding challenge 3---------------');
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2)
console.log(gameEvents.delete(64));
console.log(gameEvents);

//3)
const EventsAvarage = () => {
  const totalTime = [...gameEvents.keys()].pop();
  const totalEvents = gameEvents.size;
  console.log(
    `An event happened, on average, every ${totalTime / totalEvents} minutes`
  );
};
EventsAvarage();

//4)
for (const [times, events] of gameEvents) {
  times < 45
    ? console.log(`[FIRST HALF] ${times}: ${events}`)
    : console.log(`[SECOND HALF] ${times}: ${events}`);
}

//WORKING WITH STRINGS
const airline = 'WizzAir Hungary';
const plane = 'A320';

console.log(plane[0]);
console.log(airline[8]);
console.log('b737'[1]);
console.log('b737'.length);

console.log(airline.indexOf('H'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Hungary'));

console.log(airline.slice(8));
console.log(airline.slice(8, 11)); //length of the string will be equal the endparam - beginparam

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(8, -6));

const checkMiddleSeat = function (seat) {
  let s = seat[seat.length - 1];
  //with slice method
  //  s = seat.slice(-1)
  if (s === 'C' || s === 'E') console.log(`${seat} is a middle seat`);
  else console.log(`${seat} is not a middle seat`);
};

checkMiddleSeat('2C');
checkMiddleSeat('11B');
checkMiddleSeat('23E');

//with endsWith method
const checkMiddleSeat2 = function (seat) {
  if (seat.endsWith('C') || seat.endsWith('E')) {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} is not a middle seat`);
  }
};

checkMiddleSeat2('25E');
checkMiddleSeat2('5C');
checkMiddleSeat2('12A');

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//fix capitalization in name (function)
const fixPassengerName = passenger => {
  console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());
};
fixPassengerName('bARBAra');

//emailcheck (function)
const checkEmail = email => {
  // const loginEmail = prompt('').toLowerCase().trim();
  const loginEmail = 'email@email.com';
  email === loginEmail
    ? console.log(`You logged in.`)
    : console.log(`Incorrect email.`);
};

checkEmail('email@email.com');
//replacing
const priceGB = '288,97£';
const priceEU = priceGB.replace(',', '.').replace('£', '€');
console.log(priceGB, priceEU);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
//regular expression
console.log(announcement.replace(/door/g, 'gate'));

//Booleans (true/false)
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.endsWith('o'));
console.log(plane1.startsWith('A32'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo'))
  console.log('Part of the NEW Airbus family');

//Practice excercise
console.log('--------Checkbaggage---------');
const checkBaggage = items => {
  const lowerCaseItems = items.toLowerCase();
  if (
    lowerCaseItems.includes('gun') ||
    lowerCaseItems.includes('knife') ||
    lowerCaseItems.includes('water')
  )
    console.log('You are not aloud to check-in you baggage!');
  else console.log('You can check in!');
};

checkBaggage('I have some food and a pocket KNIFE.');
checkBaggage('I have my books and my tablet.');
checkBaggage('I have my camera and a bottle of water.');
checkBaggage('I have my laptop, a gun to protection and some snack.');

console.log('Barbara Márku'.split(' '));
const [...names] = 'Peter Tamas Horvath'.split(' ');
console.log(names);

//fix passanger name version 2 (.split; .map; .join)
const fixPassengerNameV2 = passengerName => {
  console.log(
    passengerName
      .trim()
      .split(' ')
      .map(element => element[0].toUpperCase() + element.slice(1).toLowerCase())
      .join(' ')
  );
};

fixPassengerNameV2('BARBarA MONIka SzeDER HORvatH');

//Padding strings
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(36, '+'));

//creditCardMasker
const maskCreditCard = function (number) {
  const str = number.toString();
  console.log(str.length);
  if (str.length < 15 || str.length > 16)
    console.log('Invalid credit card number length.');
  else {
    const maskedStr = str.slice(-4);
    console.log(maskedStr.padStart(str.length, '*'));
  }
};

maskCreditCard(1234567891012346);

//Repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

console.log('--------------Coding challenge 5---------------');
//app to convert from underscore_case to CamelCase
//THIS TEST DATA (pasted to textarea)
//underscore_case
//first_name
//Some_Variable
// calculate_AGE
//delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const fixed = [];
  console.log(fixed);
  const firstSplit = text.split('\n');
  for (const text of firstSplit) {
    const secondSplit = text.split('_');
    const j = secondSplit[0].trimStart().toLowerCase();
    const k =
      secondSplit[1][0].toUpperCase() +
      secondSplit[1].slice(1).toLocaleLowerCase();
    fixed.push(j + k);
  }
  for (let i = 0; i < fixed.length; i++) {
    console.log(fixed[i].padEnd(25, ' ') + '✅'.repeat(i + 1));
  }
});

//flightInfo APP
console.log('Coding challange 6'.padStart(35, '+').padEnd(55, '+'));

const flightsInfo =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const InfoBoard = () => {
  const rows = flightsInfo.split('+');

  for (const elements of rows) {
    const e = elements.split(';');
    const [a, b, c, d] = e.entries();
    const a1 = a[1].replaceAll('_', ' ');
    const b1 = b[1].slice(0, 3).toUpperCase();
    const c1 = c[1].slice(0, 3).toUpperCase();
    const d1 = d[1].replace(':', 'h');
    const str = `${a1} from ${b1} to ${c1} (${d1})`.trimStart();
    str.includes('Delayed')
      ? console.log(`🛑${str}`.padStart(45))
      : console.log(`${str}`.padStart(45));
  }
};

InfoBoard();

//New Operation to Make Sets Useful!
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

console.log(italianFoods, mexicanFoods);

//Intersection method
const commonFood = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFood);

const commonFoodArr = [...commonFood];
console.log(commonFoodArr);

const commonFoodNew = new Set(commonFoodArr);
console.log(commonFoodNew);

//Union method
const italianAndMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianAndMexicanFusion);

const aplhabetFusion = [...italianAndMexicanFusion].sort();
console.log(aplhabetFusion);

//Difference method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

//Symmetric method
const uniqueItalianFoodsandMexicanFoods = [...italianFoods.symmetricDifference(mexicanFoods)].sort();
console.log(uniqueItalianFoodsandMexicanFoods);

//DisjointFrom method
console.log(italianFoods.isDisjointFrom(mexicanFoods));





