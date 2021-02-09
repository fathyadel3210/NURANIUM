import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import nuraniumLogo from '../images/nuranium-logo.png';
import Grid from '@material-ui/core/Grid';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import nuraniumLogoSmall from '../images/nuranium-logo-small.png';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';




const useStyles = makeStyles((theme) => ({
    appBar:{
        backgroundColor:theme.palette.common.white,
        padding:"1.5em 0",
        [theme.breakpoints.down("xs")]:{
            padding:".5em 0",
        }
    },
    formatAlignLeftIcon:{
        color:theme.palette.primary.main,
        width:"2em",
        fontSize:'2.5rem',
        [theme.breakpoints.down("xs")]:{
            fontSize:"2rem"
        },
        "&:active":{
            outline:'none',
            border:"none"
        }
    },
    formatAlignLeftButton:{
        "&:hover":{
            backgroundColor:'transparent'
        },
        "&:active":{
            outline:'none',
            border:'none'
        }
    },
    searchIcon:{
        color:theme.palette.common.black,
        fontSize:"1.8rem",
        marginRight:".5em",
        cursor:'pointer',
        transition:'all .1s ease-in-out',
        "&:hover":{
            color:'red',
            backgroundColor:'transparent'
        }
    },
    personIcon:{
        color:theme.palette.common.black,
        fontSize:'2rem',
        margin:' 0 .5em',
        cursor:'pointer',
        transition:'all .1s ease-in-out',
        "&:hover":{
            color:'red'
        }
    },
    shoppingBasketIcon:{
        "&:hover":{
            color:'red'
        }
    },
    borderIcon:{
        borderRight:`.1rem solid ${theme.palette.common.black}`, 
        height:'1.7em'
    },
    myCart:{
        color:theme.palette.common.black,
        fontSize:'1rem',
        marginTop:'.3rem',
        marginLeft:'1rem',
        cursor:'pointer',
        fontWeight:'bold'
    },
    headerIconsContainer:{
        maxWidth:"19em",
        marginTop:".5em"
    },
    nuraniumButton:{
        "&:hover":{
            backgroundColor:'transparent'
        }
    },
    listItem:{
        "&:hover":{
            backgroundColor:'transparent',
            color:'red'
        }
    },
    listItemText:{
        "&:hover":{
            backgroundColor:'transparent',
            color:'red'
        }
    }
}));
  

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [openList, setOpenList] = React.useState(false);
    const [openList2, setOpenList2] = React.useState(false);
    const [openList3, setOpenList3] = React.useState(false);
    const [openList4, setOpenList4] = React.useState(false);
    const [openList5, setOpenList5] = React.useState(false);
    const [color, setColor] = React.useState("black");
    const [color2, setColor2] = React.useState("black");
    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <Button className={classes.formatAlignLeftButton} disableRipple onClick={() => setOpenDrawer(true)}>
                                <FormatAlignLeftIcon className={classes.formatAlignLeftIcon}/>
                            </Button>
                        </Grid>
                            <Grid item >
                                <Button disableRipple className={classes.nuraniumButton}>
                                    {matchesXS ? <img src={nuraniumLogoSmall} alt="nuranium-logo-small" style={{marginTop:".5em"}}/> : <img src={nuraniumLogo} alt="nuranium-logo"/>}
                                </Button>
                            </Grid>
                        <Hidden smDown>
                            <Grid item container direction="row" className={classes.headerIconsContainer}>
                                <Grid item>
                                    <SearchIcon className={classes.searchIcon}/>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.borderIcon}></Typography>
                                </Grid>
                                <Grid item style={{paddingRight:"1em", paddingLeft:"1em"}}>
                                    <Badge badgeContent={10} color="error">
                                        <PersonOutlineOutlinedIcon style={{color:color2, fontSize:"2rem", cursor:"pointer"}} onMouseOver={() => setColor2("red")} onMouseLeave = {() => setColor2("black")}/>
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.borderIcon}></Typography>
                                </Grid>
                                <Grid item style={{paddingRight:"1em", paddingLeft:"1em"}}>
                                    <Badge badgeContent={4} color="error">
                                        <LocalMallOutlinedIcon  style={{color:color, fontSize:"2rem", cursor:"pointer"}} onMouseOver={() => setColor("red")} onMouseLeave = {() => setColor("black")}/>
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.borderIcon}></Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.myCart}>MY Cart</Typography>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
                <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                    <List component="nav" aria-labelledby="nested-list-subheader" style={{marginTop:"5em",paddingRight:"2em"}}>
                        <ListItem button onClick={() => setOpenList(!openList)} className={classes.listItem} disableRipple>
                            <ListItemText primary={<span style={{fontWeight:"bold"}}>Home</span>}  style={{marginRight:"5em"}} />
                            {openList ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openList} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>HOME 1</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>HOME 2</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>HOME 3</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>HOME 4</span>}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <List component="nav" aria-labelledby="nested-list-subheader" style={{paddingRight:"2em"}}>
                        <ListItem button onClick={() => setOpenList2(!openList2)} className={classes.listItem} disableRipple>
                            <ListItemText primary={<span style={{fontWeight:"bold"}}>ALL DEMOS</span>}  style={{marginRight:"5em"}} />
                            {openList2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openList2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>DEMO 1</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>DEMO 2</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>DEMO 3</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>DEMO 4</span>}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <List component="nav" aria-labelledby="nested-list-subheader" style={{paddingRight:"2em"}}>
                        <ListItem button onClick={() => setOpenList3(!openList3)} className={classes.listItem} disableRipple>
                            <ListItemText primary={<span style={{fontWeight:"bold"}}>PAGES</span>}  style={{marginRight:"5em"}} />
                            {openList3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openList3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>PAGE 1</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>PAGE 2</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>PAGE 3</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>PAGE 4</span>}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <List component="nav" aria-labelledby="nested-list-subheader" style={{paddingRight:"2em"}}>
                        <ListItem button onClick={() => setOpenList4(!openList4)} className={classes.listItem} disableRipple>
                            <ListItemText primary={<span style={{fontWeight:"bold"}}>CATEGORIES</span>}  style={{marginRight:"5em"}} />
                            {openList4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openList4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>CATEGORIE 1</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>CATEGORIE 2</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>CATEGORIE 3</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>CATEGORIE 4</span>}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <List component="nav" aria-labelledby="nested-list-subheader" style={{paddingRight:"2em"}}>
                        <ListItem button onClick={() => setOpenList5(!openList5)} className={classes.listItem} disableRipple>
                            <ListItemText primary={<span style={{fontWeight:"bold"}}>BLOG</span>}  style={{marginRight:"5em"}} />
                            {openList5 ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={openList5} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>BLOG 1</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>BLOG 2</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>BLOG 3</span>}/>
                                </ListItem>
                                <ListItem button className={classes.listItem} disableRipple>
                                    <ListItemText primary={<span style={{fontWeight:"bold"}}>BLOG 4</span>}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar;