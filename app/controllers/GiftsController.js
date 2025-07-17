import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";



export class GiftsController {
  constructor() {
    console.log("Gifts Controller")

    AppState.on('user', this.getGiftList)
    AppState.on('gifts', this.drawGiftsCards)

  }

  drawGiftsCards() {
    const gifts = AppState.gifts
    let giftsContent = ''
    gifts.forEach(gift => giftsContent += gift.giftTemplate)
    const giftCardsElem = document.getElementById('listGifts')
    giftCardsElem.innerHTML = giftsContent
    console.log('listGifts')
  }

  async getGiftList() {
    try {
      await giftsService.getGiftsList()
    } catch (error) {
      console.error('could not get the gift list', error)
      // @ts-ignore
      Pop.error(error, 'could not get list of gifts')
    }
  }

  async openGifts(giftsId) {
    try {
      await giftsService.openGifts(giftsId)
    } catch (error) {
      console.error('could not open a gift!!!', error)

      // @ts-ignore
      Pop.error(error, 'could not open gift')
    }
  }

  async addGift() {
    try {
      event.preventDefault()
      console.log('submitting Gift!')
      const giftForm = event.target
      const formData = getFormData(giftForm)
      console.log('Form', formData)
      await giftsService.addGift(formData)
    } catch (error) {
      console.error('can not add Gift!', error)

      // @ts-ignore
      Pop.error(error, 'can not add Gift!')
    }
  }

}