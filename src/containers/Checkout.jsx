import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemoveFromCart = payload => {
        removeFromCart(payload);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const prefix = 'checkout-item-';

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de pididos</h3> : <h3>Sin pedidos...</h3>}
                {cart.map(item => (
                    <div className="Checkout-item" key={prefix + item.title}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                        <button type="button" onClick={() => handleRemoveFromCart(item)}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>Precio Total: $ {handleSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar Pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Checkout;