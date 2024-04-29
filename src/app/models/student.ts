export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    grade: number;
    [key: string]: any;
}