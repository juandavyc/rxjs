import { of } from "rxjs";

// of crea un observable que emite los valores pasados como argumentos, uno por uno, y luego completa.
// Es útil cuando tienes uno o más valores que deseas emitir de manera secuencial


const obs$ = of([1,2],{a:1,b:2}, function(){}, Promise.resolve(true));

console.log('Inicio obs');
obs$.subscribe({
    next: (value)=>{console.log('next',value)},
    error:()=>{},
    complete:()=>{console.info('Complete')}
})
console.log('Fin obs');