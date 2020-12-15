import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'


//Layout
const Cart = ({ cart }) => {

    const isEmpty = !cart.line_items

    const classes = useStyles()

    const EmptyCard = () => (
        <Typography variant='subtitle1'>You have no items on your Shopping cart, start adding some!</Typography>
    )
    
    const FilledCard = () => (
            <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.EmptyButtom} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                        <Button className={classes.CheckoutButtom} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                    </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCard /> : <FilledCard /> }
        </Container>
    )
}

export default Cart
