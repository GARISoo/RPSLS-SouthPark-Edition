export type HandsType = {
    name: string,
    power: string[],
    weakness: string[],
    img: string,
}

export const buttersHands = [
  {
    name: 'rock',
    power: ['scissors', 'lizard'],
    weakness: ['paper', 'spock'],
    img: './Images/Butters-rock.png',
  },
  {
    name: 'paper',
    power: ['rock', 'spock'],
    weakness: ['lizard', 'scissors'],
    img: './Images/Butters-paper.png',
  },
  {
    name: 'scissors',
    power: ['paper', 'lizard'],
    weakness: ['rock', 'spock'],
    img: './Images/Butters-scissors.png',
  },
  {
    name: 'lizard',
    power: ['paper', 'spock'],
    weakness: ['rock', 'scissors'],
    img: './Images/Butters-lizard.png',
  },
  {
    name: 'spock',
    power: ['scissors', 'rock'],
    weakness: ['lizard', 'paper'],
    img: './Images/Butters-spock.png',
  },
];

export const kennyHands = [
  {
    name: 'rock',
    power: ['scissors', 'lizard'],
    weakness: ['paper', 'spock'],
    img: './Images/Kenny-rock.png',
  },
  {
    name: 'paper',
    power: ['rock', 'spock'],
    weakness: ['lizard', 'scissors'],
    img: './Images/Kenny-paper.png',
  },
  {
    name: 'scissors',
    power: ['paper', 'lizard'],
    weakness: ['rock', 'spock'],
    img: './Images/Kenny-scissors.png',
  },
  {
    name: 'lizard',
    power: ['paper', 'spock'],
    weakness: ['rock', 'scissors'],
    img: './Images/Kenny-lizard.png',
  },
  {
    name: 'spock',
    power: ['scissors', 'rock'],
    weakness: ['lizard', 'paper'],
    img: './Images/Kenny-spock.png',
  },
];

export const cartmanHands = [
  {
    name: 'rock',
    power: ['scissors', 'lizard'],
    weakness: ['paper', 'spock'],
    img: './Images/Cartman-rock.png',
  },
  {
    name: 'paper',
    power: ['rock', 'spock'],
    weakness: ['lizard', 'scissors'],
    img: './Images/Cartman-paper.png',
  },
  {
    name: 'scissors',
    power: ['paper', 'lizard'],
    weakness: ['rock', 'spock'],
    img: './Images/Cartman-scissors.png',
  },
  {
    name: 'lizard',
    power: ['paper', 'spock'],
    weakness: ['rock', 'scissors'],
    img: './Images/Cartman-lizard.png',
  },
  {
    name: 'spock',
    power: ['scissors', 'rock'],
    weakness: ['lizard', 'paper'],
    img: './Images/Cartman-spock.png',
  },
];

export type PlayerType = {
  chosenHand: HandsType,
  score: number,
}

export const player = {
  chosenHand: {} as HandsType,
  score: 0,
};

export const computer = {
  chosenHand: buttersHands[0] as HandsType,
  score: 0,
};
