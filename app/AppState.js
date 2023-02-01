import { Snacks } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snacks(
      {
        name: 'chips',
        price: 1.00,
        imgURl: '//via.placeholder.com/50',
      }),
    new Snacks(
      {
        name: 'nuts',
        price: .75,
        imgurl: '//via.placeholder.com/50',
      }),
    new Snacks(
      {
        name: 'water',
        price: .25,
        imgurl: '//via.placeholder.com 50',
      }
    ),
  ]
  /** @type {import('./Models/Snack').Snack|null} */
  buySnacks = null




}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
