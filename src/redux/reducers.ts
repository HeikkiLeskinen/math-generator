import { v4 as uuidv4 } from 'uuid';
import { Catalogue, Config, Category, Exercise } from '../domain/index';
import {Actions} from './actions';
import TYPES from './types';
import {Task}  from '../domain/task';

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
    const correctAnswer = exercise.task.solution();
    // eslint-disable-next-line
    return correctAnswer == answer;
 };


const generateExercises = (config: Config): Catalogue => {
    return {
        exercises: [...Array(config.numberOfExercises)].map((_, i) => {
            let task = new Task({randomNumber:()=>(Math.random()), 'highDigit':config.highDigit, 'numberOfDigits':config.numberOfDigits});
            return {
                id: uuidv4(),
                task: task,
                category: Category.WALK
            };
        })
    };
};