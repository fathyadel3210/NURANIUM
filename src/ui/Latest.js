import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LatestCard from '../components/LatestCard';
import Latest1 from '../images/latest-1.jpg';
import Latest2 from '../images/latest-2.jpg';
import Latest3 from '../images/latest-3.jpg';

const Latest = () => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Container>
            <Grid container direction={matchesSM ? "column" : "row"} justify="space-between" style={{marginTop:"8em"}} alignItems="center">
                <Grid item container direction="row" justify="center" style={{marginBottom:"3em"}}>
                    <Typography variant="h4" align="center">Latest Post</Typography>
                </Grid>
                <Grid item style={{maxWidth:matchesXS ? "80%" : matchesSM ? "50%" : "32%"}}>
                    <LatestCard img={Latest1}/>
                </Grid>
                <Grid item style={{maxWidth:matchesXS ? "80%" : matchesSM ? "50%" : "32%", margin:matchesSM ? "3em 0" : undefined}}>
                    <LatestCard img={Latest2}/>
                </Grid>
                <Grid item style={{maxWidth:matchesXS ? "80%" : matchesSM ? "50%" : "32%"}}>
                    <LatestCard img={Latest3}/>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Latest;