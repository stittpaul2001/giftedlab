import { AppState } from "../AppState.js";
import { api, giphyApi } from "./AxiosService.js";


class GiphysService {


  async getGifList() {
    const response = await giphyApi.get('search')
    console.log('Can i see any gifs??', response.data)
    const gifs = response.data.data.map(g => g.images.downsized_large.url)
    AppState.gifs = gifs
  }

  async search(formData) {
    console.log('searching for', formData)
    const res = await giphyApi.get('search', {
      params: { q: formData.search }
    });
    console.log('search', res.data)
    const gifs = res.data.data.map(g => g.images.downsized_large.url)
    AppState.gifs = gifs
  }


}

export const giphysService = new GiphysService()