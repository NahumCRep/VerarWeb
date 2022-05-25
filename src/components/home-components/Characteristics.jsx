import React from 'react';
import Point from './Point';

const ChtsStyle = {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '50px',
    marginTop: '20px',
    boxSizing: 'border-box'
}

const Characteristics = () => {
    return (
        <div className="chts-container" style={ChtsStyle}>
            <Point content="Producto Sanitario" />
            <Point content="No contiene Medicamentos" />
            <Point content="Se adapta a tus movimientos" />
            <Point content="Buen relajante muscular" />
            <Point content="Dos puntos adhesivos garantizando 8 horas de adhesión en la piel" />
            <Point content="Actúa eficazmente y ayuda a aliviar dolores en general (cabeza, muscular, etc)" />
        </div>
    )
}

export default Characteristics;