import uuid from 'react-uuid';
import battleground1 from '../../assets/images/landingPage/battleground-bg1.png';
import battleground2 from '../../assets/images/landingPage/battleground-bg2.png';
import battleground3 from '../../assets/images/landingPage/battleground-bg3.png';
import battleground4 from '../../assets/images/landingPage/battleground-bg4.png';
import battleground5 from '../../assets/images/landingPage/battleground-bg5.png';
import battleground6 from '../../assets/images/landingPage/battleground-bg6.png';

export const BattlegroundsDummyData = [
  {
    id: uuid(),
    name: 'Field',
    price: 0.25,
    rewards: 3.25,
    players: 340,
    background: battleground1,
  },
  {
    id: uuid(),
    name: 'Alley way',
    price: 0.5,
    rewards: 3.25,
    players: 16,
    background: battleground2,
  },
  {
    id: uuid(),
    name: 'Colosseum',
    price: 1,
    rewards: 4,
    players: 84,
    background: battleground3,
  },
  {
    id: uuid(),
    name: 'ETH Cryptoworld',
    price: 2,
    rewards: 0,
    players: 230,
    background: battleground4,
  },
  {
    id: uuid(),
    name: 'Underwater',
    price: 5,
    rewards: 0,
    players: 26,
    background: battleground5,
  },
  {
    id: uuid(),
    name: 'Practise room',
    price: 10,
    rewards: 3.25,
    players: 16,
    background: battleground6,
  },
];
