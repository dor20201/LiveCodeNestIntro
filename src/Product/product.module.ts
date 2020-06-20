import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MailModule } from 'mailmoduleswisa/dist';


@Module({
  imports:[MailModule],
  controllers:[ProductController],
  providers:[ProductService]
})
export class ProductModule{}
