export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.nickname = data.nickname
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    // this.id = data.id
    // this.opened = data.opened
    // this.profileIdsOpened = data.profileIdsOpened
    // this.profilesOpened = data.profilesOpened
    this.url = data.url
    this.tag = data.tag
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.title = data.title
    this.type = data.type
  }

  get AccountCardTemplate() {
    return /*html*/`
    <div class="account-details text-center mb-2">
        <img class="rounded-circle profile-picture" src="${this.picture}" alt="${this.name}">
        <p class="fs-3"> <i class="mdi mdi-account"></i> <b>${this.displayName}</b></p>
    </div>
    `
  }

  get AccountFormTemplate() {
    return /*html*/`
    <form onsubmit="app.AccountController.updateAccount()">
      <div class="text-start">
        <div>
          <label for="name">Name:</label>
          <input type="text" class="form-control" required name="name" value="${this.name}">
        </div>
        <div>
          <label for="picture">Picture:</label>
          <input type="url" class="form-control" required name="picture" placeholder="picture" value="${this.picture}">
        </div>
        <div>
          <button type="submit" class="btn btn-primary w-100 mt-2">Update Account</button>
        </div>
      </div>
    </form>
    `
  }

  get displayName() {
    return this.nickname || this.name
  }

  // get gifTemplate() {
  //   return
  //   ` <div class="col">
  //       <div class="card m-3 border border-3 border-primary">
  //         <img class="text-center rounded-4 border border-solid border-dark mt-1" src="${this.url}" alt="a gif: ${this.title}">
  //               <p class="text-center pt-2">${this.title}</p>
  //       </div>
  //     </div>`
  // }



}