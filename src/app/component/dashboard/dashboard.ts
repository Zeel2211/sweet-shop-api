import { Component } from '@angular/core';
import { sweet, SweetShopService } from '../../Service/sweet-shop-service/sweet-shop-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  sweets: sweet[] = [];

  constructor(private sweetService: SweetShopService) {}

  ngOnInit(): void {
    this.loadSweets();
  }

  loadSweets() {
    this.sweetService.getSweets().subscribe({
      next: (data) => {
        this.sweets = data;
        console.log(this.sweets); // check the console!
      },
      error: (err) => {
        console.error('Error fetching sweets:', err);
      },
    });
  }
  deleteSweet(id: any) {
    const confirmation = confirm('Are you sure ?');
    if (confirmation) {
      this.sweetService.deleteSweet(Number(id)).subscribe({
        next: () => {
          alert('sweet deleted successfully');
          this.loadSweets();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
