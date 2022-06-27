/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useDispatch } from 'react-redux';
import styles from './HomeSvg.module.scss';
import { newDifficulty, newGame } from '../../Redux/GameSlice/GameSlice';
import { AppDispatch } from '../../Redux/store';

const HomeSvg = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <img
      src="https://img.icons8.com/color-glass/344/home.svg"
      alt="home"
      className={styles.homeSvg}
      onClick={() => {
        dispatch(newGame());
        dispatch(newDifficulty('easy'));
      }}
    />
  );
};

export default HomeSvg;
