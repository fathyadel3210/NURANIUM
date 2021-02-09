import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import trendingAimChair from '../images/trendingAimchair.png';
import trendingChair from '../images/trendingChair.png';
import trendingGreenSofa from '../images/trendingGreenSofa.png';
import trendingPottery from '../images/trendingPottery.png';
import trendingSofa from '../images/trendingSofa.png';
import TrendingCard from '../components/TrendingCard';
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);


const useStyles = makeStyles(theme => ({
    trendingContainer:{
        backgroundColor:"#C1D2E6",
        height:"40em",
        marginTop:"3em"
    }
}))



const Trending = () => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column" className={classes.trendingContainer}>
            <Container>
                <Grid item container direction="row" justify="center" style={{marginTop:"5em"}}>
                    <Typography variant="h4" style={{color:theme.palette.primary.main}}>Trending 2020</Typography>
                </Grid>
                <Grid item container direction="row" justify="center">
                    <Typography style={{color:theme.palette.primary.main, maxWidth:"45em", fontWeight:"700", marginTop:"1.9em", fontStyle:"italic"}} align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie,
                        ligula et rutrum blandit, ex erat suscipit diam, 
                        quis placerat odio nulla et libero. Vestibulum id enim ac est feugiat laoreet
                    </Typography>
                </Grid>
                <Swiper
                spaceBetween={50}
                slidesPerView={matchesXS ? 1 :matchesMD ? 2 : 3}
                navigation
                style={{marginTop:"3em", marginLeft:matchesSM ? undefined : "3em"}}
                >
                <SwiperSlide>
                    <TrendingCard image={trendingChair} header="CHAISE" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrendingCard image={trendingPottery} header="LAVABO_BATHROOM" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrendingCard image={trendingAimChair} header="AIMCHAIR" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrendingCard image={trendingSofa} header="SOFA" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrendingCard image={trendingGreenSofa} header="POTTERY" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <TrendingCard image={trendingAimChair} header="CHAISE" text="DISCOVER OUR TRENDING PRODUCTS"/>
                </SwiperSlide>
                </Swiper>
            </Container>
        </Grid>
    )
}


export default Trending;