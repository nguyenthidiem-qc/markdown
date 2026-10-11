let age = 20;
let status1 = (age >= 18) ? "Người lớn" : "TRẻ em";
console.log(status1);

let score = 89;
let grade = (score >= 90) ? "Giỏi" :
    (score >= 80) ? "Khá" :
        (score >= 60) ? "Trung bình" : "Yếu";
console.log(grade);

// for..in
const person = {
    name2: "Hana", 
    age: 30, 
    city: "Hanoi2"
};
for(let key in person){
    //console.log(key + ":" + person[key]);
    console.log(key);
}
