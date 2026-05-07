import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.Register),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password').then(m => m.ForgotPassword),
  },
  {
    path: 'home', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),

  },
  {
    path: 'team', 
    loadComponent: () => import('./pages/team/team').then(m => m.Team),
  },
  {
    path: 'meeting', 
    loadComponent: () => import('./pages/meeting/meeting').then(m => m.Meeting),
  },
  {
    path: 'services/dia', 
    loadComponent: () => import('./pages/services/dia/dia').then(m => m.Dia),
  },
  {
    path: 'services/ip-transit', 
    loadComponent: () => import('./pages/services/ip-transit/ip-transit').then(m => m.IpTransit),
  },
  {
    path: 'services/metro-connect', 
    loadComponent: () => import('./pages/services/metro-connect/metro-connect').then(m => m.MetroConnect),
  },
  {
    path: 'services/remote-peering', 
    loadComponent: () => import('./pages/services/remote-peering/remote-peering').then(m => m.RemotePeering),
  },
  {
    path: 'services/wholesale-dia', 
    loadComponent: () => import('./pages/services/wholesale-dia/wholesale-dia').then(m => m.WholesaleDia),
  },
  {
    path: 'services/iplc', 
    loadComponent: () => import('./pages/services/iplc/iplc').then(m => m.Iplc),
  },
  {
    path: 'services/wholesale-remote-peering', 
    loadComponent: () => import('./pages/services/wholesale-remote-peering/wholesale-remote-peering').then(m => m.WholesaleRemotePeering),
  },
  {
    path: 'services/gdi', 
    loadComponent: () => import('./pages/services/gdi/gdi').then(m => m.Gdi),
  },
  {
    path: 'services/co-location', 
    loadComponent: () => import('./pages/services/co-location/co-location').then(m => m.CoLocation),
  },
  {
    path: 'services/managed-services', 
    loadComponent: () => import('./pages/services/managed-services/managed-services').then(m => m.ManagedServices),
  },
  {
    path: 'services/smart-hands', 
    loadComponent: () => import('./pages/services/smart-hands/smart-hands').then(m => m.SmartHands),
  },
  {
    path: 'services/remote-support', 
    loadComponent: () => import('./pages/services/remote-support/remote-support').then(m => m.RemoteSupport),
  },
  {
    path: 'network/global', 
    loadComponent: () => import('./pages/network/global/global-network').then(m => m.GlobalNetwork),
  },
  {
    path: 'network/infrastructure', 
    loadComponent: () => import('./pages/network/infrastructure/infrastructure').then(m => m.Infrastructure),
  },
  {
    path: 'network/regional', 
    loadComponent: () => import('./pages/network/regional/regional-coverage').then(m => m.RegionalCoverage),
  },
  {
    path: 'network/certifications', 
    loadComponent: () => import('./pages/network/certifications/certifications').then(m => m.Certifications),
  },
  {
    path: 'network/assets', 
    loadComponent: () => import('./pages/network/assets/on-net-assets').then(m => m.OnNetAssets),
  },
  {
    path: 'network/ixps', 
    loadComponent: () => import('./pages/network/infrastructure/ixps').then(m => m.Ixps),
  },
  {
    path: 'network/pops', 
    loadComponent: () => import('./pages/network/infrastructure/pops').then(m => m.Pops),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
  },
  {
    path: 'network/peering', 
    loadComponent: () => import('./pages/network/infrastructure/peering').then(m => m.Peering),
  },
  // Remove the old standalone routes that are now under admin
  // 'start', 'devices', 'keys', 'nodes', 'traffic', 'download', 'faq', 'support' are now children of 'admin'
];