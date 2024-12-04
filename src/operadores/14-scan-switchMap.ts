import { delay, exhaustMap, fromEvent, interval, scan, startWith, switchMap } from "rxjs";


const buttonReset = document.createElement('button');

buttonReset.innerHTML = 'Reset';

const body = document.body;

body.append(buttonReset);


const interval$ = interval(1000).pipe(
    scan((acc,cur)=>{
        return acc+cur;
    },0)    
)

const buttonReset$ = fromEvent<MouseEvent>(buttonReset,'click').pipe(
    switchMap(()=>interval$.pipe(startWith(0)))
)


buttonReset$.subscribe(console.log)
