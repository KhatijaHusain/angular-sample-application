import {Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.less']
})

export class ProductListComponent implements OnInit {
title = 'Product List';
showImage = true;
_listfilter: string;

get listFilter(): string {
    return this._listfilter;

}
set listFilter(value: string) {
    this._listfilter = value;
    this.filteredProducts = this._listfilter ? this.performFilter(this.listFilter) : this.products;
}


filteredProducts: IProduct[];
products: IProduct[] = [
    {
        'productId': 1,
        'productName': 'Celini Latest Collection',
        'productCode': 'a-100',
        'productPrice': 2000,
        'productImage' : './assets/Images/purse1.jpg',
        'productRating': 4
    },
    {
        'productId': 2,
        'productName': 'Celini Latest Collection',
        'productCode': 'a-200',
        'productPrice': 2000,
        'productImage' : './assets/Images/purse2.jpg',
        'productRating': 2
    },
    {
        'productId': 3,
        'productName': 'Handmade Exclusive',
        'productCode': 'a-300',
        'productPrice': 3000,
        'productImage' : './assets/Images/purse3.jpg',
        'productRating': 5
    }
];

constructor() {
    this.filteredProducts = this.products;
}

ngOnInit(): void {
 console.log('In Onit');
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
