import { evaluate } from "mathjs";

enum Operator {
    ADD= '+',
    SUBSTRACT = '-',
    MULTIPLY = '*',
    DIVIDE= '/',
    EQUAL='=',
    LESS='<',
    GREATER='>'
}

/* type Symbol = {
    type: Number | Operator;
}; */

interface params {
    randomNumber?:Function,
    noDivision?: boolean,  
    highDigit?: number,
    numberOfDigits?: number
}


export class Task {
    symbols:string[] = []
    noDivision: boolean | undefined;
    highDigit: number;
    numberOfDigits: number;
    randomNumber: Function | undefined;

        constructor(opts?: params ) {
          // Default values 
          const defaults = {
            randomNumber:() => Math.random(),
            noDivision: true,  
            highDigit: 6,
            numberOfDigits: 4
           
          };     
      
          this.noDivision=opts && opts.noDivision? opts.noDivision: defaults.noDivision;
          this.highDigit=opts&& opts.highDigit? opts.highDigit: defaults.highDigit;
          this.numberOfDigits=opts&& opts.numberOfDigits?opts.numberOfDigits: defaults.numberOfDigits;
          this.randomNumber=opts && opts.randomNumber? opts.randomNumber: defaults.randomNumber;
          this._generate(this.randomNumber); 
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
  




