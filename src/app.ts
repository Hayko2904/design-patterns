import express from 'express';
import {FactoryClient} from "./creational-patterns/factory-method/client";
import {CreatorFisrt} from "./creational-patterns/factory-method/creator-fisrt";
import {CreatorSecond} from "./creational-patterns/factory-method/creator-second";
import {AbstractClient} from "./creational-patterns/abstract-factory/client";
import {AppFirst} from "./creational-patterns/abstract-factory/app-first";
import {AppSecond} from "./creational-patterns/abstract-factory/app-second";
import {BuilderClient} from "./creational-patterns/builder/client";
import {ProductBuilder} from "./creational-patterns/builder/product-builder";
import { PrototypeClient } from './creational-patterns/prototype/client';
import { Persons } from './creational-patterns/prototype/persons';
import { Prototype } from './creational-patterns/prototype/prototype-interface';
import { Singleton } from './creational-patterns/singleton/singleton';

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

app.get('/prototype', (req, res) => {
  const personGroupFirst: Prototype = new Persons();
  const personGroupSecond: Prototype = new PrototypeClient().runCode(personGroupFirst);

  res.send(JSON.stringify(personGroupFirst) + '<br />' + JSON.stringify(personGroupSecond));
})

app.get('/singleton', (req, res) => {
    const singletonObjFirst = Singleton.getInstance();
    const singletonObjSecond = Singleton.getInstance();

    if (singletonObjFirst === singletonObjSecond) {
      res.send(JSON.stringify('singletonObjFirst === singletonObjSecond'));
    } else {
      res.send(JSON.stringify('singletonObjFirst !== singletonObjSecond'));
    }
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
