import { Component } from '@angular/core';
import { SweetShopService, sweet } from '../../Service/sweet-shop-service/sweet-shop-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-sweet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-sweet.html',
})
export class AddSweet {
  newSweet: sweet = {
    name: '',
    category: '',
    price: 0,
    quantity: 0,
    image: '',
  };

  constructor(private sweetService: SweetShopService) {}

  addSweet(): void {
    if (
      this.newSweet.name &&
      this.newSweet.category &&
      this.newSweet.price > 0 &&
      this.newSweet.quantity > 0
    ) {
      this.sweetService.addSweet(this.newSweet).subscribe({
        next: (res) => {
          alert('Sweet added successfully!');
          this.newSweet = {
            name: '',
            category: '',
            price: 0,
            quantity: 0,
            image: '',
          };
        },
        error: (err) => {
          console.error('Error adding sweet:', err);
          alert('Failed to add sweet.');
        },
      });
    } else {
      alert('Please fill in all fields properly.');
    }
  }
}
