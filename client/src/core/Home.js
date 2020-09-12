
    import React, { Component } from 'react'
    import PropTypes from 'prop-types'
    import { withStyles } from 'material-ui/styles'
    import Grid from 'material-ui/Grid'
    //import Box from '@material-ui/core/Box';
    import { listLatest, listCategories } from './../product/api-product.js'
    import Search from './../product/Search'
    import Categories from './../product/Categories'


    //import for slide show
   import Slider from "react-slick";
   import Img1 from './../assets/images/Ecommerce_business_background.jpg'
   import Img2 from './../assets/images/Header-Image.jpg'
   import Img3 from './../assets/images/shopping.jpeg'
   import "slick-carousel/slick/slick.css";
   import "slick-carousel/slick/slick-theme.css";
  
    const styles = theme => ({
      root: {
        flexGrow: 1,
        margin: 30,
      },
      img:{
        height: "400px",
        width: '100%'
      },
      

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
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 4000,
          cssEase: "linear"
        };
      
        const { classes } = this.props
        return (
          <div className={classes.root}>

       {/* Slide Show */}    
        <Slider {...settings}>
          {/* image 1 */}
          <div>
          <img className={classes.img} src={Img1} alt='slide show'/>
          </div>

          {/* image 2 */}
          <div>
          <img className={classes.img} src={Img2} alt='slide show'/>
          </div>

          {/* image 3 */}
          <div>
            <img className={classes.img} src={Img3} alt='slide show'/>
          </div>
        </Slider>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12}>
                <Search categories={this.state.categories} />
                <Categories categories={this.state.categories} />
              </Grid>
            </Grid>
          </div>
        )
      }
    }
    
    Home.propTypes = {
      classes: PropTypes.object.isRequired
    }
    
    export default withStyles(styles)(Home)      
          
