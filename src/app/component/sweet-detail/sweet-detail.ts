import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sweet } from '../../Service/sweet-shop-service/sweet-shop-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sweet-detail',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './sweet-detail.html',
  styleUrl: './sweet-detail.css'
})
export class SweetDetail implements OnInit {
  sweet: sweet | undefined;
  quantity: number = 1;
  totalBill: number = 0;

  constructor(private location: Location) {}

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation && navigation.sweet) {
      this.sweet = navigation.sweet;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    if (this.sweet) {
      this.totalBill = this.quantity * this.sweet.price;
    }
  }

  goBack() {
    this.location.back();
  }

  buySweet() {
    alert(`You purchased ${this.quantity} ${this.sweet?.name}(s) for ₹${this.totalBill}`);
  }
}
