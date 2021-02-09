import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const LatestCard = ({img}) => {
    const theme = useTheme();
    return(
        <Grid item container direction="column">
            <Grid item>
                <img src={img} style={{width:"100%"}}/>
            </Grid>
            <Grid item container direction="row">
                <Typography style={{color:theme.palette.primary.main, fontWeight:"500", marginTop:".5em"}} align="center">
                    proin tincidunt, ipsum nec vehicula euismod, neque nibh
                </Typography>
            </Grid>
            <Grid item container direction="row" justify="center" style={{marginTop:"1em"}}>
                <Grid item container direction="row" style={{maxWidth:"7em"}}>
                    <ChatBubbleIcon style={{color:"grey", fontSize:"1em"}}/>
                    <Typography style={{color:"grey", fontSize:".8rem", marginLeft:".5em"}}>0 comment</Typography>
                </Grid>
                <Grid item container direction="row" style={{maxWidth:"7em"}}>
                    <CalendarTodayIcon style={{color:"grey", fontSize:"1em"}}/>
                    <Typography style={{color:"grey",  fontSize:".8rem", marginLeft:".5em"}}>8 Nove 2019</Typography>
                </Grid>
            </Grid>
            <Grid item container direction="row">
                <Typography align="center" style={{fontSize:".8rem", marginTop:".4em", padding:"1em"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    , do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim...
                </Typography>
            </Grid>
        </Grid>
    )
}


export default LatestCard;