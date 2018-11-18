import {Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.less']
})

export class ProductListComponent implements OnInit {
title = 'Product List';
showImage = true;
_listfilter: string;
filteredProducts: IProduct[];
products: IProduct[];

get listFilter(): string {
    return this._listfilter;

}
set listFilter(value: string) {
    this._listfilter = value;
    this.filteredProducts = this._listfilter ? this.performFilter(this.listFilter) : this.products;
}

constructor(private productService: ProductService) {
}

ngOnInit(): void {
 console.log('In Onit');
 this.products = this.productService.getProducts();
 this.filteredProducts = this.products;
}


performFilter(filterValue: string): IProduct[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
                                product.productName.toLocaleLowerCase().indexOf(filterValue) !== -1);
}

toggleImage(): void {
this.showImage = !this.showImage;
}
}
