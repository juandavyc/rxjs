import { asyncScheduler, debounceTime, filter, fromEvent, map, throttleTime } from "rxjs";

/*
* restringe a milisegundos cada peticion, pero se puede capturar
* el inicial o final, con leading o trailing
*
*/
// const clickDocument$ = fromEvent<MouseEvent>(document, 'click');

// // lo restringe a que cada segundo se  pueda enviar la peticiuon
// clickDocument$.pipe(
   
//     map(({ x, y }) => ({ x, y })),
//     filter(({ x, y }) => x <= 500),
// ).subscribe(console.log);


const input = document.createElement('input');
document.body.appendChild(input);

const keyInput$ = fromEvent<KeyboardEvent>(input, 'keyup');

keyInput$.pipe(
    throttleTime(1000, asyncScheduler,{
        leading:false,
        trailing:true
    }),
    map((event:KeyboardEvent) => event.target['value'])
)

.subscribe(value => {
    console.log(value); // This will capture and print both leading and trailing values
});


