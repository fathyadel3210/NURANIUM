import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    columnItem:{
        padding:"2em",
        cursor:"pointer",
        fontWeight:"bold",
        "&:hover":{
            color:"red"
        }
    },
    columnItemActive:{
       transition:'all .1s ease-in-out',
       color:'red'
    },
   
}))


const ShopCard = ({image, text}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [active, setActive] = React.useState(false);
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <React.Fragment>
            <ClickAwayListener onClickAway={() => setActive(false)}>
                <Grid item   container direction="column" alignItems="center" className={[classes.columnItem, active ? classes.columnItemActive : undefined].join(' ')} onClick={() => setActive(true)}>
                    <Grid item>
                        <img src={image}/>
                    </Grid>
                    <Grid item style={{marginTop:"1em"}}>
                        <Typography style={{fontWeight:"bold"}} align="center">{text}</Typography>
                    </Grid>       
                </Grid>
            </ClickAwayListener>
        </React.Fragment>
    )
}


export default ShopCard;