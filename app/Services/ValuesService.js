import { ProxyState } from "../AppState.js";
import { Alligator } from "../Models/Alligator.js";
import { Bear } from "../Models/Bear.js";
import { Cow } from "../Models/Cow.js";
import { Donkey } from "../Models/Donkey.js";
import { Fish } from "../Models/FIsh.js";
import { Goat } from "../Models/Goat.js";
import { Hamster } from "../Models/Hamster.js";
import { Ibis } from "../Models/Ibis.js";
import { Jellyfish } from "../Models/Jellyfish.js";
import { Kangaroo } from "../Models/Kangaroo.js";
import { Lion } from "../Models/Lion.js";
import { Moose } from "../Models/Moose.js";
import { Needlefish } from "../Models/Needlefish.js";
import { Octopus } from "../Models/Octopus.js";
import { Pig } from "../Models/Pig.js";
import { Value } from "../Models/Value.js";

let billy = new Goat("billy", "white", "male", 150, 20, 5)
let kelly = new Goat("kelly", "black", "female", 170, 30, 70)
// let animals = [new Alligator, new Bear, new Cow, new Donkey, new Fish, new Goat]

let bigBoy = new Cow("bigBoy", "black", "female", 300, 70, 19)
let sarah = new Alligator("sarah", "white", "female", 200, 60, 10)
let gary = new Alligator("gary", "white", "female", 200, 60, 10)

let bubby = new Bear("Bubby", "brown", "male", 100, 17, 4)
let fatty = new Bear("fatty", "brown", "male", 100, 17, 4)

let moo = new Cow("moo", "black", "male", 200, 10, 6)
let milky = new Cow("milky", "black", "male", 200, 10, 6)

let earl = new Donkey("Earl", "grey", "male", 200, 70, 19)
let banana = new Donkey("banana", "black", "male", 200, 10, 6)

let gold = new Fish("Gold", "gold", "male", 20, 1, 3)
let tailsy = new Fish("tailsy", "black", "male", 200, 10, 6)

let goat = new Goat("gege", "white", "female", 300, 20, 300)
let hamster = new Hamster("runner", "white", "male", 30, 1, 10)
let ibis = new Ibis("sarah", "black", "female", 30, 10, 20)
let jellyfish = new Jellyfish("jelly", "pink", "male", 20, 5, 25)
let kangaroo = new Kangaroo("Jumper", "orange", "female", 500, 10, 40)
let lion = new Lion("King", "orange", "female", 400, 30, 40)
let moose = new Moose("Big Boy", "brown", "female", 300, 20, 20)
let needlefish = new Needlefish("neddles", "grey", 50, 20, 5)
let octopus = new Octopus("fishy", "orange", "male", 100, 0, 25)

let pettingZoo = [kelly, billy]

let carnivores = [new Goat("")]

let animals = {
  alligator: [sarah, gary],
  bears: [bubby, fatty],
  cows: [moo, milky],
  donkey: [earl, banana],
  fish: [gold, tailsy],
}



class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }

  makeBillyTalk() {
    billy.eat("grass")
  }

  makeBigBoyTalk() {
    bigBoy.eat("Mcdonalds")
  }

  cowsSpeak() {
    pettingZoo.forEach(a => a.speak("Jeremy is cool"))
  }

  animalsSpeak() {
    animals.bears.forEach(b => b.speak("We all eat grass"))
  }

}

export const valuesService = new ValuesService();

