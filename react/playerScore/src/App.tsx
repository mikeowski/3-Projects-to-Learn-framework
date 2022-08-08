import { useState } from 'react';
import PlayerCard from './components/playerCard';

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const reset = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  };
  return (
    <div className="container">
      <PlayerCard
        playerName="Player 1"
        playerScore={player1Score}
        setPlayerScore={setPlayer1Score}
      />
      <PlayerCard
        playerName="Player 2"
        playerScore={player2Score}
        setPlayerScore={setPlayer2Score}
      />
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
