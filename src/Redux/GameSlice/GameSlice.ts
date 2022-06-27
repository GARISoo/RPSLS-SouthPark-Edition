/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  buttersGameData, cartmanGameData, GameData, kennyGameData,
} from '../../Data/GameData';
import {
  buttersHands, cartmanHands, computer, HandsType, kennyHands, player, PlayerType,
} from '../../Data/HandInfo';

const GameSlice = createSlice({
  initialState: {
    gameData: buttersGameData as GameData,
    playerData: player as PlayerType,
    computerData: computer as PlayerType,
    playingHands: buttersHands as HandsType[],
  },

  name: 'game',

  reducers: {
    newDifficulty: (state, action) => {
      if (action.payload === 'easy') {
        state.gameData = buttersGameData;
        state.playingHands = buttersHands;
      } else if (action.payload === 'medium') {
        state.gameData = kennyGameData;
        state.playingHands = kennyHands;
      } else {
        state.gameData = cartmanGameData;
        state.playingHands = cartmanHands;
      }
    },
    newGame: (state) => {
      state.gameData = {
        ...state.gameData, gameActive: !state.gameData.gameActive, comparingHands: false, winningPhrase: '',
      };
      state.playerData = player;
      state.computerData = computer;
    },
    toggleComparingHands: (state) => {
      state.gameData = { ...state.gameData, comparingHands: !state.gameData.comparingHands };
    },
    changeWinningPhrase: (state, action) => {
      state.gameData = { ...state.gameData, winningPhrase: action.payload };
    },
    updatePlayer: (state, action) => {
      if (typeof action.payload === 'number') {
        state.playerData = { ...state.playerData, score: state.playerData.score + 1 };
      } else {
        state.playerData = { ...state.playerData, chosenHand: action.payload };
      }
    },
    updateComputer: (state, action) => {
      if (typeof action.payload === 'number') {
        state.computerData = { ...state.computerData, score: state.computerData.score + 1 };
      } else {
        state.computerData = { ...state.computerData, chosenHand: action.payload };
      }
    },
  },
});

export const {
  newDifficulty, toggleComparingHands, changeWinningPhrase, newGame, updatePlayer, updateComputer,
} = GameSlice.actions;

export default GameSlice.reducer;
