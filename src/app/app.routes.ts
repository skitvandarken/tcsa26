import { Routes } from '@angular/router';


export const routes: Routes =[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
  },
  {
    path: 'home', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),

  },
  // Remove the old standalone routes that are now under admin
  // 'start', 'devices', 'keys', 'nodes', 'traffic', 'download', 'faq', 'support' are now children of 'admin'
];