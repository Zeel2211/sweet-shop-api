import { Component, OnInit } from '@angular/core';
import { SweetShopService, sweet } from '../../Service/sweet-shop-service/sweet-shop-service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User{

}
