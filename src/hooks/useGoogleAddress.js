import {useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCJYYWMNsSAX1XLHi9XPsKmqYV6Fu_o8Og`;

    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.result[0].geometry.location)
    }, []);

    return map;
}

export default useGoogleAddress;