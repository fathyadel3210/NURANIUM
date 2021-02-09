import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import trendingChair from '../images/trendingChair.png';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    trendingContainer:{
        maxWidth:"25em",
        borderRadius:"1.5em",
        backgroundColor:"#fff",
        position:"relative",
        height:"15em",
        overflow:'visible',
        cursor:"pointer",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"33em",
        }
    }
}))


const TrendingCard = ({image, header, text}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <div>
            <div style={{width:"5em", height:"5em"}}></div>
            <Grid item container direction="column" alignItems="center" className={classes.trendingContainer}>
                <Grid item style={{position:"absolute", marginTop:"-5em"}}>
                    <img src={image} alt="trending-chair" style={{maxWidth:matchesSM ? "16em" : undefined}}/>
                </Grid>
                <Grid item>
                    <Typography variant="h6" style={{color:theme.palette.primary.main, fontWeight:"bold", marginTop:"7em"}}>{header}</Typography>
                </Grid>
                <Grid item>
                    <Typography style={{color:theme.palette.secondary.main, marginTop:".5em"}} align="center">{text}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default TrendingCard;