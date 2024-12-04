import { distinct, from, Observable, of, tap } from "rxjs";

const numeros$:Observable<number|string> = of(1, 2, 3, 4, 5, '5', 6, 6, 6, 7, 8, 9, '1', '3');

numeros$.pipe(
    distinct(),
    //tap(console.log)
).subscribe({
    next: val => console.log('Valor:', val),
    complete: () => console.log('Completado')
});


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes)
.pipe(
    distinct(p=>p.nombre)
)
.subscribe({
    next: val => console.log('Valor:', val),
    complete: () => console.log('Completado')
});