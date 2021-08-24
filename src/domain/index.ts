export interface Catalogue {
    exercises: Exercise[]
}

export interface Exercise {
    id: string;
    correct?: boolean; //undefined == not solved
    operators: string;
    category: Category;
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