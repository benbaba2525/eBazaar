import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Box from '@material-ui/core/Box';
import Suggestions from './../product/Suggestions'
import { listLatest, listCategories } from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  img:{
    backgroundImage: `url("https://cdn5.f-cdn.com/contestentries/115107/9975551/54405df8375b6_thumb900.jpg")`,
    height: "400px",
    //backgroundColor: "#00acff"
  }
})

class Home extends Component {
  state = {
    suggestionTitle: "Latest Products",
    suggestions: [],
    categories: []
  }
  componentDidMount = () => {
    listLatest().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({ suggestions: data })
      }
    })
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({ categories: data })
      }
    })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {/* image here */}
        <Box className={classes.img}>
        </Box>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Search categories={this.state.categories} />
            <Categories categories={this.state.categories} />
          </Grid>
          {/* <Grid item xs={4} sm={4}>
            <Suggestions products={this.state.suggestions} title={this.state.suggestionTitle} />
          </Grid> */}
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)