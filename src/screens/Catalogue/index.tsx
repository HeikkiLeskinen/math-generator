
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

  return <div>
    {catalogue.exercises
      .filter((e) => e.wasLastSubmittedAnswerCorrect !== true)
      .map((exercise, index) =>  
      {
        return <ExerciseComponent 
        key={exercise.id} 
        exercise={exercise} 
        index={index}/>
      }
      )
    }
    </div>;
}
