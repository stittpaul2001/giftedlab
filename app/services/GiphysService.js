import { AppState } from "../AppState.js";
import { api, giphyApi } from "./AxiosService.js";


class GiphysService {


  async getGifList() {
    const response = await giphyApi.get('search')
    console.log('Can i see any gifs??', response.data)
    const gifs = response.data.data.map(g => g.images.downsized_large.url)
    AppState.gifs = gifs
  }

  async search(query) {
    console.log('search')
    const res = await giphyApi.get('search', {
      params: { q: query }
    });
    console.log('search', res.data)
    const gifs = res.data.data.map(g => g.images.downsized_large.url)
    AppState.gifs = gifs
  }


}

export const giphysService = new GiphysService()