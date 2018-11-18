import { Injectable } from '@angular/core'
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): IProduct[] {

        return[
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
            },
            {
                'productId': 4,
                'productName': 'Handmade Exclusive',
                'productCode': 'a-400',
                'productPrice': 3000,
                'productImage' : './assets/Images/purse4.jpg',
                'productRating': 5
            }
        ];

    }
}
