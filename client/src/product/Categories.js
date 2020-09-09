import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import GridList, { GridListTile } from 'material-ui/GridList'
import Icon from 'material-ui/Icon'
import { list } from './api-product.js'
import Products from './Products'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    transform: 'translateZ(0)',
    backgroundColor: '#e1f5fe' 
  },
  tileTitle: {
    verticalAlign: 'middle',
    lineHeight: 2.5,
    textAlign: 'center',
    fontSize: '1.5em',
    margin: '0 4px 0 0',
  },
  card: {
    margin: 'auto',
    marginTop: 20
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: 'black',
    fontFamily: "Luckiest Guy",
    fontSize: '1.8em',
    backgroundColor: '#eceff1', 
    textAlign: 'center'
  },
  icon: {
    verticalAlign: 'sub',
    color: '#080807', 
  },
  link: {
    color: '#4d6538', 
    textShadow: '0px 2px 12px #ffffff',
    cursor: 'pointer'
  }
})

class Categories extends Component {
  state = {
    products: [],
    selected: ''
  }
  componentWillReceiveProps = (props) => {
    this.setState({ selected: props.categories[0] })
    list({
      category: props.categories[0]
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({ products: data })
      }
    })
  }

  listbyCategory = category => event => {
    this.setState({ selected: category })
    list({
      category: category
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({ products: data })
      }
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.card}>
          <Typography type="title" className={classes.title}>
            Explore by category
          </Typography>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
              {this.props.categories.map((tile, i) => (
                <GridListTile key={i} className={classes.tileTitle} style={{ height: '50px',backgroundColor: this.state.selected === tile ? '#e1f5fe' : '#607d8b' }}>
                  <span className={classes.link} onClick={this.listbyCategory(tile)}>{tile}  <Icon className={classes.icon}>{this.state.selected === tile && 'arrow_drop_down'}</Icon></span>
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Divider />
          <Products products={this.state.products} searched={false} />
        </Card>
      </div>
    )
  }
}
Categories.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default withStyles(styles)(Categories)