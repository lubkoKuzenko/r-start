import { ISingleCard } from "./interfaces";

const SingleCard = ({ card, handleClick, turned }: ISingleCard) => {
  const isTurned = turned ? 'turnedd card-item' : 'card-item';
  
  return (
    <div className={isTurned} >
      <img className="front-side image" src={card.src} alt="" />
      <img 
        className="back-side" 
        src='./img/unnamed.jpg' 
        alt=""
        onClick={() => handleClick(card)}
      />
    </div>
  );
}

export default SingleCard;
