import { Catalogue, Config, Exercise } from '../domain/index';
import {Actions} from './actions';
import TYPES from './types';
import {MathExercise}  from '../domain/mathExercise';


  
export default function reducer(state = initialState) {}

export interface GameState {
    score: number;
    running: boolean;
    config: Config;
    targetReached?: boolean;
    catalogue: Catalogue;
}

export const initialState: GameState = {
    score: 0,
    running: false,
    config: {
        numberOfExercises: 3,
        numberOfDigits: 3,
        target: 70,
        highDigit: 10
    },
    catalogue: {  
        exercisesCompleted: [],
        exerciseToBeCompleted: []
    }
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
                const exercise: Exercise | undefined = state.catalogue.exerciseToBeCompleted.find(e => e.id === id);
                    
                if (exercise){
                    let currentScore: number;
                    let newCatalogue: Catalogue = state.catalogue;

                    if(exercise.solution(answer)){
                        currentScore = state.score + 1 ;
                        newCatalogue.exercisesCompleted.push(exercise);
                        newCatalogue.exerciseToBeCompleted.splice(newCatalogue.exerciseToBeCompleted.findIndex(e => e.id === id), 1);
                     
                    }

                    else {
                        currentScore = state.score - 1 ;

                    }

                    // find out a better way to do this, hint: change data structure?
                    const remainingExercises = newCatalogue.exerciseToBeCompleted.length;
                    const targetReached = remainingExercises === 0 && 100 * (currentScore / state.config.numberOfExercises) >= state.config.target;
                
                    return {
                        ...state,
                        score: currentScore,
                        targetReached: targetReached,
                        running: true,
                        catalogue: newCatalogue,
                    }
                } else {
                    return state;
                }

        default:
            return state;
    }
}

const generateExercises = (config: Config): Catalogue => {
    return {
        exercisesCompleted:[],
        exerciseToBeCompleted: [...Array(config.numberOfExercises)].map((_, i) => {
            let exercise = new MathExercise({generateRandomNumber:()=>(Math.random()), 'highDigit':config.highDigit, 'numberOfDigits':config.numberOfDigits});
            return exercise;
        })
    };



};