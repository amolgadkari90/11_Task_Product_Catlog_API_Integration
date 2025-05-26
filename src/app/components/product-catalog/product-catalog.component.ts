import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {

   products: Product[] = [];

   showProducts(){
    
   }
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: () => this.products = []
    });
  }

}
