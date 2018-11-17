import {Component} from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
title = 'Product List';
showImage = true;

products = [
    {
        'productId': 1,
        'productName': 'Celini Latest Collection',
        'productCode': 'a100',
        'productPrice': 2000,
        'productImage' : './assets/Images/purse1.jpg'
    },
    {
        'productId': 2,
        'productName': 'Celini Latest Collection',
        'productCode': 'a200',
        'productPrice': 2000,
        'productImage' : './assets/Images/purse2.jpg'
    },
    {
        'productId': 1,
        'productName': 'Handmade Exclusive',
        'productCode': 'a300',
        'productPrice': 3000,
        'productImage' : './assets/Images/purse3.jpg'
    }
];

toggleImage(): void {
this.showImage = !this.showImage;
}
}
