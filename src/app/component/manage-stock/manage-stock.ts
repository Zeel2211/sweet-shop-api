import { Component } from '@angular/core';
import { SweetShopService } from '../../Service/sweet-shop-service/sweet-shop-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-stock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-stock.html',
})
export class ManageStock {
  sweetId: number = 0;
  quantity: number = 0;

  constructor(private sweetService: SweetShopService) {}

  updateStock(): void {
    if (this.sweetId && this.quantity > 0) {
      this.sweetService.restockSweet(this.sweetId, this.quantity).subscribe({
        next: (res) => {
          alert('Sweet restocked successfully!');
          this.sweetId = 0;
          this.quantity = 0;
        },
        error: (err) => {
          console.error('Restock error:', err);
          alert('Failed to restock sweet.');
        },
      });
    } else {
      alert('Please enter a valid ID and quantity.');
    }
  }
}
