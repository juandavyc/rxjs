import { interval, fromEvent, from, takeUntil, tap, skip } from 'rxjs';


const button = document.createElement('button');
button.textContent = "Detener timer"
document.body.appendChild(button);

const counter$ = interval(1000);
const clickButton$ = fromEvent<MouseEvent>(button, 'click')

.pipe(
    tap(()=>console.log('tap before skip')),
    skip(1), // se ejecute en la 2da emision ej: 0,1 = 2 0
    tap(()=>console.log('tap after skip')),
)


counter$.pipe(
    takeUntil(clickButton$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
})