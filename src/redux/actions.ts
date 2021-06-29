import TYPES from './types';

export type Actions =
    | IncreaseScore
    | GameRunning


type IncreaseScore = {
    readonly type: TYPES.IncreaseScore
    amount: number;
}


type GameRunning = {
    readonly type: TYPES.GameRunning
    running: boolean;
}

