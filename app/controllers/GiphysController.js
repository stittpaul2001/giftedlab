import { AppState } from "../AppState.js"
import { giphysService } from "../services/GiphysService.js"
import { Pop } from "../utils/Pop.js"


export class GiphysController {
  constructor() {

    console.log('Giphy controller, are you there?')
    AppState.on('account', this.search)
    AppState.on('account', this.getGifList)
    AppState.on('gifs', this.drawGifs)
  }

  async search(query) {
    try {
      console.log('searching for gifs', query)
      await giphysService.search(query)
    } catch (error) {
      console.error('can not search for gif', error)
      // @ts-ignore
      Pop.error(error, 'can not search')
    }
  }

  async getGifList() {
    try {
      await giphysService.getGifList()
    } catch (error) {
      console.error('could not search for those gifs', error)
      // @ts-ignore
      Pop.error(error, 'could not download gifs!')
    }
  }

  drawGifs() {
    const gifs = AppState.gifs
    let gifsContent = ''
    gifs.forEach(gif => gifsContent += gif.gifTemplate)
    const gifsElem = document.getElementById('gifs')
    gifsElem.innerHTML = gifsContent

  }


}

