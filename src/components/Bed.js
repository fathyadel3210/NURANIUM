import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FilterCard from './FilterCard';
import tableBillow from '../images/tableBillow.jpg';
import theater from '../images/theater.jpg';
import clock from '../images/clock.jpg';
import chair from '../images/chair.jpg';
import horizontal from '../images/horizontal.jpg';
import pillow from '../images/pillow.jpg';
import sofaRed from '../images/sofaRed.jpg';
import roundedChair from '../images/roundedChair.jpg';




const Bed = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const renderLarge = (
        <React.Fragment>
            <Container>
           <Grid item container direction="column" style={{marginTop:"3em"}}>
               <Grid item container direction="row" justify="space-between">
                   <Grid item >
                       <FilterCard image={chair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                   </Grid>
                   <Grid item >
                       <FilterCard image={clock} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                   </Grid>
                   <Grid item>
                       <FilterCard image={theater} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                   </Grid>
                   <Grid item>
                       <FilterCard image={tableBillow} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                   </Grid>
               </Grid>
               <Grid item container direction="row" justify="space-between" style={{marginTop:"3em"}}>
                   <Grid item >
                       <FilterCard image={roundedChair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                   </Grid>
                   <Grid item >
                       <FilterCard image={sofaRed} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                   </Grid>
                   <Grid item>
                       <FilterCard image={pillow} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                   </Grid>
                   <Grid item>
                       <FilterCard image={horizontal} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                   </Grid>
               </Grid>
           </Grid>
        </Container>
        </React.Fragment>
    );
    const renderMedium = (
        <React.Fragment>
            <Container>
                <Grid container direction="column" style={{marginTop:"5em"}}>
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <FilterCard image={clock} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                        </Grid>
                        <Grid item>
                            <FilterCard image={theater} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                        </Grid>
                        <Grid item>
                            <FilterCard image={tableBillow} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <FilterCard image={pillow} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                        </Grid>
                        <Grid item>
                            <FilterCard image={horizontal} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                        </Grid>
                        <Grid item>
                            <FilterCard image={chair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="center" style={{marginTop:"2em"}}>
                        <Grid item style={{marginLeft:"3em"}}>
                            <FilterCard image={roundedChair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                        </Grid>
                        <Grid item>
                            <FilterCard image={sofaRed} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
    const renderSmall = (
        <React.Fragment>
            <Grid container direction="column" style={{marginTop:"2em"}}>
                <Grid item container direction={matchesXS ? "column" :"row"} justify="space-around" alignItems="center">
                   <Grid item>
                       <FilterCard image={theater} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                   </Grid>
                    <Grid item>
                       <FilterCard image={tableBillow} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                   </Grid>
                </Grid>
                <Grid item container  direction={matchesXS ? "column" :"row"} justify="space-around" alignItems="center">
                    <Grid item >
                        <FilterCard image={chair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                    </Grid>
                    <Grid item >
                        <FilterCard image={clock} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                    </Grid>
                </Grid>
                <Grid item container  direction={matchesXS ? "column" :"row"} justify="space-around" alignItems="center">
                    <Grid item>
                        <FilterCard image={pillow} text={<span>posuru mauris et congueid <br/> volutpaulla</span>} price="$41.00"/>
                    </Grid>
                    <Grid item>
                        <FilterCard image={horizontal} text={<span>Aenean massa ipsum dolor <br/> consectetu</span>} price="$47.00"/>
                    </Grid>
                </Grid>
                <Grid item container  direction={matchesXS ? "column" :"row"} justify="space-around" alignItems="center">
                   <Grid item >
                       <FilterCard image={roundedChair} text={<span>Sed faucubs ipsum ac dapius  <br/> coivamus</span>} price="$76.00"/>
                   </Grid>
                    <Grid item >
                       <FilterCard image={sofaRed} text={<span>Nulla porta massa estibuluac <br/> vivralleo</span>} price="$76.00"/>
                   </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
    return(
        <React.Fragment>
            {matchesSM ? renderSmall : matchesMD ? renderMedium : renderLarge}
        </React.Fragment>
    )
}


export default Bed;