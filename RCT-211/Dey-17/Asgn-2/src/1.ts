//ENUM
const gender:
    | "male"
    | "female"
    | "trans"
    | "bi-gender"
    | "other"
    | "not to disclose" = "male";

    gender : "female";

    enum Gender {
        male = "Male",
        female = "Female",
        other = "Other gender that dont want to justify",
    }

    const gender1 : Gender = Gender.male ;
    console.log(gender1);