import React from 'react';

const Card = ({ cards }) => {
    return (
        <div className="card-container" >
            {cards.map(card => (
                <div key={card.id} className="card">
                    <div>
                        <img src={card.imgSrc} alt={card.imgAlt} />
                    </div>
                    <h3>{card.name}</h3>
                    <p>{card.cardDescription}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;