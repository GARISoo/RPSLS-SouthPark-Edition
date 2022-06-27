export type GameData = {
    gameActive: boolean,
    opponent: string,
    comparingHands: boolean,
    winningPhrase: string,
    playerRequiredRounds: number,
    computerRequiredRounds: number,
}

export const buttersGameData = {
  gameActive: false,
  opponent: 'Butters',
  comparingHands: false,
  winningPhrase: '',
  playerRequiredRounds: 1,
  computerRequiredRounds: 3,
};

export const kennyGameData = {
  gameActive: false,
  opponent: 'Kenny',
  comparingHands: false,
  winningPhrase: '',
  playerRequiredRounds: 2,
  computerRequiredRounds: 2,
};

export const cartmanGameData = {
  gameActive: false,
  opponent: 'Cartman',
  comparingHands: false,
  winningPhrase: '',
  playerRequiredRounds: 3,
  computerRequiredRounds: 1,
};
