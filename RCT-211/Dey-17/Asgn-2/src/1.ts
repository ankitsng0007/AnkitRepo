//ENUM

    enum Gender {
        male = "Male",
        female = "Female",
        other = "Other gender that dont want to justify",
    }

    const gender1 : Gender = Gender.male ;
    console.log(gender1);

    //Tuple - Exactly how many elements we have in an array;

    let arr: [number,string] = [1,"Ankit"];
    arr[0] = 5; //ok
    arr[0] = "Hello" //not ok
    