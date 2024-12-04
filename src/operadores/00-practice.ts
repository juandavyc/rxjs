import { filter, fromEvent, interval, map, reduce, scan, take, tap } from "rxjs";


// const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

// keyup$.pipe(  
//     tap({
//         next:val=>console.log('tap before:',val)
//     }),
//     map(({key}) => key),
//     filter(key => key==='Enter'),
//     tap({
//         next:val=>console.log('tap after:',val)
//     })
// ).subscribe(console.log)


const numbers = Array.from(Array(5).keys());
const total = numbers.reduce((acc,cur)=>acc+cur,5);
console.log('total js:',total)

// 0 1 2 3 4
// 5 6 8 11 15


interval(1000).pipe(
    tap(console.log),
    take(5),
    //reduce((acc,cur)=>acc+cur,5)
    scan((acc,cur)=>acc+cur,5)
).subscribe((total)=>console.log('total rx: ',total))