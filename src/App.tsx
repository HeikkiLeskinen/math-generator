import "./App.css";
import { Button, Container, Grid, makeStyles, Slider, TextField } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from "@material-ui/core";
import { ImageList } from "@material-ui/core";
import { ImageListItem } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { GameState, initialState } from "./redux/reducers";
import TYPES from "./redux/types";
import { Catalogue } from "./screens/Catalogue";
import Spacer from "./components/Spacer";



const useStyles = makeStyles({
  slider: {
    margin: "10px",
    
  },
})

function App() {
  const { config, score } = useSelector((state: GameState) => {
    return {
      config: state.config?state.config: initialState.config,
      score: state.score,
    };
  });


;
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  const LABELS: string[] = [
    "High Digit",
    "Number of Digit",
    "Number of Exercise",
    "Target (%)",
  ];

  interface SettingProps {
    label: string;
    value: number;
  }

  const settings: SettingProps[] = [
    { label: LABELS[0], value: config.highDigit },
    { label: LABELS[1], value: config.numberOfDigits },
    { label: LABELS[2], value: config.numberOfExercises }
  ];

  const isEmpty = (str: string): boolean => {
    return (!str || str.length === 0 );
  }

  const handleChange = (label: string, str: string) => {
    if (isEmpty(str)){
      return;
    }

    const value = parseInt(str);
    if (label === LABELS[0]) {
      dispatch({type: TYPES.UPDATE_CONFIG, payload: { highDigit: value }});
    } else if (label === LABELS[1]) {
      dispatch({type: TYPES.UPDATE_CONFIG, payload: { numberOfDigits: value }});
    } else if (label === LABELS[2]) {
      dispatch({type: TYPES.UPDATE_CONFIG, payload: { numberOfExercises: value }});
    } else {
      dispatch({type: TYPES.UPDATE_CONFIG, payload: { target: value }});
  }

  };

  const getMax = (label: string) => {
    if (label === LABELS[0]) {
      return 100;
    } else if (label === LABELS[1]) {
      return 5;
    } else {
      return 15;
    }
  };

  const getMin = (label: string) => {
    if (label === LABELS[0]) {
      return 0;
    } else if (label === LABELS[1]) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
        <Container maxWidth="xl">
            <Catalogue/>
          </Container>

          <Container
            maxWidth="xl"
            style={{
              paddingTop: "10px",
            }}
          >
            <Spacer>
              <Card>
                <CardActions>
                    <Slider 
                      className={classes.slider}
                      marks
                      defaultValue={0}
                      min={0}
                      max={3}
                    />
                </CardActions>
              </Card>
            </Spacer>
  
            <Card>
              <CardContent>
                <ImageList cols={4} gap={30} rowHeight={"auto"}>
                  {settings.map((setting) => (
                    <ImageListItem cols={1}>
                      <CardActions>
                        <TextField
                          label={setting.label}
                          type="number"
                          InputLabelProps={{ shrink: true }}
                          variant="filled"
                          value={setting.value}
                          fullWidth
                          inputProps={{
                            step: 1,
                            min: getMin(setting.label),
                            max: getMax(setting.label),
                          }}
                          onChange={(e) =>
                            handleChange(setting.label, e.currentTarget.value)
                          }
                        />
                      </CardActions>
                    </ImageListItem>
                  ))}

                  <ImageListItem cols={1}>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch({type: TYPES.START_GAME})}
                      >
                        GENERATE EXERCISE
                      </Button> 
                    </CardActions>
                  </ImageListItem>
                </ImageList>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={2}>

          <table>
            <thead>
              <tr >
                <th>Total Score:</th>
                <th>{score}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Max Score:</td>
                <td>{config.numberOfExercises}</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>

      </ThemeProvider>
    </>
  );
}

export default App;

