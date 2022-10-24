import express from 'express';
import {FactoryClient} from "./creational-patterns/factory-method/client";
import {CreatorFisrt} from "./creational-patterns/factory-method/creator-fisrt";
import {CreatorSecond} from "./creational-patterns/factory-method/creator-second";
import {AbstractClient} from "./creational-patterns/abstract-factory/client";
import {AppFirst} from "./creational-patterns/abstract-factory/app-first";
import {AppSecond} from "./creational-patterns/abstract-factory/app-second";
import {BuilderClient} from "./creational-patterns/builder/client";
import {ProductBuilder} from "./creational-patterns/builder/product-builder";
const app = express();
const port = 3000;

app.get('/factory', (req, res) => {
  const factory = new FactoryClient();
  const productFirst = factory.runCode(new CreatorFisrt());
  const productSecond = factory.runCode(new CreatorSecond());
  res.send(productFirst + '<br />' + productSecond);
});

app.get('/abstract', (req, res) => {
  const appFirst = new AbstractClient(new AppFirst())
  const appSecond = new AbstractClient(new AppSecond())

  res.send(appFirst.createProduct() + '<br />' + appFirst.createDocument()  + '<br />' + appSecond.createProduct() + '<br />' + appSecond.createDocument())
})

app.get('/builder', (req, res) => {
  const builder = new ProductBuilder();
  const client = new BuilderClient(builder);
  client.createProduct('product 1', 10, 15)
  res.send(builder.getProduct())
})


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

