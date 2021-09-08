import { Catalogue, Config, Exercise, Storage, SymbolsMap } from '../domain/index';
import { Actions } from './actions';
import TYPES from './types';
import { createMathExercise,  MathExercise }  from '../domain/mathExercise';
import { REHYDRATE } from 'redux-persist';


export default function reducer() {}

export interface GameState {
    score: number;
    running: boolean;
    config: Config;
    targetReached?: boolean;
    catalogue: Catalogue;
    storage: Storage;
}

export const initialState: GameState = {
    score: 0,
    running: false,
    config: {
        numberOfExercises: 3,
        numberOfDigits: 2,
        target: 70,
        highDigit: 10
    },
    catalogue: {  
        exercisesCompleted:  [],
        exerciseToBeCompleted: []
    },
    storage: { 
        symbolsById: undefined
    }
}


export const gameReducer = (
    state: GameState = initialState,
    action: Actions,
  ): GameState => {

    switch (action.type) {
        case REHYDRATE: //READ FROM DISK   
            if (action.payload){
                return {
                    ...action.payload,
                    catalogue: readFromStorage(action.payload.storage),
                }
            }
            else {
                return {
                    ...state,
                    
                }
            }
        case TYPES.START_GAME:
            const catalogue = generateExercises(initialState.config)        
            return {
                ...state,
                score: 0,
                running: true,
                catalogue: catalogue,
                storage: updateStorage(catalogue)
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
                
                const exercise = state.catalogue.exerciseToBeCompleted.find(e => e.id === id);
    
                if (exercise){      
                    if (exercise.solution(answer)){
                     
                        const catalogue = {
                            ...state.catalogue,
                            exercisesCompleted: [...state.catalogue.exercisesCompleted, exercise],
                            exerciseToBeCompleted: state.catalogue.exerciseToBeCompleted.filter(e => e.id !== id)
                        }

                        return {
                            ...state,
                            score: state.score + 1, 
                            catalogue: catalogue,  
                            storage: updateStorage(catalogue)                         
                        }
                    } else {
                        return {
                            ...state,
                            score: state.score - 1,
                            storage: updateStorage(state.catalogue)                                     
                        }
                    }                                        
                } else {
                    return state;
                }

        default:
            return state;
    }
}

const updateStorage = (catelogue: Catalogue): Storage => {
    const {exercisesCompleted ,exerciseToBeCompleted } = catelogue;

    const exercisesCompletedMap = exercisesCompleted!.map((e) => (
        { id: e.id, symbols: (e as MathExercise).symbols, completed: true}
        )
    )
    const exerciseToBeCompletedMap = exerciseToBeCompleted.map((e) => (
        { id: e.id, symbols: (e as MathExercise).symbols, completed: false}
        )
    )

    return {
        symbolsById: exercisesCompletedMap.concat (exerciseToBeCompletedMap)
    }
}

const readFromStorage = (storage: Storage): Catalogue => {

    if(storage && storage.symbolsById){ // REMOVE ME

        // []
        //  {id: "dced3868-08c6-4325-b363-fd07ebdeac5f", symbols: Array(3), completed: true}
        const exercisesCompleted: Exercise[] = storage.symbolsById.filter((s: SymbolsMap) => s.completed === true)
            .map((s: SymbolsMap) => new MathExercise({
                'id': s.id,
                'symbols': s.symbols,
               
            }));

        const exerciseToBeCompleted = storage.symbolsById.filter((s: SymbolsMap) => s.completed === false)
            .map((s: SymbolsMap) => new MathExercise({
                'id': s.id,
                'symbols': s.symbols,
            }));
        
        return {  
            exercisesCompleted:  exercisesCompleted,
            exerciseToBeCompleted: exerciseToBeCompleted
        }
    } else {
        return {  
            exercisesCompleted: initialState.catalogue.exercisesCompleted ,
            exerciseToBeCompleted: initialState.catalogue.exerciseToBeCompleted
        }
    }

    
}

const generateExercises = (config: Config): Catalogue => {
    const {numberOfExercises, highDigit, numberOfDigits} = config
    const exerciseConfig = {highDigit:highDigit, numberOfDigits:numberOfDigits}
    return {
        exercisesCompleted:[],
        exerciseToBeCompleted: [...Array(numberOfExercises)].map((_, i) : Exercise => {
            return createMathExercise(exerciseConfig)            
        })
    };
};

function uuidv4(): string {
    throw new Error('Function not implemented.');
}
