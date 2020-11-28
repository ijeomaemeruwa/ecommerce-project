import React from 'react'
import ReactCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = process.env.STRIPE_KEY

    const onToken = token => {
        console.log(token)
        alert('Payment successful!')
    }

    return (
    <>
     <ReactCheckout 
     label='Proceed to Payment'
     name='Oatts Beauty'
     billingAddress
     shippingAddress
     description={`Your total price is ${price}`}
     amount={stripePrice}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
     />       
    </>
    )
}

export default StripeButton;
