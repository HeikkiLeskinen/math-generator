
import { BaseOperator } from "../domain";

export function selectRandomOperation(operations: BaseOperator[]) : BaseOperator {
    const len = operations.length;
    const i = Math.floor(Math.random() * len);
    return operations[i]
    
}



export function getOperatorsByDifficulty(difficulty: number) : BaseOperator[]{
    let operators : BaseOperator[]
   
    switch(difficulty){
        case 1:
            return operators =  [BaseOperator.ADD ]
        case 2:
            return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT]
        case 3:
            return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT , BaseOperator.MULTIPLY]
        default:
            return operators= [BaseOperator.ADD]

    }   

}