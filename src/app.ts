import express from 'express';
import {FactoryClient} from "./creational-patterns/factory-method/client";
import {CreatorFisrt} from "./creational-patterns/factory-method/creator-fisrt";
import {CreatorSecond} from "./creational-patterns/factory-method/creator-second";
const app = express();
const port = 3000;

app.get('/factory', (req, res) => {
  const factory = new FactoryClient();
  const productFirst = factory.runCode(new CreatorFisrt());
  const productSecond = factory.runCode(new CreatorSecond());
  res.send(productFirst + '<br />' + productSecond);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

