import { forkJoin, interval, of, take } from "rxjs";


const numeros$ = of(1,2,3,4,5); //5
const intervalo$ = interval(1000).pipe(take(4)); //3
const letras$ = of('a','b','c'); // c
const promesa$ = Promise.resolve('xPromise'); //xPromise

forkJoin({
    nume:numeros$,
    inte:intervalo$,
    letr:letras$,
    prom:promesa$,
}).subscribe(({nume, inte, letr,prom})=>{
    console.log('Number: ',nume);
    console.log('Interval: ',inte);
    console.log('Letter: ',letr);
    console.log('Promise: ',prom);
})