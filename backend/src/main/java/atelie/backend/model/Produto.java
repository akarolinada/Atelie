package atelie.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produtos")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "prod_nome")
	private String prod_nome;
	
	@Column(name = "prod_valor")
	private String prod_valor;
	
	@Column(name = "prod_img")
	private String prod_img;
	
	public Produto() {
		
	}
	
	public Produto(String prod_nome, String prod_valor, String prod_img) {
		super();
		this.prod_nome = prod_nome;
		this.prod_valor = prod_valor;
		this.prod_img = prod_img;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProd_nome() {
		return prod_nome;
	}
	public void setProd_nome(String prod_nome) {
		this.prod_nome = prod_nome;
	}
	public String getProd_valor() {
		return prod_valor;
	}
	public void setProd_valor(String prod_valor) {
		this.prod_valor = prod_valor;
	}
	public String getProd_img() {
		return prod_img;
	}
	public void setProd_img(String prod_img) {
		this.prod_img = prod_img;
	}
	
	

}
