import {Actions} from './actions';

export const initialState: GameState = {
    score: 0,
    running: false
};

export interface GameState {
    score: number;
    running: boolean;
}

export const gameReducer = (
    state: GameState = initialState,
    action: Actions,
  ): GameState => {

    switch (action.type) {
        case "IncreaseScore":
            return {score: action.amount + state.score, running:false};
        case "StartGame":
            return {score: 0, running: true}
    }

    return state
}