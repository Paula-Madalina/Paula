import React, { useState } from 'react';

function ColorButtons() {
    const [selectedColor, setSelectedColor] = useState('');
    const [message, setMessage] = useState('');

    const handleColorClick = (color) => {
        setSelectedColor(color);
        switch (color) {
            case 'red':
                setMessage('Ai selectat culoarea roșie.');
                break;
            case 'green':
                setMessage('Ai selectat culoarea verde.');
                break;
            case 'blue':
                setMessage('Ai selectat culoarea albastră.');
                break;
            default:
                setMessage('');
                break;
        }
    };

    return (
        <div>
            <button onClick={() => handleColorClick('red')} style={{ backgroundColor: 'red', color: 'white' }}>Roșu</button>
            <button onClick={() => handleColorClick('green')} style={{ backgroundColor: 'green', color: 'white' }}>Verde</button>
            <button onClick={() => handleColorClick('blue')} style={{ backgroundColor: 'blue', color: 'white' }}>Albastru</button>
            {message && <p>{message}</p>}
            {selectedColor && <p>Culoarea selectată: {selectedColor}</p>}
        </div>
    );
}

export default ColorButtons;
