import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

declare global {
  interface Window {
    bootstrap: any;
  }
}

@Component({
  selector: 'app-dashboard-e-commerce',
  templateUrl: './dashboard-e-commerce.component.html',
  styleUrls: ['./dashboard-e-commerce.component.css']
})
export class DashboardECommerceComponent implements OnInit {
  public data: any;
  public productData: any = [];
  productFilter :String = '';
  sortOrder: string = 'asc';  
  selectedProduct: any = null;  // Store the selected product for the modal
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData() {
    this.http.get('https://fakestoreapi.in/api/products')
      .pipe(
        finalize(() => {
         
        })
      )
      .subscribe(
        (response: any) => {
          this.data = response;
          this.productData = response.products;
          console.log('Data fetched successfully:', this.data);
        },
        (error) => {
            console.log(error,'something went wrong!!');
        }
      );
  }
  filterProducts() {
    if (this.productFilter.length > 0) {
      this.productData = this.productData.filter((product) =>
        product.title.toLowerCase().includes(this.productFilter.toLowerCase()) ||
        product.category.toLowerCase().includes(this.productFilter.toLowerCase()) ||
        product.brand.toLowerCase().includes(this.productFilter.toLowerCase())
      );
    } else {
      this.productData = this.data.products;
    }
      // After filtering, reapply the sort order
      this.sortProducts(this.sortOrder);
  }
  // Sort the products by price
  sortProducts(order: string) {
    if (order === 'asc') {
      this.productData.sort((a, b) => a.price - b.price);  // Low to High
    } else if (order === 'desc') {
      this.productData.sort((a, b) => b.price - a.price);  // High to Low
    }
    this.productData = [...this.productData]; 
  }

  // Change sort order based on user selection
  onSortChange(order: string) {
    this.sortOrder = order;
    this.sortProducts(order);
  }
  // Open the modal with selected product
  openModal(product: any) {
    this.selectedProduct = product;
    // Trigger Bootstrap modal open manually
    const modal = new window.bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
  }
}
