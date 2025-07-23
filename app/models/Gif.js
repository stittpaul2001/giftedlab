

export class Gif {
  constructor(data) {

    this.id = data.id
    this.images = data.images.downsized.url
    this.title = data.title
    this.url = data.url
    this.original = data.images.original.url
    this.alt_text = data.alt_text
    this.type = data.type
    this.slug = data.slug
    this.import_datetime = data.import_datetime
    this.source = data.source
  }



  get gifTemplate() {
    return ` 
    
        <div class="card m-3 border border-3 border-primary">
          <img class="text-center rounded-4 border border-solid border-dark mt-1 ${this.id}" src="${this.images}" alt="a gif: ${this.title}">
                <p class="text-center pt-2">${this.title}</p>
                <div class="text-start mx-2 fw-bold mb-1">Copy URL: <span class="fw-normal">${this.original}</span>
        </div>
        </div>
    `
  }


}