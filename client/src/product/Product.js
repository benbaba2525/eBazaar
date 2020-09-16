import React, { Component } from 'react'
import Card  from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import Grid from 'material-ui/Grid'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { read } from './api-product.js'
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  flex:{
    display:'flex'
  },
  card: {
    height: 500,
    padding: '24px 40px 40px', 
    textAlign: 'center'
  },
  cardDetails: {
    height: '100%',
    padding: '24px 40px 40px', 
    textAlign: 'center'
  },
  subheading: {
    margin: 'auto',
    fontSize: '20px',
    color: 'black'
  },
  price: {
    padding: '16px',
    margin: '16px 0px',
    display: 'flex',
    backgroundColor: '#93c5ae3d',
    fontSize: '20px',
    color: '#375a53',
  },
  img: {
    height: 450,
    display: 'inline-block',
    width: '100%',
    margin: 'auto',
    paddingBottom: '100px'
  },
  icon: {
    verticalAlign: 'sub',
    margin: '20px',
    color: '#34515e',
  },
  link: {
    color: '#3e4c54b3',
    fontSize: '20px',
    margin: '10px'
  
  },
  action: {
    margin: '8px 24px',
    display: 'inline-block'
  },
})

class Product extends Component {
  constructor({ match }) {
    super()
    this.state = {
      product: { shop: {} },
    }
    this.match = match
  }

  loadProduct = (productId) => {
    read({ productId: productId }).then((data) => {
      if (data.error) {
        this.setState({ error: data.error })
      } else {
        this.setState({ product: data })
      }
    })
  }

  componentDidMount = () => {
    this.loadProduct(this.match.params.productId)
  }

  componentWillReceiveProps = (props) => {
    this.loadProduct(props.match.params.productId)
  }

  render() {
    const imageUrl = this.state.product._id
      ? `/api/product/image/${this.state.product._id}?${new Date().getTime()}`
      : '/api/product/defaultphoto'
    const { classes } = this.props
    return (
    <div className={classes.root}>

      <Grid container spacing={40}>
          <Grid item lg={7} md={7} xs={12} sm={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.product.name}
                </Typography>
              </CardContent> 
                  <div>
                    <img className={classes.img} src={imageUrl} alt='slide show'/>
                  </div>
            </Card>
          </Grid>

        <Grid item lg={5} md={5} xs={12} sm={12}>
          <Card className={classes.cardDetails}>
                <Typography component="p" type="subheading" className={classes.subheading}>
                  {this.state.product.description}<hr />
                  <span className={classes.price}>$ {this.state.product.price}</span>
                  <hr />
                  <Link style={{ textDecoration: 'none' }} to={'/shops/' + this.state.product.shop._id} className={classes.link}>
                    <span>
                    <Icon className={classes.icon}>shopping_basket</Icon>  
                    <Typography style={{fontSize:'20px'}}> Seller Shop  </Typography > {this.state.product.shop.name}
                    </span>
                  </Link>
                  <hr />
                  <Icon className={classes.icon}>contacts</Icon> <Typography style={{fontSize:'20px', padding:'10px'}}> Contact Me </Typography>
                  {this.state.product.contact}<br />
                </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>)
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Product)