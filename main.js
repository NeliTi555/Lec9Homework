// 1) შექმენი ცვლადი მაგალითად const str = "hello" შენი მიზანია რომ ამ ცვლადში რასაც დაწერ პროგრამამ დაგიბრუნოს შემობრუნებული(reverse) სიტყვა.

const str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}
console.log(reversed);



// 2) დაწერე პროგრამა რომელიც დაითვლის 1-დან 10-ის ჩათვლით რიცხების ნამრავლს.

let product = 1;

for (let i = 1; i <= 10; i++) {
  product = product * i;
}
console.log(product);



// 3) გაქვს რიცხვების მასივი const numsArr = [-10, 10, 22, 31, 12, -44, -51, 2] შენი მიზანია შექმნა ახალი მასივი const potivieNums = [] და შინგით ჩასეტო მხოლოდ დადებითი რიცხევბი.

const numsArr = [-10, 10, 22, 31, 12, -44, -51, 2];
const positiveNums = [];

for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] > 0) {
    positiveNums.push(numsArr[i]);
  }
}

console.log(positiveNums);



// მოცემული გაქვს მასივი const arr = [10, false, "rame", 22, null, 12, undefined] შენი მიზანია რომ შეკრიბო მხოლოდ რიცხები და დალოგო პასუხი.

const arr = [10, false, "rame", 22, null, 12, undefined];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    sum += arr[i];
  }
}

console.log(sum);



// 5) მოცემული გაქვს შემეგი ტიპის მასივი "x:y" const scores = ["3:1", "2:2", "0:1", ...] პირველი არგუმენტი არის x ანუ ჩვენი გუნდი, ჩვენი მიზანია 10 მატჩის შემდეგ გამოვითვალოთ რამდენი ქულა დააგროვა ჩვენმა თიმმა.
// მოგება => 3 ქულა
// ფრე => 1 ქულა
// წაგება => 0 ქულა
// მაგალითად 3:1 ნიშნავს რომ ჩვენმა გუნდა მოიგო და დაეწერა 3 ქულა და ა.შ.




