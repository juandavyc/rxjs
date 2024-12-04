import { interval, fromEvent, from, takeUntil } from 'rxjs';


const button = document.createElement('button');
button.textContent = "Detener timer"
document.body.appendChild(button);

const counter$ = interval(1000);
const clickButton$ = fromEvent<MouseEvent>(button, 'click');


counter$.pipe(
    takeUntil(clickButton$)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
})