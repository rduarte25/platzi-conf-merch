import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por tu compro`}</h2>
                <span>Tu pedido llegara en 3 días a tu dirección:</span>
                <div className="Success-map">
                    <Map data={location} />
                </div>
            </div>
        </div>
    );
}


export default Success;