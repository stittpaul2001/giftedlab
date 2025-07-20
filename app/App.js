import { AuthController } from './controllers/AuthController.js';
import { GiftsController } from './controllers/GiftsController.js';
import { GiphysController } from './controllers/GiphysController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  giftsController = new GiftsController()

  giphysController = new GiphysController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
