import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoModel } from '../Model/produto-model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL = "http://localhost:8080/atelie"

  constructor(private httpClient: HttpClient) { }

  getProdutos():Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(`${this.baseURL}/produtos`);
  }


}
