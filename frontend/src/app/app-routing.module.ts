import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './view/Produtos/lista/lista.component';
import { VitrineComponent } from './view/Produtos/vitrine/vitrine.component';
import { AddProdutoComponent } from './view/Produtos/add-produto/add-produto.component';

const routes: Routes = [
  { path: '', redirectTo: '/vitrine', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'vitrine', component: VitrineComponent },
  { path:'add-produto',component:AddProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
