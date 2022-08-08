interface props {
  playerName: string;
  playerScore: number;
  setPlayerScore: (score: number) => void;
}

const PlayerCard = (props: props) => {
  const increaseScore = () => {
    props.setPlayerScore(props.playerScore + 1);
  };
  const decreaseScore = () => {
    if (props.playerScore > 0) {
      props.setPlayerScore(props.playerScore - 1);
    }
  };
  return (
    <div className="container">
      <h1>{props.playerName} score</h1>
      <span className="mt-4">{props.playerScore}</span>
      <div className="flex justify-evenly">
        <button onClick={increaseScore}>UP</button>
        <button onClick={decreaseScore}>DOWN</button>
      </div>
    </div>
  );
};
export default PlayerCard;
