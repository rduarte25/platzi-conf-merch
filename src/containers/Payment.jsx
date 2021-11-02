import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();
    const paypalOptions = {
        clientId: 'access_token$sandbox$ty4vjrtz3g8sf6wr$2beac3c28f372cce00813bfc63f492dd',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',

    }

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            };
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }




    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyle={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start Payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}

                    />
                </div>
            </div>
            <div>
                Sidebar
            </div>
        </div>
    );
}


export default Payment;