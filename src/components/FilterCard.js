import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme => ({
    card:{
        maxWidth:"18em", 
        overflow:'hidden',
      
    },
    cardTitle:{
        color:theme.palette.primary.main, 
        fontWeight:"500", 
        marginTop:"1em"
    },
    cardPrice:{
        fontWeight:"bold",
        color:theme.palette.primary.main, 
        marginTop:"1em"
    },
    cardButton:{
        color:theme.palette.primary.main, 
        backgroundColor:"#ddd",
        "&:hover":{
            backgroundColor:theme.palette.common.red,
            color:"#fff"
        }
    },
    typographyTitle:{
        fontWeight:"500", 
        textTransform:"capitalize", 
        marginLeft:".4em",
        fontWeight:"bold", 
        fontSize:".8rem",  
    },
    animationCard:{     
        marginTop:"1em",
    },
    addStyleHover:{
        animation: `$fadeIn .2s ease-out`,
    },
    "@keyframes fadeIn":{
        "0%":{
            opacity:0,
            transform: "translateY(50px)"
        },
        "100%":{
            opacity:1,
            transform: "translateY(0)"
        }
    },
    cardImage:{
        transition:"all .2s ease-in-out",
    },
    cardImageHover:{
        "&:hover":{
            transform:"scale(1.1)"
        }
    }
}))

const FilterCard = ({image, text ,price}) => {
    const theme = useTheme();
    const classes = useStyles();
    const [animation, setAnimation] = React.useState(false);
    const [imageHover, setImageHover] = React.useState(false);
    return(
        <Grid item container direction="column" className={classes.card} onMouseOver = {() => {setAnimation(true); setImageHover(true)}} onMouseLeave = {() => {setAnimation(false); setImageHover(false)}}>
            <Grid item container>
                <img src={image} alt="pillow" style={{width:"100%"}}  className={[classes.cardImage, imageHover ? classes.cardImageHover : undefined].join(' ')}/>
            </Grid>
            <Grid item>
                <Typography className={classes.cardTitle}>{text}</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.cardPrice}>{price}</Typography>
            </Grid>
            <Grid item container direction="row" className={[classes.animationCard, animation ? classes.addStyleHover : undefined]} style={{opacity:animation ? 1 : 0, transition:"all .3s ease-out", transform: animation ? 'translateY(0)' : 'translateY(50px)'}}>
                <Grid item>
                    <Button className={classes.cardButton}>
                        <LocalMallOutlinedIcon />
                        <Typography className={classes.typographyTitle}>Add To Cart</Typography>
                    </Button>
                </Grid>
                <Grid item style={{marginLeft:".5em"}}>
                    <Button className={classes.cardButton}>
                        <FavoriteBorderOutlinedIcon/> 
                    </Button>
                </Grid>
                <Grid item style={{marginLeft:".5em"}}>
                    <Button className={classes.cardButton}>
                        <SearchIcon/> 
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FilterCard;