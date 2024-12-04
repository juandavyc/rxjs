// switchMap
// permite cambiar a un nuevo observable, cada vez que se
// emite un valor de un observable

import { debounce, debounceTime, delay, filter, fromEvent, interval, map, Observable, of, startWith, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.body;

const input = document.createElement('input');
body.appendChild(input);

const button = document.createElement('button');
button.textContent = "startWith(0)";
body.appendChild(button);

const keyupInput$ = fromEvent<KeyboardEvent>(input, 'keyup');

const clickButton$ = fromEvent<MouseEvent>(button, 'click')


const url = 'https://httpbin.org/delay/1?arg=';




const searchApi = (value: string): Observable<string> => {

    // console.log('Buscado: ', value)
    return of(`Buscado: ${value}`).pipe(
        delay(1000)
    );
}


clickButton$.pipe(
    startWith(0),
    switchMap(() => interval(1000))
).subscribe(data => console.log('sub', data));


keyupInput$.pipe(
    debounceTime(500),
    map<KeyboardEvent, string>(({ target }) => target['value']),
    filter<string>(value => value.length > 2),
    // switchMap(value => ajax.getJSON(url + value)) with url
    switchMap(searchApi)
).subscribe(data => console.log('sub', data));


