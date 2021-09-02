export interface Catalogue {
    exercises: Exercise[]
}

export enum BaseOperator {
    ADD = '+',
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

export function randEnumValue<T>(enumObj: T, randomNumberGenerator: Function): T[keyof T] {
    const enumVal = Object.values(enumObj);
    const i = Math.floor(randomNumberGenerator() * enumVal.length);
    return enumVal[i];
}

export interface Exercise {
    id: string;
    asString: string;
    wasLastSubmittedAnswerCorrect?: boolean;
    toString: Function;
    solution: Function;        
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
