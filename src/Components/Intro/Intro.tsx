import { useDispatch, useSelector } from 'react-redux';
import { newDifficulty, newGame } from '../../Redux/GameSlice/GameSlice';
import { AppDispatch, RootState } from '../../Redux/store';
import styles from './Intro.module.scss';

const Intro = () => {
  const { opponent } = useSelector((state: RootState) => state.game.gameData);
  const dispatch = useDispatch<AppDispatch>();

  const createNewGame = (gamemode: string) => dispatch(newDifficulty(gamemode));

  return (
    <div className={styles.container}>
      <div className={styles.gamemodes}>
        <div className={styles.singlePlayer}>
          <button className={styles.gamemodeBtn} onClick={() => dispatch(newGame())}>
            <span>Single Player</span>
          </button>
          <div className={styles.difficulties}>
            <div className={styles.difficulty} onClick={() => createNewGame('easy')}>
              <div className={styles.easy} />
              <span className={opponent === 'Butters' ? styles.active : styles.notActive}>
                Easy
              </span>
            </div>
            <div className={styles.difficulty} onClick={() => createNewGame('medium')}>
              <div className={styles.medium} />
              <span className={opponent === 'Kenny' ? styles.active : styles.notActive}>
                Medium
              </span>
            </div>
            <div className={styles.difficulty} onClick={() => createNewGame('hard')}>
              <div className={styles.hard} />
              <span className={opponent === 'Cartman' ? styles.active : styles.notActive}>
                Hard
              </span>
            </div>
          </div>
        </div>
        <div className={styles.multiplayer}>
          <button className={styles.gamemodeBtn}>
            <span className={styles.notWorking} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
