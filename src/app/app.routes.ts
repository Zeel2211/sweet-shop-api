import { Routes } from '@angular/router';
import { App } from './app';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';
import { Login } from './component/login/login';
import { EditSweet } from './component/edit-sweet/edit-sweet';
import { Dashboard } from './component/dashboard/dashboard';
import { ManageStock } from './component/manage-stock/manage-stock';
import { AddSweet } from './component/add-sweet/add-sweet';
import { SweetDetail } from './component/sweet-detail/sweet-detail';
import { SweetShopdashboard } from './component/sweet-shopdashboard/sweet-shopdashboard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'admin',
    component: Admin,
    children: [
      {
        path: 'editSweet',
        component: EditSweet,
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'manageStock',
        component: ManageStock,
      },
      {
        path: 'addSweet',
        component: AddSweet,
      },
    ],
  },
  {
    path: 'user',
    component: User,
    children:[
      {path:'dashboard',component:SweetShopdashboard},
      { path: 'details', component: SweetDetail }
    ]
  },
];
