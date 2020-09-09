import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemAvatar } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { list } from './api-shop.js'
import { Link } from 'react-router-dom'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';






const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle,
    textAlign: 'center',
    fontSize: '30px'
  },
  avatar: {
    width: 180,
    height: 180
  },
  subheading: {
    color: theme.palette.text.secondary
  },
  shopTitle: {
    fontSize: '20px',
    marginBottom: '5px'
  },
  details: {
    padding: '24px'
  }
})
class Shops extends Component {
  state = {
    shops: []
  }
  loadShops = () => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({ shops: data })
      }
    })
  }
  componentDidMount = () => {
    this.loadShops()
  }

  


  render() {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="title" className={classes.title}>
            All Shops
        </Typography>
          <List dense>
            {this.state.shops.map((shop, i) => {
              return <Link style={{ textDecoration: 'none' }} to={"/shops/" + shop._id} key={i}>
                <Divider />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar} src={'/api/shops/logo/' + shop._id + "?" + new Date().getTime()} />
                  </ListItemAvatar>
                  <div className={classes.details}>
                    <Typography type="headline" component="h2" color="primary" className={classes.shopTitle}>
                      {shop.name}
                    </Typography>
                    <Typography type="subheading" component="h4" className={classes.subheading}>
                      {shop.description}
                    </Typography>
                  </div>
                </ListItem>
                <Divider />
              </Link>
            })}
          </List>
        </Paper>


        {/* <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}


    {/* <Card className={classes.root}>
        <Typography type="title" className={classes.title}>
            All Shops
        </Typography>
        {this.state.shops.map((shop, i) => {
              return <Link style={{ textDecoration: 'none' }} to={"/shops/" + shop._id} key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={'/api/shops/logo/' + shop._id + "?" + new Date().getTime()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {shop.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {shop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    })}
    </Card>


 */}


      </div>)
  }
}
Shops.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Shops)