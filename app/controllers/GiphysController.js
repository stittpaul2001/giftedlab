import { AppState } from "../AppState.js"
import { giphysService } from "../services/GiphysService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


export class GiphysController {
  constructor() {

    console.log('Giphy controller, are you there?')
    AppState.on('gifs', this.drawGifs)
  }

  async search() {
    try {
      event.preventDefault()
      console.log('searching for gifs')
      const gifForm = event.target
      const formData = getFormData(gifForm)
      console.log('From', formData)
      await giphysService.search(formData)
    } catch (error) {
      console.error('can not search for gif', error)
      // @ts-ignore
      Pop.error(error, 'can not search')
    }
  }


  drawGifs() {
    const gifs = AppState.gifs
    let gifsContent = ''
    gifs.forEach(gif => gifsContent += gif.gifTemplate)
    const gifsElem = document.getElementById('gifResults')
    gifsElem.innerHTML = gifsContent
    console.log('gifResults')

  }


}

