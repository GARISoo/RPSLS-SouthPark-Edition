import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import styles from './Scores.module.scss';

type ScoresProps = {
  playerScore: number,
  computerScore: number,
  opponent: string,
}

const Scores = ({ playerScore, computerScore, opponent }: ScoresProps) => (
  <div className={styles.container}>
    <div className={styles.player}>
      <h2 className={styles.h2}>You</h2>
      <h2 className={styles.h2}>{playerScore}</h2>
    </div>
    <div className={styles.player}>
      <h2 className={styles.h2}>{opponent}</h2>
      <h2 className={styles.h2}>{computerScore}</h2>
    </div>
  </div>
);

export default Scores;
