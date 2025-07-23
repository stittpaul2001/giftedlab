import { AppState } from "../AppState.js"


export class Gift {
  constructor(data) {
    this.id = data.id
    this.opened = data.opened
    this.profileIdsOpened = data.profileIdsOpened
    this.profilesOpened = data.profilesOpened
    this.url = data.url
    this.tag = data.tag
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.title = data.title
    this.type = data.type
  }

  get giftTemplate() {
    return `
            <div onclick="app.giftsController.openGifts('${this.id}')" role="button" class="col-4">
              <div class="card gift-card m-3 border border-3 border-primary">
                <img class="text-center rounded-4 border border-solid border-dark mt-1 gift-card-image" src="${this.url}" alt="a gif: ${this.tag}">
                <p class="text-center pt-2">${this.tag}</p>
                <div class="text-center">
                <button class="btn btn-outline-success mb-2 text-dark" type="buton">Open</button>
                ${this.deleteButton}
                </div>
              </div>
            </div>
              `
  }


  get deleteButton() {
    const account = AppState.account
    if (account && account.id == this.creatorId) {
      return ` <button onclick="app.giftsController.deleteGift('${this.id}')" class="btn btn-outline-danger mb-2 text-dark" type="button">Delete</button>`
    }

    return '<button class="btn btn-ouline-danger mb-2 disabled text-dark" type="button">Delete</button>'
  }







}