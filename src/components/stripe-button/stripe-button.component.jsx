import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51I40n8CDSK3GsyF37uvn4RfZEXbvyPLnVVgFACrTSJz9HRRhfTDCXMuSTD8pzif9NAlzl6uDP2WhCuf1IGoEQudO00TZ85eX6n'

    const onToken = token => {
        console.log(token);
        alert('peyment successful');
    }

    return (
        <StripeCheckout 
        label='paynow'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https:svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;