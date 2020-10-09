import { BuscarproductoService } from './../../services/navbar/buscarproducto.service';
import { LaptopDell } from './../../interfaces/catalogo/laptop-dell.producto';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/catalogo/product.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  buscarProducto: string;

  constructor(
    private productService: ProductService,
    private servicioBuscarProducto: BuscarproductoService
  ) {  }

  carrito: number
  public products: Array<any> = []

  //buscarProducto = ''

  ngOnInit(): void {
    this.servicioBuscarProducto.enviarBusquedaObservable.subscribe(buscarproducto => {
      this.buscarProducto = buscarproducto;
    });
    this.productService.getProducts().subscribe((result: any) => {
      console.log(result)
      this.products = result
    },
    (error) => {
      console.error(error);
    });
  }
  
  mostrarBusqueda(productoBuscado: string) {
    this.servicioBuscarProducto.enviarBusqueda(productoBuscado);
  }

  addCart(){
    this.carrito = +1
  }
}
