import express from 'express';
import {FactoryClient} from "./creational-patterns/factory-method/client";
import {CreatorFisrt} from "./creational-patterns/factory-method/creator-fisrt";
import {CreatorSecond} from "./creational-patterns/factory-method/creator-second";
import {Client} from "./creational-patterns/abstract-factory/client";
import {AppFirst} from "./creational-patterns/abstract-factory/app-first";
import {AppSecond} from "./creational-patterns/abstract-factory/app-second";
const app = express();
const port = 3000;

app.get('/factory', (req, res) => {
  const factory = new FactoryClient();
  const productFirst = factory.runCode(new CreatorFisrt());
  const productSecond = factory.runCode(new CreatorSecond());
  res.send(productFirst + '<br />' + productSecond);
});

app.get('/abstract', (req, res) => {
  const appFirst = new Client(new AppFirst())
  const appSecond = new Client(new AppSecond())

  res.send(appFirst.createProduct() + '<br />' + appFirst.createDocument()  + '<br />' + appSecond.createProduct() + '<br />' + appSecond.createDocument())
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

