import { Student } from "./student";

export interface Class {
    className: string;
    teacher: string;
    students: Student[];
}
