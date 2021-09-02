import { evaluate } from "mathjs";
import { AdvancedOperator, BaseOperator, Exercise, randEnumValue } from ".";
import { v4 as uuidv4 } from 'uuid';

interface Params {
    generateRandomNumber?: Function, 
    highDigit: number,
    numberOfDigits: number
}

export class MathExercise implements Exercise { 
    id: string;   
    symbols: string[] = []
    wasLastSubmittedAnswerCorrect?: boolean
    asString
    
    constructor(params : Params = {} as Params) {
        let {
            highDigit,
            numberOfDigits,
            generateRandomNumber = Math.random
        } = params;

        this.id=uuidv4(); 
        this._generate(generateRandomNumber, highDigit, numberOfDigits);    
        this.asString = this.toString();       
    }

    _generate(generateRandomNumber: Function, highDigit: number, numberOfDigits: number) {
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

        const firstNumber = Math.floor(generateRandomNumber() * highDigit)+1;
        let currentVal = firstNumber;
        let currentString = firstNumber.toString()
        this.symbols.push(currentString);

        while (currentString.length < 2 * numberOfDigits -1) {
            let operator = randEnumValue(BaseOperator, generateRandomNumber)
            let newNumber =  Math.min(currentVal, generateNumber(operator, highDigit));
            currentVal =  calculateNewVal(operator, currentVal, newNumber);
            currentString += operator + newNumber.toString()
             //save symbols 
            this.symbols.push(operator, newNumber.toString());
        
        }
    }

    solution(answer: number): boolean { //rename to solve?
        this.wasLastSubmittedAnswerCorrect = (evaluate(this.toString()) === answer);        
        return this.wasLastSubmittedAnswerCorrect;
    }  
    
    toString(): string {
        return this.symbols.join(" ");   
    }
    
}
  



