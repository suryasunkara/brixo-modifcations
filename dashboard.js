import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import history from './history';
import {within} from '@testing-library/react';
import Managecompany from './manageemployees';
import UpcomingReviews from "../src/screens/UpcomingReviews";
import {Link} from 'react-router-dom';
import Adminpage from './screens/Adminpage';
import {Card} from 'reactstrap';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function Dashboard(props) {
   
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [roles,setroles] = useState();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        // Update the document title using the browser API
        const {match: {params}} = props;

    var emproles = params.role;
        setroles(emproles)
        
       
         console.log("emproles",roles)
      });

     


    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
           
            <List>
              
<ListItem button >
    <Link to={'/manageemployees'}>
    <ListItemText  >
        
            
        <h6 style={{color:"black"}}>
        ManageEmployees
        </h6>
       
    </ListItemText>
    </Link>
</ListItem>

                {/* {[ 'ManageEmployees' ].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text} onClick={function click() {
                         history.push('/manageemployees');
                         window.location.reload();
                            
                            


                        }}/> */}

                   
                    
                
                
            </List>
           

            {/* <Divider/>
            <List>
                {['vendor', 'User', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        
        <div className={classes.root}>
            {/* <CssBaseline/> */}
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar style={{backgroundColor:'indianred'}}>
                {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton> */}
                    <div className="container" style={{textAlign:"center" ,justifyContent:"center", position: "fixed", top: "1%", left: "20%"}}>
                 <h2 style={{textAlign:"center" ,justifyContent:"center" ,color:"black"}}>Resource Tracker</h2>
                 </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}

                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            
                
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography  >
                    
                    {/* {roles!==""?

                     <Adminpage employeeroles={roles}/>:null
} */}
                    {roles==="manager" ?
                    <UpcomingReviews employeeroles={roles} />:null}
                    {
                    roles==="admin"?
                    <Adminpage employeeroles={roles}/>:null
                               } 
                </Typography>
                {/* <Typography paragraph>
         It displays data.
        </Typography> */}
            </main>

        </div>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
