import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    spacer: {
        marginBottom: 15 
    }
  });


const Spacer = ({children}) => {
    const classes = useStyles();
    return <div className={classes.spacer}>{children}</div>;
};


export default Spacer;