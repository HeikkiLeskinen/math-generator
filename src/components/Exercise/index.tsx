
//import { styles } from './styles';

export interface Exercise {
    id: string;
    correct?: boolean;
    operators: Array<string>;
}

export interface Props {
    exercise: Exercise;
    testID?: string;
}

export function Exercise({ exercise }: Props) {

}