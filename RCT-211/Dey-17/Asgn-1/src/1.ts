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
    { rollNo:3, name:"Rajeev", batch:"RCT-201", class:2 },
    { rollNo:4, name:"Satyam", batch:"RCT-301", class:2 },
    { rollNo:1, name:"Ankit", batch:"RCT-101", class:1, age:25 }
]