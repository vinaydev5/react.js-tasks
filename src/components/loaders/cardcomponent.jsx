import React from 'react';

const CardDisplay = ({ image, name }) => {
    return (
        <div className="card mt-3 " style={{ width: '100rem' }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    );
};

export default CardDisplay;