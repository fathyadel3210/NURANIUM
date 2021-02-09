import React from 'react';
import sofa1 from '../images/sofa1.jpg';
import sofa2 from '../images/sofa2.jpg';
import sofa3 from '../images/sofa3.jpg';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    image:{
        height:"100%",
        width:"100%",
        backgroundSize:'cover',
        backgroundPosition:"center",
    }
}));


const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD= useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <React.Fragment>
            <div  id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{backgroundColor:'#FF0000', height: matchesSM ? ".5em" :"1em", width:matchesSM ? ".5em" :"1em", borderRadius:"50%"}} data-bs-slide="next"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{backgroundColor:'#FF0000', height: matchesSM ? ".5em" :"1em", width:matchesSM ? ".5em" :"1em", borderRadius:"50%"}}></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{backgroundColor:'#FF0000', height: matchesSM ? ".5em" :"1em", width:matchesSM ? ".5em" :"1em", borderRadius:"50%"}}></li>
                </ol>
                <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={sofa1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={sofa2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={sofa3} className="d-block w-100" alt="..." />
                        </div>
                </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <ArrowBackIcon style={{color:'#FF0000', fontSize:"2rem"}}/>
                    </a>  
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <ArrowForwardIcon style={{color:'#FF0000', fontSize:"2rem"}}/>
                    </a>
            </div>
        </React.Fragment>
    )
}


export default LandingPage;