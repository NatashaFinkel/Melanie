import { useState } from "react";
import { getAssetUrl } from "../utils/assetUtils";
import Modal from "./Modal";

const Card = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleCardClick(card)}
        >
          <div>
            <img src={getAssetUrl(card.imgSrc)} alt={card.imgAlt} />
          </div>
          <h3>{card.name}</h3>
          <p>{card.cardDescription}</p>
          <span className="badge">{card.badge}</span>
        </div>
      ))}
      <Modal card={selectedCard} onClose={handleCloseModal} />
    </div>
  );
};

export default Card;
