import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import auth from './../auth/auth-helper'
import { Link, withRouter } from 'react-router-dom'


const logoStyle = ({
     fontSize: "3.8rem",
     fontFamily: "Lobster",
     fontStyle: "oblique",
     color: "white",
     margin: "auto"   
 });


//oblique
const isActive = (history, path) => {
  if (history.location.pathname === path)
    return { color: '#fff', fontSize:"1.2rem"}
  else
    return { color: '#ffffff',fontSize:"1.2rem"}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return { color: '#fff', fontSize:"1.2rem" }
  else
    return { color: '#ffffff', fontSize:"1.2rem" }
}
const Menu = withRouter(({ history }) => (
  <AppBar position="sticky">
    <Toolbar>
      <div>
        <Link style={{ textDecoration: 'none' }} to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon style={{ fontSize: 40}}  color="white"  />
          </IconButton>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>All Shops</Button>
        </Link>
      </div>

      <Typography style={logoStyle} type="title"  variant="h1" component="h1">
       eBazaar
      </Typography>

      <div style={{ 'right': '10px' }}><span style={{ 'float': 'right' }}>
        {
          !auth.isAuthenticated() && (<span>
            <Link style={{ textDecoration: 'none' }} to="/signup">
              <Button style={isActive(history, "/signup")}>Sign up
            </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/signin">
              <Button style={isActive(history, "/signin")} >Sign In
            </Button>
            </Link>
          </span>)
        }
        {
          auth.isAuthenticated() && (<span>
            {auth.isAuthenticated().user.seller && (<Link style={{ textDecoration: 'none' }} to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
            <Link style={{ textDecoration: 'none' }} to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>
            <Button style={{fontSize:'1.2rem'}} color="inherit" onClick={() => {
              auth.signout(() => history.push('/'))
            }}>Sign out</Button>
          </span>)
        }
      </span></div>
    </Toolbar>
  </AppBar>
))

export default Menu

 