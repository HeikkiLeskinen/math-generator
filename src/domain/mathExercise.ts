import { evaluate } from "mathjs";
import { AdvancedOperator, BaseOperator, Exercise, randEnumValue } from ".";
import { v4 as uuidv4 } from 'uuid';
import { getOperatorsByDifficulty, selectRandomOperation } from "../utils/operatorHelpers";
import { useSelector } from "react-redux";
import { GameState } from "../redux/reducers";

interface Params {
    id: string,
    symbols: string[]
}


export class MathExercise implements Exercise { 
    id: string;   
    symbols: string[] = []
    wasLastSubmittedAnswerCorrect?: boolean
   
    constructor(params : Params = {} as Params) {
        const {
            id,
            symbols,    
        } = params;

        this.id = id;
        this.symbols = symbols; 
    }

    solve(answer: number): boolean { //rename to solve?
        this.wasLastSubmittedAnswerCorrect = (evaluate(this.toString()) === answer);        
        return this.wasLastSubmittedAnswerCorrect;
    }  
    
    toString(): string {
        return this.symbols.join(" ");   
    }
    
}


  
function GenerateSymbols(generateRandomNumber: Function, highDigit: number, numberOfDigits: number, difficulty:number) {

    const generateNumber = (operator: BaseOperator | AdvancedOperator, max:number): number => {
        const number = Math.floor(generateRandomNumber() * max)
        return number === 0 && (operator=== '/' || operator=== '*') ? number + 1 : number
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

    let symbols =[]

    const firstNumber = Math.floor(generateRandomNumber() * highDigit)+1;
    let currentVal = firstNumber;
    let currentString = firstNumber.toString()
    symbols.push(currentString);



    while (currentString.length < 2 * numberOfDigits -1) {
        //let operator = randEnumValue(BaseOperator, generateRandomNumber)


        let operators = getOperatorsByDifficulty(difficulty);
        let operator = selectRandomOperation(operators);
        let newNumber =  Math.min(currentVal, generateNumber(operator, highDigit));
        currentVal =  calculateNewVal(operator, currentVal, newNumber);
        currentString += operator + newNumber.toString()
         //save symbols 
        symbols.push(operator, newNumber.toString());
    
    }
    return symbols
}

interface CreateMathExerciseProps {
    generateRandomNumber?: Function, 
    highDigit: number,
    numberOfDigits: number,
    difficulty: number,
}
export const createMathExercise= (props: CreateMathExerciseProps): MathExercise =>{
    const generateRandomNumber = props.generateRandomNumber? props.generateRandomNumber: Math.random;
    const highDigit= props.highDigit;
    const numberOfDigits= props.numberOfDigits
    const difficulty= props.difficulty
    return  new MathExercise({
        'id': uuidv4(),
        'symbols': GenerateSymbols(generateRandomNumber,highDigit, numberOfDigits,difficulty)
     });         

}


