import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch, RootState } from '../../Redux/store';
import styles from './RoundWinner.module.scss';
import {
  changeWinningPhrase, newDifficulty, newGame, toggleComparingHands,
} from '../../Redux/GameSlice/GameSlice';
import { buttersQuotes, cartmanQuotes, kennyQuotes } from '../../Data/Quotes';

type WinnerProps = {
  playerScore: number,
  computerScore: number,
  opponent: string,
}

const Winner = ({ playerScore, computerScore, opponent }: WinnerProps) => {
  const [gameStatus, setGameStatus] = useState('');
  const { winningPhrase } = useSelector((state: RootState) => state.game.gameData);
  const { playerRequiredRounds } = useSelector((state: RootState) => state.game.gameData);
  const { computerRequiredRounds } = useSelector((state: RootState) => state.game.gameData);
  const dispatch = useDispatch<AppDispatch>();

  const newGameOrNewRound = () => {
    if (playerRequiredRounds === playerScore) {
      setGameStatus('won');
    } else if (computerRequiredRounds === computerScore) {
      setGameStatus('lost');
    } else {
      dispatch(toggleComparingHands());
      dispatch(changeWinningPhrase(''));
    }
  };

  const showIntro = () => {
    dispatch(newGame());
    dispatch(newDifficulty('easy'));
  };

  const determineQuotes = () => {
    if (opponent === 'Butters') {
      return buttersQuotes;
    }
    if (opponent === 'Kenny') {
      return kennyQuotes;
    }
    return cartmanQuotes;
  };

  const activeQuotes = determineQuotes();

  const randomQuote = Math.floor(Math.random() * activeQuotes.length);

  return (
    !gameStatus ? (
      <div className={styles.box}>
        <h2>{winningPhrase}</h2>
        <p><i>{`${activeQuotes[randomQuote]} -${opponent}`}</i></p>
        <button className={styles.endBtn} onClick={() => newGameOrNewRound()}>
          Next
        </button>
      </div>
    ) : (
      <div className={styles.box}>
        {gameStatus === 'won' ? (
          <>
            <h2>Well done mate!</h2>
            <p>{`${opponent} stood no chance against you`}</p>
            <button className={styles.endBtn} onClick={() => showIntro()}>
              New Game
            </button>
          </>
        ) : (
          <>
            <h2>Get destroyed!</h2>
            <p>{`Apparently ${opponent} is too much for you to handle`}</p>
            <button className={styles.endBtn} onClick={() => showIntro()}>
              New Game
            </button>
          </>
        )}
      </div>
    )
  );
};

export default Winner;
