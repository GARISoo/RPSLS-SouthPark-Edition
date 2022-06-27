import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import Intro from '../Intro/Intro';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import styles from './GameApp.module.scss';

const GameApp = () => {
  const { gameActive } = useSelector((state: RootState) => state.game.gameData);

  return (
    <div className={styles.container}>
      {!gameActive
        ? <Intro />
        : <SinglePlayer />}
    </div>
  );
};

export default GameApp;
