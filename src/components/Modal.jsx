const Modal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-img-div">
          <img src={card.imgSrc} alt={card.imgAlt} className="modal-img" />
        </div>
        <h4 className="modal-highlighted-txt name-txt">{card.name}</h4>
        <p>{card.modalDescription}</p>
        <p className="modal-highlighted-txt duration-text">
          Durée : {card.duration}
        </p>
        <p>Prix : {card.price}</p>
      </div>
    </div>
  );
};

export default Modal;
