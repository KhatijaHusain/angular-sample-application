import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle = 'Product Detail';
product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
                'productId': id,
                'productName': 'Foschini Exclusive',
                'productCode': 'a-600',
                'productPrice': 3500,
                'productImage' : './assets/Images/purse6.jpg',
                'productRating': 3

    }
  }

}
