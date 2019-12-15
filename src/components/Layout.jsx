import React, { useState, Fragment } from 'react'
import clsx from 'clsx'

import routes from '../navigation/routes'

import { connect } from 'react-redux'
import { handleNavigation } from '../redux/actions'

import { withRouter } from 'react-router-dom'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import MovieIcon from '@material-ui/icons/Movie'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import '../App.css'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'black',
        padding: 0,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#000000',
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth})`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    transparent: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    backgroundActiveItem: {
        backgroundColor: '#C6C6C6',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuIcon: {
        fontSize: '12px + 2vmin',
    },
    menuTitle: {
        fontSize: '8px + 2vmin',
        fontFamily: 'Starwars',
    },
    drawerTitle: {
        fontSize: '8px + 2vmin',
        fontFamily: 'Starwars',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,

        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        display: 'flex',
        flexDirection: 'row',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))

const { home, characters, films } = routes

const menuLinks = [
    { key: home, label: 'Home', icon: <HomeIcon /> },
    { key: characters, label: 'Personajes', icon: <PeopleIcon /> },
    { key: films, label: 'Películas', icon: <MovieIcon /> },
]
const Layout = props => {
    const { children, handleNavigation, isLoading, characters, history } = props

    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const { transparent, backgroundActiveItem } = classes

    const { pathname } = history.location

    return (
        <div className="App">
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(
                        classes.appBar,
                        pathname === home && transparent,
                        classes.red,
                        {
                            [classes.appBarShift]: open,
                        }
                    )}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon className={clsx(classes.menuIcon)} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            className={clsx(classes.menuTitle)}
                        >
                            STAR WARS
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <h1 className={classes.drawerTitle}>STAR WARS</h1>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menuLinks.map((item, index) => {
                            const { key, label, icon } = item
                            return (
                                <Fragment key={key}>
                                    <ListItem
                                        button
                                        className={clsx(
                                            pathname === key &&
                                                backgroundActiveItem
                                        )}
                                        onClick={() => {
                                            handleNavigation({ key, history })
                                            handleDrawerClose()
                                        }}
                                    >
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText primary={label} />
                                    </ListItem>
                                    <Divider />
                                </Fragment>
                            )
                        })}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <Grid container>{children}</Grid>
                </main>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { characters, isLoading } = state
    return {
        characters,
        isLoading,
    }
}

const mapDispatchToProps = {
    handleNavigation,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))
