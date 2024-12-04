import { distinct, distinctUntilChanged, from, Observable, of, tap } from "rxjs";

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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre) // tiene que estar ordenado
).subscribe({
    next: val => console.log('Valor:', val),
    complete: () => console.log('Completado')
});