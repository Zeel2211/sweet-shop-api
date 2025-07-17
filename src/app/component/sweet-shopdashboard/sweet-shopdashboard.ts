import { Component, OnInit } from '@angular/core';
import {
  sweet,
  SweetShopService,
} from '../../Service/sweet-shop-service/sweet-shop-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sweet-shopdashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './sweet-shopdashboard.html',
  styleUrl: './sweet-shopdashboard.css',
})
export class SweetShopdashboard implements OnInit {
  sweets: sweet[] = [];

  constructor(private sweetService: SweetShopService, private router: Router) {}

  ngOnInit(): void {
    this.loadSweets();
  }

  loadSweets() {
    this.sweetService.getSweets().subscribe({
      next: (data) => {
        this.sweets = data;
      },
      error: (err) => {
        console.error('Error fetching sweets:', err);
      },
    });
  }

  viewDetails(sweet: sweet) {
    this.router.navigate(['/user/details'], { state: { sweet } });
  }
}
