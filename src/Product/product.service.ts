import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { MailModule, MailService } from 'mailmoduleswisa/dist';

@Injectable()
export class ProductService{
  constructor(private _mailService:MailService) {
  }
products:Product[] = [];

 async getProducts() {
    await this._mailService.sendMail({
      subject:"we can get the products!",
      to:"dor20201@cs.colman.ac.il",
      content:this.products.map(p=>p.name).toString()
    })
    return [...this.products];
  }

  addProduct(product: Product) {
    this.products.push(product);
    return "Done :)"
  }

  deleteProduct(name: string) {
    this.products = this.products.filter(product => product.name !=name);
    return "Product has been deleted";
  }
}
