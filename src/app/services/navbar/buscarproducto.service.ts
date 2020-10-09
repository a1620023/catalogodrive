import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarproductoService {

  constructor() { }

  buscarProducto: string
  private enviarBusquedajeSubject = new Subject<string>();
  enviarBusquedaObservable = this.enviarBusquedajeSubject.asObservable();
  
  enviarBusqueda(buscarProducto: string){
    this.buscarProducto = buscarProducto;
    this.enviarBusquedajeSubject.next(buscarProducto);
  }
}
