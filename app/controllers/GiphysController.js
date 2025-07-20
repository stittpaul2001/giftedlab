import { giphysService } from "../services/GiphysService.js"
import { Pop } from "../utils/Pop.js"


export class GiphysController {
  constructor() {

    console.log('Giphy controller, are you there?')

  }

  async searchGiphs(query) {
    try {
      await giphysService.search(query)
    } catch (error) {
      console.error('can not search for giph', error)
      // @ts-ignore
      Pop.error(error, 'can not search')
    }
  }

  // drawGifs(){
  //   const gifs = res.data.data.map(g => g.images.downsized_large.url)
  // }

}