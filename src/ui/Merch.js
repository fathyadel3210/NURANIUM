import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import blackLivingRoom from '../images/blacklivingRoom.jpg';
import greenWith from '../images/greenWith.jpg';
import room from '../images/room.jpg';

const useStyles = makeStyles(theme => ({
    trendingContainer:{
        backgroundColor:"#C1D2E6",
        height:"40em",
        marginTop:"3em"
    },
    imageContainer:{
        maxWidth:"32%",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"70%"
        },
        [theme.breakpoints.down("xs")]:{
            maxWidth:"90%"
        },
    },
    imageProperty:{
        width:"100%",
        backgroundSize:"cover",
        backgroundPosition:"center",
        boxSizing:"border-box"
    }
}))


const Merch = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column" style={{marginTop:"5em"}}>
            <Container>
                <Grid item container direction={matchesSM ? "column" :"row"} justify="space-between" alignItems="center">   
                        <Grid item className={classes.imageContainer}>
                            <img src={blackLivingRoom} alt="blacklivingroom" className={classes.imageProperty}/>
                        </Grid>
                        <Grid item className={classes.imageContainer}>
                            <img src={greenWith} alt="greenWith" className={classes.imageProperty} style={{margin:"1em 0"}}/>
                        </Grid>
                        <Grid item className={classes.imageContainer}>
                            <img src={room} alt="room" className={classes.imageProperty}/>
                        </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default Merch;