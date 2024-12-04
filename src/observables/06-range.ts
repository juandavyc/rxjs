import { range, interval, Observable, map, take, Subscription } from 'rxjs';


const numbers = range(1, 10);

numbers.subscribe({
    next: console.log,
    complete: () => console.log('complete'),
});


const obs$: Observable<number> = interval(1000)
    .pipe(
        map(x => x + 1),
        take(10)
    );

const sub1$: Subscription = obs$.subscribe({
    next: console.log,
    complete: () => console.log('complete'),
});