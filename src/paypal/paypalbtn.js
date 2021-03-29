import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AXyrqkQyMut9qbBd12LOJC5RgMrTY9o2i5PNnuFfn6Ku5AMkn-pvzC8qQnMxEyAh-UhCQFkcnN8cWBej"
              }}
          />
        );
    }
}
export default PayPalBtn;