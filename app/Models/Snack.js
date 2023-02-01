import { generateId } from "../Utils/generateId.js"

export class Snacks {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get ListTemplate() {

    return `<div class="col-3 m-4 py-3 text-center card display-card">
    <img class="chip" src="//via.placeholder.com/50">
    <h2>${this.name}</h2>
    <h3>$${this.price}</h3>
    <div class="d-flex justify-content-center"> <div class="d-flex justify-content-center" onclick="app.snacksController.buy()">
    <button class="btn btn-primary button">Buy</button>
  </div>
  </div>
    </div> `
  }




  get CardTemplate() {
    return /*html*/`
    
    `
  }
}
