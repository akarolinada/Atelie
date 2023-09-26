import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from 'src/app/Model/produto-model';
import { ProdutoService } from 'src/app/Services/produto.service';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();

  constructor(private produtoService: ProdutoService,private router: Router) {}

  ngOnInit(): void {

  }

  saveProduto(){
    this.produtoService.createProduto(this.produto).subscribe(data =>{
      console.log(data);
      this.goToProdutosVitrine();
    },
    error => console.log(error))
  }

  goToProdutosVitrine(){
    this.router.navigate(['/vitrine']);
  }

  onSubmit(){
    console.log(this.produto);
    this.saveProduto();

  }

}
