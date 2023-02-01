import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

//Private Functions
function _drawSnacks() {
    let snacks = appState.snacks
    let template = ''
    snacks.forEach(snack => template += snack.ListTemplate)
    // console.log('check to see snack here', template)
    document.getElementById('snacks').innerHTML = template
    // setHTML('snacks', template)
}


export class SnacksController {

    constructor() {
        _drawSnacks()
        let snacks = appState.snacks
        let template = ''
        snacks.forEach(s => template += s.ListTemplate)
        setHTML('snacks', template)
    }
    buy() {

        console.log('clicked buy')
    }



}


