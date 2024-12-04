//Comparta la fuente y reproduzca la cantidad especificada de emisiones al momento de la suscripción.
// cuando necesite valores anteriores
import { interval, take, shareReplay } from 'rxjs';
 
const shared$ = interval(2000).pipe(
  take(6),
  shareReplay(3)
);
 
shared$.subscribe(x => console.log('sub A: ', x));
shared$.subscribe(y => console.log('sub B: ', y));
 
setTimeout(() => {
  shared$.subscribe(y => console.log('sub C: ', y));
}, 11000);
 