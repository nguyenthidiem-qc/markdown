let powerUp = "mushroom";
let effect = "mushroom" ? "Mario becomes Supper" :
    "flower" ? "Mario can shoot fireballs" : "Mario is invincible";

console.log(effect);


let sum1 = 0;
for (let i = 1; i <= 100; i++) {

    sum1 = sum1 + i;
}
console.log(sum1);


/*function inBangCuuChuong(){
for (let bang = 2; bang <=9; bang ++){
    console.log("Bảng cửu chương" + " " + bang);
    for (let i = 1; i <= 10; i++){
         let result1 = bang * i;
         console.log(`${bang} * ${i} = ${result1}`)
    }
       console.log("");
}
};
inBangCuuChuong(); */

const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);


function sumRevenue() {
    const revenue = [
        { "month": 1, "total": 100 },
        { "month": 2, "total": 100 },
        { "month": 3, "total": 100 },
        { "month": 4, "total": 100 },
        { "month": 5, "total": 100 },
        { "month": 6, "total": 100 },
        { "month": 7, "total": 100 },
        { "month": 8, "total": 100 },
        { "month": 9, "total": 100 },
        { "month": 10, "total": 100 },
        { "month": 11, "total": 100 },
        { "month": 12, "total": 150 }
    ];
    let summm = 0;
    for (let month = 0; month < revenue.length; month++) {

        summm = summm + revenue[month].total;

    }
    return summm;

};
console.log(sumRevenue());


function multy(a, b) {
    let mul = a * b;
    console.log(`Phép nhân 2 số ${a} x ${b} = ${mul}`);
};
multy(5, 9);


function findMin(a, b, c) {
    let find = (a < b && a < c) ? console.log(`Số nhỏ nhất là ${a}`) :
        (b < a && b < c) ? console.log(`Số nhỏ nhất là ${b}`) :
            (c < a && c < b) ? console.log(`Số nhỏ nhất là ${c}`) : console.log("Không có số nhỏ nhất nào trong 3 số");
};
findMin(10, 3, 9);
findMin(2, 2, 2);
findMin(9, 7, 1);

//tìm sản phẩm
const products = [
    { name: 'iPhon 10', price: 2000000, category: 'phone', instock: true },
    { name: 'iPhon 11', price: 3000000, category: 'phone', instock: false },
    { name: 'iPhon 12', price: 4000000, category: 'phone', instock: true },
    { name: 'iPhon 13', price: 5000000, category: 'phone', instock: true },
    { name: 'iPhon 14', price: 6000000, category: 'phone', instock: true },
    { name: 'iPhon 15', price: 7000000, category: 'phone', instock: true },
    { name: 'iPhon 16', price: 8000000, category: 'ipad', instock: true },

];
//lọc sp còn hàng
const findInstock = products.filter(productInstock => productInstock.instock); //trả về false:productInstock => !productInstock.instock
console.log(findInstock);

//lọc sản phẩm có giá dưới 600000
const valueProduct = products.filter(value => value.price < 3000000);
console.log(valueProduct);

//lọc nhiều điều kiện
const filterMore = products.filter(cate => cate.category === 'ipad' && cate.instock);
console.log(filterMore);

//array util find
const nnumbers = [1, 8, 4, 7, 9];
const findNumber = nnumbers.find(nnnum => nnnum % 2 === 0);
console.log(findNumber);

const findThanSix = nnumbers.find(nnnum => nnnum > 8);
console.log(findThanSix);


//util reduce 
const redudeNumbers = [1, 8, 4, 7, 9];

//cách hoạt động từng bước:
const sumReduce = redudeNumbers.reduce((accumulator, current) => {
    //console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);

console.log(sumReduce);

//Reduce
const cart = [
    { product: "laptop", price: 950, quantity: 1 },
    { product: "ipad", price: 550, quantity: 1 },
    { product: "iphone", price: 250, quantity: 2 }
];

//Tính tổng tiền giỏ hàng
const sumCart = cart.reduce((accu, cur) => {
    return accu + (cur.price * cur.quantity);
}, 0);
console.log(sumCart);

const sumQty = cart.reduce((accQty, curQty) => {
    return accQty + curQty.quantity;
}, 0);
console.log(`Tổng số lượng sản phẩm là: ${sumQty}`);

//sort
const numSort = [100, 1, 98, 3, 77, 10];
numSort.sort((a,b) => b - a);
console.log(numSort);





