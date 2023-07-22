console.log("HELLO");


let students:{
    rollNo: number;
    name: string;
    batch: "RCT-101" | "RCT-201";
    class: number;
    age?: number;
}[] = [
    { rollNo:1, name:"Ankit", batch:"RCT-101", class:1 },
    { rollNo:2, name:"Shivam", batch:"RCT-101", class:1 },
    { rollNo:3, fullName:"Rajeev", batch:"RCT-201", class:2 },
    { rollNo:4, name:"Satyam", batch:"RCT-301", class:2 },
    { rollNo:1, name:"Ankit", batch:"RCT-101", class:1, age:25 }
];

type cart= {
    id:number;
    products:any;
    total:number;
}
let cartItems:cart[] =[
    {
    id:1, 
    products:[{id:1,name:"Towel", price:250,quantity:2}], 
    total:500
},
{
    id:2, 
    products:[{id:1,name:"Towel", price:250,quantity:3}], 
    total:750
},{
    id:3, 
    products:[{id:1,name:"Towel", price:250,quantity:2},
              {id:1,name:"Shampoo", price:10,quantity:2}], 
    total:520
}
]