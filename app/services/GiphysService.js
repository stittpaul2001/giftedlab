import { AppState } from "../AppState.js";
import { Gif } from "../models/Gif.js";
import { giphyApi } from "./AxiosService.js";


class GiphysService {




  async search(formData) {
    console.log('searching for', formData)
    const res = await giphyApi.get('search', {
      params: { q: formData.search }
    });
    console.log('search', res.data)
    const gifs = res.data.data.map(g => new Gif(g))
    AppState.gifs = gifs
    console.log('gifs in the appstate', AppState.gifs);
  }


}

export const giphysService = new GiphysService()