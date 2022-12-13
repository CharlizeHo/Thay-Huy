// Array
// let x = 10;
// let y = x;
// x = 20;
// console.log(y);
// // ==> console y = 10

// let clothes = ['shirt', 'skirt', 'shoes']
// let yourClothes = clothes;
// clothes.push("watch")
// console.log(yourClothes);

// let clothes = ["shirt", "skirt", "shoes"];

// for (let i = 0; i < clothes.length; i++) {
//   console.log(clothes[i]);
// }

// // thay đổi giá trị
// clothes[0] = "T-shirt";
// console.log(clothes);

// // thêm giá trị
// clothes.push("watch");
// // console.log(x);
// // thêm 1 hoặc nhiều vào cuối mảng và trả về độ dài của mảng
// // kết quả trả về sẽ là 4

// // bỏ giá trị cuối cùng
// const x = clothes.pop();

// // kiểm tra có tồn tại giá trị ko (True/False)
// const isIncluded = clothes.some((item) => {
//   return (item === "skirt");
// });
// console.log(isIncluded);
// // hoặc cách nhanh hơn:
// const isExist = clothes.includes("skirt");
// console.log(isExist);
// // ==> cả 2 ktra dãy array có chứa "skirt" và ra True

// function myIndexOf(array, item) {
//   for (let i = 0; i < array.legnth; i++) {
//     if (array === item) {
//       return 1;
//     }
//   }
//   return -1;
// }
// console.log();

// ======= //
// filter

// ======= //
// reduce
// const prices = [1,2,3,4]

// let total = 0;
// for(let i=0; i<prices.length; i++){
//     total = total + prices[i];
// }

// const sumFnc = function (total, num) {
//     return total + num
// }

// const total2 = prices.reduce(sumFnc,0);
// console.log(total2);

//====//
// Object
const myKey = "title";

// const product = {
//     title: "Iphone 14 Promax",
//     price: 250,
//     tag: ["new","hot"],
//     meta: {
//         height: 200,
//         width: 100,
//     },
//     isStock: false,
//     sayHi: function () {
//         console.log("Hi");
//     }
// };
// product.sayHi();

// Cách 1
//console.log(product.myKey);
// console: undefined

// Cách 2
//console.log(product[myKey])
// console: Iphone 14 Promax

// Thêm properties vào object
// product.description = "This is the new phone";
// console.log(product);

// product.sayHi();

// ====//
// Promise
//Đồng bộ hay bất đồng bộ?
//Thêm async trước arrow function để note đây là hàm bất đồng bộ
//Thêm await trước arrow function - tạm dừng việc thực hiện các hàm async
const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  console.log(response);
  const data = await response.json();
  console.log(data);
};
// .catch(error) => {
//     console.log(error)
//}
fetchProducts();

//===//
//Destructuring Array and Object

const friends = ["a", "b", "c"];

// const x = friends[0];
// const y = friends[1];
// const z = friends[2];

const [x, y, z] = friends;
// Lấy từng phần tử trong array của friends và dán vào x,y,z
// Nếu chỉ muốn lấy giá trị a và c thì đặt const [x,_,z] = friends
console.log(x, y, z); //console ra a, b, c

//=====/

const myProduct = {
  title: "Iphone 14 Promax",
  price: 250,
  tag: ["new", "hot"],
  meta: {
    height: 200,
    width: 100,
  },
  isStock: false,
  sayHi: function () {
    console.log("Hi");
  },
};

//Cách gọi ra properties trong object mà ko cần đặt nhiều biến:
const {
  title,
  price: originalPrice, //để đổi tên giá trị bên trong
  meta: { height }, //để gọi ra giá trị của height trong object meta
  tag: [firstTag, _],
} = myProduct;

console.log(title);
console.log(originalPrice);
console.log(height);
console.log(firstTag);



//Rest and Spread Operators (cả Array và Object)
const friendss = ["Huy", "a", "b", "c"];

const [myName, ...myFriends] = friendss;

console.log(myFriends);
//console ra friends trừ myName = "Huy"

const {title: myTitle, ...myItem} = myProduct;
console.log(myItem);
//sẽ console ra object myProduct trừ title

//Spread: Trải ra
const friend1 = ['A','B','C'];

const friend2 = ['D','E','F'];

const all = ["Huy",...friend1, ...friend2]

console.log(all);

//Ví dụ khác Spread
let name = {firstName: "John", lastName: "Doe"}
let hobbies = {hobby1: "singing", hobby2: "dancing"}

let info = {
    ...name,
    ...hobbies,
    age: 25
}

console.log(info);

//===========/
//Optional chaining: ?.

const adventurer = {
    name: "Alice",
    //cat: {name: "Dinah"},
}

console.log(adventurer.cat?.name);

