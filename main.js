// 1) შექმენი ცვლადი მაგალითად const str = "hello" შენი მიზანია რომ ამ ცვლადში რასაც დაწერ პროგრამამ დაგიბრუნოს შემობრუნებული(reverse) სიტყვა.

// const str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed = reversed + str[i];
// }
// console.log(reversed);



// 2) დაწერე პროგრამა რომელიც დაითვლის 1-დან 10-ის ჩათვლით რიცხების ნამრავლს.

// let product = 1;

// for (let i = 1; i <= 10; i++) {
//   product = product * i;
// }
// console.log(product);



// 3) გაქვს რიცხვების მასივი const numsArr = [-10, 10, 22, 31, 12, -44, -51, 2] შენი მიზანია შექმნა ახალი მასივი const potivieNums = [] და შინგით ჩასეტო მხოლოდ დადებითი რიცხევბი.

// const numsArr = [-10, 10, 22, 31, 12, -44, -51, 2];
// const positiveNums = [];

// for (let i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] > 0) {
//     positiveNums.push(numsArr[i]);
//   }
// }

// console.log(positiveNums);



// მოცემული გაქვს მასივი const arr = [10, false, "rame", 22, null, 12, undefined] შენი მიზანია რომ შეკრიბო მხოლოდ რიცხები და დალოგო პასუხი.

// const arr = [10, false, "rame", 22, null, 12, undefined];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     sum += arr[i];
//   }
// }

// console.log(sum);




// გაქვს მასივი const nums = [1,2,3,3,45,11,23,11,2,55] შენი მიზანია წაშალო მასივიდან გამეორებადი ელემენტები და დატოვო მხოლოდ უნიკალურები. const uniqueElements = [] ან ამ მასივში ჩაამატო მხოლოდ უნიკალური ელემენტები. [1,2,3,45,11,23]


const nums = [1, 2, 3, 3, 45, 11, 23, 11, 2, 55];

const uniqueElements = [...new Set(nums)];
console.log(uniqueElements);





// გაქვს მასივი const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] შენი მიზანია დათვალო დადებითი რიცხვების რაოდენობა და შეაჯამო უარყოფითი რიცხები შედეგი უნდა მიიღო [10, -65] 10 - რაოდენობა, -65 ჯამი უარყოფითების.


const arr = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15];

let positiveCount = 0;
let negativeSum = 0;

arr.forEach(num => {
  if (num > 0) {
    positiveCount++;
  } else {
    negativeSum += num;
  }
});

console.log([positiveCount, negativeSum]);




// გაქვს მასივი const nums2 = [10, 12, 44, 32, 15, 93, 15, 66, 93] შენი მიზანია ჯერ გაფილტრო მხოლოდ ისეთ ელემენტებზე რომელიც იყოფა 3 ზე და შემდეგ გამოთვალო ამ რიცხვების ჯამი. [12, 15, 93, 66, 93] და ამათ შეაჯამებ მერე.


const nums2 = [10, 12, 44, 32, 15, 93, 15, 66, 93];

const divisibleByThree = nums2.filter(num => num % 3 === 0);
console.log(divisibleByThree); // [12, 15, 93, 15, 66, 93]

const sum = divisibleByThree.reduce((acc, val) => acc + val, 0);
console.log(sum);




// const strs = ['apple', 'banana', 'pear', 'watermelon'] შენი მიზანია ამ ამ მასივის ყველა ელემენტს წაუშალო ბოლო ქერექთერი და დააბრუნო ისე.

const strs = ['apple', 'banana', 'pear', 'watermelon'];

const removedLastChar = strs.map(word => word.slice(0, -1));
console.log(removedLastChar);




// გაქვს მასივი const arr2 = [19, 5, 42, 2, 77] შენი მიზანია ბოლო ორი ყველაზე პატარა წევრი შეაჯამო. => 2,5 => 7


const arr2 = [19, 5, 42, 2, 77];

const sorted = arr2.sort((a, b) => a - b);
const sumOfTwoSmallest = sorted[0] + sorted[1];
console.log(sumOfTwoSmallest);



// გაქვს სტრინგების მასივი შენი მიზანია რომ ამ მასივის ყველა ელემენტიდან მხოლოდ პირველი ასოები ამოიღო და შეადგინო აბრივიატურა const arr3 = ['Hi', 'Everyone', 'Little', 'Liar', 'Orange'] => HELLO იქნება ამათი აბრივიატურა.

const arr3 = ['Hi', 'Everyone', 'Little', 'Liar', 'Orange'];

const abbreviation = arr3.map(word => word[0]).join('').toUpperCase();
console.log(abbreviation);