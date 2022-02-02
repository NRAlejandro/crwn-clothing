import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KOqWbBQfyd80RmgEXhAkfHwE7A2vREVqfVJUsxJv2KESVdQmQQeiiQs42VE6H4dpZdJWcD3I9ZMliLHcaKW3Wpm000GXqKGoE'

    const onToken = token => {
        console.log(token);
        alert('Payment sucessfull');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;