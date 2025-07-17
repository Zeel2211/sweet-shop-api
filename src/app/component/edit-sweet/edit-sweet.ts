import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetShopService, sweet } from '../../Service/sweet-shop-service/sweet-shop-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-sweet',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-sweet.html'
})
export class EditSweet implements OnInit {
  sweet: sweet = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sweetService: SweetShopService
  ) {}

  ngOnInit(): void {
    const sweetId = Number(this.route.snapshot.queryParamMap.get('id'));
    if (sweetId) {
      this.sweetService.getSweets().subscribe((data) => {
        const found = data.find((s) => s.id === sweetId);
        if (found) this.sweet = found;
      });
    }
  }

  updateSweet() {
    if (this.sweet.id) {
      this.sweetService.updateSweet(this.sweet.id, this.sweet).subscribe({
        next: () => {
          alert('Sweet updated successfully!');
          this.router.navigate(['/admin/dashboard']);
        },
        error: (err) => console.error('Update failed:', err)
      });
    }
  }
}
