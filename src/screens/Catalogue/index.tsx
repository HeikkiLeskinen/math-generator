
import { useSelector } from "react-redux";
import { GameState } from "../../redux/reducers";
import "./App.css";
import { ExerciseComponent } from "./Exercise";

export function Catalogue() {
  const { catalogue } = useSelector((state: GameState) => {
    return {
      catalogue: state.catalogue
    };
  });


  return catalogue.exerciseToBeCompleted ? 
    <div>
      {catalogue.exerciseToBeCompleted.map((exercise, index) =>  
        {
          return <ExerciseComponent 
          key={exercise.id} 
          exercise={exercise} 
          index={index}/>
        }
        )
      }
    </div> : null;
}
