import { from } from 'rxjs';

// from crea un observable a partir de una estructura que es iterable (como un array, una promesa, un mapa, etc.) o incluso a partir de observables o promesas.
// Emite los valores de la estructura uno por uno hasta que todos los elementos se han emitido.
const obs$ = from(['a', 'b', 'c']);

// Suscripción
obs$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completado')
});