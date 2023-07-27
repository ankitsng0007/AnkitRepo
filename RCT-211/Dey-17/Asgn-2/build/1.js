//ENUM
var Gender;
(function (Gender) {
    Gender["male"] = "Male";
    Gender["female"] = "Female";
    Gender["other"] = "Other gender that dont want to justify";
})(Gender || (Gender = {}));
const gender1 = Gender.male;
console.log(gender1);
//Tuple - Exactly how many elements we have in an array;
let arr = [1, "Ankit"];
arr[0] = 5; //ok
arr[0] = "Hello"; //not ok
// 2D Array
let arr_2d = [
    [1, 2],
    [3, 4, 5],
    [6, 7], //ok
];
