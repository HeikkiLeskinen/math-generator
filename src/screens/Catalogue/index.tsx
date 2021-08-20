
import { useSelector } from "react-redux";
import { GameState } from "../../redux/reducers";
import { ExerciseComponent } from "./Exercise";
import "./App.css";

export function Catalogue() {
  const { catalogue } = useSelector((state: GameState) => {
    return {
      catalogue: state.catalogue
    };
  });

  return <div>
    {catalogue.exercises
      .filter((e) => e.correct !== true)
      .map((exercise, index) =>
        <ExerciseComponent key={exercise.id} exercise={exercise} index={index}/>
      )
    }
    </div>;
}
