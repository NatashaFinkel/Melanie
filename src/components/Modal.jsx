import React from "react";

const Modal = ({ card, onClose }) => {
    if (!card) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <div>
                    <img src={card.imgSrc} alt={card.imgAlt} className="modal-img" />
                </div>
                <h4>{card.name}</h4>
                <p>{card.modalDescription}</p>
                <p>Durée : {card.duration}</p>
                <p>Prix : {card.price}</p>
            </div>
        </div>
    );
};

export default Modal;