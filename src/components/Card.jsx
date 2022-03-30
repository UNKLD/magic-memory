const Card = ({ card, handleChoice, flipped }) => {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />

        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="card cover"
        />
      </div>
    </div>
  );
};

export default Card;
