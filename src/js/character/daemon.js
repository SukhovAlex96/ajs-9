// import Character from './character';
import MathCharacter from '../math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'daemon');
    // this.attack = 10;
    this.defence = 40;
  }
}
