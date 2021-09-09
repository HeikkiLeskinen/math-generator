export interface Catalogue {
    exercisesCompleted: Exercise[] | []
    exerciseToBeCompleted: Exercise[] |[]
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

export type SymbolsMap = { id: string, symbols: string[], completed: Boolean};

export interface Storage {
    symbolsById: any | undefined
}

export interface Exercise {
    id: string;
    wasLastSubmittedAnswerCorrect?: boolean;
    toString: Function;
    solve: Function;        
}

export interface Config {
    numberOfExercises: number;
    numberOfDigits: number;
    highDigit: number;
}

export enum Category {
    WALK = 'WALK',
    FIGHT = 'FIGHT',
    OPEN = 'OPEN',
}
