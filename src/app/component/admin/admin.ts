import { Component, OnInit } from '@angular/core';
import {
  sweet,
  SweetShopService,
} from '../../Service/sweet-shop-service/sweet-shop-service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin{

}
