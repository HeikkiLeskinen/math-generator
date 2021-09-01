import { evaluate } from "mathjs";
import { AdvancedOperator, BaseOperator, Category, Exercise, randEnumValue } from ".";
import { v4 as uuidv4 } from 'uuid';

interface params {
    randomNumber?:Function,
    randomOperator?:Function,
    noDivision?: boolean,  
    highDigit?: number,
    numberOfDigits?: number
}


export class MathExercise implements Exercise { 
    symbols:string[] = []
    noDivision: boolean | undefined;
    highDigit: number;
    numberOfDigits: number;
    randomNumber: Function | undefined;
    category: Category =  Category.WALK;
    id: string;
    correct?: boolean | undefined;
    solution:Number;
    body: string;
    randomOperator: Function | undefined;
    
    constructor(opts?: params ) {
        // Default values 
        const defaults = {
          randomNumber:() => Math.random(),
          noDivision: true,  
          highDigit: 6,
          numberOfDigits: 4,
          randomOperator : () => {
              const operators = this.noDivision ? BaseOperator: AdvancedOperator
              return randEnumValue(operators)
          },
        };     

        this.id=uuidv4();
        this.noDivision=opts && opts.noDivision? opts.noDivision: defaults.noDivision;
        this.highDigit=opts&& opts.highDigit? opts.highDigit: defaults.highDigit;
        this.numberOfDigits=opts&& opts.numberOfDigits?opts.numberOfDigits: defaults.numberOfDigits;
        this.randomNumber=opts && opts.randomNumber? opts.randomNumber: defaults.randomNumber;
        this.randomOperator= opts && opts.randomOperator? opts.randomOperator: defaults.randomOperator;
        this._generate(this.randomNumber, this.randomOperator);   
        this.solution = this._solution(); 
        this.body = this.symbols.join(" ");
      }
    

    
    _solution(): number {     
        return evaluate(this.toString());
    } 

    _generate(randomNumber: any, randomOperator:any) {
        const generateNumber = (operator: BaseOperator | AdvancedOperator, max:number): number => {
            const number = Math.floor(randomNumber() * max)
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

        const firstNumber = Math.floor(randomNumber() * this.highDigit)+1;
        let currentVal = firstNumber;
        let currentString = firstNumber.toString()
        this.symbols.push(currentString);

        while (currentString.length < 2 * this.numberOfDigits -1) {
            let operator = randomOperator();
            let newNumber =  Math.min(currentVal, generateNumber(operator, this.highDigit));
            currentVal =  calculateNewVal(operator, currentVal, newNumber);
            currentString += operator + newNumber.toString()
             //save symbols 
            this.symbols.push(operator, newNumber.toString());
        
        }
    }
    
    toString(): string {
       return this.symbols.join(" ");
         
    }
    


}
  



