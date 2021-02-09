import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from '../components/ShopCard';
import bed from '../images/bed.jpg';
import table from '../images/table.jpg';
import shelf from '../images/shelf.jpg';
import sideTable from '../images/sideTable.jpg';
import sofa from '../images/sofaIcon.jpg';
import closet from '../images/closet.jpg';
import Divider from '@material-ui/core/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Dressing from '../components/Dressing';
import Bed from '../components/Bed';


const useStyles = makeStyles(theme => ({
    shopListContainer:{
        backgroundColor:'#DDD',
    },  
}))




const ShopList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [component, setComponent] = React.useState(<Dressing/>);
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    React.useEffect(() => {
        switch(value){
            case "table":
                setComponent(<Dressing/>);
            break;
            case "bed":
                setComponent(<Bed/>);
            break;
            case "shelf":
                setComponent(<Dressing/>);
            break;
            case "side":
                setComponent(<Bed/>);
            break;
            case "sofa":
                setComponent(<Dressing/>);
            break;
            case "wardrope":
                setComponent(<Bed/>);
            break;
            default:
            break;
        }
    }, [value])

    const selectors = (
        <React.Fragment>
            <Grid container direction="row" className={classes.shopListContainer}>
                <Container>
                    <Grid item container direction="row" justify="space-between">
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("table")}>
                            <ShopCard image={table} text="Designing Table" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("bed")}>
                            <ShopCard image={bed} text="Bed" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("shelf")}>
                            <ShopCard image={shelf} text="Shelf" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em",backgroundColor:"#fff" , width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("side")}>
                            <ShopCard image={sideTable} text="Side Table" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("sofa")}>
                            <ShopCard image={sofa} text="Sofa" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                        <Grid item onClick={() => setValue("wardrope")}>
                            <ShopCard image={closet} text="WardRope" />
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" flexItem style={{height:"9.4em", backgroundColor:"#fff", color:"#fff", width:"2px"}}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </React.Fragment>
    )
    const swiper = (
        <React.Fragment >
            <Swiper
            className={classes.shopListContainer}
            style={{marginLeft:"-1em"}}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div onClick={() => setValue("table")} >
                        <ShopCard image={table} text="Designing Table"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => setValue("bed")}>
                        <ShopCard image={bed} text="Bed" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => setValue("shelf")}>
                        <ShopCard image={shelf} text="Shelf" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => setValue("side")}>
                        <ShopCard image={sideTable} text="Side Table" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div onClick={() => setValue("sofa")}>
                        <ShopCard image={sofa} text="Sofa" />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={() => setValue("wardrope")}>
                        <ShopCard image={closet} text="WardRope" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </React.Fragment>
    )
    return(
        <div>
            {matchesSM ? swiper : selectors}
            {component}
        </div>    
    )
}


export default ShopList;