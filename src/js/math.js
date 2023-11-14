/* eslint-disable no-underscore-dangle */
import Character from './characters/character';

export default class MathCharacter extends Character {
  set stoned(value) {
    this._stoned = true;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(prop) {
    if (this.distance === 1) {
      this._attack = prop;
    } else if (this.distance === 2) {
      this._attack = prop * 0.9;
    } else if (this.distance === 3) {
      this._attack = prop * 0.8;
    } else if (this.distance === 4) {
      this._attack = prop * 0.7;
    } else if (this.distance === 5) {
      this._attack = prop * 0.6;
    }
    if (this._stoned) {
      this._attack -= Math.round(Math.log2(this.distance) * 5);
    }
  }

  get attack() {
    return this._attack;
  }
}
