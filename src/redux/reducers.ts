import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import { Catalogue, Config, Category, Exercise } from '../domain/index';
import {Actions} from './actions';
import TYPES from './types';

export const initialState: GameState = {
    score: 0,
    running: false,
    config: {
        numberOfExercises: 3, //10
        numberOfDigits: 3,
        target: 70,
        highDigit: 10
    },
    catalogue: {exercises: []},
};

export interface GameState {
    score: number;
    targetReached?: boolean;
    running: boolean;
    config: Config;
    catalogue: Catalogue;
}

export const gameReducer = (
    state: GameState = initialState,
    action: Actions,
  ): GameState => {
    switch (action.type) {
        case TYPES.START_GAME:
            localStorage.setItem('running', 'true');
                return {
                    ...state,
                    score: 0,
                    running: true,
                    catalogue: generateExercises(state.config)
           
            }
        case TYPES.UPDATE_CONFIG:
            return {
                ...state,
                config: {
                    ...state.config,
                    ...action.payload
                }
            }
        case TYPES.SUBMIT_ANSWER:
            const {id, answer} = action.payload
            const exercise = state.catalogue.exercises
                .filter(e => e.id === id)
                .map(e => Object.assign({}, e, { correct: correctAnswer(e, answer) }))[0];
            
            if (exercise){

                const catalogue = {
                    exercises: state.catalogue.exercises.map(e => exercise.id === e.id ? exercise : e)
                }
                const currentScore = exercise.correct ? state.score + 1 : state.score - 1
                const remainingExercises = catalogue.exercises.filter(e => e.correct !== true).length;
                const targetReached = remainingExercises === 0 && 100 * (currentScore / state.config.numberOfExercises) >= state.config.target;
            
                return {
                    ...state,
                    score: currentScore,
                    targetReached: targetReached,
                    running: true,
                    catalogue: catalogue
                }
            } else {
                return state;
            }

        default:
            return state;
    }
}

const correctAnswer = (exercise: Exercise, answer: number) => {
    const correctAnswer = evaluate(exercise.operators);
    // eslint-disable-next-line
    return correctAnswer == answer;
};

const randomOperator = (noDivision: boolean): string =>
    {
    const _index = noDivision ? 3:4;
    const operators = '+-*/';
      return `${operators.charAt(Math.floor(Math.random() * _index))}`; 
    };
const generateNumber = (operator: string, highDigit:number): number => {
    const number = Math.floor(Math.random() * highDigit)
    return operator=== '/' ? number + 1: operator=== '*'? number +1: number
};

const calculateNewVal = (operator: string, currentVal: number,value:number ): number => {
    switch (operator) {
        case '*':
            return currentVal * value;
        case '/':
            return currentVal / value;
        case '+':
                return currentVal + value;
        case '-':
                return currentVal - value;
        default:
            return currentVal;
    }
    
};

const assignmentGenerator = (config: Config): string => {
    const firstNumber = Math.floor(Math.random() * config.highDigit)+1;
    let currentVal = firstNumber;
    let currentString = firstNumber.toString()

    while (currentString.length < 2*config.numberOfDigits -1) {
        let operator = randomOperator(true);
        let newNumber =  Math.min(currentVal, generateNumber(operator, config.highDigit));
        currentVal =  calculateNewVal(operator, currentVal, newNumber);
        currentString += operator + newNumber.toString()

    }
    return currentString;
};

const generateExercises = (config: Config): Catalogue => {
    return {
        exercises: [...Array(config.numberOfExercises)].map((_, i) => {
            return {
                id: uuidv4(),
                operators: assignmentGenerator(config),
                category: Category.WALK
            };
        })
    };
};