export class Alligator {
  constructor(name, color, gender, weight, tailLengthInch, teethSize) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tailLengthInch = tailLengthInch;
    this.teethSize = teethSize;
  }
  eat(name) {
    console.log(`Chomp chomp all the ${name}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}