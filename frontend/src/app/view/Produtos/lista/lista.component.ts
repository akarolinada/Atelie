import { ProdutoService } from 'src/app/Services/produto.service';
import { ProdutoModel } from './../../../Model/produto-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
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
