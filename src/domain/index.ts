export interface Catalogue {
    exercises: Exercise[]
}

export enum BaseOperator {
    ADD= '+',
    SUBSTRACT = '-',
    MULTIPLY = '*',
}

export enum AdvancedOperator {
    ADD= '+',
    SUBSTRACT = '-',
    MULTIPLY = '*',
    DIVIDE= '/',
    EQUAL='=',
    LESS='<',
    GREATER='>'
}

export function randEnumValue<T>(enumObj: T): T[keyof T] {
    const enumVal = Object.values(enumObj);
    const i = Math.floor(Math.random() * enumVal.length);
    return enumVal[i];
}

export interface Exercise {
    id: string;
    correct?: boolean; //undefined == not solved
    category: Category;
    solution: Number;
    body: string;
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
