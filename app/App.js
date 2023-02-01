import { SnacksController } from "./Controllers/SnacksControllers.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  snacksController = new SnacksController()
}

window["app"] = new App();
