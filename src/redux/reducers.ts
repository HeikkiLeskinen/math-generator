import { evaluate } from 'mathjs';
import { v4 as uuidv4 } from 'uuid';
import { Catalogue, Config, Category, Exercise } from '../domain/index';
import {Actions} from './actions';
import TYPES from './types';

export const initialState: GameState = {
    score: 0,
    running: false,
    config: {
        numberOfExercises: 10,
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
                const targetReached = remainingExercises !== 0 || 100 * (currentScore / state.config.numberOfExercises) >= state.config.target;

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

const generateExercises = (config: Config): Catalogue => {
    const it = assignmentGenerator(config);

    return {
        exercises: [...Array(config.numberOfExercises)].map((_, i) => {
            return {
                id: uuidv4(),
                operators: it.next().value,
                category: Category.WALK
            };
        })
    };
};

const correctAnswer = (exercise: Exercise, answer: number) => {
    const correctAnswer = evaluate(exercise.operators.join(""));
    return correctAnswer == answer;
};

const randomOperator = (index: number, upTill: number): string =>
    index % 2 === 0
    ? Math.floor(Math.random() * upTill).toString()
    : "+-*:".charAt(Math.floor(Math.random() * 2));

const allSumsPositive = (operators: string[]): boolean => {
    if (operators.length < 3) {
        return true;
    }

    if (evaluate(operators.join("")) <= 0){
        return false;
    }

    return evaluate(operators.slice(0, 3).join("")) >= 0 && allSumsPositive(operators.slice(2));
};

function* assignmentGenerator(config: Config): Generator<string[], any, number> {
    const number = config.numberOfDigits + (config.numberOfDigits - 1);
    while (true) {
        const operators = [...Array(number)].map((_, i) =>
            randomOperator(i, config.highDigit)
        );

        if (allSumsPositive(operators)) {
            yield operators;
        }
    }
}
