import { of, take } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
.pipe(
    take(3)
)
.subscribe({
    next: val => console.log('next: ', val), 
    complete: () => console.log('complete'),
})