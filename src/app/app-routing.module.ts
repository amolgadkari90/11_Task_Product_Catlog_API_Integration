import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';

const routes: Routes = [
  { path: 'products', component: ProductCatalogComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Optional default

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
