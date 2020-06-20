import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {
  }

  @Get()
 async getProducts(): Promise<Product[]> {
    const products =await this._productService.getProducts();
    return  products;
  }

  @Post()
  insertProduct(@Body('product') product: Product): string {
    return this._productService.addProduct(product);
  }

  @Delete(':name')
  deleteProduct(@Param('name') name: string): string {
    return this._productService.deleteProduct(name);
  }

}
