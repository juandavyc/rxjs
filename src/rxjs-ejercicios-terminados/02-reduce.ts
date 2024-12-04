import { filter, from, reduce, scan, skip, tap } from 'rxjs';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  // 1 2 3 5 6 7 8
  // 1 3 6 11 17 24 32
  from(datos).pipe(
    // tap((dato:any) => {
    //     console.log(isNaN(dato))
    // }),
    filter((dato:any) => !isNaN(dato)), // los que son numeros, 
   // filter(number => number!=6), // por joder
    scan((acc,cur)=>(acc+cur), 0), // por defectoe s 0
  
  ).subscribe(console.log)



})();

		