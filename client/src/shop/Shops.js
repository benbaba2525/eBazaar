import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import List, { ListItem} from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { list } from './api-shop.js'
import { Link } from 'react-router-dom'
import ButtonBase from '@material-ui/core/ButtonBase';


const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
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
  img: {
    width: 160,
    height: 160,
    padding: '10px'
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
                 <ButtonBase className={classes.image}>
                   <img className={classes.img} alt="complex" src={'/api/shops/logo/' + shop._id + "?" + new Date().getTime()} />
                 </ButtonBase>
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

      </div>)
  }
}
Shops.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Shops)