
import { BaseOperator } from "../domain";

export function selectRandomOperation(operations: BaseOperator[]) : BaseOperator {
    const len = operations.length;
    const i = Math.floor(Math.random() * len);
    return operations[i]
    
}



export function getOperatorsByDifficulty(level: number) : BaseOperator[]{
    let operators : BaseOperator[]
   
    switch(level){
        case 0:
            return operators =  [BaseOperator.ADD ]
        case 1:
            return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT]
        case 2:
            return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT , BaseOperator.MULTIPLY]
        default:
            return operators= [BaseOperator.ADD]

    }   

}