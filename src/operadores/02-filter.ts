import { filter, from, fromEvent, map, of, range, tap } from "rxjs";

/*
* Busca que elementos deja o no pasar
*/
// range(1,10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log)

range(1, 10).pipe(
    filter((value, index) => {
        console.log('index: ', index, 'value: ', value);
        return value % 2 === 1;
    })
)//.subscribe(console.log)

interface Character {
    name: string;
    type: string;
}
const characters: Character[] = [
    {
        name: 'Batman',
        type: 'Hero'
    }, {
        name: 'Joker',
        type: 'Anti-hero'
    },
    {
        name: 'Robin',
        type: 'Hero'
    }
];

from(characters).pipe(
    filter(hero => hero.type == 'Hero')
).subscribe(console.log)



const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map(k => k.key),
    filter(key => key == 'Enter')
).subscribe(console.log)