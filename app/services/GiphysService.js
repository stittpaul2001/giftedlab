import { AppState } from "../AppState.js";
import { api, giphyApi } from "./AxiosService.js";


class GiphysService {

  async search(query) {
    console.log('search')
    const response = await giphyApi.get('search', {
      params: { q: query }
    });
    console.log('search', response.data)
    const search = response.data.map(data => new Response(data))

  }


}

export const giphysService = new GiphysService()