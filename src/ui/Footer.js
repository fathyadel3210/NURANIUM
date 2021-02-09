import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import nuraniumLogo from '../images/nuranium-white.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ContactlessIcon from '@material-ui/icons/Contactless';
import payment from '../images/payment.png';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    typography:{
        color:"#909497", 
        marginTop:".5em",
        cursor:"pointer",
        "&:hover":{
            color:"#C0392B"
        }
    }
}))

const Footer = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <div style={{backgroundColor:theme.palette.primary.main, marginTop:"5em", paddingBottom:"5em"}}>
            <Container>
                <Grid container direction={matchesSM ? "column" : "row"} justify="space-between" alignItems="center">
                    <Grid item container direction="column" style={{width:"12em", marginTop:"2em"}}>
                        <Grid item>
                            <img src={nuraniumLogo} alt="nuranium-logo"/>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" style={{marginTop:"2em", maxWidth:"8em"}}>
                            <Grid item>
                                <FacebookIcon style={{color:"#fff"}}/>
                            </Grid>
                            <Grid item>
                                <TwitterIcon style={{color:"#fff"}}/>
                            </Grid>
                            <Grid item>
                                <InstagramIcon style={{color:"#fff"}}/>
                            </Grid>
                            <Grid item>
                                <ContactlessIcon style={{color:"#fff"}}/>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginTop:"2em"}}>
                            <img src={payment} alt="payment"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{width:"12em", marginTop:"5em", marginLeft:matchesSM ? undefined : "3em"}}>
                        <Typography variant="h5" style={{color:"#fff"}}>Customer Service</Typography>
                        <Typography className={classes.typography}>Contact Us</Typography>
                        <Typography className={classes.typography}>Help And Advice</Typography>
                        <Typography className={classes.typography}>Shipping & Returns</Typography>
                        <Typography className={classes.typography}>Terms and Conditions</Typography>
                        <Typography className={classes.typography}>Refund Policy</Typography>
                    </Grid>
                    <Grid item container direction="column" style={{width:"12em", marginTop:"5em"}} >
                        <Typography variant="h5" style={{color:"#fff"}}>Information</Typography>
                        <Typography className={classes.typography}>About Us</Typography>
                        <Typography className={classes.typography}>Testimonials</Typography>
                        <Typography className={classes.typography}>my Account</Typography>
                        <Typography className={classes.typography}>payments & Returns</Typography>
                        <Typography className={classes.typography}>View Catalogues Online</Typography>
                    </Grid>
                    <Grid item container direction="column" style={{width:"12em", marginTop:"5em"}}>
                        <Typography variant="h5" style={{color:"#fff"}}>About Us</Typography>
                        <Typography className={classes.typography}>Who we are</Typography>
                        <Typography className={classes.typography}>Corporate Responsibility</Typography>
                        <Typography className={classes.typography}>California Laws</Typography>
                        <Typography className={classes.typography}>payments & Returns</Typography>
                        <Typography className={classes.typography}>View Catalogues Online</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}


export default Footer;