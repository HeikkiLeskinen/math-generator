import { Actions } from './actions';
import TYPES from './types';


export const initialState: GameState = {
    score: 0,
    running: false
};

export interface GameState {
    score: number,
    running: boolean;
}

const increaseScore = (score: number): number => {
    return score + 1;
};



export const GameReducer = (
    state: GameState = initialState,
    action: Actions,
): GameState => {
    switch (action.type) {
        case TYPES.IncreaseScore:
            return {
                ...state,
                score: increaseScore(state.score),
            }
        case TYPES.GameRunning:
            return {
                ...state,
                running: true,
            }
        default:
            return state;
    }
};