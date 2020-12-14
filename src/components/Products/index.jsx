import React from 'react'
import { Grid } from '@material-ui/core'
//Components
import Product from './Product'

import useStyles from './styles'

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://images.ctfassets.net/od02wyo8cgm5/5kpFyd0r2uP97j7TIwahLc/49be548876c61e93ac58efab04906d5f/cloud_waterproof_2-fw19-black_lunar-w-g1.png'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$100', image:'https://i.blogs.es/e1fe2b/apple-macbook-pro-16/1366_2000.jpg'},
]

//layout
const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products