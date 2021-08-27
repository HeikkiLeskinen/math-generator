import { MathExercise } from "./mathExercise";

export interface Catalogue {
    exercises: Exercise[]
}

export enum Operator {
    ADD= '+',
    SUBSTRACT = '-',
    MULTIPLY = '*',
    DIVIDE= '/',
    EQUAL='=',
    LESS='<',
    GREATER='>'
}

export interface Exercise {
    id: string;
    correct?: boolean; //undefined == not solved
    category: Category;
    solution: Number;
    exercise: string;
}

export interface Config {
    numberOfExercises: number;
    numberOfDigits: number;
    target: number;
    highDigit: number;
}

export enum Category {
    WALK = 'WALK',
    FIGHT = 'FIGHT',
    OPEN = 'OPEN',
}
