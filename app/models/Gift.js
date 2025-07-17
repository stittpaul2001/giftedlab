

export class Gift {
  constructor(data) {
    this.id = data.id
    this.opened = data.opened
    this.profileIdsOpened = data.profileIdsOpened
    this.profilesOpened = data.profilesOpened
    this.url = data.url
    this.tag = data.tag

  }

  get giftTemplate() {
    return `
            <div onclick="app.giftsController.openGifts('${this.id}')" role="button" class="col-4">
              <div class="card m-3 border border-3 border-primary">
                <img class="text-center rounded-4 border border-solid border-dark mt-1" src="${this.url}" alt="a gif: ${this.tag}">
                <p class="text-center pt-2">${this.tag}</p>
              </div>
            </div>`
  }

}