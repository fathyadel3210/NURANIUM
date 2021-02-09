import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
const About = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column" style={{marginTop:"8em"}}>
            <Container>
                <Grid item container direction={matchesSM ? "column" :"row"} justify="space-between" alignItems="center">
                    <Grid item container direction="column" style={{maxWidth: matchesSM ? "70%" : "30%"}} alignItems="center">
                        <Grid item>
                            <LanguageOutlinedIcon style={{fontSize:"3rem"}}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontWeight:"bold", marginTop:"1em"}}>WORLDWIDE DELIVERY</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" style={{marginTop:".2em", color:theme.palette.secondary.main}}>We work with the biggest delivery networks. It doesn't matter where in the world you are.</Typography>
                        </Grid>
                    </Grid>
                    {matchesSM ?undefined: <Grid item>
                        <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"black", color:"black", width:"1px", marginTop:matchesSM ? "1em" : undefined}}/>
                    </Grid>}
                    <Grid item container direction="column"  style={{maxWidth: matchesSM ? "70%" : "30%", marginTop:matchesSM ? "5em" : undefined}} alignItems="center">
                        <Grid item>
                            <LocalShippingOutlinedIcon style={{fontSize:"3rem"}}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontWeight:"bold", marginTop:"1em"}}>FREE SHIPPING</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" style={{marginTop:".2em", color:theme.palette.secondary.main}}>Stop wondering about shipping costs, what you see is what you pay.</Typography>
                        </Grid>
                    </Grid>
                    {matchesSM ? undefined : <Grid item>
                        <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"black", color:"black", width:"1px", marginLeft:"1em"}}/>
                    </Grid>}      
                    <Grid item container direction="column"  style={{maxWidth: matchesSM ? "70%" : "30%", marginTop:matchesSM ? "5em" : undefined}} alignItems="center">
                        <Grid item>
                            <AccountBalanceWalletOutlinedIcon style={{fontSize:"3rem"}}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontWeight:"bold", marginTop:"1em"}}>money back guarantee</Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" style={{marginTop:".2em", color:theme.palette.secondary.main}}>Got a problem with the product? Don't worry, we have a 30 day money back guarantee.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default About;