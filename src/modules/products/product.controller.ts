import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";

@Controller('products')
export class ProductController{

    constructor(private productService: ProductService){}

    @Get()
    getProducts(): ResponseData<Product[]> {
        try {
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post()
    createProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(@Param('id') id: number): ResponseData<Product>{
        try {
            return new ResponseData<Product>(this.productService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(): ResponseData<string>{
        try {
            return new ResponseData<string>(this.productService.updateProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(): ResponseData<string>{
        try {
            return new ResponseData<string>(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
};