import { TodoComment } from "typescript";

// Type
export enum TodoType {
    Learned = "Learned",
    Learning = "Learning",
    Pending = "Pending",
    Revision = "Revision",
}
export type Todo = {
    id : number;
    type : TodoType;
    message : string;
    likes : number;  
};
//color