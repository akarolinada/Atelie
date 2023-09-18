import { Component } from '@angular/core';
import { ProdutoModel } from 'src/app/Model/produto-model';
import { ProdutoService } from 'src/app/Services/produto.service';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {

  produtos?: ProdutoModel[];

  constructor(private produtosService:ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos(){
    this.produtosService.getProdutos().subscribe(data => {
      this.produtos = data;
    })
  }

}
