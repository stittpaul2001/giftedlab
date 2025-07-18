import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"



class GiftsService {


  async addGift(formData) {
    const response = await api.post('api/gifts', formData)
    console.log('new gift', response.data)
    const newGift = new Gift(response.data)
    const gifts = AppState.gifts
    gifts.unshift(newGift)

  }



  async openGifts(giftsId) {
    const openGifts = AppState.gifts.find(gift => giftsId == giftsId)
    openGifts.opened = true
    const response = await api.put(`api/gifts/${giftsId}`, openGifts)
    console.log('here it is', response.data)
    const foundIndex = AppState.gifts.findIndex(gift => gift.id == giftsId)
    AppState.gifts.splice(foundIndex, 1, new Gift(response.data))
    AppState.emit('gifts')
  }



  async getGiftsList() {
    const response = await api.get('api/gifts')
    console.log('are there gifts in our response?', response.data)
    const newGift = response.data.map(gift => new Gift(gift))
    AppState.gifts = newGift
  }

}

export const giftsService = new GiftsService()