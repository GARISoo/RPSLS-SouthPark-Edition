import { useSelector } from 'react-redux';
import styles from './ComparingHands.module.scss';
import { PlayerType } from '../../Data/HandInfo';
import { RootState } from '../../Redux/store';

type ComparingHandsProps = {
    player: PlayerType,
    computer: PlayerType,
    opponent: string,
}

const ComparingHands = ({ player, computer, opponent } : ComparingHandsProps) => {
  const { gameData } = useSelector((state: RootState) => state.game);

  return (
    gameData.comparingHands
      ? (
        <div className={styles.container}>
          <div className={styles.playerBox}>
            <b>Your choice</b>
            <img src={player.chosenHand.img} alt="img" className={styles.resultImg} />
            <span>{player.chosenHand.name}</span>
          </div>
          <div className={styles.computerBox}>
            <b>{`${opponent} choice`}</b>
            <img src={computer.chosenHand.img} alt="img" className={styles.resultImg} />
            <span>{computer.chosenHand.name}</span>
          </div>
        </div>
      ) : null
  );
};

export default ComparingHands;
