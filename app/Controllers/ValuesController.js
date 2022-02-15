import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = ''
  values.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.makeBillyTalk()">Billy</button>  
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.bigBoy()">Big Boy</button> 
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.cows()">Petting Zoo</button> 
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.bears()">Bears</button> 
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.cowEat()">Cow Eat</button> 
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.tails()">Tails</button>  

    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }

  makeBillyTalk() {
    valuesService.makeBillyTalk()
  }

  bigBoy() {
    valuesService.makeBigBoyTalk()
  }

  cows() {
    valuesService.cowsSpeak()
  }

  bears() {
    valuesService.animalsSpeak()
  }

  cowEat() {
    valuesService.cowsEat()
  }

  tails() {
    valuesService.tails()
  }

}
