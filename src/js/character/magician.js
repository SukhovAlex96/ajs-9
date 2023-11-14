import MathCharacter from '../math';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'magician');
    // this.attack = 10;
    this.defence = 40;
  }
}
