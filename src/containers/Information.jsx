import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);

    const history = useHistory();

    const { cart } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone')
        }
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }

    const prefix = 'information-item-';

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-header">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            name="name"
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            name="email"
                        />
                        <input
                            type="text"
                            placeholder="Dirección"
                            name="address"
                        />
                        <input
                            type="text"
                            placeholder="apto"
                            name="apto"
                        />
                        <input
                            type="text"
                            placeholder="Ciudad"
                            name="city"
                        />
                        <input
                            type="text"
                            placeholder="Pais"
                            name="country"
                        />
                        <input
                            type="text"
                            placeholder="Estado"
                            name="state"
                        />
                        <input
                            type="text"
                            placeholder="Código Postal"
                            name="cp"
                        />
                        <input
                            type="tel"
                            placeholder="Teléfono"
                            name="phone"
                        />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={() => handleSubmit()}>
                            Pagar
                        </button>

                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(item => (
                    <div className="Information-item" key={prefix + item.id}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    );
}

export default Information;