/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import Scores from '../Scores/Scores';
import RoundWinner from '../RoundWinner/RoundWinner';
import './SinglePlayer.scss';
import ComparingHands from '../ComparingHands/ComparingHands';
import HomeSvg from '../HomeSvg/HomeSvg';
import PlayerActivities from '../PlayerActivities/PlayerActivities';

const SinglePlayer = () => {
  const { playerData } = useSelector((state: RootState) => state.game);
  const { computerData } = useSelector((state: RootState) => state.game);
  const { gameData } = useSelector((state: RootState) => state.game);

  return (
    <div className={`container ${gameData.opponent}`}>
      <HomeSvg />
      <Scores
        playerScore={playerData.score}
        computerScore={computerData.score}
        opponent={gameData.opponent}
      />
      {gameData.winningPhrase && (
      <RoundWinner
        playerScore={playerData.score}
        computerScore={computerData.score}
        opponent={gameData.opponent}
      />
      )}
      <ComparingHands
        player={playerData}
        computer={computerData}
        opponent={gameData.opponent}
      />
      <PlayerActivities />
    </div>
  );
};

export default SinglePlayer;
