/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PlayerActivities.module.scss';
import { buttersHands, HandsType } from '../../Data/HandInfo';
import {
  changeWinningPhrase, toggleComparingHands, updateComputer, updatePlayer,
} from '../../Redux/GameSlice/GameSlice';
import { AppDispatch, RootState } from '../../Redux/store';

const PlayerActivities = () => {
  const [bothDecisionsSubmitted, setBothDecisionsSubmitted] = useState(false);
  const { playingHands } = useSelector((state: RootState) => state.game);
  const { gameData } = useSelector((state: RootState) => state.game);
  const { playerData } = useSelector((state: RootState) => state.game);
  const { computerData } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch<AppDispatch>();

  const handLooperForComputer = () => {
    const looper = setInterval(() => {
      dispatch(updateComputer(buttersHands[Math.floor(Math.random() * (buttersHands.length - 1))]));
    }, 200);

    setTimeout(() => {
      clearInterval(looper);
      setBothDecisionsSubmitted(true);
    }, 4000);
  };

  const determineRoundWinner = () => {
    if (playerData.chosenHand.name === computerData.chosenHand.name) {
      dispatch(changeWinningPhrase('You both tied'));
    } else if (playerData.chosenHand.weakness.includes(computerData.chosenHand.name)) {
      dispatch(changeWinningPhrase(`${gameData.opponent} gets a point`));
      dispatch(updateComputer(1));
    } else {
      dispatch(changeWinningPhrase('You get a point'));
      dispatch(updatePlayer(1));
    }
  };

  const makeDecision = (hand: HandsType) => {
    setBothDecisionsSubmitted(false);
    dispatch(changeWinningPhrase(''));
    dispatch(updatePlayer(hand));
    handLooperForComputer();
    dispatch(toggleComparingHands());
  };

  useEffect(() => {
    if (bothDecisionsSubmitted) determineRoundWinner();
  }, [bothDecisionsSubmitted]);

  return (
    !gameData.comparingHands ? (
      <div className={styles.container}>
        <div className={styles.decisions}>
          <h3 className={styles.h3}>Choose Your Hand</h3>
          <div className={styles.decisionsWrapper}>
            {playingHands.map((hand) => (
              <div className={styles.decision} key={hand.name}>
                <img
                  className={styles.handImg}
                  onClick={() => makeDecision(hand)}
                  src={`./Images/${gameData.opponent}-${hand.name}.png`}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.h3}>Match Info</h3>
          <ul className={styles.ul}>
            <li>{`Playing against ${gameData.opponent}`}</li>
            <li>{`You need to win ${gameData.playerRequiredRounds}/3 rounds`}</li>
            <li>{`${gameData.opponent} needs to win ${gameData.computerRequiredRounds}/3 rounds`}</li>
          </ul>
        </div>
      </div>
    ) : null
  );
};

export default PlayerActivities;
