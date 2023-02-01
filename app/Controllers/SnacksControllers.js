
//Private Functions

import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(snack => template += snack.ListTemplate)
    console.log('check to see snack here', template)
    document.getElementById('snacks').innerHTML = template
    setHTML('snacks', template)
}


export class SnacksController {

    constructor() {
        _drawSnacks()

    }
}