
import { BaseOperator } from "../domain";

export function selectRandomOperation(operations: BaseOperator[]) : BaseOperator {
    const len = operations.length;
    const i = Math.floor(Math.random() * len);
    return operations[i]
    
}



export function getOperatorsByDifficulty(difficulty: number) : BaseOperator[]{
    let operators : BaseOperator[]
   
    if (difficulty === 2){
        return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT]
    }
           
    else if (difficulty === 3) {
        return operators =  [BaseOperator.ADD , BaseOperator.SUBSTRACT , BaseOperator.MULTIPLY]
    }      

    else {
        return operators =  [BaseOperator.ADD ]
}  

      

}