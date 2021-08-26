import { boolean, evaluate } from "mathjs";

enum Operator {
    ADD= '+',
    SUBSTRACT = '-',
    MULTIPLY = '*',
    DIVIDE= '/',
    EQUAL='=',
    LESS='<',
    GREATER='>'
}

type Symbol = {
    type: Number | Operator;
};

export class Task {
    symbols:string[] = []
    noDivision: boolean | undefined;
    highDigit: number;
    numberOfDigits: number;

    constructor(randomNumber=Math.random, noDivision: boolean=true,  highDigit: number=6,numberOfDigits: number=4) { 
        this.noDivision=noDivision;
        this.highDigit=highDigit;
        this.numberOfDigits=numberOfDigits;
        this._generate(randomNumber);
    }

    _generate(randomNumber: any) {

        const randomOperator = (): string =>
        {
            const _index = this.noDivision ? 3:4;
            const operators = '+-*/';
            return `${operators.charAt(Math.floor(randomNumber() * _index))}`; 
        };

        const generateNumber = (operator: string, max:number): number => {
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

    solution(): Number | Operator {        
        return evaluate(this.toString());
    }

    toString(): string {
        return this.symbols.join(" ");
    }
}
  




