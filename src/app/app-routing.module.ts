import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'seller',
    loadChildren: () => import('./pages/seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./pages/market/market.module').then( m => m.MarketPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
