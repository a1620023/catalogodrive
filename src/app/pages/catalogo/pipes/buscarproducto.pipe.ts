import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarproducto'
})
export class BuscarproductoPipe implements PipeTransform {

  // metodo transform que acepta los parametros de busqueda ----> agrs=varios argumentos
  transform(value: any, arg: any): unknown {
    if (arg === '' || arg.length < 3) return value;
    const resultadoBuscar = []
    for (const productos of value) {
      if (productos.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log('sips')
        // guardamos el resultado productos en el array
        resultadoBuscar.push(productos);
      }      
    }
    return resultadoBuscar;
  }

}
