import { nanoid } from "nanoid";

export class Demo {
  constructor(imgSrc, price, name, title) {
    this.id = nanoid();
    this.imgSrc = imgSrc;
    this.price = price;
    this.name = name;
    this.title = title;
  }
}
