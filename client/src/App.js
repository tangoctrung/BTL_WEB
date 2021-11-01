import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import { urlApi } from './api/urlApi';

function App() {
    const [images, setImages] = useState([]);
    const handleClickJson = async () => {
        const res = await axios.get(urlApi + '/home');
        console.log(res);
    }
    const handleClickJsonImage = async () => {
        const res = await axios.get(urlApi + '/image');
        console.log(res.data);
        setImages(res.data);
    }

    return (
        <div className="App">
            <button onClick={handleClickJson}>HOME</button>
            <button onClick={handleClickJsonImage}>IMAGE</button>

            <div className="listImage">
                {images && images.map((image, index) => (
                    <div key={index}>
                        <img src={image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;
