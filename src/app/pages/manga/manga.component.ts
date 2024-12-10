import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ProductModel } from '../../models/productModel';
import { CommonModule, NgFor } from '@angular/common';
import { MangaService } from '../../services/manga-service/manga.service';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './manga.component.html',
  styleUrl: './manga.component.css'
})
export class MangaComponent {
  productos: ProductModel[] = [];

  productsInShoppingCart: ProductModel[] = [];

  constructor(private mangaService: MangaService, private router: Router,) { }

  // Metodo onInit se ejecuta al cargar componente, justo despues del constructor de la clase
  ngOnInit(): void {
    this.mangaService.getProducts().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  // Metodo de navegación, para enviar productos al carro de compras
  goToShoppingCart() {

    const navigationExtras: NavigationExtras = {
      state: {
        data: this.productsInShoppingCart
      }
    };

    this.router.navigate(['/carro-de-compras'], navigationExtras);
  }

  // Metodo para agregar productos al carro
  addToCart(product: ProductModel) {

    this.productsInShoppingCart.push(product);

    alert('Producto añadido al carro!')
  }
}
