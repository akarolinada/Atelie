package atelie.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import atelie.backend.model.Produto;
import atelie.backend.repository.ProdutoRepository;

@RestController
@RequestMapping("/atelie")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping("/produtos")
	public List<Produto> getAllProdutos(){
		return produtoRepository.findAll();
	}

}
